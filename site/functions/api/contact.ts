/**
 * POST /api/contact — Cloudflare Pages Function.
 *
 * Status (Copperline fixture, Checkpoint 2+ correction round 3): code-complete,
 * wired live in ContactForm.astro's `action`, but FAILS CLOSED — see the
 * `env.RESEND_API_KEY` / `env.CONTACT_RECIPIENT` check below — until the
 * operator adds those two secrets in the Cloudflare Pages dashboard at QA.
 * Every submission today gets a graceful "please call us" response; nothing
 * crashes, nothing silently succeeds, nothing is sent anywhere.
 *
 * Response shape: because the site is `output: 'static'` (no server runtime
 * to read a redirect's query state), this function renders its own plain,
 * unstyled HTML directly rather than redirecting to a static confirmation
 * page. Deliberately NOT reusing site/src/styles/tokens.css values here —
 * duplicating hex tokens into a file outside Astro's CSS pipeline would be a
 * silent drift risk for a screen almost nobody sees. A cleaner 303-redirect-
 * to-dedicated-static-pages pattern is recorded as ROADMAP RM-002 for a
 * future factory-wide evaluation pass, not implemented here to avoid scope
 * creep on a fixture build.
 *
 * Rate limiting is intentionally NOT implemented in this file — see
 * site/README-DEPLOY.md "Contact form" section for why, and the required
 * operator-configured Cloudflare dashboard Rate Limiting Rule.
 */
import { contactFields, honeypotFieldName, type ContactFieldDef } from '../../src/lib/contact-fields';

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_RECIPIENT?: string;
}

const PHONE_DISPLAY = '(770) 555-0148';
const PHONE_HREF = 'tel:+17705550148';

function page(title: string, bodyHtml: string, status: number): Response {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>${title} — Copperline Plumbing</title>
</head>
<body style="font-family: sans-serif; max-width: 32rem; margin: 3rem auto; padding: 0 1rem; line-height: 1.5;">
${bodyHtml}
</body>
</html>`;
  return new Response(html, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

function successResponse(): Response {
  return page(
    'Message sent',
    `<h1>Got it — we'll call you back the next business morning.</h1>
<p><a href="/">Back to Copperline Plumbing</a></p>`,
    200,
  );
}

function failureResponse(): Response {
  return page(
    "Couldn't send that",
    `<h1>Something went wrong on our end.</h1>
<p>Please call us instead: <a href="${PHONE_HREF}">${PHONE_DISPLAY}</a>.</p>
<p><a href="/">Back to Copperline Plumbing</a></p>`,
    502,
  );
}

function validationFailureResponse(): Response {
  return page(
    "Couldn't send that",
    `<h1>We couldn't process that submission.</h1>
<p>Please check the form and try again, or call us instead: <a href="${PHONE_HREF}">${PHONE_DISPLAY}</a>.</p>
<p><a href="/">Back to Copperline Plumbing</a></p>`,
    400,
  );
}

/** Loose phone check — real-world formatting varies too much for a strict pattern. */
function looksLikePhone(value: string): boolean {
  const digitCount = (value.match(/\d/g) ?? []).length;
  return digitCount >= 7 && /^[\d()+\-\s]+$/.test(value);
}

function validateField(field: ContactFieldDef, formData: FormData): string | null {
  const raw = formData.get(field.name);
  const value = typeof raw === 'string' ? raw.trim() : '';

  if (field.required && value.length === 0) return `${field.name} is required`;
  if (value.length > field.maxLength) return `${field.name} exceeds max length`;
  if (field.name === 'phone' && value.length > 0 && !looksLikePhone(value)) return 'phone format invalid';

  return null;
}

/**
 * Only reject on a CLEARLY CONFLICTING Origin/Referer — never solely for
 * absent headers. Legitimate direct submissions, older browsers, and
 * privacy-extension users routinely omit both; rejecting on absence alone
 * would break real customers for no real anti-spam benefit. Real defenses
 * here are field validation, the honeypot, and the dashboard rate-limit
 * rule (see README-DEPLOY.md) — this check only catches obvious cross-site
 * spam that bothers to set a mismatched header.
 */
function hasConflictingOrigin(request: Request): boolean {
  const expectedHost = new URL(request.url).host;
  const origin = request.headers.get('Origin');
  const referer = request.headers.get('Referer');

  const candidate = origin ?? referer;
  if (!candidate) return false; // absent headers are never, by themselves, a rejection reason

  try {
    return new URL(candidate).host !== expectedHost;
  } catch {
    // Unparseable header — treat like absent rather than guessing.
    return false;
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (hasConflictingOrigin(request)) {
    return validationFailureResponse();
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return validationFailureResponse();
  }

  // Honeypot: real visitors never fill this. Respond exactly like success —
  // never signal detection back to the sender — but drop the submission.
  const honeypotValue = formData.get(honeypotFieldName);
  if (typeof honeypotValue === 'string' && honeypotValue.trim().length > 0) {
    return successResponse();
  }

  for (const field of contactFields) {
    const error = validateField(field, formData);
    if (error) {
      return validationFailureResponse();
    }
  }

  // Fail closed: no secrets configured yet (expected state until the
  // operator completes QA setup) — never crash, never falsely confirm.
  if (!env.RESEND_API_KEY || !env.CONTACT_RECIPIENT) {
    console.error('contact function misconfigured: missing RESEND_API_KEY or CONTACT_RECIPIENT');
    return failureResponse();
  }

  const name = String(formData.get('name') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const neighborhood = String(formData.get('neighborhood') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const bodyText = [
    `New contact form submission — Copperline Plumbing`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Neighborhood: ${neighborhood || '(not given)'}`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Copperline Plumbing website <onboarding@resend.dev>',
        to: env.CONTACT_RECIPIENT,
        subject: 'New contact form submission',
        text: bodyText,
      }),
    });

    if (!resendResponse.ok) {
      console.error('Resend delivery failed', resendResponse.status, await resendResponse.text());
      return failureResponse();
    }
  } catch (err) {
    console.error('Resend delivery threw', err);
    return failureResponse();
  }

  return successResponse();
};

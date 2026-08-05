# Cloudflare Pages — connection settings

For the operator to enter directly in the Cloudflare Pages dashboard when
connecting this repository. No credentials or secrets are handled here or by
the agent — Wrangler was not authenticated and no Cloudflare API token was
created.

This project is a **Phase C sunny-day fixture** (see `site/CLIENT_SPEC-sunny-copperline.md`
and `PROGRESS.md`), not a real client site. It belongs on the operator's own sandbox Cloudflare account,
not a client-owned one — the client-owned-hosting rule in `CLAUDE.md` applies
starting with the first real paid build.

## Build configuration
| Setting | Value |
|---|---|
| Framework preset | Astro (or "None" — either works; the settings below are explicit either way) |
| Root directory | `site` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `24` — also pinned in `site/.nvmrc` and `site/package.json` `engines.node`; set `NODE_VERSION=24` explicitly too (belt-and-suspenders, since preset detection of `.nvmrc` isn't always reliable) |
| Build system version | v2 (needed for Node 22+) |

## Environment variables (no secret values — none exist yet)
| Variable | Production environment | Preview environment |
|---|---|---|
| `PUBLIC_DEPLOY_ENV` | `production` | leave unset (defaults to preview/noindex) |
| `PUBLIC_SITE_URL` | the canonical production domain, once assigned | leave unset — falls back to a placeholder; harmless since preview is always noindex regardless of this value |
| `NODE_VERSION` | `24` | `24` |

`PUBLIC_DEPLOY_ENV` is the single switch that controls `<meta name="robots">`,
`robots.txt`, and whether the sitemap includes any pages (`src/lib/env.ts`,
`astro.config.mjs`, `src/pages/robots.txt.ts`). Getting Production wired to
`production` and Preview left as-is is the one setting that actually matters
for the noindex behavior — verify it live after connecting, per the operator's
instruction not to treat a local build as deployment evidence.

## Contact form (`functions/api/contact.ts`)
Code-complete as of Phase 3 assembly, wired live in `ContactForm.astro`'s
`action="/api/contact"`, but **fails closed** without secrets — every
submission today gets a graceful "please call us" response, never a crash,
never a false success, never an actual send. Two secrets required before
it becomes genuinely operational:

| Secret | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key. Fixture round: operator supplies a restricted test key at QA. Real client round: client-owned Resend account + verified sending domain (see `ROADMAP.md` RM-001), unless the contract defines a managed service. |
| `CONTACT_RECIPIENT` | Delivery inbox. Fixture round: operator's test inbox (the spec's `office@copperlineplumbing.example` is a reserved/non-deliverable placeholder domain, not usable as-is). |

Set both as **Cloudflare Pages secrets** (dashboard → Settings → Environment
variables → encrypt), never committed to the repo, never logged in plaintext.

**Rate limiting is not implemented in application code.** Pages Functions are
stateless edge functions with no in-repo place to persist a per-IP request
count without adding a KV or D1 dependency, which hasn't been approved for
this build. Before any real launch, the operator must add a Cloudflare
dashboard **Rate Limiting Rule** (Security → WAF → Rate limiting rules)
scoped to `POST /api/contact` (e.g., 5 requests per IP per 10 minutes). This
is a recorded Trust/Dependency Inventory item, not a code gap — see the
Phase 5 QA report for its PENDING status.

The function's success/failure responses are plain unstyled HTML rendered
directly by the function (not a redirect to a static page) — see the
comment at the top of `contact.ts` for why, and `ROADMAP.md` RM-002 for the
deferred alternative pattern.

Type-checking: `npm run check` (`astro check`) does **not** cover
`functions/` — it's scoped to `src/**/*` only. Use the dedicated
`npm run check:functions` (`tsc --noEmit -p tsconfig.functions.json`,
using the real `@cloudflare/workers-types` package) to type-check the
Function itself.

## Not yet configured (by design)
- No custom domain/DNS — this is a `*.pages.dev` preview until a real client
  build assigns one.

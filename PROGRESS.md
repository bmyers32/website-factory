---
Use: Current resumable state, not a log. OVERWRITE every field at session end. Git history is the record. If this file conflicts with the repository or spec, stop and reconcile.
---

# PROGRESS — Phase C Sunny-Day Fixture Run (Copperline Plumbing, via Paid Kickoff workflow)

**Overall status: IN PROGRESS.** Phases 0–5 complete for everything runnable
without the operator's QA-stage inputs. Full QA report with evidence at
`site/QA-REPORT-phase5.md`. **Run does not close until the deployed form
test succeeds under the operator's real secrets** (their explicit framing).
No deploy occurred. Not a real client — fictional fixture throughout.

## Repository State
- **Branch:** `main`
- **Spec in use:** `site/CLIENT_SPEC-sunny-copperline.md` (unchanged all session — corrections went to implementation, never the spec, per operator instruction).
- **Preview URL:** none — local build/preview/wrangler-dev only this session, no Cloudflare deploy.
- **Deployment state:** n/a.

## Phase State
- **Phase 0–2:** DONE, operator-approved at Checkpoint 2 (direction, tokens, concern map, copy — see prior session record and `site/phase1-content-draft.md`).
- **Phase 3 — Assembly:** DONE. `site/src/pages/index.astro` and `privacy.astro` (new) built from the approved outline; `404.astro` updated to real NAP data. Contact form field-set generalized via a shared contract (`src/lib/contact-fields.ts`) consumed by both the rendered form and the server handler. Cloudflare Pages Function (`functions/api/contact.ts`) built code-complete, wired live, fails closed without secrets.
- **Phase 4 — Baselines:** DONE. Accessibility/SEO/privacy/performance checks run and evidenced in the QA report; two real bugs found and fixed (see ledger below).
- **Phase 5 — QA report:** DONE. Full report at `site/QA-REPORT-phase5.md`, including a completed independent fresh-context critique (verdict: PARTIAL → both raised items resolved this session).

## Primitive-change ledger (for the eventual factory postmortem's reused-vs-replaced record)
- `Cta.astro` — added `size` variant (default|lg) and mono font-family. *Why:* directive 2 (larger call button) + directive 4 (CTA labels are mono). Reused shape, extended API.
- `Nav.astro` — mono font-family, explicit font-size, 44px-height links. *Why:* directive 4/5. No structural change.
- `SiteHeader.astro` — mono phone, mobile-only reorder (phone before nav, larger). *Why:* directive 2 (mobile phone prominence), CSS-only via flex `order`.
- `ContactBlock.astro` — mono phone class + padding for 24px touch target. *Why:* directive 4 + a real WCAG 2.5.8 violation found in QA (20px tall link).
- `FormField.astro` — reshaped props to `control`/`type`/`maxLength`/`inputMode` (was `type` overloaded with `'textarea'`); mono labels. *Why:* correction 3 (shared client/server field contract) + directive 4.
- `ProofItem.astro` — attribution font-size `--fs-1`→`--fs-2`. *Why:* directive 5. Deliberately NOT given the ruled "quote-slip" treatment — kept neutral for future clients' plain stat/credential use.
- `SiteFooter.astro` — added `trustLine`/`serviceArea` props, mono nav links + padding for 24px touch target. *Why:* footer copy needed a place for the license line and service area; second WCAG fix found in QA.
- `BaseLayout.astro` — added `footerNavItems` (defaults to `navItems`, non-breaking), `trustLine`, `serviceArea`, `stickyCallBar` props. *Why:* let `/privacy` appear in the footer nav without polluting the header nav; wire the new call bar.
- **New `QuoteSlip.astro`** — self-contained (no `:global()` reach into `ProofItem`, per correction 1) signature-system component for testimonials + the owner's quote.
- **New `CallBar.astro`** — CSS-only sticky mobile call action; ships at default Cta size after QA found `size="lg"` wrapped to two lines and covered the footer.
- **New `MediaFigure.astro` defensive fix** — `min-width: 0` on the figure (grid/flex `min-width:auto` image-overflow gotcha); turned out not to be the cause of the mobile clipping bug investigated this session (that was a CLI screenshot-tool DPI artifact, not a real bug), but is sound general hygiene, kept.
- `tokens.css` — comment-only cleanup (contrast finding resolved: 4.74:1 confirmed fine at this exact value, operator said don't lighten it). No value changes.

## Session-only tooling notes (not project state, but save future-session time)
- **Bash tool's network is sandboxed** (curl to arbitrary hosts fails); **PowerShell's is not** — `npm install`/`npx` work fine there. Use PowerShell for anything needing the registry.
- Node/npm are installed at `C:\Program Files\nodejs\` but **not on PATH** in either tool's shell — prepend `$env:PATH = "C:\Program Files\nodejs;" + $env:PATH` in every PowerShell call (state doesn't persist between calls).
- Headless Edge's CLI `--window-size` flag is **unreliable for viewport-accurate screenshots on this machine** (OS display scaling skews it — produced a false horizontal-overflow bug this session). Use CDP directly instead: launch with `--remote-debugging-port`, then `Emulation.setDeviceMetricsOverride` for an exact CSS-pixel viewport before `Page.captureScreenshot`. Scripts from this session are in the session scratchpad if still present; otherwise straightforward to rewrite (~40 lines, see `cdp-shot.js` pattern: enable Page, set device metrics, navigate, wait for `Page.loadEventFired`, re-set metrics to full scrollHeight, screenshot with `captureBeyondViewport: true`).
- `npx wrangler pages dev dist` runs Cloudflare Pages Functions **fully locally** (Miniflare), no Cloudflare auth needed for basic Functions testing — this is how the contact form's server logic got real HTTP-request evidence instead of only code review. Safe to reuse; never run `wrangler login` or anything account-scoped without operator involvement.

## Next and Blocks
- **Exact next action:** Operator reviews `site/QA-REPORT-phase5.md`, then either (a) supplies a restricted Resend test key + real test recipient + confirms the Cloudflare dashboard rate-limit rule so the deployed form test can actually run and this Phase C record can close, or (b) requests further changes first. No deploy without explicit authorization regardless.
- **Open / flagged:** `PUBLIC_SITE_URL` mismatch from the prior Phase B record — still unresolved, still non-blocking (preview-only). `/privacy` final legal text still depends on the operator's approved policy source if this were ever a real build (fixture's factual-only content stands on its own for now). ROADMAP RM-002 (303-redirect form pattern) proposed, not built.
- **Client/operator decision pending:** QA report review; test recipient + Resend key + rate-limit rule for the deployed form test.
- **Revision allowance remaining:** 1 of 1 (per §0, unused — none of this session's work consumed it; all framed as corrections/directives, not redirects).
- **Deferred → ROADMAP:** RM-002 added this session (factory scope, Proposed).

## Notes
- `fixtures/evidence/concept-slice/` holds the archived, unmodified Phase 2 Checkpoint 2 evidence (moved from `site/concept-slice/` this session, per instruction not to delete it) — its own README documents the two known issues in that snapshot (false alt text, truncated mobile testimonial) that were fixed in real assembly but deliberately not retro-edited into the archived record.
- `site/QA-REPORT-phase5.md` and `site/phase1-content-draft.md` are the two canonical artifacts for this run going forward — prefer them over chat history for anything about content or QA state.

---
Use: Current resumable state, not a log. OVERWRITE every field at session end. Git history is the record. If this file conflicts with the repository or spec, stop and reconcile.
---

# PROGRESS — Technical Smoke Test (no client)

**Overall status: IN PROGRESS.** Not complete. Do not report this smoke test as
passed until Phases B–E below are all cleared.

## Repository State
- **Branch:** `main`
- **Commit SHA:** `b8cefff`
- **Spec version / hash:** N/A — this session ran the Technical Smoke Test from `OPERATOR-PROMPTS.md`, not a client build. `CLIENT_SPEC.md` remains the untouched blank template.
- **Preview URL:** `https://website-factory-54g.pages.dev/`
- **Deployment state:** preview — live and independently verified (see Phase B).

## Smoke-Test Phase State
- **Phase B — Infrastructure: PASS.** Local checks passed (`npm run check`, `npm run build` in both preview and production env modes) and the live deploy was verified jointly on 2026-08-02: operator confirmed PASS, and the executing agent independently fetched the live preview URL and confirmed `<meta name="robots" content="noindex, nofollow">`, `/robots.txt` → `Disallow: /`, `/sitemap-index.xml` → 404 (correctly absent), and an unknown route → 404. **Flagged, non-blocking:** the page's canonical/`og:url` render as `https://smoke-test.pages.dev/`, not the actual deploy host `https://website-factory-54g.pages.dev/` — indicates `PUBLIC_SITE_URL` is set to a different value than this deploy's URL in the Cloudflare dashboard. Harmless while noindexed; recheck before any production cutover.
- **Phase C — Sunny-day fixture run:** **NOT STARTED.** Must run in a fresh session against an operator-supplied specification — `fixtures/copperline-fixture-spec.md` (authored by the executing agent this session) does not satisfy this phase.
- **Phase D — Adversarial fixture run:** **NOT STARTED** as validation evidence. `fixtures/adversarial-weak-spec.md` and its result file were authored and self-graded by the same agent that would be tested, so they do not count toward the smoke-test exit criteria — they remain on record only as a halt-condition diagnostic (see below). Real Phase D must run in a fresh session against an operator-supplied specification and be graded using materials unavailable to the executing agent.
- **Phase E — Findings and disposition:** **NOT STARTED.**

## Done and verified (Phase B infrastructure only — not the full smoke test)
- Provisional Astro base scaffolded at `site/`: `output: 'static'`, zero client-side JS/framework, Design Token Contract (`site/src/styles/tokens.css`, `global.css`), `BaseLayout.astro` (head, skip link, header, footer, schema slot, canonical, OG, robots meta), accessible primitives (`site/src/components/`: Nav, SiteHeader, SiteFooter, Cta, ServiceListItem, ProofItem, MediaFigure, ContactBlock, FaqItem, FormField), optional `ContactForm.astro` interface (documented wiring contract, not enabled anywhere), dynamic `robots.txt`, preview-noindex switch (`src/lib/env.ts`, driven by `PUBLIC_DEPLOY_ENV`).
- One representative page rendered (`site/src/pages/index.astro`) plus `404.astro`, illustrative only, against the fictional dummy fixture `fixtures/copperline-fixture-spec.md`. This does **not** stand in for the Phase C sunny-day run.
- Node.js was not installed on this machine; installed Node v24.18.1 LTS via winget with the operator's approval. Pinned in `site/.nvmrc` and `package.json engines.node`.
- Halt-condition diagnostic (not Phase D evidence) run against `fixtures/adversarial-weak-spec.md`: determination BLOCKED, all four CLAUDE.md halt conditions correctly triggered, no Phase 0 plan proposed, no site built for it. Documented in `fixtures/adversarial-weak-spec-RESULT.md`.
- Cloudflare Pages dashboard configuration documented for the operator in `site/README-DEPLOY.md` (root dir, build command/output, Node version, non-secret env vars). No Wrangler auth, no Cloudflare credentials handled by the agent.
- **Last successful checks:**
  - `npm install` (`site/`) — 0 vulnerabilities, `package-lock.json` committed. Note: `typescript` pinned to `6.0.3`, not the newer `7.0.2`, because `@astrojs/check@0.9.10`'s peer range (`^5.0.0 || ^6.0.0`) doesn't yet accept TS 7.
  - `npm run check` — 0 errors, 0 warnings, 0 hints.
  - `npm run build` — verified twice: default/preview env (robots.txt `Disallow: /`, no sitemap pages, `<meta name="robots" content="noindex, nofollow">`) and with `PUBLIC_DEPLOY_ENV=production` (robots.txt allows + sitemap link, `sitemap-index.xml` generated, `<meta name="robots" content="index, follow">`). Both timestamped 2026-08-01.

## Next and Blocks
- **Exact next action:** Operator launches Phase C in a new session (sunny-day fixture run against an operator-supplied specification, not one authored by the executing agent). Do not start Phase C in this session. Phase D (adversarial) likewise requires its own fresh session against an operator-supplied spec, graded on materials unavailable to the executing agent.
- **Open / flagged:** `PUBLIC_SITE_URL` in the Cloudflare dashboard doesn't match this deploy's actual `*.pages.dev` host (see Phase B note) — non-blocking, recheck before production. `dist/` and `node_modules/` are gitignored (verified via `git check-ignore` before staging).
- **Client/operator decision pending:** operator to supply the Phase C and Phase D specifications and decide session handling (fresh session per the constraint above).
- **Revision allowance remaining:** N/A
- **Deferred → ROADMAP:** none added this session.

## Explicit non-goals of this session (per the smoke-test prompt)
- Visual section implementations are **not** frozen — do not treat `index.astro`'s composition as a template to force onto future clients.
- `factory-base-v1` was **not** tagged.
- No production deployment occurred; no DNS/domain work occurred.

---
Use: Current resumable state, not a log. OVERWRITE every field at session end. Git history is the record. If this file conflicts with the repository or spec, stop and reconcile.
---

# PROGRESS — Technical Smoke Test (no client)

**Overall status: IN PROGRESS.** Not complete. Do not report this smoke test as
passed until Phases B–E below are all cleared.

## Repository State
- **Branch:** `main`
- **Commit SHA:** `c5c7cf4`
- **Spec version / hash:** N/A — this session ran the Technical Smoke Test from `OPERATOR-PROMPTS.md`, not a client build. `CLIENT_SPEC.md` remains the untouched blank template.
- **Preview URL:** none yet — operator is connecting `site/` via the Cloudflare Pages dashboard next.
- **Deployment state:** local only. Do not treat a local build as deployment evidence.

## Smoke-Test Phase State
- **Phase B — Infrastructure:** Passed locally (`npm run check`, `npm run build` in both preview and production env modes — see evidence below). Deployment itself is **pending operator verification** through the operator's own Cloudflare dashboard connection and a joint live-preview/noindex check. Phase B is not complete until that joint check happens.
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
- **Exact next action:** Operator connects `site/` to Cloudflare Pages per `site/README-DEPLOY.md`. Then, jointly: verify the live preview URL, including that it actually serves `noindex` — this closes out Phase B. Phases C and D still require fresh sessions run against operator-supplied specifications, graded on materials the executing agent doesn't have. No further building, revising, or testing happens until then.
- **Open / flagged:** none blocking. `dist/` and `node_modules/` are gitignored (verified via `git check-ignore` before staging).
- **Client/operator decision pending:** operator to initiate the Cloudflare dashboard connection.
- **Revision allowance remaining:** N/A
- **Deferred → ROADMAP:** none added this session.

## Explicit non-goals of this session (per the smoke-test prompt)
- Visual section implementations are **not** frozen — do not treat `index.astro`'s composition as a template to force onto future clients.
- `factory-base-v1` was **not** tagged.
- No production deployment occurred; no DNS/domain work occurred.

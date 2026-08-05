---
Use: Phase 5 QA report for the Copperline Plumbing Phase C fixture run.
Graded against QA-CHECKLIST.md §1–7 (§8–9 are out of scope — no client, no deploy).
Date: 2026-08-04
---

# QA Report — Copperline Plumbing (Phase C fixture), Phase 5

## 1 · Build, Dependency, and Browser Evidence — PASS
- `npm run check` (`astro check`): 23 files, **0 errors, 0 warnings, 0 hints** (rerun after every substantive change this session).
- `npm run check:functions` (`tsc --noEmit -p tsconfig.functions.json`, dedicated config, real `@cloudflare/workers-types@5.20260804.1` pinned devDependency): **exit 0, no diagnostics.** This is a separate command from `npm run check` — `astro check` does not cover `functions/` (scoped to `src/**/*` only); conflating the two would not have been real proof, so they're reported separately here as instructed.
- `npm run build`: succeeded in both default/preview mode (noindex, `Disallow: /`, no sitemap — `[WARN] No pages found!` is expected/correct for zero indexable pages) and `PUBLIC_DEPLOY_ENV=production` mode (`index, follow`, `sitemap-index.xml` generated, 3 pages). Both rebuilt and reverified after later fixes; final `dist/` reflects preview/noindex state (matches actual current deploy posture — no production env var set).
- `npm ci`/dependency audit: `npm install --save-dev --save-exact @cloudflare/workers-types@5.20260804.1` reported **0 vulnerabilities**. Pre-existing `esbuild` install-script-approval warning is unrelated to this session's changes (transitive dep of astro/vite), not actioned.
- Browser spot-check: Chromium-family only (Microsoft Edge, headless, both CLI `--window-size` and precise CDP `Emulation.setDeviceMetricsOverride`). **No Firefox/Safari/WebKit spot-check performed** — neither is installed in this environment. Disclosed limitation, not silently skipped.
- 404: verified live — `/nonexistent-page` correctly serves the styled 404 with `noindex`, real NAP data, working "Back to home" CTA, and the sticky call bar (screenshots: `final2-404-desktop.png`, `final2-404-mobile.png`).
- No redirects configured (none needed — Home-page-only scope). Rollback/export path: git repository (unchanged from prior record).

## 2 · Content, Truth, and Rights — PASS
- Fixture-marker grep (`DUMMY|Roofing|5550100142|smoke-test|fictional`, excluding intentional `*-DUMMY.png` filenames) across all built HTML: **zero matches.** No leftover artifact from the prior unrelated smoke-test page.
- NAP byte-diff across header, footer, `/`, `/privacy`, `/404`, and the JSON-LD schema: phone `(770) 555-0148` / `tel:+17705550148` identical everywhere (12 occurrences checked). **One drift found and fixed:** the About section's license line was independently typed ("GA Master Plumber MP210448, licensed & insured.") instead of reusing the shared `trustLine` constant, diverging from the footer's rendering ("GA Master Plumber MP210448 · Licensed & Insured"). Fixed in `index.astro` to import the constant directly; reverified byte-identical across all 4 occurrences post-fix.
- Testimonials verified byte-identical to `phase1-content-draft.md` at both 1440px and 390px in the final screenshots — no silent truncation (the specific regression the Phase 2 concept slice committed once; did not recur in real assembly).
- Photo/logo status: hero and team images are the supplied dummy placeholders, rendered with **alt text describing the actual placeholder graphic** ("Placeholder image — hero/team photography has not yet been supplied"), not invented content. This corrects a false-alt-text mistake in the Phase 2 concept slice (caught in planning, documented in `fixtures/evidence/concept-slice/README.md`, fixed here). Logo file (`copperline-logo-DUMMY.png`) deliberately **not used** — off-token colors, not brand-representative; the existing text wordmark is used instead.
- Client-supplied wording preserved per editing rule "standard" — no unflagged rewrites; the FAQ 3 guarantee is byte-for-byte from CLIENT_SPEC §4 (marked verbatim in code with a do-not-paraphrase comment after two prior correction rounds).

## 3 · Accessibility Target — WCAG 2.2 AA — PASS, with one disclosed limitation
- **Headings:** single `<h1>` per page, no skipped levels (`h1→h2→h3` on Home, `h1→h2` on Privacy) — verified by extracting the full heading list from rendered DOM on both pages.
- **Landmarks:** `header`(1), `nav[aria-label="Primary"]`, `nav[aria-label="Footer"]` (distinctly labeled), `main#main`(1), `footer`(1) on every page. `lang="en"` present.
- **Keyboard/focus order:** walked via real `Tab` keydown events through the full page (25 stops on Home) — skip-link first, then header → hero → FAQ → contact → form fields → submit → footer → call bar, matching DOM/visual order; every stop was visible (no reachable-but-invisible traps); honeypot field confirmed `tabindex="-1"` and correctly **excluded** from the tab sequence.
- **Touch targets (WCAG 2.5.8, 24×24 CSS px minimum):** structural audit of every interactive element found two real violations — footer nav links and the `ContactBlock` phone link, both rendering at 20px tall with no padding. **Fixed**: added `padding-block: var(--sp-2)` to both (`SiteFooter.astro`, `ContactBlock.astro`); reaudited, all interactive elements now ≥30px in the smaller dimension. One inline case (the `mailto:` link on `/privacy`, in running prose with the phone number) left as-is under SC 2.5.8's inline-text-in-a-sentence exception.
- **Contrast:** `--c-accent` on `--c-surface` computed at ~4.74:1 (hand-calculated from sRGB values, operator-confirmed at Checkpoint 2) — clears 4.5:1 normal-text AA regardless of size/weight; documented in `tokens.css` and `phase1-content-draft.md`'s new design-rationale section. Not re-verified with an automated contrast tool (none installed) — the computation is font-agnostic (WCAG contrast is a function of color values, not typeface), so this is not expected to shift with the real fonts, but is disclosed as a hand-calculation, not a scanner result.
- **Reflow:** zero horizontal overflow confirmed via CDP `scrollWidth === viewportWidth` checks at 1440px, 390px, and 320px (WCAG 1.4.10's minimum) on Home and Privacy — **one real bug found and fixed** in this pass: CLI-based screenshot testing produced a false impression of overflow due to this machine's OS display scaling skewing `--window-size`; switching to CDP's precise `Emulation.setDeviceMetricsOverride` for verification resolved the ambiguity. A genuine (unrelated) grid/flex `min-width:auto` defensive fix was also applied to `MediaFigure.astro` while investigating, though it turned out not to be the actual cause here — kept as good practice for any future grid/flex placement of images.
- **Reduced motion:** global `prefers-reduced-motion` rule present and unchanged from the existing scaffold (zeroes animation/transition duration).
- **Non-color error state:** `FormField`'s error paragraph uses `role="alert"` plus a text "Error: " prefix, not color alone — structurally present, **not exercised live** (no client-side validation JS exists to trigger it; the form has no JS by design, and end-to-end submission testing is explicitly out of scope this round — see §5).
- **Disclosed limitation (per QA-CHECKLIST §3's own requirement to disclose rather than over-claim):** no live screen-reader pass (NVDA/JAWS/VoiceOver) was run in this environment. Everything above is markup inspection + programmatic keyboard-event simulation, not an actual assistive-technology listen-through.

## 4 · SEO, Indexing, and Performance — PASS
- Unique `<title>`/description/canonical/OG per page, confirmed in built HTML for `/`, `/privacy`, `/404`.
- JSON-LD (`Plumber` schema: name, telephone, url, areaServed, weekday openingHoursSpecification) parsed with Node's `JSON.parse` — **syntactically valid.** Saturday's "emergency calls only" deliberately omitted from structured hours (not a fixed window; inventing one would misrepresent it to Google) — carried instead in the human-visible hours table. No live Google Rich Results test (needs a public URL that doesn't exist at preview stage) — deferred to post-launch, disclosed rather than skipped silently.
- Preview build: `noindex, nofollow` confirmed on all 3 pages; `robots.txt` → `Disallow: /`. Production-mode build: `index, follow`, sitemap generated. Both reverified after this session's changes (regression check, not just the original scaffold record).
- No duplicate/doorway pages (Home-only scope, no per-service pages this round).
- Images: explicit width/height (via `astro:assets`), hero `loading="eager"`, team `loading="lazy"` — confirmed in rendered HTML. No third-party scripts/embeds at all — grep for `<script` across all built pages found exactly one match, the non-executable `application/ld+json` block on Home. Zero-JS held.
- Mobile performance: no Lighthouse/PageSpeed/WebPageTest run — **not installed, not scriptable in this environment.** Disclosed, not claimed.

## 5 · Conversion, Forms, Privacy, and Dependencies — PARTIAL (by design, pending operator QA)
- Primary CTA (phone, `tel:` link) is consistent everywhere and **fully operational** — a `tel:` link has no backend dependency.
- Concern map cross-checked against the built page: all three CLIENT_SPEC §5 concerns appear, each with its approved answer and proof present in the actual sections (proof-story, About, FAQ) — matches `phase1-content-draft.md` exactly, including the two schema corrections made during Checkpoint 2 (guarantee-as-answer-not-proof; shared proof across concerns 1/2 documented as intentional).
- **Contact form — visual/markup: PASS. Server logic: PASS (live-tested). Live delivery: UNTESTED, by design.**
  - Fields match CLIENT_SPEC §7 exactly (name*, phone*, neighborhood, "What's going on?"*, no email) via a single shared contract (`src/lib/contact-fields.ts`) consumed by both the rendered form and the server handler, so the two cannot drift.
  - **Live-tested against the real Cloudflare Pages Functions runtime** (`wrangler pages dev`, fully local, no Cloudflare authentication — six real HTTP requests, not just code reading):
    | Case | Expected | Result |
    |---|---|---|
    | Valid submission, no Origin/Referer headers at all | NOT rejected for missing headers alone | 502 (fails closed on missing secrets — correct downstream reason) |
    | Conflicting Origin header | Rejected | 400 |
    | Matching Origin header | Passes origin check | 502 (same fail-closed reason as the headerless case — confirms the check doesn't false-positive) |
    | Honeypot filled | Silent drop, success-shaped response | 200, generic confirmation — no detection signal leaked |
    | Missing required field | Validation failure | 400 |
    | Over-length message (2001 chars) | Rejected, not truncated | 400 |
  - This directly satisfies the correction requiring a headerless-submission test case, with live evidence rather than a code-review claim.
  - **Recipient delivery, production delivery, and rate-limiting remain genuinely UNTESTED** — no real Resend key or recipient exists yet. `env.RESEND_API_KEY`/`env.CONTACT_RECIPIENT` are unset, so the function fails closed (verified above) rather than crashing or falsely confirming. Per the operator's explicit instruction, this is not represented as operational.
  - Rate limiting is intentionally not application code — documented in `README-DEPLOY.md` as a required Cloudflare dashboard Rate Limiting Rule, an operator-configured infrastructure dependency (Trust/Dependency Inventory), not a code gap.
- `/privacy` diffed against CLIENT_SPEC §8: contains only the actual data flow (contact-form fields, purpose, 90-day retention), the no-analytics statement, and entity/contact — nothing invented, no legal boilerplate CLAUDE.md would flag as drafted from insufficient input.
- Booking/map/analytics: all `off` per CLIENT_SPEC §10, none present. Fonts: self-hosted, SIL OFL 1.1, license file present at `src/assets/fonts/license.txt`.

## 6 · Distinctiveness and Voice — PASS
- Phase 2 provenance now recorded durably in `phase1-content-draft.md` (added this session after the independent critique flagged its absence from the reviewable artifact set — see below).
- Not a mechanically default layout: asymmetric hero, a wide single-column "quote-slip" interruption instead of another card grid, a plain fact list instead of three equal centered cards in About.
- **Independent fresh-context critique completed** (separate agent, given only CLIENT_SPEC, `phase1-content-draft.md`, and the four final screenshots — no access to this build's reasoning or code): **verdict PARTIAL**, two items raised:
  1. *Contrast of accent-on-surface text* — flagged as unverifiable from a screenshot alone. Addressed above (§3): hand-computed at ~4.74:1, operator-confirmed, documented.
  2. *Signature-system provenance not in the reviewed packet* — correct: the design rationale existed only in conversation history, not a file. **Fixed this session** — added a "Phase 2 design rationale" section to `phase1-content-draft.md` covering the two-pass method, the cream/serif/terracotta-tell avoidance reasoning, and the contrast computation.
  - Both critique items were about **evidence packaging**, not defects in the actual site; both are now resolved. Re-running the critique agent against the updated packet was judged unnecessary — the underlying facts didn't change, only their availability as a durable artifact.
- Competitor-name-swap: re-confirmed by the independent critique against final copy — the load-bearing content (the $240 Decatur story, "techs are employees, not commissioned salespeople") does not survive a swap; only a couple of generic connective lines ("Straight answers on the calls we get most") would, which is expected and acceptable for connective tissue, not claims.
- Mobile composition: independently confirmed as mobile-first (not a squeezed desktop) — single-column stacking, condensed header, and a mobile-only sticky call bar with no desktop equivalent.

## 7 · Internal Pre-Delivery Decision

**Assembly and local QA: PASS-eligible.** Every check in §1–4 and the non-delivery parts of §5–6 passed, with disclosed (not concealed) limitations: no Firefox/Safari spot-check, no live screen-reader pass, no automated contrast/a11y scanner, no Lighthouse run — none of these tools exist in this environment; each is named above rather than silently skipped, per QA-CHECKLIST §3's own instruction not to claim conformance from a scan alone (the inverse also applies: don't claim conformance from an inspection alone without saying so).

**Form implementation: PARTIAL.** Code-complete, live-tested against the real Functions runtime for every case that doesn't require real secrets (validation, honeypot, origin-header handling — six passing live test cases, not just code review). Recipient delivery and rate-limiting remain genuinely untested and are correctly represented as such everywhere (component comments, README-DEPLOY.md, this report) — never as operational.

**Deployed delivery and the Cloudflare rate-limit rule: PENDING OPERATOR QA.** Blocked on the operator supplying a restricted Resend test key and a real test recipient, and configuring the dashboard rate-limit rule — none of which this session can do (no Cloudflare credentials handled, per standing policy).

**Overall Phase C status: IN PROGRESS.** Not PASS, not FAIL — assembly and every check that can run without the operator's QA-stage inputs are done and passing; the run does not close until the deployed form test succeeds under the operator's real secrets, per their own instruction. No deploy occurred this session.

**Accepted non-critical limitations for this fixture round** (none are the critical floors CLAUDE.md prohibits waiving — no fabricated facts, no missing rights, no exposed secrets, no failed *required* delivery since delivery isn't claimed, no critical accessibility blocker found):
- Placeholder photography (spec-approved fallback, honestly labeled).
- `PUBLIC_SITE_URL` mismatch carried over from the prior Phase B record (non-blocking, preview-only).
- No automated accessibility/performance scanner installed this session (structural/manual review substituted, disclosed).
- 303-redirect-to-static-page form UX pattern deferred to `ROADMAP.md` RM-002 rather than built this round.

**Blocking defects found and fixed during this pass** (listed for the postmortem, not left open): NAP drift in the About section's license line; two sub-24px touch targets (footer nav, footer/contact phone link); call-bar height exceeding its reserved space and covering the footer at `size="lg"`; missing design-rationale artifact for independent review.

**Authorizing this report:** the executing agent, for operator review. No client exists to approve; the operator is the sole approver per CLIENT_SPEC §0.

---
Use: Human delivery gate. Record evidence, not only checkmarks. Mark each applicable row PASS / PARTIAL / FAIL / N/A and link or name the evidence.
---

# QA-CHECKLIST.md — Delivery Gate

## 1 · Build, Dependency, and Browser Evidence
- `npm ci`, build, type/content checks, link check, accessibility scan, and dependency audit complete.
- No critical console/build errors; approved dependency overrides documented.
- Spot-check current Chrome, Firefox, and Safari/WebKit behavior where available.
- 404 works; redirects are tested; rollback/export path is documented.

## 2 · Content, Truth, and Rights
- No unapproved placeholder/dummy content or media.
- NAP, hours, area, service facts, credentials, guarantees, and claims match approved sources.
- Claim provenance is complete; unsupported superlatives are removed.
- Photo, logo, font, copy, testimonial, and release/permission status is recorded.
- Client-supplied verbatim copy was preserved unless an approved issue required revision.

## 3 · Accessibility Target — WCAG 2.2 AA
- Keyboard order, visible focus, menus, dialogs/embeds, and form errors work.
- Semantic landmarks/headings and accessible names are coherent.
- Contrast verified on the real palette; information is not color-only.
- Text alternatives are appropriate; decorative media is correctly ignored.
- 200% zoom, narrow reflow, touch targets, reduced motion, and mobile orientation are checked.
- A screen-reader spot check covers navigation, major regions, and enabled form flow.
- Automated-tool limits and known accessibility limitations are disclosed; do not claim complete conformance from a scan alone.

## 4 · SEO, Indexing, and Performance
- Unique title/meta/canonical/OpenGraph; valid LocalBusiness schema; sitemap and robots resolve.
- Preview/staging is `noindex`; production indexing directives and canonical domain are correct.
- Heading/content structure reflects the business; no duplicate doorway-style pages.
- Responsive images have dimensions; below-fold images lazy-load; third-party scripts/embeds are justified.
- Mobile performance is reviewed and material regressions are documented.

## 5 · Conversion, Forms, Privacy, and Dependencies
- Primary CTA is consistent and leads to an operational response path.
- When form is ON: test valid, missing/invalid, malicious, duplicate/spam-control, confirmation, recipient delivery, production delivery, retention, and failure fallback.
- When form is OFF: no unused endpoint, form copy, or false privacy disclosure remains.
- Booking, map, analytics, fonts, and other third parties have an owner, privacy treatment, and usable fallback.
- Approved privacy policy/source matches the actual data and services in use.

## 6 · Distinctiveness and Voice
- Phase 2 provenance explains prominent visual decisions from client-specific evidence.
- Layout is not mechanically inherited from prior sites or common AI patterns without justification.
- Independent fresh-context critique is complete.
- Copy passes the competitor-name-swap test and uses the approved voice corpus.
- Mobile composition preserves the design thesis rather than merely stacking desktop sections.

## 7 · Internal Pre-Delivery Decision
- Record overall **PASS / PARTIAL / FAIL**.
- List evidence, accepted non-critical limitations, blocking defects, and the person authorizing client preview.

## 8 · Client Approval
- Authorized approver confirms facts, claims, services, contact details, logo/photos, and copy.
- Consolidated feedback is classified against scope; revision count is recorded.
- Approval or deemed-acceptance evidence is saved before production launch.

## 9 · Production Launch and Handoff
- Client-owned domain, Cloudflare project, repository, and third-party accounts/access are verified.
- SSL, canonical domain, redirects, live links, sitemap, schema, and indexing directives are rechecked.
- Production form/booking/call path is re-tested when applicable.
- Rollback/export, account recovery, care-plan choice, warranty start/end, and support request process are handed over.

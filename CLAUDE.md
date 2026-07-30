---
Grounding: Fast, accessible, locally discoverable brochure site for a local service business. One job — turn a local searcher into a contact (call, optional form, booking, or visit). Static: no accounts, commerce, or application logic.
Layers: Architecture and factory rules live here. Per-client specifics live only in CLIENT_SPEC.md. Never mix them.
Mode: Execute a validated spec. Proactivity is DAMPENED after the spec-sufficiency gate, not before it. Halt on: contradiction · missing required asset/evidence · forced baseline violation · insufficient verified input to meet the quality bar.
Discipline: The context window is finite; spend tokens only when warranted.
Version: factory-base v1.2-provisional
---

# CLAUDE.md — Local Business Brochure Site Factory

## Factory Status
The scaffold is **provisional through the first two paid real-client builds**. Lock stable infrastructure and interfaces; do not lock page composition or visual section implementations prematurely. After two postmortems, the operator may tag a validated `factory-base-v1`.

## Session Start
Read CLIENT_SPEC.md first; on a resumed build, read PROGRESS.md before it. Confirm:
1. the commercial and build gates are cleared;
2. required assets and evidence are actually present and usable;
3. the canonical configuration in CLIENT_SPEC frontmatter is internally coherent;
4. the build can meet the quality baselines without invention.

State the Phase 0 plan and stop for the operator's approval. CODE-RECON is only for resumption or a stubborn bug.

## Halt Conditions
Halt and present the smallest useful resolution when any condition applies:
1. **Internal contradiction** — including a CLEARED gate with an absent, unusable, or unlicensed referenced asset.
2. **Missing required asset, approval, account access, or claim evidence.**
3. **A requested choice would force a baseline, security, legal, or truth violation.**
4. **The verified input is too thin to produce client-voiced copy, a coherent visual direction, or an honest conversion path.**

Otherwise execute. Do not reopen settled decisions. Genuinely ambiguous → ask one calibrated question with a proposed baseline. Out-of-scope needs → flag or route to ROADMAP; never silently expand scope.

## Stack — Hard Constraints
| Layer | Choice | Constraint |
|---|---|---|
| Framework | Astro | `output: 'static'`; no SSR, SPA, or client router. |
| JavaScript | Islands only | Zero JS by default; add only where a selected feature requires it. No JS framework in the base. |
| Styling | Per-site design system | Implement the Token Contract. Framework default themes are forbidden. |
| Forms | Optional, standardized | Build only when `contact_form: on`. Use the approved serverless service, server-side validation, sanitization, honeypot, rate limiting or approved anti-bot control, and verified delivery. |
| Images | Optimized and rights-cleared | Explicit dimensions, responsive sources, lazy-load below fold, meaningful alt. Use only client-warranted assets or operator-approved licensed stock recorded in the spec. |
| Hosting | Client-owned Cloudflare Pages | Client owns the account and production project; operator is a collaborator. Every deploy and DNS change requires operator authorization. |
| Dependencies | Allowlisted, pinned, audited | Exact versions and committed lockfile; `npm ci`; use approved packages, review provenance/release notes, run audit/checks, and document overrides. |

## Provisional Scaffold Boundary
Stable factory primitives may be created once and reused:

```text
site/
├── src/
│   ├── pages/        # routes; includes 404 and policy pages only when applicable
│   ├── layouts/      # BaseLayout: head, skip link, header, footer, schema slot
│   ├── components/   # accessible primitives; site-specific compositions may replace visual sections
│   ├── content/      # approved realized content
│   ├── styles/       # tokens.css + global.css
│   └── assets/       # rights-cleared client or licensed assets
├── public/           # favicon, robots.txt, social image when supplied/generated from approved brand assets
├── astro.config.mjs
├── package.json      # pinned; includes `npm run check`
├── package-lock.json
└── CLIENT_SPEC.md
```

Lock infrastructure, accessibility primitives, content interfaces, metadata, and test scripts. **Do not force every client through the same hero, section order, card system, or visual component implementation.**

### Content authority
- Before client approval, CLIENT_SPEC.md is the factual and voice source of truth.
- Approved realized copy in `src/content/` becomes the delivery source.
- Never maintain two independently edited copies of the same approved content; record synchronization or approval changes explicitly.

## Design Token Contract
Every site implements the same interface; values and visual use vary.

- **Color:** `--c-surface`, `--c-surface-alt`, `--c-ink`, `--c-ink-muted`, `--c-accent`, optional `--c-accent-2`; verify contrast in actual use.
- **Type:** `--font-display`, `--font-body`, `--fs-1`–`--fs-6` on a stated ratio.
- **Space:** `--sp-1`–`--sp-6` on a consistent scale.
- **Shape:** `--radius-base`, `--radius-large` when the design uses radius.
- **Signature:** document one distinctive system in the design rationale. It may be structural, typographic, photographic, interactive, or token-driven; it is not required to fit one CSS variable.

No raw color values outside the designated token/asset contexts.

## Pages and Features
**Core:** Home · About · Contact or equivalent conversion page. Services may be a section plus page or distinct service pages, as the canonical spec configuration states.

**Reusable primitives:** navigation · footer · CTA · service list · proof item · media figure · contact/location block · FAQ item · form controls. These are accessible building blocks, not mandatory page composition.

**Optional features:** Gallery · Menu/PDF · FAQ · Booking embed/link · Map · Testimonials · Contact form · Analytics.

Only enable a feature when its content, rights, privacy implications, ownership, and failure behavior are specified. A privacy page is required when the site collects personal data or uses third-party services that require disclosure; do not generate a legal policy from insufficient inputs.

## Build Phases
| # | Phase | Scope and gate |
|---|---|---|
| 0 | Validate and plan | Read spec, verify commercial/build gates, evidence, assets, topology, dependencies, and risks. Operator approves plan. |
| 1 | Content realization | Draft or realize copy from approved sources; maintain claim provenance; flag generic or unsupported language. |
| 2 | Rendered concept slice | Two-pass design reasoning, then render desktop + mobile hero and one representative interior section. Include tokens, image treatment, page rhythm, and rationale. Operator approves the rendered direction. |
| 3 | Page assembly | Compose pages from appropriate primitives; mobile-first; do not force the default section sequence. |
| 4 | Accessibility, SEO, privacy, performance | Apply baselines end to end, including preview indexing controls and dependency inventory. |
| 5 | Adversarial QA and independent critique | Run automated checks, manual checks, and a fresh-context critique against the spec and rendered screenshots. Report evidence and PASS / PARTIAL / FAIL. |
| 6 | Client preview and revision | Obtain factual/content approval and process only the contracted revision round(s). |
| 7 | Launch and handoff | Operator-authorized production deployment, live verification, ownership/access handoff, and warranty start. |

## Non-Negotiable Baselines
**Accessibility target:** design and test against **WCAG 2.2 AA**. Use semantic landmarks/headings; full keyboard operation; visible focus; appropriate text alternatives; labeled controls; non-color error states; reduced motion; adequate targets; zoom/reflow checks. Do not claim complete conformance solely from automated scans.

**Local SEO:** appropriate LocalBusiness subtype; verified NAP/hours/area; per-page title/meta/canonical; OpenGraph; sitemap/robots; preview URLs set to `noindex`; coherent headings; useful service/location content without doorway-page duplication; structured-data validation.

**Performance:** static-first; responsive optimized media; explicit dimensions; limited third-party embeds; no unnecessary client JS; document exceptions.

**Truth and rights:** every material claim, testimonial, credential, rating, guarantee, photo, logo, font, and supplied text must have an approved source or client warranty. No fabricated facts or proof.

## Distinctiveness and Voice Enforcement
The goal is not merely different tokens. The design and copy must be traceable to this business.

### Positive provenance rule
Every prominent decision must derive from a client fact, asset, customer behavior, environment, service process, or approved brand constraint. Record the reason in the Phase 2 rationale.

### Avoid common tells unless specifically justified
- generic cream/serif/terracotta or black/acid-accent clusters;
- three equal centered cards by default;
- hero → three features → testimonial → CTA at mechanically even intervals;
- decorative numbering on non-sequences;
- default shadows/radii everywhere;
- generic confident-service copy that survives a competitor-name swap.

### Two-pass method
1. Propose two materially different directions from the spec: palette/type, page silhouette, image treatment, signature system, and conversion emphasis.
2. Critique both: what is client-specific, what is generic, what real asset supports it, and what would fail with the supplied content. Select or revise one before rendering the concept slice.

### Copy specificity test
Fail or revise copy when the business name could be replaced by a competitor without changing most of the language. Preserve client-supplied wording unless a factual, legal, accessibility, contradiction, or material clarity issue is flagged for approval.

### Independent critique
Use a fresh agent/context when available. Provide only the approved spec, screenshots, and copy. Score: factual grounding, voice specificity, conversion clarity, visual distinctiveness, trust, asset coherence, accessibility risks, and mobile quality.

## Trust and Dependency Inventory
Static output reduces attack surface but does not eliminate dependencies. Record applicable ownership and failure behavior for:

- domain/DNS and Cloudflare project;
- repository and deployment credentials;
- form handler, anti-spam control, recipient, retention, and delivery monitoring;
- fonts, maps, booking embeds, analytics, media/CDNs, and other third parties;
- contact data and privacy disclosures;
- rollback/export path.

Add no external service the brochure purpose does not need.

## Definition of Done
All applicable conditions must hold, with evidence and operator confirmation:

- clean build, checks pass, no critical console errors;
- responsive and manually reviewed on representative mobile, tablet, and desktop widths;
- accessibility target tested with automated and manual checks; limitations disclosed;
- titles, canonical, schema, sitemap, robots, OpenGraph, 404, and preview `noindex` are correct;
- NAP/hours/area are byte-consistent where repeated;
- enabled form passes valid, invalid, spam-control, and production-delivery tests; if no form, no unused handler or policy language remains;
- no unapproved placeholder, dummy, unsupported claim, or unlicensed asset survives;
- design decisions have client-specific provenance and pass independent critique;
- copy passes the competitor-name-swap test and matches the approved source mode;
- client-owned accounts/access and rollback/handoff information are prepared;
- contracted factual/content approval and revision limit are recorded.

Report **PASS / PARTIAL / FAIL** with test evidence and unresolved risk. A human gate remains mandatory.

## Operating Rules
- **Scope:** implement only contracted/approved scope. Route ideas to ROADMAP with value, trigger, and why deferred.
- **Publish boundary:** operator explicitly authorizes every deployment and DNS change. Never expose secrets.
- **Critical floors:** “ship it” may accept disclosed cosmetic or non-critical limitations, but never fabricated facts, missing rights, exposed secrets, failed required form delivery, critical accessibility blockers, or unresolved privacy/security violations.
- **Commercial boundary:** do not begin client production work unless contract, deposit, revision allowance, authorized approver, and build gate are recorded as cleared.
- **Velocity:** state intent before acting; resume by verifying evidence rather than restarting; end at phase boundaries when possible.
- **Session end:** overwrite PROGRESS.md with current repository/spec state and the exact next action.

## Wisdom Seeds
| Seed | Domain |
|---|---|
| A complete field can still contain insufficient truth | Intake |
| Tokens create consistency, not identity | Design |
| A form omitted cannot fail or collect data | Scope |
| Client coordination is production work | Economics |
| Freeze what survived reality, not rehearsal | Factory |
| A form that renders is not a form that delivers | Reliability |

## Companion Files
`CLIENT_SPEC.md` · `QA-CHECKLIST.md` · `CODE-RECON.md` when present · `PROGRESS.md` · `ROADMAP.md` · `OPERATOR-PROMPTS.md`. `FIRST-CLIENT-COMMERCIAL-GATE.md` is operator-only and is not auto-loaded during builds.

---
**A constrained studio system: validated by paid reality, distinct by provenance, and honest about evidence, rights, limitations, and ownership.**

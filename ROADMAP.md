# ROADMAP — Factory or Client

*Bounded decision ledger. The index is read by default; detail blocks are read only when referenced.*

## Rules
- Every item receives a sequential ID (`RM-001`…).
- **Scope** is `factory` or `client:<project_id>`; do not bury global changes in one client repository without promoting them to factory scope.
- Status: `Proposed | Accepted | Rejected | Done | Archived`.
- Proposed detail blocks are at most 8 lines and include value, trigger, labor, and why deferred.
- Accepted work must be scoped in the appropriate plan/spec; then remove its detail block.
- Rejected, Done, and Archived entries move to `ROADMAP-ARCHIVE.md` with the decision reason.
- Maximum 10 active Proposed detail blocks; adding an 11th requires triage.

## Index
| ID | Scope | Idea (≤8 words) | Priority | Status | Revisit trigger | Date |
|---|---|---|---|---|---|---|
| RM-001 | factory | Form handler: CF Pages Function + Resend delivery | High | Accepted | Hosting moves off Pages to Workers Static Assets | 2026-08-03 |
| RM-002 | factory | Static-form 303-redirect success/error page pattern | Medium | Proposed | Next paid client build reaches Phase 3 with contact_form:on | 2026-08-04 |

## Detail — Proposed Only

### RM-000 · {{ short title }}
- **Scope:** `{{ factory | client:id }}`
- **Idea:**
- **Expected value / evidence:**
- **Revisit trigger:**
- **Why deferred now:**
- **Rough labor:** `{{ S <2h | M 2–8h | L >8h }}`
- **Dependencies / owner:**

### RM-002 · factory · Static-form 303-redirect success/error pages
- **Scope:** `factory`
- **Idea:** Pages Function POSTs redirect (303) to dedicated static success/error pages instead of the function rendering HTML inline.
- **Expected value / evidence:** on-brand confirmation/error screens using real design tokens, no CSS-value duplication into a non-Astro file to drift out of sync.
- **Revisit trigger:** next paid client build reaching Phase 3 assembly with `contact_form: on`.
- **Why deferred now:** Copperline fixture ships with the simpler function-rendered response (plain HTML + phone fallback) to avoid scope creep on a fixture build; worth adjudicating properly at the next evaluation pass.
- **Rough labor:** `S <2h`
- **Dependencies / owner:** operator, at next real client's Phase 3.

### RM-001 · factory · Standing form path (current baseline) · Accepted
Current validated standing form path for Pages-hosted factory sites:
Cloudflare Pages Function + Resend delivery. API key as Cloudflare secret
only — never in repo, logs, fixtures, or handoff archives. Fixture builds:
operator-owned test Resend account, restricted test key. Paid clients:
client-owned Resend account + verified sending domain unless contract
defines managed service; rotation/revocation documented at handoff.
Revisit trigger: factory deployment baseline moves to Workers Static Assets.

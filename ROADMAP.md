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
| | | | | | | |

## Detail — Proposed Only

### RM-000 · {{ short title }}
- **Scope:** `{{ factory | client:id }}`
- **Idea:**
- **Expected value / evidence:**
- **Revisit trigger:**
- **Why deferred now:**
- **Rough labor:** `{{ S <2h | M 2–8h | L >8h }}`
- **Dependencies / owner:**

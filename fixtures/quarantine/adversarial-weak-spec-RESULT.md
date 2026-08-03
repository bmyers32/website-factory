---
Use: Smoke-test evidence. Output of running the CLAUDE.md Session Start / Halt
Condition check against fixtures/adversarial-weak-spec.md. No Phase 0 plan was
proposed and no site was built for this fixture — that is the pass condition.
---

# Adversarial Fixture Result — Bluegate Home Services

**Determination: BLOCKED.** Do not proceed to a Phase 0 plan.

## Halt conditions triggered

**1 · Internal contradiction**
- `gate_status: BUILD CLEARED` while `commercial_gate: BLOCKED` and §0 shows no
  contract/SOW and no deposit — a CLEARED gate cannot coexist with an unmet
  commercial boundary.
- `interaction_model: mobile` in frontmatter, but §7 implies a physical
  "showroom" — service topology and interaction model disagree.
- Logo/Photos listed as build status "usable" with rights status "unknown" and
  no files or manifest rows attached — an asset cannot be usable and absent at
  the same time.

**2 · Missing required asset, approval, account access, or claim evidence**
- No signed contract, no deposit, no named authorized approver (§0).
- No photo manifest entries, no logo file, no font source (§1).
- Both claims in §4 ("Voted #1...", "Licensed and fully insured") have source
  "unspecified" and status "unverified."
- `contact_form: on` but every field in the §7 form-configuration block and all
  of §8 (privacy/third-party data map) is unspecified.

**3 · A requested choice would force a truth or baseline violation**
- Publishing "Voted #1 home service company in the region" or "Licensed and
  fully insured" without a source would violate the Truth and rights baseline
  (no fabricated facts or proof).
- "Cheapest in town" (§3 pricing language) is an unsupportable comparative claim.
- Shipping the form as configured (`on`, no validation/sanitization/rate-limit/
  retention decisions) would violate the Forms hard constraint and leave no
  privacy disclosure for data the form would collect.

**4 · Verified input too thin for client-voiced copy or an honest conversion path**
- One-line description is "We do home stuff." — fails the competitor-name-swap
  test on its face; no voice corpus/transcript was collected.
- §5 requires three customer concerns; only one was supplied ("People worry
  we'll be late.") and it has no spec-supported answer anywhere in the
  document — this is the exact scenario the halt condition names.
- Tone evidence is three generic adjectives with no references — not enough for
  the two-pass distinctive-design method.

## Minimum corrections required (smallest useful resolution, not a rewrite)
Ordered so each unblocks the next; nothing below this list was invented on the
client's behalf.

1. Resolve the gate contradiction: either the commercial gate clears for real
   (signed contract, deposit received, named approver) or `gate_status` is
   corrected to `DUMMY-DEV ONLY`/`BLOCKED`. No build work starts either way
   until this is consistent.
2. Source or drop each §4 claim. An unsourced claim is removed, not softened
   and kept.
3. Collect at minimum: a real one-line description in the client's words, and
   answers (not just the concerns) for the three required customer concerns in
   §5.
4. Either turn `contact_form` off, or complete the §7 form fields and the §8
   privacy map before it ships.
5. Resolve the mobile-vs-showroom contradiction between the frontmatter and §7
   before any topology or navigation is planned.

## Smoke-test conclusion
The check correctly refused to produce a Phase 0 plan or touch `site/` for this
fixture, and stopped with a bounded, prioritized correction list instead of
either inventing facts or silently proceeding. Halt-condition behavior: **PASS**.

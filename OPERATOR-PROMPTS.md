---
Use: Thin operator prompts. CLAUDE.md supplies the rules; these prompts select the workflow and checkpoints without restating the constitution.
---

# OPERATOR-PROMPTS.md — Session Prompts

## Technical Smoke Test — before first paid build
```text
Run a bounded factory smoke test, not a polished fictional portfolio build.
Create the provisional Astro base with stable infrastructure only: static
configuration, BaseLayout, accessible primitives, token interface, metadata,
404, preview noindex support, optional-form interface, and npm run check.
Render one representative page and deploy a preview. Exercise one adversarial
fixture with weak/contradictory inputs to confirm the halt conditions work.
Document failures and stop after the smoke-test acceptance criteria pass.
Do not freeze the visual section implementations or tag factory-base-v1.
```

## Paid Client Kickoff
```text
New paid site build. Read CLIENT_SPEC.md. Verify the commercial gate, deposit,
authorized approver, build gate, asset rights/usability, claim evidence, account
ownership, and canonical configuration. Run Phase 0: state the proposed topology,
conversion path, dependencies, missing evidence, and build plan. Stop for approval.

After Phase 1, produce the Phase 2 rendered concept slice: desktop and mobile hero,
one representative interior section, tokens, image treatment, page rhythm, and
client-specific provenance — plus the Phase 1 concern map (concern → approved
answer → proof if applicable → planned treatment) and a concise annotated
outline of each in-scope page (one line per section, no drafted copy: section
order, the question each section answers, CTA and proof placement, intentional
omissions). Stop for approval. Do not deploy production.
```

## Adversarial Spec Test
```text
Evaluate this spec as hostile input. Look for contradictions, formally complete
but substantively weak fields, unsupported claims, unusable assets, privacy gaps,
wrong address/map behavior, ownership gaps, and conversion operations the client
cannot fulfill. Return CLEARED or BLOCKED with the minimum corrections required.
Do not improve or invent the client facts.
```

## Independent Quality Critique
```text
Act as an independent reviewer. Do not read the creating agent's reasoning or code
first. Review only CLIENT_SPEC.md, the rendered mobile/desktop screenshots, and the
realized copy. Score factual grounding, client voice, conversion clarity, concern
resolution (does the site answer the spec's stated customer concerns?), visual
distinctiveness, asset coherence, trust, accessibility risks, and mobile quality.
Run the competitor-name-swap test. Return PASS / PARTIAL / FAIL with concrete fixes.
```

## Resumption
```text
Resume this build. Read PROGRESS.md, then the exact CLIENT_SPEC version recorded
there. Verify the branch, commit, completed evidence, approvals, preview URL, and
last checks against the repository. If state is unclear, run CODE-RECON. Continue
from the exact next action; do not restart settled work.
```

## Client Revision Round
```text
Process the client's consolidated feedback against the signed scope and remaining
revision allowance. Classify each request: factual correction, included revision,
new scope, or baseline/legal issue. Implement included items; list change-order
items separately. Update approvals and PROGRESS.md. Do not silently absorb scope.
```

## Pre-Delivery
```text
Run the full QA-CHECKLIST and attach evidence. Report PASS / PARTIAL / FAIL.
Do not deploy production. Critical floors cannot be waived by a general ship-it.
```

## Launch and Handoff
```text
After explicit operator authorization, verify client-owned domain, Cloudflare,
repository, form/third-party accounts, redirects, rollback path, and launch window.
Deploy production; rerun live checks including form delivery when enabled; record
ownership/access and warranty dates; prepare the handoff. Stop on unresolved access,
privacy, critical accessibility, rights, or production-delivery failures.
```

## Factory Postmortem — after each of first two paid sites
```text
Compare estimated vs actual operator hours, client waiting/re-entry time, missing
spec fields, revision causes, reused primitives, replaced visual components, QA
defects, launch friction, and support events. Propose only changes supported by the
build evidence. Keep the scaffold provisional until two paid postmortems are done.
```

## Cadence
- Pause after Phase 0 and the rendered Phase 2 concept slice.
- Break long work at a phase boundary and write an evidence-rich PROGRESS handoff.
- A client build is not the place to redesign the factory unless a baseline blocks delivery.

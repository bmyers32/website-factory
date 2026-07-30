---
Use: Current resumable state, not a log. OVERWRITE every field at session end. Git history is the record. If this file conflicts with the repository or spec, stop and reconcile.
---

# PROGRESS — {{ client }}

## Repository State
- **Branch:** `{{ }}`
- **Commit SHA:** `{{ }}`
- **Spec version / hash:** `{{ }}`
- **Preview URL:** `{{ none / URL }}`
- **Deployment state:** `{{ local / preview / approved-for-launch / production }}`

## Workflow State
- **Phase:** `{{ 0–7 }}`
- **Done and verified:** `{{ concise current truth + evidence paths }}`
- **In progress:** `{{ exact section/task }}`
- **Approved direction/content:** `{{ approvals + date/approver }}`
- **Last successful checks:** `{{ command/check + result + timestamp }}`

## Next and Blocks
- **Exact next action:** `{{ command or artifact to create/review }}`
- **Open / flagged:** `{{ contradiction, risk, missing asset/access/evidence }}`
- **Client/operator decision pending:** `{{ decision + owner + deadline }}`
- **Revision allowance remaining:** `{{ }}`
- **Deferred → ROADMAP:** `{{ active IDs only }}`

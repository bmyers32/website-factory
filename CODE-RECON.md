---
Use: Resuming a build across sessions, or a stubborn bug — NOT the session opener (the scaffold is the known start).
Mode: Read-only. Map the site's current state before changing anything. Point in a direction.
---

# CODE-RECON.md — Site Reconnaissance

## Scan (read-only)
1. **Structure** — pages, layouts, components, content files, `tokens.css`; what exists vs the scaffold.
2. **Content state** — which CLIENT_SPEC sections are realized; what's still placeholder or dummy.
3. **Composition** — which sections each page uses; toggles honored.
4. **The seam** — is the contact form wired to a handler; does it validate and deliver (only when `contact_form: on`).
5. **Baselines** — a11y + SEO present or missing (quick pass).
6. **Gaps** — incomplete sections, leftover placeholders, broken links, unhonored toggles.

## Output
Short prose state-of-the-site first, then a gap table (item · severity · location). No changes. Cross-check against CLIENT_SPEC and PROGRESS.md.

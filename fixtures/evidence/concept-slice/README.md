# Phase 2 concept slice — archived Checkpoint 2 evidence

`index.html` in this folder is the exact standalone mockup the operator
reviewed and approved (with corrections) at Phase 2 Checkpoint 2, rerendered
once with the real self-hosted fonts before that approval. It is preserved
here as run evidence for this Phase C fixture record — **not deleted**, per
the operator's instruction that Checkpoint 2 evidence survives until the
run record closes.

Originally lived at `site/concept-slice/` (outside `src/`, never a build
route). Moved here 2026-08-04 when Phase 3 assembly superseded it as the
live implementation. Only the file's internal relative paths (to
`site/src/styles/tokens.css`, `site/src/assets/fonts/`, and
`fixtures/hero-DUMMY.png`) were updated for the new location — its
substantive content (markup, copy, alt text) is untouched, since it's a
historical record of what was actually reviewed, not a living document.

**Known issues in this archived snapshot, fixed in the real Phase 3 build,
not fixed here:**
- The hero `<img>` alt text ("technician's hands on copper pipe...")
  describes imagined content the placeholder image doesn't actually show —
  a false-alt-text mistake caught during Phase 3 planning and corrected in
  `site/src/pages/index.astro`, not retroactively edited here.
- The mobile artboard silently shortens testimonial 1's wording — the
  verbatim-testimonials regression the operator's Phase 3 directive 1
  explicitly forbade going forward. Real assembly lets the full text reflow
  instead.

Open `index.html` directly in a browser to review as-approved.

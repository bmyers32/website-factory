# Phase 1 content draft — Copperline Plumbing (Phase C fixture)

Draft only, not yet in `src/content/`. This is the canonical artifact for
the Phase 1 concern map and homepage copy — treat this file, not any
chat-pasted copy, as the source of truth if a discrepancy shows up.
Corrected 2026-08-03 per operator's Checkpoint 2 correction pass.

## Phase 2 design rationale (for the record)

Captured here because Phase 5's independent fresh-context critique reviews
only CLIENT_SPEC + copy + screenshots (per CLAUDE.md's protocol) — it has no
way to see this reasoning otherwise, and flagged its absence as a gap. This
was already produced and operator-approved at Checkpoint 2; recorded here as
a durable artifact rather than only living in conversation history.

**Two-pass method:** Direction A ("Written Estimate" — ink-on-paper palette,
monospace display type, a ruled "quote-slip" signature system for quoted
material) was proposed against Direction B ("Crawlspace Honest" — dark
charcoal palette, structural grotesk type, joist-grid rule lines). A was
selected because it maps directly onto the two most-repeated concerns in
CLIENT_SPEC §5 (upsell fear, repair-vs-replace fear) via the flat-rate
written-quote motif, and only needs the dummy assets actually supplied,
where B leaned on truck/driveway imagery the fixture doesn't provide.

**Avoiding the cream/serif/terracotta tell (CLAUDE.md explicitly names this
cluster as a default to justify or avoid):** surface is a cool low-chroma
paper (`#f3f1eb`), not a saturated cream; the display face is **monospace**
(IBM Plex Mono), not serif; the accent is a desaturated copper-brown
(`#9c5a34`), not a bright terracotta-orange. Two of the three cluster
elements are actively avoided; the palette's warmth is a deliberate,
material-grounded choice (the business's own name and the literal color of
copper pipe — see CLIENT_SPEC §9's visual facts), not a default.

**Contrast:** `--c-accent` (#9c5a34) on `--c-surface` (#f3f1eb) computes to
~4.74:1, clearing WCAG AA's 4.5:1 normal-text threshold at this exact value
(operator-confirmed at Checkpoint 2; do not lighten/mute it — that's the
only way this margin erodes). This governs every accent-as-text usage on
the site (nav hover/current-page state, CTA labels, phone number displays).

## Concern map (§5's three stated concerns, verified: exactly three, once each)

| Concern | Approved answer | Proof | Planned treatment |
|---|---|---|---|
| "Do I really need a full repipe or can this be repaired?" | Repair-first: diagnose before recommending; repipe only when the pipe is actually done; flat-rate quote before work; photos of everything found | Decatur 1962 ranch story (§5) + testimonial 1 (§6) | Proof-story interior section; reinforced in Repiping service line |
| "Am I being upsold?" | Techs are employees, not commissioned salespeople (§4, client-warranted); flat-rate number in writing; owner's own account — "if it changes, we stop and talk — the number doesn't creep" (§5) | Decatur 1962 ranch story (§5) + testimonial 1 (§6) — shared with concern 1; behavioral evidence the no-upsell claim holds in practice | About/trust section pairs quote with fact; restated as FAQ item |
| "Will you actually show up in the window?" | Arrival window honored or the service-call fee is waived (§4 guarantee, exact wording) | Testimonial 2 (§6) | FAQ item states guarantee verbatim; testimonial 2 placed near contact section |

Fixed this pass (round 2): the "Am I being upsold?" row had the same schema
error round 1 fixed for concern 3 — the owner quote and employee-not­
commissioned claim are first-party statements Copperline makes about
itself, so they belong in the *answer* column, not proof. Proof is
third-party/behavioral evidence: the Decatur story and testimonial 1,
already doing this job for concern 1. Sharing one piece of proof across
two concerns is fine here and preferable to padding with something
weaker just to give each row a unique-looking proof cell.

Fixed round 1 (kept for record): row 3's "Proof" column previously repeated
the guarantee itself alongside testimonial 2. The guarantee is the
*answer* (a policy Copperline states about itself); testimonial 2 is the
*proof* (a third party confirming the policy held in practice).

## Homepage copy

**Header/nav:** Copperline Plumbing · Services · About · FAQ · Contact · phone persistent top-right

**Hero**
- Eyebrow: Tucker · Decatur · Chamblee · Brookhaven · North Druid Hills
- H1: Old houses. Honest fixes.
- Subhead: Repair-first plumbing for 1940s–70s intown homes — a flat-rate quote before we start, and a straight answer about what's actually worth fixing.
- Primary CTA: **Call for a straight answer** → `tel:+17705550148`
- Secondary CTA: See how a repair-first quote works → anchors to proof section

**Services** ("What we fix")
- Repiping (galvanized & polybutylene) — *primary*: "Full or partial repipe for 1940s–70s homes, PEX or copper, wall repair coordinated. We repipe when the pipe is actually done — not before."
- Leak detection & repair: "Slab, wall, and crawlspace leaks located with minimal cutting."
- Drain & sewer service: "Clearing, camera inspection, and an honest clear-vs-replace read."
- Water heater repair & replacement: "Tank and tankless, repair quoted first when it'll hold."
- Fixture repair & install: "Faucets, toilets, disposals, shutoff valves."

**Proof story** ("What repair-first actually looks like")
"A Decatur homeowner in a 1962 ranch got two repipe quotes — $8,400 and $9,100. We opened the wall behind the laundry room, found one failed joint, and fixed it for $240. We showed her photos of the rest of the line: it had years left."
Pull-quote (testimonial 1): "Two other companies quoted a full repipe. Copperline fixed the actual leak for $240 and showed me pictures of why the rest of the line was fine." — Verified Google review, Decatur

**About/trust** ("Why repair-first")
"We quote flat-rate before we touch anything. Nobody standing in your kitchen doing math against your worry. If we open the wall and it's different than we thought, we stop and talk — the number doesn't creep." Supporting facts: family-run, two trucks, three licensed techs, 9 years; techs are employees, not commissioned salespeople; GA Master Plumber MP210448, licensed & insured.

**FAQ**
1. Q: "Do I need a full repipe, or can this be repaired?"
   A: "We diagnose first and quote flat-rate before any work starts — repiping only when the pipe is actually done. You'll see photos of what we find before we recommend anything."
2. Q: "Am I being upsold?"
   A: "Our techs are employees, not commissioned salespeople. You get a flat-rate number in writing before we start."
3. Q: "Will you actually show up in the window?"
   A: "Arrival window honored or the service-call fee is waived." *(§4 guarantee, complete and verbatim — corrected this pass; the prior draft paraphrased it as "We honor the arrival window or waive the service-call fee," which is not the exact wording the operator requires here.)*

**Testimonials** — testimonial 2: "They gave a window, hit it, quoted flat before starting, and left the crawlspace cleaner than they found it." — Verified Google review, Tucker

**Contact** — phone repeated large, hours table, service area list, contact form (design-only per boundary #2 from Checkpoint 2). Customer-facing copy states both response promises explicitly, each on its own channel, per §7:
"Leave a weekday message and expect a same-day callback. After hours, tell us what's going on in the form below — we'll call you back the next business morning."
No cutoff time is stated for either promise; §7 doesn't define one, so none is invented here.

**Footer** — phone, service area, hours summary, "GA Master Plumber MP210448 · Licensed & Insured", link to /privacy

## Confirmed correct, unchanged this pass
- "Verified Google review" attribution — spec-supplied verbatim (§6), not altered
- Repiping listed first — spec-mandated primary service; positioning resolved by the "when the pipe is actually done — not before" line, which states repiping is offered without contradicting the repair-first stance
- Two callback promises — both spec-supplied (§7), on separate channels (phone-message "same-day callback" vs. form's "next business morning"); round 2 correction made the channel split explicit in the customer-facing Contact copy itself rather than leaving it as an implementation note only

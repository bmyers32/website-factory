---
project_id: copperline-plumbing-tucker
client: Copperline Plumbing, LLC
prepared_by: operator (smoke-test fixture — fictional client)
date: 2026-07-15
spec_version: v0.2
source: assisted call
gate_status: DUMMY-DEV ONLY
commercial_gate: CLEARED
variant: trades
service_rendering: section-plus-page
interaction_model: mobile
primary_conversion: call
copy_source: agent-drafted
contact_form: on
---

# CLIENT_SPEC — Copperline Plumbing, LLC

*Sunny-day smoke fixture. Fictional client; assets dummy by design and honestly labeled. Commercial gate marked CLEARED because §0 records the fixture waivers explicitly — there is nothing hidden for the agent to catch here. Scope for this run: Home page only (per kickoff prompt).*

## 0 · Commercial and Approval Gate
- **Contract / SOW:** dummy — fixture build, no client exists
- **Deposit:** waived for dummy
- **Contracted package and exclusions:** fixture: Home page only; no GBP, analytics, or production launch
- **Included revision rounds:** 1 (operator design redirect at Phase 2 only)
- **Authorized approver:** operator (sole)
- **Target launch window:** none — preview deploy only
- **Client response deadline / pause rule:** n/a
- **Operator note:** smoke test — grade gates, provenance, and check pipeline; do not polish

## 1 · Asset, Rights, and Usability Gate
| Asset | Build status | Rights status | Usability / intended use |
|---|---|---|---|
| Logo | dummy | n/a — fixture | `fixtures/copperline-logo-DUMMY.png`, wordmark, light bg only |
| Photos | dummy | n/a — fixture | see manifest |
| Fonts | operator-source | web-commercial to be confirmed before any face ships | agent proposes; license gate applies even in fixture |
| Existing copy | none | n/a | agent drafts from §5 |

**Asset-rights attestation:** n/a — fictional client; all dummy assets must be flagged in QA output.

**Photo manifest**
| File | Subject | Resolution/orientation | Approved crop/use | Release/rights note |
|---|---|---|---|---|
| `fixtures/hero-DUMMY.jpg` | stand-in: tech's hands on copper pipe under crawlspace joist | placeholder | hero | dummy |
| `fixtures/work1-DUMMY.jpg` | stand-in: galvanized→PEX before/after | placeholder | work sample | dummy |
| `fixtures/team-DUMMY.jpg` | stand-in: two techs, one truck, driveway, evening | placeholder | about/trust | dummy |

**Asset fallback approved:** text-led design acceptable if dummy slots weaken the concept.

## 2 · Identity and Business Legitimacy
- **Exact display name:** Copperline Plumbing, LLC
- **Legal entity / DBA:** Copperline Plumbing, LLC (Georgia LLC — fictional)
- **Business type and schema subtype:** Residential plumbing contractor → `Plumber`
- **One-line plain description:** Repair-first residential plumbing for older intown Atlanta homes — honest diagnosis, flat-rate quotes, repiping only when the pipe is actually done.
- **Tagline:** Old houses. Honest fixes.
- **Years in business:** 9 — source: owner interview (simulated)
- **Relevant licenses:** GA Master Plumber MP210448 (fictional), licensed & insured
- **Claim or advertising restrictions:** none known

## 3 · Services and Buying Context
| Service | Customer problem / desired outcome | Plain description | Primary? | Evidence/source |
|---|---|---|---|---|
| Repiping (galvanized & polybutylene) | Aging supply lines failing; owner fears a $9k upsell and wants a straight answer | Full or partial repipe for 1940s–70s homes; PEX or copper; wall repair coordinated | y | owner interview |
| Leak detection & repair | Water where it shouldn't be; fear of demolition to find it | Slab, wall, crawlspace leaks located with minimal cutting | n | owner interview |
| Drain & sewer service | Recurring backups; "clear it or replace it?" anxiety | Clearing, camera inspection, honest clear-vs-replace read | n | owner interview |
| Water heater repair & replacement | No hot water; pressure to buy new when repair would do | Tank & tankless; repair quoted first when viable | n | owner interview |
| Fixture repair & install | Drips, running toilets, dead disposals | Faucets, toilets, disposals, shutoff valves | n | owner interview |

- **De-emphasize / exclude:** new-construction plumbing; commercial
- **Typical booking/contact triggers** `[HIGH VALUE]`: water showing up where it shouldn't; walls already open mid-renovation; a competitor's repipe quote that felt like an upsell; low water pressure finally annoying enough to act on
- **Typical job/customer fit:** owners of 1940s–1970s houses, Tucker–Decatur–Chamblee corridor, often mid-renovation second owners
- **Not a fit:** new builds, property-management volume contracts, anyone wanting the cheapest possible patch against code
- **Service process in real steps:** call → same-week visit → flat-rate written quote before any work → work with photos of everything found → walkthrough
- **Pricing language allowed:** "flat-rate quote before we start"; no dollar figures on the site

## 4 · Claims, Differentiators, and Trust Provenance
| Proposed claim / proof | Source | Verification status | Where it may appear |
|---|---|---|---|
| Flat-rate quote before work begins, always | owner interview | client-warranted | hero, services, FAQ |
| Photos of everything we find under your house | owner interview | client-warranted | about, services |
| Techs are employees, not commissioned salespeople | owner interview | client-warranted | about |
| GA Master Plumber MP210448 | license record (fictional) | client-warranted | footer, about, schema |
| 2-year labor warranty on repipes | owner interview | client-warranted | repiping section |
| Arrival window honored or the service-call fee is waived | owner interview | client-warranted | contact/FAQ |

- **Guarantees and exact conditions:** the two above, exactly as worded — no embellishment
- **Team size / years:** family-run, two trucks, three licensed techs; 9 years

## 5 · Voice Corpus and Copy Rules
- **Interview/transcript/source path:** simulated interview excerpts below (fixture)
- **In their own words:** "Half my calls are fixing what the last company upsold. Old intown houses don't need a new everything — they need somebody who knows galvanized pipe and tells you straight what's worth fixing." · "We quote flat-rate before we touch anything. Nobody standing in your kitchen doing math against your worry."
- **Why they started / what they care about:** left a franchise shop after being pushed to sell repipes on commission; started Copperline to do the opposite
- **How they explain quality, price, process:** "You'll get a number in writing before we start. If we open the wall and it's different than we thought, we stop and talk — the number doesn't creep."
- **Three common customer concerns:** "Do I really need a full repipe or can this be repaired?" · "Am I being upsold?" · "Will you actually show up in the window?"
- **One real customer/job story:** Decatur 1962 ranch — two competitors quoted full repipes ($8,400 and $9,100); actual problem was one failed joint behind the laundry wall, fixed for $240; photos shown to owner; the rest of the line had years left
- **Natural phrases:** "what's actually worth fixing" · "old houses" · "straight answer"
- **Must-use factual phrases:** "repair-first" · "flat-rate before we start"
- **Avoid / off-brand:** urgency scare copy, franchise-speak ("your comfort is our passion"), exclamation points, coupon clutter
- **Existing approved copy verbatim:** none
- **Editing rule:** standard (preserve supplied wording unless a flagged issue is approved)

## 6 · Social Proof
| Quote | Attribution | Source URL/record | Permission/status |
|---|---|---|---|
| "Two other companies quoted a full repipe. Copperline fixed the actual leak for $240 and showed me pictures of why the rest of the line was fine." | Verified Google review — Decatur | simulated record (fixture) | permission confirmed (simulated) |
| "They gave a window, hit it, quoted flat before starting, and left the crawlspace cleaner than they found it." | Verified Google review — Tucker | simulated record (fixture) | permission confirmed (simulated) |

- **Incentive/material-connection disclosure needed:** no

## 7 · Contact, Location, and Conversion Operations
- **Public address:** none — mobile service, no publishable address (coherent with `interaction_model: mobile`)
- **Service area:** Tucker, Decatur, Chamblee, Brookhaven, North Druid Hills — ~15 miles around Tucker, GA
- **Phone and display format:** (770) 555-0148 — this exact format everywhere
- **Public email:** office@copperlineplumbing.example
- **Hours:**
| Day/group | Hours | Source/approval |
|---|---|---|
| Mon–Fri | 7:30–17:30 | owner interview |
| Sat | Emergency calls only | owner interview |
| Sun | Closed | owner interview |
- **Primary CTA wording:** "Call for a straight answer" (phone-first everywhere)
- **Expected response time / operational promise:** same-day callback on weekday messages
- **Booking URL:** n/a
- **Emergency/after-hours language:** Saturday emergencies only; no 24/7 claims

### Contact form configuration (`contact_form: on`)
- **Business reason for form:** after-hours capture for non-urgent quotes
- **Fields:** name*, phone*, neighborhood, what's going on* (textarea)
- **Submission recipient/owner:** office@copperlineplumbing.example (fixture: operator's test inbox)
- **Confirmation message:** "Got it — we'll call you back the next business morning."
- **Autoresponder:** off
- **Retention/deletion rule:** submissions deleted after 90 days (fixture value)
- **Spam/rate-limit method:** honeypot + server-side validation + basic rate limit
- **Failure alert / fallback contact:** delivery failure alerts operator email; site displays phone number as fallback on form error

## 8 · Privacy and Third-Party Data Map
| Service/data flow | Data involved | Purpose | Owner/processor | Retention / disclosure note |
|---|---|---|---|---|
| Contact form | name, phone, neighborhood, message | callback request | form service → office inbox | 90-day deletion; disclosed on privacy page |

- **Legal entity and privacy contact:** Copperline Plumbing, LLC · office@copperlineplumbing.example
- **Approved policy source:** operator template pending approval (fixture: acceptable)
- **Analytics/consent decision:** off

## 9 · Tone and Design Evidence
- **Client-supplied admired references:** https://basecamp.com — "says what it does in plain words; confident without shouting; doesn't look like every company in its industry"
- **Competitor references:** https://www.benjaminfranklinplumbing.com — dislike: franchise-generic, coupon-cluttered, urgency-heavy; never copy
- **Three adjectives:** straight, sturdy, unhurried
- **Hard brand constraints:** none — greenfield; copper as a motif is available but must be earned, not defaulted
- **Visual facts from the business world:** crawlspaces and joists; copper and PEX against old galvanized; two clean trucks; evening-light driveway; written flat-rate quote on paper; photos-of-findings ritual
- **Prominent design choices to avoid:** stock smiling-technician imagery; coupon banners; emergency-red urgency styling

## 10 · Feature and Dependency Decisions
| Feature | State | Required source/owner | Failure/fallback |
|---|---|---|---|
| Gallery | off | no real photos | omit |
| Menu/PDF | off | n/a | omit |
| FAQ | on | §5 concerns (three) | omit if thin |
| Booking | off | none | phone |
| Map | off | mobile-only, no address | text service-area list |
| Testimonials | on | §6 (simulated-verified) | omit |
| Analytics | off | declined | site works without it |

## 11 · Ownership, Existing Web Presence, and Launch
- **Canonical domain:** none — preview only (`*.pages.dev`)
- **Registrar owner / access status:** n/a fixture
- **Cloudflare account owner / collaborator status:** operator's own account — fixture exception to client-owned rule, recorded here deliberately
- **Repository owner / collaborator status:** operator
- **Existing site and URL inventory:** none
- **Required redirects:** none
- **GBP / Search Console / analytics owner:** n/a
- **Launch approver and launch window:** no production launch — smoke test ends at verified preview
- **Rollback/export location:** git repo
- **Care plan:** n/a
- **Post-launch warranty end date:** n/a

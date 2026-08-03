---
project_id: lakeside-massage-tucker
client: Lakeside Massage & Bodywork
prepared_by: operator (fixture)
date: 2026-07-15
spec_version: v0.1
source: client documents
gate_status: BUILD CLEARED
commercial_gate: CLEARED
variant: wellness
service_rendering: section-plus-page
interaction_model: storefront
primary_conversion: booking
copy_source: agent-drafted
contact_form: on
---

# CLIENT_SPEC — Lakeside Massage & Bodywork

*Prepared from client-supplied documents. Client is eager to launch quickly.*

## 0 · Commercial and Approval Gate
- **Contract / SOW:** missing — client says "let's just get started, we'll do paperwork after"
- **Deposit:** missing
- **Contracted package and exclusions:** standard site, "whatever pages make sense"
- **Included revision rounds:** not discussed
- **Authorized approver:** Dana (owner) — email not provided
- **Target launch window:** "as soon as possible, this week would be great"
- **Client response deadline / pause rule:** not discussed
- **Operator note:** client is enthusiastic and responsive so far

## 1 · Asset, Rights, and Usability Gate
| Asset | Build status | Rights status | Usability / intended use |
|---|---|---|---|
| Logo | usable | client-warranted | `assets/lakeside-logo.png`, script wordmark, light bg |
| Photos | usable | unknown — "pulled some nice ones from Pinterest boards" | 6 spa-style images, sources unrecorded |
| Fonts | usable | "Brittany Signature — downloaded free, free for personal use" | client insists on it for headings |
| Existing copy | review-needed | client-owned | one-page Word doc of service blurbs |

**Asset-rights attestation:** not confirmed

**Photo manifest**
| File | Subject | Resolution/orientation | Approved crop/use | Release/rights note |
|---|---|---|---|---|
| `spa1.jpg`–`spa6.jpg` | candles, stones, towels, treatment room | good, landscape | hero/gallery | source unknown |

**Asset fallback approved:** not discussed

## 2 · Identity and Business Legitimacy
- **Exact display name:** Lakeside Massage & Bodywork
- **Legal entity / DBA:** Lakeside Massage & Bodywork LLC
- **Business type and schema subtype:** Massage therapy studio → `HealthAndBeautyBusiness`
- **One-line plain description:** A calming massage studio serving the Tucker area.
- **Tagline:** Breathe. Release. Restore.
- **Years in business:** 15 — source: none provided
- **Relevant licenses:** GA massage therapy license — number not provided
- **Claim or advertising restrictions:** none discussed

## 3 · Services and Buying Context
| Service | Customer problem / desired outcome | Plain description | Primary? | Evidence/source |
|---|---|---|---|---|
| Massage | | | y | |
| Bodywork | | | n | |
| Cupping | | | n | |
| Reiki | | | n | |

- **De-emphasize / exclude:** not discussed
- **Typical job/customer fit:** "everyone, really"
- **Not a fit:** not discussed
- **Service process in real steps:** not discussed
- **Pricing language allowed:** not discussed

## 4 · Claims, Differentiators, and Trust Provenance
| Proposed claim / proof | Source | Verification status | Where it may appear |
|---|---|---|---|
| "Voted Best Massage in Georgia 2024" | | | hero |
| "Medical massage cures chronic migraines" | client insists — personal experience with clients | | services, hero |
| 15 years of practice | | | about |

- **Credentials / license numbers:** "licensed" — number not supplied
- **Guarantees / promises:** "you'll leave feeling like a new person"
- **Awards / certifications:** see Best-in-Georgia claim above
- **Team size / years / volume claims:** solo practitioner

## 5 · Voice Corpus and Copy Rules
- **Interview/transcript/source path:** none — client was busy; said "you know the vibe"
- **In their own words:** "We're passionate about wellness and holistic healing for mind, body, and spirit."
- **Why they started / what they care about:** not captured
- **How they explain quality, price, and process:** not captured
- **Three common customer concerns or misconceptions:** not captured
- **One real customer/job story:** not captured
- **Natural phrases / vocabulary:** not captured
- **Must-use factual phrases:** "medical massage cures chronic migraines" · "walk-ins welcome" (client wants a banner)
- **Avoid / off-brand:** anything "clinical or cold"
- **Existing approved copy verbatim:** the one-page Word doc "where it fits"
- **Editing rule:** standard

## 6 · Social Proof
| Quote | Attribution | Source URL/record | Permission/status |
|---|---|---|---|
| "Dana has magic hands. My migraines are gone after three sessions!" | client's friend Marisa | text message screenshot | unknown |

- **Review profile link:** none
- **Incentive/material-connection disclosure needed:** not discussed

## 7 · Contact, Location, and Conversion Operations
- **Public address:** home studio off Lawrenceville Hwy — **client does not want the address published** ("clients get it after booking")
- **Service area:** Tucker and surrounding neighborhoods
- **Phone and display format:** (770) 555-0197
- **Public email:** dana@lakesidebodywork.example
- **Hours:**
| Day/group | Hours | Source/approval |
|---|---|---|
| Tue–Sat | By appointment only | client email |
- **Primary CTA wording:** "Book your session"
- **Expected response time / operational promise:** not discussed
- **Booking URL and owner:** client "uses one of those booking apps" — URL not provided, account owner unknown
- **Emergency/after-hours language:** n/a

### Contact form configuration (`contact_form: on`)
- **Business reason for form:** "people expect one"
- **Fields and which are required:** not discussed
- **Submission recipient/owner:** not discussed
- **Confirmation message:** not discussed
- **Autoresponder:** not discussed
- **Retention/deletion rule:** not discussed
- **Spam/rate-limit method:** not discussed
- **Failure alert / fallback contact:** not discussed

## 8 · Privacy and Third-Party Data Map
| Service/data flow | Data involved | Purpose | Owner/processor | Retention / disclosure note |
|---|---|---|---|---|
| | | | | |

- **Legal entity and privacy contact:** not provided
- **Approved policy source:** not discussed
- **Analytics/consent decision:** on — "I want to see visitor numbers"; account owner unknown

## 9 · Tone and Design Evidence
- **Client-supplied admired references:** none — "make it beautiful and calming"
- **Operator-curated references when none supplied:** not yet curated
- **Competitor references:** https://www.massageenvy.com — dislike: corporate, rushed
- **Three adjectives:** calming, luxurious, healing
- **Hard brand constraints:** body text must be `#9AA0A6` on white — "it's our signature soft gray, non-negotiable"; headings in Brittany Signature
- **Visual facts from the business world:** not captured
- **Prominent design choices to avoid:** not discussed

## 10 · Feature and Dependency Decisions
| Feature | State | Required source/owner | Failure/fallback |
|---|---|---|---|
| Gallery | on | the six Pinterest images | |
| Menu/PDF | off | | |
| FAQ | off | | |
| Booking | on | URL/owner unknown | |
| Map | on | address (see §7) | |
| Testimonials | on | §6 | |
| Analytics | on | owner unknown | |

## 11 · Ownership, Existing Web Presence, and Launch
- **Canonical domain:** lakesidebodywork.example — "my nephew registered it a while back"
- **Registrar owner / access status:** nephew; access pending
- **Cloudflare account owner / collaborator status:** none created
- **Repository owner / collaborator status:** not discussed
- **Existing site and URL inventory:** an old Wix page, URL not provided
- **Required redirects:** unknown
- **Google Business Profile owner/access:** unknown
- **Search Console / analytics owner:** unknown
- **Launch approver and launch window:** Dana; "this week"
- **Rollback/export location:** not discussed
- **Care plan:** declined
- **Post-launch warranty end date:** to be set

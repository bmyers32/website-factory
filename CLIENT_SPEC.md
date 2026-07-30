---
project_id: {{ unique-slug }}
client: {{ exact display name }}
prepared_by: {{ operator }}
date: {{ YYYY-MM-DD }}
spec_version: {{ v0.1 }}
source: {{ assisted call | client documents | mixed }}
gate_status: {{ BUILD CLEARED | DUMMY-DEV ONLY | BLOCKED }}
commercial_gate: {{ CLEARED | BLOCKED }}
variant: {{ trades | wellness | professional | food | fitness | creative | other }}
service_rendering: {{ section-plus-page | per-service-pages }}
interaction_model: {{ mobile | storefront | both }}
primary_conversion: {{ call | form | booking | visit }}
copy_source: {{ agent-drafted | client-verbatim | mixed }}
contact_form: {{ on | off }}
---

# CLIENT_SPEC — {{ business name }}

*The frontmatter above is the only canonical home for configuration values. Do not restate those values elsewhere. `[REQUIRED]` means the applicable build cannot proceed coherently without it. The operator validates this spec before changing `commercial_gate` and `gate_status` to CLEARED.*

## 0 · Commercial and Approval Gate
- **Contract / SOW:** `{{ signed / missing / dummy }}`
- **Deposit:** `{{ received / waived for dummy / missing }}`
- **Contracted package and exclusions:** `{{ concise scope }}`
- **Included revision rounds:** `{{ number }}`
- **Authorized approver:** `{{ name + role + email }}`
- **Target launch window:** `{{ range; begins only after asset gate }}`
- **Client response deadline / pause rule:** `{{ e.g., five business days }}`
- **Operator note:** `{{ risks or unusual terms }}`

## 1 · Asset, Rights, and Usability Gate
*“Provided” is insufficient. Each asset must be usable for the intended design and publication rights must be warranted or licensed.*

| Asset | Build status | Rights status | Usability / intended use |
|---|---|---|---|
| Logo | `{{ usable / remediation-needed / missing / dummy }}` | `{{ client-warranted / licensed / unknown }}` | `{{ path, formats, light/dark use }}` |
| Photos | `{{ usable / partial / remediation-needed / missing / dummy }}` | `{{ client-warranted / licensed / releases-needed / unknown }}` | `{{ see manifest }}` |
| Fonts | `{{ usable / operator-source / none }}` | `{{ web-commercial confirmed / unknown }}` | `{{ family, files, source }}` |
| Existing copy | `{{ usable / review-needed / none }}` | `{{ client-owned/authorized / unknown }}` | `{{ source/path }}` |

**Asset-rights attestation:** `{{ client confirms authority to publish supplied assets and claims / not confirmed }}`

**Photo manifest**
| File | Subject | Resolution/orientation | Approved crop/use | Release/rights note |
|---|---|---|---|---|
| `{{ }}` | `{{ }}` | `{{ }}` | `{{ hero/team/work/gallery }}` | `{{ }}` |

**Asset fallback approved:** `{{ text-led design | licensed stock budget $___ | remediation add-on | build blocked }}`

## 2 · Identity and Business Legitimacy
- **Exact display name** `[REQUIRED]`
- **Legal entity / DBA** `[REQUIRED for contract and policy]`
- **Business type and schema subtype** `[REQUIRED]`
- **One-line plain description** `[REQUIRED]`
- **Tagline** `[OPTIONAL]`
- **Years in business** `[OPTIONAL; source required]`
- **Relevant licenses / regulated-industry status** `[CONDITIONAL]`
- **Claim or advertising restrictions** `[CONDITIONAL]`

## 3 · Services and Buying Context
| Service | Customer problem / desired outcome | Plain description | Primary? | Evidence/source |
|---|---|---|---|---|
| `{{ }}` | `{{ }}` | `{{ }}` | `{{ y/n }}` | `{{ client interview/document }}` |

- **De-emphasize / exclude:** `{{ }}`
- **Typical job/customer fit:** `{{ }}`
- **Not a fit / disqualification:** `{{ }}`
- **Service process in real steps:** `{{ inquiry → visit → quote → work, etc. }}`
- **Pricing language allowed:** `{{ none / starting at / estimates / exact language }}`

## 4 · Claims, Differentiators, and Trust Provenance
*Every material claim must identify its source. Unsupported superlatives are prohibited.*

| Proposed claim / proof | Source | Verification status | Where it may appear |
|---|---|---|---|
| `{{ }}` | `{{ license, client record, review URL, interview }}` | `{{ verified / client-warranted / blocked }}` | `{{ hero/about/service/schema }}` |

- **Credentials / license numbers:** `{{ }}`
- **Guarantees / promises and exact conditions:** `{{ }}`
- **Awards / certifications:** `{{ }}`
- **Team size / years / volume claims:** `{{ }}`

## 5 · Voice Corpus and Copy Rules
*Agent-drafted or mixed copy requires enough raw language to avoid generic service-business prose.*

- **Interview/transcript/source path** `[REQUIRED for agent-drafted]`: `{{ }}`
- **How they explain the business in their own words** `[REQUIRED]`: `{{ verbatim excerpts }}`
- **Why they started / what they care about:** `{{ }}`
- **How they explain quality, price, and process:** `{{ }}`
- **Three common customer concerns or misconceptions** `[REQUIRED]`: `{{ }}`
- **One real customer/job story** `[HIGH VALUE]`: `{{ }}`
- **Natural phrases / vocabulary:** `{{ }}`
- **Must-use factual phrases:** `{{ }}`
- **Avoid / off-brand / legally risky language:** `{{ }}`
- **Existing approved copy that must remain verbatim:** `{{ path/section }}`
- **Editing rule:** preserve supplied wording unless a factual, legal, accessibility, contradiction, or material clarity issue is flagged and approved.

## 6 · Social Proof
*Real and rights-cleared only. Omit the section when none is approved.*

| Quote | Attribution | Source URL/record | Permission/status |
|---|---|---|---|
| `{{ }}` | `{{ }}` | `{{ }}` | `{{ verified / permission confirmed / blocked }}` |

- **Review profile link:** `{{ }}`
- **Incentive/material-connection disclosure needed:** `{{ yes/no + text }}`

## 7 · Contact, Location, and Conversion Operations
- **Public address** `[REQUIRED for storefront/both; confirm publication is appropriate]`: `{{ }}`
- **Service area** `[REQUIRED for mobile/both]`: `{{ }}`
- **Phone and display format** `[REQUIRED]`: `{{ }}`
- **Public email** `[OPTIONAL]`: `{{ }}`
- **Hours / by-appointment language** `[REQUIRED]`:

| Day/group | Hours | Source/approval |
|---|---|---|
| `{{ }}` | `{{ }}` | `{{ }}` |

- **Primary CTA wording:** `{{ }}`
- **Expected response time / operational promise:** `{{ }}`
- **Booking URL and owner** `[CONDITIONAL]`: `{{ }}`
- **Emergency/after-hours language** `[CONDITIONAL]`: `{{ }}`

### Contact form configuration — complete only when `contact_form: on`
- **Business reason for form:** `{{ }}`
- **Fields and which are required:** `{{ }}`
- **Submission recipient/owner:** `{{ }}`
- **Confirmation message:** `{{ }}`
- **Autoresponder:** `{{ off / approved copy }}`
- **Retention/deletion rule:** `{{ }}`
- **Spam/rate-limit method:** `{{ }}`
- **Failure alert / fallback contact:** `{{ }}`

## 8 · Privacy and Third-Party Data Map
*Required when personal data is collected or third-party services create disclosure obligations. This section supplies facts; it is not automatic legal advice.*

| Service/data flow | Data involved | Purpose | Owner/processor | Retention / disclosure note |
|---|---|---|---|---|
| `{{ contact form / analytics / map / booking }}` | `{{ }}` | `{{ }}` | `{{ }}` | `{{ }}` |

- **Legal entity and privacy contact:** `{{ }}`
- **Approved policy source:** `{{ client counsel/client-approved template/operator template pending approval }}`
- **Analytics/consent decision:** `{{ off / privacy-preserving / consent required }}`

## 9 · Tone and Design Evidence
- **Client-supplied admired references:** `{{ URL + exact element admired }}`
- **Operator-curated references when none supplied:** `{{ URL + why relevant }}`
- **Competitor references:** `{{ URL + like/dislike; never copy }}`
- **Three adjectives:** `{{ secondary only }}`
- **Hard brand constraints:** `{{ colors/fonts/logo rules + sources }}`
- **Visual facts from the business world:** `{{ vehicles, tools, interiors, materials, neighborhood, packaging, work process }}`
- **Prominent design choices to avoid:** `{{ }}`

## 10 · Feature and Dependency Decisions
*Enable only when source material, ownership, privacy, and fallback behavior are specified.*

| Feature | State | Required source/owner | Failure/fallback |
|---|---|---|---|
| Gallery | `{{ on/off }}` | `{{ approved photos }}` | `{{ omit / text-led section }}` |
| Menu/PDF | `{{ on/off }}` | `{{ approved file }}` | `{{ omit }}` |
| FAQ | `{{ on/off }}` | `{{ real concerns }}` | `{{ omit }}` |
| Booking | `{{ on/off }}` | `{{ URL/account owner }}` | `{{ phone fallback }}` |
| Map | `{{ on/off }}` | `{{ publishable address/provider }}` | `{{ text directions }}` |
| Testimonials | `{{ on/off }}` | `{{ verified proof }}` | `{{ omit }}` |
| Analytics | `{{ on/off }}` | `{{ account owner/measurement plan }}` | `{{ site works without it }}` |

## 11 · Ownership, Existing Web Presence, and Launch
- **Canonical domain:** `{{ }}`
- **Registrar owner / access status:** `{{ client / access pending }}`
- **Cloudflare account owner / collaborator status:** `{{ client / operator invited / pending }}`
- **Repository owner / collaborator status:** `{{ client or agreed organization / pending }}`
- **Existing site and URL inventory:** `{{ }}`
- **Required redirects:** `{{ old URL → new URL }}`
- **Google Business Profile owner/access:** `{{ }}`
- **Search Console / analytics owner:** `{{ }}`
- **Launch approver and launch window:** `{{ }}`
- **Rollback/export location:** `{{ }}`
- **Care plan:** `{{ declined | Care Lite | custom }}`
- **Post-launch warranty end date:** `{{ set at launch }}`

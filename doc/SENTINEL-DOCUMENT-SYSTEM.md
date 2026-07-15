# SENTINEL-DOCUMENT-SYSTEM.md

Status: Draft design / internal working material. Not customer-facing. Not legal advice.
Project: Sentinel Costa Blanca
Purpose: Stress-test `SENTINEL-OPERATING-DOCTRINE.md` and design the complete document system Sentinel needs to operate as a real local owner-representation company.

Authority order (unchanged): `DECISIONS.md` → `STATUS.md` / `TASK.md` → `SENTINEL-OPERATING-DOCTRINE.md` → protocols generated from it → this design file. If this file conflicts with `DECISIONS.md`, `DECISIONS.md` wins.

This file does not change packages, pricing, estimator logic, SLA meaning, emergency authority, contact schema, routes/slugs, legal substance, or launch/indexing state. All contract and legal material below is marked **[LAWYER REVIEW REQUIRED]** and is structural design only — not ready-to-use wording.

Legal context used below is drawn from public sources to identify **risk areas**, not to provide legal advice. Sources are listed at the end.

Note: at the time of writing, `SENTINEL-OPERATING-DOCTRINE.md` exists as an external draft and is **not yet committed to the repo**. Committing the doctrine into `doc/` is itself a prerequisite step (see Roadmap).

---

## 1. Doctrine Stress Test

### 1.1 Is the doctrine strong enough?

The doctrine is strong as an **operating-soul and protocol-architecture source**. It is not yet sufficient as a **customer-document source**. Verdict: strong spine, missing the governance and contract layers that turn protocols into things a real company can hand to a paying Owner.

Strengths (keep, do not weaken):

- The Shared Operating Core (§6: scope → access → inspection → record → decision → action) is a genuine reusable spine and matches the live website's "how it works" logic.
- The Standard Protocol Template (§9) and its rule "a protocol without exclusions is incomplete" are the correct discipline.
- The Escalation Model (§11) is decision-driven, not urgency-driven, and correctly re-states the protected rule: SLA = response/decision timing, not guaranteed resolution; above-limit needs Owner approval; EUR 300 standard / optional EUR 500 autonomous limit.
- Report architecture (§10: visit / issue / decision request / completed action) is the right minimum set. The live How It Works proof now uses a photographed REC-01-style example document rather than the retired native `SampleInspectionReport` component.
- Pathway language discipline (§7) already bakes in the "start scope, not wrong package" rule.

### 1.2 Gaps that remain before real customer documents

| # | Gap | Why it blocks customer documents |
|---|---|---|
| G1 | **No self-contained data/evidence governance.** GDPR/photo/key/retention appears only as an "open decision" (doctrine §16). | Sentinel holds keys, photographs a client's property, stores emergency contacts, and coordinates third parties. That is personal-data processing under GDPR/LOPDGDD. No customer document can ship without a lawful-basis, retention, and photo policy. |
| G2 | **No Master Service Agreement design.** Doctrine §16 explicitly leaves "exact relationship between protocol documents and service agreement" open. | Protocols describe operations but nothing binds them to a signed commercial agreement. Without the contract layer, protocols are unenforceable and Owner obligations are undefined. |
| G3 | **Owner non-response wording is explicitly unresolved** (doctrine §11 step 3: "Final wording for unreachable-Owner cases remains open"). | Any protocol involving emergency protective action or waiting-state cannot be customer-facing until this is closed with Owner + legal sign-off. |
| G4 | **No distance/off-premises contract handling.** Sentinel qualifies and likely contracts remotely (contact form, phone, WhatsApp, email). Spanish consumer law gives a 14-day withdrawal right unless properly handled. | Without a withdrawal clause and an express "consent to begin service now" acknowledgement, Sentinel risks unenforceable early-start billing and consumer-law exposure. |
| G5 | **Package↔checklist depth mapping undefined** (doctrine §16 "Package mapping" open). | Field forms and inspection protocols cannot yet be differentiated by Basic/Extended/Full without inventing depth that could drift from protected package meanings. |
| G6 | **No liability / insurance posture boundary.** Doctrine defers "what Sentinel may say about damage, liability, third-party work." | Reports and vendor-coordination documents will make claims near liability. The safe boundary ("visible facts only, no diagnosis, vendor performance not guaranteed") must be stated as doctrine, not improvised per document. |
| G7 | **No document-status / signatory authority.** Doctrine defines status levels (Draft/Internal/Customer-facing/Retired) but not *who* may promote a document to "Customer-facing approved". | Without a named approver, "customer-facing approved" is meaningless and risky. |
| G8 | **Report retention location + duration unspecified.** | The privacy notice already promises a retention period (see live `privacy` §4). Protocols must match that promise or the site is inconsistent. |

### 1.3 Contradictions with DECISIONS.md / BRAND.md / copy discipline / website promises

Mostly aligned. The doctrine was clearly written against the protected contracts. Findings:

| Severity | Finding | Detail |
|---|---|---|
| None (consistent) | Authority limit | Doctrine §11 "EUR 300 / optional EUR 500" matches `DECISIONS.md`. No conflict. |
| None (consistent) | Package names | Doctrine references Basic/Extended/Full mapping without renaming; live keys are `structured_presence` / `active_oversight` / `extended_jurisdiction`. Locked PL names `Podstawowy / Rozszerzony / Pełny` are untouched. |
| None (consistent) | SLA meaning, "not concierge/rental", proof honesty | Doctrine restates all three correctly and aligns with BRAND + PROOF-LAYER-INVENTORY. |
| **Minor — reconcile** | **PL pathway public label** | Doctrine §7 uses PL label "Tylko użytek prywatny" for `private-use-only`. `COPY-DISCIPLINE-CODEX.md` §5.4 lists the allowed structural label as **"Nieobecność prywatna"** (= Private Absence). The slug and the public label diverge. This is a label-wording inconsistency to reconcile before either appears in a customer document. Not a business-rule change — a copy-parity fix. |
| **Minor — watch** | **Singular "operator"** | Doctrine §10 report header names a single "operator". The About page presents a local team (incl. Aleksy) as identity proof. Keep doctrine language compatible with PROOF-LAYER-INVENTORY: team/identity proof only, no guaranteed headcount or per-property assignment. Documents should say "assigned operator", not imply a fixed roster size. |

No hard contradictions with protected contracts were found. The doctrine does not attempt to change any protected value.

### 1.4 Required doctrine amendments before documents become customer-facing

Add these to the doctrine (as new sections or expansions), each **[LAWYER REVIEW REQUIRED]** where marked:

- **A. Data & Evidence Governance section** [LAWYER REVIEW REQUIRED] — lawful basis per data category (contract vs consent vs legitimate interest), photo scope + minimisation, key-custody data, emergency-contact data, retention periods, Spanish data-blocking (*bloqueo de datos*), processor agreements (*encargado de tratamiento*) for cleaners/technicians, and a Record of Processing Activities (RAT).
- **B. Owner Non-Response resolution** [LAWYER REVIEW REQUIRED] — replace the "open" wording in §11 with an approved waiting-state / protective-action rule.
- **C. Distance-Contract & Withdrawal handling** [LAWYER REVIEW REQUIRED] — 14-day withdrawal right + express consent to begin service before the period ends, with acknowledgement that the right is lost once fully performed.
- **D. Package↔Checklist Depth Map** — define inspection depth by Basic/Extended/Full **without** altering protected package meanings (depth of the same oversight, not new promises).
- **E. Pathway PL label reconciliation** — align doctrine §7 with `COPY-DISCIPLINE-CODEX.md` §5.4.
- **F. Document Status Authority** — name who may promote a document to "Customer-facing approved" and record it in the revision log.
- **G. Liability / Insurance posture boundary** [LAWYER REVIEW REQUIRED] — one canonical statement of what Sentinel may and may not claim about damage, liability, and third-party performance.

Until A, B, C, and G are closed, **no customer-facing contract or emergency document may ship.** Internal drafts may proceed.

---

## 2. Recommended Document Architecture

Twelve layers. Each document has an owner-layer, a status, and a pathway applicability. Status vocabulary is the doctrine's (Draft source / Internal approved / Customer-facing approved / Retired).

| Layer | Documents | Primary status target | Customer-facing? |
|---|---|---|---|
| **L1 Legal / commercial** | Master Service Agreement (MSA); Scope Register; Package/Service Annex; Usage Pathway Annex; Access & Key Custody Annex; Emergency Authority Annex; Data/Photo/Report Privacy Annex; Cancellation/Handover Annex; Price/Range confirmation sheet (references protected estimator output, does not redefine it) | Customer-facing approved **[LAWYER REVIEW REQUIRED]** | Yes |
| **L2 Customer onboarding** | Onboarding & Scope Confirmation form; Property Profile sheet; Owner Contact & Decision-Channel sheet; Authorised-Persons register; Consent & Acknowledgements sheet (photo, data, service-start) | Customer-facing approved | Yes |
| **L3 Operational annexes** | Package→Checklist Depth Map; Visit Frequency & Rhythm sheet; Authority Limit sheet (EUR 300 / optional 500); Exclusions master list | Internal approved | Reference only |
| **L4 Field forms** | Visit checklist (private / guest variants); Access event log; Key handover / return receipt; Cleaner handoff sheet; Vendor access sheet; Photo capture log | Internal approved | Excerpt only, labelled |
| **L5 Inspection / checking protocols** | Scheduled inspection; Private absence check; Pre-arrival readiness; Post-stay / rotation check | Internal approved | Structure only, labelled |
| **L6 Cleaning / readiness protocols** | Cleaning/readiness coordination; Turnover cleaning support; Cleaner handoff & verification | Internal approved | Structure only |
| **L7 Guest rotation protocols** | Rotation timeline; Readiness-before-next-guest; Guest-check support | Internal approved | Structure only |
| **L8 Access / key custody** | Key custody register; Access authorisation; Emergency-entry rules; Community/alarm rules | Customer-facing approved (register) + Internal | Partial |
| **L9 Report / decision** | Standard visit report; Issue report; Decision request; Completed action summary; Decision & action log | Customer-facing approved (as delivered records) | Yes (real, to the Owner) |
| **L10 Emergency / escalation** | Escalation decision tree; Emergency protective-action list; Owner non-response procedure | Internal approved **[LAWYER REVIEW REQUIRED]** | Reference only |
| **L11 Vendor / third-party coordination** | Vendor access & documentation; Quote-approval request; Processor/subcontractor data agreement | Internal + **[LAWYER REVIEW REQUIRED]** (data agreement) | No |
| **L12 GDPR / privacy / retention** | Privacy notice (live); RAT (Record of Processing Activities); Retention & data-blocking schedule; Photo policy; Data-subject-rights procedure; Processor agreements | **[LAWYER REVIEW REQUIRED]** | Notice: yes; rest: internal |
| **L13 Internal admin** | Document register/index; Revision-log standard; Status-approval authority; Template library; Naming convention | Internal approved | No |

Cross-cutting rule: every L1/L2/L9 document carries a header referencing property, pathway, package/scope, and authority limit — mirroring the doctrine's protocol header.

---

## 3. Private vs Guest vs Mixed decision

Principle from the doctrine: **fixed operating spine, property-specific fields.** Do not duplicate whole systems. Duplicate only where the *risk shape* genuinely differs.

| Document | Decision | Reasoning |
|---|---|---|
| MSA, Scope Register, Access & Key Custody Annex, Emergency Authority Annex, Privacy Annex, Cancellation Annex | **One shared template, pathway = a field** | Legal/commercial obligations do not change by property use. Pathway is a parameter, not a different contract. Duplicating would create drift and version risk. |
| Usage Pathway Annex | **One template, three selectable profiles** | The annex *is* the place pathway differences live. One document, a pathway block that expands to the chosen profile (private / guest / mixed). |
| Onboarding & Scope Confirmation, Property Profile | **Shared template with conditional sections** | 80% identical fields; guest adds rotation/readiness fields; mixed adds a "start scope + confirm after N weeks" block. |
| Visit checklist | **Separate Private variant + separate Guest variant; Mixed uses the Private variant + a classification header** | Genuine divergence: private = "state since last visit / readiness before Owner arrival"; guest = "post-stay condition / readiness before next arrival". Two field forms is cheaper than one overloaded form. Mixed starts on the private form until real use is observed, then switches. |
| Cleaning/readiness protocol | **Shared protocol, two trigger modes** (owner-arrival readiness vs guest turnover) | Same capability, different trigger. One protocol with a trigger field. |
| Report types | **One shared report architecture across all pathways** | Doctrine §10 is deliberately pathway-agnostic; only the "visit context" field changes. |
| Escalation / emergency | **One shared model** | Decision logic and authority limits are identical regardless of pathway. |

Net: **3 places justify a real variant** (Usage Pathway Annex profiles, Visit checklist private/guest, onboarding conditional block). Everything else is one template with a pathway field. Mixed is never its own full system — it is "private baseline + classification + confirm-after-observation".

---

## 4. Required Fillable Fields

Estimator-style fields. Types: text, select, multi-select, date, number, money, yes/no, photo, signature, contact, address, file. Field vocabulary aligns with the live system: packages `structured_presence`/`active_oversight`/`extended_jurisdiction`; modes `private_use`/`active_guest`; scope elements `cleaning_readiness`, `turnover_cleaning`, `linen`, `guest_check`, `keyholding`, `vendor_access`.

### 4.1 Onboarding & Scope Confirmation

| Document | Field | Type | Required? | Example | Notes |
|---|---|---|---|---|---|
| Onboarding | Owner full name | text | Yes | "Jan Kowalski" | Matches contact schema `fullName`. |
| Onboarding | Owner email | contact | Yes | "owner@example.com" | Mirrors contact `email`. |
| Onboarding | Owner phone | contact | Yes | "+34 …" | Mirrors `phone`. |
| Onboarding | Preferred contact method | select | Yes | Email / WhatsApp / Phone | Mirrors `preferredContactMethod`. |
| Onboarding | Preferred language | select | Yes | Polish / English | Mirrors `preferredLanguage`. |
| Onboarding | Property address | address | Yes | Torrevieja … | Mirrors `propertyLocation`. |
| Onboarding | Property type | select | Yes | Apartment / House / Villa / Other | Mirrors `propertyType`. |
| Onboarding | Usage pathway | select | Yes | private-use-only | Mirrors `currentStatus`; drives the Pathway Annex profile. |
| Onboarding | Package | select | Yes | Basic / Extended / Full / Not sure | Mirrors `expectedPackage`; do not redefine meanings. |
| Onboarding | Operational mode | select | Yes | private_use / active_guest | Estimator mode. |
| Onboarding | Scope elements | multi-select | No | keyholding, cleaning_readiness | From the six locked scope keys only. |
| Onboarding | Access frequency expectation | text | No | "2× / month" | Mirrors `expectedAccessFrequency`. |
| Onboarding | Data-processing consent | yes/no | Yes | Yes | **[LAWYER REVIEW REQUIRED]** wording. |
| Onboarding | Photo consent | yes/no | Yes | Yes | Scope + purpose must be stated. |
| Onboarding | Consent to begin service before 14-day withdrawal ends | yes/no | Conditional | Yes | **[LAWYER REVIEW REQUIRED]**; only if early start requested. |
| Onboarding | Owner signature | signature | Yes | — | |

### 4.2 Property Profile

| Document | Field | Type | Required? | Example | Notes |
|---|---|---|---|---|---|
| Property Profile | Property reference ID | text | Yes | "SEN-PROP-014" | Internal key. |
| Property Profile | Size (m²) | number | Yes | 85 | Estimator input 20–1000. |
| Property Profile | Bedrooms | select | Yes | B1 / B2 / B3 / B4P | Estimator bedrooms band. |
| Property Profile | Floor / access notes | text | No | "3rd floor, no lift" | |
| Property Profile | Utilities shut-off locations | text | No | "water valve under sink" | Supports emergency protective action. |
| Property Profile | Alarm / community rules | text | No | | Feeds Access Annex. |
| Property Profile | Known risk areas | multi-select | No | damp, balcony seal | Feeds inspection depth. |
| Property Profile | Baseline photos | photo | No | | Establishes "state since last visit". |

### 4.3 Access & Key Custody

| Document | Field | Type | Required? | Example | Notes |
|---|---|---|---|---|---|
| Key Custody | Keys received (count + labels) | number + text | Yes | "3 — front, mailbox, gate" | Register entry. |
| Key Custody | Custody method / location | select | Yes | "labelled, secured store" | Not the property address. |
| Key Custody | Authorised persons | multi-select (contacts) | Yes | operator + named cleaner | Ties to Authorised-Persons register. |
| Key Custody | Third-party access allowed? | yes/no | Yes | Yes | Drives vendor protocol. |
| Key Custody | Emergency entry permitted? | yes/no | Yes | Yes (within authority) | **[LAWYER REVIEW REQUIRED]**. |
| Key Custody | Key handover signature | signature | Yes | — | Receipt on both handover and return. |
| Key Custody | Return date | date | Conditional | — | On offboarding. |

### 4.4 Visit Checklist (Private / Guest variants)

| Document | Field | Type | Required? | Example | Notes |
|---|---|---|---|---|---|
| Visit checklist | Visit date/time | date | Yes | 2026-07-10 09:00 | |
| Visit checklist | Visit context | select | Yes | scheduled / post-stay / pre-arrival / incident / first-assessment | Mirrors report "visit context". |
| Visit checklist | Access/security OK | yes/no | Yes | Yes | Matches live sample-report checklist item. |
| Visit checklist | Doors/windows OK | yes/no | Yes | Yes | |
| Visit checklist | Water system (visual) | select | Yes | OK / Observation | Sample report already models an "Observation" state. |
| Visit checklist | Electrical (visual) | select | Yes | OK | |
| Visit checklist | Boiler/HVAC (visual) | select | Yes | OK | |
| Visit checklist | Moisture / odour signs | select | Yes | None / Present | |
| Visit checklist (guest) | Post-stay condition | select | Guest: Yes | OK / Damage / Missing item | Guest variant only. |
| Visit checklist (guest) | Readiness before next arrival | yes/no | Guest: Yes | Ready / Blocked | Guest variant only. |
| Visit checklist (private) | State since last visit | text | Private: Yes | "no change" | Private variant only. |
| Visit checklist | Evidence photos | photo | Yes (if finding) | SEN-CAP-01 | Reference-numbered, per live component. |
| Visit checklist | Finding → decision needed? | yes/no | Yes | Yes | Triggers Decision Request. |

### 4.5 Report / Decision documents

| Document | Field | Type | Required? | Example | Notes |
|---|---|---|---|---|---|
| Visit report | Header (property/date/context/pathway/package/operator) | text | Yes | — | Doctrine §10 header. |
| Visit report | Scope checked / not checked | multi-select | Yes | — | "not checked" is mandatory honesty. |
| Visit report | Observations | text | Yes | — | Grouped by area. |
| Visit report | Risk / priority | select | Yes | routine / attention / urgent | Operational priority, not legal conclusion. |
| Decision request | Decision owner | contact | Yes | Owner | |
| Decision request | Options + est. cost | money | Yes | €120–€180 | May reference estimator ranges; must not invent new pricing. |
| Decision request | Deadline | date | Yes | 2026-07-12 | |
| Decision request | Authority basis | select | Yes | within EUR 300 / above limit | Ties to Emergency Authority Annex. |
| Completed action | Action taken | text | Yes | "shut off valve" | |
| Completed action | Authority basis used | select | Yes | emergency within limit | |
| Decision & action log | Status | select | Yes | approved / rejected / no-response / deferred | Running record. |

### 4.6 Vendor / third-party coordination

| Document | Field | Type | Required? | Example | Notes |
|---|---|---|---|---|---|
| Vendor access | Vendor name + trade | text | Yes | "Fontanero — leak" | |
| Vendor access | Authorised by | select | Yes | Owner / within scope | |
| Vendor access | Quote amount | money | Conditional | €240 | If above limit → Decision Request. |
| Vendor access | Access date/time | date | Yes | — | |
| Vendor access | Data agreement signed | yes/no | Yes | Yes | **[LAWYER REVIEW REQUIRED]** processor agreement. |
| Vendor access | Post-work evidence | photo | Yes | — | Vendor performance not guaranteed by Sentinel. |

---

## 5. Customer Contract Architecture

**All of Section 5 is [LAWYER REVIEW REQUIRED]. Structure only — not final legal text.**

Design: one **Master Service Agreement (MSA)** plus modular annexes. The MSA is stable; annexes carry the property-specific and pathway-specific detail so the core contract rarely changes.

| Document | Purpose | Required clauses (structure) | Fillable fields | Risk if missing | Lawyer-review notes |
|---|---|---|---|---|---|
| **Master Service Agreement** | The binding commercial relationship. | Parties; service definition (Structured Property Oversight, **not** management/concierge/rental); term & renewal; fees & payment; SLA = response/decision timing only; liability boundary; data-controller identity; governing law (Spain) & jurisdiction; withdrawal right (14-day) + express consent to begin | Owner identity; property ref; start date; package; term; signature | No enforceable relationship; undefined obligations | Confirm distance/off-premises classification; withdrawal + service-start consent (TRLGDCU); liability cap language; align "service definition" with BRAND non-drift. |
| **Scope Register** | The single source of what is in/out of scope. | Included services; excluded services; frequency; authority limit; pathway reference | Scope elements (6 keys); frequency; exclusions | Scope disputes; drift into "we handle everything" | Must mirror estimator scope keys; exclusions mandatory. |
| **Package/Service Annex** | Binds the chosen package to obligations **without redefining meanings**. | Package (Basic/Extended/Full); what depth that package includes; SLA window; authority limit | Package select; SLA window | Package meaning drift | Do not alter protected package meanings or count; depth map only. |
| **Usage Pathway Annex** | Encodes private / guest / mixed operating profile. | Pathway classification; operating emphasis; report emphasis; mixed "start scope + confirm" clause | Pathway select; confirm-after date (mixed) | Wrong rhythm; "wrong package" framing | Enforce "start scope / confirmed rhythm" language; ban "package lock-in". |
| **Access & Key Custody Annex** | Legalises key holding and access. | Keys held; custody method; authorised persons; third-party access rules; emergency entry permission; return-on-termination | Key count/labels; authorised persons; entry permissions | Unauthorised-access liability; key-loss dispute | Key custody = personal-data + liability exposure; specify loss handling and insurance posture. |
| **Emergency Authority Annex** | Defines autonomous action limits. | Autonomous decision limit (EUR 300 standard / optional EUR 500 if agreed); allowed protective actions; above-limit approval; non-response rule | Limit select (300/500); allowed-actions list | Overreach or paralysis in emergencies | Close the doctrine's "open" non-response wording first (G3). |
| **Data / Photo / Report Privacy Annex** | GDPR/LOPDGDD compliance for the client relationship. | Controller identity; data categories; lawful basis per category; photo scope + purpose; retention + data-blocking; third-party processors; data-subject rights | Consents (data/photo); retention period | Regulatory exposure (AEPD); site promise mismatch | Align with live `privacy` notice; add processor agreements + RAT; Spanish data-blocking. |
| **Cancellation / Handover Annex** | Clean exit. | Notice period; withdrawal (14-day) vs ordinary cancellation; key return; final report; data retention/deletion after exit | Notice date; key-return date; final-report flag | Messy exit; retained keys/data disputes | Distinguish statutory withdrawal from contractual cancellation; deletion vs data-blocking. |

Design rule: the MSA references annexes by name; changing a property's scope changes an **annex**, not the MSA. This keeps re-signing rare and version control sane.

---

## 6. Operating Protocols

Each protocol follows the doctrine §9 template. Summarised here as: trigger · inputs · steps · evidence · Owner decision points · Sentinel authority-limit points · exclusions · output record · pathway applicability. All emergency/non-response protocols are **[LAWYER REVIEW REQUIRED]** until doctrine amendments B and G land.

| Protocol | Trigger | Key inputs | Core steps | Evidence | Owner decision points | Authority-limit point | Exclusions | Output record | Pathway |
|---|---|---|---|---|---|---|---|---|---|
| **Scheduled inspection** | Calendar per package frequency | Keys, scope, access rules | Access → checklist → photo findings → report | Checklist + photos | Only if finding exceeds scope | Routine fixes within scope only | No hidden-area/technical diagnosis | Visit report | All |
| **Private absence check** | Private-use rhythm | Baseline photos, "since last visit" | Verify security, water/power/ventilation, readiness | Photos, state note | Pre-arrival readiness gaps | Minor readiness within scope | Not a guest turnover | Visit report | Private / Mixed(start) |
| **Pre-arrival readiness** | Owner arrival date | Arrival date, readiness list | Confirm readiness, flag blockers | Readiness photos | Blocker resolution | Within-scope readiness actions | Not lifestyle prep/stocking beyond scope | Readiness note | Private / Mixed |
| **Post-stay / rotation check** | Guest departure | Departure time, next arrival | Inspect post-stay condition, separate cleaning vs finding vs damage | Before/after photos | Damage decision, cleaning approval | Turnover cleaning if in scope | Not rental management / not guest billing | Post-stay report | Guest / Mixed(confirmed) |
| **Cleaning / readiness coordination** | Readiness or turnover need | Cleaner contact, scope | Brief cleaner, verify result, log | Handoff + verification photos | Extra cleaning beyond scope | Coordinate within scope | Not "we are the cleaning service" | Cleaner handoff record | Scoped |
| **Cleaner handoff** | Cleaner engaged | Access, task list, data agreement | Authorise access, task, verify, close | Access log + photos | — | Access within authorised persons only | Cleaner is coordinated, not employed-by-Owner claim | Handoff sheet | Scoped |
| **Visible damage / finding report** | Finding during any visit | Observation, photos | Isolate finding → issue report → decision request if needed | Reference-numbered photos | If above scope/limit | Protective-only within limit | No legal/insurance conclusion | Issue report | All |
| **Owner decision request** | Action exceeds scope/limit | Options, cost, deadline | Present options + cost + deadline; await | Decision log | The decision itself | Nothing acted above limit until approved | No pressure/urgency framing | Decision request | All |
| **Owner non-response** | Deadline passes, no reply | Prior request, urgency level | Follow escalation cadence; distinguish protective/waiting/deferred | Contact-attempt log | Deferred until reachable | Protective action only within emergency authority | No implied guaranteed resolution | Non-response record **[LAWYER REVIEW REQUIRED]** | All |
| **Emergency protective action** | Immediate risk (leak, security) | Emergency authority annex | Assess → act within EUR 300/500 → document → notify | Photos + authority basis | Above-limit follow-up | Hard stop at agreed limit | No repairs beyond protective scope | Completed action summary **[LAWYER REVIEW REQUIRED]** | Scoped |
| **Vendor / technician access** | Repair/quote needed | Vendor, quote, data agreement | Authorise → supervise access → capture evidence | Access log + work photos | Quote approval if above limit | Access + coordination only | Vendor performance not guaranteed | Vendor access record | Scoped |
| **Key / access failure** | Lock/alarm/access fails | Key register, community rules | Diagnose, restore access, document | Photos + log | If locksmith/vendor above limit | Protective access within authority | No forced entry beyond agreed rules | Access-failure report | All |
| **Cancellation / handover** | Notice or withdrawal | Notice, key register | Confirm cancellation type, return keys, final report, data step | Return receipt | Final confirmations | — | No retained keys/data beyond agreed | Handover record **[LAWYER REVIEW REQUIRED]** | All |

---

## 7. Scenario Stress Test

| Scenario | Documents needed | Fields needed | Failure if missing | Recommended variant |
|---|---|---|---|---|
| Empty property, damp/leak sign found | Private absence check; Issue report; Decision request; (Emergency protective action if active leak) | Water-system status=Observation; risk/priority; photo refs; authority basis | Vague "concern" instead of a decision; overreach or paralysis on spend | Private (Mixed uses private baseline) |
| Owner wants pre-arrival readiness + cleaning | Pre-arrival readiness; Cleaning/readiness coordination; Cleaner handoff | Arrival date; readiness list; scope element `cleaning_readiness`; cleaner contact | Readiness gap on arrival; cleaning drifts outside scope | Private / Mixed |
| Guest leaves damage before next guest | Post-stay/rotation check; Issue report; Decision request; Turnover cleaning | Post-stay condition=Damage; next-arrival date; before/after photos; cost options | Turnover becomes informal rental management; damage undocumented | Guest |
| Mixed-use property, first month | Onboarding (mixed block); Usage Pathway Annex (mixed profile); Private absence check as baseline | Pathway=mixed; confirm-after date; "start scope" flag | Wrong rhythm locked too early; "wrong package" framing | Mixed (start scope → confirm) |
| Key / alarm / access failure | Key/access failure protocol; Access & Key Custody Annex; Vendor access (if locksmith) | Key register; community/alarm rules; authority basis; vendor quote | Unauthorised entry; liability exposure; no evidence trail | All |
| Owner unreachable during urgent issue | Owner non-response procedure; Emergency Authority Annex; Completed action summary | Contact-attempt log; urgency; EUR limit; protective-action list | Improvised action or dangerous paralysis; legal exposure | All **[LAWYER REVIEW REQUIRED]** |
| Vendor needs access + quote approval | Vendor access; Decision request; Processor/data agreement | Quote amount vs limit; data-agreement=yes; access log | Above-limit spend without approval; GDPR gap with subcontractor | Scoped |
| Customer disputes scope | Scope Register; Package/Service Annex; Usage Pathway Annex | Included/excluded lists; frequency; pathway | No authoritative scope reference; drift arguments | All |
| Privacy issue with photos/report | Data/Photo/Report Privacy Annex; Photo policy; Retention & data-blocking schedule; Data-subject-rights procedure | Photo consent; purpose; retention period; blocking status | AEPD exposure; site-promise mismatch; deletion mishandled | All **[LAWYER REVIEW REQUIRED]** |
| Service cancellation and key return | Cancellation/Handover Annex; Key custody register; Final report | Notice/withdrawal type; key-return date + signature; data step | Retained keys/data; disputed exit; withdrawal mishandled | All **[LAWYER REVIEW REQUIRED]** |

Every scenario resolves to a **decision + a record**, satisfying the doctrine acceptance test.

---

## 8. Priority Roadmap — first 10 documents

| # | Document | Timing | Review | Audience |
|---|---|---|---|---|
| 1 | **Commit the doctrine into `doc/` + Document Register / naming convention** | Must exist before first customer | Internal only | Internal |
| 2 | **Master Service Agreement (structure)** | Must exist before first customer | **Lawyer review required** | Customer-facing |
| 3 | **Scope Register + Exclusions master** | Must exist before first customer | Internal + light legal | Customer-facing |
| 4 | **Data / Photo / Report Privacy Annex** (align with live privacy notice) | Must exist before first customer | **Lawyer review required** | Customer-facing |
| 5 | **Access & Key Custody Annex + Key custody register** | Must exist before first customer | **Lawyer review required** | Customer-facing |
| 6 | **Onboarding & Scope Confirmation + Property Profile** | Must exist before first customer | Internal + light legal | Customer-facing |
| 7 | **Emergency Authority Annex + Owner non-response rule** | Must exist before first customer | **Lawyer review required** (closes doctrine G3/B) | Customer-facing |
| 8 | **Standard visit report + Decision request + Completed action templates** | Must exist before first customer | Internal only | Customer-facing (as records) |
| 9 | **Visit checklist (private + guest variants) + Package→Checklist Depth Map** | Private variant before first customer; guest variant before first guest-use customer | Internal only | Internal / excerpt |
| 10 | **Vendor access + Processor/data agreement** | Can wait until first vendor/guest-use customer | **Lawyer review required** (data agreement) | Internal |

Guest-rotation-only protocols (turnover, rotation timeline) can wait until the **first guest-use customer**. Everything in rows 1–8 gates the first customer of any pathway.

---

## 9. Website Implications

What may appear on **How It Works**, governed by PROOF-LAYER-INVENTORY.md. The current live report proof is the photographed REC-01-style example document deployed in `eeae1dd`, not the retired native `SampleInspectionReport` / `DecisionReadyReport` mockup.

| Document fragment | Public status | Condition |
|---|---|---|
| Photographed REC-01-style report document / report architecture | **Allowed as example/documentary structure** | Must carry the example-document/not-client-report label. Source proof only; not client proof or downloadable public paperwork. |
| Anonymised checklist structure | **Allowed as example structure** | No real property/client data. |
| Decision-log format ("one observation → one owner decision") | **Allowed as example structure** | Illustrative only. |
| Access register excerpt | **Allowed as example structure** | Fake property data, clearly marked. |
| Pathway process spine (private/guest/mixed) | **Allowed** | Already live; structural, not proof. |
| Real redacted visit report | **Must wait** | Only once a real client report exists and is redacted (PROOF-LAYER "Replacement Direction"). |
| Real photos of client property / findings | **Must wait** | Real redacted assets only; no synthetic-as-real. |
| Contract / MSA text | **Must never be shown publicly** | Legal document; not marketing surface. |
| Key custody / emergency-authority internal rules | **Must never be shown publicly** | Operational security. |
| Client case studies / testimonials / before-after | **Must never be shown** (until real + consented + redacted) | Doctrine §15 + BRAND anti-fake-proof. |

Required public label on any example fragment:

> **Example structure. Not a client report.**

Purpose of public samples: show *how Sentinel thinks and organises decisions*, never to claim operational history that does not exist yet.

---

## Rules preserved throughout

- Sentinel = local owner representation / Structured Property Oversight. No concierge / management / rental / hospitality / "we handle everything" drift.
- Cleaning is a scoped capability inside oversight, not the category.
- Guest rotation support is not rental management.
- Vendor coordination does not guarantee vendor performance.
- SLA = response/decision timing, not guaranteed resolution.
- Above the agreed authority limit (EUR 300 standard / optional EUR 500) requires Owner approval.
- Mixed/undetermined use is a starting scope to confirm, never a "wrong package".
- No estimator/pricing/package/route/contact-schema/legal changes were made by this document.

## Sources (risk identification only — not legal advice)

- Spain right of withdrawal (services), TRLGDCU Arts. 102/105: [abogacia.es](https://www.abogacia.es/en/publicaciones/blogs/blog-de-derecho-de-los-los-consumidores/el-derecho-de-desistimiento-en-caso-de-prestaciones-de-servicio-a-consumidores/), [mariscal-abogados.com](https://www.mariscal-abogados.com/the-right-of-withdrawal-in-the-context-of-online-shopping-in-spain/)
- EU consumer rights / withdrawal summary: [Your Europe](https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_en.htm), [EUR-Lex](https://eur-lex.europa.eu/EN/legal-content/summary/consumer-information-right-of-withdrawal-and-other-consumer-rights.html)
- Spain LOPDGDD, data blocking (Art. 32), retention, RAT, recipients: [gdprhub.eu](https://gdprhub.eu/Data_Protection_in_Spain), [anroprivacy.es](https://anroprivacy.es/essential-lopdgdd-privacy-documents-spain/), [caseguard.com](https://caseguard.com/articles/the-lopdgdd-personal-privacy-protection-in-spain/)

_End of document system design._

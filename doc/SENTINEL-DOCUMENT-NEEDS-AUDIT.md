# SENTINEL-DOCUMENT-NEEDS-AUDIT.md

Status: Audit only. This file identifies **what documents Sentinel needs**. It does **not** draft
contracts, templates, protocols, SOPs, or final wording, and it changes no app code, copy, schema,
routes, legal substance, pricing, or estimator logic.

Project: Sentinel Costa Blanca
Authority order (unchanged): `DECISIONS.md` → `STATUS.md` / `TASK.md` → reference docs → this audit.
If this file conflicts with `DECISIONS.md`, `DECISIONS.md` wins and the conflict is reported.

Scope of this pass:
- Establish the **document universe** Sentinel must have to operate at its core.
- Separate **external / customer-facing** from **internal / operator** documentation.
- Identify the **minimum viable first-customer set**, the **pathway-variant logic**, the **Owner
  decisions still missing**, and the **do-not-draft-yet** gates.

Legal notes below identify **risk areas** from what the live site already promises. They are not legal
advice. Anything touching a binding obligation is flagged **[LAWYER REVIEW REQUIRED]**.

Relationship to `SENTINEL-DOCUMENT-SYSTEM.md`: that file is a *design* draft (proposed architecture,
field lists, roadmap). This file is the *needs audit* that should sit in front of it — it derives the
requirement from the live product surface, so template drafting is justified by an actual promise, not
by the design file alone. Where they agree, this audit is the authority on **whether** a document is
needed; the design file remains a candidate structure for **how** it might look, subject to the Owner
decisions in Section 6.

---

## 0. Method and evidence base

Promises were extracted from source (not crawled HTML — the live Contact page renders client-side and
shows `Ładowanie...` before hydration, so source was authoritative). Evidence read:

- Pages: `app/[locale]/page.tsx` (home + pathway states), `services/page.tsx`, `how-it-works/page.tsx`,
  `contact/page.tsx`, `about/page.tsx`, `privacy/page.tsx`, `terms/page.tsx`.
- Contracts: `app/api/contact/route.ts` (Zod schema), `lib/email.ts` (notification + auto-response
  copy and payload labels), `lib/estimatorMatrix.ts` (scope keys, packages, ranges), `lib/pathway.ts`.
- Copy source of record: `messages/pl.json` (FAQ, Terms, Privacy, page copy). PL/EN are structurally
  parallel (`3264` lines each).

Locked facts used as constraints (from `DECISIONS.md`): packages `Podstawowy / Rozszerzony / Pełny`
(Basic / Extended / Full); Full cadence `min. 3/mies.`; SLA = response/decision timing only; autonomous
limit EUR 300 standard / EUR 500 optional; pathways `private-use-only`, `regular-guest-stays`,
`mixed-not-defined`; service area Torrevieja + ~50–70 km; contact details
`sentinelcostablanca@gmail.com`, `+34 694 22 90 35`; `noindex,nofollow` active.

---

## 1. Source promise extraction

For each route: **explicit promises** · **implied operational obligations** · **exclusions / boundaries**
· **data collected or implied** · **documents required to support the promise safely**.

### 1.1 Home + pathway states — `/pl`, `/pl?pathway=private-use-only`, `/pl?pathway=regular-guest-stays`, `/pl?pathway=mixed-not-defined`

- **Explicit promises:** on-site owner representation in the area; named local operator (Aleksy Gugała
  presented as identity proof); condition checks, documentation, and action-within-limits; keys/access
  and cleaning/readiness named as capabilities; an indicative price/estimator cue; per-pathway priority
  summaries and a "what changes" list (5–6 points per pathway).
- **Implied obligations:** hold/administer keys and access; perform recurring inspections; produce a
  record; act within a financial/authority limit; qualify fit before accepting; treat mixed use as a
  *starting scope to confirm*, not a locked package.
- **Exclusions / boundaries:** not concierge / not rental management / not generic property management /
  not cleaning-only or keyholding-only; mixed must avoid "wrong package" / "lock-in" framing.
- **Data collected / implied:** pathway selection via query param (no PII on home); operator identity is
  published (personal-data of staff — internal HR/consent consideration).
- **Documents required:** Scope Register + Exclusions master (to back "action within limits" and the
  non-drift boundary); Usage Pathway definition (to back the private/guest/mixed differentiation);
  Access & Key Custody instrument (to back "we hold keys"); Emergency Authority definition (to back
  "action within limits"); Operator identity/consent note (staff photo + name published).

### 1.2 Services — `/pl/services`

- **Explicit promises:** three-package model; visit rhythm (standard 2 visits/month; Full `min. 3/mies.`);
  "access events" as a defined unit (Extended = 2/month, further ones agreed/billed); documented
  readiness, access, coordination, and decision outputs ("Operational Layer output record"); an indicative
  monthly range via the estimator; an **execution-only checkpoint** listing what is available
  (keyholding, cleaning, one-time access, seasonal prep) vs its limitations (no regular checks, no cyclic
  reporting, no emergency SLA, no decision authority); a qualification gate before onboarding.
- **Implied obligations:** deliver per-package inspection depth; coordinate third-party access (cleaner/
  technician) under Extended/Full; produce the record artifacts shown; hold a decision/authority limit;
  price additional/out-of-scope work separately with approval before execution.
- **Exclusions / boundaries (from `notIncluded` + `executionOnly`):** no guarantee of fixes; contractor
  work is the contractor's responsibility; no concierge; no construction/major works; nothing outside the
  service area; no operational action without agreed scope. Execution-only has explicit lockouts.
- **Data collected / implied:** estimator inputs — package (`structured_presence` / `active_oversight` /
  `extended_jurisdiction`), mode (`private_use` / `active_guest`), size (m², 20–1000), bedrooms
  (B1/B2/B3/B4P), scope elements (`cleaning_readiness`, `turnover_cleaning`, `linen`, `guest_check`,
  `keyholding`, `vendor_access`), and an indicative range. These map 1:1 to onboarding fields.
- **Documents required:** Package↔depth mapping; Scope Register + Exclusions master; Visit Frequency /
  rhythm definition; Access-event definition & counting rule; Authority-limit instrument; Standard record
  templates (visit report / decision request / completed action); a Price/Range confirmation note that
  *references* the protected estimator output without redefining it.

### 1.3 How It Works — `/pl/how-it-works`

- **Explicit promises:** a defined procedure presented through the compact hero, labelled case-thread/route strip,
  inspection matrix, photographed REC-01-style example report, decision threshold, continuing rhythm/activation
  notes, and CTA. The report proof demonstrates observation, evidence, and next-step structure; authority boundaries
  remain in the separate decision-threshold section.
- **Implied obligations:** every visit yields a record; every finding that exceeds scope/limit yields a
  decision request; protective action stays within the limit; report structure includes "checked / not
  checked" honesty.
- **Exclusions / boundaries:** SLA = response/decision timing, not guaranteed resolution; no diagnosis
  beyond visible facts; above-limit requires owner approval.
- **Data collected / implied:** property reference, visit date/context, checklist states, reference-numbered
  evidence photos, decision options + indicative cost, authority basis.
- **Documents required:** Standard visit report; Issue report; Decision request; Completed action summary;
  Decision & action log; the internal visit checklist(s) behind the report; the authority-limit instrument.
  Public sample fragments must keep the example-document/not-client-report label (PROOF-LAYER rule). The current
  photographed document is documentary/source material, not real client proof or downloadable public paperwork.

### 1.4 FAQ — `/pl/faq`

FAQ is the densest promise/exclusion surface. Notable commitments already public:

- **Service model:** monthly package only; **no single visit without a package**; work begins only after
  onboarding; out-of-scope work needs description + quote + approval **before** execution; Basic = owner
  arranges access, third-party access coordination requires Extended/Full.
- **Access events:** one controlled third-party entry (arrival → open → presence/supervision → close →
  short record); Extended includes 2/month, further ones are agreed/billed.
- **Emergencies & authority:** emergency defined (active leak, breached security, gas/electric/fire);
  WiFi / guest comfort / minor faults are not emergencies; **if the threat is immediate and the owner is
  unreachable, Sentinel may secure the property up to EUR 300 and document everything** (Full: within the
  agreed limit, standard 300 / optional 500). **No financial liability for damage; Sentinel does not
  replace insurance; the owner must carry proper property insurance.**
- **Operations:** SLA windows 48h / 24h / same-day by package; long technician windows must be pre-planned
  (multi-hour on-site waiting not in Basic/Extended; Full may include presence within agreed limits);
  meter reads if accessible; standard 2 visits/month, rarer rhythm may reduce responsibility scope.
- **Practical:** valuables only by clear agreement + inventory register (no liability for unreported
  valuables); pet care only occasionally by agreement, not standard; package change by mutual written
  agreement from next billing period; guest stays supported only as an agreed module — **bookings,
  pricing, guest communication, and running the rental stay out of scope**.
- **Communication & policy:** new inquiries via form/email/general number; **active clients get a separate
  operational channel (phone/WhatsApp), formal agreements go to email; the public form is not an emergency
  line**; Sentinel may refuse (out of area / expectations mismatch / not feasible), assessed before
  onboarding; prices/terms may change with notice, not retroactive, from next billing period; anything not
  listed is not automatically included; **legal compliance of the property stays with the owner**.
- **Documents required:** Master Service Agreement + Scope/Exclusions; Access-event definition; Emergency
  Authority + **Owner non-response rule** (the FAQ has already committed to a public version of this — it
  must be reconciled with, not contradicted by, the internal rule); Liability/Insurance posture statement;
  Valuables/inventory addendum; Change-of-package procedure; Guest-module scope annex; Communication-channel
  / onboarding note; Service-rejection & termination criteria.

### 1.5 About — `/pl/about`

- **Explicit promises:** a real local operating presence; a named operator and a small team roster;
  "Sentinel is / is not" boundary doctrine; editorial "why we exist" narrative.
- **Implied obligations:** consistency between the published team/identity proof and what documents claim —
  documents must say "assigned operator," not imply a guaranteed headcount or per-property roster.
- **Exclusions / boundaries:** identity/team proof only; no client-property evidence, no per-property
  assignment guarantee, no concierge/luxury/rental drift.
- **Data collected / implied:** staff personal data (names, photos) published — internal consent basis.
- **Documents required:** internal Operator/Staff consent & identity note; nothing customer-facing new, but
  contract language on "assigned operator" must match About's framing.

### 1.6 Contact — `/pl/contact`

- **Explicit promises:** structured intake / qualification (not lead-gen); response within 24–48h and a
  service-area check (Torrevieja + 50–70 km); a reference number on submit; auto-response describing next
  steps; direct channels for questions; "final scope confirmed after structured review."
- **Implied obligations:** review each inquiry, verify the area, and reply on the promised window; store and
  process submitted personal data lawfully; hand estimator/pathway context into the review.
- **Exclusions / boundaries:** cannot service outside the geographic boundary; estimate is indicative;
  the form is not an emergency line.
- **Data collected (from the Zod schema, protected — do not change):** `fullName`, `email`, `phone`,
  `preferredContactMethod` (Email/WhatsApp/Phone), `preferredLanguage` (English/Polish), `propertyLocation`,
  `propertyType` (Apartment/House/Villa/Other), `currentStatus` (pathway slug), `expectedPackage`
  (Basic/Extended/Full/Not sure), optional `expectedAccessFrequency`, optional `primaryServiceNeeds`,
  required `acknowledgment`, plus optional pathway + estimator context (package/mode/size/sqm/bedrooms/
  scope/range). Reference number format `#SEN-YYYYMMDD-NNNN`. Email delivery via Resend to
  `sentinelcostablanca@gmail.com`.
- **Documents required:** Privacy/consent basis for the intake (the acknowledgment checkbox needs a
  document behind it); Data/Photo/Report retention policy; internal intake-review / qualification SOP;
  Data-subject-rights procedure; the auto-response and 24–48h promise must be matched by an internal
  response-time discipline.

### 1.7 Legal pages — `/pl/privacy`, `/pl/terms`

These are **already-published binding-adjacent promises** and are the strongest source triggers, because a
document that contradicts them creates site inconsistency.

**Privacy notice already promises:** Sentinel is the data controller; processing limited to inquiries,
contract execution, **invoicing, online-payment handling**, and operational communication; data categories
include name/email/phone/location; lawful bases (contract/pre-contract, legal obligation, legitimate
interest, consent); **retention "for the duration of cooperation + legally required periods," then deletion
or anonymisation**; payment data handled by third-party processors (Sentinel does not store full card
data); cookies; full data-subject rights; **data shared with accounting, payment providers, and technology
partners**; security measures.
→ **Triggers:** a Data/Photo/Report Privacy instrument that matches these promises exactly (retention
period must be made concrete); **processor agreements** for accountant, payment provider, hosting, and any
cleaner/technician who accesses the property; a Record of Processing Activities (RAT); a Photo policy (the
site processes property photos but the notice does not yet name photo/key data explicitly).

**Terms of service already promise:** service definition = packaged local property representation (explicitly
**not** insurance / concierge / rental agency / general contractor / property management); area limit;
**monthly package model, "if not listed, not included," extras separately agreed**; SLA = response +
decision time, not full-resolution guarantee; **Full decision limit 300 € / optional 500 €, above requires
owner approval**; liability (responsible for service delivery per package, documentation, SLA response;
**not** responsible for force majeure, third-party contractor errors, insurance-type losses); **billing
monthly in advance, 3-month minimum, transfer or online payment, non-payment → suspension/termination**;
**cancellation by client at end of billing period; Sentinel may terminate for scope breach, non-payment,
operational impossibility, or behaviour preventing safe service**; package changes need mutual written
agreement and are not retroactive; **Spanish law and courts**.
→ **Triggers:** a Master Service Agreement that operationalises every clause above; a Cancellation/Handover
instrument; a Payment/Invoice basis; a Liability/Insurance posture statement; a distance-contract /
withdrawal clause (see Section 6 — currently absent from Terms and a real consumer-law gap).

---

## 2. Internal vs external distinction

Five document classes. The same operating fact can appear in more than one class at different fidelity
(e.g. the authority limit is a *contract clause* externally and a *decision rule* internally).

1. **Customer-facing documents** — signed by or delivered to the Owner. Contracts and annexes, onboarding
   and consent forms, and **delivered records** (visit reports, decision requests, completed-action
   summaries). These carry legal weight; most need lawyer review. Language must obey the Copy Discipline
   Codex and non-drift rules.
2. **Internal SOPs** — how Sentinel executes: inspection/checking protocols, cleaning/readiness protocols,
   guest-rotation protocols, access/key handling, escalation and emergency procedures, intake/qualification
   procedure. Not shown to customers; only their *structure* may appear as labelled website examples.
3. **Internal registers / logs** — running operational records: key custody register, access-event log,
   authorised-persons register, photo-capture log, decision & action log, valuables/inventory register,
   document register/index, revision logs. These are the evidence trail behind the customer records.
4. **Legal / lawyer-review documents** — the subset that cannot ship without qualified review: MSA and all
   binding annexes, emergency-authority + owner-non-response wording, distance-contract/withdrawal handling,
   data/photo/retention instrument, processor agreements, liability/insurance posture. Flagged
   **[LAWYER REVIEW REQUIRED]** throughout.
5. **Public website examples** — anonymised *structure* fragments only (report skeleton, checklist shape,
   decision-log format, access-register excerpt), each carrying the mandatory label
   "Example structure. Not a client report." Contract text and internal security rules are never public.

---

## 3. Core document universe

Legend — **I/E**: Internal / External / Both. **Before 1st?**: needed before the first real customer.
**Lawyer?**: needs legal review before customer-facing use. **Pathway?**: does content vary by pathway?

| Document family | Specific document | I/E | Before 1st customer? | Lawyer? | Pathway variant? | Why needed | Source trigger |
|---|---|---|---|---|---|---|---|
| Legal / commercial | Master Service Agreement (MSA) | E | **Yes** | **Yes** | No (pathway is a field) | Binds all operational promises; no enforceable relationship without it | Terms page; Home/Services promises |
| Legal / commercial | Scope Register + Exclusions master | E | **Yes** | Light | Field | Single source of in/out of scope; backs "if not listed, not included" | Services `notIncluded`; FAQ; Terms §3 |
| Legal / commercial | Package / Service annex (depth per Basic/Extended/Full) | E | **Yes** | Light | No | Ties chosen package to obligations without redefining locked meanings | Services packages; Terms §3 |
| Legal / commercial | Usage Pathway annex (private / guest / mixed) | E | **Yes** | Light | **3 profiles** | Encodes rhythm/emphasis + mixed "start scope, confirm later" | Home pathways; DECISIONS |
| Legal / commercial | Access & Key Custody annex | E | **Yes** | **Yes** | Field | Legalises holding keys + third-party access; loss/liability | Home/Services "keys/access"; FAQ access events |
| Legal / commercial | Emergency Authority annex (+ owner non-response rule) | E | **Yes** | **Yes** | No | Defines 300/500 autonomous limit + unreachable-owner action | FAQ q10–q11; HIW report limits; Terms §5 |
| Legal / commercial | Data / Photo / Report privacy instrument | E | **Yes** | **Yes** | No | GDPR/LOPDGDD; must match published Privacy notice + photo/key data | Privacy page; Contact intake |
| Legal / commercial | Cancellation / Handover annex (+ withdrawal handling) | E | **Yes** | **Yes** | No | Clean exit; distance-contract 14-day withdrawal gap | Terms §7–§8; distance selling |
| Legal / commercial | Liability / Insurance posture statement | E | **Yes** | **Yes** | No | "No liability for damage / not insurance / owner insures" made canonical | FAQ q12; Terms §6 |
| Legal / commercial | Price / Range confirmation note | E | **Yes** | Light | Field | References protected estimator output; confirms monthly-in-advance + 3-mo min | Estimator; Terms §7 |
| Customer onboarding | Onboarding & Scope Confirmation form | E | **Yes** | Light | Conditional block | Converts intake into a confirmed scope; mirrors contact schema | Contact schema; "final scope after review" |
| Customer onboarding | Property Profile sheet | E/I | **Yes** | No | Field | Property ref, size/bedrooms, shut-offs, risk areas, baseline photos | Estimator inputs; inspection needs |
| Customer onboarding | Owner contact & decision-channel sheet | E/I | **Yes** | No | No | Establishes the "separate operational channel" FAQ promises | FAQ communication |
| Customer onboarding | Authorised-persons register | E/I | **Yes** | Light | Field | Who may access; ties to key custody + vendor access | FAQ access; key custody |
| Customer onboarding | Consent & acknowledgements sheet (data / photo / service-start) | E | **Yes** | **Yes** | No | Backs the contact `acknowledgment` checkbox + photo processing | Contact form; Privacy page |
| Internal SOP | Intake / qualification procedure | I | **Yes** | No | No | Backs 24–48h reply + area check + fit assessment | Contact promises; FAQ refusal |
| Internal SOP | Scheduled inspection protocol | I | **Yes** | No | Field | Executes the visit→checklist→report promise | HIW procedure; Services rhythm |
| Internal SOP | Private absence / pre-arrival readiness protocol | I | **Yes** | No | Private/Mixed | Executes private-use rhythm + owner-arrival readiness | Pathway copy; FAQ |
| Internal SOP | Cleaning / readiness coordination protocol | I | Before scoped customer | No | Trigger field | Executes scoped cleaning without becoming "the cleaner" | Services scope; Copy Codex §4.4 |
| Internal SOP | Post-stay / rotation + turnover protocol | I | Before 1st guest-use | No | Guest/Mixed | Executes guest module without rental management | FAQ guest module |
| Internal SOP | Escalation / emergency + non-response procedure | I | **Yes** | **Yes** | No | Executes 300/500 + unreachable-owner action safely | FAQ q10; HIW limits |
| Internal SOP | Vendor / technician access procedure | I | Before 1st vendor | **Yes** (data agmt) | Field | Coordinates + supervises + documents third-party work | FAQ technician; Services |
| Internal SOP | Key / access-failure procedure | I | **Yes** | Light | No | Restores access without unauthorised/forced entry | FAQ; key custody |
| Internal register | Key custody register | I | **Yes** | No | No | Evidence of keys held/returned | Key custody promise |
| Internal register | Access-event log | I | **Yes** | No | No | Counts/records controlled entries (Extended cap) | FAQ access events |
| Internal register | Photo-capture log | I | **Yes** | No | No | Reference-numbered evidence; supports retention/GDPR | HIW report; Privacy |
| Internal register | Decision & action log | I | **Yes** | No | No | Running record of owner decisions + authority basis | HIW decision log |
| Internal register | Valuables / inventory register | I | Conditional | Light | No | Backs "valuables only by agreement + inventory" | FAQ practical |
| Internal record templates | Visit report | E (delivered) | **Yes** | No | Context field | The core delivered artifact | HIW sample report |
| Internal record templates | Issue report | E (delivered) | **Yes** | No | No | Documents a finding | HIW; FAQ |
| Internal record templates | Decision request | E (delivered) | **Yes** | No | No | One finding → one owner decision + cost + deadline | HIW decision |
| Internal record templates | Completed-action summary | E (delivered) | **Yes** | No | No | Records protective/within-limit action | HIW; FAQ emergency |
| Internal field forms | Visit checklist — private variant | I | **Yes** | No | **Private variant** | Behind the private report | Pathway; inspection |
| Internal field forms | Visit checklist — guest variant | I | Before 1st guest-use | No | **Guest variant** | Behind the post-stay report | Guest module |
| Internal field forms | Key handover / return receipt | I/E | **Yes** | Light | No | Signed proof of custody transfer | Key custody |
| Internal field forms | Cleaner / vendor handoff sheet | I | Before scoped customer | No | Field | Briefs + verifies third-party work | Cleaning/vendor scope |
| Data / privacy | Record of Processing Activities (RAT) | I | **Yes** | **Yes** | No | LOPDGDD requirement given the processing already described | Privacy page |
| Data / privacy | Retention & data-blocking schedule | I | **Yes** | **Yes** | No | Makes the Privacy notice's retention promise concrete | Privacy §4 |
| Data / privacy | Photo policy | I | **Yes** | **Yes** | No | Scope/purpose/retention of property photos | HIW photos; Privacy |
| Data / privacy | Data-subject-rights procedure | I | **Yes** | Light | No | Executes the rights the Privacy notice grants | Privacy §7 |
| Data / privacy | Processor agreements (accountant, payments, hosting, cleaners/technicians) | I/E | Before that party acts | **Yes** | No | GDPR processor chain the Privacy notice already names | Privacy §8 |
| Internal admin | Document register / index + naming + revision-log standard | I | **Yes** | No | No | Version control + who may approve "customer-facing" | Governance gap |
| Internal admin | Operator / staff identity & consent note | I | **Yes** | Light | No | Consent for published names/photos; "assigned operator" language | About page |
| Website example | Labelled structure fragments (report / checklist / access register) | E (public) | Already live | No | No | Show *how Sentinel organises decisions*, not real evidence | PROOF-LAYER; HIW |

---

## 4. Minimum viable first-customer set (any pathway)

The smallest set that lets Sentinel accept and safely serve a **first real customer**. Everything here is
gated by the Owner decisions in Section 6 and the legal-review gates in Section 7.

**Legal / commercial (must be signed):**
1. Master Service Agreement **[LAWYER REVIEW REQUIRED]**
2. Scope Register + Exclusions master
3. Usage Pathway annex (with the mixed "start scope → confirm" clause)
4. Access & Key Custody annex + key handover/return receipt **[LAWYER REVIEW REQUIRED]**
5. Emergency Authority annex incl. **owner non-response rule** **[LAWYER REVIEW REQUIRED]**
6. Data / Photo / Report privacy instrument aligned to the live Privacy notice **[LAWYER REVIEW REQUIRED]**
7. Cancellation / Handover annex incl. **distance-contract / withdrawal handling** **[LAWYER REVIEW REQUIRED]**
8. Liability / Insurance posture statement **[LAWYER REVIEW REQUIRED]**

**Onboarding (turn intake into confirmed scope):**
9. Onboarding & Scope Confirmation form + Property Profile
10. Authorised-persons register + Owner decision-channel sheet
11. Consent & acknowledgements sheet (data / photo / service-start)

**Internal execution + evidence (deliver the promise):**
12. Intake/qualification SOP; Scheduled inspection SOP; Private-absence/readiness SOP; Escalation/emergency
    + non-response SOP; Key/access-failure SOP
13. Registers: key custody, access-event, photo-capture, decision & action
14. Record templates: visit report, issue report, decision request, completed-action summary
15. Visit checklist — **private variant**

**Data governance (site consistency + regulator exposure):**
16. RAT; Retention & data-blocking schedule; Photo policy; Data-subject-rights procedure; processor
    agreements for any party who acts before/at first service **[LAWYER REVIEW REQUIRED]**

**Admin:**
17. Document register/index + naming + revision-log + "who may approve customer-facing" rule
18. Operator/staff identity & consent note

**Deferrable to first guest-use customer:** guest visit-checklist variant, post-stay/rotation + turnover
protocols, guest-module scope annex, linen/turnover cleaner handoff. **Deferrable to first vendor event:**
vendor-access procedure + vendor processor agreement (unless a vendor is expected at onboarding).

---

## 5. Pathway variant logic

Principle (consistent with `DECISIONS.md` and the design draft): **one operating spine, property-specific
fields.** Duplicate a document only where the *risk shape* genuinely differs — not per pathway by default.
Rental-customer language is banned everywhere; mixed is a **starting scope to confirm**, never a wrong
package or a lock-in.

| Document | Variant decision | Reasoning |
|---|---|---|
| MSA, Scope Register, Access & Key Custody, Emergency Authority, Privacy, Cancellation, Liability | **One shared document; pathway = a field** | Legal/commercial obligations do not change by property use. Duplicating creates version drift. |
| Usage Pathway annex | **One document, three selectable profiles** | This *is* the place pathway differences belong: private / guest / mixed as expandable blocks. |
| Onboarding & Scope Confirmation, Property Profile | **Shared document with a conditional block** | ~80% identical; guest adds rotation/readiness fields; **mixed adds a "start scope + confirm after N weeks" block**. |
| Visit checklist | **Separate Private variant + separate Guest variant** | Real divergence: private = "state since last visit / readiness before owner arrival"; guest = "post-stay condition / readiness before next arrival." Two lean forms beat one overloaded form. |
| Mixed pathway | **Private baseline + classification header; confirm after observation** | No separate mixed system. Mixed starts on the private form + a classification note, then switches to guest once real use is observed. Mirrors the estimator's classification-before-estimate rule. |
| Cleaning / readiness protocol | **One protocol, two trigger modes** (owner-arrival readiness vs guest turnover) | Same capability, different trigger — a trigger field, not a second document. |
| Report / decision templates | **One shared architecture across all pathways** | Only the "visit context" field changes; the record structure is pathway-agnostic. |
| Escalation / emergency / non-response | **One shared model** | Decision logic and authority limits are identical regardless of pathway. |

**Net:** exactly **three** places justify a real variant — Usage Pathway annex profiles, the Visit
checklist (private/guest), and the onboarding conditional block. Everything else is one document with a
pathway field. **Do not build parallel private/rental systems.**

---

## 6. Missing Owner decisions

Template drafting is **blocked** until the Owner resolves these. Several are partly implied by the live
Terms/Privacy/FAQ, but "implied on the website" is not the same as "decided and lawyer-checked."

1. **Legal entity & signatory.** Who is the contracting party (individual autónomo vs company), the VAT/
   tax identity, and **who may promote a document to "customer-facing approved."** Nothing binding can be
   drafted without the named signatory. *(No entity is named anywhere in source.)*
2. **Cleaning execution model.** Does Sentinel employ cleaners, subcontract them, or only coordinate the
   owner's cleaner? This decides whether cleaner processor agreements and handoff sheets are employment or
   vendor instruments, and how far "cleaning within scope" can go without becoming "the cleaning service."
3. **Key-custody liability posture.** What happens on key loss; whether keys are labelled without the
   address; insurance/【liability】 for unauthorised access; whether emergency entry is pre-authorised. Drives
   the Access & Key Custody annex and its receipts.
4. **Owner non-response rule.** The FAQ already commits to "secure up to EUR 300 and document" when the
   owner is unreachable in an immediate threat. The Owner + lawyer must confirm the **exact** waiting-state
   / protective-action wording and make the internal SOP consistent with the public promise. *(This is the
   single most sensitive open item.)*
5. **Data / photo retention.** A concrete retention period and data-blocking approach. The Privacy notice
   promises retention "for the duration + legal periods" but no number; the Photo policy and Retention
   schedule cannot be finalised until the Owner fixes the period.
6. **Payment / invoice basics.** Terms already state monthly-in-advance, 3-month minimum, transfer or
   online payment. The Owner must confirm the **invoicing identity, payment processor, VAT treatment, late-
   payment/suspension mechanics**, and whether online payment is live at launch (Privacy references online
   payments — this must be true or the notice is inaccurate).
7. **Vendor / subcontractor relationship.** Standard terms for technicians/cleaners: are they Sentinel's
   subcontractors or the owner's vendors; does a data-processing agreement apply; how is "vendor performance
   not guaranteed" expressed. Drives the vendor procedure + processor agreement.
8. **Service rejection / termination triggers.** Terms list breach of scope, non-payment, operational
   impossibility, and unsafe-service behaviour; FAQ confirms refusal rights. The Owner must confirm the
   **notice mechanics, cure periods, and the distance-contract 14-day withdrawal handling** (currently
   **absent** from Terms — a genuine consumer-law gap for remote-signed contracts).

Additional cross-cutting confirmations (smaller, but block specific documents):
- **PL public pathway label** for `private-use-only`: the Copy Codex's structural label is *Nieobecność
  prywatna*; ensure no customer document introduces a different label. A copy-parity check, not a business
  change.
- **"Assigned operator" language** must match the About team framing — no guaranteed headcount or per-
  property roster claims.
- **Package↔checklist depth** must be expressed as depth of the *same* oversight, never as new promises
  that could drift from the locked package meanings.

---

## 7. Do-not-draft-yet list

Do **not** draft final wording for these until the paired Owner decision (Section 6) and legal review are
in place. Structural placeholders may be *outlined* internally, but no customer-facing text should be
produced:

- **Master Service Agreement** and every binding annex — blocked on decisions 1, 6, 8 + full lawyer review.
- **Emergency Authority annex + owner non-response wording** — blocked on decision 4; must be reconciled
  with the public FAQ promise before either is finalised.
- **Access & Key Custody annex** (incl. emergency-entry permission and key-loss handling) — blocked on
  decision 3.
- **Data / Photo / Report privacy instrument, Photo policy, Retention & data-blocking schedule, RAT** —
  blocked on decision 5; must match the live Privacy notice.
- **Processor / subcontractor data agreements** — blocked on decisions 2 and 7.
- **Cancellation / Handover annex incl. distance-contract / withdrawal clause** — blocked on decision 8;
  the withdrawal right is currently unaddressed in Terms.
- **Liability / Insurance posture statement** — blocked on legal review; must not weaken or overstate the
  FAQ/Terms position.
- **Price / Range confirmation note** — must not restate or redefine protected estimator output; wait until
  decision 6 fixes invoicing identity and the launch pricing is Owner-confirmed (`STATUS.md` lists "final
  commercial pricing/range confirmation" as Not Done).

Everything on this list stays internal-draft-only until its gate clears. Per the design draft's rule:
until the data-governance, non-response, withdrawal, and liability items are closed, **no customer-facing
contract or emergency document may ship.** Internal SOPs, registers, and record *templates* (which carry no
new legal promise) may be drafted earlier.

---

## 8. Recommended next step

Do **not** draft yet. After this audit, the recommended **first five documents to draft** — chosen because
they unblock the most downstream work and carry the least legal risk — are:

1. **Document register / index + naming + revision-log + approval-authority rule.** Internal only, no legal
   risk, and it establishes *who* may approve customer-facing documents (Owner decision 1). Everything else
   plugs into it.
2. **Scope Register + Exclusions master.** Internal-approved reference that every contract, SOP, and record
   points to; directly backs the live "if not listed, not included" promise; low legal risk.
3. **Standard record set — visit report, issue report, decision request, completed-action summary.**
   The live site now shows a photographed REC-01-style example document as labelled report-structure proof;
   the operational record set remains the source system behind that public example.
4. **Visit checklist — private variant + Package↔checklist depth map.** Internal field forms behind the
   private report; enables a real first (private-use) customer without touching legal wording.
5. **Intake / qualification SOP.** Backs the Contact page's 24–48h reply + service-area check + fit
   assessment, using the existing contact schema fields; internal, low risk, immediately useful.

The five legally-gated cornerstones (MSA, Access & Key Custody, Emergency Authority + non-response, Data/
Photo privacy, Cancellation/withdrawal) should be **outlined for the lawyer** in parallel but **not drafted
as final wording** until Section 6 decisions and legal review land.

---

## Validation

- `git diff --check`: clean (see report below).
- Files changed: **one new untracked file** — `doc/SENTINEL-DOCUMENT-NEEDS-AUDIT.md`.
- No app code, CSS, messages, estimator, contact schema/API, routes, legal/noindex, pricing, package
  logic, assets, or shipped pages were touched. This is a docs-only, read-then-write audit.
- Not committed (per task).

## Rules preserved

- Sentinel = local owner representation / Structured Property Oversight. No concierge / management /
  rental / hospitality / "we handle everything" drift.
- Cleaning is a scoped capability inside oversight, not the category; guest support is not rental
  management; vendor coordination does not guarantee vendor performance.
- SLA = response/decision timing, not guaranteed resolution. Above EUR 300 (standard) / EUR 500 (optional)
  requires Owner approval.
- Mixed / undetermined use is a starting scope to confirm, never a "wrong package" or a lock-in.
- No estimator / pricing / package / route / contact-schema / legal changes were proposed or made by this
  audit.

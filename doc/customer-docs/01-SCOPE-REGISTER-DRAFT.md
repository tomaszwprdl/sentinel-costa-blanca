---
title: Sentinel Scope Register
status: draft-source
customer_facing: false
lawyer_review_required: partial
owner_review_required: true
pathway: field (private / guest / mixed selectable)
version: 0.3-draft
---

# 01 — SCOPE REGISTER (Draft)

> **Draft structure only. Not final legal wording. Not approved for customer signature.**
> This is the operational scope form Sentinel fills per property. It is the dependency root for the
> contract (MSA), the SOPs, the report templates, and the cleaning protocols. Where binding legal wording
> would be required, the field is marked **[LAWYER REVIEW REQUIRED]** and left as structure only.

Fill one Scope Register per property. Blank cells are `______`. Select-one fields list options with `[ ]`;
mark the chosen one `[x]`. This form records **facts and scope**, not legal promises.

**Blank-state discipline (v0.3):**

- A blank (`______`) means **"not yet filled"** — never "not applicable", never "not agreed", and never
  "included".
- Every dispute-bearing field must end a fill stage resolved to one of:
  **agreed / not agreed / n/a / pending first visit / pending owner decision.**
- Where a default value is used, it counts only with its **"discussed and confirmed"** box marked. An
  undiscussed default is not an agreement.

Authority order (unchanged): `DECISIONS.md` → `STATUS.md` / `TASK.md` → reference docs → this form.
Register entry: **SCO-01** in [00-DOCUMENT-REGISTER.md](00-DOCUMENT-REGISTER.md).

**Core discipline carried into every section (from `SENTINEL-OWNER-DECISION-MEMO.md` §2):**
Package responsibility ≠ emergency authority ≠ liability. Package controls **speed, intensity, and
authority** — it does **not** create unlimited liability.

---

## 1. Document status and authority

| Field | Value |
|---|---|
| Document ID | `SCO-01 / ______` (per-property suffix, e.g. `SEN-PROP-014`) |
| Property reference | `______` |
| State | `[ ]` draft   `[ ]` partially filled — agreement stage   `[ ]` partially filled — first visit pending   `[ ]` approved internal fill   `[ ]` superseded |
| Fill stage | `[ ]` agreement conversation   `[ ]` first physical visit   `[ ]` post-visit completion |
| Filled with owner present? | `[ ]` yes   `[ ]` no   `[ ]` n/a |
| Fill channel | `[ ]` in person   `[ ]` phone   `[ ]` video   `[ ]` email   `[ ]` WhatsApp   `[ ]` other: `______` |
| Participants present | `______` |
| Language of record | `[ ]` Polish   `[ ]` English |
| Owner questions / unresolved points reference | `______` |
| Prepared by | `______` |
| Reviewed by | `______` |
| Approval date | `______` |

> A partially filled Scope Register is **not a failed fill**; it records which fields are still pending
> first physical verification. The fill-event rows above are the evidence that the scope conversation
> happened, who took part, through which channel, and in which language the record is kept.

### Revision log

| Rev | Date | Change | By |
|---|---|---|---|
| 0.1 | `______` | Initial draft structure | `______` |
| 0.2 | `______` | Added operational field-completeness patch from field audit | `______` |
| 0.3 | `______` | Added semantic fill-state patch from Council simulation | `______` |
| `__` | `______` | `______` | `______` |

---

## 2. Client / owner identity

| Field | Value |
|---|---|
| Client capacity | `[ ]` private owner   `[ ]` company owner   `[ ]` authorised representative   `[ ]` other: `______` |
| Legal name | `______` |
| Representative name (if applicable) | `______` |
| Email | `______` |
| Phone | `______` |
| Preferred language | `[ ]` Polish   `[ ]` English |
| Preferred operational channel | `[ ]` Phone   `[ ]` WhatsApp   `[ ]` Email   `[ ]` other: `______` |
| Formal agreement channel | `[ ]` Email (default for formal records)   `[ ]` other: `______` |
| Billing contact | `______` |
| Emergency contact | `______` |

> Default design target is **consumer / private owner** (highest-protection case). Company / representative
> capacity is allowed but does not change the operating spine — see `SENTINEL-OWNER-DECISION-MEMO.md` §1.1.
> The public form is not an emergency line; the operational channel is agreed here.

---

## 3. Property identity

| Field | Value |
|---|---|
| Property address | `______` |
| Service-area confirmation | `[ ]` confirmed within Torrevieja + ~50–70 km   `[ ]` outside area (do not proceed) |
| Property type | `[ ]` Apartment   `[ ]` House   `[ ]` Villa   `[ ]` Other: `______` |
| Size (m²) | `______` (20–1000) |
| Bedrooms band | `[ ]` 1   `[ ]` 2   `[ ]` 3   `[ ]` 4+ |
| Community / building access notes | `______` |
| Parking / access notes | `______` |
| Alarm / access notes | `______` |
| Known risk areas | `______` (e.g. damp, balcony seal, old boiler) |
| Utilities shut-off locations | `______` (water valve, mains, gas) |
| Baseline photo reference | `______` (evidence set ID; subject to §11 photo rules) |

### 3a. Access & logistics

| Field | Value |
|---|---|
| Parking / lift / building restrictions | `______` |
| Utility provider contact | `______` |
| Community admin contact | `______` |
| Neighbour / building contact | `______` |
| Insurance / claim contact | `______` **[LAWYER REVIEW REQUIRED]** (light — liability/claim path is the owner's insurer, not Sentinel) |
| Router / internet equipment location | `______` **[LAWYER REVIEW REQUIRED]** (light) — record **location only, never passwords** |
| Waste / recycling / community disposal rules | `______` |

> Waste rules are **community disposal instructions the operator follows**, not a janitorial promise.

### 3b. Restricted zones & owner private items

| Field | Value |
|---|---|
| Restricted rooms / private owner zones | `______` **[LAWYER REVIEW REQUIRED]** (light — privacy/dispute boundary) |
| Locked cupboards / safes / private storage | `______` |
| Owner items not to touch or move | `______` |
| Valuables inventory required? | `[ ]` yes   `[ ]` no |
| Valuables inventory reference (if required) | `______` |

> This defines **where oversight / cleaning does not go** unless separately agreed. Ties to the §11 photo
> rules; sensitive items are reported, not photographed.

---

## 4. Usage pathway

Customer documents use the **structural labels** below. The public homepage may use tighter card labels
(e.g. "Mixed / Not Decided"); those are UI labels, not the document labels.

| Structural label (PL) | Structural label (EN) | Slug |
|---|---|---|
| Nieobecność prywatna | Private Absence | `private-use-only` |
| Aktywne użycie przez gości | Active Guest Use | `regular-guest-stays` |
| Użycie mieszane / nieustalone | Mixed / Undetermined Use | `mixed-not-defined` |

| Field | Value |
|---|---|
| Usage pathway | `[ ]` Private Absence   `[ ]` Active Guest Use   `[ ]` Mixed / Undetermined Use |
| Current usage pattern | `______` |
| Expected owner arrivals | `______` |
| Expected guest stays | `______` |
| Mixed-use confirmation date | `______` (date scope is reconfirmed after observation) |
| Mixed-use starting-scope note | `______` |

### 4a. Guest-operating source (Active Guest Use / Mixed only)

| Field | Value |
|---|---|
| Stay-date source type | `[ ]` shared calendar   `[ ]` forwarded booking emails   `[ ]` owner messages dates manually   `[ ]` cleaner provides dates   `[ ]` other: `______` |
| Who supplies arrival / departure dates | `______` |
| Reliability band | `[ ]` confirmed 7+ days ahead   `[ ]` 48h+   `[ ]` same-week   `[ ]` unreliable   `[ ]` unknown |
| Same-week booking rule | `[ ]` pending   `[ ]` agreed: `______`   `[ ]` n/a |
| Mixed-use confirmation trigger | `______` (what observation moves Mixed to a confirmed pathway) |

> This is a **readiness trigger source, not reservation management**. Do not use booking-management,
> rental-management, guest-communication, or pricing language. Sentinel receives dates to time readiness;
> it does not run the calendar.

> **Mixed is a starting scope to confirm**, not a mispurchase. Do **not** use "wrong package" /
> "package lock-in" language and do **not** use rental-customer language anywhere in this form. Mixed
> starts on the Private Absence baseline plus a classification note, then reconfirms after real use is
> observed.

---

## 5. Package and responsibility level

| Field | Value |
|---|---|
| Package | `[ ]` Podstawowy / Basic   `[ ]` Rozszerzony / Extended   `[ ]` Pełny / Full |
| Response window | `[ ]` 48h (Basic)   `[ ]` 24h (Extended)   `[ ]` same-day (Full) |
| Minimum visit rhythm | `______` (Full is `min. 3/mies.`; standard is 2/month unless agreed) |
| Access-event allowance (if applicable) | `______` (e.g. Extended = 2 third-party access events / month) |
| Autonomous paid-action authority | `[ ]` Basic / Extended: owner approval required before paid action/vendor spend; no euro amount implied   `[ ]` Full: EUR 300 standard protective-action authority |
| Optional EUR 500 authority agreed? | `[ ]` yes (Full only)   `[ ]` no   `[ ]` n/a |
| Separate reviewed authority instrument? | `[ ]` no   `[ ]` yes: `______` **[LAWYER REVIEW REQUIRED]** |

### 5a. Minimum-notice defaults

No final notice values are defined by this draft; values are per-property placeholders until agreed. An
undiscussed default is not an agreement (see blank-state discipline).

| Action | Default value | Discussed & confirmed? | Override in §6? | Pending? |
|---|---|---|---|---|
| Scheduled inspection notice | `______` | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no |
| Readiness cleaning notice | `______` | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no |
| Turnover cleaning notice | `______` | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no |
| Vendor access notice | `______` | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no |
| Owner decision deadline default | `______` | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no | `[ ]` yes `[ ]` no |

> Notice rules protect **feasibility and the meaning of the SLA**. They do not change the package SLA and
> do not guarantee resolution. A same-hour request outside the agreed notice is not a breach.

> **Core warning (do not delete from any derived document):**
> **Package responsibility ≠ emergency authority ≠ liability.**
> The package controls **speed, intensity, and authority level only**. It does **not** transfer unlimited
> responsibility to Sentinel and does **not** make Sentinel an insurer. A higher package = faster response
> and more autonomous authority, **not** more financial liability. SLA = response/decision timing, not
> guaranteed resolution.

---

## 6. Included scope modules

Estimator-compatible scope keys. Mark each module's state, with its trigger, frequency/allowance,
evidence, whether an owner decision is needed, and exclusions/notes.

**Module plain meanings (one line each — read to the owner before marking states):**

- **Keyholding** — Sentinel holds labelled keys and controls who enters, under the custody rules in §8.
- **Readiness cleaning** — cleaning so the property is ready before the owner (or another agreed arrival)
  uses it.
- **Turnover cleaning** — cleaning between one guest leaving and the next arriving. Guest/Mixed pathways
  only.
- **Linen** — keeping agreed linen at the agreed stock level; who launders is set in §7, restocking in §6a.
- **Guest check support** — a scoped on-site check tied to a guest stay. It does **not** include guest
  messaging, booking management, pricing, or running the rental stay.
- **Vendor / technician access** — controlled third-party entry with supervision and documentation; vendor
  performance is not guaranteed.

**Module state vocabulary (enter in the "State" column):** `included` · `not included` · `n/a` ·
`pending owner decision` · `pending first visit`. Blank is not a state.

| Module (key) | State | Trigger | Frequency / allowance | Min. notice | Evidence required | Owner decision needed? | Exclusions / notes |
|---|---|---|---|---|---|---|---|
| Keyholding (`keyholding`) | `______` | `______` | `______` | `______` | `______` | `[ ]` yes `[ ]` no | `______` |
| Readiness cleaning (`cleaning_readiness`) | `______` | `______` | `______` | `______` | before/after (see §7) | `[ ]` yes `[ ]` no | `______` |
| Turnover cleaning (`turnover_cleaning`) | `______` | `______` | `______` | `______` | before/after (see §7) | `[ ]` yes `[ ]` no | Guest/Mixed only; not rental mgmt |
| Linen (`linen`) | `______` | `______` | `______` | `______` | `______` | `[ ]` yes `[ ]` no | `______` (stock in §6a; laundering in §7) |
| Guest check support (`guest_check`) | `______` | `______` | `______` | `______` | `______` | `[ ]` yes `[ ]` no | Not bookings/pricing/guest comms |
| Vendor / technician access (`vendor_access`) | `______` | `______` | `______` | `______` | access log + work photos | `[ ]` yes `[ ]` no | Vendor performance **not guaranteed** |

> Min. notice defaults to the §5a values unless a per-module override is entered here.
> Anything not listed here is **not automatically included**. Extras require description, price basis, and
> owner approval before execution unless within agreed authority (see §13).

### Rhythm acknowledgment

| Field | Value |
|---|---|
| Rarer rhythm than standard agreed? | `[ ]` yes   `[ ]` no   `[ ]` n/a |
| Reduced responsibility consequence acknowledged? | `[ ]` yes   `[ ]` no   `[ ]` n/a   **[LAWYER REVIEW REQUIRED]** (light) |

> A rarer-than-standard visit rhythm reduces what Sentinel can observe, and therefore the scope of what it
> can be responsible for noticing. If a rarer rhythm is chosen, that consequence is acknowledged here.
> Final wording of the consequence belongs to the liability layer (LEG-05), not this form. The locked Full
> cadence (`min. 3/mies.`) is not weakened by this field.

### 6a. Additional scope items

| Field | Value |
|---|---|
| Exterior / terrace / pool / garden included? | `[ ]` yes   `[ ]` no   `[ ]` n/a |
| Exterior scope note (which areas, what check) | `______` |
| Linen stock / par level | `______` |
| Linen replacement threshold | `______` (who replaces below par) |
| Pets / plants / perishable food handling | `______` |

> Pets / plants / perishable food are **occasional-by-agreement only** and documented. Do not drift into
> concierge / lifestyle support. Exterior scope must be explicit, or "property check" silently expands.

---

## 7. Cleaning scope block

Because **Sentinel performs cleaning** (readiness / turnover) as a capability inside oversight — not as a
cleaning company — this block is required whenever any cleaning module in §6 is `yes`.

| Field | Value |
|---|---|
| Cleaning type | `[ ]` readiness   `[ ]` turnover   `[ ]` both   `[ ]` none |
| Cleaner | `[ ]` Sentinel cleaner   `[ ]` owner-selected cleaner |
| Cleaner identity (if owner-selected) | `______` (name) |
| Cleaner contact reference | `______` |
| Owner-selected cleaner accepted Sentinel documentation standard? | `[ ]` yes   `[ ]` no   `[ ]` pending   `[ ]` n/a |
| Cleaning documentation standard reference | `______` (CLN-03 / CLN-04 once internal-approved) |
| Laundering responsibility | `[ ]` Sentinel   `[ ]` owner cleaner   `[ ]` owner   `[ ]` external laundry   `[ ]` not included   `[ ]` pending |
| Before/after evidence required | `[ ]` yes   `[ ]` no |
| UV-assisted visible residue check allowed? | `[ ]` yes   `[ ]` no |
| Re-clean cost basis | `[ ]` provisional   `[ ]` owner pays if cause is outside Sentinel fault   `[ ]` Sentinel re-cleans if Sentinel cleaner failed   `[ ]` pending accountant/legal review |
| Supplies / equipment / consumables responsibility | `[ ]` Sentinel provides   `[ ]` owner provides   `[ ]` stored on property   `[ ]` reimbursed by owner   `[ ]` not agreed |
| Supplies reimbursement basis | see §9 (billable-event bases) **[ACCOUNTANT REVIEW REQUIRED]** |
| Cleaning equipment stored on property? | `[ ]` yes   `[ ]` no |
| UV device supplied by Sentinel? | `[ ]` yes   `[ ]` no |
| Cleaning exclusions | `______` (see §12 hard list) |

> **UV wording (hard, do not soften):** a UV-assisted visible residue check is an **optional evidence aid
> only**. It is **not** sanitation proof, hygiene certification, sterilisation, disinfection guarantee, or
> laboratory evidence. It may make some residues more visible; it does not prove anything is clean or safe.

> **Owner-selected cleaner rule:** when the owner uses their own cleaner, Sentinel may document **visible
> readiness after access only** and does **not** guarantee that cleaner's method, timing, products,
> staffing, or performance. An owner-selected cleaner is accepted only if they work to Sentinel's
> documentation/scope standard.

---

## 8. Access and key custody summary

Summary fields only. **The binding Access & Key Custody annex is not drafted here** — it is
**[LAWYER REVIEW REQUIRED]** (register AKC-01).

| Field | Value |
|---|---|
| Keys to be received (count + labels) | `______` (label = key ID, **not** full property address) |
| Physical key receiver | `______` (the person who fills/signs the key receipt) |
| Named physical custodian | `______` |
| Authorised persons | `______` (ties to Authorised-persons register SCO-05) |
| Third-party access allowed? | `[ ]` yes   `[ ]` no |
| Smart lock / alarm code state | `[ ]` not known   `[ ]` known but not stored here   `[ ]` stored in secure register   `[ ]` changed by owner   `[ ]` owner declines to share — respected   `[ ]` n/a — no code system   `[ ]` other: `______` |
| Code may be shared with Sentinel cleaner? | `[ ]` yes   `[ ]` no   `[ ]` n/a   `[ ]` pending AKC-01 |
| Code may be shared with owner-selected cleaner? | `[ ]` yes   `[ ]` no   `[ ]` n/a   `[ ]` pending AKC-01 |
| Code may be shared with vendor / technician? | `[ ]` yes   `[ ]` no   `[ ]` n/a   `[ ]` pending AKC-01 |
| Code-sharing rule reference | `______` **[LAWYER REVIEW REQUIRED]** |
| Keys that must never leave the property | `______` |
| Access-failure procedure reference | `______` (EMG-03 / access-failure log AKC-05) |
| Key return required at handover | `[ ]` yes   `[ ]` no |
| Access & Key Custody annex status | **[LAWYER REVIEW REQUIRED]** — balanced liability, not drafted here |

> **Do not record actual codes in the Scope Register.** Actual codes and passwords are **never** recorded
> in this form. This block captures the code *state* and *sharing permissions* only; the code value itself
> lives in the secure register, never here.

> **Code-sharing permission is provisional.** Marking "yes" above grants an operational permission only —
> it does **not** resolve who is liable if a shared code leaks or is misused. The composition of
> code-sharing, third-party access, and custody responsibility is **[LAWYER REVIEW REQUIRED]** in AKC-01;
> until AKC-01 is approved, treat every "yes" here as pending that review.

> Balanced-liability design intent (summary only — final wording lives in AKC-01 / LEG-05): key
> responsibility is real where Sentinel has signed custody and is negligent, and bounded everywhere else;
> no unlimited-liability promise and no blanket "never responsible" clause. Insurance question open — see
> Decision Memo §3 and the collapse ledger (§14).

---

## 9. Authority and owner decision boundaries

Summary fields only. **Final emergency wording is not drafted here** — it is **[LAWYER REVIEW REQUIRED]**
(registers LEG-07 / EMG-01 / EMG-02) and must be lawyer-aligned with live FAQ wording without implying
Basic / Extended spend authority.

| Field | Value |
|---|---|
| Routine observations | `______` (document + report; no autonomous action) |
| Protective-action threshold | `______` (active leak, open door, power/water/security risk) |
| Owner-approval threshold | Basic / Extended: any paid action/vendor spend unless separately agreed in a reviewed authority instrument; Full: above EUR 300 standard / optional EUR 500 if agreed |
| Authority limit | Basic / Extended: no autonomous paid-spend limit by default; Full: EUR 300 standard protective-action authority; optional EUR 500 if agreed |
| Separate authority instrument reference | `______` **[LAWYER REVIEW REQUIRED]** (required before any Basic / Extended autonomous paid authority exists) |
| Above-limit action rule | Owner approval required before acting; emergency services / community-required minimal action may be documented but is not pre-authorised Sentinel spend |
| Owner non-response doctrine reference | `______` (Protective Action Doctrine — Decision Memo §4) |
| Emergency services / community escalation reference | `______` (EMG-01) |
| Valid owner approval method | `[ ]` email only   `[ ]` WhatsApp accepted   `[ ]` phone/voice accepted only with written confirmation   `[ ]` other: `______` |
| Voice approval requires written confirmation? | `[ ]` yes   `[ ]` no   **[LAWYER REVIEW REQUIRED]** |
| Emergency spend receipt / evidence rule | **Required above de-minimis threshold**; threshold: `______` **[ACCOUNTANT REVIEW REQUIRED]** |
| Receipt delivery method | `[ ]` email   `[ ]` archive link   `[ ]` attached to report   `[ ]` other: `______` |
| No-receipt exception | Emergency / receipt impossible only; written explanation required: `______` |
| Billable event basis reference | `______` (every billable event must have an agreed basis recorded) |
| Access-event overage price basis | `[ ]` within included allowance   `[ ]` separately agreed: `______`   `[ ]` pending   `[ ]` n/a |
| Supplies reimbursement basis | `[ ]` receipts at cost on monthly invoice   `[ ]` prepaid float   `[ ]` owner purchases directly   `[ ]` pending accountant review   `[ ]` n/a |

> These are **approval-evidence structure only**, not final emergency-authority wording. They define what
> counts as a valid authorisation for paid action and how spend is evidenced. Under launch doctrine,
> Basic / Extended paid action or vendor spend requires owner approval unless a separately reviewed
> authority instrument exists. Full uses EUR 300 standard / EUR 500 optional if agreed.

> **Owner approval is required for undefined authority, for non-Full paid action by default, and above any
> agreed authority limit, except where law, safety, emergency services, or community administration require
> minimal immediate action.** Package sets timing and authority only; it never converts owner non-response
> into an unlimited mandate. Emergency services / community-required minimal action is documented; it is
> not a pre-authorised Sentinel spend mandate.

---

## 10. Report outputs

| Field | Value |
|---|---|
| Visit report recipients | `______` |
| Issue report recipients | `______` |
| Decision request recipients | `______` |
| Completed-action summary recipients | `______` |
| Report language | `[ ]` Polish   `[ ]` English |
| Report delivery target after visit | `[ ]` same day   `[ ]` within 24h   `[ ]` next business day   `[ ]` other: `______` |
| Evidence photo delivery method | `[ ]` attached to email   `[ ]` linked from archive   `[ ]` both |
| Archive location reference | `______` (structured encrypted cloud folder; WhatsApp is **not** the archive) |
| Retention schedule reference | `______` (DAT-04; proposed active contract + 24 months, then delete/block) |

> Delivery workflow: iPad field form → PDF export → email report + selected evidence → structured encrypted
> cloud archive. Paper only for signed key custody. Reports state scope **checked / not checked**.
> The report delivery target is a **delivery target, not guaranteed resolution**; SLA remains
> response/decision timing.

### 10a. Filled Scope Register storage

| Field | Value |
|---|---|
| Filled Scope Register archive location reference | `______` (structured encrypted cloud folder) |
| Access allowed to | `[ ]` Owner   `[ ]` Sentinel operator   `[ ]` accountant   `[ ]` lawyer   `[ ]` other: `______` |
| Retention reference | DAT-04 **[LAWYER REVIEW REQUIRED]** |

> The completed Scope Register itself contains personal data, code states, and restricted-zone
> information. It is stored like any other operational record: structured encrypted cloud archive.
> **WhatsApp is not the official archive.**

---

## 11. Photo / privacy boundaries

Hard **do-not-photograph** categories (from Decision Memo §7). These bind every report and the before/after
evidence rule.

| Do NOT photograph |
|---|
| Passports, IDs, legal papers |
| Bank cards, financial documents |
| Alarm codes, passwords, router / Wi-Fi labels, safe codes |
| Screens showing messages, emails, accounts |
| Children / family photos |
| Medicine, medical documents, intimate items |
| Valuables — unless directly part of a reported issue |
| Guest personal belongings — unless needed to document damage, then cropped / minimised |

> When a sensitive item is operationally relevant, **report it, do not photograph it**, using the standard
> line:
> **"Sensitive item visible; not photographed. Owner action may be required."**
> Evidence photos are reference-numbered and minimised (GDPR data-minimisation from day one).

---

## 12. Exclusions master

Grouped exclusions. Anything here is **out of scope** unless separately scoped, priced, and approved.

| Group | Excluded |
|---|---|
| Concierge / lifestyle | Concierge, lifestyle support, "handle everything" |
| Rental management | Running the rental, tenancy management |
| Guest communication / bookings / pricing | Reservations, pricing, guest messaging, listing management |
| Legal / tax / compliance advice | Legal advice; regulatory compliance stays with the owner |
| Insurance replacement | Sentinel is not an insurer; owner carries property insurance |
| Major works / construction | Construction, renovation, post-construction works |
| Vendor performance guarantee | Sentinel coordinates vendors; it does **not** guarantee their performance |
| Hidden defects / technical diagnosis | No diagnosis beyond visible facts |
| Unsafe / biohazard / mould / pest / post-construction cleaning | Biohazard, mould remediation, pest infestation, post-construction dust, high-ladder / unsafe electrical or water work, illegal disposal, personal laundry unless scoped |
| Out-of-area work | Anything beyond Torrevieja + ~50–70 km |
| Unlisted services | If it is not listed in this Scope Register, it is not automatically included |

---

## 13. Review and change control

| Field | Value |
|---|---|
| Scope confirmed date | `______` |
| Next review date | `______` |
| Package change rule | Written agreement required; effective from next billing period |
| Pathway change rule | Prospective (not retroactive); reconfirm scope and rhythm |
| Module add / remove rule | Description + price basis + owner approval before execution unless within agreed authority |
| Owner signature | `______` **[LAWYER REVIEW REQUIRED]** — placeholder; not a signature block yet |
| Sentinel approval | `______` — placeholder; promotion governed by GOV-03 approval-authority rule |

> **Change-control rules:** package changes require written agreement; scope changes are **prospective, not
> retroactive**; extras require description, quote/price basis, and owner approval before execution unless
> within agreed authority. Signature blocks are placeholders — this form is **not approved for customer
> signature**.

---

## 14. Inline doctrine carried temporarily (collapse ledger)

This form restates several rules whose canonical homes are not yet approved. They are carried inline
**deliberately**, so the operator sees them at fill time. **Do not collapse them yet.** Collapse an entry
to a reference only when its canonical document reaches the trigger status below.

| Inline rule | Current section | Canonical future document | Collapse trigger | Status |
|---|---|---|---|---|
| UV-assisted residue check wording | §7 | CLN-03 / DAT-03 | CLN-03 internal-approved | carried inline |
| Owner-selected cleaner rule | §7 | CLN-07 | CLN-07 customer-facing-approved | carried inline |
| Balanced key/liability summary | §8 | AKC-01 / LEG-05 | AKC-01 lawyer-approved | carried inline (compressed v0.3) |
| Do-not-photograph list | §11 | DAT-03 | DAT-03 internal-approved | carried inline |
| Emergency / authority summary | §9 | LEG-07 / EMG-01 | LEG-07 lawyer-approved | carried inline |

---

## Blockers before customer-facing use

- Approval-authority rule (GOV-03) must name **who** may promote this to customer-facing.
- Package / SLA / authority values must be Owner-confirmed against `DECISIONS.md` (already locked) and the
  pending pricing confirmation.
- §8 (key custody, incl. new code-sharing rule), §9 (authority/emergency, incl. new approval-method and
  voice-confirmation rule), and the signature block in §13 depend on **[LAWYER REVIEW REQUIRED]** items
  (AKC-01, LEG-07/EMG-01, LEG-08 withdrawal) before any customer signs. New light lawyer flags: §3a
  insurance/claim contact and router-location, §3b restricted zones.
- **[ACCOUNTANT REVIEW REQUIRED]**: §7 supplies reimbursement rule and §9 emergency-spend receipt rule.
- **[OPERATIONAL TEST REQUIRED]**: §4a guest-calendar source, §5a/§6 minimum-notice defaults, §6a exterior
  and linen stock logic, §7 supplies/consumables model — all pending the **instrumented first-property
  fill** (stopwatch, blank count, owner-question log, fields-unanswerable-before-visit list).
- §7 re-clean cost basis stays `provisional` until the Owner confirms the cost rule and it passes an
  operational test.
- v0.3 (this revision) applied the Council semantic patch: blank-state discipline, fill stages, module
  state vocabulary, billable-event bases, code-sharing provisionality, filled-register storage, collapse
  ledger. Next step is the instrumented fill, **not** further drafting.

## Rules preserved

- Package responsibility ≠ emergency authority ≠ liability; higher package = faster/more empowered, not
  more liable.
- Cleaning and keyholding are scoped capabilities inside oversight, never the public category.
- Vendor coordination does not guarantee vendor performance.
- SLA = response/decision timing, not guaranteed resolution.
- Mixed / undetermined use is a starting scope to confirm, never a "wrong package" or lock-in.
- No "peace of mind", "we handle everything", "care", "concierge", "rental management", "hotel-grade", or
  "luxury" language.
- No app code, estimator, pricing, package, route, contact-schema, or legal changes are made by this file.

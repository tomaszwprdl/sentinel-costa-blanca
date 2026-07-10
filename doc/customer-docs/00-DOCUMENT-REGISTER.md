---
title: Sentinel Document Register
status: internal-approved
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: all
version: 0.1-draft
---

# 00 — DOCUMENT REGISTER (Internal Governance)

Internal governance wrapper for **all** Sentinel documents. This register is the index of record: it says
what each document is, who must review it, what it depends on, and whether it blocks the first customer.

It is **internal only**. It contains no customer-facing wording, no legal text, and no contract clauses.
It does not approve anything for customer use — it tracks the state of documents so nothing ships out of
order.

Authority order (unchanged): `DECISIONS.md` → `STATUS.md` / `TASK.md` → reference docs → this register.
If this file conflicts with `DECISIONS.md`, `DECISIONS.md` wins and the conflict is reported.

Related: [SENTINEL-DOCUMENT-NEEDS-AUDIT.md](../SENTINEL-DOCUMENT-NEEDS-AUDIT.md) ·
[SENTINEL-DOCUMENT-SYSTEM.md](../SENTINEL-DOCUMENT-SYSTEM.md) ·
[SENTINEL-OWNER-DECISION-MEMO.md](../SENTINEL-OWNER-DECISION-MEMO.md) ·
[01-SCOPE-REGISTER-DRAFT.md](01-SCOPE-REGISTER-DRAFT.md)

---

## 1. How to use this register

- **Every** Sentinel document gets an entry here before it is drafted, and its `Status` is updated as it
  moves through review.
- A document may **not** be promoted to `customer-facing-draft` → customer use until its `Lawyer`,
  `Accountant`, `Owner approval`, and `Op test` gates that are marked required are cleared.
- **Who may promote a document to customer-facing approved:** the **Owner only** (decided 2026-07-10;
  GOV-03). AI/assistants (Claude/Cursor/Codex) may draft; operators may prepare and fill operational
  records; **drafting or filling never equals approval**. Lawyer and accountant gates remain required
  where marked and are not waived by Owner approval. Nothing becomes customer-facing approved without the
  Owner's explicit approval.

### Status vocabulary

| Status | Meaning |
|---|---|
| `draft-source` | Being written internally; structure/working material; not approved for anything. |
| `internal-approved` | Approved for internal operational use (SOPs, registers, checklists). Not customer-facing. |
| `customer-facing-draft` | Drafted for customer use but **not yet approved**; still needs its review gates. |
| `lawyer-review-required` | Blocked pending qualified legal review before it can advance. |
| `owner-review-required` | Blocked pending Owner decision/approval before it can advance. |
| `retired` | Superseded or withdrawn; kept for history only. |

### Class vocabulary

`internal` (SOP/register/field form) · `customer-facing` (signed by/handed to Owner) ·
`delivered-record` (a record produced and delivered to the Owner) · `legal-review` (binding, needs lawyer)
· `public-example` (labelled website structure fragment).

### Column legend

`Class` · `Status` · `Owner` (Owner approval required) · `Law` (lawyer review) · `Acct` (accountant review)
· `OpTest` (operational test) · `Path` (pathway variant) · `1stCust` (first-customer blocker).
Values: **Y** = yes/required, **—** = no/not required, **P** = partial/light.

---

## 2. Register — Governance

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GOV-01 | Document Register (this file) | internal | internal-approved | Y | — | — | — | — | Y | — | Keep current as docs are added | Governance wrapper; must exist first |
| GOV-02 | Naming convention + revision-log standard | internal | draft-source | Y | — | — | — | — | Y | GOV-01 | Draft short internal standard | ID scheme + revision-log format |
| GOV-03 | Document status / approval-authority rule | internal | internal-approved | Y | — | — | — | — | Y | GOV-01 | Decided 2026-07-10: customer-facing approval authority = **Owner only** | AI/assistants may draft; operators may prepare/fill operational records; drafting/filling ≠ approval; lawyer/accountant gates remain required |
| GOV-04 | Template library index | internal | draft-source | — | — | — | — | — | — | GOV-01 | Populate as templates land | Points to approved blanks |

## 3. Register — Legal / commercial

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LEG-01 | Master Service Agreement (MSA) | legal-review | lawyer-review-required | Y | Y | Y | — | field | Y | SCO-01, entity/signatory, LEG-08 | Outline for lawyer only | **Do not draft final wording** |
| LEG-02 | Package / Service annex (depth per Basic/Extended/Full) | customer-facing | draft-source | Y | P | — | — | — | Y | SCO-01 | Depth map, no meaning drift | Depth of same oversight only |
| LEG-03 | Usage Pathway annex (3 profiles) | customer-facing | draft-source | Y | P | — | — | Y (3 profiles) | Y | SCO-01 | Draft after Scope Register | Mixed = start scope to confirm |
| LEG-04 | Cancellation / Handover annex (+ withdrawal handling) | legal-review | lawyer-review-required | Y | Y | — | — | — | Y | LEG-01 | Outline for lawyer only | 14-day withdrawal gap in live Terms |
| LEG-05 | Liability / Insurance posture statement | legal-review | lawyer-review-required | Y | Y | Y | — | — | Y | insurance question | Outline for lawyer only | Consumer-law floor; no "never liable" |
| LEG-06 | Price / Range confirmation note | customer-facing | owner-review-required | Y | P | Y | — | field | Y | pricing confirm, FIN-01 | Wait on invoicing identity | References protected estimator only |
| LEG-07 | Emergency Authority annex (final wording) | legal-review | lawyer-review-required | Y | Y | — | — | — | Y | EMG-01, non-response rule | Outline for lawyer only | Must match live FAQ €300 promise |
| LEG-08 | Distance-contract / withdrawal + "start now" consent | legal-review | lawyer-review-required | Y | Y | — | — | — | Y | LEG-01 | Outline for lawyer only | TRLGDCU; absent from live Terms |

## 4. Register — Scope / onboarding

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SCO-01 | Scope Register (draft) | customer-facing | draft-source | Y | P | — | Y | field | Y | GOV-01, Decision Memo | SCO-01 v0.5 passed simulations ×2; beta packet exists; beta read deferred until the minimum beta-readable companion set exists (REC-01, REC-03, CLN-02, AKC-03); SCO-01 frozen unless Owner approves patch; legal/accountant/customer-facing approval gates remain | Dependency root for contracts/SOPs |
| SCO-02 | Exclusions master | internal | draft-source | Y | — | — | — | — | Y | SCO-01 | Extract from SCO-01 §12 | Backs "if not listed, not included" |
| SCO-03 | Onboarding & Scope Confirmation form | customer-facing | draft-source | Y | P | — | Y | conditional block | Y | SCO-01 | Produce clean working Property Scope Confirmation form from SCO-01 fields | Mirrors contact schema fields |
| SCO-04 | Property Profile sheet | internal | draft-source | — | — | — | Y | field | Y | SCO-01 | Draft after Scope Register | Shut-offs, risk areas, baseline photos |
| SCO-05 | Authorised-persons register | internal | draft-source | Y | P | — | Y | field | Y | AKC-01 | Draft with key custody | Ties to key custody + vendor access |
| SCO-06 | Owner contact & decision-channel sheet | internal | draft-source | — | — | — | — | — | Y | SCO-01 | Produce clean working Owner Contact + Decision Channel Sheet | Establishes separate operational channel |
| SCO-07 | Consent & acknowledgements sheet (data/photo/service-start) | customer-facing | lawyer-review-required | Y | Y | — | — | — | Y | DAT-01, LEG-08 | Outline for lawyer only | Backs contact acknowledgment checkbox |

## 5. Register — Access / key custody

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AKC-01 | Access & Key Custody annex | legal-review | lawyer-review-required | Y | Y | Y | Y | field | Y | insurance question | Outline for lawyer only | Balanced liability; **no final wording** |
| AKC-02 | Key custody register | internal | draft-source | — | — | — | Y | — | Y | SCO-01 | Produce clean working Key Custody / Access Register | Key ID not full address |
| AKC-03 | Key handover / return receipt | internal | draft-source | — | P | — | Y | — | Y | AKC-02 | v0.1 source + DOCX candidate produced; next = Owner review / one key-handover simulation fill / patch only if Owner approves | Signed on handover + return |
| AKC-04 | Key movement log | internal | draft-source | — | — | — | Y | — | Y | AKC-02 | Draft internal log | Every check-out/in |
| AKC-05 | Access-failure log | internal | draft-source | — | — | — | Y | — | Y | AKC-02 | Draft internal log | Lock/alarm/access problems |

## 6. Register — Inspection / checking

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| INS-01 | Scheduled inspection SOP | internal | draft-source | — | — | — | Y | field | Y | SCO-01 | Draft SOP | Executes visit→checklist→report |
| INS-02 | Private absence / pre-arrival readiness SOP | internal | draft-source | — | — | — | Y | Private/Mixed | Y | INS-01 | Draft SOP | Owner-arrival readiness |
| INS-03 | Visit checklist — private variant | internal | draft-source | — | — | — | Y | Private variant | Y | INS-01 | Draft field form | Behind private report |
| INS-04 | Visit checklist — guest variant | internal | draft-source | — | — | — | Y | Guest variant | — | INS-01 | Defer to first guest-use | Behind post-stay report |
| INS-05 | Package↔checklist depth map | internal | draft-source | Y | — | — | — | — | Y | SCO-01 | Draft with checklists | Depth of same oversight |

## 7. Register — Cleaning / readiness

Raised in priority because **Sentinel performs cleaning** (Decision Memo §5).

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CLN-01 | Cleaning Scope annex | customer-facing | draft-source | Y | P | — | Y | trigger field | Y (if scoped) | SCO-01 | Draft after Scope Register | Readiness/turnover inside oversight |
| CLN-02 | Cleaning checklist | internal | draft-source | — | — | — | Y | trigger field | Y (if scoped) | CLN-01 | v0.1 source + DOCX candidate produced; next = Owner review / one cleaning-readiness simulation fill / patch only if Owner approves | Behind cleaning execution; SCO-01 sets cleaning model/limits, CLN-02 is the per-cleaning protocol |
| CLN-03 | Before/after evidence rule | internal | draft-source | — | P | — | Y | — | Y (if scoped) | CLN-01, DAT-03 | Produce clean working evidence rule with CLN-02 and DAT-03 | Mandatory paired evidence |
| CLN-04 | Cleaner handoff record | internal | draft-source | — | — | — | Y | field | Y (if scoped) | CLN-01 | Draft field form | Brief + verify |
| CLN-05 | Re-clean / cleaning-failure rule | internal | draft-source | Y | — | — | Y | — | P | CLN-01 | Draft rule | Who bears re-clean cost |
| CLN-06 | Cleaning exclusions | internal | draft-source | Y | — | — | — | — | Y (if scoped) | SCO-02 | Extract from Scope Register | Biohazard/mould/pest/etc. |
| CLN-07 | Owner-selected-cleaner limitation | customer-facing | draft-source | Y | P | — | — | — | P | CLN-01 | Draft limitation clause | Readiness-only documentation |

## 8. Register — Guest rotation

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GST-01 | Post-stay / rotation + turnover SOP | internal | draft-source | — | — | — | Y | Guest/Mixed | — | INS-01, CLN-01 | Defer to first guest-use | Not rental management |
| GST-02 | Guest-module scope annex | customer-facing | draft-source | Y | P | — | — | Guest/Mixed | — | SCO-01 | Defer to first guest-use | No bookings/pricing/guest comms |

## 9. Register — Reports / decision records

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| REC-01 | Visit report template | delivered-record | draft-source | — | — | — | Y | context field | Y | INS-01 | v0.1 source + DOCX candidate produced; next = Owner review / one visit-report simulation fill / patch only if Owner approves | Consumes SCO-01 fields; visible facts, not diagnosis; not customer-facing approved |
| REC-02 | Issue report template | delivered-record | draft-source | — | — | — | Y | — | Y | REC-01 | Draft template | Documents a finding |
| REC-03 | Decision request template | delivered-record | draft-source | — | — | — | Y | — | Y | REC-01 | v0.1 source + DOCX candidate produced; next = Owner review / one decision-request simulation fill / patch only if Owner approves | Authority basis is a referenced field; non-Full = owner approval (Option A); no invented spend limit; not customer-facing approved |
| REC-04 | Completed-action summary template | delivered-record | draft-source | — | — | — | Y | — | Y | REC-01, EMG-01 | Produce clean working Completed Action Summary | Protective/within-limit action |
| REC-05 | Decision & action log | internal | draft-source | — | — | — | Y | — | Y | REC-03 | Draft internal log | Authority basis per decision |

## 10. Register — Emergency / escalation

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMG-01 | Escalation / emergency + non-response SOP | internal | lawyer-review-required | Y | Y | — | Y | — | Y | Decision Memo §4 | Produce clean working Emergency / Non-response SOP outline for simulation; lawyer review remains required | Protective Action Doctrine |
| EMG-02 | Owner non-response decision tree | internal | lawyer-review-required | Y | Y | — | Y | — | Y | EMG-01 | Produce working decision tree with EMG-01; lawyer review remains required | Public FAQ promise already live |
| EMG-03 | Key / access-failure procedure | internal | draft-source | — | P | — | Y | — | Y | AKC-05 | Draft SOP | No forced/unauthorised entry |

## 11. Register — Vendor / third-party

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| VEN-01 | Vendor / technician access procedure | internal | draft-source | — | P | — | Y | field | — | AKC-01, SCO-05 | Defer to first vendor event | Performance not guaranteed |
| VEN-02 | Vendor / subcontractor data-processing agreement | legal-review | lawyer-review-required | Y | Y | — | — | — | — | DAT-05 | Outline for lawyer only | GDPR processor chain |

## 12. Register — Data / privacy / retention

Raised in priority because of the photo/storage decisions (Decision Memo §7–§8).

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DAT-01 | Data / Photo / Report privacy instrument | legal-review | lawyer-review-required | Y | Y | — | — | — | Y | live Privacy notice | Outline for lawyer only | Must match published notice |
| DAT-02 | Record of Processing Activities (RAT) | internal | lawyer-review-required | Y | Y | — | — | — | Y | DAT-01 | Outline for lawyer | LOPDGDD requirement |
| DAT-03 | Photo policy (do-not-photograph list) | internal | draft-source | Y | P | — | Y | — | Y | Decision Memo §7 | Produce clean working Photo / Evidence Rules | Binds all report templates |
| DAT-04 | Retention & data-blocking schedule | internal | lawyer-review-required | Y | Y | Y | — | — | Y | DAT-01, tax periods | Outline; confirm periods | 24-month proposal; bloqueo de datos |
| DAT-05 | Processor agreements (accountant, payments, hosting, email, cleaners/technicians) | legal-review | lawyer-review-required | Y | Y | Y | — | — | Y (per party) | DAT-01 | Outline for lawyer only | Named in live Privacy notice |
| DAT-06 | Data-subject-rights procedure | internal | draft-source | Y | P | — | Y | — | Y | DAT-01 | Draft SOP | Executes rights the notice grants |

## 13. Register — Admin / finance

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| FIN-01 | Payment / invoice basis | internal | owner-review-required | Y | P | Y | — | — | Y | entity/VAT/processor | Owner + accountant confirm | Monthly upfront; 3-mo min |
| FIN-02 | Late-payment / suspension procedure | internal | draft-source | Y | P | — | — | — | P | FIN-01 | Draft SOP | Orderly handover preserved |
| FIN-03 | Operator / staff identity & consent note | internal | draft-source | Y | P | — | — | — | Y | About page framing | Draft consent note | Published names/photos; "assigned operator" |

## 14. Register — Website examples

| ID | Document | Class | Status | Owner | Law | Acct | OpTest | Path | 1stCust | Depends on | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| WEB-01 | Labelled structure fragments (report / checklist / access register) | public-example | internal-approved | Y | — | — | — | — | — | REC-01, INS-03 | Keep labelled | "Example structure. Not a client report." |

---

## 15. First-customer gate summary

Documents marked `1stCust = Y` must exist (at the appropriate approval level) before the first real
customer. The **legal-review** subset (LEG-01, LEG-04, LEG-05, LEG-07, LEG-08, AKC-01, SCO-07, EMG-01/02,
DAT-01/02/04/05, VEN-02) stays **outline-for-lawyer only** until the `[LAWYER REVIEW REQUIRED]` items in
`SENTINEL-OWNER-DECISION-MEMO.md` are resolved (data governance, non-response, withdrawal, liability).

Internal SOPs, registers, checklists, and record **templates** (which carry no new legal promise) may be
produced as clean working documents and reach `internal-approved` earlier. That is the active production
batch, beginning with **SCO-01 (Scope Register / Property Scope Confirmation)** as the dependency root.

## Rules preserved

- Package responsibility ≠ emergency authority ≠ liability; a higher package = faster/more empowered, not
  more liable.
- No document leaves `customer-facing-draft` until the approval-authority rule (GOV-03) names who may
  approve it.
- Cleaning and keyholding are scoped capabilities inside oversight, never the public category.
- SLA = response/decision timing, not guaranteed resolution.
- Mixed / undetermined use is a starting scope to confirm, never a "wrong package" or lock-in.
- No app code, estimator, pricing, package, route, contact-schema, or legal changes are made by this file.

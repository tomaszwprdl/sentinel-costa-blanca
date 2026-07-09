---
title: Sentinel Decision Request (Template)
status: draft-source
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: field (context per finding)
version: 0.1-draft
register_id: REC-03
---

# 03 — DECISION REQUEST (Template Draft)

> **Draft delivered-record template. Not a client document. Not approved for delivery.**
> One finding → one owner decision. A Decision Request is raised when a Visit Report finding exceeds the
> agreed scope or the agreed authority. It presents options and **awaits the Owner's decision**; it
> creates **no new promises** and commits Sentinel to nothing beyond agreed authority.

Fill one Decision Request per finding that needs an owner decision. Blank cells are `______`; select-one
fields use `[ ]`.

Register entry: **REC-03** in [00-DOCUMENT-REGISTER.md](00-DOCUMENT-REGISTER.md). Depends on REC-01.

**Discipline carried into every Decision Request:**
- **Owner approval is required above the agreed authority limit**, and — under the launch doctrine — for
  **any autonomous paid action on Basic/Extended** (no autonomous spend on non-Full unless separately
  agreed in the Scope Register).
- Authority basis is a **referenced field**, never a number invented here. If undefined:
  **[OWNER APPROVAL REQUIRED / AUTHORITY BASIS PENDING]**.
- Cost figures are **placeholders / referenced ranges**, not new pricing. This template does not create
  or redefine pricing or estimator values.
- **SLA = response/decision timing, not guaranteed resolution.**
- **Vendor performance is not guaranteed.**
- No pressure or urgency framing; urgency is a factual protective classification, not a sales device.

---

## 1. Header

| Field | Value |
|---|---|
| Decision Request ID | `REC-03 / ______` (e.g. `SEN-PROP-014-DR-0003`) |
| Related Visit Report ID | `______` (REC-01 report this arises from) |
| Property reference | `______` (from SCO-01) |
| Scope Register reference | `SCO-01 / ______` |
| Finding ID | `______` (the REC-01 §5 finding) |
| Date/time | `______` |
| Package | `[ ]` Podstawowy / Basic   `[ ]` Rozszerzony / Extended   `[ ]` Pełny / Full |
| Authority basis reference | `______` — from SCO-01 §5/§9 or future authority document. Non-Full default: **owner approval required**. If undefined: **[OWNER APPROVAL REQUIRED / AUTHORITY BASIS PENDING]** |
| Language of record | `[ ]` Polish   `[ ]` English |

---

## 2. Decision needed

| Field | Value |
|---|---|
| Visible issue | `______` (visible fact from the finding; no diagnosis) |
| Why owner decision is needed | `______` (exceeds scope / exceeds authority / requires paid action / requires vendor) |
| What happens if no decision is received | `______` (factual: monitored, deferred, condition may develop; no scare framing) |
| Deadline for owner decision | `______` (from SCO-01 §5a owner-decision-deadline default unless overridden) |
| Urgency level | `[ ]` routine   `[ ]` attention   `[ ]` urgent protective |

> Urgency is an operational protective classification, not persuasion. "urgent protective" means a
> visible risk (active leak, breached security, power/water risk), consistent with the emergency
> definition in the Scope Register / future Emergency Authority document.

---

## 3. Options

At least three structured options. Cost fields are **placeholders / referenced**, never invented pricing.

### Option A — approve action

| Field | Value |
|---|---|
| Description | `______` |
| Estimated cost | `______` (placeholder / referenced range; not new pricing) |
| Vendor / operator action | `______` |
| Evidence needed | `______` |
| Risk of waiting | `______` |
| Requires payment / reimbursement? | `[ ]` yes   `[ ]` no   `[ ]` pending |
| Receipt / evidence rule | required above de-minimis threshold (SCO-01 §9; threshold **[ACCOUNTANT REVIEW REQUIRED]**); delivery per SCO-01 §9 |

### Option B — decline / monitor

| Field | Value |
|---|---|
| Description | `______` (take no action now; continue to observe on scheduled rhythm) |
| Estimated cost | `______` (typically none / n/a) |
| Vendor / operator action | monitoring only |
| Evidence needed | `______` (next-visit re-check reference) |
| Risk of waiting | `______` |
| Requires payment / reimbursement? | `[ ]` yes   `[ ]` no   `[ ]` pending |
| Receipt / evidence rule | n/a unless a cost arises |

### Option C — request quote / more information

| Field | Value |
|---|---|
| Description | `______` (obtain a vendor quote or further assessment before deciding) |
| Estimated cost | `______` (quote pending; may itself have a call-out cost — state if so) |
| Vendor / operator action | coordinate quote / assessment; **vendor performance not guaranteed** |
| Evidence needed | `______` (quote document reference) |
| Risk of waiting | `______` |
| Requires payment / reimbursement? | `[ ]` yes   `[ ]` no   `[ ]` pending |
| Receipt / evidence rule | per SCO-01 §9 if a cost is incurred |

*(Add further options as needed; keep the same row structure.)*

---

## 4. Authority and boundary

| Field | Value |
|---|---|
| Within agreed authority? | `[ ]` yes   `[ ]` no   `[ ]` pending |
| Above authority? | `[ ]` yes   `[ ]` no   `[ ]` pending |
| Owner approval required? | `[ ]` yes   `[ ]` no |
| Authority basis | `[ ]` Scope Register (SCO-01 §5/§9)   `[ ]` Emergency Authority (future LEG-07/EMG-01)   `[ ]` pending |
| If authority undefined | **[OWNER APPROVAL REQUIRED / AUTHORITY BASIS PENDING]** |
| No-guaranteed-resolution statement | Sentinel's response is response/decision timing per package SLA; it does **not** guarantee that the issue is resolved. |
| Vendor-performance statement | Where a vendor is involved, Sentinel coordinates and documents access; it does **not** guarantee the vendor's performance. |

> Launch doctrine reminder (Option A): on **Basic / Extended** there is **no autonomous paid action** by
> default — this Decision Request awaits owner approval before any spend. On **Full**, autonomous
> protective action within the agreed limit (EUR 300 standard / EUR 500 optional, per SCO-01) may already
> have occurred; where it has, a Completed-Action Summary (REC-04) is used instead of, or alongside, this
> request. Emergency-services / community-required minimal action is always permitted regardless of
> package and is documented, not pre-authorised spend.

---

## 5. Owner response record

| Field | Value |
|---|---|
| Owner decision | `[ ]` approved   `[ ]` declined   `[ ]` request more info   `[ ]` no response |
| Which option | `[ ]` A   `[ ]` B   `[ ]` C   `[ ]` other: `______` |
| Response channel | `[ ]` email   `[ ]` WhatsApp   `[ ]` phone/voice   `[ ]` other: `______` |
| Response timestamp | `______` |
| Written confirmation reference | `______` |
| If voice approval | **written confirmation required** before acting (SCO-01 §9) |
| Operator recording the response | `______` |

---

## 6. Completed-action handoff

| Field | Value |
|---|---|
| If approved | create Completed-Action Summary (REC-04, later) — reference: `______` |
| If declined | record monitoring status and next re-check: `______` |
| If no response | escalate per owner-non-response procedure (future EMG-01/02); log contact attempts: `______` |

> No autonomous action is taken beyond agreed authority while awaiting a response. On non-Full packages,
> "no response" does not create spend authority; it triggers the documented escalation/monitoring path,
> not an unauthorised purchase.

---

## Rules preserved

- Owner approval required above agreed authority; no autonomous spend on Basic/Extended by default
  (launch doctrine, Option A) unless separately agreed in the Scope Register.
- Authority basis referenced, never invented; undefined authority is flagged, not filled.
- Cost fields are placeholders / referenced; no pricing or estimator values are created or redefined.
- SLA = response/decision timing, not guaranteed resolution; vendor performance not guaranteed.
- Package responsibility ≠ emergency authority ≠ liability.
- No urgency/pressure framing; no legal wording; no actual codes/passwords.
- No route, contact-schema, package-meaning, or legal changes are made by this template.

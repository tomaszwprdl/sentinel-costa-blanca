---
title: Sentinel Visit Report (Template)
status: draft-source
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: field (context field per visit)
version: 0.1-draft
register_id: REC-01
---

# 02 — VISIT REPORT (Template Draft)

> **Draft delivered-record template. Not a client report. Not approved for delivery.**
> This is the blank structure Sentinel fills after a real visit. It **consumes** fields from the Scope
> Register (SCO-01) and produces a delivered record for the Owner. It creates **no new promises**.

Fill one Visit Report per visit. Blank cells are `______`. Select-one fields use `[ ]`; mark `[x]`.
Reports state scope **checked / not checked** — "not checked" is mandatory honesty, never omitted.

Authority order (unchanged): `DECISIONS.md` → `STATUS.md` / `TASK.md` → reference docs → this template.
Register entry: **REC-01** in [00-DOCUMENT-REGISTER.md](00-DOCUMENT-REGISTER.md).

**Discipline carried into every visit report:**
- Sentinel reports **visible facts, not technical diagnosis**.
- **SLA = response/decision timing, not guaranteed resolution.**
- **Vendor performance is not guaranteed.**
- **Package responsibility ≠ emergency authority ≠ liability.** A report never upgrades the package's
  liability by describing more.
- Authority basis is a **referenced field** (from the Scope Register §5/§9 or a future authority
  document), never a number invented in the report. For non-Full packages with no agreed autonomous
  spend, the basis is **owner approval required**.

---

## 1. Header

| Field | Value |
|---|---|
| Report ID | `REC-01 / ______` (e.g. `SEN-PROP-014-VR-0007`) |
| Property reference | `______` (from SCO-01) |
| Scope Register reference | `SCO-01 / ______` |
| Visit date/time | `______` |
| Visit type | `[ ]` scheduled   `[ ]` readiness   `[ ]` issue follow-up   `[ ]` access event   `[ ]` first physical verification |
| Usage pathway | `[ ]` Private Absence   `[ ]` Active Guest Use   `[ ]` Mixed / Undetermined Use (from SCO-01 §4) |
| Package | `[ ]` Podstawowy / Basic   `[ ]` Rozszerzony / Extended   `[ ]` Pełny / Full (from SCO-01 §5) |
| Assigned operator | `______` |
| Language of record | `[ ]` Polish   `[ ]` English (from SCO-01 §1) |
| Report status | `[ ]` draft   `[ ]` sent   `[ ]` corrected   `[ ]` superseded |

---

## 2. Scope checked

| Field | Value |
|---|---|
| Modules checked this visit | `______` (from SCO-01 §6: keyholding / cleaning_readiness / turnover_cleaning / linen / guest_check / vendor_access) |
| Modules not checked | `______` |
| Reason not checked | `______` (e.g. not in scope, no access, deferred, weather) |
| Pending first-visit fields resolved this visit? | `[ ]` yes   `[ ]` no   `[ ]` n/a — list which SCO-01 pending fields were verified: `______` |
| Scope exceptions observed | `______` (anything encountered outside agreed scope; report only, no action beyond authority) |

> If this visit resolves SCO-01 "pending first visit" fields (shut-offs, risk areas, baseline photos,
> etc.), record them here so the Scope Register can move toward `approved internal fill`.

---

## 3. Checklist summary

High-level rows only. The full inspection checklist lives in the Visit Checklist field form (INS-03/04);
this is the delivered summary.

State per row: `checked / not checked / n/a`. Status: `ok / attention / urgent / owner decision required`.

| Row | Checked? | Status | Note | Evidence refs |
|---|---|---|---|---|
| Access / entry | `______` | `______` | `______` | `______` |
| Doors / windows | `______` | `______` | `______` | `______` |
| Visible water risk | `______` | `______` | `______` | `______` |
| Visible electrical risk | `______` | `______` | `______` | `______` |
| Damp / odour / ventilation | `______` | `______` | `______` | `______` |
| Balcony / exterior (if scoped) | `______` | `______` | `______` | `______` |
| Cleaning / readiness (if scoped) | `______` | `______` | `______` | `______` |
| Restricted zones respected | `______` | `______` | `______` | `______` |
| Owner items not moved | `______` | `______` | `______` | `______` |
| Other visible issue | `______` | `______` | `______` | `______` |

> "Status" is **operational priority, not a legal or technical conclusion.** "urgent" flags a visible
> protective concern; it does not diagnose a cause.

---

## 4. Evidence register

Evidence is reference-numbered and minimised (GDPR data-minimisation). Sensitive items are **reported,
not photographed** (SCO-01 §11).

| Evidence ref | Type | Description | Sensitive-item rule applied? | Archive reference |
|---|---|---|---|---|
| `______` | `[ ]` photo `[ ]` note `[ ]` document `[ ]` no-photo-sensitive | `______` | `[ ]` yes `[ ]` no `[ ]` n/a | `______` |
| `______` | `[ ]` photo `[ ]` note `[ ]` document `[ ]` no-photo-sensitive | `______` | `[ ]` yes `[ ]` no `[ ]` n/a | `______` |
| `______` | `[ ]` photo `[ ]` note `[ ]` document `[ ]` no-photo-sensitive | `______` | `[ ]` yes `[ ]` no `[ ]` n/a | `______` |

> For any `no-photo-sensitive` row, use the standard line from SCO-01 §11:
> **"Sensitive item visible; not photographed. Owner action may be required."**
> Archive reference points to the structured encrypted cloud folder. WhatsApp is not the archive.

---

## 5. Findings

One row per finding. A finding that exceeds scope or authority triggers a Decision Request (REC-03).

| Field | Value |
|---|---|
| Finding ID | `______` (e.g. `SEN-PROP-014-VR-0007-F1`) |
| Severity | `[ ]` observation   `[ ]` attention   `[ ]` urgent protective   `[ ]` owner decision required |
| Visible fact | `______` (what was seen — fact only, no diagnosis) |
| What was not checked / unknown | `______` (honest limits of the observation) |
| Recommended next action | `______` |
| Authority basis | `______` — referenced from SCO-01 §5/§9. For non-Full with no agreed autonomous spend: **owner approval required**. If undefined: **[OWNER APPROVAL REQUIRED / AUTHORITY BASIS PENDING]** |
| Decision Request needed? | `[ ]` yes → create REC-03   `[ ]` no |
| Related evidence refs | `______` |

*(Repeat the finding block per finding.)*

> A finding never states a cause Sentinel cannot see. "Visible damp stain below window" is a fact;
> "the window seal has failed" is a diagnosis and does not belong here.

---

## 6. Cleaning / readiness block (if any cleaning module scoped)

Fill only if SCO-01 §6/§7 has a cleaning module `included`.

| Field | Value |
|---|---|
| Cleaning type | `[ ]` readiness   `[ ]` turnover   `[ ]` both   `[ ]` n/a |
| Before/after evidence refs | `______` (paired; from the evidence register §4) |
| Supplies issue? | `[ ]` yes   `[ ]` no   `[ ]` n/a — note: `______` |
| Re-clean question? | `[ ]` yes   `[ ]` no   `[ ]` n/a — note: `______` (re-clean cost basis is SCO-01 §7, provisional) |
| UV used? | `[ ]` yes   `[ ]` no |
| UV note | UV-assisted visible residue check is an **optional evidence aid only** — not sanitation proof, hygiene certification, sterilisation, disinfection guarantee, or laboratory evidence. |

> Cleaning is a scoped readiness/turnover capability inside oversight, documented here — **not** a
> cleaning-company service. For an owner-selected cleaner, this block records **visible readiness after
> access only** (SCO-01 §7); Sentinel does not vouch for a cleaner it did not perform for.

---

## 7. Closing

| Field | Value |
|---|---|
| Report delivery target | `[ ]` same day   `[ ]` within 24h   `[ ]` next business day   `[ ]` other: `______` (from SCO-01 §10; **delivery target, not guaranteed resolution**) |
| Sent to | `______` (from SCO-01 §10 recipients) |
| Archive reference | `______` (structured encrypted cloud; WhatsApp is not the archive) |
| Operator notes | `______` |
| Owner follow-up required by date | `______` (blank if none; if a Decision Request exists, its deadline governs) |

---

## Rules preserved

- Sentinel reports visible facts, not technical diagnosis.
- SLA = response/decision timing, not guaranteed resolution.
- Vendor performance is not guaranteed.
- Package responsibility ≠ emergency authority ≠ liability; a fuller report does not enlarge liability.
- Authority basis is referenced, never invented; non-Full autonomous spend is not assumed.
- Cleaning / keyholding are scoped capabilities inside oversight, never the public category.
- No actual codes/passwords; sensitive items reported, not photographed.
- No pricing, estimator, package-meaning, route, contact-schema, or legal changes are made by this
  template.

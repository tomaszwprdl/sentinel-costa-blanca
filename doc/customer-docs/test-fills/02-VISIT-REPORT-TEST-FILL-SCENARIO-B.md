---
title: Visit Report v0.1 - Instrumented Test Fill (Scenario B)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
version: test-fill-0.1
---

# 02 - VISIT REPORT TEST FILL - SCENARIO B

> **FICTIONAL TEST DATA.** Every person, property reference, archive reference, and evidence reference in
> this file is invented for form-testing only. No real personal data, no real address, no real phone,
> no real email, no real access code, and no real property details are recorded. This dry-run approves
> nothing and is not a customer document.

Scenario B source: `01-SCOPE-REGISTER-TEST-FILL-SCENARIO-B.md`.

Scenario context: Extended package; Private Absence; readiness cleaning included; keyholding included;
no guest turnover; language of record Polish; first physical verification/readiness visit now completed.

---

## 0. Instrumentation

| Instrument | Result |
|---|---|
| Did the template accept Scenario B cleanly? | Yes. REC-01 accepted the first physical verification/readiness visit without forcing a service or authority change. The "pending first-visit fields resolved" row carried the Scope Register completion work cleanly. |
| Fields that were awkward or unclear | Visit type is slightly awkward because the visit is both `first physical verification` and a readiness-cleaning verification. The fill uses `first physical verification` as the primary visit type and lists readiness under modules checked. Not blocking. |
| Fields that forced repetition | Authority/SLA/vendor-performance discipline repeats in the template header, finding, and rules. The repetition is acceptable for a delivered record because the finding triggers a Decision Request. |
| Any missing field discovered | No blocking missing field. A future optional "Scope Register update handoff" row could make post-visit completion more explicit, but the existing section 2 and closing notes are enough for this dry-run. |
| Any authority ambiguity discovered | No new ambiguity. Extended has no autonomous paid spend by default under Option A; the finding is therefore routed to REC-03 for owner decision before any paid technician/vendor action. |
| Verdict | `template-ready` - no REC-01 patch required before Scenario C. |

---

## 1. Header

| Field | Value |
|---|---|
| Report ID | `REC-01 / SEN-PROP-TEST-001-VR-0001` |
| Property reference | `SEN-PROP-TEST-001` |
| Scope Register reference | `SCO-01 / SEN-PROP-TEST-001` |
| Visit date/time | 2026-07-10 09:30-11:05 (fictional) |
| Visit type | `[x]` first physical verification; readiness module also checked this visit |
| Usage pathway | `[x]` Private Absence |
| Package | `[x]` Rozszerzony / Extended |
| Assigned operator | Test operator (simulation) |
| Language of record | `[x]` Polish |
| Report status | `[x]` draft test fill - not sent |

---

## 2. Scope checked

| Field | Value |
|---|---|
| Modules checked this visit | keyholding; cleaning_readiness; balcony visual check; basic access/security/visible-risk checklist |
| Modules not checked | turnover_cleaning; linen; guest_check; vendor_access |
| Reason not checked | Not in Scenario B scope; no guest use; no owner-approved vendor event. |
| Pending first-visit fields resolved this visit? | `[x]` yes - building access mechanics verified; utility shut-off locations located and recorded in the internal Scope Register completion note; known risk areas updated; baseline evidence set created; community notice-board reference noted without reproducing contact details here. |
| Scope exceptions observed | One visible bathroom issue requires owner decision before paid technician/vendor action. No action taken beyond documentation. |

First-visit completion notes for Scope Register:

- Building access: entry path tested using the held test key set; no code recorded.
- Key count: three labelled fictional keys matched the Scenario B handover expectation.
- Utility shut-offs: fictional general locations verified and moved from `pending first visit` to recorded internally.
- Baseline evidence: baseline set `EV-SB-VR-0001-BASE` created with minimised, non-sensitive references.
- Restricted areas: locked main-bedroom wardrobe and hallway storage cabinet were not opened, moved, or photographed.

---

## 3. Checklist summary

State per row: `checked / not checked / n/a`. Status: `ok / attention / urgent / owner decision required`.

| Row | Checked? | Status | Note | Evidence refs |
|---|---|---|---|---|
| Access / entry | checked | ok | Entry and closing completed with labelled fictional keys; no access code used or recorded. | EV-SB-001 |
| Doors / windows | checked | ok | Visible doors and windows closed after visit; no breach observed. | EV-SB-002 |
| Visible water risk | checked | attention / owner decision required | Bathroom shower edge shows visible silicone wear and a small visible moisture trace near the edge. Cause not diagnosed. No active water flow observed. | EV-SB-006, EV-SB-007 |
| Visible electrical risk | checked | ok | No visible electrical issue observed in checked areas. | EV-SB-003 |
| Damp / odour / ventilation | checked | attention | No general odour noted; bathroom item recorded under visible water risk. | EV-SB-006 |
| Balcony / exterior (if scoped) | checked | ok | Balcony visual check only; visible drain area clear at time of visit. | EV-SB-004 |
| Cleaning / readiness (if scoped) | checked | ok | Readiness cleaning completed within scoped areas; before/after evidence references logged. | EV-SB-008, EV-SB-009 |
| Restricted zones respected | checked | ok | Locked wardrobe and hallway storage cabinet were not opened or photographed. | operator note only |
| Owner items not moved | checked | ok | No owner private items moved outside normal readiness cleaning in scoped areas. | operator note only |
| Other visible issue | checked | ok | No additional owner-decision finding recorded. | EV-SB-010 |

---

## 4. Evidence register

Evidence references only. No actual photos are attached in this test fill.

| Evidence ref | Type | Description | Sensitive-item rule applied? | Archive reference |
|---|---|---|---|---|
| EV-SB-001 | `[x]` note | Entry/exit log reference for first verification visit; no code or address included. | `[x]` n/a | ARCH-SB-TEST-001 / REC-01 / access |
| EV-SB-002 | `[x]` photo ref | Minimized door/window closing reference; no address marker visible. | `[x]` no | ARCH-SB-TEST-001 / REC-01 / baseline |
| EV-SB-003 | `[x]` note | Visual electrical-risk row marked ok; no panel details reproduced in report. | `[x]` n/a | ARCH-SB-TEST-001 / REC-01 / checklist |
| EV-SB-004 | `[x]` photo ref | Balcony visual-check reference; no neighbouring property or personal items framed. | `[x]` no | ARCH-SB-TEST-001 / REC-01 / exterior |
| EV-SB-006 | `[x]` photo ref | Bathroom shower-edge silicone wear and small visible moisture trace. | `[x]` no | ARCH-SB-TEST-001 / REC-01 / finding-F1 |
| EV-SB-007 | `[x]` note | Operator note: no diagnosis; no active water flow observed; owner decision required. | `[x]` n/a | ARCH-SB-TEST-001 / REC-01 / finding-F1 |
| EV-SB-008 | `[x]` photo ref | Readiness cleaning before reference for scoped area. | `[x]` no | ARCH-SB-TEST-001 / REC-01 / readiness |
| EV-SB-009 | `[x]` photo ref | Readiness cleaning after reference for scoped area. | `[x]` no | ARCH-SB-TEST-001 / REC-01 / readiness |
| EV-SB-010 | `[x]` note | Baseline evidence set complete; no sensitive photos taken. | `[x]` n/a | ARCH-SB-TEST-001 / REC-01 / baseline |

No `no-photo-sensitive` row was needed. Restricted zones were respected and not photographed.

---

## 5. Findings

| Field | Value |
|---|---|
| Finding ID | `SEN-PROP-TEST-001-VR-0001-F1` |
| Severity | `[x]` attention; `[x]` owner decision required |
| Visible fact | Visible bathroom silicone wear and a small visible moisture trace near the shower edge. |
| What was not checked / unknown | Cause unknown. No technical diagnosis made. No active water flow observed. No destructive inspection performed. Restricted zones were not entered. |
| Recommended next action | Owner decides whether to approve a technician inspection/quote request or monitor and re-check at the next scheduled visit. |
| Authority basis | Scope Register sections 5 and 9 plus Option A launch doctrine: Extended has no autonomous paid technician/vendor spend by default. **Owner approval required before any paid action.** |
| Decision Request needed? | `[x]` yes -> create REC-03 |
| Related evidence refs | EV-SB-006, EV-SB-007 |

No other finding required owner decision in this dry-run.

---

## 6. Cleaning / readiness block

| Field | Value |
|---|---|
| Cleaning type | `[x]` readiness |
| Before/after evidence refs | EV-SB-008; EV-SB-009 |
| Supplies issue? | `[x]` no - scoped readiness cleaning completed with available supplies. |
| Re-clean question? | `[x]` no - no re-clean question raised in this visit report. |
| UV used? | `[x]` no |
| UV note | UV-assisted visible residue check was not used. If used later, it remains an optional evidence aid only and not sanitation proof, hygiene certification, sterilisation, disinfection guarantee, or laboratory evidence. |

Cleaning was recorded as a scoped readiness capability inside oversight. No guest turnover cleaning was
performed or implied.

---

## 7. Closing

| Field | Value |
|---|---|
| Report delivery target | `[x]` within 24h - delivery target only, not guaranteed resolution |
| Sent to | Not sent - internal dry-run only |
| Archive reference | ARCH-SB-TEST-001 / REC-01 / VR-0001 |
| Operator notes | Create REC-03 for Finding F1. Update SCO-01 post-visit completion notes for building access, utility shut-offs, key count, baseline evidence, and known bathroom-risk observation. |
| Owner follow-up required by date | 2026-07-13 17:00 (fictional; based on Scenario B owner-decision default) |

---

## Dry-run verdict

### Top issues found

1. REC-01 handled the first physical verification/readiness visit without a structural failure.
2. The only awkward field was visit type: a real first visit may also be a readiness visit. Current workaround is acceptable.
3. The bathroom finding cleanly triggered REC-03 without forcing diagnosis, leak confirmation, or paid action.
4. Restricted-zone and no-sensitive-photo rules were easy to preserve.
5. No Basic/Extended autonomous spend limit was invented.

### Can REC-01 proceed as a draft template?

Yes. REC-01 can proceed as a draft delivered-record template. This dry-run does not make it
customer-facing approved.

### Is any template patch required before Scenario C?

No blocking REC-01 patch is required before Scenario C. A future minor patch may add a clearer
multi-context visit type or a Scope Register update handoff row, but neither is required for the next
dry-run.

---

## Validation notes

- Test data is fictional.
- No real PII, address, phone, email, alarm code, access code, or property-identifying detail is recorded.
- No actual photos are included; evidence references only.
- No template was edited by this fill.
- Protected contracts preserved: estimator, pricing, package meanings, routes, contact schema/API, legal/noindex, and shipped pages untouched.

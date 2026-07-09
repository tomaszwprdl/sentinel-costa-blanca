---
title: Decision Request v0.1 - Instrumented Test Fill (Scenario B)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
version: test-fill-0.1
---

# 03 - DECISION REQUEST TEST FILL - SCENARIO B

> **FICTIONAL TEST DATA.** Every person, property reference, archive reference, and evidence reference in
> this file is invented for form-testing only. No real personal data, no real address, no real phone,
> no real email, no real access code, and no real property details are recorded. This dry-run approves
> nothing and is not a customer document.

Scenario B source documents:

- `01-SCOPE-REGISTER-TEST-FILL-SCENARIO-B.md`
- `02-VISIT-REPORT-TEST-FILL-SCENARIO-B.md`

Decision Request source finding: `SEN-PROP-TEST-001-VR-0001-F1`.

---

## 0. Instrumentation

| Instrument | Result |
|---|---|
| Did the template accept Scenario B cleanly? | Yes. REC-03 accepted the Extended-package authority posture cleanly when the authority basis was stated as Scope Register plus Option A launch doctrine. |
| Fields that were awkward or unclear | Option C in the blank template is labelled around quote/more information; Scenario B needed "request more evidence / owner consults own technician." The row structure still worked, but the template may later benefit from broader option wording. Not blocking. |
| Fields that forced repetition | Owner approval required appears in the header, option A, authority block, and rules. The repetition is useful here because paid technician/vendor action is proposed on Extended. |
| Any missing field discovered | No blocking missing field. The template already has response channel, written confirmation, receipt/evidence rule, and completed-action handoff. |
| Any authority ambiguity discovered | No. Extended has no autonomous paid spend by default. Any paid technician/vendor action is marked `[OWNER APPROVAL REQUIRED]`; no Basic/Extended euro limit is invented. |
| Verdict | `template-ready` - no REC-03 patch required before Scenario C. |

---

## 1. Header

| Field | Value |
|---|---|
| Decision Request ID | `REC-03 / SEN-PROP-TEST-001-DR-0001` |
| Related Visit Report ID | `REC-01 / SEN-PROP-TEST-001-VR-0001` |
| Property reference | `SEN-PROP-TEST-001` |
| Scope Register reference | `SCO-01 / SEN-PROP-TEST-001` |
| Finding ID | `SEN-PROP-TEST-001-VR-0001-F1` |
| Date/time | 2026-07-10 13:40 (fictional) |
| Package | `[x]` Rozszerzony / Extended |
| Authority basis reference | Scope Register sections 5 and 9; Option A launch doctrine in `SENTINEL-OWNER-DECISION-MEMO.md` section 0a. Non-Full default: owner approval required before paid action/vendor spend; no Basic/Extended euro amount implied. |
| Language of record | `[x]` Polish |

---

## 2. Decision needed

| Field | Value |
|---|---|
| Visible issue | Visible bathroom silicone wear and a small visible moisture trace near the shower edge. No cause diagnosed. No active water flow observed. |
| Why owner decision is needed | A technician inspection/quote may be a paid vendor action. Scenario B is Extended, and under Option A no autonomous paid technician/vendor spend exists by default for Basic/Extended. |
| What happens if no decision is received | Sentinel documents the finding and re-checks visible condition at the next scheduled visit, unless the owner gives a different approved instruction or a later visible urgent protective condition appears. |
| Deadline for owner decision | 2026-07-13 17:00 (fictional; based on Scenario B owner-decision default) |
| Urgency level | `[x]` attention |

This request is not a guarantee of resolution. It asks the owner to choose the next documented step.

---

## 3. Options

### Option A - approve technician inspection/quote request

| Field | Value |
|---|---|
| Description | `[OWNER APPROVAL REQUIRED]` Approve Sentinel to request a technician inspection/quote for the visible bathroom silicone wear and small visible moisture trace near the shower edge. |
| Estimated cost | Quote/call-out cost pending; no amount inserted by this dry-run. Owner approval is required before any paid technician/vendor action. |
| Vendor / operator action | Sentinel coordinates access for the approved inspection/quote, documents entry/exit, and records the technician quote or inspection note. Vendor performance is not guaranteed. |
| Evidence needed | Access log; technician quote or inspection note; receipt/invoice if any approved paid action or call-out cost is incurred; minimised evidence references only. |
| Risk of waiting | The visible condition may remain unchanged or may develop before the next visit. Sentinel does not diagnose the cause from visible signs alone. |
| Requires payment / reimbursement? | `[x]` pending - depends on technician call-out/quote terms; `[OWNER APPROVAL REQUIRED]` before any paid action. |
| Receipt / evidence rule | If any approved paid action or call-out cost is incurred, receipt/invoice and evidence are required and attached or archived per Scope Register section 9. No-receipt exception only if receipt is impossible, with written explanation. |

### Option B - monitor and re-check at next visit

| Field | Value |
|---|---|
| Description | Owner declines technician/vendor action for now. Sentinel re-checks the visible bathroom edge condition at the next scheduled visit. |
| Estimated cost | n/a for Sentinel vendor spend. |
| Vendor / operator action | Monitoring only within the scheduled visit rhythm. No paid technician/vendor action. |
| Evidence needed | Next-visit re-check note and evidence reference if visible condition changes. |
| Risk of waiting | The visible condition may remain unchanged or may develop between visits. No resolution is guaranteed by choosing monitoring. |
| Requires payment / reimbursement? | `[x]` no |
| Receipt / evidence rule | n/a unless the owner later approves paid action. |

### Option C - request more evidence / owner consults own technician

| Field | Value |
|---|---|
| Description | Owner requests additional non-sensitive evidence from the existing visit record and/or consults the owner's own technician before deciding. |
| Estimated cost | n/a for Sentinel vendor spend unless the owner later approves a paid Sentinel-coordinated action. |
| Vendor / operator action | Sentinel provides existing non-sensitive evidence references or a short factual clarification. If the owner uses an own technician, Sentinel does not guarantee that technician's advice, timing, method, or performance. |
| Evidence needed | Existing evidence references EV-SB-006 and EV-SB-007; any owner-supplied technician note remains owner-provided information. |
| Risk of waiting | Decision may be delayed. Sentinel continues only within agreed scope and authority while awaiting instruction. |
| Requires payment / reimbursement? | `[x]` no for this option as written; `[OWNER APPROVAL REQUIRED]` if it later becomes paid Sentinel-coordinated access/vendor action. |
| Receipt / evidence rule | n/a unless a cost is later approved; if approved, receipt/invoice and access evidence are required per Scope Register section 9. |

---

## 4. Authority and boundary

| Field | Value |
|---|---|
| Within agreed authority? | `[x]` no for paid technician/vendor action on Extended by default |
| Above authority? | `[x]` yes for any paid technician/vendor action because no non-Full autonomous paid-spend authority exists by default |
| Owner approval required? | `[x]` yes |
| Authority basis | `[x]` Scope Register (SCO-01 sections 5 and 9); Option A launch doctrine |
| If authority undefined | Not undefined after Option A. For this Extended scenario, paid action remains `[OWNER APPROVAL REQUIRED]`. |
| No-guaranteed-resolution statement | Sentinel's response is response/decision timing per package SLA; it does not guarantee that the issue is resolved. |
| Vendor-performance statement | Where a vendor is involved, Sentinel coordinates and documents access; it does not guarantee the vendor's performance. |

Launch doctrine applied: on Basic / Extended there is no autonomous paid action by default. This request
awaits owner approval before any technician/vendor spend. Emergency services or community-required
minimal action would be documented separately if a later visible urgent protective condition appeared;
that is not the situation recorded here.

---

## 5. Owner response record

| Field | Value |
|---|---|
| Owner decision | `[ ]` approved   `[ ]` declined   `[ ]` request more info   `[x]` no response yet - dry-run open state |
| Which option | `[ ]` A   `[ ]` B   `[ ]` C   `[ ]` other: `______` |
| Response channel | `[ ]` email   `[ ]` WhatsApp   `[ ]` phone/voice   `[ ]` other: `______` |
| Response timestamp | pending owner response |
| Written confirmation reference | pending owner response |
| If voice approval | Written confirmation required before acting (Scope Register section 9). |
| Operator recording the response | Test operator (simulation) |

---

## 6. Completed-action handoff

| Field | Value |
|---|---|
| If approved | Create a later Completed-Action Summary only after approved paid action or completed technician access exists. Reference pending: `______`. |
| If declined | Record monitoring status and next re-check in next REC-01 visit report. |
| If no response | No paid technician/vendor action is taken. Log contact attempts and monitor/re-check per owner-non-response procedure once approved. |

No Completed-Action Summary is created by this dry-run.

---

## Dry-run verdict

### Top issues found

1. REC-03 handled the Extended Option A authority posture cleanly.
2. Paid technician/vendor action is visibly marked `[OWNER APPROVAL REQUIRED]`.
3. No Basic/Extended autonomous spend limit or euro amount was invented.
4. The options covered approval, monitoring, and more-evidence/owner-technician paths without pressure framing.
5. The receipt/evidence rule fit the proposed paid-action path and stayed tied to the Scope Register.

### Can REC-03 proceed as a draft template?

Yes. REC-03 can proceed as a draft delivered-record template. This dry-run does not make it
customer-facing approved.

### Is any template patch required before Scenario C?

No blocking REC-03 patch is required before Scenario C. A future minor wording patch could broaden
Option C from "request quote / more information" to "request quote / more information / owner consults own
technician", but the current structure is stable enough for the next dry-run.

---

## Validation notes

- Test data is fictional.
- No real PII, address, phone, email, alarm code, access code, or property-identifying detail is recorded.
- No actual photos are included; evidence references only.
- No MSA, legal annex, privacy annex, or Completed Action Summary was created.
- No template was edited by this fill.
- Protected contracts preserved: estimator, pricing, package meanings, routes, contact schema/API, legal/noindex, and shipped pages untouched.

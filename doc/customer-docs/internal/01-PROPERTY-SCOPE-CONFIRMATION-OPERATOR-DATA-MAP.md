---
title: SCO-01 Operator and Data Map
status: internal-working
customer_facing: false
owner_review_required: true
version: 0.2-working
source: SCO-01 v0.5 form-shape correction
---

# SCO-01 Operator / Data Map

Sentinel-internal companion to the Property Scope Confirmation. It stores system codes, downstream record links, moved administrative fields and review-gate destinations. It is not owner-facing, not legal wording and creates no new service promise.

Rule: update this map in the same change as any SCO-01 field or module change. A moved item may not disappear until its landing line exists here or in a named working record.

## 1. Record administration moved out of the visible form

| Moved item / source anchor | Internal home | Use |
|---|---|---|
| Source version and supersession | Git history + Document Register + source frontmatter | Prevent two live versions |
| Completion channel and participants (former §1) | Internal onboarding note | Provenance only when needed |
| Internal archive reference (former §1) | Archive index | Filing |
| Owner internal reference | Contact/archive system | De-duplication |
| Revision register (former §15) | Git history + Document Register | Change control |
| Evidence-set and photo-reference IDs (former §10) | REC-01 / evidence archive | Traceability |
| Internal review workflow rows (former §13) | Document Register | Blocking gate tracking |

## 2. Module-code and output map

| Visible module | Internal code | Visible owner result | Downstream record |
|---|---|---|---|
| Planowa wizyta nadzorcza | `scheduled_oversight_visit` | raport wizyty | REC-01 |
| Przechowanie kluczy | `keyholding` | potwierdzenie przechowania / log dostępu | AKC-02, AKC-03, AKC-04 |
| Gotowość przed przyjazdem właściciela | `pre_arrival_readiness` | potwierdzenie gotowości | REC-01, CLN-02 when cleaning is scoped |
| Sprzątanie w ramach gotowości | `cleaning_readiness` | potwierdzenie gotowości + dowód przed/po | CLN-02, DAT-03 |
| Sprzątanie rotacyjne | `turnover_cleaning` | potwierdzenie gotowości + dowód przed/po | CLN-02, DAT-03 |
| Pościel / pranie | `linen_laundry` | potwierdzenie wykonania | CLN-02 when scoped |
| Kontrola po gościach | `guest_check` | raport / zdjęcia referencyjne | REC-01, DAT-03 |
| Dostęp dla wykonawcy | `vendor_access` | log dostępu / podsumowanie | AKC-04, REC-01; REC-03 when a decision is required |
| Balkon / zewnętrzna kontrola wizualna | `exterior_visual_check` | notatka / zdjęcie referencyjne | REC-01, DAT-03 |
| Lokalizacja zaworów i wyłączników | `utility_shutoff_awareness` | potwierdzenie lokalizacji | future SCO-04 / first-visit record |
| Komunikaty wspólnoty / budynku | `community_notice_check` | notatka | REC-01 |

Internal module status codes remain: `included`, `not_included`, `n/a`, `owner_decision`, `first_visit`. They must not appear as visible owner choices.

## 3. Form-shape and trigger map

| Visible block | Operational shape | Internal landing / consumer |
|---|---|---|
| Terminy uruchamiające gotowość | Conditional trigger-source + access check | Scheduling note; REC-01/CLN-02 trigger context |
| Regularne działania Sentinel | Recurring action, frequency/check point, output, boundary | Relevant SOP/checklist and REC-01/AKC records |
| Gotowość uruchamiana terminem | Date trigger, required-ready time, output, execution condition | REC-01, CLN-02, DAT-03 as scoped |
| Dostęp dla wykonawcy | Dedicated access/decision/documentation block | AKC-04; REC-03 when decision required; REC-01 summary |
| Kontrola wizualna podczas wizyty | Visible-check boundary, not diagnosis | REC-01, DAT-03 |
| Pierwsza wizyta / profil nieruchomości | One-time physical facts | Future SCO-04 / first-visit record |

Date-source fields feed only readiness/scheduling triggers. They do not create booking, pricing, guest-communication or rental-management duties.

## 4. Visible-field to internal-record map

| Visible SCO-01 field / block | Internal consumer | Notes |
|---|---|---|
| Property reference, profile and package | REC-01, REC-03, all operational records | Copy the confirmed value; do not infer |
| Date source + verified access to dates | REC-01 scheduling context; CLN-02 when scoped | Manual dates/calendar/email are triggers only; test before relying on access |
| SLA window and visit rhythm | REC-01 / scheduling | SLA remains response/decision timing |
| Recurring-action scope, trigger, check point and boundary | Relevant checklist/SOP | Use only for repeatable/recurring actions |
| Date-triggered readiness scope, trigger, ready-by time and conditions | REC-01 / CLN-02 / DAT-03 as scoped | Do not substitute generic rhythm fields |
| Vendor-access decision and documentation | AKC-04 / REC-03 / REC-01 | Vendor performance remains outside Sentinel guarantee |
| Visual-check scope and boundary | REC-01 / DAT-03 | Visible facts only; no technical diagnosis |
| Owner decision channel and written-confirmation rule | REC-03 | Authority basis must be recorded per decision |
| Basic / Extended authority wording | REC-03, emergency/non-response records | Owner approval before paid action/vendor spend; no euro limit |
| Full authority selection | REC-03, completed-action summary | EUR 300 standard; EUR 500 only if agreed |
| Access roles and restrictions | AKC-02, AKC-03, AKC-04 | Never copy actual codes/passwords into SCO-01 |
| Key handover / return details | AKC-03 stub, then AKC-02 | Count, ID and condition live on receipt/register |
| Cleaning model, products, re-clean and evidence | CLN-02, DAT-03 | Re-clean rule remains operational-test pending |
| Photo restrictions and sensitive-item handling | DAT-03, REC-01 | Bind every report/evidence workflow |
| Open owner decisions | REC-03 or onboarding action list | Close before dependent action |
| First-visit completion gate | future SCO-04 / REC-01 | Detailed checks moved out of SCO-01 |

## 5. First-visit items moved from the visible form

Landing home: future Property Profile / first-visit record. Until that file exists, this section is the controlling internal anchor.

- water shutoff location;
- electrical cutoff location;
- building/community entry mechanics;
- visible issues requiring attention, without technical diagnosis;
- baseline evidence set;
- key count/type confirmation (also AKC-03 / AKC-02);
- community notices/building rules;
- excluded/private zones.

## 6. Contact and archive items moved or consolidated

| Item | Internal destination |
|---|---|
| Utility-provider contact | future SCO-04 / contact sheet |
| Full contact directory and change history | future SCO-06 |
| Official archive identifier | archive index |
| Evidence reference numbers | REC-01 / evidence archive |
| WhatsApp communications requiring preservation | archive the material decision in the official record |

## 7. Review-gate destinations

| Gate | Blocking destination | Visible owner limitation retained in SCO-01 |
|---|---|---|
| Owner review | Document Register SCO-01 row | Working-draft / not-signature-ready warning |
| Lawyer review | Document Register SCO-01 and dependent legal/data rows | Draft warning; privacy/retention and final boundary wording remain pending |
| Accountant review | Document Register and finance/data rows | Settlement/expense exceptions remain pending where stated |
| Operational simulation | Document Register SCO-01 row | Open-items and first-visit completion gates |

Moving a gate here does not clear it. The Document Register remains the blocking source of truth.

## 8. Language and profile maintenance notes

- PL is the current working document language. An EN working variant becomes required before onboarding an owner who cannot meaningfully review PL.
- `private`: do not complete guest/turnover modules unless explicitly in scope.
- `guest`: complete guest/turnover modules plus shared modules.
- `mixed`: complete only the selected private and guest modules; shared blocks are completed once.
- No profile creates a new package, spend limit or authority rule.

---
title: Scope Register v0.3 — Instrumented Test Fill (Scenario B)
status: internal test artifact
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: private-use-only
version: test-fill-0.1
---

# 01 — SCOPE REGISTER TEST FILL — SCENARIO B

> **FICTIONAL TEST DATA.** Every name, address, contact, key label, and reference in this file is
> invented for form-testing only. No real personal data, no real property, no real codes. This is an
> instrumented dry run of `01-SCOPE-REGISTER-DRAFT.md` v0.3 — it approves nothing, promises nothing,
> and is not a customer document.

**Scenario B:** apartment in the Torrevieja area · private owner abroad · occasional owner arrivals ·
readiness cleaning included · keyholding included · no guest turnover · restricted private storage
exists · Sentinel cleaner (no owner-selected cleaner) · language of record: Polish · package: Extended.

Simulated fill: agreement-stage conversation by video, owner abroad. Physical first visit has NOT
happened — the fill deliberately ends in `partially filled — first visit pending`, exercising the v0.3
fill-state discipline.

---

## 0. INSTRUMENTATION (read this first)

| Instrument | Result |
|---|---|
| **Stopwatch estimate** | Agreement-stage fill (video call, owner explanations included): **~55–70 min**. Post-visit completion pass: **+20–30 min**. Total to `approved internal fill`: ~85–100 min across two sessions. Longest single stretches: §6 module table (~12 min incl. reading plain meanings) and §8 keys/codes (~10 min). |
| **Blank count** | **3** true blanks (`______` with no state): §9 de-minimis threshold (blocked on `[ACCOUNTANT REVIEW REQUIRED]`, cannot be filled by operator), and 2 revision-log date cells (template-level rows, not property rows — see finding T2). Every other field resolved to a value or a state. Blank-state discipline held. |
| **Pending first visit count** | **6**: community/building access details, known risk areas, utilities shut-off locations, baseline photo reference, community admin contact, scope-confirmed date. |
| **Pending owner decision count** | **6**: utility provider contact, insurance/claim contact, autonomous decision limit (see finding T1), owner-approval threshold (same root as T1), vendor-access module state, access-event overage basis. Plus **2 pending professional review** (receipt threshold — accountant; retention schedule — lawyer), which are correctly not the operator's to resolve. |
| **Owner questions likely asked** | (1) "What exactly is an *access event* — is your normal visit one?" (no plain meaning in form; modules have one-liners, access events don't). (2) "What is MY spending limit on Extended — the form says EUR 300 for Full?" (finding T1). (3) "Who buys cleaning products and what if they run out mid-clean?" (finding T5). (4) "If I book a flight 3 days ahead, do I still get readiness?" (answered by §5a notice states — worked well). (5) "You won't open the locked wardrobe or photograph inside it, right?" (answered cleanly by §3b + §11 — worked well). (6) "Is the balcony checked?" (answered by §6a exterior note — worked). |
| **Fields impossible to answer before physical visit** | Utilities shut-off locations · baseline photo reference · known risk areas (owner *suspects* bathroom silicone; unverified) · community admin contact (name is on the notice board) · exact building-access mechanics · key count verification (owner *says* 3 keys; confirmed only at signed handover). The v0.3 `pending first visit` state absorbed all of these without forcing fake data — this was the single biggest improvement over a v0.2-style fill. |
| **Dispute risks still visible after fill** | (a) **Extended autonomous limit undefined** — the worst one (T1). (b) Short-notice arrival vs 5-day readiness notice — recorded, but an impatient owner will test it. (c) Supplies run-out mid-readiness with "owner provides" (T5). (d) Balcony marked "visual only" — an owner may later read "exterior included" more broadly. (e) Record language Polish vs form structured in English (T4). |
| **Fields that felt too long / repetitive** | Core warning (package ≠ authority ≠ liability) is met 3× in one fill (§5, §8, §9) — correct per collapse ledger, but the operator reads it aloud once and skips it twice. §6 remains an 8-column table; states helped, but on iPad it is still the hardest section (finding T3 adjacent). §1 now has 10 rows before the property is even named — front-loaded but justified by the evidence value. |
| **Crib-sheet candidates (move out of form eventually)** | Module plain meanings (keep one-line versions in-form; the *explanations the operator actually gives* belong in a crib sheet) · §11 do-not-photograph list (operator training material; keep the in-form reference + acknowledgment) · UV wording (§7) · protective-action threshold examples (§9) · a missing one-liner for **"access event"** should be ADDED to the form or crib sheet (owner question #1). |

---

## 1. Document status and authority

| Field | Value |
|---|---|
| Document ID | `SCO-01 / SEN-PROP-TEST-001` |
| Property reference | `SEN-PROP-TEST-001` |
| State | `[x]` partially filled — first visit pending |
| Fill stage | `[x]` agreement conversation |
| Filled with owner present? | `[x]` yes |
| Fill channel | `[x]` video |
| Participants present | Owner (A. Nowak-Testowa — FICTIONAL) · Sentinel operator (test operator) |
| Language of record | `[x]` Polish |
| Owner questions / unresolved points reference | `TEST-QL-B-01` (the 6 questions logged in §0) |
| Prepared by | Test operator (simulation) |
| Reviewed by | pending — post-visit completion pass |
| Approval date | pending — GOV-03: Owner approval required; this test fill is never approved |

> Partially filled state used as designed: 6 fields await physical verification. Not a failed fill.

### Revision log

*(Template-level rows — not filled per property; see finding T2.)*

---

## 2. Client / owner identity — all FICTIONAL

| Field | Value |
|---|---|
| Client capacity | `[x]` private owner |
| Legal name | Anna Nowak-Testowa (FICTIONAL) |
| Representative name | n/a |
| Email | anna.test@example.invalid (FICTIONAL) |
| Phone | +48 600 000 000 (FICTIONAL) |
| Preferred language | `[x]` Polish |
| Preferred operational channel | `[x]` WhatsApp |
| Formal agreement channel | `[x]` Email (default) |
| Billing contact | same as owner — agreed |
| Emergency contact | P. Nowak-Testowy, brother (FICTIONAL), +48 600 000 001 |

---

## 3. Property identity — all FICTIONAL

| Field | Value |
|---|---|
| Property address | Calle Przykładowa 12, apt 3B, Torrevieja (FICTIONAL) |
| Service-area confirmation | `[x]` confirmed within Torrevieja + ~50–70 km |
| Property type | `[x]` Apartment |
| Size (m²) | 68 |
| Bedrooms band | `[x]` 2 |
| Community / building access notes | pending first visit (intercom + community gate mentioned by owner) |
| Parking / access notes | no assigned parking — street only; agreed |
| Alarm / access notes | no alarm system — agreed (see §8 code state) |
| Known risk areas | pending first visit (owner suspects bathroom silicone wear — unverified) |
| Utilities shut-off locations | pending first visit |
| Baseline photo reference | pending first visit |

### 3a. Access & logistics

| Field | Value |
|---|---|
| Parking / lift / building restrictions | lift present; no operator restrictions — agreed |
| Utility provider contact | pending owner decision (owner to forward provider details by email) |
| Community admin contact | pending first visit (name posted on community board) |
| Neighbour / building contact | not agreed — owner prefers no neighbour involvement |
| Insurance / claim contact | pending owner decision **[LAWYER REVIEW REQUIRED]** (light — flag intact) |
| Router / internet equipment location | hallway shelf — **location only, no passwords recorded** |
| Waste / recycling / community disposal rules | community bins across the street; no special building rules — agreed |

### 3b. Restricted zones & owner private items

| Field | Value |
|---|---|
| Restricted rooms / private owner zones | main-bedroom wardrobe (locked) + hallway storage cabinet — agreed do-not-enter **[LAWYER REVIEW REQUIRED]** (light — flag intact) |
| Locked cupboards / safes / private storage | wardrobe lock — key NOT held by Sentinel; agreed |
| Owner items not to touch or move | document box in wardrobe area; desk papers in second bedroom — agreed |
| Valuables inventory required? | `[x]` no — owner declined; noted per FAQ rule (no liability for unreported valuables) |
| Valuables inventory reference | n/a |

---

## 4. Usage pathway

| Field | Value |
|---|---|
| Usage pathway | `[x]` Private Absence (Nieobecność prywatna / `private-use-only`) |
| Current usage pattern | owner abroad (Poland); apartment empty between owner stays — agreed |
| Expected owner arrivals | 4–6 per year, typically 1–2 weeks each — agreed |
| Expected guest stays | none — agreed |
| Mixed-use confirmation date | n/a |
| Mixed-use starting-scope note | n/a |

### 4a. Guest-operating source

**n/a — entire section** (Private Absence; no guest use). All five fields marked n/a, not blank.

---

## 5. Package and responsibility level

| Field | Value |
|---|---|
| Package | `[x]` Rozszerzony / Extended |
| Response window | `[x]` 24h (Extended) |
| Minimum visit rhythm | 2/month (standard) — discussed & confirmed |
| Access-event allowance | Extended = 2 third-party access events / month — discussed & confirmed |
| Autonomous decision limit | **pending owner decision** **[LAWYER REVIEW REQUIRED]** — see finding T1: form wording defines EUR 300 for Full; the Extended-level autonomous limit is not defined anywhere the operator can point to. NOT invented here. |
| Optional EUR 500 authority agreed? | n/a (form ties it to Full; not offered on Extended) |

### 5a. Minimum-notice defaults — fictional per-property values, all state-resolved

| Action | Default value | Discussed & confirmed? | Override in §6? | Pending? |
|---|---|---|---|---|
| Scheduled inspection notice | 48h | `[x]` yes | `[x]` no | `[x]` no |
| Readiness cleaning notice | 5 days | `[x]` yes | `[x]` no | `[x]` no |
| Turnover cleaning notice | n/a (no guest use) | — | — | — |
| Vendor access notice | 48h | `[ ]` yes `[x]` no — proposed, not yet discussed (no vendor expected) | `[x]` no | `[x]` yes |
| Owner decision deadline default | 72h | `[x]` yes | `[x]` no | `[x]` no |

> Owner explicitly asked what happens on a 3-day-notice flight: recorded answer — Sentinel attempts
> readiness but the 5-day notice means a shortfall is not a breach. The state columns made this
> conversation easy. (Instrumentation: this is the notice discipline working as designed.)

---

## 6. Included scope modules

| Module (key) | State | Trigger | Frequency / allowance | Min. notice | Evidence required | Owner decision needed? | Exclusions / notes |
|---|---|---|---|---|---|---|---|
| Keyholding (`keyholding`) | included | continuous custody from signed key receipt | continuous | n/a | key receipt + movement log | `[x]` no | 3 keys (see §8) |
| Readiness cleaning (`cleaning_readiness`) | included | owner arrival date received | per arrival (est. 4–6×/year) | 5 days (§5a) | before/after (see §7) | `[x]` no | — |
| Turnover cleaning (`turnover_cleaning`) | not included | — | — | — | — | — | no guest use |
| Linen (`linen`) | not included | — | — | — | — | — | owner manages own linen; laundering: owner (§7) |
| Guest check support (`guest_check`) | n/a | — | — | — | — | — | no guest pathway |
| Vendor / technician access (`vendor_access`) | **pending owner decision** | — | — | 48h proposed (§5a) | access log + work photos | `[x]` yes | owner prefers per-event approval; no standing authorization |

> Fill note: "Trigger" for keyholding required improvisation ("continuous custody") — the cell is not
> meaningful for a continuous module. Minor; noted for a future crib-sheet line, not a patch.

### Rhythm acknowledgment

| Field | Value |
|---|---|
| Rarer rhythm than standard agreed? | `[x]` no |
| Reduced responsibility consequence acknowledged? | `[x]` n/a **[LAWYER REVIEW REQUIRED]** (light — flag intact) |

### 6a. Additional scope items

| Field | Value |
|---|---|
| Exterior / terrace / pool / garden included? | `[x]` yes — balcony only |
| Exterior scope note | balcony: **visual check only** (door seal, drainage, visible state); no cleaning, no plants |
| Linen stock / par level | n/a |
| Linen replacement threshold | n/a |
| Pets / plants / perishable food handling | agreed: no pets, no plants; owner empties perishables before each departure; Sentinel reports (not disposes) anything found |

---

## 7. Cleaning scope block

| Field | Value |
|---|---|
| Cleaning type | `[x]` readiness |
| Cleaner | `[x]` Sentinel cleaner |
| Cleaner identity (if owner-selected) | n/a |
| Cleaner contact reference | n/a |
| Owner-selected cleaner accepted Sentinel documentation standard? | `[x]` n/a |
| Cleaning documentation standard reference | pending — CLN-03 not yet internal-approved |
| Laundering responsibility | `[x]` owner (owner launders own linen during stays) |
| Before/after evidence required | `[x]` yes |
| UV-assisted visible residue check allowed? | `[x]` no — owner not interested; noted |
| Re-clean cost basis | `[x]` provisional — **not converted to final wording** (flag intact) |
| Supplies / equipment / consumables responsibility | `[x]` owner provides · `[x]` stored on property |
| Supplies reimbursement basis | see §9 — resolved there as "owner purchases directly" **[ACCOUNTANT REVIEW REQUIRED]** flag intact |

> Fill note: owner asked what happens if supplies run out mid-readiness (question #3). No field carries
> the answer — recorded in TEST-QL-B-01 as finding T5. Agreed informally: operator reports shortage in
> the visit report; no purchase without owner approval. That informal agreement has no capture row.

---

## 8. Access and key custody summary

| Field | Value |
|---|---|
| Keys to be received (count + labels) | 3 — labels SEN-K-T001-A (apartment), -B (building), -C (mailbox); **no address on tags**; count pending verification at signed handover |
| Physical key receiver | test operator (will sign AKC-03 receipt at handover) |
| Named physical custodian | test operator |
| Authorised persons | operator + Sentinel cleaner (readiness visits only) — pending SCO-05 register (draft) |
| Third-party access allowed? | `[x]` no — per-event owner approval instead (see §6 vendor row) |
| Smart lock / alarm code state | `[x]` n/a — no code system |
| Code may be shared with Sentinel cleaner? | `[x]` n/a |
| Code may be shared with owner-selected cleaner? | `[x]` n/a |
| Code may be shared with vendor / technician? | `[x]` n/a |
| Code-sharing rule reference | n/a **[LAWYER REVIEW REQUIRED]** flag noted but unexercised in this scenario |
| Keys that must never leave the property | none — all three keys in Sentinel custody; agreed |
| Access-failure procedure reference | pending — EMG-03 draft |
| Key return required at handover | `[x]` yes |
| Access & Key Custody annex status | **[LAWYER REVIEW REQUIRED]** — unchanged; no wording drafted |

> Fill note: the new `n/a — no code system` state (v0.3) fit this property exactly — in v0.2 this would
> have been either a blank or a forced "not known", both wrong. V1 fix validated in practice.

---

## 9. Authority and owner decision boundaries

| Field | Value |
|---|---|
| Routine observations | document + report; no autonomous action — agreed |
| Protective-action threshold | active water leak · open/breached door or window · security incident — agreed as examples; final wording pending EMG-01 **[LAWYER REVIEW REQUIRED]** |
| Owner-approval threshold | above autonomous limit — **pending owner decision** (blocked by the same T1 gap: Extended limit undefined) |
| Authority limit | **pending owner decision** **[LAWYER REVIEW REQUIRED]** — see §5 and finding T1 |
| Above-limit action rule | Owner approval required before acting (fixed text — unchanged) |
| Owner non-response doctrine reference | Decision Memo §4 (Protective Action Doctrine) — pending EMG-01/02 |
| Emergency services / community escalation reference | pending EMG-01 |
| Valid owner approval method | `[x]` WhatsApp accepted (operational channel) — formal record follows by email |
| Voice approval requires written confirmation? | `[x]` yes **[LAWYER REVIEW REQUIRED]** flag intact |
| Emergency spend receipt / evidence rule | Required above de-minimis threshold; threshold: `______` **[ACCOUNTANT REVIEW REQUIRED]** — cannot be filled by operator; correctly blocked |
| Receipt delivery method | `[x]` attached to report |
| No-receipt exception | emergency / receipt impossible only; written explanation required — standard text acknowledged |
| Billable event basis reference | pending — FIN-01 not yet confirmed; only potential billable events in this scope: vendor work (per-event approval) and any agreed extras |
| Access-event overage price basis | `[x]` pending — no overage expected at 4–6 arrivals/year; basis to be agreed if pattern changes |
| Supplies reimbursement basis | `[x]` owner purchases directly |

---

## 10. Report outputs

| Field | Value |
|---|---|
| Visit report recipients | owner email (FICTIONAL) |
| Issue report recipients | owner email |
| Decision request recipients | owner email + WhatsApp alert |
| Completed-action summary recipients | owner email |
| Report language | `[x]` Polish |
| Report delivery target after visit | `[x]` within 24h (delivery target, not guaranteed resolution — read to owner) |
| Evidence photo delivery method | `[x]` linked from archive |
| Archive location reference | SEN-ARCH-TEST-001 (structured encrypted cloud — FICTIONAL ref) |
| Retention schedule reference | DAT-04 — pending **[LAWYER REVIEW REQUIRED]** |

### 10a. Filled Scope Register storage

| Field | Value |
|---|---|
| Filled Scope Register archive location reference | SEN-ARCH-TEST-001 / register subfolder |
| Access allowed to | `[x]` Owner · `[x]` Sentinel operator |
| Retention reference | DAT-04 **[LAWYER REVIEW REQUIRED]** |

---

## 11. Photo / privacy boundaries

Static rule section — nothing to fill. Read to owner; owner satisfied (question #5: locked wardrobe
will not be opened or photographed; sensitive items reported, not photographed). Rule held.

## 12. Exclusions master

Static section — nothing to fill. Owner read the concierge/rental/insurance exclusions without
objection. "Unlisted = not included" restated verbally against the vendor-access pending state.

## 13. Review and change control

| Field | Value |
|---|---|
| Scope confirmed date | pending first visit (completion pass) |
| Next review date | after first physical visit |
| Owner signature | placeholder — **not signed; draft, not approved for signature** |
| Sentinel approval | pending — GOV-03: Owner-only approval; test fill is never promoted |

## 14. Collapse ledger

Static section — nothing to fill. Confirmed present and unmodified.

---

## FILL VERDICT

**Verdict: `fill-ready`** — with one content gap that must be closed by the Owner/lawyer, not by more
form drafting. The v0.3 semantic patch worked in practice: zero forced fake answers, 3 true blanks (all
legitimately blocked on professional review or template-level), every dispute-bearing field ended in a
named state, and the "partially filled — first visit pending" exit is exactly how a real onboarding
would end.

### Top 5 issues found

1. **T1 — Extended autonomous limit undefined (content gap, biggest dispute risk).** The form's
   authority fields assume Full (EUR 300 / opt. 500). For Extended/Basic the operator has nothing to
   point to, and two §9 fields cascade into `pending owner decision` because of it. Needs Owner +
   lawyer resolution (ties to Decision Memo §4 "lower packages: documented protective attempt within
   authority" — which is a doctrine, not a number). **Not fixable by the form itself.**
2. **T2 — Template/instance confusion.** Revision log and template-governance rows sit inside a
   per-property fill and collect nothing. A future v0.4 could separate "template header" from
   "property fill" — cosmetic, not blocking.
3. **T3 — "Access event" has no plain meaning.** Modules got one-line definitions in v0.3; the
   access-event unit (which drives the Extended allowance) did not. Owner question #1 proves it's
   needed — one line in-form or in the operator crib sheet.
4. **T4 — Language mismatch.** Record language is Polish; the form is English-structured. Workable for
   an internal fill with a bilingual operator; **must** be resolved (PL field labels or PL version)
   before any owner-visible fill. Already a deferred Owner decision — confirmed real by this test.
5. **T5 — Supplies run-out has no capture row.** "Owner provides + stored on property" leaves the
   mid-readiness shortage case as an informal verbal agreement. One small state row (report-and-wait /
   operator may purchase up to X with receipt) would close it — the "X" is the same de-minimis
   threshold already awaiting **[ACCOUNTANT REVIEW REQUIRED]**.

### Proceed to Visit Report + Decision Request templates?

**Yes.** REC-01/REC-03 are pathway-agnostic delivered-record templates; none of the five issues above
block them. T1 must be resolved before the *Decision Request* template carries a real authority-basis
value for non-Full packages — but the template structure itself can be drafted now with the authority
basis as a referenced field.

### Must Scenario C (guest-use, owner-selected cleaner) be tested before report templates?

**No — but it must be tested before the first guest-use customer.** Scenario C exercises §4a, §7
owner-selected-cleaner rows, and §8 code-sharing — none of which shape the report templates (reports
are pathway-agnostic by doctrine §10). Recommended order: draft REC-01/REC-03 next; run Scenario C
when the guest-use path first becomes real, or earlier if the Owner wants the code-sharing +
cleaner-acceptance rows validated while the Council findings are fresh.

---

## Validation

- Test data: entirely fictional; no real PII, addresses, codes, or property details.
- No template modified: `01-SCOPE-REGISTER-DRAFT.md` untouched by this fill; all flags
  (**[LAWYER REVIEW REQUIRED]** / **[ACCOUNTANT REVIEW REQUIRED]** / provisional states) preserved,
  none converted to final wording.
- Package meaning untouched: Extended chosen and kept; the T1 gap is reported, not silently patched;
  no pricing or estimator values invented.
- Rules preserved: package ≠ authority ≠ liability · SLA = timing not resolution · cleaning inside
  oversight · mixed = starting scope (n/a here) · no concierge/rental/management drift · no codes
  recorded.

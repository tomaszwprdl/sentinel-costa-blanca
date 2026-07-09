---
title: Scope Register — Field Audit
status: internal-approved
customer_facing: false
lawyer_review_required: false
owner_review_required: true
pathway: all
version: 0.1
---

# 01 — SCOPE REGISTER FIELD AUDIT

Stress-test of [01-SCOPE-REGISTER-DRAFT.md](01-SCOPE-REGISTER-DRAFT.md) as a real onboarding form for the
first Sentinel property. **Audit only — the Scope Register is not rewritten here.** Patch list in §6 is
proposed, not applied.

Flag legend: **[LAWYER REVIEW REQUIRED]** · **[ACCOUNTANT REVIEW REQUIRED]** · **[OPERATIONAL TEST REQUIRED]**.

---

## 1. Overall verdict

| Question | Verdict |
|---|---|
| Good enough as v0.1? | **Yes.** Structure is sound: identity, property, pathway, package, modules, cleaning, keys, authority, reports, privacy, exclusions, change control are all present and correctly framed. |
| Safe as internal draft? | **Yes.** Correctly labelled draft-only / not-for-signature; legal-sensitive sections (§8, §9, §13 signature) are held as summary + `[LAWYER REVIEW REQUIRED]`. No binding wording leaked. |
| Field-complete enough to simulate a real first property? | **Not yet.** It captures *what was bought* but under-captures *how the property is physically operated day-to-day.* ~20 operational fields are missing (§2). The gaps are concentrated in access-code handling, supplies/consumables responsibility, exterior scope, guest-calendar source, notice rules, and approval method — exactly the areas that generate disputes. |

Bottom line: **patch once, then it is simulation-ready.** No new documents needed first.

---

## 2. Missing fields

Grouped by where they belong in the existing form. "Add" = genuinely missing; "field split" = the form has
a note but not a captured field.

| # | Missing field | Target § | Why it matters | Flag |
|---|---|---|---|---|
| 1 | Restricted rooms / private owner zones (locked cupboards, safes, personal storage, do-not-enter rooms) | §3 or new §3b | Privacy + dispute prevention; defines where oversight/cleaning does **not** go | [LAWYER REVIEW REQUIRED] (light — liability boundary) |
| 2 | Owner items not to touch / not to move | §3b / §11 | Ties to photo rules and cleaning; prevents "you moved/lost my X" | — |
| 3 | Guest calendar / stay-date source (how Sentinel receives arrival/departure dates) | §4 | Without it, turnover readiness is chaos for Active Guest Use | [OPERATIONAL TEST REQUIRED] |
| 4 | Minimum notice rules (readiness, cleaning, guest turnover, vendor access) | §5 or §6 per module | Stops impossible same-hour requests; protects the SLA meaning | [OPERATIONAL TEST REQUIRED] |
| 5 | Cleaning supplies / equipment / consumables responsibility (products, mop, vacuum, bags, gloves, UV device, replacement supplies) | §7 | First real operational friction point; who buys/stores/replaces | [OPERATIONAL TEST REQUIRED] |
| 6 | Waste / rubbish / community disposal rules (community bins, recycling areas, collection days, building rules) | §3 or §7 | Spain community-specific; silent scope creep otherwise | — |
| 7 | Linen stock / replacement threshold (par level, who replaces) | §6 (linen row) | Linen module currently has no stock logic | [OPERATIONAL TEST REQUIRED] |
| 8 | Pool / garden / terrace / exterior scope | §3 / §6 | Villas/larger properties silently expand "property check" without this | [OPERATIONAL TEST REQUIRED] |
| 9 | Smart lock / alarm **code state** (code known / stored / may be shared / changed by owner) | §8 | Alarm notes exist as free text; needs discrete states for security + custody | [LAWYER REVIEW REQUIRED] (security/liability) |
| 10 | Code-sharing rules for cleaner / vendor | §8 | Directly affects access liability and GDPR of access credentials | [LAWYER REVIEW REQUIRED] |
| 11 | Report delivery target after visit (same day / 24h / next business day) | §10 | Operational expectation, **not** SLA resolution; owners abroad need it | — |
| 12 | Owner approval method (email only / WhatsApp valid / voice-then-written) | §9 | Decides what counts as a valid €300 authorisation | [LAWYER REVIEW REQUIRED] |
| 13 | Voice approval → written confirmation rule | §9 | Emergency reality; needs an evidence trail | [LAWYER REVIEW REQUIRED] |
| 14 | Valuables / inventory flag (required? yes/no) | §11 or §3b | Audit + FAQ already treat valuables as conditional-but-real | — |
| 15 | Utility provider / community admin contacts | §3 | Needed for shut-off, leaks, community escalation | — |
| 16 | Insurance contact / claim contact | §3 / §9 | Liability separation: owner's insurer is the claim path, not Sentinel | [LAWYER REVIEW REQUIRED] (light) |
| 17 | Neighbour / building contact | §3 | Access failure, emergency escalation, key backup | — |
| 18 | Parking / lift / building restrictions | §3 | Access logistics for operator, cleaner, vendor | — |
| 19 | Pet presence / plant watering / perishable food handling | §6 or §3b | FAQ: pets occasional-by-agreement only; plants/food are scope-creep traps | — |
| 20 | Internet / router location (**only if safe to record**) | §3 | Useful operationally, but a credential-security risk — record location, never passwords | [LAWYER REVIEW REQUIRED] (light) |
| 21 | Keys that must never leave the property | §8 | Some keys (internal, garage) stay on-site; custody register needs the flag | — |
| 22 | Supplies reimbursement rule | §7 / §13 | Who pays for consumables Sentinel buys; billing clarity | [ACCOUNTANT REVIEW REQUIRED] |
| 23 | Emergency spend receipt rule | §9 / §13 | €300/€500 actions need a receipt/evidence standard for billing | [ACCOUNTANT REVIEW REQUIRED] |

**Priority subset (block a clean simulation):** 1, 3, 4, 5, 8, 9, 10, 11, 12. The rest are real but can be
"n/a" for a simple apartment.

---

## 3. Overreach check

Scanning for drift into concierge / rental management / cleaning-company / property-management / unlimited
liability / guaranteed resolution / vendor-performance guarantee / legal-tax advice.

| Location | Finding | Severity |
|---|---|---|
| §5 core warning | Correctly states package ≠ authority ≠ liability, SLA ≠ resolution. **No drift.** | OK |
| §6 vendor row | Already says "Vendor performance **not guaranteed**." **No drift.** | OK |
| §7 UV wording | Hard-bounded ("not sanitation proof… not lab evidence"). **No drift.** | OK |
| §7 cleaning framing | "inside oversight — not as a cleaning company." Correct. **No drift.** | OK |
| §12 exclusions | Explicitly excludes concierge, rental mgmt, guest comms/bookings/pricing, legal/tax, insurance replacement, vendor guarantee, hidden-defect diagnosis. **Strong.** | OK |
| Missing field #3 (guest calendar) | **Risk when added:** capturing arrival/departure dates could *look* like booking management. Must be framed as "readiness trigger source," never "we manage the calendar/reservations." | Watch — framing rule for the patch |
| Missing field #19 (pets/plants/food) | **Risk when added:** could drift into concierge/lifestyle. Must stay "occasional-by-agreement, documented," per FAQ. | Watch — framing rule for the patch |
| Missing field #6 (waste) | **Risk when added:** recurring waste handling could read as janitorial/cleaning-company. Frame as "community disposal rules the operator follows," not a service promise. | Watch — framing rule for the patch |

**Verdict:** the current form has **no active overreach.** The only risks are in *how the new fields in §2
are worded* — noted as framing rules so the patch does not introduce drift.

---

## 4. Too-much-detail check

Fields that must **not** migrate into the Scope Register; they belong in downstream documents. The Scope
Register records *whether/at-what-level*, not *how-executed*.

| Tempting detail | Belongs in | Keep in Scope Register as |
|---|---|---|
| Room-by-room cleaning task lists, product dosages, surface methods | Cleaning Checklist (CLN-02) | Only: cleaning type + evidence + exclusions |
| Per-item inspection points (water/electric/boiler states) | Visit Checklist (INS-03/04) | Only: which modules/areas are in scope |
| Full key inventory, movement history, custody chain entries | Key Custody Register (AKC-02/04) | Only: key count/labels, receiver, custodian, return flag |
| Emergency step sequences, escalation cadences, contact scripts | Emergency SOP (EMG-01/02) | Only: authority limit + thresholds + doctrine reference |
| Report layout, section order, evidence numbering format | Report templates (REC-01…04) | Only: recipients, language, delivery method, target |
| Liability clauses, withdrawal terms, indemnities, signatures | MSA / annexes (LEG-*) — [LAWYER REVIEW REQUIRED] | Only: summary fields + `[LAWYER REVIEW REQUIRED]` markers |
| Full valuables inventory contents | Valuables/inventory register (conditional) | Only: "inventory required? yes/no" flag (field #14) |

**Verdict:** the draft is already disciplined here (§8 and §9 are summary-only with lawyer flags). The one
caution: when adding the §2 fields, keep them as **flags/selectors**, not execution detail — e.g. code
handling is a *state selector* (#9), not the actual codes; supplies is a *responsibility selector* (#5),
not a shopping list.

---

## 5. First-property simulation

Can the current v0.1 be filled without confusion? What breaks?

### A. Empty apartment, private owner absent 3 months (Private Absence)

| | |
|---|---|
| Fillable now? | **Mostly yes.** Identity, property, pathway=Private Absence, package, keyholding + readiness modules, authority, reports all fillable. |
| Missing fields that bite | Restricted zones (#1), utility/community/neighbour contacts (#15,#17), report delivery target (#11), approval method (#12), keys-never-leave (#21). |
| Dispute risk | "You entered a room I consider private" (#1); "who did I call in an emergency" (#15,#17); "when should I have gotten the report" (#11). |
| Verdict | Simulatable with placeholders, but #1, #11, #12, #15 should be added before a real fill. |

### B. Apartment with occasional owner arrivals + readiness cleaning (Private / Mixed)

| | |
|---|---|
| Fillable now? | **Partly.** Package + readiness cleaning + pre-arrival logic fillable; cleaning block §7 present. |
| Missing fields that bite | Minimum notice for readiness/cleaning (#4), cleaning supplies/consumables (#5), perishable food/plants (#19), report target (#11), supplies reimbursement (#22). |
| Dispute risk | "I asked for readiness with 2 hours notice and it wasn't ready" (#4); "who was supposed to buy cleaning products / who paid" (#5,#22); "the milk I left went off" (#19). |
| Verdict | **#4 and #5 are must-adds** — this scenario fails cleanly without them. |

### C. Guest-use apartment, turnover cleaning, owner-selected cleaner (Active Guest Use)

| | |
|---|---|
| Fillable now? | **Weakest.** Pathway + turnover module + owner-selected-cleaner rule (§7) fillable; but the operating loop is under-specified. |
| Missing fields that bite | Guest calendar / stay-date source (#3), minimum turnover notice (#4), linen stock/threshold (#7), code-sharing with owner's cleaner (#10), exterior/pool if villa (#8), waste rules (#6). |
| Dispute risk | "The flat wasn't ready for the next guest" — root cause is no calendar source (#3) + no notice rule (#4). "Your operator gave my cleaner the alarm code" / "the code leaked" (#10). "Who restocks linen" (#7). |
| Verdict | **#3, #4, #7, #10 are must-adds** for guest use. Owner-selected cleaner + no code-sharing rule is a real liability gap. Also confirm framing rule so the calendar field is not booking management (§3 overreach note). |

**Cross-scenario conclusion:** the three must-add clusters are **notice rules (#4)**, **supplies/consumables
responsibility (#5)**, and the **guest-calendar + code-sharing pair (#3, #10)**. These are the difference
between a theoretical form and one that survives a real onboarding.

---

## 6. Recommended patch list

Exact section-level edits to `01-SCOPE-REGISTER-DRAFT.md`. **Do not apply yet.** Grouped by section; each
notes the framing constraint where drift is a risk.

| Target § | Patch | Fields to add | Flags |
|---|---|---|---|
| §3 Property identity | Add "Access & logistics" rows | Parking/lift/building restrictions (#18); utility provider + community admin contacts (#15); neighbour/building contact (#17); insurance/claim contact (#16); router **location only** (#20); waste/recycling/collection rules (#6) | #16,#20 [LAWYER REVIEW REQUIRED] light |
| New §3b Restricted zones & untouchables | Add a small block | Restricted rooms / private zones (#1); owner items not to touch/move (#2); valuables inventory required? y/n (#14) | #1 [LAWYER REVIEW REQUIRED] light |
| §4 Usage pathway | Add guest-operating rows (Active Guest Use / Mixed only) | Guest calendar / stay-date **source** (#3) — frame as "readiness trigger source, not reservation management" | #3 [OPERATIONAL TEST REQUIRED] |
| §5 Package | Add one row | Minimum-notice defaults per action type (#4) | #4 [OPERATIONAL TEST REQUIRED] |
| §6 Modules | Extend rows | Per-module minimum notice (#4); linen stock/par + replacement threshold (#7); pool/garden/terrace/exterior scope (#8); pets/plants/perishable food handling (#19, occasional-by-agreement framing) | #7,#8 [OPERATIONAL TEST REQUIRED] |
| §7 Cleaning block | Add responsibility rows | Supplies/equipment/consumables responsibility — **selector, not list** (#5); supplies reimbursement rule (#22) | #5 [OPERATIONAL TEST REQUIRED]; #22 [ACCOUNTANT REVIEW REQUIRED] |
| §8 Key custody summary | Convert alarm free-text into discrete states | Code state: known/stored/shareable/changed-by-owner (#9); code-sharing rule for cleaner/vendor (#10); keys-that-never-leave flag (#21) | #9,#10 [LAWYER REVIEW REQUIRED] |
| §9 Authority | Add approval-mechanics rows | Owner approval method (#12); voice-then-written confirmation rule (#13); emergency-spend receipt rule (#23) | #12,#13 [LAWYER REVIEW REQUIRED]; #23 [ACCOUNTANT REVIEW REQUIRED] |
| §10 Report outputs | Add one row | Report delivery **target** after visit — same day / 24h / next business day; label "delivery target, not guaranteed resolution" (#11) | — |

**Patch discipline (carry into the rewrite):**
- Every new field is a **flag / selector / contact**, never execution detail (keep §4 too-much-detail line).
- Framing guards on #3 (not booking management), #6 (not janitorial promise), #19 (not concierge).
- Keep §8/§9 as **summary + `[LAWYER REVIEW REQUIRED]`**; adding discrete states does not mean drafting the
  annex.
- Re-state the §5 core warning unchanged; none of these patches touch package/pricing/SLA meaning.

**After the patch:** the form should pass all three simulations with only true "n/a"s remaining. Then the
next documents are **Visit Report + Decision Request templates** (REC-01, REC-03) — the first artifacts that
make Sentinel feel operational rather than theoretical.

---

## Validation

- `git diff --check`: clean (report below).
- Files created: **one** — `doc/customer-docs/01-SCOPE-REGISTER-FIELD-AUDIT.md`. No file rewritten; the
  Scope Register was **not** modified.
- No app code, CSS, messages, estimator, contact schema/API, routes, legal/noindex, pricing, package
  logic, assets, or shipped pages touched. Docs-only.
- Not committed.

## Rules preserved

- Package responsibility ≠ emergency authority ≠ liability; SLA = response/decision timing, not guaranteed
  resolution.
- Cleaning and keyholding stay scoped capabilities inside oversight; vendor performance not guaranteed.
- Mixed / undetermined use is a starting scope to confirm, never a "wrong package" or lock-in.
- Legal-review documents remain outline-only until data governance, owner non-response, withdrawal, and
  liability are resolved; this audit adds no binding wording.

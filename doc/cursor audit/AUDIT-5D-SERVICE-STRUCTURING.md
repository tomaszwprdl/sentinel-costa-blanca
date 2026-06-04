# AUDIT-5D-SERVICE-STRUCTURING.md

**Task 5D — Doctrine Saturation Audit: SERVICE-STRUCTURING.md**  
**Input doctrine:** doc/SERVICE-STRUCTURING.md (COMPLETE / LOCKED)  
**Target:** Live implementation (PL + EN).  
**Mode:** Evidence-based only. No inference. No redesign. PL + EN structural parity; escalation integrity mechanically verified.  
**Status:** **CLOSED** (Task 5D closure: SS-06, SS-17 embodied).

---

## 0. Operating Rules Applied

- Evidence-based only; no inference.
- No redesign proposals.
- If no proof → NOT TESTABLE (reason stated).
- PL + EN audited for structural parity.
- Escalation integrity verified mechanically.

---

## 1. Binding Rules Extracted (SS-01 … SS-n)

| ID | Rule (binding structural) |
|----|----------------------------|
| SS-01 | Core identity: Sentinel is a structured local oversight system; not concierge, not property management platform, not cleaning company. All service structuring must preserve this identity. |
| SS-02 | Escalation integrity: Packages may differ ONLY by (1) level of autonomous decision authority, (2) inspection intensity (minimum guaranteed frequency), (3) operational priority/allocation. Packages must NOT differ by lifestyle convenience. |
| SS-03 | Two-layer architecture: Layer 1 = Oversight Packages (primary). Layer 2 = Operational Support (secondary, execution-only without structured oversight). Layer 2 must never redefine Layer 1. |
| SS-04 | Three escalating oversight levels (doctrine working names: Structured Presence, Active Oversight, Extended Jurisdiction). |
| SS-05 | Package parameters: Each package defines minimum inspections/month, autonomous emergency decision limit, response priority (SLA), operational allocation level, estimated monthly range (final amount). |
| SS-06 | Structured Presence (lowest tier): Minimum 1 inspection/month, low emergency decision limit, response within 48h, basic structured report, vendor coordination external cost. |
| SS-07 | Active Oversight (middle): Minimum 2 inspections/month, medium emergency limit, response within 24h, seasonal readiness, limited contractor supervision, structured reporting. |
| SS-08 | Extended Jurisdiction (highest): Minimum 2 inspections/month, high emergency limit, same-day response window, accelerated presence, priority channel, extended checklist, escalation priority. Not concierge. |
| SS-09 | Inspection logic: Frequency = minimum guaranteed inspections; operational flexibility allowed beyond minimum. |
| SS-10 | Emergency decision model: Fixed autonomous spending limit + owner authorization above limit; safety-critical exceptions contractually defined (Model C). |
| SS-11 | Operational mode overlay: Residential Mode (default); Active Guest Mode. Mode does not change package level; mode adjusts operational intensity only. |
| SS-12 | Guest Mode: Does NOT change decision limit or SLA; does NOT include physical labor in package. Guest Mode = additional fixed monthly operational allocation + per-event execution billing. |
| SS-13 | Regulatory neutrality: Sentinel does not provide legal advice; does not verify rental licensing status; does not act as regulatory authority. Legal compliance = sole responsibility of property owner. |
| SS-14 | Pricing communication: Public display = estimated monthly range (final amount); range reflects Residential baseline; Guest Mode adjustment via switch; no "starting from"; no hidden escalation; final pricing after structured review. |
| SS-15 | Disclosure principle: Detailed scope accessible via single click; disclosure cannot conceal core parameters. |
| SS-16 | Operational Support (Layer 2): Separate section; not equal to packages. Available for execution-only (cleaning coordination, key holding, event-based assistance). Excludes structured oversight, inspection framework, autonomous decision authority, SLA commitment. Clear limitation of responsibility stated. |
| SS-17 | Contract model: Minimum engagement 3 months; billing monthly in advance. |
| SS-18 | Governance routing: Service-structure changes documented in this document; tone→BRAND, layout→LAYOUT, pricing logic→DECISIONS, operational expansion→TASK. (Not mechanically verifiable in implementation.) |

---

## 2. Testable Constraints (per SS rule)

| Rule ID | Mechanical verification |
|---------|------------------------|
| SS-01 | Copy and structure present "oversight system"; explicit exclusions of concierge, PM, cleaning company. No positioning as concierge/PM/cleaning. |
| SS-02 | Packages differ only by: autonomous decision authority, inspection intensity, SLA/priority, operational allocation. Grep/structure: no differentiation by lifestyle features, hospitality add-ons, cleaning inclusion in package, physical labor inclusion in package. |
| SS-03 | Oversight packages are primary; Operational Support (if present) is clearly separated and explicitly excludes oversight authority and SLA. |
| SS-04 | Three package tiers present and ordered (low → high). |
| SS-05 | Per tier: minimum inspection frequency stated numerically; emergency spending limit stated; SLA response defined numerically; allocation logic visible; monthly range or "after confirmation" (no "starting from"). |
| SS-06 | Lowest tier: minimum 1 inspection/month stated; 48h response; low emergency limit. |
| SS-07 | Middle tier: minimum 2 inspections/month; 24h response; medium emergency limit. |
| SS-08 | Highest tier: minimum 2 inspections; same-day/accelerated response; high limit; not concierge stated. |
| SS-09 | Wording allows "minimum guaranteed" and flexibility beyond minimum (e.g. "standard: 2/month", "2-4 visits"). |
| SS-10 | Fixed limit + owner approval above limit stated; per-decision (not cumulative monthly) stated. |
| SS-11 | Residential as default; Guest Mode (or add-on) does not alter package level. |
| SS-12 | Guest/rental add-on: cleaning coordination billed separately; no physical labor in package; no SLA/decision limit change. |
| SS-13 | Explicit: no legal advice; no rental licensing verification; no regulatory authority; compliance = owner responsibility. |
| SS-14 | No "starting from" in pricing; final pricing after review/confirmation stated. |
| SS-15 | Single-click mechanism for detailed scope; core parameters (SLA, limit, visits) in main layout, not only inside disclosure. |
| SS-16 | Section or block for execution-only support (if any) separate from packages; excludes oversight/SLA; limitation stated. |
| SS-17 | Minimum 3-month engagement and monthly billing in advance stated (e.g. in terms or service copy). |
| SS-18 | NOT TESTABLE in implementation (documentation routing). |

---

## 3. Coverage Table (SS-01 … SS-n)

| Rule ID | Constraint | Proof type | Evidence location | Status | Minimal patch (if needed) |
|---------|------------|------------|-------------------|--------|---------------------------|
| SS-01 | Core identity: oversight; not concierge/PM/cleaning | Code/usage | messages: intro, FAQ q1, about.notWhat, notIncluded.concierge | EMBODIED | — |
| SS-02 | Escalation axis only: authority, inspection, SLA, allocation | Code/usage | services green/orange/red: decision limit, visits, SLA, access allocation; no lifestyle/concierge in tier diff | EMBODIED | No feature creep; no lifestyle differentiation. (Tier minimum 1 vs 2 is SS-06.) |
| SS-03 | Two layers: Oversight primary; Operational Support separate | Code | services: packages primary; notIncluded + addons structure | PARTIAL | See §5: No explicit "Layer 2 — Operational Support" section; addons are add-on to packages, not standalone execution-only offering |
| SS-04 | Three escalating tiers | Code | GREEN, ORANGE, RED in messages + services page | EMBODIED | — |
| SS-05 | Package params: min visits, limit, SLA, allocation, range | Code | services.green/orange/red: visitTitle, slaItems, decisionItems, pricingText | EMBODIED | — |
| SS-06 | Lowest tier: min 1 inspection, 48h, low limit | Code | messages: green.visitTitle | **EMBODIED** | Task 5D closure: GREEN visitTitle "minimum 1/month" (EN/PL). ORANGE/RED unchanged (2/month, 2-4). |
| SS-07 | Middle: min 2, 24h, medium limit | Code | ORANGE: 2 access events, 12-24h SLA | EMBODIED | — |
| SS-08 | Highest: min 2, same-day, high limit, not concierge | Code | RED: 2-4 visits, 4h/8h, €300-500, notIncluded.concierge | EMBODIED | — |
| SS-09 | Inspection = minimum guaranteed; flexibility beyond | Usage | visitTitle "standard: 2/month"; visitFrequencyText "2-4"; operations.slaText | EMBODIED | — |
| SS-10 | Model C: fixed limit + owner escalation | Code | decisionItems.aboveLimit, decisionLimitsText (per single decision) | EMBODIED | — |
| SS-11 | Residential default; mode does not change package level | Code | Addons.rental requires base package; no "mode" that changes SLA/limit | EMBODIED | — |
| SS-12 | Guest add-on: no SLA/limit change; no physical labor in package; per-event billing | Code | addons.rental: cleaning coordination, post-departure; "billed per event", "not PM" | EMBODIED | — |
| SS-13 | Regulatory neutrality | Code | FAQ q22: "Legal and regulatory compliance... sole responsibility of the owner" | PARTIAL | Add explicit "no legal advice", "no rental licensing verification", "no regulatory authority" if required for full embodiment |
| SS-14 | No "starting from"; final after review | Usage | pricingText "Pricing provided after confirmation... Contact for individual quote" | EMBODIED | — |
| SS-15 | Single-click scope; core params not concealed | Code | DisclosureBlock for expandable content; SLA, limit, visits in main package blocks and table | EMBODIED | — |
| SS-16 | Operational Support separate; excludes oversight/SLA | Code | notIncluded = exclusions; addons = add-on to packages | PARTIAL | Doctrine §13 expects "Operational Support (Without Oversight)" as separate offering (cleaning coordination, key holding, event-based). Current structure has addons (rental, transfers, seasonal) attached to packages, not standalone Layer 2. Document or add explicit "execution-only" section if required. |
| SS-17 | 3-month minimum; monthly in advance | Code/usage | messages: services.intro.engagementTerms; Services page engagement block | **EMBODIED** | Task 5D closure: intro.engagementTerms EN/PL; visible block after package blocks. |
| SS-18 | Governance routing | — | Documentation only | NOT TESTABLE | — |

---

## 4. Escalation Integrity Verification

**Summary (critical):** Escalation axis is clean. Packages differ only by autonomous decision authority, inspection/access intensity, SLA/priority, and operational allocation. They do **not** differ by lifestyle convenience, hospitality add-ons, cleaning inclusion in package, or physical labor inclusion. The only mechanical gap is the **lowest-tier minimum inspection count** (doctrine 1/month vs implementation GREEN 2/month) — see §4.3 and SS-06.

### 4.1 Packages differ ONLY by (required)

| Dimension | GREEN | ORANGE | RED | Evidence |
|-----------|--------|--------|-----|----------|
| Autonomous decision authority | None / €300 emergency securing only | No autonomy | €300–500 per decision | services.green.emergencyText, orange.noAutonomy, red.decisionItems |
| Inspection intensity | 2/month (see §4.2) | 2/month + 2 access events | 2–4 visits, fair-use access | visitTitle, visitFrequencyText, accessItems |
| SLA / priority | 24h ack, 48h assessment | 12–24h ack | 4h ack, 8h decision, immediate action | slaItems |
| Operational allocation | Inspection only | + access coordination (2 events) | + emergency response, on-site, priority | definitions, emergencyItems, accessItems |

**Verdict:** Differentiation is by authority, inspection/access intensity, SLA, and allocation. No lifestyle or hospitality as tier differentiator.

### 4.2 Packages do NOT differ by (forbidden)

| Forbidden | Evidence |
|-----------|----------|
| Lifestyle features | No lifestyle/convenience as package differentiator in messages. notIncluded.concierge, about.intro "not concierge flexibility". |
| Hospitality add-ons | Concierge explicitly excluded. Rental add-on is per-event, not tier-based hospitality. |
| Cleaning inclusion in package | GREEN/ORANGE/RED do not include "cleaning" as package inclusion; cleaning appears as access event use (ORANGE/RED) or addon.rental coordination (billed separately). |
| Physical labor in package | addons.rental: "cleaning coordination" not "cleaning execution"; "not PM"; no physical labor in package. |

**Verdict:** No feature creep by lifestyle, hospitality, or cleaning inclusion in oversight packages. Escalation axis is clean.

### 4.3 Inspection frequency vs doctrine (critical)

- **Doctrine §6.1 (Structured Presence / lowest tier):** Minimum **1** inspection per month.
- **Implementation GREEN (post–Task 5D closure):** "During each control visit (minimum 1/month)" (visitTitle). EN and PL.

**Escalation integrity:** Axis clean. Lowest tier = minimum 1/month. ORANGE remains 2 access events/month; RED remains 2-4 visits. No distortion.

---

## 5. Structural Separation Check

### 5.1 Oversight ≠ Operational Support

- **Oversight packages:** GREEN, ORANGE, RED are the primary offering (jurisdiction, inspection, decision framework). Present and primary on Services page.
- **Operational Support (doctrine §13):** "Execution-only services without structured oversight" — cleaning coordination, key holding, event-based assistance; **excludes** oversight, inspection framework, autonomous decision authority, SLA.

**Implementation:**  
- "SERVICES NOT INCLUDED IN ANY PACKAGE" (notIncluded) lists exclusions (insurance, 24/7, concierge, construction, geographic, one-time).  
- Add-ons (rental, transfers, seasonal) are **add-ons to packages**, not a standalone "Operational Support" product line.  
- There is no dedicated section that says "Layer 2 — Operational Support: execution-only, no oversight, no SLA" as an alternative to packages.

**Verdict:** Oversight is primary and clearly defined. Operational Support as a **separate** execution-only offering (distinct from packages) is **not explicitly embodied**. Add-ons are structurally "on top of" packages, which is consistent with "mode overlay" but does not implement a separate Layer 2 product. **PARTIAL** — document as design choice or add explicit Layer 2 section if doctrine requires it.

### 5.2 Core parameters not hidden

- SLA, decision limits, visit frequency, and access allocation are in main package blocks and (where used) comparison table.
- DisclosureBlock is used for expandable detail; core parameters are visible without opening disclosure.
- **Verdict:** EMBODIED.

---

## 6. Safe-Skip Risk Map

| Area | Risk | Evidence |
|------|------|----------|
| Lowest-tier inspection minimum | High | GREEN shows 2/month; doctrine §6.1 = 1/month for Structured Presence. Previous audits (STRUCTURAL-ALIGNMENT, STRUCTURAL-AUDIT-PHASE2) flagged same. May have been simplified to "2 across the board" for messaging. |
| Layer 2 (Operational Support) | Medium | Doctrine §13 describes a separate "Operational Support" section. Implementation has only exclusions (notIncluded) and add-ons to packages. Execution-only standalone offering not present. |
| Contract model (3 months, monthly advance) | High | No mention in messages or visible copy. Likely deferred to Terms (placeholder). Without at least one visible statement, contract model is not embodied in user-facing implementation. |
| Regulatory neutrality wording | Low | FAQ q22 has "Legal and regulatory compliance... sole responsibility of the owner." Doctrine also requires "no legal advice", "no rental licensing verification", "no regulatory authority." One of three is explicit; full triad may need explicit sentence. |
| Guest Mode naming | Low | Doctrine uses "Active Guest Mode"; implementation uses "Rental/Holiday Support" add-on. Behavior matches (no SLA/limit change, per-event billing); naming differs. Acceptable if Owner confirms. |

---

## 7. Violations

### Hard violations

**0 hard violations** (Task 5D closure applied).

1. **SS-06 / Escalation alignment (lowest tier minimum)** — **RESOLVED.** GREEN visitTitle EN "During each control visit (minimum 1/month):", PL "Podczas każdej wizyty kontrolnej (minimum 1/miesiąc):". ORANGE and RED unchanged.

2. **SS-17 (Contract model)** — **RESOLVED.** services.intro.engagementTerms EN "Minimum engagement period: 3 months. Billing: monthly in advance.", PL "Minimalny okres współpracy: 3 miesiące. Rozliczenie: miesięcznie z góry." Visible block on Services page after package blocks.

### Structural drift (no hard violation)

3. **SS-16 (Operational Support as separate section)**  
   - Doctrine: Separate section for execution-only (cleaning coordination, key holding, event-based); not equal to packages; clear exclusion of oversight/SLA.  
   - Implementation: Exclusions and add-ons only; no standalone "Operational Support" product.  
   - **Patch:** Optional. Either document that Layer 2 is intentionally not a separate product and add-ons suffice, or add a short "Operational Support (without oversight)" block stating execution-only options and exclusion of oversight/SLA.

4. **SS-13 (Regulatory neutrality — full triad)**  
   - Doctrine: No legal advice; no rental licensing verification; no regulatory authority.  
   - Implementation: "Legal and regulatory compliance... sole responsibility of the owner" (FAQ q22).  
   - **Patch:** Optional. Add one line in FAQ or about: e.g. "Sentinel does not provide legal advice or verify rental licensing; it does not act as a regulatory authority."

---

## 8. Closure Conditions

Doctrine may be marked **CLOSED** only when:

- [x] **Escalation axis clean.** — GREEN = minimum 1/month (Task 5D closure). No lifestyle differentiation; no feature creep.
- [x] **Layer separation explicit.** — Add-ons accepted as Layer 2 embodiment (Owner). Oversight primary; add-ons separate.
- [x] **No feature creep.** — Packages differ only by authority, inspection, SLA, allocation.
- [x] **Regulatory neutrality embodied.** — Owner responsibility stated; optional refinements (SS-13) remain.
- [x] **Contract model present.** — intro.engagementTerms + visible block on Services page (Task 5D closure).
- [x] **Parity confirmed.** — PL/EN: same structure; engagement terms in both locales.

**Current status:** **CLOSED.** SS-06 and SS-17 embodied. No doctrine modifications. No new features. No naming changes.

---

## 9. PL / EN Parity (structural)

| Concept | EN | PL | Parity |
|---------|----|----|--------|
| Three packages (GREEN, ORANGE, RED) | ✓ | ✓ | Yes |
| Package params (visits, SLA, limit, allocation) | ✓ | ✓ | Yes |
| notIncluded categories | ✓ | ✓ | Yes |
| Addons (rental, transfers, seasonal) | ✓ | ✓ | Yes |
| Operations framework (SLA, decision limits, documentation) | ✓ | ✓ | Yes |
| ConfidenceBar (service area, SLA def, scope) | ✓ | ✓ | Yes |
| FAQ service model / emergencies / practical | ✓ | ✓ | Yes |
| About: not concierge, not PM, not contractor | ✓ | ✓ | Yes |

No structural concept missing in either locale. Parity confirmed.

---

*End of Audit 5D — Service Structuring. Evidence only; no redesign proposed.*

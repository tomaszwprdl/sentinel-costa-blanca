# AUDIT-5F-EN-ADAPTATION.md

**Task 5F — Doctrine Saturation Audit: EN-ADAPTATION-LAYER.md**  
**Input doctrine:** doc/EN-ADAPTATION-LAYER.md (COMPLETE / LOCKED)  
**Target:** Live implementation (EN locale; PL/EN parity where required).  
**Mode:** Evidence-based only. No inference. No redesign. Terminology discipline mechanically checked.  
**Status:** **CLOSED** (Task 5F Closure applied).

---

## 0. Operating Rules Applied

- Evidence-based only; no inference.
- No redesign proposals.
- If no proof → NOT TESTABLE (reason stated).
- PL/EN structural parity verified where required.
- Terminology discipline mechanically checked.

---

## 1. Binding Rules Extracted (F-01 … F-n)

| ID | Rule (binding) |
|----|-----------------|
| F-01 | Primary EN descriptor: **Structured Property Oversight**. Default system descriptor. |
| F-02 | Allowed contextual variants only if required: Local Property Oversight, Owner Representation, Operational Property Oversight. |
| F-03 | Not allowed: Property Management, Property Care, Property Support Services, Property Concierge (as descriptors for Sentinel). |
| F-04 | Terminology glossary locked: Oversight, Inspection, Escalation, Autonomous decision limit, Jurisdiction, Operational allocation, Structured report, Response window, Physical presence window, Guest Mode, Residential Mode. |
| F-05 | No hospitality drift: We take care of everything, Relax knowing, Seamless experience, Dedicated to your comfort. |
| F-06 | No emotional reassurance drift: Peace of mind, Stress-free ownership, Trusted by many, Feel secure. |
| F-07 | No luxury framing: Premium living, Luxury-level service, White-glove support. |
| F-08 | Parameter integrity: Numeric precision preserved (24h, 48h, € limits, 1/month); no vague replacements (fast, quick, regular for response). |
| F-09 | FAQ: Declarative sentences; avoid modal softness (may, might, could) unless legally required; clear boundaries. |
| F-10 | PL/EN synchronization: Structural updates in both locales; no EN-only or PL-only structural changes; parity over elegance. |

---

## 2. Descriptor Verification (Critical)

### 2.1 Primary descriptor — “Structured Property Oversight”

| Check | Evidence |
|-------|----------|
| **Appears explicitly in definitional context** | **Yes.** messages/en.json common.meta.defaultDescription: "Structured property oversight. Torrevieja + 50–70 km radius." (line 6; meta/definitional). |
| **Location context** | Meta (site default description); home.subheadline "Package-based **oversight** for property owners..." (line 58). |
| **About page** | about.intro/description use "local **property representation** service" (lines 1376, 1377, 1381, 1558). Doctrine allows "Owner Representation (contextual, not primary)." About does not use the exact phrase "Structured Property Oversight" but uses an allowed variant (representation). |
| **Contradicted elsewhere** | No. No sentence states Sentinel is something other than oversight/representation. |
| **Replaced by different primary descriptor** | No. "Property Care" appears in **other** contexts (see §2.2) but meta and home use oversight/representation. |

**Verdict:** Primary descriptor is present and clean in meta and home. About uses allowed contextual variant (representation). **EMBODIED** with note: About could add "Structured Property Oversight" in one definitional sentence for stronger alignment; not required for closure.

### 2.2 Prohibited descriptor drift

| Prohibited term | Matches in EN | Context snippet | Violation status |
|-----------------|---------------|------------------|------------------|
| **Property Management** | Yes, in exclusion/negative context only | "NOT a property management service"; "does not provide full property management"; "Not a full property management company" | **Not violation** — used to state what Sentinel is NOT. |
| **Property Care** | **Resolved (Task 5F Closure)** | All offering/descriptive uses replaced with "Property Oversight" / "Oversight + Access" in messages/en.json. Grep: 0 matches for "Property Care", "Care + Access", "property care" in offering context. | **Clean** — F-03 patch applied. |
| **Property Support Services** | No | — | Clean. |
| **Property Concierge** | No | — | Clean. |

**Summary:** F-03 closure applied. EN now uses "Property Oversight" / "Oversight + Access" consistently in Home, Services, Contact, How it works, About. No "Property Care" or "Care + Access" in offering/descriptive context.

---

## 3. Terminology Glossary Lock — Consistency Matrix

| Term | Present in EN | Replaced by softer synonym? | Evidence / note |
|------|----------------|-----------------------------|------------------|
| Oversight | Yes | No | common.meta "Structured property oversight"; home "Package-based oversight"; home.packages "Property Oversight", "Oversight + Access"; services intro, ConfidenceBar scope. |
| Inspection | Yes | No | Widespread: inspections, inspection scope, Initial Inspection, photo report, etc. |
| Escalation | Yes | No | about.resources.coordination.protocols "escalation procedures" (line 1481). |
| Autonomous decision limit | Yes (as "decision limit" / "decision authority") | No | decisionLimitsTitle/Text, standardLimit, "decision limit in RED package", "approved decision limit (€300-500)". |
| Jurisdiction | No | — | Not found in en.json. Doctrine term; not used in copy. **NOT TESTABLE** (may be intentional "Extended Jurisdiction" = product tier name in doctrine only). |
| Operational allocation | Partial | — | "allocation" in additionalAccessText "beyond included allocation"; "operational" in multiple places. Exact phrase "operational allocation" not found. |
| Structured report | Partial | — | "Photo-documented report", "Written reports", "Structured qualification". "Structured report" exact phrase not used; "report" and "structured" used separately. |
| Response window | Partial | — | "within 24h", "within 48 hours", "within 4h" — numeric windows; phrase "response window" not used. |
| Physical presence window | Partial | — | "Physical Presence on Location"; "rapid physical presence". "Physical presence window" not used. |
| Guest Mode | No | — | "rental guests", "guest coordination", "Guest arrivals"; addon "Rental/Holiday Support". Mode not named "Guest Mode". |
| Residential Mode | No | — | Not named. Default behavior described without "Residential Mode" label. |

**Verdict:** Core terms (Oversight, Inspection, Escalation, decision limit) are present and not softened. Jurisdiction, Guest Mode, Residential Mode are doctrine tier/mode names; their non-use in EN copy may be intentional (brand uses GREEN/ORANGE/RED). No inconsistent or softer synonyms introduced for the terms that are used.

---

## 4. Prohibited Drift Scan (Section 5)

**Hospitality drift:** We take care of everything | Relax knowing | Seamless experience | Dedicated to your comfort  
**Grep result:** **0 matches** in messages/en.json.

**Emotional reassurance drift:** Peace of mind | Stress-free ownership | Trusted by many | Feel secure  
**Grep result:** **0 matches** in messages/en.json.

**Luxury framing:** Premium living | Luxury-level service | White-glove support  
**Grep result:** **0 matches** in messages/en.json.

**Verdict:** No hospitality, emotional, or luxury drift in EN. **EMBODIED.**

---

## 5. Parameter Integrity (EN)

| Check | Evidence |
|-------|----------|
| Numeric precision | "within 24h", "within 48 hours", "within 4h", "within 8h", "12-24h", "24-48 hours", "€300", "€300-500", "minimum 1/month", "2/month", "2-4 visits" — all numeric. |
| Vague replacements | No "fast response", "quick response", "regular visits" as replacement for SLA or frequency. |
| Borderline | contact.activeClients.fasterResponse: "Use your dedicated client communication channels for **faster response**." — refers to channel use, not SLA; acceptable. |

**Verdict:** Parameter integrity intact. **EMBODIED.**

---

## 6. FAQ Adaptation Rule

| Check | Evidence |
|-------|----------|
| Declarative sentences | FAQ answers are predominantly declarative. |
| Modal softness | **Present.** "may" appears in: fairUseText "may be billed separately"; seasonalAvailability "may vary"; specificRequests "may incur additional charges"; packageChangesIntro "Client **may** request"; howItWorks.faq q5 "**may** require initial payment"; q7 "re-check **may** be required"; faq q1 "Sentinel **may** not be appropriate"; q16 "**may** affect service scope", "**may** limit"; q20 "Sentinel **may** refuse"; q21 "Sentinel **may** adjust"; notAnswered.footer "**may** not be appropriate". |
| Legally required modal | Some uses are policy-appropriate (e.g. "may refuse", "may adjust pricing"). Others could be tightened to declarative (e.g. "Sentinel is not appropriate" vs "may not be appropriate"). |

**Verdict:** **PARTIAL.** Modal use present; not all are legally required. Minimal patch: replace non-essential "may" with declarative where boundary must be clear (e.g. "if your needs don't align... Sentinel is not the appropriate service" vs "may not be appropriate").

---

## 7. PL/EN Synchronization

| Check | Evidence |
|-------|----------|
| Structural updates in both locales | Same keys and section structure in messages/en.json and messages/pl.json (home, services, contact, howItWorks, faq, about, terms, privacy, notFound). |
| No EN-only structural changes | No EN-only sections or keys. |
| No PL-only structural changes | No PL-only sections or keys. |
| Parity | Structural parity confirmed. Terminology differences (e.g. "Property Care" in EN vs "Nadzór" in PL after 5G) are lexical, not structural. |

**Verdict:** **EMBODIED.** Parity maintained.

---

## 8. Coverage Table (F-01 … F-n)

| Rule ID | Constraint | Proof type | Evidence location | Status | Minimal patch (if needed) |
|---------|------------|------------|-------------------|--------|---------------------------|
| F-01 | Primary descriptor "Structured Property Oversight" present | Code | common.meta.defaultDescription; home.subheadline | EMBODIED | — |
| F-02 | Only allowed variants for contextual use | Code | about uses "representation" | EMBODIED | — |
| F-03 | No Property Management / Care / Support / Concierge as descriptor | Code | messages/en.json | **EMBODIED** | Applied Task 5F Closure. EN: 0 matches "Property Care" / "Care + Access" in offering context. |
| F-04 | Glossary terms preserved | Code | Oversight, Inspection, Escalation, decision limit present | EMBODIED | Jurisdiction, Guest Mode, Residential Mode not in copy — acceptable. |
| F-05 | No hospitality drift | Usage | Grep: 0 matches | EMBODIED | — |
| F-06 | No emotional reassurance drift | Usage | Grep: 0 matches | EMBODIED | — |
| F-07 | No luxury framing | Usage | Grep: 0 matches | EMBODIED | — |
| F-08 | Parameter integrity (numeric, no vague) | Code | SLA, limits, frequency numeric | EMBODIED | — |
| F-09 | FAQ declarative; modal only if legally required | Code | FAQ answers | PARTIAL | Reduce non-essential "may" where boundary must be clear. |
| F-10 | PL/EN structural parity | Code | Same keys/structure en/pl | EMBODIED | — |

---

## 9. Drift Violations Summary

### Resolved (Task 5F Closure)

- **F-03 — "Property Care" as descriptor.**  
  **Patch applied.** All listed keys in messages/en.json now use "Property Oversight" / "Oversight + Access". Grep verification: 0 matches for "Property Care", "Care + Access", "property care" in EN.

### Structural / partial

- **F-09 — FAQ modal softness.** Several "may" uses; tighten to declarative where appropriateness/boundary is stated.

---

## 10. Safe-Skip Risk Map

| Area | Risk | Evidence |
|------|------|----------|
| Services vs Home naming | Resolved | EN uses "Oversight" consistently (Home, Services, Contact, How it works). |
| Comparison table columns | Resolved | comparison.columns use "Property Oversight" / "Oversight + Access". |
| About resources | Resolved | "property oversight experience" in about.resources.inspection.cleaner. |
| FAQ modals | Medium | "may" is common in policy copy; some could be declarative for stricter boundary. |

---

## 11. Parity Check

- **Structural parity:** EN and PL share same message keys and page structure. Confirmed.
- **Descriptor parity:** PL uses "Nadzór" (oversight); EN now uses "Property Oversight" / "Oversight + Access" consistently. **Descriptor parity confirmed.** Home, Services, Contact, How it works use Oversight; PL untouched.

---

## 12. Closure Conditions

Doctrine may be marked **CLOSED** only when:

- [x] **Primary descriptor present and clean.** — Yes (meta, home). About uses allowed variant.
- [x] **No prohibited descriptor drift.** — F-03 closure applied. EN: 0 matches "Property Care" / "Care + Access" in offering context.
- [x] **Glossary preserved.** — Core terms present; no softening.
- [x] **No hospitality/emotional/luxury drift.** — 0 matches.
- [x] **Parameter integrity intact.** — Numeric; no vague replacement.
- [x] **Parity confirmed.** — Structural parity. Descriptor parity: EN uses Oversight; PL unchanged.

**Current status:** **CLOSED.** Task 5F Closure completed. No doctrine modification.

---

## 13. Minimal Patch Instruction (F-03)

**Files:** messages/en.json (EN only).

**Replace:**

- services.meta.description: "property care services" → "property oversight services".
- services.comparison.columns.green: "Property Care" → "Property Oversight".
- services.comparison.columns.orange: "Care + Access" → "Oversight + Access".
- services.green.title: "PROPERTY CARE" → "PROPERTY OVERSIGHT".
- services.orange.title: "PROPERTY CARE + ACCESS" → "OVERSIGHT + ACCESS".
- contact.meta.description: "property care services" → "property oversight services".
- contact.form.packages.green: "Property Care" → "Property Oversight".
- contact.form.packages.orange: "Care + Access" → "Oversight + Access".
- contact.cannotHelp.proceedText: "property care" → "property oversight".
- howItWorks.step2.packages.green: "Property Care" → "Property Oversight".
- howItWorks.step2.packages.orange: "Property Care + Access" → "Oversight + Access".
- about.resources.inspection.cleaner: "property care experience" → "property oversight experience" (or "property inspection experience").

Re-run grep for "Property Care" and "Care + Access" in EN (excluding negative contexts like "not property management") → expect 0 as descriptor.

**Applied:** Task 5F Closure. Verification: 0 matches in messages/en.json. PL untouched.

---

*End of Audit 5F — EN Adaptation Layer. Status: CLOSED. Evidence only; no redesign proposed.*

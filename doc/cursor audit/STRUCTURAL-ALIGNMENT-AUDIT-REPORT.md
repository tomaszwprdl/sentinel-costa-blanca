# STRUCTURAL ALIGNMENT AUDIT — PL PAGES
**MODE: AUDIT | NO MODIFICATIONS**  
**Evidence:** doc/*.md (mandatory read order), app/[locale]/*/page.tsx, components/HeaderClient.tsx, components/Footer.tsx, messages/pl.json.  
**Date:** Per audit request.

---

## DEVIATIONS TABLE

| Page | Doctrine Reference | Expected | Observed | Severity | Impact | Recommended Correction |
|------|--------------------|----------|----------|----------|--------|------------------------|
| All (Header) | DECISIONS §1 Product Name | Name: Sentinel; no Guardian | HeaderClient.tsx line 21: hardcoded "Guardian Costa Blanca" | High | Identity binding; deprecated name displayed globally | Replace with Sentinel (+ descriptor per DECISIONS §2.1/13) |
| All (Footer) | DECISIONS §1 Product Name | Name: Sentinel; no Guardian | Footer.tsx line 90: copyright "Guardian Costa Blanca" | High | Identity binding; deprecated name in legal closure | Replace with Sentinel |
| Home | DECISIONS §1 | All references Sentinel; no Guardian | pl.json home.solution.title, solution1Text, differentiation.title, faqPreview q1/q4: "Guardian" / "Guardiana" | High | Product name doctrine | Replace copy with Sentinel per DECISIONS §1 |
| Home | LAYOUT §4.1 Hierarchy Invariant | No CTA precedes structural clarity; order: Identity → Mechanism → Scope → Evidence → Action | Hero contains 2 CTAs before ConfidenceBar/Problem/Solution | Med | Primary precedence; CTA before structural clarity | Move or reduce hero CTAs per hierarchy; or document exception |
| Home | COPY §5.1 Prohibited (PL) | No "opieka" (emotional reassurance) | pl.json home.hero.subheadline: "Opieka pakietowa" | Med | Copy discipline | Replace with structural phrasing (e.g. "Usługa pakietowa" or doctrine-aligned wording) |
| Home | COPY §9 CTA Discipline | CTAs neutral, structural; not "Get started today" | pl.json home.finalCta.ctaPrimary: "Rozpocznij"; home.finalCta.headline: "Gotowy zabezpieczyć swoją nieruchomość?" | Med | CTA discipline; persuasion tone | Use allowed patterns (e.g. "Request structured review", "Initiate onboarding"); headline per qualification-over-conversion |
| Home | DECISIONS §23 Package Presentation | Vertical containment; no three-column SaaS layout | Home packages section: grid md:grid-cols-3 (three side-by-side package blocks) | Med | Package presentation doctrine | Present packages as sequential vertical containment blocks |
| Home | DECISIONS §1 | No Guardian in UI/copy | pl.json home.packages.*, credibility, serviceArea, finalCta reference Guardian in meta/copy | High | Product name | Replace with Sentinel |
| Home | Code comment only | N/A (internal) | page.tsx comment "SECTION 6: WHAT MAKES GUARDIAN DIFFERENT" | Low | Consistency; no user impact | Update comment to Sentinel when fixing copy |
| Services | DECISIONS §1 | Name: Sentinel; no Guardian | pl.json services.meta, intro, green/orange/red pricingText, responsibilityText, notIncluded.intro, notIncluded.categories.constructionItems, selection.uncertainText, cta; comparison table content | High | Identity; scope doctrine phrasing | Replace all Guardian with Sentinel; align scope/SLA phrasing to single canonical form |
| Services | DECISIONS §23 Package Presentation | Vertical containment; prohibited: three-column SaaS pricing layout | Full-width comparison table with columns: serviceElement, green, orange, red (horizontal scan) | High | Package presentation doctrine | Replace with vertical sequential containment blocks per §23 |
| Services | SERVICE-STRUCTURING §6.1 | Lowest package (Structured Presence): minimum 1 inspection/month | services comparison rows: visitsPerMonth Green=2, Orange=2, Red=2–4 | Med | Package matrix fidelity | Align Green to 1 inspection/month if Green = Structured Presence; or document mapping and show 1 for lowest tier |
| Services | LAYOUT §11.2, §12.2 | Tablet: no full comparison tables; text width preserved | overflow-x-auto table on Services (horizontal scroll on tablet) | Med | Layout doctrine | Vertical blocks avoid horizontal table on tablet |
| How It Works | DECISIONS §1 | No Guardian in copy | pl.json howItWorks meta, intro, sampleReport.headerBlock, step0/1/2/3/4/5, changes.guardianTermination*, cta, faq, notAnswered: "Guardian" throughout | High | Identity | Replace with Sentinel |
| How It Works | Translation key naming | Key names are internal | Translation key "guardianTerminationTitle" (content says "Guardian") | Low | Consistency when renaming copy | Rename key when replacing copy (e.g. sentinelTerminationTitle) |
| FAQ | DECISIONS §1 | No Guardian in copy | pl.json faq policyNotice, sections.serviceModel, operations, emergencies, practical, communication, meta: "Guardian" in titles, answers, intro, footer | High | Identity | Replace with Sentinel |
| FAQ | i18n parity / QA | All UI strings in locale files; no hardcoded EN on PL | faq/page.tsx: "Sections" (line 161), "No questions match your search." (line 181) hardcoded EN | Med | i18n parity; PL page shows EN strings | Move to common/faq namespace for PL (and EN) |
| About | DECISIONS §1 | No Guardian in copy | pl.json about meta title: "O nas - Guardian Costa Blanca" | High | Identity | Replace with Sentinel |
| About | Code comments only | N/A | Section comments "WHY GUARDIAN EXISTS", "HOW GUARDIAN OPERATES", "WHAT GUARDIAN IS NOT" | Low | Consistency | Update to Sentinel when editing |
| Contact | DECISIONS §1 | No Guardian in copy | pl.json contact meta, intro, directContact, form.acknowledgment, confirmation.nextSteps.step2, activeClients.intro, serviceArea.description, cannotHelp: "Guardian Costa Blanca" | High | Identity | Replace with Sentinel |
| Contact | i18n parity | Success state copy in locale | contact/page.tsx line 133: "Return to Home" hardcoded EN | Low | i18n parity | Use tCommon or contact namespace key |
| Privacy | Legal layer authority | Placeholder explicitly labeled | placeholder.title, placeholder.message, placeholder.status in copy | Low | Documented placeholder; not precedent if labeled | No change until Task 6 / legal copy lock |
| Terms | Legal layer authority | Placeholder explicitly labeled | placeholder.title, placeholder.message, placeholder.status in copy | Low | Documented placeholder; not precedent if labeled | No change until Task 6 / legal copy lock |
| common | DECISIONS §1 | Name: Sentinel | pl.json common.contact.email: "contact@guardiancoastablanca.com"; Footer/Header use "Guardian Costa Blanca" | Med (email operational) / High (brand) | Identity; email may be operational choice | Display name and copyright: Sentinel. Email domain is operational decision (Owner) |
| All (ConfidenceBar) | Scope/SLA phrasing consistency | Same wording for scope principle and SLA everywhere | confidenceBar.serviceArea.text, sla.text, scope.text present; Services comparison.footerNote and operations.slaText similar but not identical wording | Low | Phrasing consistency | Canonicalise one scope sentence and one SLA sentence; reuse keys everywhere |
| All (Geographic) | DECISIONS §5; consistency | Torrevieja + 50–70km; identical wording | Footer "Torrevieja + promień 50-70km"; confidenceBar "50-70km; bez wyjątków"; various "promień 50-70km" / "50-70km" | Low | Minor variance ("promień" vs "promień") | Use single geographic string key for all instances |
| not-found | DECISIONS §1 | No Guardian in UI | app/[locale]/not-found.tsx line 37: "contact Guardian Costa Blanca" | Med | Identity on error state | Replace with Sentinel |
| Home | DECISIONS §13 Level 1 | Full structure: Sentinel + descriptor + line 3 locked | Hero does not display Level 1 (Sentinel / Reprezentacja... / Zajmujemy się...) | Med | Brand communication hierarchy | Add Level 1 block in first-contact hero per DECISIONS §13 |
| Services | Evidence architecture | SLA public; reporting window system-standard | Table shows requestAck, situationAssessment, emergencyAction, servicePriority; reporting window not explicitly "system-standard" in table | Low | Evidence clarity | Confirm reporting-window row or note is system-standard per DECISIONS §6 |

---

## STRUCTURAL MATURITY ASSESSMENT: **4/10**

Doctrine is locked and comprehensive; implementation diverges on identity (Guardian vs Sentinel), package presentation (horizontal table and 3-column overview), and CTA/hierarchy in several places. Structure exists but name and layout doctrine are not yet enforced in code and copy.

---

## IDENTITY ENFORCEMENT SCORE: **2/10**

Product name is deprecated (Guardian) across header, footer, and the majority of PL copy (home, services, contact, howItWorks, faq, about, not-found). Sentinel is not used as the displayed name. Level 1 brand block (DECISIONS §13) is not present in first-contact hero.

---

## RISK AREAS

1. **Identity:** Guardian remains the visible name site-wide; DECISIONS §1 is systematically violated until copy and components are updated to Sentinel.  
2. **Package presentation:** Three-column and horizontal comparison layout conflict with DECISIONS §23; risk of precedent if left as-is.  
3. **Scope/SLA phrasing:** Multiple phrasings for same doctrine (scope principle, SLA definition, geographic boundary); risk of future inconsistency or softening.  
4. **Placeholder legal pages:** Privacy and Terms are labeled placeholders; must not be treated as final before Task 6 / legal lock.  
5. **i18n parity:** Hardcoded EN strings on FAQ and Contact (PL locale) breach PL/EN parity rule.  
6. **CTA and hierarchy:** Hero CTAs and "Rozpocznij" / "Gotowy zabezpieczyć..." conflict with COPY §9 and LAYOUT §4.1.

---

## CRITICAL FIX PRIORITY ORDER (TOP 5)

1. **Replace Guardian with Sentinel** everywhere (Header, Footer, all pl.json namespaces, not-found). Restore DECISIONS §1 and §13 (Level 1 in hero).  
2. **Services page:** Remove horizontal comparison table; implement vertical sequential containment blocks per DECISIONS §23.  
3. **Home packages section:** Change from 3-column grid to vertical containment blocks per DECISIONS §23.  
4. **PL copy discipline:** Remove "Guardian"/"Guardiana"; replace prohibited "opieka" and CTA phrasing ("Rozpocznij", "Gotowy zabezpieczyć...") with COPY §9–allowed and hierarchy-compliant wording.  
5. **i18n parity:** Move FAQ "Sections" and "No questions match your search." and Contact "Return to Home" into locale files; use same keys for PL and EN.

---

## ADDENDUM — AUDIT SCOPE LIMITATIONS & GOVERNANCE CLARIFICATIONS

*Post-audit feedback incorporated. No change to deviation table or scores.*

### Audit Self-Assessment

| Dimension | Score | Note |
|-----------|--------|------|
| Structural rigor | 8/10 | Mechanical compliance well covered |
| Strategic depth | 6/10 | Gaps below |
| Brand enforcement sensitivity | 6/10 | Qualitative layer under-evaluated |

The audit is a **good mechanical audit**. It is **not yet a brand-forensic audit**.

---

### A) Under-Audited: Evidence Architecture Depth

The report checked SLA visibility and reporting-window wording. It did **not** verify:

- Is reporting window phrased as **system invariant** (same across all packages)?
- Is documentation positioned as **operational proof** or as **reassurance**?
- Is evidence treated as **core layer** or **supporting layer**?
- Is “photo documentation” framed as **procedural standard** or as emotional reassurance?

Task 5E binds evidence as a structural layer. The audit treated it mainly as content-row check; **structural positioning** of evidence was a skipped depth layer.

---

### B) Under-Audited: Visual Density & Authority Presence

The audit flagged table layout, 3-column grid, and CTA placement. It did **not** evaluate:

- White space discipline
- Section breathing rhythm (vertical cadence)
- Visual heaviness vs institutional lightness
- Typographic weight distribution
- Whether pages read as **institutional** vs **informational**

LAYOUT-COMPOSITION governs authority weight as well as structural order. This dimension was under-evaluated.

---

### C) Under-Audited: Qualification > Conversion Enforcement

CTA tone was correctly flagged. The audit did **not** verify:

- Is **qualification logic** explicit?
- Is **disqualification** visible early?
- Is “not appropriate client” messaging strong enough?
- Does the system **repel incorrect clients** before CTA?

Sentinel’s core doctrine is **filtration**. That was not deeply audited.

---

### D) Under-Audited: Structural Repetition Pattern

The audit checked consistency of SLA and geographic wording. It did **not** check:

- Are structural blocks repeated in **identical rhythm** across pages?
- Is ConfidenceBar (and other invariants) reused in the same way everywhere?
- Are system invariants **visually recognizable** as invariants?
- Are policy statements **framed consistently** (same pattern, same weight)?

That is a **pattern-level** audit. Missing.

---

### E) Skipped Completely: Brand-Forensic / Qualitative Layer

The audit did **not** evaluate:

- Whether services match the **psychology of the primary target** (wealthy absentee property owners)
- Whether **language level** matches that segment
- Whether tone drifts into **“property management”** instead of **“representation”**
- Whether the brand feels **Mediterranean institutional** vs **startup SaaS**

These are qualitative but critical. The product is a **brand surface**, not only a compliance checklist.

---

### Governance Clarification 1: Guardian vs Sentinel

**Guardian was scaffolding. Sentinel is the structure.**

This is **not** a rename. It is **removing a prosthetic limb that was never meant to stay.** That removes the only strategic ambiguity for execution: replace Guardian with Sentinel as removal of temporary scaffold, not as rebrand.

---

### Governance Clarification 2: Placeholder Discipline

**Rule:** Placeholders may exist in **operational infrastructure**. They **cannot** exist in **identity surface**.

| Type | Example | Acceptable? |
|------|---------|-------------|
| Operational / infrastructure | `contact@guardiancoastablanca.com` (email domain) | Yes — can remain until final infrastructure lock |
| Identity surface | “Guardian Costa Blanca” in header / footer / visible copy | No — must be eliminated |

**We separate infrastructure from identity.** Visible brand name must not be temporary on the live identity surface.

---

## ADDENDUM 2 — PHASE 2 SCOPE GAPS & REVISED COMPLETENESS

*No code or doctrine changed. Diagnosis extended; fixes still not started.*

### 10 Missing Audit Dimensions (Recorded for Phase 2)

**1. Component-Level Consistency Matrix (Component Invariant Check)**  
Audit referenced Header, Footer, ConfidenceBar but did **not** check:

- Are component **props** consistent across pages?
- Is **ConfidenceBar** invoked identically on every page?
- Does **Header** render locale logic consistently?
- Is **Footer** static or dynamic (same content vs conditional)?
- Are **meta tags** (where set) aligned with doctrine?

Audit was **page-focused**, not **component-focused**. Hole.

---

**2. Route-Level Architecture**  
Audit checked pages individually. It did **not** check:

- Are **routes** consistent with system hierarchy (e.g. Identity → Mechanism → Scope → Evidence → Action)?
- Does **navigation order** (header/footer) match doctrine?
- Is **footer nav** identical to **header nav** (no drift)?
- Is there any **orphan route** (linked nowhere or wrong hierarchy)?
- Does **not-found** follow identity doctrine beyond the one flagged line?

One not-found identity violation was flagged; **navigation coherence** was not audited. Structural hole.

---

**3. SEO / Metadata Identity Surface**  
Visible copy was flagged. The audit did **not** verify:

- Are **&lt;title&gt;** tags aligned with Sentinel (or still Guardian)?
- Are **meta descriptions** Guardian-based?
- Is **OpenGraph** (og:title, og:description) still Guardian?
- Is **canonical** or implied site name Sentinel?

Identity surface **includes metadata**. Not verified. Hole.

---

**4. Locale Architecture Readiness**  
Hardcoded EN strings were flagged. The audit did **not** check:

- Does **EN locale** exist and load?
- Is **EN parity** structurally ready (same namespaces, same keys)?
- Are **namespace splits** clean (no key bleed, no missing keys per locale)?
- Are **keys reusable** across PL/EN without structural debt?

Violation was flagged; **readiness state** was not audited. Deeper hole.

---

**5. State Consistency**  
Audit checked visible content. It did **not** check:

- **Loading** states (spinner, skeleton, text)
- **Form validation** states (messages, tone)
- **Error** states (except not-found)
- **Empty** states (e.g. FAQ “no results”)

Identity drift often hides in **states**. Not audited.

---

**6. Enforcement of “No Emotional Layer” (Linguistic)**  
“Opieka” was flagged. The audit did **not** systematically check for:

- Soft reassurance phrases
- Hospitality vocabulary
- Warm adjectives
- Promise language
- “We understand”, “we help”, “we care” patterns

COPY discipline must be audited **linguistically** across all namespaces. Current audit flags obvious items only.

---

**7. Conversion Friction Logic**  
CTA tone was flagged. The audit did **not** evaluate:

- Is **contact form** over-permissive (e.g. optional fields that should be qualification gates)?
- Does it **force package acknowledgment** (scope/limits) before submit?
- Is **qualification friction** sufficient?
- Is **disqualification** visible **pre-form** (e.g. “outside area” before form)?

Filtration doctrine is central. Not fully audited.

---

**8. Visual Hierarchy Weight Ratio**  
Audit flagged 3-column grid, table, CTA position. It did **not** check:

- Are **H1 sizes** consistent across pages?
- Is **hero** oversized (vs LAYOUT §8 max height / density)?
- Is **typographic contrast** institutional (not marketing-heavy)?
- Does page feel **heavy at top, lighter below** (hierarchy of weight)?

LAYOUT-COMPOSITION enforcement. Skipped.

---

**9. Package Mapping Logic**  
Audit flagged: Green shows 2 visits; SERVICE-STRUCTURING §6.1 says minimum 1 for lowest tier. It did **not** verify:

- Is **Green** actually **Structured Presence** in doctrine?
- Are **package labels** (ZIELONY / GREEN, etc.) aligned with doctrine names (Structured Presence, Active Oversight, Extended Jurisdiction)?
- Is there **mapping drift** (e.g. Green = Active Oversight in practice)?

Before correcting 2 → 1, **mapping** must be confirmed. Not clarified. Serious hole.

---

**10. System Narrative Coherence**  
Audit did **not** verify:

- Does the **story across pages** feel like **one operating system**, or does each page feel self-contained?
- Is there **narrative repetition fatigue** (same message repeated without structural purpose)?
- Is **policy framing** consistent in **tone weight** (same “authority” level everywhere)?

This is the **invisible glue**. Skipped.

---

### Revised Audit Completeness Scores

| Dimension | Score | Note |
|-----------|--------|------|
| Mechanical alignment | 8.5/10 | Page-level doctrine checks solid |
| Structural completeness | 7/10 | Component, route, state, narrative gaps |
| Brand-forensic depth | 6/10 | Psychology, tone, institutional feel partial |
| System coherence validation | 5/10 | Cross-page narrative and glue not verified |

**We are not done auditing.**

---

### Next Steps (Still NO Fixes)

1. **STRUCTURAL AUDIT — PHASE 2**  
   Component + State + Route + Narrative layer.  
   Includes: component invariant check, route/nav coherence, state consistency (loading/error/empty), package mapping clarification, system narrative coherence.

2. **BRAND FORENSIC AUDIT**  
   Psychology + tone + institutional feel + filtration strength.  
   Includes: linguistic scan for emotional layer, conversion friction and qualification/disqualification visibility, visual hierarchy weight ratio, target-segment and Mediterranean-institutional feel.

**We do NOT touch code yet. We finish diagnosis first.**

---

### Critical Clarification Before Phase 2 (Owner Decision Required)

**Question:**  
Are we auditing **only the PL version** now, or auditing **PL with EN structural future in mind**?

**Implication:**

- If **PL only:** Phase 2 can focus on PL components, PL routes, PL states, PL narrative. Locale architecture can be deferred.
- If **PL with EN in mind:** **Namespace architecture** (splits, key reusability, EN parity readiness) **must be included in Phase 2**. Component and route checks should validate that structure supports both locales.

**Routing:** Owner to confirm scope so Phase 2 (and any Brand Forensic pass) can be scoped correctly. Cursor will not assume; execution scope depends on this call.

---

*End of Addendum 2. No code or doctrine changed.*




Reply only (no MD update):

---

## 1. Package mapping logic — responsibility and lock

**Ambiguity:** The report says “mapping must be confirmed” but does not assign responsibility or state the lock.

**Required before Phase 2 (or at Phase 2 start):**

- **Explicit mapping:** Which visible package = which doctrine tier (e.g. ZIELONY/GREEN = Structured Presence, POMARAŃCZOWY/ORANGE = Active Oversight, CZERWONY/RED = Extended Jurisdiction, or other).
- **Lock status:** Whether “color → doctrine tier” is locked in DECISIONS (and where), or still open.
- **Color role:** Whether color is purely UI (presentation only) or identity-bound (governed).

**Responsibility (choose one and document):**

- **Option A:** Owner confirms mapping and lock in writing (e.g. in DECISIONS or STATUS).
- **Option B:** Phase 2 starts with a line-by-line read of DECISIONS §23 (and any related SERVICE-STRUCTURING / DECISIONS sections) and produces a short “Package mapping” note: visible name ↔ doctrine tier ↔ inspection minimum, then Owner approves.

Until one of these is done, Phase 2 should treat package mapping as an open input and not assume Green = 1/month or any other change. This is the only “serious” structural ambiguity left.

---

## 2. Evidence architecture — measurable test (Phase 2)

**Current gap:** “Structural positioning” is qualitative. Phase 2 should turn it into **testable criteria**, for example:

- **Order:** Does Evidence (SLA / reporting / responsibility) appear **before** any CTA on the page?
- **Labeling:** Is evidence **structurally labeled** (e.g. “SLA”, “Reporting window”, not mixed with marketing copy)?
- **SLA parity:** Is SLA (and reporting window) **displayed identically** across all packages where it applies, with only response/presence differing?
- **Invariant wording:** Is the **reporting window** phrased as one **invariant sentence** (same string/key) everywhere?
- **Separation:** Is evidence **visually separated** from persuasion (no “proof” blocks that double as emotional reassurance)?

Phase 2 should use these (or Owner-approved variants) as pass/fail or clearly scored checks, not only qualitative description.

---

## 3. Brand-forensic — “Authority temperature”

**Missing dimension:** Beyond psychology, tone, institutional vs SaaS, and filtration, add:

- **Authority temperature:**  
  Is the brand too cold? Too neutral? Does it lack **controlled strength**? Does it **visually command** or merely inform?  
  Sentinel is not only institutional; it must feel **sovereign**.

Include “authority temperature” explicitly in the **Brand Forensic Audit** scope (sovereign vs merely institutional vs cold/neutral).

---

## 4. State consistency — rejection and success (Phase 2)

**Addition to Phase 2 state checks:**

- **Success states:** Confirmation screen language (tone, no reassurance drift).
- **Rejection / disqualification:** Form rejection tone, disqualification phrasing (e.g. “not appropriate client”), geographic rejection handling.
- Treat **rejection states** as part of the brand surface under filtration doctrine.

So Phase 2 state consistency = loading + error + empty + **success** + **rejection/disqualification/geographic**.

---

## 5. SEO / metadata — browser chrome and schema

**Add to the identity-surface checklist:**

- **Structured data** (if any): schema type and naming consistency with Sentinel.
- **Schema naming:** Any org/site names in JSON-LD or similar aligned with Sentinel.
- **Favicon / manifest:** App/site name in manifest and favicon context.
- **Browser tab:** Alignment of tab title with `<title>` and doctrine.

Identity surface = document metadata **and** browser chrome (tab, favicon, manifest).

---

## 6. Locale — decision: audit with EN structural future in mind

**Decision (you confirmed):** **Audit with EN structural future in mind.**

**Implication for Phase 2:**

- Namespace architecture is in scope (splits, key reusability, EN parity readiness).
- Even if EN content is incomplete, **structure** must be ready.
- Goal: avoid auditing PL deeply and then finding namespace/coupling debt; refactors are costliest later.

Phase 2 will therefore include **namespace architecture and EN structural readiness** (and key/namespace checks), not PL-only.

---

**Summary for Phase 2 / Brand Forensic**

- **Package mapping:** Resolve by Owner confirmation or DECISIONS §23 line-by-line mapping + Owner approval; document which package = which tier and whether color is locked.
- **Evidence:** Turn “structural positioning” into the 5 testable criteria above (or Owner-approved version).
- **Brand forensic:** Add “authority temperature” (sovereign vs institutional vs cold/neutral).
- **State consistency:** Add success and rejection/disqualification/geographic states.
- **SEO/metadata:** Add structured data, schema naming, favicon/manifest, browser tab.
- **Locale:** Phase 2 scoped with **EN structural future in mind** (namespace and readiness included).

No MD file was updated; this reply is the record for Phase 2 scoping.
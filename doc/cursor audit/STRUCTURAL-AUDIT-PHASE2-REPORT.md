# STRUCTURAL AUDIT — PHASE 2 REPORT

**MODE: AUDIT | NO MODIFICATIONS**  
**Evidence:** doc/* (mandatory read order), app/[locale]/*, components (HeaderClient, Footer, ConfidenceBar), messages/pl.json, messages/en.json, next.config.ts, i18n.ts.  
**Date:** Per Phase 2 instruction.

---

## 1. PACKAGE MAPPING RESOLUTION

### Step 1–2: Doctrine sources

**DECISIONS §23** (line-by-line):  
Vertical containment only. Sequential containment blocks. Prohibited: three-column SaaS layout, “most popular” badges, visual manipulation. **No color. No tier names. No visible-label mapping.**

**SERVICE-STRUCTURING §5–6:**  
Three tiers: **Structured Presence** (§6.1), **Active Oversight** (§6.2), **Extended Jurisdiction** (§6.3).  
§6.1: Minimum **1** inspection/month; response within 48h; low emergency limit.  
§6.2: Minimum **2** inspections/month; response within 24h; medium emergency limit.  
§6.3: Minimum **2** inspections/month; same-day response; high emergency limit; accelerated presence.

### Mapping table (inferred from order only; not locked in DECISIONS)

| Visible Label (PL) | Color | Doctrine Tier Name       | Min Inspection | Scope Layer | SLA Tier |
|--------------------|-------|--------------------------|----------------|-------------|----------|
| ZIELONY / Green    | Green | Structured Presence (assumed) | 1 (doctrine)   | Layer 1     | 48h      |
| POMARAŃCZOWY / Orange | Orange | Active Oversight (assumed)   | 2              | Layer 1     | 24h      |
| CZERWONY / Red     | Red   | Extended Jurisdiction (assumed) | 2              | Layer 1     | Same-day |

**Implementation currently:** Services comparison table shows Green=2, Orange=2, Red=2–4 visits/month. If Green = Structured Presence, then **2 conflicts with doctrine 1**.

### Step 3: Lock and ambiguity

| Question | Result |
|----------|--------|
| Is color-to-tier mapping explicitly locked in DECISIONS? | **No.** DECISIONS §23 does not mention color or tier names. |
| Is color presentation-only or identity-bound? | **Not stated.** No DECISIONS or SERVICE-STRUCTURING rule on color. Treated as UI/presentation. |
| Is mapping ambiguous anywhere? | **Yes.** Visible label ↔ doctrine tier is inferred by order only. Green = Structured Presence is **not** confirmed in writing. |

**Ambiguity flag:** **Yes.** Owner must approve mapping before enforcing 1/month or other structural corrections. No assumption Green = Structured Presence until then.

---

## 2. COMPONENT INVARIANTS

| Component | Invariant Expected | Observed | Drift | Severity |
|-----------|--------------------|----------|--------|----------|
| HeaderClient | Same props (none), locale from provider; identity name from doctrine | No props; `useLocale()`; hardcoded "Guardian Costa Blanca" | Identity: deprecated name | High |
| HeaderClient | Nav order consistent with doctrine/hierarchy | Order: services, how-it-works, faq, about, contact | No doctrine order defined in docs for nav; order is stable | Low |
| HeaderClient | Meta tags set per page | No meta in Header; no generateMetadata in app | Page titles/descriptions not set in code | High |
| Footer | Same content pattern; static or documented conditional | Fully static; same nav + legal + contact + service area | None | — |
| Footer | Nav parity with header | Footer: same 5 nav links + terms, privacy (Legal column). Header: no terms/privacy links | Footer has 2 extra links (legal); header does not. Structural difference. | Med |
| Footer | Identity in copyright | "Guardian Costa Blanca" in copyright | Deprecated name | High |
| ConfidenceBar | Invoked identically where used; single key set for scope/SLA/geographic | No props; uses `common.confidenceBar` only | None | — |
| ConfidenceBar | Scope/SLA strings from single key | All three cells from `t('common.confidenceBar.*')` | Reused correctly | — |
| ConfidenceBar | Present on all main pages or documented subset | Present: Home, Services, How It Works, FAQ, Contact (intro). **Absent:** About, Privacy, Terms, not-found | Not identical across pages; 4 pages lack it | Med |
| Shared layout | Wrappers consistent | No shared layout wrapper in [locale]/layout; each page composes Header + main + Footer | Layout is minimal; no wrapper component | Low |

---

## 3. ROUTE & NAVIGATION ARCHITECTURE

| Route | Expected Position | Observed | Structural Drift | Severity |
|-------|-------------------|----------|------------------|----------|
| /[locale] | Home; identity/first contact | page.tsx | — | — |
| /[locale]/services | Mechanism/scope | Present in header & footer | — | — |
| /[locale]/how-it-works | Mechanism | Present | — | — |
| /[locale]/faq | Scope/boundaries | Present | — | — |
| /[locale]/about | Supporting | Present | — | — |
| /[locale]/contact | Action | Present | — | — |
| /[locale]/privacy | Legal; footer only | In footer Legal only; not in header | By design (legal in footer) | — |
| /[locale]/terms | Legal; footer only | In footer Legal only; not in header | By design | — |
| /[locale]/simple | — | Has page.tsx; **not linked** from header or footer | Orphan route | Med |
| /[locale]/test | — | Has page.tsx; **not linked** from header or footer | Orphan route | Med |
| not-found | Coherent with identity; locale-aware | Renders Header+Footer; copy hardcoded EN; "Guardian Costa Blanca" in body | Identity drift; no i18n | High |

**Header nav order:** services → how-it-works → faq → about → contact.  
**Footer nav order:** Same five, then Legal (terms, privacy).  
**Internal linking:** not-found links to Home, Services, How It Works, Contact (no FAQ, About). Inconsistent with full nav.

---

## 4. STATE SURFACE AUDIT

| State Type | Location | Expected Tone/Structure | Observed | Drift | Severity |
|------------|----------|-------------------------|----------|--------|----------|
| Loading | Contact submit button | Neutral; doctrine-aligned | `tCommon('loading')` = "Ładowanie..." / "Loading..." | None | — |
| Error | Contact form validation | Procedural; no blame | `errors.*.message` from schema; generic "Pole wymagane"; submit error string from API | Error UI uses red-600; message source not from locale for submit error | Med |
| Error | Contact submit failure | From locale; no Guardian | `submitError` = error.message or "An error occurred. Please try again." (hardcoded EN) | Hardcoded EN fallback | Med |
| Empty | FAQ search | Neutral; from locale | "No questions match your search." hardcoded EN | i18n parity | Med |
| Success | Contact confirmation | Procedural; geographic/rejection clarity | Uses t('confirmation.*'); outsideArea panel; next steps; reference number | Success panel uses green-50/green-400 (not doctrine accent) | Low |
| Success | Contact "Return to Home" | From locale | "Return to Home" hardcoded EN | i18n parity | Low |
| Rejection / disqualification | Contact confirmation | Pre-form and post-submit; geographic exclusion stated | outsideAreaTitle/outsideAreaText in confirmation; cannotHelp section on form page | Rejection copy present; tone structural | — |
| Geographic exclusion | Contact, How It Works, Services | Same rule; no exceptions | Torrevieja + 50–70km in copy; confirmation.outsideAreaText | Consistent | — |
| Form rejection | Contact validation | Acknowledgment required; package acknowledgment in copy | form.acknowledgment in locale; checkbox required | Qualification gate present | — |

---

## 5. EVIDENCE ARCHITECTURE — PASS/FAIL CRITERIA

| Page | Criterion | Pass/Fail | Notes |
|------|-----------|-----------|-------|
| Home | Evidence before CTA | **Fail** | Hero has 2 CTAs (section 1); ConfidenceBar is section 2. Evidence does not precede first CTA. |
| Home | Evidence structurally labeled | Pass | ConfidenceBar has title + serviceArea.label, sla.label, scope.label. |
| Home | SLA parity across packages | N/A | ConfidenceBar shows single SLA definition only. |
| Home | Reporting window invariant string reuse | N/A | No reporting-window row in ConfidenceBar; only SLA definition. |
| Home | Evidence visually separated from persuasion | Pass | ConfidenceBar is distinct section; no emotional copy in bar. |
| Services | Evidence before CTA | Pass | ConfidenceBar in intro; first CTA at end of page (section 10). |
| Services | Evidence structurally labeled | Pass | ConfidenceBar labeled; table has category "SLA" and footerNote. |
| Services | SLA parity across packages | Partial | Table differentiates requestAck, situationAssessment, emergencyAction, servicePriority by package. No single "reporting window" row; DECISIONS §6 states reporting window is system-standard—not surfaced as invariant in table. |
| Services | Reporting window invariant string reuse | **Fail** | Reporting window is not displayed as a row or single invariant sentence in Services. Only in ConfidenceBar sla.text (reaction/decision time). |
| Services | Evidence visually separated from persuasion | Pass | Table and footerNote are structural; no testimonials. |
| How It Works | Evidence before CTA | Pass | ConfidenceBar early; CTA at end. |
| How It Works | Evidence structurally labeled | Pass | ConfidenceBar same pattern. |
| FAQ | Evidence before CTA | Pass | ConfidenceBar before FAQ content; CTA in notAnswered. |
| Contact | Evidence before CTA | Pass | ConfidenceBar in intro; form below. |
| About | Evidence before CTA | N/A | No ConfidenceBar on About. No evidence block in same sense. |
| Privacy / Terms | Evidence before CTA | N/A | Legal pages; no ConfidenceBar. |

**Summary:** One structural fail (Home: Evidence before CTA). Reporting window not presented as invariant in Services (fail for that criterion). ConfidenceBar absent on About, Privacy, Terms, not-found (invariant placement not identical).

---

## 6. SEO / METADATA IDENTITY SURFACE

| Surface Layer | Expected (Sentinel) | Observed | Drift | Severity |
|---------------|--------------------|----------|--------|----------|
| &lt;title&gt; | Per-page; Sentinel | No `generateMetadata` in app. Default from Next.js or root. | Page titles not set in code; likely default or blank | High |
| Meta description | Per-page; no Guardian | Not set in code | Absent | High |
| OpenGraph | Sentinel; no Guardian | Not set in code | Absent | High |
| Canonical | — | Not set in code | — | Med |
| JSON-LD / structured data | — | None found | — | Low |
| Schema org/site naming | Sentinel | N/A | — | — |
| Favicon | — | No app/icon or favicon in repo (Next.js may use default) | Not verified | Low |
| Manifest | — | No manifest file found | Absent | Low |
| Browser tab | Aligned with &lt;title&gt; | Uncontrolled (no metadata) | Drift | High |

**Note:** messages/*.json contain `meta.title` and `meta.description` for some namespaces (e.g. services, contact, howItWorks, faq, about, terms, privacy). These are **not** consumed by any `generateMetadata` or layout; identity surface in metadata is therefore **uncontrolled**. If used later, meta in JSON currently references "Guardian Costa Blanca" in multiple places.

---

## 7. LOCALE ARCHITECTURE — EN STRUCTURAL FUTURE

| Namespace | Issue | Risk | Refactor Complexity | Severity |
|-----------|--------|------|----------------------|----------|
| Root | pl.json and en.json exist; same top-level keys (common, home, services, contact, howItWorks, faq, about, terms, privacy) | — | — | — |
| common | confidenceBar, footer, nav, contact shared; key reuse for scope/SLA/geographic | Reuse correct | Low | — |
| common | contact.email/phone/hours identical string in PL and EN (email domain placeholder) | Operational placeholder; acceptable per governance | — | — |
| FAQ page | "Sections" and "No questions match your search." hardcoded EN in component | PL locale shows EN strings; parity breach | Low (move to common or faq) | Med |
| Contact page | "Return to Home" hardcoded EN on success | Parity breach | Low | Low |
| not-found | All copy hardcoded EN (title, body, link labels, "Guardian Costa Blanca") | No locale load for not-found or strings not from messages | Medium (not-found must receive locale + use t()) | High |
| Component-level i18n | Header: no props; uses useLocale() and t('common'). Footer: same. ConfidenceBar: t('common.confidenceBar') | Components use next-intl; no hardcoded copy in Header/Footer/ConfidenceBar except Header brand name (hardcoded) | Header brand name is code, not key | High (identity) |
| Key coupling | Same keys in PL and EN; structure mirrors | No structural coupling risk; keys reusable | — | — |
| Missing key symmetry | EN has meta.title/description in same namespaces as PL | Symmetric | — | — |
| Bleed | No cross-namespace bleed observed | — | — | — |
| Invariant strings | scope, SLA, geographic in common.confidenceBar; one key per concept | Reusable; single source per locale | — | — |

---

## 8. SYSTEM NARRATIVE COHERENCE

| Dimension | Observation | Drift Level | Severity |
|------------|-------------|-------------|----------|
| One operating system vs self-contained | Pages share Header, Footer, same nav; ConfidenceBar on 5 of 9 main pages; tone is consistently procedural | About/Privacy/Terms/not-found lack ConfidenceBar; narrative weight of "parameters" not uniform | Med |
| Repetition fatigue | Scope rule, geographic rule, SLA definition repeated (ConfidenceBar, copy blocks, table footer) | Intentional invariants; no excessive narrative repetition | Low |
| Policy tone weight | LAYOUT §4.1: Identity → Mechanism → Scope → Evidence → Action. Home leads with hero then ConfidenceBar then problem/solution; Services/How It Works lead with intro + ConfidenceBar | Home violates order (CTA before Evidence); other pages align | Med (Home) |
| Structural block rhythm | Section alternation light/alt and authority blocks; spacing classes (py-16, py-20) used consistently | Rhythm present; no formal audit of spacing scale (e.g. 120/160) | Low |
| ConfidenceBar placement | Home: after hero. Services, How It Works, FAQ, Contact: after intro/title. About, Privacy, Terms, not-found: absent | Placement not identical; 4 pages without | Med |
| Invariants visually recognizable | ConfidenceBar same component; same border-accent, section-label. Footer same authority block | Recognizable where present | — |

---

## 9. STRUCTURAL RISK RANKING (TOP 10)

| Rank | Risk | Source |
|------|------|--------|
| 1 | Identity surface: Header, Footer, not-found, and metadata use or allow "Guardian"; no generateMetadata; meta in JSON unused and Guardian-based | Component invariants; SEO/metadata; Phase 1 |
| 2 | Package mapping not locked: Green ↔ Structured Presence (1/month) unconfirmed; enforcement of 2→1 blocked until Owner approval | Package mapping resolution |
| 3 | Evidence before CTA fail on Home (hero CTAs precede ConfidenceBar) | Evidence pass/fail |
| 4 | not-found: full EN hardcode + Guardian; no locale/messages | Route/state; locale |
| 5 | Orphan routes /[locale]/simple and /[locale]/test not linked; structural noise | Route architecture |
| 6 | ConfidenceBar not invoked on About, Privacy, Terms, not-found; invariant placement inconsistent | Component invariants; narrative |
| 7 | Reporting window not displayed as system-standard invariant on Services (and no single invariant sentence) | Evidence pass/fail |
| 8 | Contact form: submit error fallback and success "Return to Home" hardcoded EN; validation errors not all from locale | State surface; locale |
| 9 | Footer nav includes Legal (terms, privacy); header does not—structural asymmetry (may be intentional) | Component invariants |
| 10 | No favicon/manifest/canonical/structured data; browser chrome identity unset | SEO/metadata |

---

*End of Structural Audit Phase 2 Report. No code or documentation modified. Diagnosis only.*

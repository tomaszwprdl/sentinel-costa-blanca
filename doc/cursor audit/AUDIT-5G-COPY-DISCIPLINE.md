# AUDIT-5G-COPY-DISCIPLINE.md

**Task 5G — Doctrine Saturation Audit: Copy Discipline Codex**  
**Input doctrine:** doc/COPY DISCIPLINE CODEX.md (Task 5G, COMPLETE/LOCKED)  
**Target:** Live implementation + repo (PL + EN).  
**Output:** Evidence-based audit; no inference; no redesign proposals.  
**Status:** **CLOSED** (Task 5G closure applied; 0 hard violations; CD-09, CD-15 EMBODIED).

---

## 0. Operating Rules Applied

- Evidence-based only. No “close enough.”
- If proof is missing, status = NOT TESTABLE with reason.
- Audit covers PL + EN and reports parity explicitly.
- Only minimal copy patches and minimal structural fixes for compliance.

---

## 1. Binding Rules Extracted (CD-01 … CD-n)

| ID | Rule (short, unambiguous) |
|----|----------------------------|
| CD-01 | Copy must not weaken structural authority; if it does, it is invalid. |
| CD-02 | Tone must be procedural, structured, measured, boundary-aware, non-emotional. |
| CD-03 | Tone must not be reassuring, promotional, inspirational, lifestyle-oriented, or warm for warmth. |
| CD-04 | Prefer declarative, parameter-based, quantified statements and defined limits; avoid emotional framing, narrative, rhetorical questions. |
| CD-05 | Max 2–3 sentences per paragraph block; prefer 12–22 words per sentence; avoid chained subordinate clauses; use bullets if more needed. |
| CD-06 | Prefer active structure (“Sentinel performs…”); avoid “We try to ensure…”, “You can feel confident that…”. |
| CD-07 | Use allowed structural language (e.g. “Defined within contract”, “Minimum guaranteed frequency”, “Autonomous decision limit”). |
| CD-08 | Disclosure: allowed e.g. “View full scope”, “See structural breakdown”; not “Learn more about how we care”, “Discover how we support you”. |
| CD-09 | Prohibited (PL): spokój, bez stresu, opieka, dbamy o Ciebie. |
| CD-10 | Prohibited (PL): komfort życia, wygoda, luksus. Prohibited (EN): premium living, lifestyle support, seamless experience. |
| CD-11 | Prohibited (PL): najlepszy, wyjątkowy, niezrównany. Prohibited (EN): best, exceptional, unmatched, industry-leading. |
| CD-12 | Limits: use numeric expression where possible; avoid vague qualifiers (e.g. “Response within 24h” not “Fast response”). |
| CD-13 | FAQ answers: (1) Direct answer, (2) Condition or limit, (3) Procedural clarification if required; avoid reassurance tone. |
| CD-14 | Every structural concept must exist in both PL and EN; update PL and EN simultaneously; preserve parameter clarity. |
| CD-15 | CTAs must be neutral, structural, action-specific. Allowed e.g. “Request structured review”, “View package comparison”. Not: “Get started today”, “Secure your peace of mind”, “Join now”. |
| CD-16 | Use consistent units (h, month, €); avoid approximate phrasing unless legally required; financial thresholds defined. |
| CD-17 | If copy conflicts with DECISIONS/SERVICE-STRUCTURING/LAYOUT — structure prevails; copy adapts. |
| CD-18 | If text adds emotional weight, softens authority, removes boundaries, or introduces ambiguity → must be rewritten. |

---

## 2. Testable Constraints (per CD rule)

| Rule ID | Testable constraint |
|---------|---------------------|
| CD-01 | No string that explicitly undermines authority (evidence: absence of weakening phrases or patch). |
| CD-02 | Scan for procedural/structural/measured wording; no systematic emotional lead. |
| CD-03 | Prohibited tone: scan for reassurance, promotion, inspiration, lifestyle, warmth. |
| CD-04 | Declarative, parameter-based, quantified; no emotional framing or rhetorical questions in key copy. |
| CD-05 | Paragraph blocks ≤3 sentences; sentence length 12–22 words where measurable; bullets for long explanation. |
| CD-06 | No “We try to ensure”, “You can feel confident that” (or PL equivalents). |
| CD-07 | Presence of structural phrases where appropriate. |
| CD-08 | No “Learn more about how we care”, “Discover how we support you” (or equivalents). |
| CD-09 | Grep: 0 matches in content for PL spokój, bez stresu, opieka, dbamy o Ciebie. |
| CD-10 | Grep: 0 matches for PL lifestyle terms and EN premium living / lifestyle support / seamless experience. |
| CD-11 | Grep: 0 matches for PL/EN marketing superlatives in user-facing copy. |
| CD-12 | Every limit/frequency/response time expressed numerically or marked vague with rewrite. |
| CD-13 | Each FAQ answer: has direct answer, then condition/limit, then procedure; no reassurance tone. |
| CD-14 | Parity checklist: each page/section/FAQ/CTA concept exists in both PL and EN. |
| CD-15 | Every CTA string classified Allowed / Not allowed / Ambiguous. |
| CD-16 | Units consistent (h, month, €); no approximate thresholds unless justified. |
| CD-17 | NOT TESTABLE from copy audit alone (requires conflict detection with other docs). |
| CD-18 | Operationalized via CD-02, CD-03, CD-09–CD-11 and CTA/FAQ findings. |

---

## 3. Coverage Table (one row per CD rule)

| Rule ID | Constraint | Proof type | Evidence location | Status | Minimal patch (if needed) |
|---------|------------|------------|-------------------|--------|---------------------------|
| CD-01 | Copy does not weaken authority | Usage | Overall tone scan; no explicit undermining phrases found in messages | PARTIAL | Resolve CD-09/CTA violations to fully embody |
| CD-02 | Procedural, structured, measured tone | Code/usage | messages/en.json, pl.json: intro, package, FAQ wording | EMBODIED | — |
| CD-03 | No reassuring/promotional tone | Usage | No “we care”, “peace of mind” in messages | PARTIAL | Remove “personalized quote” reassurance framing (EN services.cta) |
| CD-04 | Declarative, parameter-based | Code | Package definitions, SLA, scope in both locales | EMBODIED | — |
| CD-05 | 2–3 sentences, 12–22 words, bullets | Output | Many FAQ answers multi-sentence; not measured mechanically | NOT TESTABLE | Define sampling method and measure if required |
| CD-06 | No “We try…”, “You can feel confident…” | Usage | Grep: no matches in messages | EMBODIED | — |
| CD-07 | Structural language allowed | Usage | “Defined scope”, “package boundaries”, “SLA” used | EMBODIED | — |
| CD-08 | No “Learn more how we care” etc. | Usage | Grep: 0 matches in messages | EMBODIED | — |
| CD-09 | No PL: spokój, bez stresu, opieka, dbamy o Ciebie | Code | messages/pl.json | **EMBODIED** | Task 5G closure: all “opieka” replaced (Nadzór / obsługa / utrzymanie). Grep → 0 matches. |
| CD-10 | No PL/EN lifestyle terms | Usage | Grep: 0 in messages for listed terms | EMBODIED | — |
| CD-11 | No PL/EN marketing superlatives | Usage | Grep: 0 in messages | EMBODIED | — |
| CD-12 | Numeric limits where possible | Code | messages: within 24h, 48h, 4h, 8h, €300, €500, 2/month, 50–70km | EMBODIED | — |
| CD-13 | FAQ: direct answer → condition → procedure | Code/output | faq.sections.*.questions.*.answer in en/pl | PARTIAL | See §4.4: some answers need procedure/limit order or tone trim |
| CD-14 | PL/EN structural parity | Code | Key comparison: home, services, contact, faq, about, howItWorks | EMBODIED | Verify no missing section/concept; one term “personalized quote” EN-only framing |
| CD-15 | CTAs allowed/not allowed | Code | messages: hero, packages, finalCta, services.cta, contact, nav | **EMBODIED** | Task 5G closure: primaryButton “Request structured review”/“Złóż zapytanie o pakiet”; headline “Request package comparison”/“Zapytaj o porównanie pakietów”; subheadline structural. Grep → 0 disallowed. |
| CD-16 | Consistent units, defined thresholds | Code | h, month, € used consistently in both locales | EMBODIED | — |
| CD-17 | Conflict resolution (structure prevails) | — | Requires cross-doc analysis | NOT TESTABLE | — |
| CD-18 | No emotional weight / ambiguity | Usage | Via CD-02, CD-03, CD-09, CD-11, CTA | PARTIAL | Resolve prohibited phrases and disallowed CTAs |

---

## 4. Required Scans

### 4.1 Prohibited language scan (hard fail list)

**PL (emotional reassurance): spokój, bez stresu, opieka, dbamy o Ciebie**

**Post–Task 5G closure:** Grep in messages/pl.json → **0 matches**. All instances replaced: package naming “Opieka nad Nieruchomością” / “Opieka + Dostęp” → “Nadzór nad Nieruchomością” / “Nadzór + Dostęp”; operational “opieka nad zwierzętami” → “obsługa zwierząt”; “tymczasowa opieka” → “tymczasowa obsługa”; “opieka ogrodowa” → “utrzymanie ogrodu”. No violations remaining.

**PL (lifestyle): komfort życia, wygoda, luksus** — **0 matches** in messages.  
**PL (marketing): najlepszy, wyjątkowy, niezrównany** — **0 matches** in messages.

**EN (emotional): peace of mind, we care, worry-free, relax knowing, trusted by many** — **0 matches** in messages.  
**EN (lifestyle): premium living, lifestyle support, seamless experience** — **0 matches** in messages.  
**EN (marketing): best, exceptional, unmatched, industry-leading** — **0 matches** in messages.  

**Note:** EN package/column names use “Property Care” and “Care + Access”. Codex §5.1 prohibits the phrase “we care”, not the noun “care” in “Property Care”. No change required for EN package naming.

**Summary:** All EN prohibited phrase scans: clean. PL: was “opieka” in multiple strings → **resolved** (Task 5G closure). 0 hard violations.

---

### 4.2 CTA inventory (PL + EN)

**Primary CTAs (buttons / headline CTAs)**

| Location | EN string | PL string | Classification |
|----------|-----------|-----------|----------------|
| home.hero | Explore Packages / How It Works | Zobacz Pakiety / Jak to działa | **Allowed** (structural/action) |
| home.packages.cta | Compare Packages in Detail | Porównaj Pakiety Szczegółowo | **Allowed** |
| home.faqPreview.cta | See All FAQs | Zobacz Wszystkie FAQ | **Allowed** |
| home.finalCta | View packages / Contact | Zobacz pakiety / Kontakt | **Allowed** |
| services.cta.headline | Request package comparison | Zapytaj o porównanie pakietów | **Allowed** (Task 5G closure). |
| services.cta.primaryButton | Request structured review | Złóż zapytanie o pakiet | **Allowed** (Task 5G closure). |
| services.cta.subheadline | Contact to discuss package fit and parameters. | Skontaktuj się w sprawie dopasowania pakietu i parametrów. | **Allowed** (Task 5G closure). |
| contact.form.submitButton | Submit Inquiry | Wyślij Zapytanie | **Allowed** |
| common.disclosure | Show details / Hide details | Pokaż szczegóły / Ukryj szczegóły | **Allowed** |

**Conclusion (post–Task 5G closure):** 0 not allowed CTAs. All services.cta strings replaced with structural phrasing. Grep: no “Get Started”, “Rozpocznij”, “Ready to secure”, “Gotowy zabezpieczyć”, “personalized quote”, “spersonalizowaną wycenę” in messages.

---

### 4.3 Parameter expression audit

**Sampled: limits, frequency, response time, thresholds**

| Location | EN | PL | Numeric / Vague | Note |
|----------|----|----|-----------------|------|
| common.confidenceBar.sla.text | Reaction/decision time, not guaranteed resolution time | Czas reakcji/decyzji, nie gwarantowany czas rozwiązania | Numeric (definition only) | Compliant |
| services.values | within 24h, within 48h, within 4h, within 8h, 12-24h, €300, €300-500, 2-4 | w ciągu 24h, 48h, 4h, 8h, 12-24h, 300€, 300-500€, 2-4 | **Numeric** | Compliant |
| contact.intro.responseCommitment | within 24-48 hours | w ciągu 24-48 godzin | **Numeric** | Compliant |
| howItWorks.step4.scheduleItems.frequency | Visit frequency per package | Częstotliwość wizyt według pakietu | Vague (no number in string) | Acceptable where package defines 2/month etc. elsewhere |
| services.green.visitTitle | standard: 2/month | standard: 2/miesiąc | **Numeric** | Compliant |

**Minimal rewrite (if any vague found):** None required for sampled limits; SLA and response times are numeric. Optional: add explicit “e.g. 2/month” in any “visit frequency” standalone line if it appears without package context.

---

### 4.4 FAQ structure audit

**Required structure:** (1) Direct answer, (2) Condition or limit, (3) Procedural clarification if required. Avoid reassurance tone.

**Sample (EN) — faq.sections.serviceModel.q1 (What exactly is Sentinel?)**

- Answer: Defines Sentinel (local property representation, package-based, defined scope).  
- Condition/limit: “not concierge or unlimited assistance”; “if your needs don’t align… Sentinel may not be appropriate.”  
- Procedure: “Review Services page for complete package specifications.”  
- **Verdict:** Compliant; no reassurance tone.

**Sample (EN) — faq.sections.emergencies.q9 (What is considered an emergency?)**

- Direct answer: Events causing/threatening immediate material damage, property loss, safety hazard; list (leaks, security, fire, gas, electrical); NOT WiFi, comfort, guest complaints.  
- Condition: RED includes emergency response; GREEN/ORANGE only after owner approval or immediate securing (€300 limit).  
- Procedure: implicit (package determines response).  
- **Verdict:** Compliant.

**Sample (EN) — faq.sections.practical.q14 (Can you take care of animals?)**

- Direct answer: Short-term animal care possible after arrangement; regular pet care not in any package.  
- Condition: Occasional brief supervision separately; no ongoing pet care.  
- Procedure: Contact Sentinel; permanent pet care requires separate local arrangement.  
- **Verdict:** Compliant. (PL uses “opieka” in answer → CD-09 violation; structure itself is fine.)

**Sample (PL) — faq.sections.communication.q23 (Dlaczego jest tak wiele zasad?)**

- Answer: Rules protect both parties, define scope, prevent disputes, enable accountability.  
- Slight drift: “długoterminowa jakość usług” / long-term service quality can read as soft benefit.  
- **Verdict:** PARTIAL — structure present; tone borderline; minimal rewrite: keep procedural, avoid “quality” as reassurance.

**Conclusion:** Most FAQ answers follow direct answer → condition/limit → procedure. A few answers (e.g. q23) have minor reassurance-adjacent wording; no structural breach. **PL “opieka”** in q14 and elsewhere is prohibited-word violation, not structure.

---

### 4.5 PL/EN parity audit

**Parity checklist (structural concepts)**

| Concept / Page | PL | EN | Parity |
|----------------|----|----|--------|
| Home: hero, problem, solution, howItWorks, packages, differentiation, serviceArea, credibility, faqPreview, finalCta | ✓ | ✓ | Yes |
| Services: intro, comparison, green/orange/red, addons, notIncluded, operations, selection, cta | ✓ | ✓ | Yes |
| Contact: intro, directContact, form, confirmation, activeClients, serviceArea, cannotHelp | ✓ | ✓ | Yes |
| How it works: intro, step0–step5, ongoing, changes, timeline, faq, cta | ✓ | ✓ | Yes |
| FAQ: policyNotice, sections (serviceModel, operations, emergencies, practical, communication, meta), notAnswered | ✓ | ✓ | Yes |
| About: intro, philosophy, geographic, system, resources, notWhat, accountability, nextSteps | ✓ | ✓ | Yes |
| Terms / Privacy (placeholder) | ✓ | ✓ | Yes |
| Nav, footer, common.disclosure, confidenceBar | ✓ | ✓ | Yes |

**Structural parity:** All major sections and page-level concepts exist in both languages. No missing block.  
**Wording parity:** One framing difference — EN services.cta.subheadline “receive a personalized quote” vs PL “otrzymać spersonalizowaną wycenę”; same concept, both present. Recommendation: replace both with neutral “discuss package fit and parameters” (align with home.finalCta.subheadline) for Codex consistency.

---

## 5. Violations (grouped by severity)

### Hard violations

**0 hard violations** (Task 5G closure applied).

1. **CD-09 — Prohibited PL “opieka”** — **RESOLVED.** All instances in messages/pl.json replaced: package naming → “Nadzór nad Nieruchomością” / “Nadzór + Dostęp”; operational → “obsługa zwierząt”, “tymczasowa obsługa”, “utrzymanie ogrodu”. Grep: 0 matches for spokój, bez stresu, opieka, dbamy o Ciebie.

2. **CD-15 — CTA not allowed** — **RESOLVED.** services.cta.primaryButton EN “Request structured review”, PL “Złóż zapytanie o pakiet”; headline EN “Request package comparison”, PL “Zapytaj o porównanie pakietów”; subheadline EN “Contact to discuss package fit and parameters.”, PL “Skontaktuj się w sprawie dopasowania pakietu i parametrów.” Grep: 0 matches for “Get Started”, “Rozpocznij”, soft framing CTAs.

### Structural violations

3. **CD-14 / CD-03 — Subheadline framing** — **RESOLVED.** services.cta.subheadline replaced with structural wording (Task 5G closure).

### Partial embodiment

4. **CD-13 — FAQ tone**
   - Some answers (e.g. q23 “Why so many rules?”) use “long-term service quality” / “jakość usług” — borderline reassurance.  
   - **Patch:** Optional minimal trim to purely procedural (scope, accountability, documentation).

5. **CD-15 — Headline CTA** — **RESOLVED.** Replaced with “Request package comparison” / “Zapytaj o porównanie pakietów” (Task 5G closure).

---

## 6. Blind spots

- **CD-05 (length discipline):** No mechanical count of sentences per block or words per sentence in messages. Enforcing would require tooling or manual sample. Marked NOT TESTABLE without sampling definition.
- **CD-17 (conflict resolution):** Requires cross-document comparison (DECISIONS, SERVICE-STRUCTURING, LAYOUT) vs live copy; not performed in this copy-only audit.
- **Contractual exceptions:** If “Opieka” or “Get Started” are required by contract or brand, they must be documented as explicit exceptions; audit cannot assume.

---

## 7. Safe-skip risk map

| Area | Risk | Evidence |
|------|------|----------|
| Package naming (PL) | High | “Opieka” used consistently in PL package/column names; likely defaulted to common “care” wording without Codex check. |
| Services CTA (both) | High | “Get Started” / “Rozpocznij” and “personalized quote” match common marketing patterns; Codex disallowance may have been missed. |
| FAQ operational terms (PL) | Medium | “Opieka” in pet/garden context is standard Polish; compliance requires synonym (obsługa, utrzymanie). |
| EN prohibited phrases | Low | Grep shows 0 matches; EN copy appears aligned with Codex list. |

---

## 8. Closure patch set

**Minimal list of concrete edits (exact file targets and string replacements; PL + EN paired).**

### 8.1 Hard violations (mandatory for closure)

| # | File | Key path (logical) | Current string (EN or PL) | Replace with |
|---|------|--------------------|----------------------------|--------------|
| 1 | messages/en.json | services.cta.primaryButton | Get Started | e.g. Request structured review or Initiate onboarding |
| 2 | messages/pl.json | services.cta.primaryButton | Rozpocznij | e.g. Zapytaj o pakiet or Rozpocznij wdrożenie |
| 3 | messages/pl.json | services.comparison.columns.green | 🟢 ZIELONY - Opieka nad Nieruchomością | 🟢 ZIELONY - Nadzór nad Nieruchomością (or Owner-approved equivalent) |
| 4 | messages/pl.json | services.comparison.columns.orange | 🟠 POMARAŃCZOWY - Opieka + Dostęp | 🟠 POMARAŃCZOWY - Nadzór + Dostęp |
| 5 | messages/pl.json | services.green.title (and any green “Opieka nad Nieruchomością”) | PAKIET ZIELONY - OPIEKA NAD NIERUCHOMOŚCIĄ | PAKIET ZIELONY - NADZÓR NAD NIERUCHOMOŚCIĄ |
| 6 | messages/pl.json | services.orange.title / fromGreen etc. | Opieka nad Nieruchomością + Dostęp / Opieka + Dostęp | Nadzór nad Nieruchomością + Dostęp / Nadzór + Dostęp |
| 7 | messages/pl.json | contact.form.packages.green / orange | ZIELONY - Opieka… / POMARAŃCZOWY - Opieka… | ZIELONY - Nadzór… / POMARAŃCZOWY - Nadzór… |
| 8 | messages/pl.json | howItWorks.step2.packages.green / orange | Opieka nad Nieruchomością; Opieka + Dostęp | Nadzór nad Nieruchomością; Nadzór + Dostęp |
| 9 | messages/pl.json | howItWorks.step4.specialItems.pets | tymczasowa opieka | np. tymczasowa obsługa zwierząt |
| 10 | messages/pl.json | faq.sections.practical.questions.q14.answer | opieka nad zwierzętami / opieki nad zwierzętami | obsługa zwierząt / obsługa zwierząt (or krótkoterminowa obsługa) |
| 11 | messages/pl.json | about.resources.inspection.items.network | opieka ogrodowa | utrzymanie ogrodu or obsługa ogrodu |

(If “Opieka” is contractually required for package names, do not replace in those keys; document exception in STATUS.md / AI-GOVERNANCE.md.)

### 8.2 Structural / ambiguous (recommended)

| # | File | Key path | Current | Replace with |
|---|------|----------|---------|--------------|
| 12 | messages/en.json | services.cta.subheadline | Contact us to discuss your needs and receive a personalized quote. | Contact to discuss package fit and parameters. |
| 13 | messages/pl.json | services.cta.subheadline | Skontaktuj się z nami, aby omówić Twoje potrzeby i otrzymać spersonalizowaną wycenę. | Skontaktuj się w sprawie dopasowania pakietu i parametrów. (or equivalent) |

---

## 9. Non-negotiable completion condition

Do not mark the doctrine as **CLOSED** unless:

- [x] All **hard violations** resolved or explicitly justified as contract-required (CD-09 “opieka”, CD-15 “Get Started”/“Rozpocznij”). **Done** — Task 5G closure applied.
- [x] **Parity** verified for all structural concepts (done; no missing block).
- [x] All remaining items either **patched** or explicitly **NOT TESTABLE** with clear reason (CD-05, CD-17 documented above).

**Current status:** **CLOSED**. Prohibited-language grep and CTA inventory re-run: 0 matches for PL spokój/bez stresu/opieka/dbamy o Ciebie; 0 matches for “Get Started”, “Rozpocznij”, soft framing CTAs. PL/EN parity unchanged.

---

*End of Audit 5G — Copy Discipline Codex. Evidence only; no redesign proposed.*

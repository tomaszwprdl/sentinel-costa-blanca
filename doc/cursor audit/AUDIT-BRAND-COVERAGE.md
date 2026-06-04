# AUDIT-BRAND-COVERAGE.md

**Objective:** Determine whether the current website fully embodies BRAND.md structurally and behaviorally.  
**Input:** BRAND.md (binding doctrine), current implementation (codebase, PL and EN routes), FULL-DOCTRINE-APPLICATION-CHECK.md (cross-reference).  
**Mode:** Evidence-based audit. No redesign suggestions, no marketing commentary, no opinion without proof.

---

## STEP 1 — Binding Constraints Extracted from BRAND.md

Constraints are rewritten as testable statements and grouped as specified.

### Identity & Positioning

| # | Testable constraint |
|---|----------------------|
| I1 | The site must communicate Sentinel as a system, not a personality. |
| I2 | The site must communicate oversight (structured property oversight through defined authority and documented process), not security or surveillance. |
| I3 | The site must position Sentinel as "reprezentacja właściciela na miejscu" / structural descriptor; not campaign language or slogan. |
| I4 | The site must not position Sentinel as concierge, full property management, or generic property management. |
| I5 | Sentinel must be presented as governing, not expressing. |

### Tone & Copy Discipline

| # | Testable constraint |
|---|----------------------|
| T1 | Language must be declarative. |
| T2 | The site must avoid emotional-first messaging and hospitality framing. |
| T3 | Clarity must replace charm; process must replace performance. |
| T4 | Descriptor and copy must be structural, not campaign language or slogan. |
| T5 | First contact (Level 1) must impose zero interpretative burden. |
| T6 | The site must not be playful, dramatic, aggressive, heroic, luxury-driven, or trend-based. |

### Behavioral Constraints

| # | Testable constraint |
|---|----------------------|
| B1 | Options must be bounded; exclusions must be explicit. |
| B2 | The site must reduce branching decisions and present finite, structured options. |
| B3 | The site must avoid excessive CTAs. |
| B4 | The site must not use persuasion as positioning. |
| B5 | Authority, responsibility, scope, financial limits, and presence must be communicated as bounded, documented, explicit, predefined, and real (not symbolic). |

### Visual & Structural Implications

| # | Testable constraint |
|---|----------------------|
| V1 | Containment must be structural (clear perimeter, internal order, deliberate structure, controlled authority), not symbolic. |
| V2 | Identity must feel built, not drawn—constructed, engineered, measured, architecturally grounded; nothing illustrated, expressive, or decorative. |
| V3 | Identity must read as monolithic: unified, closed, balanced, self-contained; fragmentation weakens authority. |
| V4 | Every form must answer: structuring space vs decorating space; if decorative, reject. |
| V5 | The site must never resemble a security company; no lock/eye/shield symbolism, monitoring energy, or defensive branding. |
| V6 | The site must not lead with softness-driven visual identity or decorative excess. |
| V7 | Accent must remain restrained, never dominant. |
| V8 | Color must reinforce containment and authority; shape first, color second. |

### Regulatory Scope Boundary

| # | Testable constraint |
|---|----------------------|
| R1 | The site must not promise or imply legal advisory, tax advisory, rental licensing verification, regulatory authority, or enforcement of compliance on behalf of public institutions. |
| R2 | Legal and regulatory compliance must be stated as the property owner's responsibility. |
| R3 | This boundary must be reflected in service structuring, website copy, FAQ, and (where applicable) contract language. |

### Prohibited Interpretations

| # | Testable constraint |
|---|----------------------|
| P1 | The site must not present Sentinel as a security company. |
| P2 | The site must not use emotional reassurance as a substitute for structure. |
| P3 | The site must not introduce ambiguity in category definition. |
| P4 | The site must not use persuasion as positioning. |

### Institutional Presence Requirements

| # | Testable constraint |
|---|----------------------|
| IP1 | The site must feel governed (administrative authority, bounded options, explicit exclusions). |
| IP2 | The site must feel calm, measured, stable, directive, and institutionally grounded. |
| IP3 | The site must reinforce repetition of structural logic, stable hierarchy, consistent visual rhythm, and procedural clarity. |

---

## STEP 2 — Coverage Table

| Constraint | Status | Evidence | Notes |
|------------|--------|----------|--------|
| **I1** System, not personality | EMBODIED | PL/EN: no "we" personality copy; hero trustAnchor "Określona odpowiedzialność. Udokumentowane procesy. Jasny zakres." / "Defined responsibility. Documented processes. Clear scope." (messages/pl.json home.hero.trustAnchor; messages/en.json same). About intro frames "operational problem" and "documented procedures, defined scope" (about.intro, about.subtext). | Copy and structure emphasize process and scope, not persona. |
| **I2** Oversight not security | EMBODIED | No lock/eye/shield imagery in components or assets (grep: no matches for lock, shield, eye as branding). FAQ mentions "alarm or security system" only as topic of coordination (messages: services.notIncluded.categories, faq). Copy uses "oversight", "nadzór", "reprezentacja", "Key Operating Parameters" (common.confidenceBar; home, services). | Oversight positioning in copy and ConfidenceBar; security only as operational topic. |
| **I3** Structural descriptor, not slogan | EMBODIED | Meta: PL "Reprezentacja właściciela na miejscu. Torrevieja + 50–70 km." (common.meta.defaultDescription); EN "Structured property oversight. Torrevieja + 50–70 km radius." Site name "Sentinel" only (common.siteName). No tagline or campaign line in hero; hero uses headline + subheadline + trustAnchor. | Descriptor is structural and geographic; no slogan in UI. |
| **I4** Not concierge / full PM | EMBODIED | Contact cannotHelp: "concierge", "full PM", "construction" listed as excluded (contact.cannotHelp.items PL/EN). About intro: "concierge services or full property management—create misaligned expectations" (about.intro). About notWhat.concierge title + errands (PL/EN). Services notIncluded categories include conciergeTitle. | Explicit exclusions in Contact and About; notIncluded in Services. |
| **I5** Governs, not expresses | PARTIAL | Copy is directive and procedural (scope rule, SLA, exclusions). No "we feel" or expressive voice in locale. "Expresses" is a voice/tonal claim; no mechanical proxy in code. | Observably directive; "does not express" is not directly testable. |
| **T1** Declarative language | EMBODIED | ConfidenceBar: "Jeśli nie jest wyraźnie wymienione w pakiecie → nie jest wliczone" / "If not explicitly listed in package → not included." Services intro: "Każdy pakiet określa zakres..." / "Each package defines...". CannotHelp: "Sentinel nie może pomóc w" / "Sentinel does not provide". | Declarative statements throughout; no hedging in key invariants. |
| **T2** No emotional-first / hospitality | EMBODIED | No "welcome", "we care", "peace of mind" as lead (hero leads with representation, oversight, scope). Grep for warmth/hospitality/emotional in messages: no matches. About subtext: "Nie działamy w oparciu o zaufanie oparte na osobowości" / "We do not operate on personality-driven trust". | Copy avoids emotional-first and hospitality framing. |
| **T3** Clarity over charm, process over performance | EMBODIED | Hero trustAnchor and ConfidenceBar state responsibility, processes, scope. Services description states "pełna przejrzystość tego, co każdy pakiet obejmuje i co wyklucza" / transparency of what is in/out. | Evidence in hero, ConfidenceBar, Services intro. |
| **T4** Structural, not campaign | EMBODIED | No campaign-style headlines or slogans in messages (hero, about, services). Headlines are descriptive ("Lokalna Reprezentacja Nieruchomości", "Pakiety Usług - Zakres i Odpowiedzialność"). | Same as I3/T5; structural headlines only. |
| **T5** Zero interpretative burden (Level 1) | PARTIAL | Level 1 in BRAND: "Sentinel / Reprezentacja właściciela na miejscu / Zajmujemy się nieruchomością pod Twoją nieobecność." PL meta has "Reprezentacja właściciela na miejscu"; EN has "Structured property oversight." Hero headline/subheadline differ from exact Level 1 sentence ("Nadzór pakietowy...", "Package-based oversight..."). | Meta and hero are clear and structural but not verbatim Level 1; burden is low but not literally "zero" as a single sentence. |
| **T6** Not playful/dramatic/aggressive/heroic/luxury/trend-based | NOT VERIFIABLE FROM CODE | No mechanical proxy for "playful" or "luxury-driven." Copy and structure are sober; no evidence of playfulness or luxury in messages or components. | Subjective; cannot be proven from code alone. |
| **B1** Bounded options, explicit exclusions | EMBODIED | ConfidenceBar scope rule (common.confidenceBar.scope). Services: notIncluded per package; cannotHelp (contact); notIncluded categories (insurance, concierge, construction, geographic, oneTime). Package structure is finite (GREEN, ORANGE, RED + addons). | Explicit in ConfidenceBar, Services, Contact. |
| **B2** Finite options, reduce branching | EMBODIED | Hero CTAs: two (Zobacz Pakiety, Jak to działa). Services single flow; Contact form after qualification (cannotHelp, service area). No open-ended "custom" or unbounded choices in primary flows. | Limited CTAs and package-based paths. |
| **B3** Avoid excessive CTAs | EMBODIED | Hero: 2 CTAs. Final CTA sections: 2 links (e.g. Contact + FAQ). No multi-CTA clutter; grep for btn-primary/btn-secondary shows bounded per section. | CTA count is low and structured. |
| **B4** No persuasion as positioning | EMBODIED | Copy states scope, exclusions, and boundaries; does not "sell" benefits beyond structure (e.g. no "best in class", "trusted by thousands"). About subtext and intro frame limits and procedures. | Positioning is definitional and boundary-based. |
| **B5** Bounded authority, documented responsibility, explicit scope, predefined limits, real presence | EMBODIED | ConfidenceBar: SLA definition, scope rule, geographic boundary. Services: SLA per package, decision limits (e.g. 300–500€), "udokumentowane procedury" in copy. About/philosophy and credibility list documented procedures, SLA, reports. | Evidence in ConfidenceBar, Services, About. |
| **V1** Containment structural not symbolic | PARTIAL | ConfidenceBar + notice-panel + package blocks use borders and sections (app/globals.css, ConfidenceBar.tsx, services vertical blocks). FULL-DOCTRINE-APPLICATION-CHECK: "ConfidenceBar equal or lesser visual weight than package blocks"; "invariant gravity moderate." | Structure is present; "symbolic" vs "structural" is not defined in code. |
| **V2** Built not drawn | NOT VERIFIABLE FROM CODE | BRAND asks for "constructed, engineered, measured, architecturally grounded." No illustration or decorative assets in codebase. Whether the whole "feels" built is subjective. | No mechanical test. |
| **V3** Monolithic | PARTIAL | FULL-DOCTRINE-APPLICATION-CHECK §6: "Container 1280px vs doctrine 1120px; multiple max-w (2xl–6xl); rounded inconsistent (rounded, rounded-r, rounded-lg, rounded-r-lg); Contact/FAQ fragmentation." Same components and tokens across PL/EN. | Some geometry drift; not fully monolithic per layout audit. |
| **V4** Containment over decoration | PARTIAL | No decorative imagery or illustration in routes; notice-panel and ConfidenceBar are containment. FULL-DOCTRINE-APPLICATION-CHECK notes unused .card, .flow, table-scannable; accent and panels structural. | Structure preferred; "decorative" not fully defined. |
| **V5** No security branding | EMBODIED | No lock/eye/shield in components or messages (grep). "Security" appears only as topic (e.g. alarm, property securing) in FAQ/Services, not as brand. | No security-company visual or positioning. |
| **V6** No softness-driven identity / decorative excess | EMBODIED | Palette and components use authority/structural tokens (globals.css post-5D-3); no soft or decorative excess in messages. FULL-DOCTRINE-APPLICATION-CHECK (pre-5D-3) already noted accent restrained. | Evidence in CSS and copy. |
| **V7** Accent restrained | EMBODIED | Post-5D-3: accent only on ConfidenceBar left hairline (Pattern A); notice-panel and focus use structural/support (doc/AUDIT context; globals.css, ConfidenceBar.tsx). No accent on buttons, links, or large surfaces. | Single micro-signature use. |
| **V8** Color reinforces containment; shape first | PARTIAL | BRAND does not specify hex; palette is defined in DECISIONS. Color used for authority, structure, boundaries. "Shape first, color second" has no code proxy. | Role-based color present; order of perception not testable. |
| **R1** No legal/tax/licensing/regulatory promise | EMBODIED | FAQ states regulatory boundary and owner responsibility in same answer: faq.sections.communication.questions.q22.answer (PL: messages/pl.json; EN: messages/en.json). No legal/tax/licensing services promised anywhere; cannotHelp and notIncluded frame operational scope only. | Explicit sentence in FAQ q22: "Zgodność prawna i regulacyjna nieruchomości pozostaje wyłączną odpowiedzialnością właściciela." / "Legal and regulatory compliance for the property remains the sole responsibility of the owner." |
| **R2** Owner responsibility stated | EMBODIED | faq.sections.communication.questions.q22.answer (PL + EN) contains: "Zgodność prawna i regulacyjna nieruchomości pozostaje wyłączną odpowiedzialnością właściciela." / "Legal and regulatory compliance for the property remains the sole responsibility of the owner." Also q12 (insurance): owners must maintain adequate coverage (faq.sections.emergencies.questions.q12). | Single explicit sentence at faq.sections.communication.questions.q22; insurance/owner responsibility at q12. |
| **R3** Boundary in copy/FAQ/services | EMBODIED | FAQ: faq.sections.communication.questions.q22.answer (PL + EN) includes BRAND §11 sentence verbatim. Services: scope/SLA/exclusions in ConfidenceBar and services copy; no legal/tax offerings. Contact: cannotHelp lists operational exclusions. | Regulatory boundary sentence in FAQ Communication & Policies (Komunikacja i Polityki); scope reflected in services and contact. |
| **P1** Not security company | EMBODIED | Same evidence as I2, V5. | |
| **P2** No emotional reassurance as substitute for structure | EMBODIED | About subtext and intro; hero trustAnchor; no "don't worry" or reassurance-first copy. | Structure leads; reassurance not substituted. |
| **P3** No ambiguity in category | EMBODIED | ConfidenceBar + Services + Contact define oversight, packages, exclusions. CannotHelp and notIncluded make category explicit. | Category clear from structure and copy. |
| **P4** No persuasion as positioning | EMBODIED | Same as B4. | |
| **IP1** Feel governed | PARTIAL | ConfidenceBar before CTAs; exclusions before form; package hierarchy. FULL-DOCTRINE-APPLICATION-CHECK: "ConfidenceBar visually moderate." Governed feel is perceptual. | Structure supports it; not mechanically provable. |
| **IP2** Calm, measured, stable, directive | PARTIAL | Copy is declarative and procedural; no aggressive or playful tone. "Calm/measured" is tone; no code metric. | Observably directive; calm/measured not testable. |
| **IP3** Repetition, hierarchy, rhythm, procedural clarity | PARTIAL | ConfidenceBar repeated on operational pages; H1/H2/H3 and section order consistent. FULL-DOCTRINE-APPLICATION-CHECK §3: H1/H2/H3 drift across pages (text-4xl, text-3xl overrides). Section spacing 64/80/96px, not 120px (FULL-DOCTRINE-APPLICATION-CHECK §2). | Rhythm and hierarchy partially consistent; spacing and heading scale drift. |

---

## STEP 3 — Safe-Skip Risk Areas

| Risk area | Code / audit reference | Why safe-skip |
|-----------|------------------------|----------------|
| **Section spacing** | FULL-DOCTRINE-APPLICATION-CHECK §2: "No 120px token; dominant scale 64/80/96px." globals.css `section { padding: 5rem 0 }` overridden by Tailwind py-* on pages. | Doctrine (LAYOUT §7) specifies 120px; implementation uses a different scale. Not enforced by token. |
| **Heading hierarchy** | FULL-DOCTRINE-APPLICATION-CHECK §3: H1 overridden to text-4xl font-semibold on Services, Contact, FAQ, How It Works; H2/H3 size and margin vary by page. | BRAND implies "stable hierarchy"; no explicit token or rule in BRAND. Drift is in implementation, not doctrine. |
| **Regulatory boundary wording** | BRAND §11: "This boundary must be reflected consistently across... Website copy... FAQ." No grep hit for "legal advisory", "tax advisory", "regulatory compliance remains the sole responsibility" in messages. | Doctrine requires reflection; implementation reflects by omission and insurance/owner responsibility in FAQ, but no single locked sentence. |
| **Level 1 first contact** | BRAND §8 Level 1: exact sentence "Sentinel / Reprezentacja właściciela na miejscu / Zajmujemy się nieruchomością pod Twoją nieobecność." PL meta has first two; hero uses different wording. | Doctrine gives exact Level 1 text; site uses equivalent structural message, not verbatim. |
| **Monolithic geometry** | FULL-DOCTRINE-APPLICATION-CHECK §6: container 1280px vs 1120px; multiple max-w; inconsistent rounded; Contact (and previously FAQ) fragmentation. | BRAND §5.2 requires monolithic presence; layout doc and implementation diverge; no single geometry token. |
| **Invariant gravity** | FULL-DOCTRINE-APPLICATION-CHECK §4: "ConfidenceBar equal or lesser visual weight than package blocks." Post-5D-3 accent only on ConfidenceBar (Pattern A). | BRAND implies structural law; ConfidenceBar is single invariant but weight is "moderate," not heavy—doctrine not mechanically enforced. |

---

## STEP 4 — Ambiguities or Under-Specified Areas

| Area | BRAND quote / section | Why not mechanically verifiable | Optional clarification (max 2–3 lines) |
|------|------------------------|---------------------------------|----------------------------------------|
| **"Operates as a system, not a personality"** | §1 "It operates as a system, not a personality." | "Personality" has no code proxy; voice and structure can be checked, but the line between system and personality is interpretive. | E.g. "No first-person emotional claims; no 'we believe' or 'we care' as differentiators; differentiator = process and scope only." |
| **"Sentinel does not express. Sentinel governs."** | §1 | "Expresses" vs "governs" is tonal/behavioral; no automated test. | E.g. "Copy is directive and boundary-setting; it does not state opinions, feelings, or aspirations." |
| **"Must feel governed"** | §4.2 "Sentinel must feel governed." | "Feel" is perceptual; structure and placement can be evidenced, not the feeling. | Omit or: "Invariant block (ConfidenceBar) precedes primary CTAs on all operational pages; exclusions precede form." |
| **"Hardness level: 7/10 disciplined"** | §5.5 | No scale or metric; purely interpretive. | Leave as-is or define 1–2 concrete proxies (e.g. no exclamation marks, no promotional adjectives). |
| **"Nothing may feel illustrated, expressive, or decorative"** | §5.1 | "Feel" and "decorative" are subjective; absence of imagery is testable, "feel" is not. | E.g. "No illustration or illustration-style assets; no decorative patterns or non-structural imagery." |
| **"If removal increases clarity → remove"** | §10 | Structural reduction is a design rule; no automated clarity metric. | Leave as design principle; no code proxy. |
| **Emotional outcome "This is handled properly"** | §7 | Internal reaction cannot be measured from code. | Not testable; leave as intent. |

---

## STEP 5 — Final Summary

### TOP 5 GAPS (Doctrine-to-site mismatches)

1. **Regulatory scope boundary not stated verbatim** — BRAND §11 requires the boundary "reflected consistently" and that "Legal and regulatory compliance remains the sole responsibility of the property owner." FAQ states owner responsibility for insurance; no single, explicit sentence that legal/regulatory compliance is the owner's responsibility across copy or FAQ.
2. **Level 1 first contact not verbatim** — BRAND §8 Level 1 specifies exact wording ("Zajmujemy się nieruchomością pod Twoją nieobecność" etc.). Meta and hero use equivalent structural message (reprezentacja, nadzór, scope) but not the exact Level 1 sentence.
3. **Section spacing scale** — LAYOUT §7 (spacing doctrine) specifies Section 120px; implementation uses 64/80/96px and no 120px token. BRAND implies authority through structure; spacing is part of that.
4. **Heading hierarchy drift** — FULL-DOCTRINE-APPLICATION-CHECK §3: H1/H2/H3 size and weight vary by page (overrides). BRAND §4.5/IP3 require stable hierarchy and consistent rhythm.
5. **Monolithic geometry** — FULL-DOCTRINE-APPLICATION-CHECK §6: container width, multiple max-w scales, and inconsistent rounded corners. BRAND §5.2 requires monolithic presence; fragmentation weakens authority.

### TOP 5 STRUCTURAL RISKS (Where brand could drift over time)

1. **Copy additions without doctrine check** — New copy (e.g. new FAQ, new section) could introduce emotional or campaign language; no automated check that every new string stays within "structural, declarative, no persuasion."
2. **Regulatory boundary dilution** — Without a locked "regulatory compliance is owner's responsibility" line in a single source (e.g. FAQ or About), future edits could omit or soften the boundary.
3. **CTA proliferation** — B3 is currently met (bounded CTAs). Adding more CTAs per section or new entry points could violate "avoid excessive CTAs" and "finite options."
4. **Invariant weight and placement** — ConfidenceBar placement is consistent; if new pages add content before ConfidenceBar or duplicate invariants with different styling, "repetition of structural logic" and single invariant could erode.
5. **Palette and accent creep** — Post-5D-3 accent is limited to ConfidenceBar (Pattern A). Future use of accent on new components (e.g. new panels, links) would violate "accent restrained, never dominant."

### NON-NEGOTIABLES (Audit of PL and EN)

| Item | PL | EN | Evidence |
|------|----|----|----------|
| Structural descriptor / no slogan | Yes | Yes | common.meta.defaultDescription; common.siteName; hero headlines structural. |
| Oversight not security | Yes | Yes | No security branding; oversight/nadzór/reprezentacja in copy. |
| Concierge/PM exclusions | Yes | Yes | contact.cannotHelp; about.intro; services.notIncluded. |
| ConfidenceBar (scope/SLA/area) | Yes | Yes | common.confidenceBar; same component on operational pages. |
| Bounded options, explicit exclusions | Yes | Yes | Services notIncluded, cannotHelp, ConfidenceBar scope. |
| No emotional-first / hospitality lead | Yes | Yes | Hero and About copy; no warmth/hospitality in messages. |
| Declarative language in invariants | Yes | Yes | ConfidenceBar and key service copy in both locales. |
| Regulatory boundary verbatim | Yes | Yes | faq.sections.communication.questions.q22.answer (PL + EN): "Zgodność prawna i regulacyjna nieruchomości pozostaje wyłączną odpowiedzialnością właściciela." / "Legal and regulatory compliance for the property remains the sole responsibility of the owner." |

---

**Evidence only.** Where evidence was insufficient, status is PARTIAL or NOT VERIFIABLE FROM CODE, and the table states so. No redesign or business-rule changes proposed.

— End of AUDIT-BRAND-COVERAGE —

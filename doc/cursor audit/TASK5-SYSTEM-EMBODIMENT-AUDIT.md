# TASK 5 — SYSTEM EMBODIMENT AUDIT

**MODE: AUDIT | NO MODIFICATIONS**  
**Evidence:** Code structure, locale content, globals.css, components. Post Wave 2C. No runtime viewport; evaluation inferred from implementation.  
**Mandatory read:** BRAND.md, DECISIONS.md, LAYOUT COMPOSITION.md, COPY DISCIPLINE CODEX.md, SERVICE-STRUCTURING.md, EN-ADAPTATION-LAYER.md, STRUCTURAL-AUDIT-PHASE2-REPORT.md, BRAND-FORENSIC-AUDIT-REPORT.md, MICRO-AUDIT-STRUCTURAL-RHYTHM-REPORT.md.

---

## Audit dimensions (diagnosis only)

### 1️⃣ 3-Second Authority Test

**Question:** Open Home (desktop). Without reading copy deeply: does it feel structured, controlled, institutional, non-negotiable — or clean service website, polished but light, slightly marketing-adjacent?

**Evidence used:** Home structure (hero → trustAnchor → ConfidenceBar → CTAs); section alternation (light/alt); headline/subheadline/trustAnchor copy; header (sticky, bg-authority); spacing (py-16/24, max-w-4xl); no hero imagery; CTAs "Zobacz Pakiety", "Jak to działa".

**Score: 7/10**

**Justification:** Structure supports authority: single H1, declarative trustAnchor ("Określona odpowiedzialność. Udokumentowane procesy. Jasny zakres."), ConfidenceBar before any CTA, alternating sections, header in authority colour. Copy is oversight-framed ("Nadzór pakietowy", "reprezentacja"). What limits a higher score without a live viewport: hero is one block with two CTAs; section spacing is py-16/20 (64/80px) rather than doctrine 120px; first impression depends on type scale and contrast in situ. From code and tokens alone it reads as structured and institutional rather than light or marketing-led; it is not yet "non-negotiable" in the sense of a single, unmistakable authority block.

---

### 2️⃣ Category Displacement Test

**Question:** After scanning Home + Services, does the site successfully displace "property management" without explicitly repeating "we are not property management"? Is representation/oversight felt as a category shift?

**Evidence used:** Home hero "Lokalna Reprezentacja Nieruchomości"; subheadline "Nadzór pakietowy"; problem title "Wyzwanie nieruchomości bez lokalnej reprezentacji"; package names "Nadzór nad nieruchomością", "Nadzór + Dostęp", "Pełna Reprezentacja"; Services intro scope/SLA framing; About philosophy (negative list: "pełne zarządzanie nieruchomością"); Contact cannotHelp and service area before form.

**Result: Partial**

**Justification:** Representation and oversight are the dominant frame: "reprezentacja", "nadzór", "bez lokalnej reprezentacji", "Pełna Reprezentacja". The site does not repeatedly say "we are not property management." About names "pełne zarządzanie nieruchomością" once in a negative list (traditional models that create wrong expectations). So displacement is present and not reliant on a defensive slogan. It is only partial because "zarządzanie" still appears in About (qualityControl: "zarządzanie relacjami") and in Services (e.g. red.suitableItems "aktywnego zarządzania") in operational contexts; the primary category is clearly oversight/representation, but the word "zarządzanie" is not fully absent, so the shift is felt but not lexically complete.

---

### 3️⃣ Invariant Gravity Test

**Question:** Do ConfidenceBar + SLA + scope boundary feel like structural law / system constraint, or like an informational notice? Evaluate visual weight, placement, repetition power.

**Evidence used:** ConfidenceBar component (single source, same keys); placement (after intro on Home, Services, How It Works, FAQ, Contact); styling (bg-surface-card, border-t-2 border-t-accent, section-label, three cells); copy ("Torrevieja + 50–70km; bez wyjątków", "Czas reakcji/decyzji, nie gwarantowany czas rozwiązania", "Jeśli nie jest wyraźnie wymienione w pakiecie → nie jest wliczone"); repetition (same component on five operational pages).

**Result: Moderate**

**Justification:** Invariants are structurally consistent: one component, one key set, same typography (section-label, text-sm body), accent as top border only, repeated in the same position in the reading order. They read as system constraints (explicit boundaries, no exceptions, if-not-listed-not-included). Gravity is moderate rather than strong because the ConfidenceBar is a single card with three cells and a light border; it is not a full-width authority band or a repeated mantra. Placement and repetition support "structural law"; visual weight is contained (card, rounded, no full-bleed authority). So: system constraint, but not maximal gravity.

---

### 4️⃣ Visual Weight & Density

**Question:** Section spacing vs authority feel; typography weight; white space; color restraint; block containment. Does it feel Mediterranean institutional / architectural / monolithic — or modern minimal SaaS / clean but light?

**Evidence used:** globals.css (authority #1a2332, surfaces warm mineral, accent muted; section-label uppercase; headings serif, authority colour; btn-primary authority fill; notice-panel border-accent); section py-16/20/24; container max-widths; Services vertical blocks (border-l-4 package-*, rounded-r); no three-column table; Footer/Header bg-authority.

**Result: Institutional**

**Justification:** Palette is restrained (authority dark, base light, accent for lines/labels only; no gold on CTAs). Typography is weighted (serif headings, section-label uppercase, font-semibold). Sections use consistent padding and alternation; Services uses containment blocks with left-border orientation. Header and footer are authority-backed; primary CTA is authority-colour. It does not read as cold (authority is present) or light/SaaS (no generic clean-minimal feel); it reads as institutional. "Mediterranean institutional" or "architectural" would require a live view to confirm (material, depth, local context). From code and tokens: institutional, not sovereign (no single overwhelming authority block) and not light.

---

### 5️⃣ Psychological Alignment Test

**Question:** Primary client: absentee owner, possibly affluent, risk-averse, wants clarity and boundaries, not friendliness. Does the site attract the correct client and quietly repel the wrong one without aggressive disqualification?

**Evidence used:** Qualification before conversion (Contact: service area + cannotHelp before form); ConfidenceBar and scope rule; package boundaries and "not included" sections; no reassurance copy ("Bez zobowiązań", "Gotowy zabezpieczyć" removed); cannotHelp "Sentinel nie jest odpowiednią usługą" and proceedText; geographic and one-time exclusions; acknowledgment checkbox on form.

**Result: Aligned**

**Justification:** The site exposes boundaries early (geographic, scope, SLA, "if not listed not included") and places disqualification (service area, cannot help) before the form. Tone is procedural and boundary-aware; emotional reassurance has been removed from Home. The correct client gets clarity and limits; the wrong client sees exclusions and "not appropriate" without a hard sell. No aggressive disqualification language; the framing is factual (outside area, one-time, full PM, concierge, construction). Psychological alignment with a risk-averse, clarity-seeking primary segment is achieved.

---

### 6️⃣ Inevitable System Test

**Question:** If this site disappeared, could a competitor recreate its structure easily? Does it feel derivative / standard service architecture / easily copyable — or an inevitable extension of a defined operating system?

**Evidence used:** Doctrine lock (DECISIONS, BRAND, LAYOUT, COPY CODE, SERVICE-STRUCTURING); fixed hierarchy (Identity → Mechanism → Scope → Evidence → Action); single invariant component (ConfidenceBar); vertical containment (no SaaS table); qualification-before-conversion; package differentiation by authority/inspection/SLA only; geographic and scope invariants; PL/EN parity and locked terminology.

**Result: Structured**

**Justification:** The site is not generic: it enforces a specific order (ConfidenceBar before CTAs, form after disqualification), a single source for invariants, and a strict package model (no lifestyle tiers). A competitor could copy "property oversight" and a comparison table but would not naturally reproduce the same hierarchy, the same invariant block, or the same qualification flow without adopting the doctrine. It is not derivative (structure is determined by doctrine). It is not yet "inevitable" in the sense of a single, unmistakable system signature that cannot be mistaken for another — that would require a live, holistic impression (e.g. typography, symbol, motion, full layout in context). From implementation alone: structured and doctrine-driven, not standard and not easily copyable without the same rules.

---

## Final output

### Embodiment score: **7/10**

- Authority is present and structural; not cold, not light.
- Gaps: no live viewport for 3-second and visual-weight nuance; category displacement only partial (lexical residue of "zarządzanie"); invariant gravity moderate; system feel "structured" not "inevitable" from code alone.

### Strongest dimension

**Psychological alignment.** Qualification before conversion, boundaries before action, factual disqualification without aggression, and removal of reassurance copy align the site with the primary segment (risk-averse, clarity-seeking) and quietly filter misfits.

### Weakest dimension

**Category displacement.** Representation/oversight is the dominant frame and "we are not property management" is not repeated, but "zarządzanie" still appears in About and Services in operational phrases. The shift is felt but not lexically complete.

### Top 5 embodiment gaps (if any)

1. **Invariant gravity is moderate, not strong.** ConfidenceBar is a card with three cells and a thin top accent; it could read as "informational" under a quick scan. Stronger gravity would require greater visual weight or repetition (e.g. authority band, or repeated one-line invariant).
2. **Category displacement is partial.** "Zarządzanie" remains in qualityControl and suitableItems; full displacement would avoid the term outside explicit negation ("not full property management").
3. **3-second authority is inferred, not observed.** Score relies on structure and tokens; live viewport could shift the impression (e.g. type scale, contrast, density in context).
4. **Section spacing does not match LAYOUT §7.** Implementation uses py-16/20/24 (64/80/96px); doctrine specifies 120px section spacing. Consistency is internal; alignment with doc would reinforce authority rhythm.
5. **"Inevitable" system feel is not verifiable from code alone.** Structured and doctrine-driven is evident; whether the whole reads as one unmistakable operating system requires live experience.

---

### Clear verdict: Is Task 5 complete?

**Yes.**

The website embodies the doctrine to a sufficient degree for Task 5: hierarchy is enforced, qualification precedes action, invariants are consistent, tone is institutional and boundary-aware, and the structure is determined by locked doctrine rather than generic patterns. Remaining gaps (invariant gravity, lexical category residue, spacing scale, and the ceiling on "inevitable" without live view) are embodiment refinements, not failures to embody. No solutions, fixes, or redesign ideas are proposed; this audit is diagnosis only.

---

*End of Task 5 System Embodiment Audit.*

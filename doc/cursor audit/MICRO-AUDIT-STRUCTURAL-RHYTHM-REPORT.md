# MICRO-AUDIT — Structural Rhythm & Invariant Repetition

**MODE: AUDIT | NO MODIFICATIONS**  
**Evidence:** Code structure and component placement (app/[locale]/*, components). Post Wave 2A + 2B.  
**Mandatory read:** LAYOUT COMPOSITION.md, DECISIONS.md, BRAND.md, COPY DISCIPLINE CODEX.md, QA.md (AUDIT protocol).

---

## 1) ConfidenceBar Rhythm (Invariant Placement)

| Page | ConfidenceBar Present | Placement Consistent | Notes |
|------|----------------------|----------------------|--------|
| Home | Yes | Yes | Intro (headline, subheadline, trustAnchor) → ConfidenceBar → hero CTAs. Evidence before Action. |
| Services | Yes | Yes | Intro (headline, description, framework) → ConfidenceBar → footer note → oversight blocks. |
| How It Works | Yes | Yes | Intro (headline, description, processOverview) → ConfidenceBar → Step 0… |
| FAQ | Yes | Partial | H1 → policy notice → ConfidenceBar → search → content. Policy notice sits between intro and ConfidenceBar (not strictly “intro → ConfidenceBar → content”). |
| Contact | Yes | Yes | Intro (headline, description, responseCommitment) → ConfidenceBar → direct contact / form. |
| About | No | — | Absent. Justified: supporting/institutional page; Phase 2 noted absence as acceptable for About. |
| Terms | No | — | Justified: legal placeholder page. |
| Privacy | No | — | Justified: legal placeholder page. |
| not-found | No | — | Justified: error page; minimal identity only. |

**Result:** PASS with note. ConfidenceBar appears on all operational (non-legal, non-about, non-error) pages. Placement is intro → ConfidenceBar → content on Home, Services, How It Works, Contact. FAQ inserts policy notice before ConfidenceBar; still Evidence before main content and CTA.

---

## 2) Invariant Recognition

| Invariant | Component/Key Source | Consistent Across Pages | Notes |
|-----------|---------------------|-------------------------|--------|
| Geographic boundary | ConfidenceBar → `common.confidenceBar.serviceArea` (label + text) | Yes | Same component, same keys (Torrevieja + 50–70km; no exceptions). Footer also has `common.footer.serviceAreaText` — same value. |
| SLA definition | ConfidenceBar → `common.confidenceBar.sla` (label + text) | Yes | “Reaction/decision time, not guaranteed resolution time” — single source. Services also shows `comparison.footerNote` (same idea) in intro. |
| Scope boundary | ConfidenceBar → `common.confidenceBar.scope` (label + text) | Yes | “If not explicitly listed in package → not included” — single source. |
| Typographic weight | ConfidenceBar: `section-label` (h3), labels `section-label text-muted`, body `text-sm text-body` | Yes | Same classes; one component. |
| Spacing container | ConfidenceBar: `py-8 px-6 mb-8`, `border-t-2 border-t-accent`, `rounded-lg` | Yes | Identical wherever used. |

**Result:** PASS. Invariants are one component (ConfidenceBar), one key set (`common.confidenceBar`), same styling and spacing across Home, Services, How It Works, FAQ, Contact.

---

## 3) Section Rhythm & Density

| Page | Rhythm Coherent | Density Acceptable | Notes |
|------|------------------|--------------------|--------|
| Home | Yes | Yes | Alternation light/alt (py-16 md:py-24, py-16 md:py-20). Sections bounded; no dense wall. |
| Services | Yes | Yes | Intro py-16 md:py-20; single section for three blocks (space-y-12); then py-20 for add-ons, notIncluded, operations, selection, CTA. Alternation preserved. |
| How It Works | Yes | Yes | Strict py-16 md:py-20 alternation; many sections but clear step structure. |
| FAQ | Yes | Yes | Single container py-20; policy notice → ConfidenceBar → search → disclosure list. Dense but structured (sections + disclosure). |
| Contact | Yes | Yes | py-20 / py-16; six sections before form, three after (direct contact, form, active clients, service area, cannotHelp). |
| About | Yes | Yes | py-20 throughout; light/alt alternation. |
| Terms | Yes | Yes | Single section, placeholder; minimal. |
| Privacy | Yes | Yes | Single section py-16 md:py-20; placeholder + current practices. |
| not-found | Yes | Yes | Centered, minimal. |

**Note:** LAYOUT §7 specifies Section spacing 120px; implementation uses py-16 (64px), py-20 (80px), py-24 (96px). Scale differs from doc but is consistent across pages.

**Result:** PASS. Rhythm coherent; no page collapses into an undifferentiated text wall; alternation used where intended.

---

## 4) Hierarchy Stability

| Page | Hierarchy Stable | Notes |
|------|------------------|--------|
| Home | Yes | Single H1 (hero.headline). H2 for sections (problem, solution, howItWorks, packages, differentiation, serviceArea, credibility, faqPreview, finalCta). H3 for principles, sub-blocks. |
| Services | Yes | Single H1 (intro.headline). H2 for green/orange/red titles, addons, notIncluded, operations, selection, cta. H3 within blocks. |
| How It Works | Yes | Single H1 (intro.headline). H2 for each step and CTA. H3 for sub-items. |
| FAQ | Yes | Single H1 (pageTitle). H2 for policy notice title, notAnswered. H3 for sections label. DisclosureBlock headings carry section title. |
| Contact | Partial | H1 in intro. H2 for directContact, form, activeClients, serviceArea, cannotHelp use **text-2xl**; other pages use **text-3xl** for section H2. Same semantic level, different size. |
| About | Yes | H1 pageTitle. H2 text-3xl for philosophy, geographic, system, resources, notWhat, accountability, nextSteps. |
| Terms | Yes | H1 pageTitle. H2 for placeholder title. |
| Privacy | Yes | H1 pageTitle. H2 for placeholder and currentPractices. |
| not-found | Yes | Single H1 (title). |

**Result:** FAIL (one break). Contact uses H2 at text-2xl where other operational pages use text-3xl for section-level headings; hierarchy logic is stable but typographic weight of H2 is inconsistent.

---

## 5) Cross-Page Consistency

| Dimension | Consistent | Notes |
|------------|------------|--------|
| CTA placement (CTAs last, not first) | Yes | Home: hero CTAs after ConfidenceBar; final CTA section last. Services, How It Works, About, FAQ: primary CTA in final section. No CTA precedes structural clarity. |
| Disqualification before action | No | **Contact:** Form (action) is Section 3. “Cannot help” and “Service area” (disqualification / boundary) are Sections 7 and 8, after the form. Reading order is intro → ConfidenceBar → direct contact → **form** → active clients → service area → cannotHelp. Doctrine: qualification before conversion; disqualification should precede form. |
| Boundary statements phrasing and placement | Yes | Scope rule and geographic rule appear in ConfidenceBar (same wording). “If not listed, not included” and Torrevieja + 50–70km repeated in copy where relevant. Footer serviceAreaText consistent. |

**Result:** FAIL (one break). Contact places the contact form before the full disqualification blocks (service area reminder, cannotHelp); rest of cross-page consistency holds.

---

## Final Output

### 1. Micro-audit score: **7/10**

- ConfidenceBar rhythm: pass (with FAQ note).
- Invariant recognition: pass.
- Section rhythm & density: pass.
- Hierarchy stability: fail (Contact H2 size).
- Cross-page consistency: fail (Contact form before disqualification).

Deductions: −1 for Contact H2 inconsistency, −2 for Contact form-before-disqualification (structural hierarchy).

---

### 2. Top 5 cohesion breaks

1. **Contact — Disqualification after action.** CannotHelp and Service Area (disqualification / boundary) appear after the contact form. Doctrine (LAYOUT §4.1, qualification over conversion): structural clarity and disqualification should precede action. Form is the primary action; it is reached before full “not appropriate client” and geographic reminder.
2. **Contact — H2 typographic inconsistency.** Section headings (directContact, form, activeClients, serviceArea, cannotHelp) use `text-2xl`; other operational pages (Services, How It Works, About) use `text-3xl` for section H2. Same level, different visual weight.
3. **FAQ — ConfidenceBar placement.** Order is H1 → policy notice → ConfidenceBar → search → content. “Intro → ConfidenceBar → content” is partially broken by the policy notice between intro and ConfidenceBar; minor.
4. **Section spacing scale vs LAYOUT.** LAYOUT §7 specifies Section 120px; implementation uses py-16/py-20/py-24 (64/80/96px). Consistent in code but not aligned to doctrine scale.
5. **About / Terms / Privacy / not-found — No ConfidenceBar.** Documented and justified (supporting, legal, error). No break if absence is intentional; listed only as potential “invariant repetition” gap for About.

---

### 3. Go / No-Go for Task 6 opening

**No-Go** until the Contact cohesion breaks are resolved.

Reason: The Contact page is the primary action surface. Having the form before disqualification (cannotHelp, service area reminder) contradicts “qualification over conversion” and “no CTA before structural clarity” (form functions as the main CTA). The H2 size inconsistency is secondary but weakens cross-page hierarchy. Resolve (1) form vs disqualification order and (2) Contact H2 size vs other pages before opening Task 6.

---

*End of Micro-Audit. No modifications made. No fixes applied.*

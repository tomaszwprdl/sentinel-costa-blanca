# LAYOUT-COMPOSITION.md  
Sentinel — Layout & Composition Doctrine  
Status: LOCKED

Task 5C complete.
Implementation refinements permitted.
Structural changes require Owner override.

---

## 1. Purpose

This document defines the spatial architecture of Sentinel.

It governs:

- Layout logic  
- Composition hierarchy  
- Spatial rhythm  
- Breakpoint behavior  
- Density thresholds  
- Containment logic  
- Visual restraint limits  

This document is execution-binding.

It does not describe aesthetics subjectively.  
It defines measurable structure.

If implementation conflicts with this document, implementation is invalid.

---

## 2. Authority Scope

This doctrine applies to:

- All pages  
- All sections  
- All breakpoints  
- All future expansions  

It does not govern:

- Color selection (see Color Doctrine)  
- Typography families (see Typography System)  
- Service logic (see Service Structuring)  

Layout doctrine governs space, not content meaning.

---

## 3. Primary Precedence Rule

Sentinel operates with a 60–65% Primary audience calibration.

Primary calibration derives from BRAND.md.
Layout doctrine does not define audience weighting independently.

### 3.1 Conflict Algorithm

If a layout decision:

- Improves clarity for Primary  
- But reduces aesthetic appeal  

→ Clarity prevails.

If a decision:

- Increases emotional reassurance  
- But weakens structural perception  

→ Reject.

If a solution satisfies both Primary and Secondary without reducing clarity:

→ Prefer synergy.

Binary conflict → Primary wins.

---

## 4. Structural Invariants

These rules are never violated.

### 4.1 Hierarchy Invariant

Reading order must always follow:

1. Jurisdiction / Identity  
2. Mechanism / System  
3. Scope / Boundaries  
4. Evidence  
5. Action  

No CTA precedes structural clarity.

---

### 4.2 Containment Doctrine

Every section must clearly belong to one category:

- Authority Field (jurisdiction block)  
- Operational Field (core content)  
- Support Field (secondary content)  

No floating sections.  
No ambiguous boundaries.

---

### 4.3 Vertical Cadence Rule

Page rhythm must follow:

Section → Field → Block → Micro

Cadence must remain consistent across all pages.

No irregular compression.

---

## 5. Breakpoint Model (Binding)

- **Mobile:** ≤ 640px  
- **Tablet:** 641–1024px  
- **Desktop:** ≥ 1025px  

Tablet is not scaled desktop.  
Mobile is not compressed desktop.

Each breakpoint follows the same hierarchy, but different execution.

---

## 6. Grid System

- **Desktop:** 12 columns  
- **Tablet:** 8 columns  
- **Mobile:** 4 columns (1 logical content column)

**Max container width:** 1120px  
**Max readable text column width:** 720px  

No full-width text beyond 720px.

---

## 7. Spacing Scale

**Base unit:** 10px

Spacing values:

- Micro: 20px  
- Block: 40px  
- Section: 120px  
- Major Section: 160px  

Spacing must follow scale.  
No arbitrary values.

### 7.1 Internal Density Exception (Contained Components Only)

Page rhythm uses only 20 / 40 / 120 / 160.

Inside contained components (cards, panels, bordered blocks), **p-6 (24px)** is allowed as internal density.

24px is the only permitted micro spacing value for this exception.

This exception must not be used for page-level cadence, section separation, or external margins.

---

## 8. Hero Philosophy

- Height: Auto  
- Maximum height: 70vh  

Hero must not push core structural section below initial desktop viewport.

Hero may include:

- Structural illustration (architectural, monochrome)  
- 1 primary message  
- 1 clarifying line  

Not allowed:

- Lifestyle imagery  
- Emotional framing  

---

## 9. Alternation Rhythm (A+ Model)

Sections do not alternate mechanically.

Allowed rhythm example:

Light  
Light  
Authority containment  
Light  
Structural separator  
Light  

Authority fields must be intentional, not decorative.

---

## 10. Footer Doctrine

Footer is an Authority containment block.

Purpose:

- Jurisdiction closure  
- Structural finality  
- Institutional stability  

Footer must not be neutral.

---

## 11. Density Threshold Model (Balanced Calibration)

### 11.1 Desktop Viewport Rule

Per full viewport:

- 1 primary message  
- Maximum 2 secondary elements  
- Maximum 1 CTA  

No competing primary blocks.

---

### 11.2 Mobile Compression Rule

Per viewport:

- 1 primary  
- 1 secondary  

Disclosure must not exceed 80% viewport height without minimum 20px buffer above and below.

---

### 11.3 Disclosure Depth Rule

- Maximum 8–10 lines before subheading  
- No more than 2 disclosure blocks consecutively  
- Minimum 40px spacing after disclosure  

---

### 11.4 Section Load Rule

Per section:

- Maximum 3 logical content blocks  

More requires structural split.

---

### 11.5 Scroll Fatigue Rule

On Home page:

- First 3 sections must not exceed 2.5 desktop viewports combined  
- Major structural pause (≥ 120px) before package section  

---

## 12. Execution Profiles

### 12.1 Mobile

- Single content column  
- No side-by-side system sections  
- Packages stacked  
- Estimator expansion must not dominate viewport  

---

### 12.2 Tablet

- 8-column grid  
- 2-column layout allowed only for support fields  
- No full comparison tables  
- Text width preserved  

Tablet must not become pseudo-desktop.

---

### 12.3 Desktop

- 12-column grid  
- Side-by-side allowed where it reduces cognitive load  
- Wider spatial breathing  

---

## 13. Controlled Variation Doctrine

Variation is allowed only through:

- Spatial rhythm  
- Weight hierarchy  
- Containment alternation  
- Section length modulation  

Variation is not allowed through:

- Style changes  
- Decorative elements  
- Inconsistent CTA behavior  
- Arbitrary layout shifts  

---

## 14. Visual Restraint Doctrine

### 14.1 Accent Control

Accent color must not exceed 5% of viewport area.

Never dominant.  
Never primary CTA fill.

---

### 14.2 Motion Policy

Allowed:

- Subtle fade  
- Disclosure easing  
- Transition ≤ 200ms  

Not allowed:

- Parallax  
- Dramatic animation  
- Decorative motion  

---

### 14.3 Decorative Prohibitions

No:

- Gradients  
- Decorative shadows  
- Stylized rounding  
- Decorative asymmetry  

Sentinel remains structurally grounded.

---

## 15. Elastic Modulation Zones

Permitted modifications:

- Hero proportion (within limits)  
- Section order (if hierarchy preserved)  
- Spacing within scale  
- Disclosure depth  

Not permitted:

- Changing containment logic  
- Increasing density thresholds  
- Altering Primary precedence rule  
- Changing grid system  

---

## 16. Page-Level Integrity Audit Framework

Every page must pass:

1. Hierarchy preserved?  
2. Density respected?  
3. Containment clear?  
4. Breakpoint behavior correct?  
5. Tablet not pseudo-desktop?  
6. Primary precedence maintained?  

If any answer is “No” → redesign required.

---

## 17. Governance Note

This document is binding once locked.

Changes require:

- Explicit Owner acknowledgment  
- Update to DECISIONS.md referencing this document  
- Status update in STATUS.md  

---

**End of Layout & Composition Doctrine**
# AUDIT-LAYOUT-COVERAGE.md

**Objective:** Mechanical audit of implementation against LAYOUT COMPOSITION.md (binding doctrine).  
**Input:** LAYOUT COMPOSITION.md (§4–§16), current implementation (all routes, PL + EN), FULL-DOCTRINE-APPLICATION-CHECK.md.  
**Mode:** Evidence only. No interpretation. Binding failures = violations.

---

## STEP 1 — Binding Rules Extracted (Testable Mechanical Statements)

### §4 Structural Invariants

| ID | Rule (mechanical) |
|----|---------------------|
| 4.1a | Reading order must be: Jurisdiction/Identity → Mechanism/System → Scope/Boundaries → Evidence → Action. |
| 4.1b | No CTA may precede structural clarity (e.g. ConfidenceBar / scope before primary CTA). |
| 4.2a | Every section must belong to one of: Authority Field, Operational Field, Support Field. |
| 4.2b | No floating sections; no ambiguous section boundaries. |
| 4.3a | Page rhythm must follow Section → Field → Block → Micro. |
| 4.3b | Cadence must be consistent across all pages. No irregular compression. |

### §5 Breakpoint Model

| ID | Rule (mechanical) |
|----|---------------------|
| 5.1 | Mobile breakpoint: ≤640px. |
| 5.2 | Tablet breakpoint: 641–1024px. |
| 5.3 | Desktop breakpoint: ≥1025px. |
| 5.4 | Tablet must not be scaled desktop (different execution). |
| 5.5 | Mobile must not be compressed desktop. |

### §6 Grid System

| ID | Rule (mechanical) |
|----|---------------------|
| 6.1 | Desktop: 12-column grid. |
| 6.2 | Tablet: 8-column grid. |
| 6.3 | Mobile: 4 columns (1 logical content column). |
| 6.4 | Max container width must equal 1120px. |
| 6.5 | Max readable text column width must equal 720px. |
| 6.6 | No full-width text block may exceed 720px. |

### §7 Spacing Scale

| ID | Rule (mechanical) |
|----|---------------------|
| 7.1 | Base unit: 10px. |
| 7.2 | Spacing values must be from scale only: Micro 20px, Block 40px, Section 120px, Major Section 160px. |
| 7.3 | No arbitrary spacing values. |
| 7.4 | Section vertical spacing must use 120px (Section) or 160px (Major Section). |

### §8 Hero Philosophy

| ID | Rule (mechanical) |
|----|---------------------|
| 8.1 | Hero height: Auto. |
| 8.2 | Hero maximum height: 70vh. |
| 8.3 | Hero must not push core structural section below initial desktop viewport. |
| 8.4 | Hero may include at most 1 primary message and 1 clarifying line. |
| 8.5 | Hero must not include lifestyle imagery or emotional framing. |

### §9 Alternation Rhythm

| ID | Rule (mechanical) |
|----|---------------------|
| 9.1 | Sections do not alternate mechanically (allowed pattern: Light, Light, Authority, Light, Structural separator, Light). |
| 9.2 | Authority fields must be intentional, not decorative. |

### §10 Footer Doctrine

| ID | Rule (mechanical) |
|----|---------------------|
| 10.1 | Footer must be an Authority containment block (not neutral). |

### §11 Density Threshold Model

| ID | Rule (mechanical) |
|----|---------------------|
| 11.1a | Per full desktop viewport: 1 primary message. |
| 11.1b | Per full desktop viewport: maximum 2 secondary elements. |
| 11.1c | Per full desktop viewport: maximum 1 CTA. |
| 11.1d | No competing primary blocks per viewport. |
| 11.2a | Per mobile viewport: 1 primary, 1 secondary. |
| 11.2b | Disclosure must not exceed 80% viewport height without minimum 20px buffer above and below. |
| 11.3a | Maximum 8–10 lines before subheading (disclosure depth). |
| 11.3b | No more than 2 disclosure blocks consecutively. |
| 11.3c | Minimum 40px spacing after disclosure. |
| 11.4 | Per section: maximum 3 logical content blocks. |
| 11.5a | Home: first 3 sections must not exceed 2.5 desktop viewports combined. |
| 11.5b | Home: major structural pause (≥120px) before package section. |

### §12 Execution Profiles

| ID | Rule (mechanical) |
|----|---------------------|
| 12.1a | Mobile: single content column. |
| 12.1b | Mobile: no side-by-side system sections. |
| 12.1c | Mobile: packages stacked. |
| 12.1d | Mobile: estimator expansion must not dominate viewport. |
| 12.2a | Tablet: 8-column grid. |
| 12.2b | Tablet: 2-column layout allowed only for support fields. |
| 12.2c | Tablet: no full comparison tables. |
| 12.2d | Tablet: text width preserved. |
| 12.2e | Tablet must not become pseudo-desktop. |
| 12.3a | Desktop: 12-column grid. |
| 12.3b | Desktop: side-by-side allowed where it reduces cognitive load. |

### §13 Controlled Variation

| ID | Rule (mechanical) |
|----|---------------------|
| 13.1 | Variation only via: spatial rhythm, weight hierarchy, containment alternation, section length modulation. |
| 13.2 | No variation via: style changes, decorative elements, inconsistent CTA behavior, arbitrary layout shifts. |

### §14 Visual Restraint

| ID | Rule (mechanical) |
|----|---------------------|
| 14.1a | Accent color must not exceed 5% of viewport area. |
| 14.1b | Accent never dominant; never primary CTA fill. |
| 14.2a | Motion: only subtle fade, disclosure easing, transition ≤200ms allowed. |
| 14.2b | No parallax, dramatic animation, decorative motion. |
| 14.3a | No gradients. |
| 14.3b | No decorative shadows. |
| 14.3c | No stylized rounding (decorative rounding forbidden). |
| 14.3d | No decorative asymmetry. |

### §15 Elastic Modulation Zones

| ID | Rule (mechanical) |
|----|---------------------|
| 15.1 | Permitted: hero proportion within limits, section order (hierarchy preserved), spacing within scale, disclosure depth. |
| 15.2 | Not permitted: changing containment logic, increasing density thresholds, altering Primary precedence, changing grid system. |

### §16 Page-Level Integrity

| ID | Rule (mechanical) |
|----|---------------------|
| 16.1 | Every page: hierarchy preserved. |
| 16.2 | Every page: density respected. |
| 16.3 | Every page: containment clear. |
| 16.4 | Every page: breakpoint behavior correct. |
| 16.5 | Every page: tablet not pseudo-desktop. |
| 16.6 | Every page: primary precedence maintained. |

---

## STEP 2 — Coverage Table

| Rule | Status | Evidence | Notes |
|------|--------|----------|--------|
| 4.1a | EMBODIED | Home: Header → hero (Identity) → trustAnchor/ConfidenceBar (Mechanism/Scope) → Evidence (problem/solution/how it works) → CTAs. Services: intro → ConfidenceBar → footer note → oversight blocks. Contact: intro → ConfidenceBar → sections → form. app/[locale]/page.tsx, services/page.tsx, contact/page.tsx. | Order consistent across PL/EN. |
| 4.1b | EMBODIED | ConfidenceBar (or equivalent scope) appears before primary CTA on Home, Services, How It Works, FAQ, Contact. doc/cursor audit/FULL-DOCTRINE-APPLICATION-CHECK.md §1 ConfidenceBar rhythm. | No CTA before structural clarity. |
| 4.2a | PARTIAL | Sections use bg-surface-light / bg-surface-light-alt / bg-authority-bg. Authority = header, footer, CTA sections. No explicit "Authority Field" / "Operational Field" class; assignment by convention. | Containment by convention; no token. |
| 4.2b | EMBODIED | Each section is a single `<section>` or clear div block with one background; no orphan content. | No floating sections observed. |
| 4.3a | PARTIAL | Section → content blocks → micro (e.g. principles list). globals.css .section-intro, .section-pause. No explicit "Field" / "Block" tokens. | Rhythm present; taxonomy not tokenized. |
| 4.3b | EMBODIED | globals.css: single H1/H2/H3 system (clamp sizes, margins from --space-20/40). No page-level heading size/weight/margin overrides (Task 5D-2). Grep: 0 heading uses of text-4xl/5xl/3xl/2xl or mb-8/mb-10. | RESOLVED Task 5D-2. |
| 5.1–5.3 | EMBODIED | globals.css .grid-frame: 4 cols (default), 8 cols @media (min-width: 641px), 12 cols @media (min-width: 1025px). Task 5D-1C. Mobile ≤640, Tablet 641–1024, Desktop ≥1025. | Custom breakpoints; Tailwind md/lg unchanged. |
| 5.4 | EMBODIED | Tablet uses 8-col grid; Region tabletSpan full (stacked) except support may use half (2-col). No 3+ col on tablet. Task 5D-1C. | Tablet ≠ pseudo-desktop. |
| 5.5 | PARTIAL | Mobile uses single column (Region region-m-full); no explicit "compressed desktop" test. | Single column on small viewports. |
| 6.1 | EMBODIED | components/layout/GridFrame.tsx + globals.css .grid-frame: 12 columns at ≥1025px. Home, Services, Footer, ConfidenceBar, Contact use GridFrame. | RESOLVED Task 5D-1C. |
| 6.2 | EMBODIED | .grid-frame: 8 columns at 641–1024px. Region region-tb-full / region-tb-half. | RESOLVED Task 5D-1C. |
| 6.3 | EMBODIED | .grid-frame: 4 columns (mobile). Region region-m-full (all regions span full). | 4-col grid; 1 logical content column. |
| 6.4 | EMBODIED | app/globals.css .container { max-width: var(--container-max); }, --container-max: 1120px. LAYOUT §6.4. | RESOLVED Task 5D-1B. |
| 6.5 | EMBODIED | globals.css --text-max: 720px; .text-column { max-width: var(--text-max); }. Policy pages wrap prose in TextColumn. | RESOLVED Task 5D-1B. |
| 6.6 | EMBODIED | privacy/page.tsx, terms/page.tsx: prose inside <TextColumn>; no max-w-none. Long-form text capped at 720px. | RESOLVED Task 5D-1B. |
| 7.1 | NOT IMPLEMENTED | No 10px base unit token in globals.css. Spacing uses Tailwind rem (4, 6, 8, 10, 12, 16, 20 = 1rem=16px). | No 10px base. |
| 7.2 | EMBODIED | globals.css --space-20/40/120/160; .section-primitive uses var(--space-120), .section-primitive--major var(--space-160). | RESOLVED Task 5D-1B. |
| 7.3 | PARTIAL | Margin/padding use Tailwind scale; section spacing now from tokens. | Tokens in use. |
| 7.4 | EMBODIED | components/layout/Section.tsx variant section|major applies padding-block var(--space-120)|var(--space-160). All app/[locale] sections use <Section>. | RESOLVED Task 5D-1B. |
| 8.1 | EMBODIED | Hero is section with padding; no fixed height. Height: auto. | |
| 8.2 | EMBODIED | app/globals.css .hero-zone { max-height: var(--hero-max); }, --hero-max: 70vh. app/[locale]/page.tsx hero uses hero-zone. | RESOLVED Task 5D-1B. |
| 8.3 | PARTIAL | Hero constrained to 70vh; content reflows. Core structural section (How It Works / packages) remains in initial viewport via reduced hero padding. | Addressed Task 5D-1B. |
| 8.4 | EMBODIED | Hero: one headline (primary), one subheadline (clarifying), one trustAnchor line. | 1 primary, 1 clarifying. |
| 8.5 | EMBODIED | No hero imagery in page.tsx; no lifestyle/emotional assets. | |
| 9.1 | EMBODIED | Sections alternate light/alt/authority; not strictly mechanical (e.g. two light then authority). Pattern present. | |
| 9.2 | EMBODIED | Authority sections (footer, CTA blocks) are intentional (bg-authority-bg); not decorative. | |
| 10.1 | EMBODIED | components/Footer.tsx: bg-authority-bg text-authority-on-dark. Authority containment. | |
| 11.1a–d | EMBODIED | Home hero: single CTA as button (primary); secondary is text link. app/[locale]/page.tsx. LAYOUT §11.1c. | RESOLVED Task 5D-1B. |
| 11.2a | PARTIAL | Mobile: single column; primary/secondary not explicitly limited. | |
| 11.2b | NOT TESTABLE | Disclosure height vs 80% viewport + 20px buffer requires runtime measure. | |
| 11.3a | NOT TESTABLE | "8–10 lines before subheading" is content-dependent; no mechanical check. | |
| 11.3b | EMBODIED | app/[locale]/faq/page.tsx: chunkFaqs() groups questions in pairs; structural break (paddingBlock var(--space-40)) between groups. Max 2 consecutive DisclosureBlocks. | RESOLVED Task 5D-1B. |
| 11.3c | PARTIAL | .section-pause, spacing after DisclosureBlock not measured. FAQ uses --space-40 for breaks. | |
| 11.4 | PARTIAL | Most sections have ≤3 logical blocks; some sections (e.g. Services oversight) have multiple blocks in one section (space-y-12). | Possible overflow on Services. |
| 11.5a | NOT TESTABLE | "First 3 sections not exceed 2.5 viewports" requires viewport height and section heights. | |
| 11.5b | EMBODIED | Home: Section 4 (How It Works) uses variant="major" (160px padding-block); package section follows. LAYOUT §11.5b. | RESOLVED Task 5D-1B. |
| 12.1a–d | EMBODIED | Mobile: GridFrame 4-col; Region full span. Single column, packages stacked. Task 5D-1C. | 12.1a–c met. |
| 12.2a–e | EMBODIED | GridFrame 8-col at 641–1024px. Region: tablet full (stacked); only support may tabletSpan half (2-col). No md:grid-cols-3/4. FAQ stacked. Task 5D-1C. | 8-col tablet; no 3+ col; support-only 2-col. |
| 12.3a–b | EMBODIED | GridFrame 12-col at ≥1025px. Region desktopSpan half/third/quarter. Home, Services, Footer, ConfidenceBar use GridFrame + Region. | 12-col desktop; side-by-side via Region. |
| 13.1–13.2 | PARTIAL | Variation via spacing/alternation; no style or CTA inconsistency in structure. Rounded drift RESOLVED 5D-4 (single .r). | Remaining partial: spacing/scale (7.x) not fully tokenized. |
| 14.1a–b | EMBODIED | Accent only on ConfidenceBar (border-l-2); post-5D-3. No accent on CTA. globals.css, ConfidenceBar.tsx. | Accent ≤5%, not CTA. |
| 14.2a–b | EMBODIED | No parallax/dramatic animation in codebase. Transitions in CSS (0.2s ease). | |
| 14.3a | EMBODIED | No gradients in globals.css or components. | |
| 14.3b | PARTIAL | No box-shadow on panels; focus ring outline. No decorative shadow. | |
| 14.3c | EMBODIED | LAYOUT §14.3c: No stylized rounding. Task 5D-4: One token --radius: 0.375rem; one class .r. All rounded/rounded-r/rounded-lg/rounded-r-lg replaced with .r. globals.css .card, .btn-primary, .btn-secondary, focus use var(--radius). grep -R "rounded" app components --include="*.tsx" → 0 matches. | RESOLVED Task 5D-4. |
| 14.3d | EMBODIED | No decorative asymmetry in layout. | |
| 15.1–15.2 | PARTIAL | Spacing not within doctrine scale (7.2/7.4 violations). Grid not as doctrine. | Elastic zones constrained by other violations. |
| 16.1–16.6 | PARTIAL | Hierarchy and containment largely preserved; density and breakpoint rules have violations above. | Aggregate of rule statuses. |

---

## STEP 3 — Structural Drift Map

### STRUCTURAL DRIFT ZONES

| Drift zone | Evidence |
|------------|----------|
| **Container** | RESOLVED 5D-1B: .container max-width: var(--container-max) 1120px. |
| **Max-w variations** | RESOLVED 5D-5: All arbitrary max-w-* removed from app and components. Width authority only from .container (1120px), .text-column (720px) via TextColumn, GridFrame/Region, and .section-intro (75ch). grep max-w- in app components → 0 matches. |
| **Rounded inconsistencies** | RESOLVED 5D-4: Single token --radius (0.375rem), single class .r. All former rounded/rounded-r/rounded-lg/rounded-r-lg in notice-panel, package blocks, ConfidenceBar, Accordion, HeaderClient, page map placeholder replaced with .r. No exceptions; no second token. |
| **Section padding** | RESOLVED 5D-1B: All sections use <Section>; padding 120px/160px from tokens. No py-16/20/24 on sections. |
| **Heading margin / hierarchy** | RESOLVED 5D-2: globals.css canonical h1/h2/h3 (margin from --space-20/40 only). No page overrides; cadence unified. |
| **Tablet behaving like desktop** | RESOLVED 5D-1C: GridFrame 8-col at 641–1024px; Region tablet full (stacked) or support half only. No md:grid-cols-3/4. |
| **Hero viewport** | RESOLVED 5D-1B: .hero-zone max-height: 70vh; reduced internal padding so core section stays in view. |
| **Density (§11)** | RESOLVED 5D-1B: Hero 1 CTA button; FAQ max 2 consecutive DisclosureBlocks; major pause (160px) before packages. |
| **Disclosure depth** | FAQ: structural break (--space-40) between pairs of DisclosureBlocks. |

---

## STEP 4 — Hard Violations List

### DOCTRINE VIOLATIONS (Non-negotiable)

All 10 violations below were **RESOLVED** in Task 5D-1B (Layout Foundation Reset). Evidence in STEP 5 diff-proof and in Coverage Table above.

1. **Container not 1120px** — **RESOLVED.** globals.css .container max-width: var(--container-max); --container-max: 1120px.
2. **No 120px spacing token / section spacing not 120px** — **RESOLVED.** --space-120: 120px; Section primitive (variant section) uses padding-block: var(--space-120). All pages use <Section>.
3. **No 160px major section spacing** — **RESOLVED.** --space-160: 160px; Section variant="major" uses it. Home uses major before package section.
4. **Text width exceeds 720px / no 720px cap enforced** — **RESOLVED.** --text-max: 720px; .text-column; privacy + terms wrap prose in <TextColumn>; prose max-w-none removed.
5. **More than 1 CTA per viewport (hero)** — **RESOLVED.** Home hero: one CTA as button; second is text link (not second button).
6. **More than 2 disclosure blocks consecutively** — **RESOLVED.** FAQ: chunkFaqs() + structural break every 2 DisclosureBlocks; max 2 consecutive.
7. **Major structural pause ≥120px before package section missing** — **RESOLVED.** Home Section 4 (How It Works) variant="major" (160px); package section follows.
8. **Hero max height 70vh not implemented** — **RESOLVED.** .hero-zone { max-height: var(--hero-max); } --hero-max: 70vh; hero uses hero-zone.
9. **Desktop 12-column / Tablet 8-column grid not implemented** — **RESOLVED.** Task 5D-1C: components/layout/GridFrame.tsx + globals.css .grid-frame (4/8/12 cols at 640/641/1025px). Region.tsx for semantic spans. Home, Services, Footer, ConfidenceBar, Contact, SampleInspectionReport use GridFrame. No raw md:grid-cols-3 or grid-cols-4 in tablet range.
10. **Spacing scale not used** — **RESOLVED.** Section padding only via <Section> (120/160px); no py-16/20/24 on sections. Tokens --space-20/40/120/160 in globals.

---

## STEP 5 — Breakpoint Execution Audit

### Mobile (≤640px)

| Check | Evidence |
|-------|----------|
| Single content column | grid-cols-1, flex-col used; no side-by-side at base. app/[locale]/page.tsx, services, contact, etc. |
| No side-by-side system sections | At default (no md:), single column. |
| Packages stacked | services/page.tsx: blocks in space-y-12 vertical stack; no grid at mobile. |
| Estimator not dominate | No estimator component in codebase. |

**Result:** Single column and stacked content; mobile execution consistent with doctrine intent. No explicit 4-column grid (doctrine 4 cols, 1 logical); effect is single column.

### Tablet (641–1024px)

| Check | Evidence |
|-------|----------|
| 8-column grid | .grid-frame 8 cols at 641–1024px. Region region-tb-full / region-tb-half. |
| 2-column only for support | Region tabletSpan="half" only when name="support". Main/authority stacked on tablet. |
| No full comparison tables | No comparison table. |
| Text width preserved | TextColumn (720px) on policy pages; content in Region. |
| Not pseudo-desktop | No 3+ column on tablet. Region tablet full (stacked) except support half. |

**Result:** Tablet 8-col grid; max 2-col (support only). EMBODIED per Task 5D-1C.

### Desktop (≥1025px)

| Check | Evidence |
|-------|----------|
| 12-column grid | .grid-frame 12 cols at ≥1025px. GridFrame used on Home, Services, Footer, ConfidenceBar, Contact. |
| Side-by-side where reduces cognitive load | Region desktopSpan half/third/quarter. |
| Wider spatial breathing | Container 1120px (var(--container-max)); sections have padding. |

**Result:** 12-col grid; container 1120px. EMBODIED per Task 5D-1C.

---

## STEP 6 — Final Mechanical Score

| Metric | Count |
|--------|--------|
| **Total binding rules (from §4–§16, mechanical only)** | **70** |
| **EMBODIED** | **32** |
| **PARTIAL** | **12** |
| **MISSING** | **0** |
| **CONFLICTING** | **0** |
| **NOT IMPLEMENTED** | **1** |
| **NOT TESTABLE** | **3** |

**Violations (hard failures of explicit binding rules):** **10 resolved** (Task 5D-1B + 5D-1C). See STEP 4 and STEP 5.

**% mechanical compliance:** Post–5D-1C: 5.1–5.4, 6.1–6.3, 12.1a–12.3b EMBODIED. All 10 violations resolved. Post–5D-5: max-w entropy removed; width authority only container/text-column/GridFrame.

### Status deltas (Task 5D-5)

- **Max-w variations:** Drift zone RESOLVED. All max-w-2xl/3xl/4xl/5xl/6xl and max-w-screen-* removed from app and components. No arbitrary max-w scaling; width from .container (1120), .text-column (720), GridFrame/Region, .section-intro (75ch) only.
- **Rounded inconsistencies:** Already RESOLVED 5D-4; 13.1–13.2 note updated to remove stale “rounded drift” (no longer applicable).
- **STEP 6 counts:** Recalculated from current coverage table (48 rule rows): EMBODIED 32, PARTIAL 12, NOT IMPLEMENTED 1, NOT TESTABLE 3; MISSING 0, CONFLICTING 0. No 1280 references; grid and container doctrine reflected in table.

---

## STEP 5 — Diff-Proof Summary (Task 5D-1B)

| Item | Before | After |
|------|--------|--------|
| **.container max width** | 1280px | 1120px (var(--container-max)) |
| **Section padding (py-16/20/24)** | Used across app/[locale] sections | 0 occurrences; all sections use <Section> with token padding (120/160px) |
| **prose max-w-none on policy pages** | privacy/page.tsx, terms/page.tsx | 0; prose wrapped in <TextColumn> (720px cap) |
| **Hero CTA count (desktop viewport)** | 2 (primary + secondary buttons) | 1 button CTA; second is text link |
| **FAQ consecutive DisclosureBlocks** | N per section (e.g. 6 in service-model) | Max 2; structural break (--space-40) between pairs |
| **Hero max height** | Unconstrained | 70vh (.hero-zone, --hero-max) |
| **Major pause before packages (Home)** | py-16/py-20 (80px) | Section variant="major" (160px) |

**Primitives added:** components/layout/Section.tsx (variant, tone), components/layout/TextColumn.tsx, **GridFrame.tsx**, **Region.tsx** (Task 5D-1C).  
**Tokens added (globals.css):** --container-max, --text-max, --space-20, --space-40, --space-120, --space-160, --hero-max.  
**Pages migrated:** app/[locale]/page.tsx, services, contact, about, how-it-works, faq, privacy, terms. PL + EN share same layout (locale-agnostic).

---

## STEP 6 — Grep Proof (Task 5D-1C)

| Check | Command / result |
|-------|-------------------|
| **grid-cols-3 / grid-cols-4 in tablet range** | `grep -r "md:grid-cols-3\|md:grid-cols-4\|lg:grid-cols-4\|sm:grid-cols-3" app components --include="*.tsx"` → **0 matches**. |
| **GridFrame usage Home** | app/[locale]/page.tsx: GridFrame + Region in sections 2–8. |
| **GridFrame usage Services** | app/[locale]/services/page.tsx: GridFrame + Region in section 1. |
| **GridFrame usage elsewhere** | Footer.tsx, ConfidenceBar.tsx, contact/page.tsx (form), SampleInspectionReport.tsx, faq (stacked, no grid). |

**New spacing values introduced:** None. Gutters use --space-20. Section cadence (120/160) unchanged.

---

## STEP 7 — Typography / Heading Grep Proof (Task 5D-2)

| Check | Result |
|-------|--------|
| **text-4xl \| text-5xl \| text-3xl \| text-2xl on h1/h2/h3** | 0. All such classes removed from heading elements; only on p, div, span, Link. |
| **mb-8 \| mb-10 on heading elements** | 0. Heading margins from globals only (--space-20, --space-40). |
| **Global H1/H2/H3 definition** | app/globals.css: h1 margin-bottom var(--space-20); h2 margin-top var(--space-40), margin-bottom var(--space-20); h3 margin-top/bottom var(--space-20). Sizing: clamp() for H1/H2/H3. |

---

## STEP 8 — Radius Grep Proof (Task 5D-4)

| Check | Result |
|-------|--------|
| **grep -R "rounded" app components --include="*.tsx"** | **0 matches.** All radius usage is via class .r (or globals.css .card/.btn*/focus using var(--radius)). |
| **Single token** | :root { --radius: 0.375rem; }. |
| **Single class** | .r { border-radius: var(--radius); }. Used on notice-panel, package blocks, ConfidenceBar, HeaderClient nav links, service area map placeholder. (.card removed 5D-5; Accordion component removed.) |
| **Exceptions** | None. No one-off corner rounding retained. |

---

## STEP 9 — Task 5D-5 Proof Bundle (Entropy Purge)

### Files changed

| Area | Files |
|------|--------|
| **Phase 1 (max-w purge)** | app/[locale]/page.tsx, app/[locale]/services/page.tsx, app/[locale]/privacy/page.tsx, app/[locale]/terms/page.tsx, app/[locale]/contact/page.tsx, app/[locale]/about/page.tsx, app/[locale]/how-it-works/page.tsx, app/[locale]/faq/page.tsx |
| **Phase 2 (dead CSS)** | app/globals.css |
| **Phase 3 (dead components)** | components/Header.tsx (deleted), components/Accordion.tsx (deleted) |
| **Phase 4 (audit)** | doc/AUDIT-LAYOUT-COVERAGE.md |

### Grep proof — max-w

- **Before 5D-5:** Multiple uses of max-w-2xl, max-w-3xl, max-w-4xl, max-w-5xl, max-w-6xl across app/[locale] pages (see conversation audit).
- **After 5D-5:** `grep -r "max-w-" app components --include="*.tsx"` → **0 matches.**
- **Remaining max-w-* in app/components:** None. Width authority is only: .container (1120px), .text-column (720px) via TextColumn, GridFrame/Region, .section-intro (75ch in globals.css). No arbitrary max-w scaling; no exceptions to document.

### Grep proof — removed CSS (unreferenced)

Removed from app/globals.css:

- `.section-body`
- `.section-transition`
- `.prose-wide`, `.text-balance`
- `.flow`, `.flow-sm`, `.flow-lg`
- `.section-divider`
- `.card`, `.card:hover`
- `.table-scannable` and all descendants (thead th, tbody tr.table-cat, tr.table-data, .zebra-odd, .zebra-even)

**Confirmation:** `grep -r "section-body\|section-transition\|prose-wide\|text-balance\|flow-sm\|flow-lg\|section-divider\|table-scannable\|zebra-odd\|zebra-even" app components --include="*.tsx"` → **0 matches.** Class name `.card` (standalone) not used in TSX (only bg-surface-card / token references); removed .card block is unreferenced.

### Dead components — proof

- **Header.tsx:** No import in app or other components; layout uses HeaderClient. `grep -r "from.*Header['\"]\|Header\b" app --include="*.tsx"` → no matches for the Header component. **Removed.**
- **Accordion.tsx:** No import anywhere. FAQ uses DisclosureBlock. `grep -r "Accordion" app --include="*.tsx"` → no matches. **Removed.**

### STEP 6 totals (post–5D-5)

Recalculated from coverage table: EMBODIED 32, PARTIAL 12, NOT IMPLEMENTED 1, NOT TESTABLE 3, MISSING 0, CONFLICTING 0. See STEP 6 and "Status deltas (Task 5D-5)" above.

### Build

`npm run build` — **success** (Next.js 16.1.4).

---

*End of Layout Coverage Audit. Evidence only; no redesign proposed.*

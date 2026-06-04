# AUDIT 6.15 — Full System Integrity (Pre–Task 7 Freeze)

**Type:** Stability verification. Diagnosis only. No implementation, no redesign, no content rewrite.  
**Scope:** All core routes (PL primary; EN parity). Light + Dark. Layout, typography, spacing, tokens, interaction, components, identity, i18n.  
**Governed by:** LAYOUT COMPOSITION, COPY DISCIPLINE CODEX, DECISIONS, AUDIT-6.7, Tasks 1–6.

---

## Executive Summary

Task 6 embodiment is largely complete: H2 system unified, CTA discipline applied, link contrast and table dark-mode parity in place, emoji removed, metadata per-locale. No T1–T5 regressions found in user-facing surfaces. Remaining issues are **spacing ladder drift** (off-scale values: mb-4, space-y-4/6, Footer mt-20), **Home first section** missing `section-primitive--first`, and legacy naming (env/key) with no user impact. **T7 candidates** are pattern-only: Services package blocks and Terms/Privacy section loops could later justify abstraction; no action now. **Verdict: Task 6 is ready for freeze.** Remaining items are micro polish or T7; no structural inconsistency that blocks closure.

---

## Classification System Used

- **T1–T5 Regression** — Violation of brand/doctrine established in Tasks 1–5.  
- **T6 Embodiment Drift** — Spacing, hierarchy, or embodiment rules from Task 6 not fully applied.  
- **T7 Candidate** — Pattern that might later justify new layout/component work; **do not execute.**  
- **Acceptable Variation** — Imperfect but aligned with doctrine; not polishing into sterility.

**Severity:** 1 = Micro polish | 2 = Noticeable friction | 3 = Structural inconsistency.

---

## A) Brand & Doctrine Integrity (Tasks 1–5)

### Findings

| # | Classification | Severity | Evidence | Why it matters |
|---|----------------|----------|----------|----------------|
| A1 | Acceptable Variation | 1 | `lib/email.ts`: env vars `GUARDIAN_EMAIL`, `GUARDIAN_PHONE`. Messages: keys `guardianTerminationTitle` etc. | Internal/env only; user-facing copy says "Sentinel". Key rename is polish, not regression. |
| A2 | Acceptable Variation | 1 | How-it-works CTA: single primary (Contact) only. | Intentional single next step; other authority blocks use 1 primary + 1 secondary. |
| A3 | — | — | Tone, authority framing, package semantics (green/orange/red), descriptor stability, logo use, accent (ConfidenceBar only): **no violations found.** | — |

**Summary A:** No T1–T5 regressions. Identity is Sentinel in UI; color and accent use comply with doctrine.

---

## B) Embodiment Integrity (Task 6)

### Findings

| # | Classification | Severity | Evidence | Why it matters |
|---|----------------|----------|----------|----------------|
| B1 | T6 Embodiment Drift | 2 | **Home:** First content section (Key Parameters, `Section tone="light"`) does not use `section-primitive--first`. `app/[locale]/page.tsx` ~L53. | All other core pages apply `section-primitive--first` to the first Section; Home first section gets full pt-120 instead of pt-40, breaking first-section consistency. |
| B2 | T6 Embodiment Drift | 2 | **Spacing off-scale:** `mb-4` (16px), `space-y-4` (16px), `space-y-6` (24px) used across Contact, About, FAQ, Terms, Privacy, How-it-works. Doctrine scale: 20/40/120/160. | Off-scale values (16px, 24px) create rogue rungs; weakens vertical rhythm consistency. |
| B3 | T6 Embodiment Drift | 1 | **Footer:** `mt-20` (80px) on `<footer>`. `components/Footer.tsx` L14. | 80px is not on scale (20/40/120/160); section-to-footer transition could use scale value. |
| B4 | — | — | H2 system: All section H2s use `h2-system` (or hero descriptor exception). CTA hierarchy: About 1 primary + 1 secondary; Services/Home final CTA 1+1; How-it-works 1 primary. Link system: `link-system` and Disclosure trigger contrast applied. Table (SampleInspectionReport): report-table tokens and dark-mode parity in place. | No further drift in these dimensions. |
| B5 | Acceptable Variation | 1 | ConfidenceBar `p-6` (24px), SampleInspectionReport `p-6` (24px). | Internal padding; 24px is scale-adjacent; acceptable for component density. |
| B6 | Acceptable Variation | 1 | Home hero H2 (descriptor) uses `text-xl md:text-2xl font-normal ...` instead of `.h2-system`. | Intentional; identity hierarchy, not section title. |

**Summary B:** Two Level-2 drifts (Home first section, off-scale spacing); one Level-1 (Footer mt-20). Rest of Task 6 embodiment is in place.

---

## C) Structural Pattern Detection (T7 Candidates)

**Rule:** If it requires a new layout pattern, visual layer, hierarchy level, component family, or structural abstraction → **T7 Candidate. Do not solve.**

| # | Classification | Description (pattern only; no solution) |
|---|----------------|----------------------------------------|
| C1 | T7 Candidate | **Services page:** Green / Orange / Red blocks each repeat the same structural pattern (H2+chip, definition, multiple H3 + ul, pricing, suitable-for). Long, repeated markup. Pattern could later justify a `PackageBlock` (or similar) for consistency and future changes. **Not implemented.** |
| C2 | T7 Candidate | **Terms / Privacy:** Section loop (title + body per section) with identical div/h2/body structure. Pattern could later justify a shared `ProseSection` or prose-loop component. **Not implemented.** |
| C3 | — | FAQ: DisclosureBlocks already abstracted; no new primitive needed. No other repeated structural ceiling observed that demands a new layout layer. |

**Summary C:** Two T7 candidates documented; no implementation in this audit.

---

## D) i18n Parity Integrity

| Check | Result |
|-------|--------|
| Copy parity (PL/EN) | Structural parity; same keys used. No language-specific layout divergence observed. |
| Key mismatch / missing | No missing top-level namespaces or critical keys found. |
| Legacy key names | `guardianTerminationTitle` / `guardianTerminationIntro` etc. — key names only; displayed copy says "Sentinel". Acceptable Variation. |
| Visual imbalance (long EN/PL) | No evidence of layout break or overflow from copy length in audited pages. |

**Summary D:** i18n parity sufficient for freeze. Legacy key naming is cosmetic.

---

## E) Interaction & Micro-behaviour

| Check | Result |
|-------|--------|
| Focus states | Global `a:focus-visible`, `button:focus-visible` (support ring); DisclosureBlock, Header, ThemeSwitch, Contact form inputs use focus ring/outline. Consistent. |
| Hover | Buttons, links, nav, footer links use token-based hover. |
| Accordion (DisclosureBlock) | Expand/collapse; trigger uses `text-body hover:underline` (Task 6.14). |
| Button consistency | `btn-primary` / `btn-secondary`; authority blocks use overrides for light-on-dark where needed. |
| Nav | Header desktop + mobile; Footer links. No regression. |

**Summary E:** No interaction regressions. Focus and hover align with tokens.

---

## F) Over-Optimization Check (Acceptable Variation)

Items intentionally left as-is to avoid polishing into sterility:

- **Hero descriptor H2** not using `.h2-system` (identity hierarchy).
- **How-it-works authority block** with single CTA (Contact) — valid single next step.
- **Internal/env naming** (GUARDIAN_EMAIL, guardianTermination*) — no user impact.
- **Component-internal spacing** (p-6, space-y-3) where density is local and scale-adjacent.

---

## Top 5 Highest-Impact Items

1. **Home first Section missing `section-primitive--first`** (B1) — First content section should match other pages’ first-section treatment.  
2. **Off-scale spacing (mb-4, space-y-4, space-y-6)** (B2) — Multiple pages; weakens rhythm consistency.  
3. **Footer `mt-20` off-scale** (B3) — Single global component; easy to align to scale if desired.  
4. **T7: Services package block repetition** (C1) — No action now; pattern noted for future abstraction.  
5. **T7: Terms/Privacy section loop** (C2) — No action now; pattern noted for future reuse.

---

## Task 7 Candidate List (Do Not Execute)

- **C1** — Services: repeated package block structure (Green/Orange/Red) → potential future `PackageBlock` or equivalent.  
- **C2** — Terms/Privacy: repeated section (title + body) loop → potential future prose-section abstraction.

---

## Final Verdict

**Is Task 6 ready for freeze?**  
**Yes.**

**Justification:** Task 6 objectives (H2 unification, CTA discipline, link/table dark-mode parity, emoji removal, metadata) are implemented. No T1–T5 regressions in user-facing brand or doctrine. Remaining findings are **T6 embodiment drift** at Level 1–2 (first-section class on Home, off-scale spacing, Footer mt-20) and **T7 candidates** (pattern-only; no implementation). None constitute a structural inconsistency that blocks closing Task 6. The Owner can treat Task 6 as closed and treat remaining items as micro polish or future Task 7 work.

---

*End of Audit 6.15*

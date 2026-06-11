# LAYOUT COMPOSITION.md — SENTINEL

**Status:** Launch-era layout guidance

Spatial and hierarchy guidance for pages. Supports clarity; **must not prevent better composition.**

---

## 1. Purpose

Guides:

- Section hierarchy and scan order
- Readable text widths
- Mobile sanity and breakpoint behavior
- Direct-entry routes (pathway, contact context)
- Accessibility basics

Does **not** lock page palette, imagery, card styling, or atmospheric treatment — see `VISUAL-FREEDOM-SPRINT.md`.

---

## 2. Core rules (keep)

- **Hierarchy before CTA** — user understands scope before committing
- **Readable measure** — long prose in constrained widths; avoid edge-to-edge paragraphs on desktop
- **No horizontal overflow** at 390px mobile
- **Section clarity** — each block should answer one operational question where possible
- **PL/EN structural parity** — same section order and logic
- **Gate behavior** — homepage body below diagnostic gate only after pathway selection

---

## 3. Homepage diagnostic gate

First viewport:

1. Sentinel identity
2. How property is used while owner is away
3. Required usage-situation choice before rest of homepage

No default pathway on `/pl` or `/en` without pathway parameter.

---

## 4. Density and rhythm

- Prefer scannable blocks over wall-of-text
- Use lists and labels when parameters matter
- White space and visual rhythm may increase in launch-era design if hierarchy stays clear

---

## 5. Components and containment

- Package presentation: vertical containment, not SaaS comparison tables
- Proof modules: operational, not decorative dashboards
- Forms: estimator is the structured input surface; contact form follows `contact` page sequence

---

## 6. Accessibility

- Sufficient contrast for body text (WCAG AA target)
- Focus states for interactive controls
- Respect `prefers-reduced-motion`
- Meaningful heading order

---

## 7. Conflict resolution

If layout guidance conflicts with an Owner-approved visual brief that improves clarity:

→ Brief wins; update this doc if the pattern should become standard.

If layout change would blur service boundaries or hide required disclosures:

→ Stop; escalate to Owner.

---

## 8. Related docs

- `DECISIONS.md` — pathways, packages, proof rules
- `VISUAL-FREEDOM-SPRINT.md` — palette, imagery, warmth
- `SERVICE-STRUCTURING.md` — what sections must communicate operationally

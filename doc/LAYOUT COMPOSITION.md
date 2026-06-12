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

Layout changes may be **bold** when Owner-scoped: full-section redesigns, full-page rhythm shifts, and whole-site composition passes are allowed if hierarchy, mobile sanity, and service boundaries remain intact.

---

## 2. Core rules (keep)

- **Hierarchy before CTA** — user understands scope before committing
- **Readable measure** — long prose in constrained widths; avoid edge-to-edge paragraphs on desktop
- **No horizontal overflow** at 390px mobile
- **Section clarity** — each block should answer one operational question where possible
- **PL/EN structural parity** — same section order and logic
- **Gate behavior** — homepage body below diagnostic gate only after pathway selection

Conservative micro-polish is not the default expectation. **Clarity and impact** are.

**Anti-repetition:** do not apply the same proof module, jurisdiction ring, ledger, stamp, or service-radius graphic on every page. Each motif should earn its place by answering that page's operational question.

**Service area:** Torrevieja + 50–70 km stays clear but should not dominate as a repeated visual proof point. Footer/contact mention and one strong local footprint module are sufficient unless a page has a specific comprehension need.

---

## 3. Page-specific middle-section narratives

Each major page needs its own middle-section visual argument — not a shared decorative system:

| Page | Visual argument |
|------|-----------------|
| Home | Exposure without Sentinel vs structured oversight |
| Services | Service architecture, package jurisdiction, capabilities inside oversight |
| How It Works | Procedure and sequence |
| Contact | Structured intake / dossier |
| FAQ | Fast objection resolution; readability first |
| About | Local credibility and boundaries |

Owner-scoped middle-section rebuilds may be large. **Scoped** means bounded by the approved brief, not limited to small visual tweaks.

---

## 4. Homepage diagnostic gate

First viewport:

1. Sentinel identity
2. How property is used while owner is away
3. Required usage-situation choice before rest of homepage

No default pathway on `/pl` or `/en` without pathway parameter.

---

## 5. Density and rhythm

- Prefer scannable blocks over wall-of-text
- Use lists and labels when parameters matter
- White space and visual rhythm may increase freely if hierarchy stays clear
- Mobile density may be tuned post-deploy; solve with spacing and stacking, not shrinking everything

---

## 6. Canonical visual mode

The live site uses one designed atmosphere (see `VISUAL-FREEDOM-SPRINT.md`):

- Dark cinematic hero / authority bands
- Warm paper body sections
- Dark final CTA / footer

Layout work should assume this system — not recreate a dual theme.

---

## 7. Components and containment

- Package presentation: vertical containment, not SaaS comparison tables
- Proof modules: operational, not decorative dashboards — and not repeated identically across pages
- Forms: estimator is the structured input surface; contact form follows `contact` page sequence

---

## 8. Accessibility

- Sufficient contrast for body text (WCAG AA target)
- Focus states for interactive controls
- Respect `prefers-reduced-motion`
- Meaningful heading order
- Canonical mode must render consistently regardless of OS/browser dark preference

---

## 9. Conflict resolution

If layout guidance conflicts with an Owner-approved visual brief that improves clarity:

→ Brief wins; update this doc if the pattern should become standard.

If layout change would blur service boundaries or hide required disclosures:

→ Stop; escalate to Owner.

---

## 10. Related docs

- `DECISIONS.md` — pathways, packages, proof rules
- `VISUAL-FREEDOM-SPRINT.md` — canonical visual system
- `SERVICE-STRUCTURING.md` — what sections must communicate operationally

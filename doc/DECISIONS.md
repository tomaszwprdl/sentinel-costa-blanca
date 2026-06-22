# DECISIONS.md — SENTINEL

Purpose: binding decisions only. Provisional or exploratory material does not belong here.

**Status legend:** LOCKED — binding unless Owner overrides · CONSTRAINED — direction/limits defined · OPEN — not decided

**Locked:** Sentinel name · PL/EN descriptors · logo asset geometry/color/usage · no concierge / rental-management / lifestyle drift · service model · geography · packages · SLA meaning · emergency authority · estimator logic · contact form schema/API/payload · legal substance · `noindex/nofollow` · contact details · PL/EN parity

**Flexible (website execution):** palette · section composition · visual rhythm · card/panel treatment · imagery/proof modules · warmth · contrast · page atmosphere · visual experimentation under `VISUAL-FREEDOM-SPRINT.md`

---

# 1. Product Name

**Decision:** Sentinel  
**Status:** LOCKED

Guardian naming is deprecated. No dual naming.

---

# 2. Functional Identity

**Status:** LOCKED

| Locale | Descriptor |
|--------|------------|
| PL | Reprezentacja właściciela na miejscu |
| EN | Structured Property Oversight |

Rules: structural, not promotional; locale-appropriate; must not be replaced by campaign copy; when paired with wordmark, descriptor stays visually attached.

---

# 3. Product Nature

**Decision:** Local property oversight and representation system.  
**Status:** LOCKED

**Not:** concierge · lifestyle support · generic property management · rental management

---

# 4. Service Model

**Decision:** Strict package-based structure.  
**Status:** LOCKED

If not explicitly listed in package → excluded by default.

Packages (locked names):

| PL | EN |
|----|-----|
| Podstawowy | Basic |
| Rozszerzony | Extended |
| Pełny | Full |

---

# 5. Geographic Constraint

**Decision:** Torrevieja + approximately 50–70 km radius.  
**Status:** LOCKED

No exceptions. Out-of-radius properties excluded.

---

# 6. SLA Model

**Decision:** SLA = response and decision time, not guaranteed resolution.  
**Status:** LOCKED

Package SLA differentiation: response/decision windows only. Reporting window remains system-standard.

---

# 7. Emergency Authority

**Decision:** Autonomous decisions only within defined financial limits (Model C).  
**Status:** LOCKED

Full package: standard €300 per decision; optional €500 if agreed. Above limit → owner approval.

---

# 8. Proof & Evidence

**Decision:** Factual operational proof only.  
**Status:** LOCKED

**Permitted:** structural report previews, checklists, access/register examples, operational photography without client data, schematic evidence modules.

**Excluded:** testimonials · lifestyle imagery · case-study storytelling · fake social proof

**Synthetic / AI image rule:** current proof-layer photos may be used only as temporary shot-planning placeholders when they are realistic, operational, restrained, locally plausible, and physically recreatable. They must not be described as actual Sentinel work, real client property, real reports, real operator identity, or final operational evidence. Future reviews should judge placement, repetition, crop, trust, and section fit, while tracking replacement with real photography before serious public promotion / indexed launch where possible.

---

# 9. Website Role

**Decision:** Qualification-first system interface, not a conversion funnel.  
**Status:** CONSTRAINED

Clarity and boundaries over hype. The site may become warmer, more visual, and more tactile if service boundaries stay clear.

---

# 10. Copy Tone

**Decision:** Procedural, boundary-aware, non-concierge.  
**Status:** CONSTRAINED

Copy may be clearer and more human. It must not become promotional, vague, or lifestyle/concierge-like. See `COPY-DISCIPLINE-CODEX.md`.

---

# 11. Language Strategy

**Decision:** Polish and English only.  
**Status:** LOCKED

Polish primary. English structurally equal. PL/EN parity required.

---

# 12. Visual Identity System

**Status:** split — logo LOCKED · website execution CONSTRAINED / EXPERIMENTAL

## 12.1 Logo & wordmark (LOCKED)

- Symbol geometry, variants, and production assets are locked.
- Wordmark: SENTINEL in TT Fellows Medium, ALL CAPS.
- Descriptor pairing rules per `LOGO-GEOMETRY-SPEC.md`, `LOGO-USAGE-HIERARCHY.md`, `LOGO-DIRECTION.md.md`.
- Logo colors and containment rules apply to the **logo asset**, not to entire page backgrounds.

## 12.2 Website visual execution (CONSTRAINED / EXPERIMENTAL)

**Website visual execution is CONSTRAINED / EXPERIMENTAL, not LOCKED.**

The visual composition rebuild is **merged on `main`** (baseline `e5fa7bb`; graphic passes through `cef326b`; proof-assets integration `b9800ce`; current live/main baseline `e682b5b`). Future work builds on the live canonical system — it does not revert to build-era restraint. Broad visual iteration is stopped; future improvements should be homepage-first / page-by-page, plan-first, and Owner-scoped.

**Flexible (Owner-approved work):** color palette on pages · section or full-page composition · page rhythm · imagery · SVG/CSS visual systems · proof modules · card/panel treatment · warmth · contrast · atmosphere · motion · generated assets · anti-repetition restructuring · removal/demotion of redundant proof modules · page-specific middle-section narratives

**Anti-repetition:** repeated motifs (jurisdiction rings, service-radius graphics, operational ledgers, stamps, identical proof bands) must serve page-specific questions — not decorate every section. See `VISUAL-FREEDOM-SPRINT.md`.

**Still protected:** logo asset integrity · no concierge / rental-management / lifestyle positioning · readable hierarchy · mobile sanity · accessibility

Direction: `VISUAL-FREEDOM-SPRINT.md`

## 12.3 Canonical visual mode (LOCKED until Owner overrides)

**Decision:** The public website uses **one art-directed visual atmosphere**, not a user-selectable light/dark theme.

**Status:** LOCKED (website behavior)

- Dark cinematic hero / authority bands
- Warm paper body sections
- Dark final CTA / footer
- Controlled copper / sea / clay accents
- **No public dark/light theme toggle**
- OS/browser dark preference must not create a second global visual state

**Flexible under Owner-approved visual work:** palette evolution · gradients · imagery · composition shifts · motion · generated assets — as long as logo integrity, accessibility, and service boundaries remain intact.

Do not recreate a dual global theme system unless the Owner explicitly requests it.

---

# 13. Color Doctrine

**Status:** split

## 13.1 Identity reference palette (LOCKED for logo / identity reference)

Primary Authority `#203A5F` · Primary Support `#2E507A` · Base `#F4F6F8` · Structural `#4F6460` / `#51677A` · Neutral `#707B86` · Accent `#6E3A44`

Legacy percentage distribution rules are **historical guidance**, not hard law for website pages.

## 13.2 Website reference palette (CONSTRAINED — directional, not a cage)

Reference tokens for website surfaces (not logo palette). The live canonical mode uses these directionally; they are **not** a hard limit:

Ink `#10263f` · Navy `#163b5c` · Sea `#2f6f73` · Stone `#f2eee6` · Paper `#fffaf2` · Clay `#b8664a` · Copper `#d29a57` · Sage `#738b7c` · Line `#d8cdbc` · Muted `#6f7883`

Colors may evolve freely if coherent and accessible. WCAG AA for body text remains required.

---

# 14. Typography

**Status:** split

- **Logo wordmark:** TT Fellows — LOCKED
- **Website:** existing project font stack may be used with clearer hierarchy; no new dependencies without justification — CONSTRAINED

---

# 15. Usage Pathways

**Status:** LOCKED

Canonical slugs: `private-use-only` · `regular-guest-stays` · `mixed-not-defined`

Homepage: hard diagnostic gate; no default pathway; body sections only after selection.

Council v2's "de-gate homepage" suggestion is not accepted as implementation direction. The accepted direction is: keep the diagnostic gate, but make the gate itself carry more trust before the click. Removing or bypassing the gate requires explicit Owner approval.

Pathways may change framing, examples, emphasis, estimator defaults, contact context — not packages, SLA, emergency limits, legal boundaries, or identity.

---

# 16. Estimator & Pricing Communication

**Status:** LOCKED (matrix values pre-live indicative)

- Logic in `lib/estimatorMatrix.ts` — do not change without Owner approval.
- Public range display; no “starting from” anchors; no hidden pricing.
- Owner-approved exception: a restrained early minimum-price cue may be shown only when it reflects the verified absolute estimator minimum and points users toward the estimator for the actual range. Current verified minimum: approximately €80/month. This does not change estimator logic, package pricing, or final commercial ranges.
- Mixed / not defined → classification-first, not invented pricing.
- Final commercial ranges require Owner confirmation before public launch.
- Approved property-intake/context parameters include area in m², bedrooms/rooms, bathrooms, and patio/terrace/outdoor-area presence.
- Bathrooms and patio/terrace/outdoor-area are intake/context parameters only unless Owner separately approves estimator-matrix or pricing-logic changes.

---

# 17. Contact & Pre-Live Operations

**Status:** LOCKED

- Email: `sentinelcostablanca@gmail.com`
- Phone: `+34 694 22 90 35`
- Contact form schema, API, and payload behavior — do not change without Owner approval.
- `noindex,nofollow` remains active until Owner removes pre-live protection.

---

# 18. Legal Substance

**Status:** LOCKED

Terms and privacy meaning, package boundaries, exclusions, SLA definitions, emergency limits, and service area — change only with explicit Owner approval and legal review.

Presentation may improve; substance may not drift silently.

---

# 19. Operational Capabilities

**Status:** LOCKED

Keyholding, cleaning, readiness cleaning, turnover cleaning, access coordination, and vendor coordination are core capabilities **inside** structured oversight — not separate brand identity.

Cleaning must be visible as practical execution capacity. It must not be hidden in tiny print or framed apologetically, and it must not reposition Sentinel as a cleaning-only, concierge, lifestyle, or rental-management brand.

Execution-only layer remains subordinate (no SLA, no autonomous authority, no ongoing oversight implied).

---

# 20. Package Presentation

**Status:** LOCKED

Vertical containment presentation. No SaaS pricing table tropes. No “most popular” badges.

---

# Historical Note

Build-era Task 1–8 sequencing and strict visual lock-down are **retired**. Those task and audit documents were removed from the active repository after the documentation reset. Current work is governed by the active docs listed in `REPO-MAP.md`.

---

# Drift Control

If implementation conflicts with this document:

1. Pause conflicting work.
2. Document the conflict.
3. Owner decides.

No silent contract changes.

---

# Maintenance

Changes require explicit Owner acknowledgment and direct edit to the relevant section.

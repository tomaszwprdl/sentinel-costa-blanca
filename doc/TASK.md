# TASK.md — SENTINEL

Purpose: current execution scope for agents and Owner.

This file does **not** define binding decisions (`DECISIONS.md` does).

---

# Current phase

**Launch-era: post-trust-spine · page-by-page micro polish**

The current live/main baseline is `01b2624` (`refactor: improve mobile homepage gate`), following proof-assets integration `b9800ce` and selected-pathway contrast patch `e682b5b` (historical milestone). The visual composition rebuild, proof-layer images, Services refinement, selected-pathway contrast patch, and **Homepage Trust Spine Pilot** are live. The old build-era sequential Task 1–8 model is **retired**. Build-era task and audit documents were removed from the active repository after documentation reset.

**Current priority:** do not start another broad visual pass. The site is visually credible enough to keep live. Trust Spine Pilot goals are delivered on the homepage gate. Next work is **page-by-page micro polish, starting with the homepage**, Owner-scoped and plan-first.

**Homepage gate (delivered):** operator cue / public operator proof (Aleksy Gugała) · verified €80/mo minimum price cue · estimator/cost-logic link · mobile scroll affordance from `01b2624`.

**Homepage gate (protected):** the diagnostic gate remains intentional. Refine it; do not remove, bypass, or de-gate unless Owner explicitly approves. During homepage polish, protect these internals: `#usage-situation-gate` · `gate-scroll-cue` · `scroll-mt-28` · mobile-only cue to the pathway selector.

Recently completed live work:

- Homepage Trust Spine Pilot: gate trust before click, operator proof cue, early price/estimator cue, defensive repetition reduction, mobile gate scroll affordance — through `01b2624`.
- Services doctrine/page refinement: package-summary drift corrected; cleaning/readiness/turnover cleaning visible inside oversight; bathrooms/patio context added without estimator pricing-logic changes; NowRent mention restrained.
- Proof-assets integration: homepage pathway media, final CTA, Services, How It Works, and About gained temporary proof-layer imagery.
- Selected-pathway contrast patch: "Bez nas / Z nami" risk carousel strengthened across all three pathway states.
- Package names/count, SLA meaning, emergency authority, estimator matrix, contact schema/API/payload, pathway slugs, legal substance, footer contact details, and noindex state preserved.

---

# How work is governed

| Document | Role |
|----------|------|
| `DECISIONS.md` | Protected contracts |
| `VISUAL-FREEDOM-SPRINT.md` | Current canonical visual system |
| `AGENT-BRIEFING.md` | Agent routing and rules |
| `WORKFLOW.md` | Git, build, commit discipline |
| `LAUNCH-CHECKLIST.md` | Pre-launch owner actions |
| Owner-approved task briefs | Scoped implementation |

---

# Rules

1. No task may change protected contracts silently.
2. Visual work is **allowed** when Owner-scoped — including bold composition, imagery, color, motion, generated assets, full-section or full-page passes, and removal/demotion of redundant proof modules. Build on canonical mode; do not imply old build-era visual restraint. Do not start another global visual transformation pass without explicit Owner approval.
3. **Anti-repetition:** the visual system must not become a repeated decoration layer. Motifs such as jurisdiction rings, service-radius graphics, operational ledgers, stamps, map/radius motifs, and identical proof bands should appear only where they answer a page-specific question. Agents may remove or replace recently added modules that create repetition.
4. **Service area:** Torrevieja + 50–70 km remains locked, but service area/radius is an operational boundary, not a brand boast. Footer/contact mention and one strong local footprint module are fine; repeated service-area/radius graphics across many pages should be avoided unless they solve a real comprehension problem.
5. **Page-specific narratives:** each major page should have its own middle-section visual argument (see `VISUAL-FREEDOM-SPRINT.md` and `LAYOUT COMPOSITION.md`). Avoid one generic graphic system applied everywhere.
6. **Proof-layer images:** accepted synthetic/AI images are temporary shot-planning placeholders. They must not be described as actual Sentinel work, real client property, real reports, real operator identity, or final evidence. Future audits should judge placement, repetition, crop, trust, and section fit while tracking real-photo replacement.
7. **Homepage gate:** Council v2 comments about de-gating are not accepted as implementation direction. The diagnostic gate remains intentional unless the Owner explicitly overrides it. Protect gate internals during polish: `#usage-situation-gate` · `gate-scroll-cue` · `scroll-mt-28` · mobile-only pathway-selector cue.
8. Service, legal, estimator, contact API, pathway slugs, and package model changes require **explicit Owner approval**.
9. One agent modifies code at a time.
10. **Scoped** means bounded by the approved brief — not “small visual changes only.” A scoped Owner-approved brief may still be a large page-section rebuild. Git discipline remains: small, reviewable commits; no `git add .`; no screenshots/artifacts in commits.
11. PL/EN parity for user-facing strings (`messages/pl.json`, `messages/en.json`).

---

# Active work types

| Type | Examples |
|------|----------|
| Homepage micro polish | Owner-scoped refinement of homepage sections; gate preserved; gate internals protected |
| Page-by-page improvement | Page-specific narrative passes, anti-repetition restructuring, proof-module demotion/removal — Owner-scoped and plan-first |
| Repo cleanup baseline | Remove proven-unused code/assets, stale local artifacts, dead message keys, stale docs references |
| Visual refinement | Targeted tuning only; no broad visual transformation without a fresh Owner brief |
| Readiness audit | Technical, legal, pricing, production email |
| Scoped bugfix | Layout, i18n, form error, anchor — Owner brief only |
| Launch ops | noindex removal, domain, deploy smoke test — Owner only |

---

# Forbidden without Owner approval

- Package rename or count change
- Estimator matrix / pricing logic change
- SLA or emergency authority change
- Legal terms substance change
- Contact details or form schema/API change
- DNS / Netlify production / indexing change
- Concierge or rental-management positioning
- Reintroducing public dark/light theme toggle or dual global theme system
- Removing or bypassing the homepage diagnostic gate

---

# Parking protocol (relaxed)

Ideas outside current brief may be noted in STATUS or a short Owner message — they are not automatically forbidden forever, but they must not be implemented without a new approved brief.

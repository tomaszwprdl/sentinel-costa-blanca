# TASK.md — SENTINEL

Purpose: current execution scope for agents and Owner.

This file does **not** define binding decisions (`DECISIONS.md` does).

---

# Current phase

**Launch-era: completed local Services refinement + pending push/smoke + readiness cleanup**

The visual composition rebuild and unified canonical visual mode are **on `main`**. Local main is `b3fd918`, ahead of `origin/main` by 2 and not pushed. `origin/main` / live baseline remains `b46a214` until push/deploy smoke. Services refinement was completed locally in `40ede57` + `b3fd918`; QA passed. The old build-era sequential Task 1–8 model is **retired**. Build-era task and audit documents were removed from the active repository after documentation reset.

**Current priority:** push the completed local Services work when Owner approves, run deploy smoke, then continue cleaning the repository into a stable baseline after rapid global visual passes. Global visual iteration is paused. Future improvements should be page-by-page, plan-first, and Owner-scoped.

Completed local Services work (not pushed):

- Package-summary contract drift from the Services audit corrected.
- Cleaning, readiness cleaning, and turnover cleaning made visibly core practical capabilities inside oversight.
- Bathrooms and patio/terrace/outdoor area added as property-intake/context parameters without changing estimator pricing logic.
- NowRent mentioned only as subordinate partner coordination where available and separately agreed.
- Package names/count, SLA meaning, emergency authority, estimator matrix, contact schema/API/payload, pathway slugs, legal substance, and noindex state preserved.

Pending Services operations:

- Push `40ede57` + `b3fd918` when Owner approves.
- Run deploy smoke after push.

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
6. Service, legal, estimator, contact API, pathway slugs, and package model changes require **explicit Owner approval**.
7. One agent modifies code at a time.
8. **Scoped** means bounded by the approved brief — not “small visual changes only.” A scoped Owner-approved brief may still be a large page-section rebuild. Git discipline remains: small, reviewable commits; no `git add .`; no screenshots/artifacts in commits.
9. PL/EN parity for user-facing strings (`messages/pl.json`, `messages/en.json`).

---

# Active work types

| Type | Examples |
|------|----------|
| Repo cleanup baseline | Remove proven-unused code/assets, stale local artifacts, dead message keys, stale docs references |
| Page-by-page improvement | Page-specific narrative passes, anti-repetition restructuring, proof-module demotion/removal — Owner-scoped and plan-first |
| Visual refinement | Post-deploy tuning, mobile density, hierarchy, atmosphere — Owner-scoped |
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

---

# Parking protocol (relaxed)

Ideas outside current brief may be noted in STATUS or a short Owner message — they are not automatically forbidden forever, but they must not be implemented without a new approved brief.

# TASK.md — SENTINEL

Purpose: current execution scope for agents and Owner.

This file does **not** define binding decisions (`DECISIONS.md` does).

---

# Current phase

**Launch-era: visual composition rebuild merged; final visual tuning + readiness audits**

The visual composition rebuild and unified canonical visual mode are **on `main`** (`e5fa7bb`). The old build-era sequential Task 1–8 model is **retired**. Build-era task and audit documents were removed from the active repository after documentation reset.

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
2. Visual work is **allowed and expected** when Owner-scoped — including bold composition, imagery, color, motion, generated assets, full-section or full-page passes. Build on canonical mode; do not imply old build-era visual restraint.
3. Service, legal, estimator, contact API, pathway slugs, and package model changes require **explicit Owner approval**.
4. One agent modifies code at a time.
5. Small, reviewable patches; no `git add .`; no screenshots/artifacts in commits.
6. PL/EN parity for user-facing strings (`messages/pl.json`, `messages/en.json`).

---

# Active work types

| Type | Examples |
|------|----------|
| Visual refinement | Post-deploy tuning, mobile density, hierarchy, atmosphere — Owner-scoped |
| Readiness audit | Technical, legal, pricing, production email |
| Scoped bugfix | Layout, i18n, form error, anchor — Owner brief only |
| Launch ops | noindex removal, domain, smoke test — Owner only |

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

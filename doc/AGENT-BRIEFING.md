# AGENT-BRIEFING.md — SENTINEL

Short briefing for Cursor, Codex, and Cloudie.

---

# Current project state

- **Product:** Sentinel Costa Blanca — structured local owner representation (Torrevieja + ~50–70 km).
- **Website:** Pre-live, soft-launch review ready. `noindex,nofollow` active.
- **Phase:** Launch-era documentation reset complete; Visual Freedom Sprint and readiness audits next.
- **Stable SHA reference:** `28ccca2`.

**Visual experimentation is allowed. Old build-era visual doctrine is no longer hard law.**

---

# Protected contracts

Do not change without explicit Owner approval:

- Brand: Sentinel · PL descriptor · EN descriptor
- Logo asset geometry, colors, usage (`LOGO-*.md`)
- Not concierge · not rental management · not lifestyle/luxury positioning
- Packages: Podstawowy/Basic · Rozszerzony/Extended · Pełny/Full
- SLA meaning · emergency authority limits
- Usage pathway slugs and gate behavior
- Estimator matrix and calculation logic
- Contact form schema, API, payload
- Contact details (email, phone)
- Legal substance (terms, privacy, exclusions)
- `noindex/nofollow` until Owner removes
- PL/EN parity

Full list: `DECISIONS.md`

---

# Flexible visual areas

Website execution may evolve:

- Page palette and surfaces
- Section composition and rhythm
- Imagery and proof modules
- Card/panel treatment, warmth, contrast, atmosphere

Logo rules apply to the **logo**, not every surrounding surface.

Direction: `VISUAL-FREEDOM-SPRINT.md`  
Layout: `LAYOUT COMPOSITION.md` (guidance, not blocker)

---

# Agent routing

| Role | Responsibility |
|------|----------------|
| **Owner** | Final authority, approvals, launch, legal, pricing |
| **Creative Director** | Visual direction and sprint briefs |
| **Cursor** | Scoped implementation in repo |
| **Cloudie** | Deployment, DNS, Netlify, production risk |
| **Codex** | Deeper refactors, audits, multi-file work |

---

# Workflow rules

- Start with clean `git status`; confirm HEAD.
- Scoped patch only; one code editor at a time.
- Stage exact files only — never `git add .`
- No screenshots or QA artifacts in commits.
- `npm run lint` and `npm run build` before commit/push.
- User-facing copy in `messages/pl.json` and `messages/en.json`.
- Report changed files; no push unless Owner approves.

Details: `WORKFLOW.md`

---

# What not to touch (unless briefed)

- Environment variables, Netlify config, DNS
- Estimator pricing matrix values
- Contact API behavior
- Pathway slug renames
- Package or SLA definitions
- Removed build-era docs treated as active law

---

# Current next phase

1. Optional Visual Freedom Sprint (Owner-scoped sections).
2. Technical readiness audit.
3. Production contact email verification.
4. Legal/entity/GDPR review.
5. Final pricing confirmation.
6. Remove noindex + final smoke test when approved.

Checklist: `LAUNCH-CHECKLIST.md`

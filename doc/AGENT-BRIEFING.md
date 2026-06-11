# AGENT-BRIEFING.md — SENTINEL

Short briefing for Cursor, Codex, and Cloudie.

---

# Current project state

- **Product:** Sentinel Costa Blanca — structured local owner representation (Torrevieja + ~50–70 km).
- **Website:** Pre-live, soft-launch review ready. `noindex,nofollow` active.
- **Phase:** Launch-era — visual composition rebuild merged; final visual tuning + readiness audits.
- **Latest main / website SHA:** `e5fa7bb` (composition rebuild + unified canonical visual mode).
- **Launch-era governance baseline SHA:** `6a0d0f7` (reset + alignment + root entry points).
- **Optional cognitive audit tool added:** `96fef3e` (`COGNITIVE-PAGE-AUDIT.md`).

**Visual composition rebuild is merged. The site uses one canonical Sentinel atmosphere — not a toggleable app skin.**

Canonical mode: dark cinematic hero / authority bands · warm paper body sections · dark final CTA / footer · controlled copper / sea / clay accents · **no public dark/light theme toggle**.

Future visual work should **build on canonical mode**, not recreate dual themes.

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

Website execution may evolve when Owner-scoped:

- Page palette, gradients, and surfaces (reference palette is directional, not a cage)
- Section and full-page composition, imagery, SVG/CSS visual systems
- Card/panel treatment, warmth, contrast, atmosphere, motion
- Generated assets and bold composition shifts

Logo rules apply to the **logo**, not every surrounding surface.

Direction: `VISUAL-FREEDOM-SPRINT.md`  
Layout: `LAYOUT COMPOSITION.md` (guidance, not blocker)

---

# Agent routing

| Role | Responsibility |
|------|----------------|
| **Owner** | Final authority, approvals, launch, legal, pricing |
| **Creative Director** | Visual direction and scoped visual briefs |
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
- Report changed files; push only when Owner approves (docs-only alignment may push when briefed).

Details: `WORKFLOW.md`

---

# What not to touch (unless briefed)

- Environment variables, Netlify config, DNS
- Estimator pricing matrix values
- Contact API behavior
- Pathway slug renames
- Package or SLA definitions
- Removed build-era docs treated as active law
- Reintroducing a public theme toggle or dual global theme system

---

# Current next phase

1. Live visual smoke + short corrective patches if needed (header, mobile density, contact form comfort).
2. Production contact email verification.
3. Legal/entity/GDPR review.
4. Final pricing confirmation.
5. Remove noindex + final smoke test when approved.

Checklist: `LAUNCH-CHECKLIST.md`

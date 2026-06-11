# AI-GOVERNANCE.md — SENTINEL

Lean agent governance. Entry point for new AI sessions.

---

# 1. What Sentinel is

Structured local owner representation for remote property owners on the southern Costa Blanca.

**Not:** concierge · lifestyle service · generic property management · rental management

The website is a qualification-first system interface — it may be warmer and more visual while boundaries stay clear.

---

# 2. Authority

| Order | Document | Role |
|-------|----------|------|
| 1 | `DECISIONS.md` | Binding contracts |
| 2 | `TASK.md` | Current phase and scope |
| 3 | `STATUS.md` | Factual snapshot |
| 4 | Active supporting docs | Scoped guidance |
| 5 | Implementation | Must align with 1–4 |

**Active docs prevail.** Build-era task and audit documents were removed from the active repository after documentation reset. They must not block approved launch-era visual work.

---

# 3. Roles

| Role | Authority |
|------|-----------|
| **Owner** | Final decisions, launch, legal, pricing |
| **Creative Director** | Visual direction and sprint briefs |
| **Cursor** | Scoped implementation |
| **Cloudie** | Deployment, Netlify, DNS, production risk |
| **Codex** | Deep refactors, audits, multi-file tasks |

One agent modifies code at a time. No hidden commits.

---

# 4. Execution discipline

- Scoped patches only; never `git add .`
- No screenshots or QA artifacts in commits
- PL/EN parity; user-facing strings in `messages/pl.json` and `messages/en.json`
- `npm run lint` and `npm run build` before commit/push
- No push unless Owner approves
- No service-contract changes without Owner approval

Details: `WORKFLOW.md` · `AGENT-BRIEFING.md`

---

# 5. Visual work

Build-era “no visual experimentation” rules and dual global theme work are **retired**.

Visual composition rebuild is **merged** (`e5fa7bb`). The site uses **one canonical visual atmosphere** with **no public theme toggle** — per `DECISIONS.md` §12.3 and `VISUAL-FREEDOM-SPRINT.md`.

Future visual work may be bold when Owner-scoped. Logo assets remain **LOCKED** per `LOGO-*.md`.

---

# 6. Drift control

If code conflicts with `DECISIONS.md`:

1. Pause.
2. Report conflict.
3. Owner decides.

Do not silently change packages, SLA, estimator, contact API, pathways, or legal substance.

---

# 7. Quick links

| Topic | Doc |
|-------|-----|
| Agent briefing | `AGENT-BRIEFING.md` |
| Service model | `SERVICE-STRUCTURING.md` |
| Copy rules | `COPY-DISCIPLINE-CODEX.md` |
| English | `EN-ADAPTATION-LAYER.md` |
| Launch | `LAUNCH-CHECKLIST.md` |
| Layout | `LAYOUT COMPOSITION.md` |

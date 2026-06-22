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

# 3. Roles and agent routing

Full page-polish protocol: `polish.md` (Owner operational doc). This section summarizes routing only.

| Work type | Best agent |
|-----------|------------|
| Creative decision / acceptance | ChatGPT + Owner |
| Fine visual/layout implementation | **Codex** |
| Root-cause CSS/grid/component diagnosis | **Codex** |
| Simple edits / push / screenshots / file staging | Cursor |
| Visual exploration / assets / outsider critique | Gemini + Nano Banana |
| Deployment / DNS / Netlify / production risk | Cloudie / Claude |
| Legal / pricing / contact / schema / noindex | Owner approval required |

**Routing assumption:** Cursor handles mechanical work. Codex handles serious page polish. ChatGPT judges. Owner approves. Cloudie protects deploy risk. Gemini explores visuals.

| Role | Authority |
|------|-----------|
| **Owner** | Final decisions, launch, legal, pricing |
| **ChatGPT** | Creative direction, verdicts, scoped briefs, accept/revert/escalate — does not implement code |
| **Codex** | Serious page polish, CSS/grid diagnosis, multi-file layout work |
| **Cursor** | Mechanical implementation, screenshots, staging, commits/push when briefed |
| **Gemini + Nano Banana** | Visual critique and asset concepts — not project authority |
| **Cloudie / Claude** | Deployment, Netlify, DNS, production and architecture risk |

One agent modifies code at a time. No hidden commits.

### Escalation and anti-loop

- Maximum **two tuning passes** per section from the same agent; then ChatGPT/Owner must accept, revert, escalate to Codex, or re-scope. No third blind Cursor pass.
- If two Cursor visual attempts do not match the brief — stop Cursor.
- If CSS applies technically but not visually — DOM/computed-style verification, not another guess.
- Grid architecture, animation layering, masking, responsive balance, or variant-specific states → start with **Codex**.

### Live judgment for motion

Screenshots verify layout only. Animation visibility, hover behavior, and motion atmosphere require **live browser review**. Human acceptance required when the task is “visible but not dominant.”

### Codex auto-commit / push

Codex may auto-commit and push scoped implementation patches when:

- brief is Owner-approved;
- no protected contracts are touched;
- lint / build / `git diff --check` pass;
- screenshots and QA artifacts are not staged;
- report lists files changed, validation, SHA, and push result.

**No auto-push** for: estimator/pricing · packages/SLA/emergency authority · contact API/schema · legal substance · pathway slugs/routing · noindex/launch state · DNS/Netlify settings · broad redesign beyond approved brief.

Cursor push still requires Owner approval unless Owner has explicitly delegated for a mechanical task.

---

# 4. Execution discipline

- Scoped patches only; never `git add .`
- No screenshots or QA artifacts in commits
- PL/EN parity; user-facing strings in `messages/pl.json` and `messages/en.json`
- `npm run lint` and `npm run build` before commit/push
- No push unless Owner approves — except Codex scoped auto-push per §3 when protected contracts are untouched
- No service-contract changes without Owner approval

Details: `WORKFLOW.md` · `AGENT-BRIEFING.md`

---

# 5. Visual work

Build-era “no visual experimentation” rules and dual global theme work are **retired**.

Visual composition rebuild is **merged** (baseline `e5fa7bb`; graphic passes through `cef326b`; proof-assets integration `b9800ce`; selected-pathway contrast `e682b5b`; current live/main baseline `01b2624`). The site uses **one canonical visual atmosphere** with **no public theme toggle** — per `DECISIONS.md` §12.3 and `VISUAL-FREEDOM-SPRINT.md`.

Broad visual iteration is stopped. Future visual work may be bold when Owner-scoped, but the next recommended implementation is **page-by-page micro polish, starting with the homepage**. Do not start another global transformation pass. Logo assets remain **LOCKED** per `LOGO-*.md`.

Homepage Trust Spine Pilot is delivered. Do not request new synthetic imagery for homepage micro polish unless the Owner explicitly reopens asset generation.

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
| Page polish protocol (full) | `polish.md` |
| Service model | `SERVICE-STRUCTURING.md` |
| Copy rules | `COPY-DISCIPLINE-CODEX.md` |
| English | `EN-ADAPTATION-LAYER.md` |
| Launch | `LAUNCH-CHECKLIST.md` |
| Layout | `LAYOUT COMPOSITION.md` |

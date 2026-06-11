# WORKFLOW.md — SENTINEL

Execution rules for code changes.

---

# Before starting

1. `git status` — working tree clean or changes understood.
2. Confirm current branch and HEAD.
3. Read `DECISIONS.md` for anything in scope.
4. Confirm task brief scope (section, golden question if given).

---

# During work

- **Scoped patch only** — do not redesign unrelated sections.
- **One agent edits code at a time.**
- User-facing strings: update both `messages/pl.json` and `messages/en.json`.
- Protected contracts unchanged unless Owner explicitly approved.
- Visual experimentation allowed when briefed per `VISUAL-FREEDOM-SPRINT.md`.

---

# Staging and commits

- Stage **exact files** for the change — never `git add .`
- Do not stage: `doc/screenshots/`, generated QA artifacts, temp scripts, `.env`, zips
- Clear commit message; small reviewable commits
- **No push** unless Owner approves

---

# Before commit / push

```bash
npm run lint
npm run build
git diff --check
```

For visual changes also verify:

- PL/EN parity
- 390px mobile — no horizontal overflow
- No accidental edits outside requested scope

---

# Reporting

After a task, report:

- Files changed
- What changed / what was deliberately not changed
- Lint and build result
- Git status
- Whether anything was pushed

---

# Documentation

- **Active docs** in `doc/` prevail for current work.
- Build-era task and audit documents were removed after documentation reset — they must not block approved launch-era visual work.

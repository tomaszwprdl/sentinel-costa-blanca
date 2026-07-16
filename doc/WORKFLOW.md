# WORKFLOW.md - Launch Workflow

## Start

1. Run `git status -sb`.
2. Confirm branch and HEAD.
3. Read `doc/STATUS.md`, `doc/TASK.md`, `doc/DECISIONS.md`, and `doc/QA.md`.
4. Understand any existing uncommitted changes before editing.

## Scope

- Implement only the approved brief.
- Do not redesign unrelated sections.
- Do not reopen closed Services/estimator work unless fixing confirmed regression or explicitly scoped.
- Do not re-open shipped Services, FAQ, About, or Contact visual models unless explicitly scoped by Owner.
- Do not change protected contracts without Owner approval.
- Contact visual work must not alter schema, field names, validation, payload, or `app/api/contact/route.ts`.
- Estimator visual work must not alter pricing/range logic or contact handoff payload.
- User-facing copy must update PL and EN together.
- Whole-site copy or structure changes must be checked against the page-ownership model and canonical terminology in `doc/DECISIONS.md` before implementation.

## Validation

Code changes:

```bash
npm.cmd run lint
npm.cmd run build
git diff --check
```

Docs-only changes:

```bash
git diff --check
git status -sb
```

Visual changes also require production-build screenshots and browser checks from `doc/QA.md`.

## Local Server Workflow

- Dev iteration uses one foreground dev server:

```bash
npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

- Dev URLs use `http://127.0.0.1:3000/...`.
- Do not compare dev work against `3100` or live production.
- Production QA always runs `npm.cmd run build` before `npm.cmd run qa:serve`.
- Production QA uses `http://127.0.0.1:3100`.
- Source changes are not reflected in production QA until rebuild.
- Commit does not refresh dev, production QA, screenshots, or live deploys.
- Capture with an explicit URL and write only to `output/qa`.
- If a change appears stale, check wrong port, stale `.next`, stuck HMR, old
  screenshots, live/local confusion, and late-loading images before changing app
  code.
- If PowerShell or `Start-Process` reports duplicate `PATH`/`Path`, restart
  terminal, Cursor, and Codex before debugging app code. Registry state should
  normally contain only `Path`. Duplicate `PATH`/`Path` is shell pollution,
  never an app failure.
- AI agent shells with duplicate `PATH`/`Path` should run
  `npm.cmd run env:doctor` and then prefer the clean variants
  (`dev:clean`, `build:clean`, `qa:serve:clean`, `qa:capture:clean`), which
  route through `scripts/tooling/run-clean-env.cjs` with a sanitized single
  `Path`. See `doc/QA.md` "Clean Tooling Runner". The normal manual workflow
  and the existing scripts remain valid from a clean Owner PowerShell.

## Git

- Stage exact files only.
- Never use `git add .`.
- Never stage screenshots, `output/`, QA artifacts, temp scripts, `.env`, zips, or generated files.
- Commit when the task asks for a commit and validation passes.
- Push only when Owner explicitly approves.

## Commit Messages

Use clear, scoped messages:

- `docs: ...`
- `fix: ...`
- `refine: ...`

## Reporting

Report:

1. Starting branch/HEAD and status.
2. Files changed.
3. What changed.
4. What was deliberately not changed.
5. Validation results.
6. Final status.
7. Commit SHA and push status.

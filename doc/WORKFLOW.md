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
- Do not change protected contracts without Owner approval.
- User-facing copy must update PL and EN together.

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

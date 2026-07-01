# AGENTS.md - Sentinel Costa Blanca

Canonical short entrypoint for coding agents.

## Before Work

1. Run `git status -sb`, confirm branch and HEAD.
2. Read active docs in this order:
   - `doc/STATUS.md`
   - `doc/TASK.md`
   - `doc/DECISIONS.md`
   - `doc/QA.md`
   - `doc/WORKFLOW.md`
3. Read reference docs only when the task needs them:
   - `doc/BRAND.md`
   - `doc/COPY-DISCIPLINE-CODEX.md`
   - `doc/EN-ADAPTATION-LAYER.md`
   - `doc/PROOF-LAYER-INVENTORY.md`
4. Do not read archived/deleted historical protocols unless the task explicitly requires archaeology.

Protected decisions in `doc/DECISIONS.md` are binding.

For current scope, the Owner's latest brief outranks `doc/TASK.md` and `doc/STATUS.md` unless it conflicts with protected decisions in `doc/DECISIONS.md`.

Reference docs are read only when they are directly relevant to the task.

## Current Truth

- Services page is shipped and closed unless confirmed real-use evidence or a regression appears.
- Estimator affordance is shipped; protected estimator logic stayed untouched.
- FAQ polish is local, unpushed, and not final.
- Current FAQ remaining scope is narrow:
  - Codex-style ambient background depth, no mouse cursor effect.
  - Diagnostic assumption board label/copy sanity.

## Protected Areas

Do not change without explicit Owner approval:

- Estimator logic, matrix, ranges, result behavior, or contact payload.
- Contact API/schema/payload.
- Routes, slugs, pathway query behavior.
- Legal substance and `noindex,nofollow`.
- Package names/count.
- SLA meaning and emergency authority.
- FAQ answer meanings.
- Sentinel identity, descriptors, contact details, and service area.

## Workflow

- Stay inside the approved scope.
- User-facing copy must update PL and EN together through `messages/pl.json` and `messages/en.json`.
- Never use `git add .`; stage exact files only.
- Never stage screenshots, `output/`, QA artifacts, temp scripts, `.env`, zips, or generated files.
- For code changes run lint, build, and `git diff --check`.
- For visual changes use production-build screenshots and check PL/EN, 390px overflow, console errors, failed requests, and 4xx/5xx.
- Push only when Owner explicitly approves.

## Reporting

Report:

1. Starting branch/HEAD and git status.
2. Files changed.
3. What changed.
4. What was deliberately not changed.
5. Validation results.
6. Final git status.
7. Commit SHA and push status, if applicable.

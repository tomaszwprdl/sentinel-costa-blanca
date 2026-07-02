# TASK.md - Current Approved Work

This file tracks the next action only. Binding contracts live in `DECISIONS.md`.

## Current Task

Current active task: post-launch monitoring / Owner-directed final polish only.

No open implementation task after the Contact Night Desk deploy.

## Current Shipped State

- Services page is shipped/live and protected.
- Estimator is shipped/live and protected.
- FAQ is shipped/live and protected.
- About is shipped/live and launch-grade after the editorial-depth/team-introduction pass.
- Contact is shipped/live as Night Desk controlled intake.

## Default Scope

Unless the Owner gives a new explicit implementation brief:

- Do not re-open shipped pages.
- Do not change app code, CSS, messages, assets, package files, routes, legal/noindex, estimator logic, contact API, or form contracts.
- Docs/status updates may proceed only when requested.

## Protected

Do not change without explicit Owner approval:

- Services shipped visual/content model.
- FAQ shipped answer meanings and visual model.
- About shipped local/team proof direction.
- Contact Night Desk visual model.
- Contact schema, field names, validation, payload, or `app/api/contact/route.ts`.
- Estimator logic, matrix, pricing/ranges, result behavior, or contact handoff payload.
- Routes/slugs/query behavior.
- Legal/noindex.
- Package names/count.
- SLA/emergency authority.

## Validation For Future Work

Docs-only changes:

- `rg --files -g "*.md"`
- `git diff --check`

Code or visual changes:

- Follow `doc/QA.md`.
- Do not stage `output/`.

## After Owner Approval

Commit and push only when explicitly requested by Owner.

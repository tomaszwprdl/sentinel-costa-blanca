# TASK.md - Current Approved Work

This file tracks the next action only. Binding contracts live in `DECISIONS.md`.

## Current Task

The page-by-page polish pass is complete. No open implementation task.

Next steps are verification, not new work:

1. Push/deploy the local polish commits (Owner-approved push only).
2. Final whole-site QA against the deployed build (desktop + 390px mobile, PL/EN, overflow/console/failed-request/4xx-5xx, Services anchors).
3. Launch / `noindex,nofollow` removal decision — later, Owner-owned.

## Current Shipped State

- Home is passed after the hero/shared-core polish.
- Pathway states are passed after the hero-summary / process-spine split and pathway differentiation.
- Services page is shipped/live and protected; mobile uses a separate buyer-oriented IA (see `DECISIONS.md`).
- Estimator is shipped/live and protected.
- FAQ is shipped/live and protected after the mobile compression pass.
- About is shipped/live and launch-grade after the editorial-depth/team-introduction and mobile-tightening passes.
- Contact is shipped/live as Night Desk controlled intake; mobile form is the tightened four-step presentation.

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

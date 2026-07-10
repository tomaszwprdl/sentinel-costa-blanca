# TASK.md - Current Approved Work

This file tracks the next action only. Binding contracts live in `DECISIONS.md`.

## Current Task

The page-by-page polish pass and the beta-test clarity bundle (`c0736d0`) are complete. The website is not the active bottleneck.

Website implementation and proof polish are paused/frozen except for critical fixes. Do not reopen website polish during this phase.

Current task: produce a clean working document set from the existing Sentinel draft architecture, templates, and test fills. These are working documents, not final customer-ready documents until simulation, beta reading, and legal/accounting gates are cleared.

### Immediate next step — SCO-01 v0.5 beta read

SCO-01 v0.5 passed two internal simulations (Scenario B re-fill and one fresh private-profile fill), both `simulation-pass`.

- Prepare/use SCO-01 v0.5 for beta read.
- Do not patch SCO-01 before beta unless the Owner explicitly approves.
- Beta watch-points (do not pre-solve; beta readers may not care or may expose a better fix):
  1. cleaning pending-state wording
  2. owner-arranged exterior contractor / gardener
  3. smart-lock digital access lifecycle
  4. access wording: `do ustalenia` vs `nieprzekazany`
  5. Basic visit rhythm free-text

Next concrete document batch:

1. Scope Register / Property Scope Confirmation.
2. Visit Report.
3. Decision Request.
4. Completed Action Summary.
5. Key Custody / Access Register.
6. Owner Contact + Decision Channel Sheet.
7. Cleaning / Readiness Checklist.
8. Photo / Evidence Rules.
9. Emergency / Non-response SOP.

Testing sequence:

1. Internal simulation.
2. Beta tester read.
3. Lawyer/accountant review.
4. Public-safe sample report.
5. Final website proof integration.

Launch / `noindex,nofollow` removal remains a later Owner-owned decision.

## Current Shipped State

- Home is passed after the hero/shared-core polish.
- Pathway states are passed after the hero-summary / process-spine split and pathway differentiation.
- Services page is shipped/live and protected; mobile uses a separate buyer-oriented IA (see `DECISIONS.md`).
- Estimator is shipped/live and protected. Mixed/undetermined use is classification-before-estimate (Option A): full-width classification notice, no numeric range. See `DECISIONS.md`.
- FAQ is shipped/live and protected after the mobile compression pass.
- About is shipped/live and launch-grade after the editorial-depth/team-introduction and mobile-tightening passes.
- Contact is shipped/live as Night Desk controlled intake; mobile form is the tightened four-step presentation.

## Default Scope

Unless the Owner gives a new explicit implementation brief:

- Do not re-open shipped pages.
- Do not change app code, CSS, messages, assets, package files, routes, legal/noindex, estimator logic, contact API, or form contracts.
- Document production and docs/status updates may proceed only when requested and scoped by Owner.
- Do not create final customer-facing documents, legal clauses, or public proof examples before the required simulation, beta, legal/accounting, and Owner approval gates.

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

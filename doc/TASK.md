# TASK.md - Current Approved Work

This file tracks the next action only. Binding contracts live in `DECISIONS.md`.

## Current Task

The page-by-page polish pass and the beta-test clarity bundle (`c0736d0`) are complete. The website is not the active bottleneck.

Website implementation and proof polish are paused/frozen except for critical fixes. Do not reopen website polish during this phase.

Current task: produce a clean working document set from the existing Sentinel draft architecture, templates, and test fills. These are working documents, not final customer-ready documents until simulation, beta reading, and legal/accounting gates are cleared.

### Immediate next step — prepare the connected beta-read packet

The **minimum beta-readable set is complete**; all five documents are `simulation-pass` Level-2 working candidates. The earlier deferral (beta blocked until the companion set existed) is satisfied.

Set (all with Markdown source + DOCX candidate):
1. **SCO-01** v0.5 — scope confirmation (frozen)
2. **AKC-03** v0.1 — key handover / return receipt
3. **CLN-02** v0.1 — cleaning / readiness checklist
4. **REC-01** v0.1 — visit report
5. **REC-03** v0.1 — decision request

- **Immediate next step: prepare the connected beta-read packet** for the set.
- Beta reader reviews the **connected operational set**: scope → access/key receipt → cleaning/readiness → visit report → decision request.
- Prepare revised beta instructions and a revised feedback form for the *set* (not isolated SCO-01).
- Prepare a send folder with numbered human-facing copies of the five DOCX candidates (do **not** rename repo source files).
- **Do not patch SCO-01 / CLN-02 / REC-01 / REC-03 / AKC-03 before beta unless the Owner explicitly approves.**
- After beta feedback: triage into real defect / reader preference / legal-accounting concern / ignore-noise.
- Watch-points carried forward (do not pre-solve): SCO-01 — cleaning pending-state wording · owner-arranged exterior contractor/gardener · smart-lock access lifecycle · `do ustalenia` vs `nieprzekazany` · Basic rhythm free-text. REC-01 — §5 status controlled values · multi-finding affordance · multi-context visit type. REC-03 — trim options menu · §5/§6 authority overlap · §9 reply channel. AKC-03 — collapse digital-access when N/A · handover/return selector · per-key access test.

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

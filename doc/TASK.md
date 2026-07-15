# TASK.md - Current Approved Work

This file tracks the next action only. Binding contracts live in `DECISIONS.md`.

## Current Task

Deploy and smoke-verify the Owner-approved How It Works report proof rebuild committed at `eeae1dd`. The owner report section now centers a real photographed REC-01-style report document as example/documentary material, not client proof. Desktop uses compact top copy, a dominant centered report photo, and observation/evidence/next-step cards with restrained leader lines; tablet/mobile use a stacked layout. No generated damp/stain photo was added. Protected contracts are unchanged. Pending: push and deployed smoke QA for PL/EN desktop, PL 768px, and PL/EN 390px.

The Owner-approved How It Works visual-assets pass is pushed and deployed on `origin/main` at `a2b6676` (app commit `84112f9`, docs closure `a2b6676`). Production smoke QA passed. No active website implementation task remains. Do not reopen How It Works visual work unless a real regression appears, and do not start legacy/orphaned cleanup without explicit Owner scope.

Completed pass:

- Inspection matrix image added as the main physical-check visual.
- Compact `Jedna obserwacja` / `One observation` case-thread bridge added.
- Route-strip image added for access → check → report → decision.
- Role split clarified: case thread = example route / narrative bridge; inspection matrix = physical checks; report artifact = owner record; decision threshold = action vs owner-approval boundary.
- Case-thread, schematic, and report materials remain example structure only, not client proof.
- No observation photo was added.
- Protected contracts are unchanged.

Deployed verification passed for `/pl/how-it-works` desktop, `/en/how-it-works` desktop, PL 768px, PL 390px, and EN 390px. Live checks confirmed the compact case thread, route-strip image, inspection matrix image, report artifact, decision threshold, and CTA. The old pinned journey is absent; overflow is zero; console errors, failed requests, and 4xx/5xx responses are empty; and `noindex,nofollow` is unchanged. No housekeeping cleanup was performed. Orphaned legacy How It Works code/messages remain optional future housekeeping in a separate scope.

The page-by-page polish pass and the beta-test clarity bundle (`c0736d0`) are complete. The website is not the active bottleneck.

### Latest completed website task — beta fatigue / property-cue bundle (7145474)

Owner reopened Home and Services under explicit scope (later beta-test finding) and accepted the result. App commit `7145474` (homepage cue placement corrected by `467d192`) is live on `origin/main` in the stack at `a28b50e`; production smoke QA passed and the beta round is closed. Complete:

- Home: small apartment/property glyph leads the left hero eyebrow (`LOKALNA REPREZENTACJA WŁAŚCICIELA` / `LOCAL OWNER REPRESENTATION`), before the headline, for instant category recognition (restrained single cue; not in the right-side selector title). Placement corrected in `467d192`.
- Services: post-estimator information fatigue reduced — compact owner-facing after-estimator confirmation section + CTA follows the estimator; dense operational record / execution-only detail collapses behind desktop disclosure; mobile ordering fixed so the new section follows the estimator. Boundaries compressed, not removed.
- Protected contracts unchanged: estimator logic/matrix/pricing/ranges/result behaviour, contact API/schema/payload, routes/slugs/query behaviour, legal/noindex, package names/count, Full `min. 3/month`, emergency authority limits. PL/EN parity kept.
- Validation passed (lint, build, `git diff --check`, production screenshots per `doc/QA.md`).
- Done: the stack is pushed and live at `a28b50e` and production smoke QA passed (see `doc/STATUS.md` "Deployed Beta-Smoke Verification"). No active website task. No new website polish is open; do not reopen Services unless a new beta tester finds a real issue or production shows an actual regression. Non-polish next steps: production contact email end-to-end confirmation, final commercial pricing/range confirmation, legal/entity/GDPR review, Owner decision on `noindex` removal, real-photo/proof replacement plan.

Website implementation and proof polish are otherwise paused/frozen except for critical fixes. Do not reopen website polish during this phase.

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

- Home is passed after the hero/shared-core polish; a small apartment/property glyph leads the left hero eyebrow (`7145474`, placement corrected in `467d192`).
- Pathway states are passed after the hero-summary / process-spine split and pathway differentiation.
- Services page is shipped/live and protected; mobile uses a separate buyer-oriented IA (see `DECISIONS.md`). Post-estimator fatigue reduced (`7145474`): compact after-estimator confirmation section + CTA, dense operational detail collapsed behind desktop disclosure.
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

# STATUS.md - Sentinel Costa Blanca

Current project state only. This document is descriptive; `DECISIONS.md` is binding.

## Snapshot

- Branch at this documentation update: `main`.
- Latest app/content beta-test clarity commit: `c0736d0` (`refine: address beta-test clarity findings`); `origin/main` already contains this commit.
- Last pushed docs checkpoint before this phase update: `50a292c` (`docs: add Sentinel document-system drafts`).
- Site phase: pre-launch / soft-launch review.
- The page-by-page polish pass is complete; the beta-test clarity bundle (`c0736d0`) is now applied on top of it. This is the core polish gate, not "launch-final forever."
- Website implementation is paused/frozen except for critical fixes; website proof polish is not the active bottleneck.
- Current active phase: Sentinel document production from the repo draft system.
- `noindex,nofollow` remains active until Owner approves indexing.

Always verify current branch, HEAD, and status with git preflight.

## Beta-Test Clarity Bundle (c0736d0)

Owner-accepted clarity changes on top of the closed polish pass. App/content commit `c0736d0` is present on `origin/main`; docs HEAD `578197d` records the bundle.

- Home: estimator CTA in the local-operator/cost card is now a real button ("Sprawdź orientacyjny zakres" / "Check the indicative scope"), not a weak text link. The pathway selector remains the primary first interaction. The main capability sentence now names keyholding/access and cleaning/readiness alongside condition checks, documentation, and action-within-limits. The shared-core mechanism line adds property readiness ("gotowość lokalu" / "property readiness").
- Services: package responsibility/deliverable summaries clarified; tablet package ladder layout corrected. Full package visit rhythm is `min. 3/mies.` / `min. 3/month`.
- Estimator: mixed/undetermined use is a classification-before-estimate path (Option A). Selecting "Nie wiem jeszcze / model mieszany" and clicking Next shows a full-width classification notice — no numeric range, no narrow result side rail. Private/guest priced flow is unchanged.
- Protected contracts unchanged: estimator matrix/pricing/ranges, contact API/schema/payload, routes/slugs/query behavior, legal/noindex, package names/count, emergency authority limits.

## Documentation System Status

- Scope Register v0.3 semantic patch exists.
- Scenario B Scope Register test fill is complete and passed as `fill-ready`.
- SCO-01 v0.5 functional working DOCX candidate exists (Level 2): not customer-ready, not lawyer/accountant reviewed, not signature-approved.
- SCO-01 v0.5 Scenario B re-fill: `simulation-pass`.
- SCO-01 v0.5 fresh private-profile fill: `simulation-pass`.
- SCO-01 v0.5 current state: ready for beta read; watch-points carried, patch only if Owner approves.
- REC-01 Visit Report and REC-03 Decision Request templates are drafted.
- Scenario B dry-runs for REC-01 and REC-03 are complete and passed as `template-ready`.
- Option A authority doctrine is now the launch doctrine: Basic / Extended require owner approval before paid action/vendor spend; Full keeps EUR 300 standard autonomous protective-action authority and optional EUR 500 if agreed.
- The repo now contains draft architecture, audits, draft templates, and simulated test fills; it does not yet contain finished customer-ready Word/PDF/fillable documents.
- The next goal is to produce clean working documents from these drafts, beginning with scope confirmation, visit/report records, decision/action records, access/key records, contact-channel sheets, cleaning/readiness checklists, evidence rules, and emergency/non-response SOPs.
- These documents remain draft/internal/test artifacts. They are not customer-facing approved.
- Testing sequence before final proof polish: internal simulation, beta tester read, lawyer/accountant review, public-safe sample report, then final website proof integration.
- Legal and accountant gates remain before customer-facing use.

## Page-by-Page Polish Pass — Verdicts

All pages pass the core polish gate. Do not reopen a passed page without a real regression or explicit Owner scope.

- Home: pass. Clearer first-screen hero on the unselected state; shared-core floor is a compact connected dossier/spine panel; unselected hero moved upward on desktop to tighten the opening. Beta bundle: estimator CTA is now a real button, the capability sentence names keys/access and cleaning/readiness, and the shared-core line adds property readiness.
- Pathway states: pass. Hero detail simplified into a compact summary; detailed operational logic moved into pathway-specific process spines; private / guest / mixed differentiated in rhythm and copy; guest comparison carousel no longer auto-advances on desktop.
- Services: pass. Desktop stays dossier/specification style; mobile uses a separate buyer-oriented IA (hero → shortcut rail → short model summary → package summary → estimator → collapsed proof sections → final CTA) with estimator early, a compact segmented package selector, and a compact vertical responsibility ladder. Beta bundle: package responsibility/deliverable summaries clarified, tablet package ladder layout corrected, Full package visit rhythm `min. 3/mies.` / `min. 3/month`.
- FAQ: pass. Mobile quick questions are compact action rows; search/category access comes earlier; wrong assumptions reduced on mobile behind reveal. Answer substance and business boundaries unchanged.
- About: pass. Mobile spacing tightened; operating/team structure more compact on mobile. Trust meaning, local team proof, Aleksy proof, and "Sentinel jest / nie jest" substance unchanged.
- Contact: pass. Mobile form reads as four compact numbered steps; "Po wysłaniu" steps are compact rows on mobile; direct contact stays before the form. Schema/API/payload, required fields, and form behavior unchanged.

## Shipped / Live / Protected

Services page is shipped, live-verified, and closed unless real-use evidence, a confirmed regression, or explicit Owner scope appears.

Estimator affordance is shipped/live and protected:

- Estimator logic, matrix, pricing/ranges, result behavior, and contact handoff payload remain unchanged.
- Package/SLA/emergency meanings remain protected.
- Mixed/undetermined use is a classification-before-estimate path (Option A): selecting it and clicking Next shows a full-width classification notice, not a numeric range and not a narrow result side rail. Private/guest priced flow is unchanged. See `DECISIONS.md`.

FAQ is shipped/live and protected unless the Owner explicitly reopens it.

About is shipped/live and launch-grade after the editorial-depth/team-introduction pass.

Contact is shipped/live as Night Desk controlled intake:

- Dark secure intake canvas.
- Crisp white form dossier.
- Sticky preparation/direct-contact sidebar on desktop.
- Post-submit flow integrated into the form dossier.
- Hero uses `public/photos/contact-night-window.webp` as visible but subdued architectural/lit-window atmosphere.
- Form schema, field names, validation, payload, and `app/api/contact/route.ts` were deliberately unchanged.

## Active Task State

No open website implementation task. Website implementation is paused/frozen except for critical fixes. The page-by-page polish pass is closed and the beta-test clarity bundle (`c0736d0`) is accepted.

Current active phase:

- Sentinel document production: turn the existing draft architecture, templates, and test fills into a clean working document set.
- Do not reopen website proof polish during this phase; final proof/report example work comes later.
- Existing repo docs are not finished customer-ready documents.
- Testing order: internal simulation, beta tester read, lawyer/accountant review, public-safe sample report, then final website proof integration.
- Legal/accountant review remains required before customer-facing use of the document system.
- Launch / `noindex,nofollow` removal remains a later Owner decision.
- Owner-directed final polish only if a real regression appears.
- Do not re-open a passed page unless explicitly requested by Owner.

## Not Done

- Production contact email end-to-end confirmation.
- Final commercial pricing/range confirmation.
- Legal/entity/GDPR review.
- Owner decision to remove `noindex,nofollow`.
- Real-photo replacement plan for accepted synthetic placeholders.

## Protected During Current Work

- Services unless fixing a confirmed regression or Owner-scoped request.
- FAQ answer meanings and shipped FAQ visual model unless explicitly reopened.
- About shipped local/team proof direction unless explicitly reopened.
- Contact schema, field names, validation, payload, and `app/api/contact/route.ts`.
- Contact Night Desk visual model unless explicitly reopened.
- Estimator logic/matrix/pricing/ranges/result behavior/contact handoff payload.
- Routes/slugs/query behavior.
- Legal/noindex.
- Package names/count.
- SLA/emergency authority.
- Contact details and service area.
- `output/`, screenshots, QA artifacts, temp scripts, `.env`, zips, and generated files.

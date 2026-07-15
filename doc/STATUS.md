# STATUS.md - Sentinel Costa Blanca

Current project state only. This document is descriptive; `DECISIONS.md` is binding.

## Snapshot

- How It Works is pushed, deployed, and smoke-verified in its current operational-proof form on `origin/main` (latest app commit `eeae1dd`, deployment docs `6ca538f`, smoke closure `0481852`). The live sequence is: compact hero; `Jedna obserwacja` / `One observation` case thread with route-strip visual; inspection matrix as the main physical-check visual; owner report proof; decision threshold; continuing rhythm/activation notes; and CTA. The `Co otrzymuje właściciel` / owner report section centers a photographed REC-01-style example document. Desktop uses compact copy above a dominant centered photo with observation/evidence/next-step cards and restrained leader lines; tablet/mobile use a stacked layout. The example-document/not-client-report disclaimer remains explicit: this is documentary/source material, not real client proof or downloadable public paperwork. No generated damp/stain photo was added. Production smoke passed for PL/EN desktop, PL 768px, and PL/EN 390px with intact photo corners, all current modules present, the old native report mockup absent, zero overflow, clean console/network checks, and unchanged `noindex,nofollow`. Protected contracts are unchanged.
- Branch at this documentation update: `main`.
- At this documentation preflight, `main` and `origin/main` are aligned at `0481852`; the latest How It Works report-proof state is live and production-smoke verified.
- App/content commits in that live stack: `7145474` (`refine: address beta feedback (home property cue + services fatigue)`) with its homepage cue placement corrected by `467d192` (`fix: move homepage property cue to hero`) — the property glyph is on the left hero eyebrow, not the usage selector title.
- Earlier app/content beta-test clarity commit: `c0736d0` (`refine: address beta-test clarity findings`) is also on `origin/main`.
- Last pushed docs checkpoint before this phase update: `50a292c` (`docs: add Sentinel document-system drafts`).
- Site phase: pre-launch / soft-launch review.
- The page-by-page polish pass is complete; the beta-test clarity bundle (`c0736d0`) and then the beta fatigue / property-cue bundle (`7145474`) are applied on top of it. This is the core polish gate, not "launch-final forever."
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

## Beta Fatigue / Property-Cue Bundle (7145474)

Owner-accepted changes on top of `c0736d0`, from a later beta-test finding. App commit `7145474` (homepage cue placement corrected by `467d192`), now on `origin/main` in the live stack at `a28b50e`. This is the current source truth for Home and Services. Production smoke QA passed.

- Home: one small apartment/property outline glyph leads the left hero eyebrow (`LOKALNA REPREZENTACJA WŁAŚCICIELA` / `LOCAL OWNER REPRESENTATION`), before the headline, for instant category recognition. Restrained institutional line glyph; it replaces the eyebrow's copper leading dash on the home hero only (other heroes keep the dash) and is a subtle recognition cue, not a repeated motif. It is **not** in the right-side usage selector title. (Placement corrected in `467d192`; `7145474` had briefly placed it in the selector title.)
- Services: post-estimator information fatigue reduced without removing content.
  - A compact owner-facing after-estimator section (`Po estymacji wiesz, co potwierdzić dalej.` / `After the estimate you know what to confirm next.`) sits directly after the estimator: three decision cards (starting scope, usage model, what to bring), an assurance line (Sentinel confirms visit rhythm, access, and responsibility limits before start), and a direct contact CTA.
  - The dense operational layer (operational record + execution-only appendix) now collapses behind a `Zobacz szczegóły` / `See details` disclosure on desktop too, matching existing mobile behaviour. All boundary/legal content is preserved, only compressed.
  - Mobile Services IA order updated so the new section follows the estimator.
- Protected contracts unchanged: estimator logic/matrix/pricing/ranges/result behaviour, contact API/schema/payload, routes/slugs/query behaviour, legal/noindex, package names/count, Full `min. 3/mies.` / `min. 3/month`, emergency authority limits. PL/EN parity kept.
- Validation: lint, build, and `git diff --check` clean; production screenshots (PL/EN home desktop + 390, PL/EN Services desktop, PL Services 390, PL Services ~1024 tablet) all `overflowPx 0` with no console errors, failed requests, or 4xx/5xx.

## Documentation System Status

- Scope Register v0.3 semantic patch exists.
- Scenario B Scope Register test fill is complete and passed as `fill-ready`.
- SCO-01 v0.5 functional working DOCX candidate exists (Level 2): not customer-ready, not lawyer/accountant reviewed, not signature-approved.
- SCO-01 v0.5 Scenario B re-fill: `simulation-pass`.
- SCO-01 v0.5 fresh private-profile fill: `simulation-pass`.
- SCO-01 v0.5 remains the accepted Level 2 working document; it is frozen unless later feedback / Owner approval requires a patch.
- **Minimum beta-readable set now exists** (each has a Markdown source + DOCX candidate and one `simulation-pass`):
  1. SCO-01 v0.5 — scope confirmation
  2. AKC-03 v0.1 — key handover / return receipt
  3. CLN-02 v0.1 — cleaning / readiness checklist
  4. REC-01 v0.1 — visit report
  5. REC-03 v0.1 — decision request
- The earlier beta deferral (beta blocked until the companion set existed) is **satisfied**; beta read is **no longer deferred for lack of companion docs**.
- Beta read **resumes as a connected-set read** (scope → access/key receipt → cleaning/readiness → visit report → decision request), not an isolated SCO-01.
- The whole set remains draft/internal working candidates: **not customer-ready, not lawyer/accountant reviewed, not signature/customer approved.**
- Website remains out of scope / paused; this is docs-only work.
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

- Home: pass. Clearer first-screen hero on the unselected state; shared-core floor is a compact connected dossier/spine panel; unselected hero moved upward on desktop to tighten the opening. Beta bundle: estimator CTA is now a real button, the capability sentence names keys/access and cleaning/readiness, and the shared-core line adds property readiness. Fatigue/property-cue bundle (`7145474`, cue placement corrected in `467d192`): a small apartment/property glyph leads the left hero eyebrow for instant category recognition (not in the right-side selector title).
- Pathway states: pass. Hero detail simplified into a compact summary; detailed operational logic moved into pathway-specific process spines; private / guest / mixed differentiated in rhythm and copy; guest comparison carousel no longer auto-advances on desktop.
- Services: pass. Desktop stays dossier/specification style; mobile uses a separate buyer-oriented IA (hero → shortcut rail → short model summary → package summary → estimator → collapsed proof sections → final CTA) with estimator early, a compact segmented package selector, and a compact vertical responsibility ladder. Beta bundle: package responsibility/deliverable summaries clarified, tablet package ladder layout corrected, Full package visit rhythm `min. 3/mies.` / `min. 3/month`. Fatigue/property-cue bundle (`7145474`): a compact owner-facing after-estimator confirmation section follows the estimator, and the dense operational record / execution-only detail now collapses behind desktop disclosure (mobile order places the new section after the estimator). Boundaries preserved, only compressed.
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

The Owner-approved How It Works operational-proof page is complete, deployed, and smoke-verified through `0481852`. No active website implementation task remains. Do not reopen it without a real regression or explicit Owner scope.

The current page uses a compact hero, the case-thread/route strip, inspection matrix, photographed REC-01-style example report, decision threshold, continuing rhythm/activation notes, and CTA. Role boundaries remain clear: case thread = example route; inspection matrix = physical checks; report proof = owner record structure; decision threshold = action versus owner-approval boundary. The photographed document is source/example material only, not client proof and not downloadable public paperwork. No generated damp/stain photo was added. Protected contracts remain unchanged.

### Deployed How It Works Verification (`0481852`)

- Verified production routes/viewports: `/pl/how-it-works` desktop, `/en/how-it-works` desktop, PL 768px, PL 390px, and EN 390px.
- Verified live elements: compact hero; `Jedna obserwacja` / `One observation` case thread and route strip; inspection matrix; photographed report proof with observation/evidence/next-step cards; decision threshold; continuing rhythm/activation notes; and CTA.
- Desktop evidence-board and tablet/mobile stacked layouts render correctly; photographed report corners remain intact. Old pinned journey and native report mockup markup are absent. All captures reported `overflowPx 0`, with no console errors, failed requests, or 4xx/5xx responses.
- `noindex,nofollow` remains active in PL and EN. Protected contracts are unchanged.
- No housekeeping cleanup was performed. Orphaned legacy How It Works code/messages/CSS remain optional future housekeeping requiring separate Owner authorization.

Current active phase:

- Sentinel document production: turn the existing draft architecture, templates, and test fills into a clean working document set.
- Do not reopen website proof polish during this phase; final proof/report example work comes later.
- Existing repo docs are not finished customer-ready documents.
- Testing order: internal simulation, beta tester read, lawyer/accountant review, public-safe sample report, then final website proof integration.
- Legal/accountant review remains required before customer-facing use of the document system.
- Launch / `noindex,nofollow` removal remains a later Owner decision.
- Owner-directed final polish only if a real regression appears.
- Do not re-open a passed page unless explicitly requested by Owner.

## Deployed Beta-Smoke Verification (a28b50e)

`origin/main` at `a28b50e` is live in production (`sentinelcostablanca.com`) and production smoke QA passed. Verified: `/pl`, `/en`, `/pl/services`, `/en/services`; homepage left-hero property glyph; homepage estimator button; Services after-estimator section; collapsed dense Services blocks (record + execution-only behind desktop disclosure); mixed estimator path still classification-before-estimate (`Klasyfikacja przed wyceną`, no numeric range, contact CTA); 390px homepage/services. All captures `overflowPx 0` with no console errors, failed requests, or 4xx/5xx. `noindex,nofollow` untouched. No active website task remains open.

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

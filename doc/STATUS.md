# STATUS.md - Sentinel Costa Blanca

Current project state only. This document is descriptive; `DECISIONS.md` is binding.

## Snapshot

- How It Works is pushed, deployed, and smoke-verified in its current operational-proof form on `origin/main` (latest app maintenance commit `d0a9da8`; payload cleanup `b9dab063`; operational-proof app commit `eeae1dd`, deployment docs `6ca538f`, earlier smoke closure `0481852`). The live sequence is: compact hero; `Jedna obserwacja` / `One observation` case thread with route-strip visual; inspection matrix as the main physical-check visual; owner report proof; decision threshold; continuing rhythm/activation notes; and CTA. The `Co otrzymuje właściciel` / owner report section centers a photographed REC-01-style example document. Desktop uses compact copy above a dominant centered photo with observation/evidence/next-step cards and restrained leader lines; tablet/mobile use a stacked layout. The example-document/not-client-report disclaimer remains explicit: this is documentary/source material, not real client proof or downloadable public paperwork. Retired How It Works PL/EN message blocks are absent from the production hydration payload, the EN 390px `qualification` wrap is improved, the canvas uses the shared Services/About/Contact atmosphere, and the Services `Access chain` key remains intentionally untouched. Production smoke passed for PL/EN desktop and 390px with intact photo corners, all current modules present, the old native report mockup absent, zero overflow, clean console/network checks, and unchanged `noindex,nofollow`. Protected contracts are unchanged.
- Branch at this documentation update: `main`. The latest app maintenance commit on `origin/main` is `d0a9da87f53ce7e1054dd706a0418ed9fe884b6c`; the tracked tree was clean before this documentation closure.
- The Owner-accepted whole-site coherence bundle (Patches 1–4) is committed, pushed, and deployed. It is no longer uncommitted working-tree work.
- Patch 5 and Patch 6 are deployed and production-verified. The website customer-journey phase is closed. See "Patch 5 / Patch 6 — Deployed" and "Customer-Journey Audit — Closed".
- App/content commits in that live stack: `7145474` (`refine: address beta feedback (home property cue + services fatigue)`) with its homepage cue placement corrected by `467d192` (`fix: move homepage property cue to hero`) — the property glyph is on the left hero eyebrow, not the usage selector title.
- Earlier app/content beta-test clarity commit: `c0736d0` (`refine: address beta-test clarity findings`) is also on `origin/main`.
- Last pushed docs checkpoint before this phase update: `50a292c` (`docs: add Sentinel document-system drafts`).
- Site phase: pre-launch / soft-launch review.
- The page-by-page polish pass is complete; the beta-test clarity bundle (`c0736d0`) and then the beta fatigue / property-cue bundle (`7145474`) are applied on top of it. This is the core polish gate, not "launch-final forever."
- Website implementation is paused/frozen except for critical fixes; website proof polish is not the active bottleneck.
- Current active phase: Sentinel document production from the repo draft system.
- `noindex,nofollow` remains active until Owner approves indexing.

Always verify current branch, HEAD, and status with git preflight.

## Patch 5 / Patch 6 — Deployed

All three commits are on `origin/main` and verified in production. None of them changed protected contracts: package names/count, visit cadence, response timing, Full `min. 3/mies.` / `min. 3/month`, the EUR 300 / EUR 500 values, estimator logic/matrix/pricing/ranges/payload, contact schema/field names/required status/payload/API route, routes/slugs/pathway query behavior, and legal/`noindex` are all unchanged.

### Patch 5 — `db2e5c2f12339a5fc10994c0ae3c46ee48930104`

- `refine: improve human language and legibility`.
- Human-language and meaningful-text legibility pass.
- Mounted meaningful secondary text is a minimum of 14px.

### Patch 6A — `60ebfaca40524e1311602c41ebbc5c3e8b409121`

- `fix: clarify authority and form errors`.
- Basic / Extended paid-action approval clarified: both now read `Każdy wydatek wymaga zgody` / `Every paid action needs approval` on Services.
- Full authority preserved: `Uzgodniony limit` / `Agreed limit`, with EUR 300 standard and EUR 500 optional unchanged in FAQ q11 and Regulamin/Terms section 5.
- FAQ contradiction closed. `faq.sections.emergencies.questions.q10.answer` previously stated an unscoped EUR 300 securing authority, which implied a Basic / Extended euro amount and contradicted the locked Option A doctrine in `DECISIONS.md`. It now scopes EUR 300 to Full and states that Basic and Extended require owner approval before any paid action.
- No Basic / Extended euro amount is stated or implied anywhere mounted. No `0 €` was introduced.
- How It Works decision-threshold link now promises package authority rules rather than numerical limits (`Zobacz zasady działania pakietów` / `See package authority rules`), because Services publishes no euro figures.
- Human PL/EN Contact validation errors. Raw Zod defaults previously leaked internal enum values (for example `Invalid option: expected one of "private-use-only"|...`) to users in both locales. Explicit messages now cover property use, package, property type, contact method, and preferred language, plus a distinct invalid-email-format message separate from required-empty.
- Accessible error association added: each error renders with `role="alert"` and a stable id, and its control carries `aria-invalid` and `aria-describedby` while the error is active.

### Patch 6B — `457a33deeee0b070a69d9255630ca2189215e799`

- `fix: handle sitemap and unknown root routes`.
- `app/sitemap.ts` added, publishing 16 canonical PL/EN URLs (8 public routes per locale: locale home, services, how-it-works, faq, about, contact, terms, privacy). Enumerated from the real route tree, not assumed. Sitemap contents are deliberately not gated on `PRE_LIVE_REVIEW`.
- Unknown root-level paths now return 404 rather than 500. `export const dynamicParams = false;` in `app/[locale]/layout.tsx` means locale params outside `generateStaticParams` 404 before any message import runs.
- Root cause recorded for future reference: `app/[locale]` is a root-level dynamic segment, so any unknown single-segment path was matched as a locale and interpolated into `await import('@/messages/<segment>.json')`, throwing `MODULE_NOT_FOUND` in `generateMetadata` and the next-intl request config before the layout's `notFound()` guard could run.
- PL/EN routing, pathway queries, locale static generation, `app/robots.ts`, `proxy.ts`, and `netlify.toml` are unchanged.

## Customer-Journey Audit — Closed

Verdict: **PASS VERIFIED**.

- Verified: property-use pathways (all three, PL and EN), locale continuity, in-page anchors, mobile behaviour, Contact rendering, and Contact validation.
- Production checks: all 17 public routes and `/robots.txt` return 200; `/` redirects to `/pl`; unknown root paths and unknown PL/EN subpaths return 404; `/sitemap.xml` returns valid XML with all 16 listed URLs returning 200; no console errors; no failed requests; no overflow; no unintended POST submissions during validation checks.
- No further customer-journey patch is active. The website customer-journey phase is closed.

## How It Works Payload Cleanup — Deployed (`b9dab063`)

- Commit `b9dab063e058bc9561d743050f4ccd8e4305fdf2` removed retired How It Works message blocks from both `messages/pl.json` and `messages/en.json`; current visible How It Works copy and structure are unchanged.
- The retired strings `Whole process`, `What happens during a typical visit`, `Sample Initial Inspection Report`, and `Onboarding detail` are absent from the production payload.
- `Access chain` remains only through the separate Services key `services.redesign.custody.eyebrow`; it was intentionally left untouched because Services was outside the cleanup scope.
- The EN mobile hero wrap was improved so `qualification` no longer breaks awkwardly at 390px.
- Post-deploy production smoke passed for PL/EN desktop and 390px: the current report proof/photo renders with intact corners, the old native report mockup is absent, overflow is zero, console/network/HTTP checks are clean, and `noindex,nofollow` remains present.
- No protected contract changed. No active website implementation task remains.

## Final Visual Maintenance — Deployed (`d0a9da8`)

- Commit `d0a9da87f53ce7e1054dd706a0418ed9fe884b6c` reduced the Services model-setup headline so the controlling PL copy fits the desktop dark panel while retaining its editorial hierarchy.
- The same scoped CSS commit aligned the How It Works canvas with the existing Services/About/Contact atmosphere without changing its structure, copy, report proof, or decision flow.
- Post-deploy PL/EN Services and How It Works smoke passed, including PL Services 390px and PL/EN How It Works 390px: zero overflow, clean console/network/HTTP checks, report proof intact, retired native report mockup absent, and `noindex,nofollow` unchanged.
- No protected contract changed. No active website implementation task remains.

## Indexing State

- `robots.txt` returns `Disallow: /`.
- Page metadata returns `noindex,nofollow`.
- The `X-Robots-Tag` production response header is currently absent despite being configured in `netlify.toml`. This predates Patch 6 and was not caused by it.
- Indexing remains blocked through `robots.txt` and page metadata.
- The header issue is assigned to the technical launch audit, not to current implementation.
- `noindex,nofollow` has not been removed. Removing it remains an Owner decision.

## Deferred Technical Notes

Recorded for later triage. These are **not active tasks** and require explicit Owner scope before any work:

- Handled `NoFallbackError` log noise on root-level 404s. Status codes are correct; this is log output only, and it replaced the previous `MODULE_NOT_FOUND` failures.
- Unreachable branded locale not-found component (`app/[locale]/not-found.tsx`). All 404s currently render Next's default page.
- Orphaned doctrine-conflicting message keys. Several unmounted keys under `services.comparison.*`, `services.green.*`, `services.orange.*`, `services.red.*`, and `about.*` still imply Basic / Extended spend authority or contain PL/EN divergence. They are not rendered on any route. Cleanup requires separate Owner authorization.
- Redundant root redirect (`app/page.tsx` duplicating the proxy's `/` handling).

## Remaining Launch Gates

Launch blockers are **not** complete. Remaining active work is non-website operational readiness:

- Production Contact email end-to-end test.
- Final commercial pricing/range confirmation.
- Prepare and send the connected document beta-read packet.
- Triage beta feedback and apply an Owner-approved patch.
- Lawyer/accountant review.
- End-to-end operational dry-run.
- Owner decision on removing `noindex,nofollow`.

## Whole-Site Coherence Audit — Complete

The Owner accepted the complete coherence bundle. It is now committed, pushed, and deployed. It affects Home/pathway copy, Services, How It Works, FAQ, About, Contact terminology, and shared PL/EN messages without changing protected service, estimator, contact, routing, legal, or proof contracts.

- Patch 1 separated package configuration from liability. Packages define visit rhythm, access scope, response timing, and autonomous-action limits; About no longer implies responsibility for the whole property or situation.
- Patch 2 established canonical PL/EN public terminology, the `Rozpocznij kwalifikację` / `Start qualification` route-to-Contact CTA, and the distinction between qualification (pre-service fit/scope review) and inquiry (submitted form or message).
- Patch 3A removed the rendered FAQ `Częste błędne założenia` / `Common wrong assumptions` board and deleted `components/FAQWrongAssumptions.tsx`. FAQ keeps direct questions and unique boundary rules, including q20; About owns the full category boundary.
- Patch 3B fixed Services/How It Works ownership. Services remains the commercial specification; How It Works remains the operational demonstration. The accepted Services architecture and collapsed operational/execution-only layers remain intact, with one secondary link to the process page.
- Patch 4 naturalised the voice: full terms introduce or control meaning, contextual shorthand follows established context, exact artifact names remain stable, and concrete variables replace repeated framework nouns where clarity permits.

Validation passed: lint, production build, `git diff --check`, PL/EN desktop captures for the affected pages and pathway states, PL 390px captures, expanded disclosure inspection, zero overflow, and clean console/network/HTTP reports.

The website has returned to frozen status. Reopening copy or structure requires a confirmed regression, real user evidence, a legal/commercial correction, or explicit Owner scope. Sentinel document production remains the current active phase.

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
  - A compact owner-facing after-estimator section (`Po estymacji wiesz, co potwierdzić dalej.` / `After the estimate you know what to confirm next.`) sits directly after the estimator: three decision cards (starting scope, property use, what to bring), an assurance line (Sentinel confirms visit rhythm, access, and autonomous-action limits before start), and a direct contact CTA.
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
- Services: pass. Desktop stays dossier/specification style; mobile uses a separate buyer-oriented IA (hero → shortcut rail → short model summary → package summary → estimator → collapsed proof sections → final CTA) with estimator early, a compact segmented package selector, and a compact vertical package ladder. The page owns commercial specification: property-use classification, packages, estimator, scope, exclusions, conditions, and qualification handoff. Its operational record is output proof, not a second process explanation. Full package visit rhythm remains `min. 3/mies.` / `min. 3/month`; dense operational record / execution-only detail remains collapsed behind disclosure.
- FAQ: pass. Mobile quick questions are compact action rows and search/category access comes earlier. The assumptions board is removed; direct answers, definitions, edge cases, SLA, authority, access, communication rules, and q20's operational-boundary meaning remain.
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

The website customer-journey phase is closed after Patch 5 and Patch 6 (PASS VERIFIED). No active website implementation task remains. Do not reopen a closed page without a real regression or explicit Owner scope.

The **Accessibility audit** remains deferred and is not an active implementation task; see `doc/TASK.md` for its scope. The operational-document beta packet remains the primary business-document workstream.

The Owner-approved How It Works operational-proof page is complete, deployed, and smoke-verified through the final scoped visual maintenance commit at `d0a9da8` (payload cleanup `b9dab063`).

The current page uses a compact hero, the case-thread/route strip, inspection matrix, photographed REC-01-style example report, decision threshold, continuing rhythm/activation notes, and CTA. Role boundaries remain clear: case thread = example route; inspection matrix = physical checks; report proof = owner record structure; decision threshold = action versus owner-approval boundary. The photographed document is source/example material only, not client proof and not downloadable public paperwork. No generated damp/stain photo was added. Protected contracts remain unchanged.

### Deployed How It Works Verification (`0481852`)

- Verified production routes/viewports: `/pl/how-it-works` desktop, `/en/how-it-works` desktop, PL 768px, PL 390px, and EN 390px.
- Verified live elements: compact hero; `Jedna obserwacja` / `One observation` case thread and route strip; inspection matrix; photographed report proof with observation/evidence/next-step cards; decision threshold; continuing rhythm/activation notes; and CTA.
- Desktop evidence-board and tablet/mobile stacked layouts render correctly; photographed report corners remain intact. Old pinned journey and native report mockup markup are absent. All captures reported `overflowPx 0`, with no console errors, failed requests, or 4xx/5xx responses.
- `noindex,nofollow` remains active in PL and EN. Protected contracts are unchanged.
- Retired How It Works PL/EN message blocks were removed by `b9dab063`; the Services `Access chain` key was intentionally left untouched. The EN 390px hero wrap improvement is live.

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

See "Remaining Launch Gates" for the authoritative list. Launch blockers are not complete.

- Production Contact email end-to-end confirmation.
- Final commercial pricing/range confirmation.
- Connected document beta-read packet.
- Beta review, triage, and Owner-approved patch.
- Lawyer/accountant review.
- End-to-end operational dry-run.
- Owner decision to remove `noindex,nofollow`.

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

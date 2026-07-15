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

- How It Works is shipped, deployed, and smoke-verified in its current operational-proof form on `origin/main` (latest app commit `eeae1dd`, deployment docs `6ca538f`, smoke closure `0481852`). Its live structure is: compact hero; `Jedna obserwacja` / `One observation` case thread with route-strip visual; inspection matrix as the main physical-check visual; owner report proof; decision threshold; continuing rhythm/activation notes; and CTA. The report section centers a photographed REC-01-style example document, with compact copy above and observation/evidence/next-step cards around the image on desktop and stacked on tablet/mobile. It is example/documentary material with an explicit not-client-report disclaimer, not client proof or downloadable public paperwork. No generated damp/stain photo was added. PL/EN desktop, PL 768px, and PL/EN 390px passed with intact photo corners, zero overflow, clean console/network checks, and unchanged `noindex,nofollow`. Protected contracts are unchanged; no active website task remains. Optional orphaned legacy How It Works code/messages/CSS cleanup requires separate Owner authorization.
- The page-by-page polish pass is complete. Home, Pathway states, Services, How It Works, FAQ, About, and Contact pass the current core polish gate. Do not reopen a passed page without a real regression or explicit Owner scope. No active website implementation task remains; launch/`noindex` removal is a later Owner decision.
- The beta-test clarity bundle (`c0736d0`, on `origin/main`) is applied on top: Home has a real estimator CTA button and a capability sentence naming keys/access and cleaning/readiness; Services package summaries are clearer with the Full tier at `min. 3/mies.` / `min. 3/month`; the estimator's mixed/undetermined path is classification-before-estimate (full-width notice, no numeric range). Protected contracts stayed intact. See `doc/STATUS.md` and `doc/DECISIONS.md`.
- The beta fatigue / property-cue bundle (`7145474`, homepage cue placement corrected by `467d192`) is live on `origin/main` in the stack at `a28b50e`, and production smoke QA passed (beta round closed): a small apartment/property glyph leads Home's left hero eyebrow (`LOKALNA REPREZENTACJA WŁAŚCICIELA` / `LOCAL OWNER REPRESENTATION`) as a subtle category-recognition cue — not in the right-side usage selector title; Services reduces post-estimator fatigue with a compact after-estimator confirmation section + CTA and collapses the dense operational record / execution-only detail behind desktop disclosure. Boundaries compressed, not removed; protected contracts intact. This is the current source truth for Home and Services. See `doc/STATUS.md`.
- Home and Pathway states passed after the hero/shared-core and hero-summary / process-spine work; mixed pathway must avoid "wrong package" / package-lock language (use scope framing).
- Mobile may use a different IA from desktop where usability requires it (e.g. Services mobile leads with the estimator). Same meaning, different order/density. See `doc/DECISIONS.md` "Responsive IA".
- Services page is shipped and closed unless confirmed real-use evidence or a regression appears.
- Estimator affordance is shipped/live; protected estimator logic, pricing/ranges, and contact handoff payload stayed untouched.
- FAQ is shipped/live and protected unless the Owner explicitly reopens it.
- About is shipped/live and launch-grade after the editorial-depth/team-introduction pass.
- Contact is shipped/live as Night Desk controlled intake:
  - dark secure intake canvas
  - crisp white form dossier
  - sticky preparation/direct-contact guide on desktop
  - post-submit flow integrated into the form dossier
  - `public/photos/contact-night-window.webp` as visible but subdued decorative hero atmosphere
  - form schema, field names, validation, payload, and API route deliberately unchanged

## Protected Areas

Do not change without explicit Owner approval:

- Estimator logic, matrix, pricing/ranges, result behavior, or contact handoff payload.
- Contact schema, field names, validation, payload, or `app/api/contact/route.ts`.
- Routes, slugs, pathway query behavior.
- Legal substance and `noindex,nofollow`.
- Package names/count.
- SLA meaning and emergency authority.
- FAQ answer meanings.
- Sentinel identity, descriptors, contact details, and service area.
- Shipped page visual models unless the Owner explicitly reopens them.

## Workflow

- Stay inside the approved scope.
- Do not re-open shipped pages unless explicitly requested by the Owner.
- User-facing copy must update PL and EN together through `messages/pl.json` and `messages/en.json`.
- Never use `git add .`; stage exact files only.
- Never stage screenshots, `output/`, QA artifacts, temp scripts, `.env`, zips, or generated files.
- For code changes run lint, build, and `git diff --check`.
- For visual changes use production-build screenshots and check PL/EN, 390px overflow, console errors, failed requests, and 4xx/5xx.
- Push only when Owner explicitly approves.

## Codex Environment Rule

- If the current shell reports duplicate `PATH`/`Path` or PowerShell Env provider throws `An item with the same key has already been added`, do not debug app code.
- In Codex, use clean scripts for build/server/capture:
  - `npm.cmd run env:doctor`
  - `npm.cmd run build:clean`
  - `npm.cmd run qa:smoke:clean`
  - `npm.cmd run qa:serve:clean`
  - `npm.cmd run qa:capture:clean -- ...`
- Avoid PowerShell `Start-Process` or background server orchestration from Codex.
- Normal Owner PowerShell, Cursor terminal, and Claude Code shell may use normal scripts when their env check is clean.
- Treat duplicate `PATH`/`Path` as a Codex process-wrapper limitation unless proven otherwise.

## Reporting

Report:

1. Starting branch/HEAD and git status.
2. Files changed.
3. What changed.
4. What was deliberately not changed.
5. Validation results.
6. Final git status.
7. Commit SHA and push status, if applicable.

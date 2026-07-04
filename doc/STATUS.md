# STATUS.md - Sentinel Costa Blanca

Current project state only. This document is descriptive; `DECISIONS.md` is binding.

## Snapshot

- Branch at this documentation update: `main`.
- Latest shipped app commit before this docs pass: `c230b56` (`polish: tighten contact mobile form`).
- Site phase: pre-launch / soft-launch review.
- The page-by-page polish pass is complete for the current scope. This is the core polish gate, not "launch-final forever."
- `noindex,nofollow` remains active until Owner approves indexing.

Always verify current branch, HEAD, and status with git preflight.

## Page-by-Page Polish Pass — Verdicts

All pages pass the core polish gate. Do not reopen a passed page without a real regression or explicit Owner scope.

- Home: pass. Clearer first-screen hero on the unselected state; shared-core floor is a compact connected dossier/spine panel; unselected hero moved upward on desktop to tighten the opening.
- Pathway states: pass. Hero detail simplified into a compact summary; detailed operational logic moved into pathway-specific process spines; private / guest / mixed differentiated in rhythm and copy; guest comparison carousel no longer auto-advances on desktop.
- Services: pass. Desktop stays dossier/specification style; mobile uses a separate buyer-oriented IA (hero → shortcut rail → short model summary → package summary → estimator → collapsed proof sections → final CTA) with estimator early, a compact segmented package selector, and a compact vertical responsibility ladder.
- FAQ: pass. Mobile quick questions are compact action rows; search/category access comes earlier; wrong assumptions reduced on mobile behind reveal. Answer substance and business boundaries unchanged.
- About: pass. Mobile spacing tightened; operating/team structure more compact on mobile. Trust meaning, local team proof, Aleksy proof, and "Sentinel jest / nie jest" substance unchanged.
- Contact: pass. Mobile form reads as four compact numbered steps; "Po wysłaniu" steps are compact rows on mobile; direct contact stays before the form. Schema/API/payload, required fields, and form behavior unchanged.

## Shipped / Live / Protected

Services page is shipped, live-verified, and closed unless real-use evidence, a confirmed regression, or explicit Owner scope appears.

Estimator affordance is shipped/live and protected:

- Estimator logic, matrix, pricing/ranges, result behavior, and contact handoff payload remain unchanged.
- Package/SLA/emergency meanings remain protected.

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

No open implementation task. The page-by-page polish pass is closed.

Current active task state:

- Next steps are verification, not new polish: push/deploy of the polish commits, then final whole-site QA against the deployed build.
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

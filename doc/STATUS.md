# STATUS.md - Sentinel Costa Blanca

Current project state only. This document is descriptive; `DECISIONS.md` is binding.

## Snapshot

- Branch at this documentation update: `main`.
- Latest shipped app commit before this docs pass: `30a6f9a` (`refine: add night desk contact intake`).
- Site phase: pre-launch / soft-launch review.
- `noindex,nofollow` remains active until Owner approves indexing.

Always verify current branch, HEAD, and status with git preflight.

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

No open implementation task after the Contact Night Desk deploy.

Current active task state:

- Post-launch monitoring.
- Owner-directed final polish only.
- Do not re-open shipped pages unless explicitly requested by Owner.

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

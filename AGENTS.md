# AGENTS.md — Sentinel Costa Blanca

Entry point for AI coding agents in this repository.

## Current state

- **Latest main / website SHA:** `e5fa7bb`
- **Documentation governance SHA:** `6a0d0f7` (launch-era reset baseline)
- **Phase:** Launch-era — visual composition rebuild **merged**; unified canonical visual mode **active**; final tuning + readiness audits
- **Visual:** One art-directed Sentinel atmosphere — dark authority bands, warm paper body, dark final CTA/footer; **no public theme toggle**
- Build-era task/audit docs were **removed** from the repo and are no longer active authority
- Old “no visual experimentation” and dual-theme rules are **retired**

## Read first (in order)

1. `doc/AGENT-BRIEFING.md`
2. `doc/DECISIONS.md`
3. `doc/TASK.md`
4. `doc/STATUS.md`
5. `doc/WORKFLOW.md`
6. `doc/VISUAL-FREEDOM-SPRINT.md` — for visual work

Supporting docs as needed:

- `doc/BRAND.md`
- `doc/SERVICE-STRUCTURING.md`
- `doc/COPY-DISCIPLINE-CODEX.md`
- `doc/EN-ADAPTATION-LAYER.md`
- `doc/LAYOUT COMPOSITION.md`
- `doc/LAUNCH-CHECKLIST.md`
- `doc/LOGO-DIRECTION.md.md`, `doc/LOGO-GEOMETRY-SPEC.md`, `doc/LOGO-USAGE-HIERARCHY.md`
- `doc/AI-GOVERNANCE.md`, `doc/QA.md`, `doc/REPO-MAP.md`

If docs conflict, report it and follow `doc/DECISIONS.md` unless the Owner overrides.

## Project identity

Sentinel is structured local owner representation for remote property owners on the southern Costa Blanca.

**Not:** concierge · lifestyle service · rental management · generic property management · cleaning-only · keyholding-only

- Brand: `Sentinel` / `Sentinel Costa Blanca`
- PL descriptor: `Reprezentacja właściciela na miejscu`
- EN descriptor: `Structured Property Oversight`
- Service area: Torrevieja + approximately 50–70 km

Qualification over conversion. Authority implicit, not declared.

## Protected contracts

Do not change without explicit Owner approval:

- Sentinel name and PL/EN descriptors
- Logo asset geometry, colors, usage (`doc/LOGO-*.md`)
- No concierge / rental-management / lifestyle positioning
- Package names and count: Podstawowy/Basic · Rozszerzony/Extended · Pełny/Full
- SLA meaning (48h / 24h / same-day per package)
- Emergency authority limits (€300–€500 per package logic)
- Usage pathway slugs and no-default homepage gate behavior
- Estimator matrix and calculation logic
- Contact form schema, API, payload
- Contact details: `sentinelcostablanca@gmail.com` · `+34 694 22 90 35`
- Legal substance (terms, privacy, exclusions)
- `noindex,nofollow` until Owner removes
- PL/EN parity

Pathway slugs: `private-use-only` · `regular-guest-stays` · `mixed-not-defined`

Do not change DNS, Netlify production, or env unless explicitly instructed.

## Visual work

Build on the **canonical visual mode** merged on `main`. Visual work may be bold when Owner-scoped — full-section, full-page, imagery, color, motion, generated assets — per `doc/VISUAL-FREEDOM-SPRINT.md`.

Do **not** recreate a dual global theme system or public theme toggle unless Owner explicitly asks.

Logo assets and business/service contracts remain protected.

Still avoid:

- Fake proof or testimonial theater
- Generic SaaS look
- Loud or attention-grabbing animation
- Concierge / lifestyle / rental drift
- Redesign outside approved scope
- Silent service-contract changes

Motion: slow, purposeful, disabled under `prefers-reduced-motion`.

## Copy and i18n

- User-facing strings in `messages/pl.json` and `messages/en.json`
- PL/EN parity required
- Follow `doc/COPY-DISCIPLINE-CODEX.md` and `doc/EN-ADAPTATION-LAYER.md`

## Technical protocol

Before finishing code changes:

```bash
npm run lint
npm run build
git diff --check
```

If build fails on Google Fonts/TLS only:

```bash
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build
```

Fix errors caused by your change. Do not add dependencies without justification. Do not commit secrets.

## Git protocol

- Small, reviewable commits; never `git add .`
- Stage exact files only
- Do not stage: `doc/screenshots/`, QA artifacts, temp scripts, zips, `.env`
- No push unless Owner approves

## Reporting

After a task, report: changed files · what changed · what was not changed · lint/build result · git status · whether pushed.

Do not claim build passed unless actually run.

## Agent routing

- **FOR Cursor** — scoped implementation
- **FOR Cloudie** — deployment, Netlify, DNS, production risk
- **FOR OWNER** — decisions, launch, legal, pricing

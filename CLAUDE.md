# Sentinel Costa Blanca — Claude Code Instructions

## Before work, read

1. `doc/AGENT-BRIEFING.md`
2. `doc/DECISIONS.md`
3. `doc/TASK.md`
4. `doc/STATUS.md`
5. `doc/WORKFLOW.md`
6. `doc/VISUAL-FREEDOM-SPRINT.md` — for visual work

**Current SHAs:** latest main / website `97997eb` · graphic passes `38a4849` / `cef326b` · documentation governance `6a0d0f7`

Visual composition rebuild is **merged**. The site uses **one canonical Sentinel atmosphere** — dark cinematic authority bands, warm paper body, dark final CTA/footer — with **no public theme toggle**.

Build-era visual restrictions and dual-theme work are retired. Current phase is **repo cleanup baseline and readiness audits**. Global visual iteration is paused; future improvements should be page-by-page, plan-first, and Owner-scoped. Visual work may still be bold when explicitly briefed, including page-specific middle-section rebuilds and removal of redundant proof modules. Build on canonical mode per `doc/VISUAL-FREEDOM-SPRINT.md`. Protected contracts remain intact.

## Project identity

Structured local property oversight / owner-representation for Torrevieja and the southern Costa Blanca.

Do not describe Sentinel as: concierge · generic property management · rental agency · cleaning-only · keyholding-only

- PL: Reprezentacja właściciela na miejscu
- EN: Structured Property Oversight

Keyholding, cleaning, access, and operational modules are capabilities inside structured oversight — not separate package categories.

## Golden design rule

Every section must answer one operational question visually, not as prose.

If a section needs long reading to justify itself, it is not finished.

## Current working method

Work page-by-page or section-by-section per the Owner brief. A scoped brief may be a large middle-section rebuild — **scoped** means bounded by the approved brief, not limited to small visual tweaks. Do not initiate another broad global visual pass unless the Owner explicitly asks for one.
Do not touch sections outside the requested scope.
Prefer small, reviewable commits (git discipline — not a cap on visual ambition).

## Task protocol

Tasks are scoped, not vague design wishes. Example:

```
Polish only the bridge section. Do not touch hero, packages, estimator, contact, or footer.
Golden question: Which usage situation points toward which starting responsibility level?
Run checks. Generate screenshots. Do not push until reviewed.
```

When a task names a section and a golden question:

* stay strictly inside the named section
* design the section to answer the golden question visually
* run the required checks
* generate screenshots
* never push until the user has reviewed

## Protected contracts

Do not change unless explicitly instructed:

* pathway slugs: `private-use-only` · `regular-guest-stays` · `mixed-not-defined`
* packages: PL Podstawowy / Rozszerzony / Pełny · EN Basic / Extended / Full
* SLA: Basic/Podstawowy 48h · Extended/Rozszerzony 24h · Full/Pełny same-day
* Full emergency authority: €300–500
* estimator matrix and calculation logic
* estimator contact handoff parameters
* contact API/email behavior
* contact details: sentinelcostablanca@gmail.com · +34 694 22 90 35
* noindex,nofollow until launch
* service area: Torrevieja + 50–70 km
* logo assets per `doc/LOGO-*.md`

## Required checks before commit

```bash
npm run lint
npm run build
git diff --check
```

If build fails on Google Fonts/TLS only:

```bash
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build
```

For visual changes, also check:

* PL and EN parity
* 390px mobile horizontal overflow
* desktop screenshot
* mobile screenshot
* no accidental changes outside the requested section

## Git rules

Never use `git add .`.

Stage only the files needed for the requested change.

Do not stage: screenshots folders · generated QA artifacts · temporary scripts · zip files · `.env` · local config files

Before commit, show staged files.

## Visual style

Preferred: serious · premium · operational · local · procedural · clear hierarchy · subtle motion when it adds meaning

Avoid: decorative dashboards with no function · fake proof · generic SaaS look · loud animation · glassmorphism excess · repeated explanatory prose · form-like sections unless estimator · repeating jurisdiction rings, ledgers, service-radius graphics, or identical proof bands across pages

Visual experimentation per `doc/VISUAL-FREEDOM-SPRINT.md` is allowed when scoped. Logo and service contracts stay protected. Service area (Torrevieja + 50–70 km) is an operational boundary — not a repeated brand boast.

## Motion rules

Slow · restrained · purposeful · disabled under `prefers-reduced-motion`

No bouncing, flashing, constant attention-grabbing, or childish pulse effects.

## Reporting format

After each task, report:

* files changed
* what changed
* what was deliberately not changed
* checks run
* screenshots generated
* git status
* whether anything was pushed

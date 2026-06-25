# Sentinel Costa Blanca — Claude Code Instructions

## Before work, read

1. `doc/AGENT-BRIEFING.md`
2. `doc/DECISIONS.md`
3. `doc/TASK.md`
4. `doc/STATUS.md`
5. `doc/WORKFLOW.md`
6. `doc/VISUAL-FREEDOM-SPRINT.md` — for visual work

**Current state:** live/main baseline is `69b0d02` (`refine: rebuild operational layer as output record`), following Services boundary polish `a7d37f7`, Cursor protocol `2172b0f`, homepage Trust Spine Pilot `01b2624` (historical), proof-assets integration `b9800ce`, and selected-pathway contrast `e682b5b` (historical). Verify exact HEAD/ahead count with git preflight before work. Documentation governance baseline: `6a0d0f7`.

Older docs may mention historical SHAs such as `b46a214`, `b3fd918`, or `97997eb`; repo preflight/local git state is the truth unless the Owner overrides.

Visual composition rebuild is **merged**. The site uses **one canonical Sentinel atmosphere** — dark cinematic authority bands, warm paper body, dark final CTA/footer — with **no public theme toggle**.

Build-era visual restrictions and dual-theme work are retired. Current phase is **post-trust-spine / post-services-polish**, with the live site accepted as visually credible enough to keep live. Broad visual iteration is stopped. Next work is **page-by-page micro polish, starting with the homepage**. Services estimator, boundary register, and operational output record are locked unless explicitly scoped. Gate 2 execution-only restyle is unresolved. Visual work may still be bold when explicitly briefed, but do not start another global visual transformation pass. Build on canonical mode per `doc/VISUAL-FREEDOM-SPRINT.md`. Protected contracts remain intact. Cursor agents follow `doc/CURSOR.md`.

Homepage gate: Trust Spine Pilot delivered (operator proof, €80/mo price cue, estimator link, mobile scroll affordance). Refine the gate; do not remove, bypass, or de-gate unless Owner explicitly approves. Protect during polish: `#usage-situation-gate` · `gate-scroll-cue` · `scroll-mt-28` · mobile-only pathway-selector cue.

Current proof-layer images are accepted only as temporary synthetic shot-planning placeholders. They must not be described as actual Sentinel work, real client property, real reports, real operator identity, or final operational evidence. Future audits should judge placement, crop, repetition, trust, and section fit; replacement with real photography remains the goal before serious public promotion or indexed launch where possible.

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

Use `npm run build` normally. For hardened QA and current local build/TLS handling, defer to `doc/QA.md`.

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

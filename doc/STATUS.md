# STATUS.md — SENTINEL

Purpose:
This file describes the actual state of the Sentinel project at this moment.

It is descriptive only.
It does not define decisions.
It does not define intent.
It records reality.

If this document becomes aspirational, it has failed.

---

# Snapshot

| Field | Value |
|-------|-------|
| Project | Sentinel |
| State | Task 6 COMPLETE / LOCKED; Task 8 ACTIVE; Task 7 deferred until Task 8 freeze |
| Active Task | Task 8 — Functional Interaction Layer (Estimator & Usage Pathway Modeling) |
| Website | Technically functional |
| Identity Core | Locked (per DECISIONS.md) |
| Public Readiness | Not ready |
| Last Verified | Homepage hard diagnostic gate, hydration fallback, gate presentation (48258d5), and selected-state result panel (3e5a7e7) implemented |

---

# System State Overview

Sentinel currently exists as:

- A defined service system
- A documented governance structure
- A partially formalized visual identity
- A technically operational website

The system is structurally mature.
The presentation layer remains incomplete.

---

# Binding Elements Implemented

The following decisions are implemented and aligned with DECISIONS.md:

## Product & Service

- Product name: Sentinel
- Strict package-based model
- Defined exclusions
- Geographic constraint enforced conceptually
- SLA defined as response/decision time
- Emergency authority limited and documented
- Three-level jurisdictional escalation model locked
- Usage situation model (Private Use Only / Regular Guest Stays / Mixed / Not Yet Defined)
- Operational mode remains below package jurisdiction
- Emergency authority Model C (fixed limit + owner escalation)
- Keyholding and cleaning recognized as core operational capabilities inside structured oversight
- Execution-only layer structurally separated
- Minimum 3-month engagement model
- Monthly advance billing
- Range-based pricing communication (final amount)
- Vertical containment package presentation


## Positioning

- Not concierge
- Not lifestyle support
- Not generic property management
- Defined as structured local oversight

## Tone

- Policy-first
- Non-promotional
- Literal and procedural

## Visual Identity Core

- Symbol geometry implemented
- Wordmark structure implemented
- Logo variant logic implemented
- Full color doctrine implemented
- Typography system implemented (60/30/10 structure)

These elements are no longer exploratory.
All Task 5 doctrine layers (5A–5G) have been audited and marked CLOSED.

---

# Technical State

## Application

- Next.js application builds successfully
- Routing functional
- i18n structure implemented (PL / EN)
- Core pages present:
  - Home
  - Services
  - How It Works
  - FAQ
  - About
  - Contact

## Content

- Structurally complete
- Policy-aligned
- Information-dense
- No promotional layers

---

# Incomplete Layers

The structural system is defined.  
Remaining gaps concern implementation fidelity, usage pathway embodiment, and evidence articulation.

---

## Layout & Composition — Implementation Fidelity

The doctrine is locked and audited (Task 5C CLOSED).

- Spacing ladder enforced across pages and components; off-ladder 16/24/80 removed except p-6 allowed in contained components (per LAYOUT COMPOSITION §7.1).

Remaining work concerns execution consistency across pages:

- Section-level spacing refinement across all templates
- Responsive grid calibration (desktop / tablet / mobile)
- Cross-page containment consistency
- Controlled disclosure rhythm verification
- Execution-only support visual separation enforcement

These are implementation refinements, not structural uncertainties.

---

## Evidence Architecture (Task 5E — Complete)

Evidence architecture defined, audited, and aligned with DECISIONS.

Includes:

- Public SLA visibility
- Package-level SLA differentiation (response + presence only)
- System-standard reporting window
- Escalation skeleton (public)
- Responsibility boundary mapping
- Controlled disclosure structure
- Public reporting schema (structural mock only)

No promotional proof artifacts implemented.
---

## Service Interface Integration

Task 8 is active.

Implemented / aligned:

- Homepage identity + hard diagnostic gate as first screen (no default pathway on `/pl` or `/en`)
- No-selection gate shows identity, diagnostic question, three usage situations, and gate instruction only
- Homepage sections below the gate hidden until a valid usage situation is selected
- Direct URLs with valid `?pathway=` param reveal selected diagnostic result panel and shared homepage sections immediately
- Server-rendered hydration fallback matches no-selection gate structure
- Gate presentation containment (Task 8E) and selected-state result panel baseline (Task 8F)
- Pathway names/slugs: `private-use-only`, `regular-guest-stays`, `mixed-not-defined`
- Estimator visible labels aligned to the current usage situation model
- Estimator remains limited to two calculable operational modes:
  - private_use
  - active_guest
- Mixed / Not Yet Defined routes to structured review / classification and does not generate a numeric estimate
- Contact pathway context and visible contact details updated
- Email environment naming updated to SENTINEL_EMAIL / SENTINEL_PHONE
- Contact form hardcoded English labels removed
- Lint hygiene patch completed
- AGENTS.md tracked in repository

Still pending:

- Homepage usage-situation content adaptation pass (shared homepage sections not yet fully tuned per usage situation)
- Execution-only support visual separation logic
- One-click disclosure compliance validation
- Final range recalculation QA
- Contact prefill end-to-end QA

---

## Visual Refinement Pass (Post-5E)

The system is structurally correct but not yet compositionally tightened.

Pending:

- Vertical cadence harmonization
- Micro-alignment audit
- Typography optical balance review
- Authority-to-white ratio fine calibration
- Dark mode perceptual validation across devices

---

These are controlled implementation layers.

No structural doctrine remains undefined.

# Usage Pathway Doctrine Patch

Owner correction recorded:

- Keyholding and cleaning are core operational capabilities inside Sentinel’s service system.
- They must not be treated as peripheral only.
- They must not become brand positioning.
- Sentinel remains Structured Property Oversight / Reprezentacja właściciela na miejscu.

Current public usage situation model:

1. Private Use Only — empty-property / dormancy risk.
2. Regular Guest Stays — event-driven / turnover risk.
3. Mixed / Not Yet Defined — classification-first pathway.

PL public labels:

1. Tylko użytek prywatny
2. Regularne pobyty gości
3. Model mieszany / jeszcze nieustalony

Canonical slugs:

1. private-use-only
2. regular-guest-stays
3. mixed-not-defined

Estimator rule:

- Private Use Only maps to the calculable `private_use` operational mode.
- Regular Guest Stays maps to the calculable `active_guest` operational mode.
- Mixed / Not Yet Defined routes to structured review / classification and does not invent a third pricing mode.

Implementation status:

- Doctrine naming alignment updated.
- Homepage hard diagnostic gate implemented (identity + diagnostic question + three usage situations + instruction).
- No homepage content below gate until valid usage situation selected; direct pathway URLs reveal selected state immediately.
- Hydration fallback aligned to no-selection gate structure.
- Gate presentation containment refined (48258d5).
- Selected-state diagnostic result panel baseline refined (3e5a7e7).
- Estimator visible labels aligned to Private Use Only / Regular Guest Stays.
- Estimator remains limited to two calculable operational modes:
  - private_use
  - active_guest
- Mixed / Not Yet Defined routes to structured review / classification and does not generate a numeric estimate.
- Contact context and visible contact details updated.
- Email environment naming updated to SENTINEL_EMAIL / SENTINEL_PHONE.
- Contact form hardcoded English labels removed.
- Lint hygiene patch completed.
- AGENTS.md tracked in repository.
- Homepage usage-situation content adaptation pass pending (see doc/HOMEPAGE-USAGE-SITUATION-PASS.md).

---

# Active Risks

## 1. Premature Visual Solidification

Risk:
Temporary layout decisions becoming de facto standard.

Mitigation:
Task discipline enforced.

## 2. Perception Drift

Risk:
External readers interpret site as finished product.

Mitigation:
Launch remains locked; Task 6 complete does not imply public readiness.

---

# Not Ready For

- Public launch
- Paid traffic
- Brand evaluation
- Visual polish critique
- Marketing expansion

Premature exposure would misrepresent system maturity.

---

# Current Position

Completed:
Task 1
Task 2
Task 3
Task 4
Task 5A — Brand Doctrine
Task 5B — Visual Identity Core
Task 5C — Layout & Composition Doctrine
Task 5D — Service Structuring Doctrine
Task 5E — Evidence Architecture
Task 5F — EN Adaptation Layer
Task 5G — Copy Discipline Codex
Task 6 — Core System Embodiment & Integrity

Active:
Task 8 — Functional Interaction Layer (Estimator & Usage Pathway Modeling)

System layer 1–6 complete.
Task 6 is frozen.

Task 8 is active.
Task 7 — Visual System Completion remains deferred until Task 8 freeze.

Future:
Task 7 — Visual System Completion (deferred until Task 8 freeze)
Task 8 — Functional Interaction Layer (next eligible)

---

# Task 6 Closure Record

Task 6 embodiment has been executed and verified. The following state transitions are recorded:

- Identity integrity lock (email/domain/name; no user-facing Guardian)
- Spacing ladder enforcement (20/40 + section primitives; first-section treatment)
- H2 system unification (single .h2-system across core pages)
- CTA hierarchy discipline (1 primary + 1 secondary in authority blocks where applicable)
- Dark-mode parity fixes (table readability, link-system contrast, emoji removal, package chips)
- Metadata defaultTitle/OG alignment (per-locale)
- Audits executed including AUDIT-6.15-FULL-SYSTEM-INTEGRITY.md

Task 6 is COMPLETE / LOCKED (Frozen) unless Owner explicitly reopens it.

---

# Update Rule

Update this file only when:

- Active task changes
- A task is completed
- Binding identity layer changes
- Public readiness status changes

Do not update for minor implementation tweaks.

This file records state transitions only.

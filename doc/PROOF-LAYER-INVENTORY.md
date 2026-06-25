# PROOF-LAYER-INVENTORY.md - SENTINEL

Source: Council v2 blind visual audit, proof-assets acceptance, selected-pathway contrast patch, and Council v2 live perception audit.

Purpose: inventory the current live placeholder, image, and proof-object layer after implementation.

This is a planning document only. It does not approve code changes, asset fabrication, contract edits, estimator edits, contact-form changes, pathway slug changes, legal edits, DNS, Netlify, or indexing.

---

# 0. Preflight Note

Local git preflight on this pass reported:

- Branch: `main`
- Current live/main baseline: `69b0d02` (`refine: rebuild operational layer as output record`)
- Services boundary polish: `a7d37f7`
- Cursor operating protocol: `2172b0f`
- Homepage Trust Spine Pilot: **delivered** through `01b2624` (historical milestone)
- Proof-assets integration: `b9800ce`
- Selected-pathway contrast patch: `e682b5b` (historical milestone)
- Expected ignored local items may include `.codex/` and `tmp/`.

Older docs may still mention `b46a214`, `b3fd918`, or `97997eb` as current. Per repo rules, current git state overrides stale SHA fields; those are historical unless preflight proves otherwise.

---

# 1. Council v2 Operating Rule

The next trust gain is not a broad visual redesign and not more synthetic image generation. Homepage Trust Spine Pilot is **delivered**. Next work is page-by-page micro polish, starting with the homepage.

Delivered on the homepage gate (protect during polish):

- keep the canonical Sentinel visual atmosphere
- keep the homepage diagnostic gate unless Owner explicitly overrides it
- operator cue / public operator proof (Aleksy Gugała)
- verified €80/mo minimum price cue
- estimator / cost-logic link without changing pricing logic
- mobile scroll affordance: `#usage-situation-gate` · `gate-scroll-cue` · `scroll-mt-28` · mobile-only pathway-selector cue
- reduced repeated scope/documentation/limits language where implemented
- treat placeholders as asset slots, not final trust evidence

Hard constraints for this inventory:

- Synthetic / AI-generated images are allowed only as temporary composition placeholders or shot-planning targets.
- Synthetic images must be realistic, local, operational, restrained, and physically recreatable later.
- Synthetic images must be intended for one-for-one replacement by real photos before public/advertised use.
- No image may claim to show actual Sentinel work, an actual client property, an actual operator, or an actual report unless it is real and approved.
- Future audits should judge placement, repetition, crop, trust, and section fit. Do not lazily reject an accepted placeholder only because it is AI-generated; do reject it if it creates a proof claim, stock smell, repetition, or synthetic trust leak.
- No fake personal data, addresses, license plates, WhatsApp screens, report data, or identifiable client interiors.
- No tourism/luxury imagery.
- No 3D tilt, parallax, rotating cards, or startup motion.
- Real operational artifacts must be privacy-scrubbed.

Still prohibited:

- fake operator faces / fake team portraits
- fake client reports or fake evidence records
- AI-generated "Sentinel at work" proof presented as real
- fake dashboards, fake portals, fake ticketing, fake tracking
- tourism, beach, luxury villa, smiling stock people, lifestyle imagery
- AI video presented as real operational footage

Good enough for temporary visual testing does not mean final trust proof.

---

# 2. Synthetic Shot Planning Rule

Every synthetic image used in the proof layer must have a future real-shot brief.

Every image slot must answer an operational question:

- What risk, boundary, access step, report step, readiness step, or decision threshold does this image clarify?
- Why is a photo-like image stronger here than a drawn artifact or text record?
- What will the Owner recreate later to make the slot honest?

Use a synthetic shot only when:

1. It is a temporary composition placeholder or shot-planning target.
2. It is realistic, local, operational, restrained, and physically recreatable later.
3. It can be replaced one-for-one by a real photo without redesigning the section.
4. It does not imply actual performed Sentinel work.
5. It contains no fake client data, report data, addresses, private identifiers, or fabricated operator identity.

Reject the image if:

1. It cannot realistically be recreated.
2. It looks like stock, luxury, tourism, hospitality, or SaaS-dashboard imagery.
3. It requires fake data, fake screens, fake reports, fake maps, or fake people to work.
4. It becomes the proof claim instead of a temporary visual target.

---

# 3. Live Page Slot Map

## Home - unselected gate

Files:

- `components/HeroGateFrame.tsx`
- `components/UsagePathwayLayer.tsx`
- `app/[locale]/page.tsx`

Current proof/image slots:

- `public/photos/sentinel-costa-blanca-entry-hero.png` is used as full-screen atmosphere behind the diagnostic gate.
- Operator proof cue (Aleksy Gugała), verified €80/mo minimum price cue, and estimator/cost-logic link are live on the gate.
- Mobile scroll affordance: `#usage-situation-gate` · `gate-scroll-cue` · `scroll-mt-28` · mobile-only pathway-selector cue (`01b2624`).

Current proof job:

- Establish seriousness, surface operator and cost logic before pathway selection, and route the owner into one of three usage pathways.

Risk:

- Background image still reads as atmosphere, not proof.
- Gate internals must not be broken during homepage micro polish.

Decision:

- Keep the gate behavior and delivered trust cues.
- Protect gate internals during homepage polish; refine only when Owner-scoped.

Status:

- Trust Spine Pilot delivered. Candidate for homepage micro polish only with Owner brief.

## Home - selected pathway hero

Files:

- `components/UsagePathwayLayer.tsx`

Current proof/image slots:

- `private-use-only`: `public/photos/home-pathway-private-empty-check.webp`
- `regular-guest-stays`: `public/photos/home-pathway-guest-readiness.webp`
- `mixed-not-defined`: `public/photos/home-pathway-mixed-decision-threshold.webp`
- Each selected pathway also shows a changes panel with an `OperationalField` schematic.

Current proof job:

- Make the selected usage mode feel specific.

Risk:

- The visible hero media is accepted and stronger than the old placeholder files.
- The images are still synthetic shot-planning placeholders and can create AI/stock smell if treated as real evidence.

Decision:

- Treat these as synthetic shot placeholders only.
- Placement and composition are accepted for now; recreate as real assets later where possible.
- If the shot cannot be realistically recreated, replace it with a structured pathway-specific artifact.

Future real-shot mapping:

- `private-use-only`: empty-property check evidence.
- `regular-guest-stays`: arrival/readiness checklist or before/after readiness detail.
- `mixed-not-defined`: decision-threshold device.

Status:

- Placement accepted for now; later real-shot replacement.

## Home - system/process panel

Files:

- `components/UsagePathwayLayer.tsx`
- `app/[locale]/page.tsx`

Current proof/image slots:

- `PathwayProcessPanel` renders a schematic process rail and property trace.

Current proof job:

- Explain scope, documentation, procedure, and decision logic after pathway selection.

Risk:

- Useful structure, but still explanatory rather than evidential.

Decision:

- Keep as support.
- Do not let it substitute for the pathway-specific first proof object.

Status:

- Keep for now; revisit only if homepage micro polish needs density reduction.

## Home - contrast/risk carousel

Files:

- `components/HomeContrastBlock.tsx`
- `components/PathwayRiskCarousel.tsx`

Current proof/image slots:

- 12 live `.webp` risk images across all three pathways.
- `CAROUSEL_READY` is true for all pathways, so the photo carousel is live.

Current proof job:

- Show "without Sentinel / with Sentinel" using risk scenes and response copy.

Risk:

- This is the largest live photo-like trust surface after pathway selection.
- The images are not real verified operational proof.
- They are acceptable only as synthetic shot placeholders / storyboard targets.

Decision:

- Placement and composition are accepted after `e682b5b`; recreate as real operational details later.
- If a shot cannot be recreated honestly, convert it to an artifact-led incident plate.
- If no viable shot plan exists, prefer the existing non-photo contrast fallback pattern or a new artifact carousel.

Status:

- Strong live asset to protect.
- Later real-asset replacement.

## Home - final CTA

Files:

- `app/[locale]/page.tsx`
- `app/globals.css`

Current proof/image slots:

- `public/photos/final-cta-handoff-checklist.webp` is used in `.home-handoff-cta__media`.

Current proof job:

- Close with the idea of a planned local handoff.

Risk:

- Looks like proof but is not verified as real.
- It is less damaging than the pathway placeholders because it is atmospheric and late-page.

Decision:

- Keep temporarily as non-evidence atmosphere.
- Treat as a synthetic shot placeholder if it remains photo-like.
- Replace later with a real checklist/report table detail or a drawn artifact.

Priority:

- Phase 2.

## Services

Files:

- `app/[locale]/services/page.tsx`
- `components/ServiceBoundaryGrid.tsx`
- `components/PackageResponsibilityLadder.tsx`
- `components/UsageResponsibilityBridge.tsx`
- `components/WhatIfEventSimulator.tsx`
- `components/Estimator.tsx`

Current proof/image slots:

- Hero dossier artifact (`services-dossier-artifact`).
- Package responsibility ladder and usage responsibility bridge.
- Dark checkpoint estimator shell with step rail and live ledger panel.
- Services boundary — **Ruled Scope Register** (`ServiceBoundaryGrid`).
- Operational Layer — four output records: Gotowość · Dostęp · Koordynacja · Decyzja.
- Execution-only checkpoint — older dark checkpoint form after Operational Layer (Gate 2 unresolved).

Current proof job:

- Explain package jurisdiction, operational scope, on-site outputs, estimator fit, and execution-only limits.

Risk:

- High contract sensitivity on estimator, boundary, and execution-only limits.
- Operational Layer must not drift back into accordion/photo theatre.

Decision:

- **Accepted and locked** through `69b0d02` unless explicitly scoped.
- Do not touch estimator logic/matrix, package count, SLA, emergency authority, or contact payload.
- Do not reintroduce CleaningAccordion theatre, autoplay, photos, or compact execution-only strip (Gate 2 rejected).
- Later work may add evidence objects only with separate Owner brief and without changing protected contracts.

Priority:

- Keep unless separately briefed. Gate 2 execution-only is a separate future task.

## How It Works

Files:

- `app/[locale]/how-it-works/page.tsx`
- `components/ProcessDetailChapters.tsx`
- `components/how-it-works/ReportDecisionLimits.tsx`

Current proof/image slots:

- Hero procedure register.
- Procedure corridor with per-step artifact cards.
- `public/photos/hiw-visit-record.webp` in the procedure / visit-record area.
- Report excerpt panel.
- Threshold console.
- Onboarding ledger.
- Rhythm/action log.

Current proof job:

- Show access, visit, report, decision, and action as one controlled sequence.

Risk:

- Stronger than generic cards, but still schematic.
- The report excerpt is the best slot for real/privacy-safe evidence.

Decision:

- The inserted visit-record photo is accepted and should stay as-is unless separately briefed.
- Later work may replace or upgrade the report excerpt into a real or privacy-safe report/field-note artifact.
- Keep decision limits protected.

Priority:

- Phase 2.

## About

Files:

- `app/[locale]/about/page.tsx`

Current proof/image slots:

- Hero local-operator record.
- `public/photos/about-operator-presence.webp` in the hero/operator record.
- `public/photos/aleksy-gugala-operator.jpg` in the operator proof panel.
- `public/photos/about-local-exterior.webp` in the local context area.
- Operating gap board.
- IS / IS-NOT boundary panel.
- Local evidence text panel.
- Responsibility ledger.
- Capability register.

Current proof job:

- Establish local credibility and boundaries.

Risk:

- It now has an Owner-approved named public operator identity for Aleksy Gugała.
- The public operator photo is identity/team proof only, not field-work, client-property, or final operational evidence.

Decision:

- About improved with operator-presence/local-exterior imagery and an Owner-approved public operator photo; keep as-is unless separately briefed.
- Homepage gate uses the short Aleksy Gugała operator cue; do not expand it into the full About copy.
- Later replace other synthetic proof placeholders with real hands, working-surface, credential, or local-presence assets if Owner approves assets.
- Phase 2 can add a real operating-radius map or a privacy-safe local presence object.

Status:

- About stays as-is unless separately briefed.
- Later real asset/map if separately briefed.

## Contact

Files:

- `app/[locale]/contact/page.tsx`
- `components/ContactMethodPanel.tsx`

Current proof/image slots:

- Hero qualification file artifact.
- Intake support panels.
- Contact method panel.
- Form dossier.
- After-submit sequence.
- Fit and unsuitable panels.

Current proof job:

- Convert inquiry into structured intake without implying automatic acceptance.

Risk:

- Mostly healthy artifact-led page.
- Long mobile stack is a UX issue, not a proof-slot issue.

Decision:

- Keep unless separately briefed.
- Do not alter contact form schema, API, or payload.

Priority:

- Keep.

## FAQ

Files:

- `app/[locale]/faq/page.tsx`
- `components/visuals/FAQRoutingDiagram.tsx`

Current proof/image slots:

- Hero routing diagram.
- Quick-answer cards.
- Grouped accordion.
- Boundary, assumptions, and decision panels.

Current proof job:

- Remove doubt fast.

Risk:

- Not a primary proof problem.
- Council v2 flagged density/monotony more than asset risk here.

Decision:

- Keep unless separately briefed.
- Later consolidate only if FAQ is separately briefed.

Priority:

- Keep.

---

# 4. Literal Photo-Like Asset Inventory

Logo files are excluded. They are identity assets, not proof assets.

## Live assets

| Asset | Current use | Classification | Replacement decision |
|---|---|---|---|
| `public/photos/sentinel-costa-blanca-entry-hero.png` | Home unselected gate atmosphere | Atmosphere, not evidence | Keep temporarily; replace later with real local exterior/presence if available |
| `public/photos/home-pathway-private-empty-check.webp` | Home selected `private-use-only` hero | Accepted synthetic shot-planning placeholder | Keep placement; recreate as real empty-property/access asset |
| `public/photos/home-pathway-guest-readiness.webp` | Home selected `regular-guest-stays` hero | Accepted synthetic shot-planning placeholder | Keep placement; recreate as real readiness/checklist or turnover-prep asset |
| `public/photos/home-pathway-mixed-decision-threshold.webp` | Home selected `mixed-not-defined` hero | Accepted synthetic shot-planning placeholder | Keep placement; recreate as real classification/decision-threshold asset |
| `public/photos/final-cta-handoff-checklist.webp` | Home final CTA image | Accepted synthetic / atmospheric shot-planning placeholder | Keep temporarily; recreate as real checklist/report-table detail |
| `public/photos/services-operational-capability.webp` | No live source reference found | Previous Services capability placeholder | Probably unused; do not delete without Owner review |
| `public/photos/hiw-visit-record.webp` | How It Works visit-record image | Accepted synthetic shot-planning placeholder | Keep; later recreate as real visit-record/corridor/checklist detail |
| `public/photos/about-operator-presence.webp` | About operator-presence image | Accepted synthetic shot-planning placeholder; no fake face claim | Keep; later replace with real hands/working-surface/operator-presence detail |
| `public/photos/aleksy-gugala-operator.jpg` | About operator proof panel image | Owner-approved public operator identity photo | Keep as identity/team proof only; do not treat as client-property or field-work evidence |
| `public/photos/sentinel-team.webp` | No live source reference found | Previous About operator proof asset | Probably unused; do not delete without Owner review |
| `public/photos/about-local-exterior.webp` | About local exterior image | Accepted synthetic/local shot-planning placeholder | Keep; later replace with real local exterior/presence photo |
| `public/images/home/private-use/private-risk-water-floor.webp` | Private pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real maintenance/water observation recreation |
| `public/images/home/private-use/private-risk-ac-moisture.webp` | Private pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real AC/moisture detail recreation |
| `public/images/home/private-use/private-risk-access-keys.webp` | Private pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real key/access/custody recreation |
| `public/images/home/private-use/private-risk-arrival-not-ready.webp` | Private pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real readiness or empty-property checklist recreation |
| `public/images/home/regular-guest-stays/guest-risk-turnover-readiness.webp` | Guest pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real readiness/turnover checklist recreation; avoid hotel/lifestyle framing |
| `public/images/home/regular-guest-stays/guest-risk-post-stay-damage.webp` | Guest pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief privacy-safe post-stay observation recreation |
| `public/images/home/regular-guest-stays/guest-risk-owner-dispatcher.webp` | Guest pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief approval/dispatch artifact recreation; avoid stock person scenes |
| `public/images/home/regular-guest-stays/guest-risk-boiler-failure.webp` | Guest pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real boiler/utility panel recreation |
| `public/images/home/mixed-not-defined/mixed-risk-wrong-starting-assumption.webp` | Mixed pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real decision-threshold artifact recreation |
| `public/images/home/mixed-not-defined/mixed-risk-premature-guest-setup.webp` | Mixed pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real readiness-vs-scope decision artifact recreation |
| `public/images/home/mixed-not-defined/mixed-risk-wrong-scope-assumption.webp` | Mixed pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real scope classification artifact recreation |
| `public/images/home/mixed-not-defined/mixed-risk-ad-hoc-scope-creep.webp` | Mixed pathway risk carousel | Synthetic shot placeholder - recreate later | Validate placement, then brief real limit/approval/escalation artifact recreation |

## Dormant or unused assets

| Asset | Current use | Classification | Replacement decision |
|---|---|---|---|
| `public/photos/sentinel-apartment-entry-placeholder.png` | No live reference found | Historical synthetic shot placeholder | Superseded by `home-pathway-private-empty-check.webp`; do not promote as proof |
| `public/photos/sentinel-cleaning-readiness-placeholder.png` | No live reference found | Historical synthetic shot placeholder | Superseded by `home-pathway-guest-readiness.webp`; do not promote as proof |
| `public/photos/sentinel-corridor-exterior-placeholder.png` | No live reference found | Historical synthetic shot placeholder | Superseded by `home-pathway-mixed-decision-threshold.webp`; do not promote as proof |
| `public/photos/sentinel-about-local-entry-placeholder.png` | No live reference found | Synthetic shot placeholder - recreate later | Do not promote as proof; use only if it has a real local exterior shot brief |
| `public/photos/sentinel-report-tablet-placeholder.png` | No live reference found | Risky synthetic shot placeholder | Avoid fake dashboard/report UI; use only if reframed as a recreatable non-SaaS report surface |
| `public/photos/sentinel-technician-access-placeholder.png` | No live reference found | Synthetic shot placeholder - recreate later | Do not promote as proof; use only if it has a real operator/partial-presence shot brief |
| `public/photos/services-scope-object.webp` | No live reference found in current Services page | Tracked asset; synthetic shot-planning placeholder | Dormant after Operational Layer rebuild; do not delete without Owner review |
| `public/photos/hiw-field-note.webp` | No live reference found in current Services page | Tracked asset; synthetic shot-planning placeholder | Dormant after Operational Layer rebuild; do not delete without Owner review |
| `public/images/home/home-final-cta-handoff-checklist.webp` | No live reference found | Historical atmospheric shot placeholder | Superseded by `public/photos/final-cta-handoff-checklist.webp` |
| `public/visuals/sentinel-process-report-preview.svg` | No live reference found | Dormant schematic artifact | Possible reference only; not a live proof slot |
| `public/visuals/sentinel-contact-intake-path.svg` | No live reference found | Dormant schematic artifact | Possible reference only; not a live proof slot |

---

# 5. Dormant Component Candidates

These components exist but are not used by the active route files inspected in this pass:

- `components/how-it-works/OperatingPathChapter.tsx`
- `components/how-it-works/LocalExecutionChapter.tsx`
- `components/how-it-works/ReportDecisionChapter.tsx`
- `components/SampleInspectionReport.tsx`
- `components/graphics/ReportAnatomy.tsx`
- `components/visuals/OperationalCaptureFrame.tsx` (used by dormant sample report)
- `components/visuals/ServiceAreaMap.tsx`

Decision:

- Do not treat these as live page problems.
- They may be useful source material for a Phase 2 evidence plate, but should not be revived blindly.

---

# 6. Next Implementation Queue

## Homepage micro polish — Owner-scoped

Trust Spine Pilot is **delivered**. Next homepage work is micro polish only, with Owner brief.

Allowed goals:

1. Keep the diagnostic homepage gate and pathway choice.
2. Refine gate and post-gate sections without removing delivered trust cues.
3. Protect gate internals: `#usage-situation-gate` · `gate-scroll-cue` · `scroll-mt-28` · mobile-only pathway-selector cue.
4. Reduce repeated scope/documentation/limits language where it still weakens trust.
5. Demote decorative proof/dossier layers if needed.

Do not:

- Remove the gate unless Owner explicitly approves.
- Break or remove gate internals listed above.
- Change pathway slugs, routing/query behavior, estimator logic, contact schema/API/payload, packages, SLA, emergency authority, legal substance, noindex state, contact details, or logo assets.
- Generate more synthetic imagery unless Owner reopens asset generation.
- Touch Services, How It Works, FAQ, About, or Contact unless separately briefed.

---

# 7. Later Queue

1. Replace accepted synthetic proof-layer placeholders with real photography where possible.
2. How It Works: replace the generic report excerpt with a real or privacy-safe report/field-note artifact.
3. About: add stronger real operator credential/presence surface if Owner approves.
4. Services: Gate 2 execution-only checkpoint only if separately briefed; do not alter accepted estimator, boundary register, or operational outputs without scope: add or upgrade one "scope ladder / what you actually get" evidence object only if separately briefed.
5. Home carousel: recreate synthetic risk shots as real operational details or convert to a fully artifact-led incident system.
6. Final CTA: replace atmospheric handoff image with real checklist/report-table detail or a drawn artifact.

---

# 8. Separate Asset-Production Backlog

Do not combine asset production with implementation.

Needed asset buckets:

- Real local exterior/presence: entrance, gate, corridor, mailbox, meter cabinet, street-level Torrevieja/Orihuela Costa context.
- Operational proof: report on table, checklist UI, keys plus dated note, boiler/AC/electrical/meter/detail observation.
- Operator credibility: real face if Owner approves; otherwise hands, partial presence, credential, or working-surface detail.
- Pathway proof: empty-property inspection note, readiness checklist, decision/limit/approval artifact.
- Optional video later: one real 8-12 second silent operational loop only; no AI video presented as real operational footage.

For each synthetic image slot, create an AI-to-real shot plan with:

- purpose
- AI placeholder prompt
- visual acceptance criteria
- future real-life recreation instructions
- where it appears
- risk level
- replacement priority

Privacy requirements:

- No client names.
- No exact addresses.
- No visible keys that reveal cut pattern if avoidable.
- No license plates, personal mail, WhatsApp chats, phone numbers, or unredacted device screens.
- No identifiable private interiors unless owned/cleared.

---

# 9. Recommended Next Brief

Recommended next Owner-scoped brief:

> Homepage micro polish only. Trust Spine Pilot is delivered — preserve the diagnostic gate, operator proof cue, €80/mo price cue, estimator link, and mobile gate internals (`#usage-situation-gate`, `gate-scroll-cue`, `scroll-mt-28`, mobile-only pathway-selector cue). Refine selected homepage sections per golden question. Do not generate more synthetic imagery. Do not touch Services, How It Works, FAQ, About, Contact, protected service contracts, estimator logic, contact schema/API, pathway slugs, legal substance, logo assets, footer contact, or noindex state.

Pass/fail:

- PL/EN parity preserved.
- No contract changes.
- No fabricated evidence claims.
- No synthetic placeholder used as a final trust-proof claim.
- Homepage gate and gate internals preserved unless Owner explicitly approved removal.
- 390px mobile has no horizontal overflow.
- Delivered trust cues remain visible before pathway selection.

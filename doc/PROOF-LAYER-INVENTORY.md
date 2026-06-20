# PROOF-LAYER-INVENTORY.md - SENTINEL

Source: Council v2 blind visual audit and Owner acceptance on 2026-06-20.

Purpose: inventory the current placeholder, image, and proof-object layer before implementation.

This is a planning document only. It does not approve code changes, asset fabrication, contract edits, estimator edits, contact-form changes, pathway slug changes, legal edits, DNS, Netlify, or indexing.

---

# 0. Preflight Note

Local git preflight on this pass reported:

- Branch: `main`
- `HEAD`: `9826937`
- `origin/main`: `9826937`
- Ahead/behind: `0/0`
- Untracked local folders: `.codex/`, `tmp/`

Some active docs still mention an older local stack (`b3fd918` ahead of `origin/main`). Per repo rules, current git state overrides stale SHA fields.

---

# 1. Council v2 Operating Rule

The next trust gain is not a broad visual redesign. It is a proof-layer sprint:

- replace abstract explanation with controlled proof objects
- keep the canonical Sentinel visual atmosphere
- avoid fake proof, stock theater, lifestyle imagery, and AI-generated evidence
- treat placeholders as asset slots, not final trust evidence

Hard constraints for this inventory:

- Synthetic / AI-generated images are allowed only as temporary composition placeholders or shot-planning targets.
- Synthetic images must be realistic, local, operational, restrained, and physically recreatable later.
- Synthetic images must be intended for one-for-one replacement by real photos before public/advertised use.
- No image may claim to show actual Sentinel work, an actual client property, an actual operator, or an actual report unless it is real and approved.
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
- The first desktop viewport has diagnostic cards and fact chips, but no concrete evidence object.

Current proof job:

- Establish seriousness and route the owner into one of three usage pathways.

Risk:

- The page can feel unfinished on desktop before pathway selection.
- The background image reads as atmosphere, not proof.

Decision:

- Keep the gate behavior.
- Add one concrete evidence object into the empty gate area.
- Preferred replacement type: structured artifact, not photo.

Recommended object:

- A compact "field record" plate combining: service radius, access/report/decision chain, and a redacted sample visit line.
- Do not make it a marketing badge or decorative map.

Priority:

- Phase 1.

## Home - selected pathway hero

Files:

- `components/UsagePathwayLayer.tsx`

Current proof/image slots:

- `private-use-only`: `public/photos/sentinel-apartment-entry-placeholder.png`
- `regular-guest-stays`: `public/photos/sentinel-cleaning-readiness-placeholder.png`
- `mixed-not-defined`: `public/photos/sentinel-corridor-exterior-placeholder.png`
- Each selected pathway also shows a changes panel with an `OperationalField` schematic.

Current proof job:

- Make the selected usage mode feel specific.

Risk:

- The visible hero proof relies on files explicitly named `*-placeholder`.
- The images look staged/photo-generated and therefore create the AI/stock smell Council v2 identified if treated as real evidence.

Decision:

- Treat these as synthetic shot placeholders only.
- Validate placement and composition, then recreate as real assets.
- If the shot cannot be realistically recreated, replace it with a structured pathway-specific artifact.

Required first-object swap:

- `private-use-only`: empty-property check evidence.
- `regular-guest-stays`: arrival/readiness checklist or before/after readiness detail.
- `mixed-not-defined`: decision-threshold device.

Priority:

- Phase 1.

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

Priority:

- Keep in Phase 1; revisit in Phase 2 only if page density is being cut.

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

- Validate placement and composition, then recreate as real operational details.
- If a shot cannot be recreated honestly, convert it to an artifact-led incident plate.
- If no viable shot plan exists, prefer the existing non-photo contrast fallback pattern or a new artifact carousel.

Priority:

- Phase 1 for neutralization if the pathway hero is touched.
- Phase 2 for richer real-asset replacement.

## Home - final CTA

Files:

- `app/[locale]/page.tsx`
- `app/globals.css`

Current proof/image slots:

- `public/images/home/home-final-cta-handoff-checklist.webp` is used as the background of `.home-handoff-cta__media`.

Current proof job:

- Close with the idea of a planned local handoff.

Risk:

- Looks like proof but is not verified as real.
- It is less damaging than the pathway placeholders because it is atmospheric and late-page.

Decision:

- Keep temporarily as non-evidence atmosphere if Phase 1 stays narrow.
- Treat as a synthetic shot placeholder if it remains photo-like.
- Replace later with a real checklist/report table detail or a drawn artifact.

Priority:

- Phase 2.

## Services

Files:

- `app/[locale]/services/page.tsx`
- `components/OperationalModuleTile.tsx`
- `components/UsageResponsibilityBridge.tsx`
- `components/PackageResponsibilityLadder.tsx`
- `components/WhatIfEventSimulator.tsx`
- `components/ServiceBoundaryGrid.tsx`
- `components/Estimator.tsx`

Current proof/image slots:

- Hero dossier artifact (`services-dossier-artifact`).
- Usage responsibility bridge.
- Package responsibility ladder.
- Capability console and schematic module tiles.
- Event simulator.
- Boundary grid.
- Estimator.

Current proof job:

- Explain package jurisdiction, capabilities inside oversight, and estimator fit.

Risk:

- Strong structure, but still mostly system UI and explanation.
- High contract sensitivity.

Decision:

- Do not start here for Phase 1 unless explicitly briefed.
- Phase 2 should add one "scope ladder / what you actually get" object without changing package names, count, SLA, emergency authority, or estimator logic.

Priority:

- Phase 2.

## How It Works

Files:

- `app/[locale]/how-it-works/page.tsx`
- `components/ProcessDetailChapters.tsx`
- `components/how-it-works/ReportDecisionLimits.tsx`

Current proof/image slots:

- Hero procedure register.
- Procedure corridor with per-step artifact cards.
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

- Phase 2 should replace or upgrade the report excerpt into a real or privacy-safe report/field-note artifact.
- Keep decision limits protected.

Priority:

- Phase 2.

## About

Files:

- `app/[locale]/about/page.tsx`

Current proof/image slots:

- Hero local-operator record.
- Operating gap board.
- IS / IS-NOT boundary panel.
- Local evidence text panel.
- Responsibility ledger.
- Capability register.

Current proof job:

- Establish local credibility and boundaries.

Risk:

- It has an operator record, but not a named human/operator identity.
- No face, credential, real local presence, or real operating-radius map.

Decision:

- Surface operator identity text-first in Phase 1.
- Later add a real face, hands, partial presence, or credential surface if Owner approves assets.
- Phase 2 can add a real operating-radius map or a privacy-safe local presence object.

Priority:

- Phase 1 for text-first operator identity.
- Phase 2 for real asset/map.

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

- Keep for Phase 1.
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

- Keep for Phase 1.
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
| `public/photos/sentinel-apartment-entry-placeholder.png` | Home selected `private-use-only` hero | Synthetic shot placeholder - recreate later | Validate placement, then recreate as real empty-property/access asset |
| `public/photos/sentinel-cleaning-readiness-placeholder.png` | Home selected `regular-guest-stays` hero | Synthetic shot placeholder - recreate later | Validate placement, then recreate as real readiness/checklist asset |
| `public/photos/sentinel-corridor-exterior-placeholder.png` | Home selected `mixed-not-defined` hero | Synthetic shot placeholder - recreate later | Validate placement, then recreate as real corridor/access/classification asset |
| `public/images/home/home-final-cta-handoff-checklist.webp` | Home final CTA background | Synthetic or atmospheric shot placeholder - recreate later | Keep temporarily; validate placement, then recreate as real checklist/report-table asset |
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
| `public/photos/sentinel-about-local-entry-placeholder.png` | No live reference found | Synthetic shot placeholder - recreate later | Do not promote as proof; use only if it has a real local exterior shot brief |
| `public/photos/sentinel-report-tablet-placeholder.png` | No live reference found | Risky synthetic shot placeholder | Avoid fake dashboard/report UI; use only if reframed as a recreatable non-SaaS report surface |
| `public/photos/sentinel-technician-access-placeholder.png` | No live reference found | Synthetic shot placeholder - recreate later | Do not promote as proof; use only if it has a real operator/partial-presence shot brief |
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

# 6. Phase 1 Implementation Queue

1. Fill the empty homepage gate with one evidence object.

   Replacement type: structured artifact.

   Suggested content: redacted visit line, access/report/decision chain, and service-radius boundary in one compact field record.

2. Replace the first proof object after pathway selection.

   Replacement type: pathway-specific artifact unless real assets exist.

   Required mapping:

   - Private: empty-property check evidence.
   - Guest: arrival/readiness checklist or readiness detail.
   - Mixed: decision-threshold device.

3. Validate the live pathway synthetic shot placeholders.

   Replacement type: temporary shot-planning media with a real-shot brief, artifact-led hero media, or real owned photos.

   Minimum safe option: stop treating placeholder interiors as proof claims.

4. Surface operator identity on About.

   Replacement type: text-first operator/credential/local-presence block.

   Later asset option: real face, hands, partial presence, or credential object.

5. Leave protected contracts untouched.

   Do not change: packages, SLA, emergency authority, estimator logic, contact schema/API/payload, legal substance, pathway slugs, noindex state, contact details, logo assets.

---

# 7. Phase 2 Queue

1. How It Works: replace the generic report excerpt with a real or privacy-safe report/field-note artifact.
2. About: add real operating-radius map and stronger operator credential surface.
3. Services: add or upgrade one "scope ladder / what you actually get" evidence object.
4. Home carousel: validate synthetic risk shots, then recreate as real operational details or convert to a fully artifact-led incident system.
5. Final CTA: replace atmospheric handoff image with real checklist/report-table detail or a drawn artifact.

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

> Implement Phase 1 of the Proof Layer Sprint: add a homepage gate evidence object, replace the first selected-pathway proof object with pathway-specific artifacts or synthetic shot placeholders that have real-shot briefs, validate visible placeholder photo placement without treating it as proof, and add a text-first operator identity surface on About. Do not change protected service contracts, estimator logic, contact schema/API, pathway slugs, legal substance, logo assets, or noindex state.

Pass/fail:

- PL/EN parity preserved.
- No contract changes.
- No fabricated evidence claims.
- No synthetic placeholder used as a final trust-proof claim.
- 390px mobile has no horizontal overflow.
- The first screen and first selected-pathway object show more than they explain.

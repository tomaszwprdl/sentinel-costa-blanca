# TASK — Services & How It Works Creative Redesign Brief

Status: Planning document for Codex implementation.  
Baseline: Visual Freedom Sprint merged at `30d2fea` on `main`.  
Scope: `/services` and `/how-it-works` (PL/EN equivalents).  
Mode: **Creative structural redesign** — not polish, not Task 7 institutional protocol.

Owner direction:

- Old Task 7 visual / manual / PDF / institutional protocol remains **suspended**.
- Keep the warm operational-premium direction from `doc/VISUAL-FREEDOM-SPRINT.md`.
- Teach through situations, not explanations.
- Big structural upgrades only — no small spacing or token tweaks as the deliverable.

Codex must **not implement UI in this task file**. This document is the implementation brief.

---

## A. Current diagnosis

### Services page problems

**Overall:** The page received Visual Freedom Sprint styling (`visual-card-strong`, hero image, `SlaTimeline`, `EscalationLevels`) but the **information architecture is still a service manual**. A visitor must read three near-identical long package articles before understanding the difference.

| Area | Current state | Why it still feels document-like |
|---|---|---|
| **Hero** | Split intro + report placeholder image; CTAs to contact and `#estimator` | Headline is policy-framed (“Pakiety usług — zakres i odpowiedzialność”). Lead copy explains jurisdiction before showing a situation. One static proof image; no “what you get” scan in 5 seconds. |
| **Package comparison** | `SlaTimeline` + `EscalationLevels` then three full-width package articles | Diagrams help but sit **above** three redundant mega-cards. No at-a-glance “pick your level” moment. Large unused `services.comparison.*` locale block (table removed) signals abandoned comparison pattern. |
| **Package cards** | Three inline `<article>` blocks (~120 lines each in page TSX) with identical skeleton: definition → visit scope → keys → emergency → not-included → sidebar summary/SLA | Reads like three PDF annexes stacked vertically. Same bullet-list grammar repeated 3×. “Dla kogo” / selection criteria duplicated later on page. |
| **Operational modules** | Text cards for rental/seasonal/transfers | Correctly scoped as non-packages, but visually indistinguishable from policy notes — no operational scene, no “when you’d add this” framing. |
| **Execution-only block** | Narrow `max-w-[44ch]` micro-label section | Easy to miss; reads like legal footnote, not an educational branch (“I only need keys once”). |
| **Exclusions + framework + selection** | Three separate `max-w-[65ch]` list sections after packages | **Quadruple repetition** of boundaries, suitability, and SLA concepts already inside package cards. Feels like compliance appendix, not user journey. |
| **Estimator** | Full `Estimator` component at section 7, far below qualification content | Logic is correct; placement treats pricing as afterthought. No bridge from “which package fits me?” to “what might it cost?”. Shell is warmer but still form-first. |
| **Visual proof / imagery** | Single hero image (`sentinel-report-placeholder.png`) | No visit, access, or inspection scenes on a page about operational scope. Proof is textual. |
| **CTA rhythm** | Hero pair + final authority band only | Long scroll with no mid-page action anchors. No persistent mobile CTA while reading package depth. |

**Core Services failure mode:** Visitor understands Sentinel *has* three packages, but cannot **feel** the responsibility step-up without reading hundreds of list items.

---

### How It Works page problems

**Overall:** The page is a **linear onboarding manual** (Steps 0–5, ongoing, changes, timeline, FAQ, CTA) with Visual Freedom Sprint surface treatment on intro and diagrams. Content volume is appropriate for operations; presentation is not.

| Area | Current state | Why it still feels long / instructional |
|---|---|---|
| **First screen** | Intro headline + description + processOverview string; access placeholder image; `ConfidenceBar` | Explains the process exists before showing it. “KROK 0…” framing starts in section 2. No “60-second version” above the fold. |
| **Process explanation** | Sections 2–9 are sequential `max-w-[65ch]` blocks with H2/H3/bullets | ~9 full-width text chapters before the visual timeline summary. Reads like internal SOP exported to web. |
| **Report / checklist** | `SampleInspectionReport` + `OnSiteVisitPhotoGrid` inside Step 3 only | Strong proof components, but **buried mid-scroll** inside one step. Checklist still renders as mono table — correct structurally, wrong priority in page flow. |
| **Escalation / decisions** | Described in prose across Steps 2, 4, 5, ongoing, changes | No single visual decision map. Emergency authority and owner approval boundaries are repeated, not shown. |
| **Diagrams** | `OnboardingTimeline` appears in **section 10** (near page end) | Timeline should be the spine of the page, not the recap. Users who bounce early never see it. |
| **Screenshots / images** | Access hero + operational capture placeholders in report/photo grid | Placeholders work but are sparse; no storyboard of a visit, no remote-owner “report received” scene. |
| **CTA rhythm** | Single contact button in final authority section | No sticky mobile CTA; no “start qualification” mid-journey; no link back to Services package ladder. |
| **Copy tone** | Step titles like “KROK 1: ZBIERANIE DANYCH…” | Manual numbering reinforces institutional document, not educational flow. |

**Core How It Works failure mode:** The page contains the right operational truth but teaches it **in the order Sentinel internalizes it**, not in the order a remote owner learns it.

---

### Mobile-specific problems (both pages)

| Issue | Services | How It Works |
|---|---|---|
| **Scroll depth** | Three full package articles + framework + selection before estimator | 12 sections of dense prose before timeline |
| **Grid stress** | `EscalationLevels` uses `sm:grid-cols-3` parameter chips — readable but still metric-dense on small screens | `OnSiteVisitPhotoGrid` 2-column grid is OK; report table requires horizontal scroll |
| **Typography rhythm** | Long `text-sm` bullet stacks inside cards | Step sections use repeated `mb-10` list blocks — fatigue |
| **CTA visibility** | CTAs only top/bottom; easy to lose orientation mid-page | Same |
| **Horizontal overflow risk** | Report table patterns inherited on Services if expanded | `SampleInspectionReport` table uses `overflow-x-auto` — acceptable but not mobile-first teaching |
| **No sticky action** | None | None |

---

## B. Redesign principle

**“Teach through situations, not explanations.”**

Show what happens when the owner is away, when a leak appears, when a technician needs entry, when a report arrives. Packages and process steps become **answers to situations**, not chapters to read. Dense policy stays available — but **below** situational clarity, inside expandable proof panels.

Visual tone: warm operational-premium (Visual Freedom Sprint).  
Not: manual, PDF, concierge, lifestyle villa, fake social proof.

---

## C. Services page — new structure

Proposed section order (PL/EN parity via new/ reorganized message keys):

| # | Section | Purpose | Content role | Visual idea | CTA role |
|---|---|---|---|---|---|
| 1 | **Situation entry hero** | Answer “what is this page for?” in one screen | Short headline + one situation line (owner away, needs local oversight) | Full-width image band using `sentinel-costa-blanca-entry-hero.png` or `sentinel-apartment-entry-placeholder.png`; 3 fact chips (area, documentation, access) | Primary: Contact · Secondary: Jump to package fit |
| 2 | **One-minute package ladder** | Make package difference scannable in ~30s | Responsibility step-up: checks → access → decisions; SLA bands unchanged | **`PackageResponsibilityLadder`**: vertical ladder or stepped rail with 3 nodes (Basic / Extended / Full), each with 1 sentence + 3 icon metrics (visits, access, decisions, SLA) | Tap level → scroll/sync to detail panel |
| 3 | **Scenario fit guide** | Educate before deep reading | “Which sounds like your property?” — 3–4 situational prompts mapped to package **recommendation**, not pathway slugs | **`ScenarioFitGuide`**: large selectable cards (empty most of year / guest turnovers / need local decisions / not sure yet) | Selected scenario highlights recommended package on ladder |
| 4 | **What-if event simulator** | Show package behavior under stress | 4 events: water leak · technician visit · guest check-in prep · weekend emergency | **`WhatIfEventSimulator`**: event tabs; each shows “Sentinel does / owner decides / not in scope” per package tier using existing copy facts | Link to recommended package + contact |
| 5 | **Package detail panels** | Preserve full scope truth without triple scroll | Collapse current three articles into **tabbed or accordion panels** keyed to ladder selection; one visible at a time | Image header per package + condensed proof bullets + expandable “full scope” | Per panel: “Estimate this package” → `#estimator` with package preselected if supported |
| 6 | **Service boundary grid** | Replace repeated exclusion lists | Sentinel does / does not do — global boundaries | **`ServiceBoundaryGrid`**: two-column does/does-not cards (not a legal wall of bullets) | Secondary: FAQ exclusions |
| 7 | **Operational modules strip** | Explain add-ons as situational upgrades | Rental prep, seasonal, transfers — when they apply | Horizontal image tiles + short “use when…” labels | Contact for scope confirmation |
| 8 | **Execution-only branch** | Clarify limited path without diluting packages | Keys/cleaning without oversight — explicit limitations | Compact branch card with warning surface (distinct from package cards) | Contact with context flag |
| 9 | **Estimator band** | Price exploration after fit understood | Existing `Estimator` — logic unchanged | Strong shell, optional sidebar “you selected Extended from scenario” | Calculate → contact with estimator payload |
| 10 | **Framework & commitment (collapsed)** | Legal precision available, not above fold | Min commitment, visit scheduling, decision limits | Expandable **`DisclosureBlock`** stack or “Service terms at a glance” panel | — |
| 11 | **Final CTA authority band** | Close with qualification | Headline + contact + FAQ | Existing authority section pattern | Primary contact · Secondary FAQ |
| — | **`MobileStickyCTA`** (component) | Persistent orientation on mobile | Contact + “Find your package” | Sticky bottom bar after hero scroll | Always visible on mobile |

**Remove / merge in implementation:**

- Standalone `selection` section (merge into Scenario Fit + ladder).
- Repeated inline exclusion blocks inside each package (link to boundary grid + expandable detail).
- Duplicate framework lists where boundary grid covers the same ground.

**Keep but reposition:**

- `SlaTimeline` and `EscalationLevels` — integrate **inside** ladder + simulator, not as preamble to three giant cards.

---

## D. How It Works page — new structure

| # | Section | Purpose | Content role | Visual idea | CTA role |
|---|---|---|---|---|---|
| 1 | **Process at a glance hero** | First screen clarity | “From first contact to active oversight” — 4 beats, not 6 steps | **`BeforeDuringAfterTimeline`** or compact **`OnboardingTimeline`** moved to top; hero image `sentinel-access-handover-placeholder.png` | Contact · View report example |
| 2 | **One-minute explanation** | 60s comprehension | Qualify → document → inspect → activate → ongoing | 4 **`OneMinuteSection`** bands with large step number + 2 lines each | Jump links to detail |
| 3 | **Visit storyboard** | Teach the core operational loop visually | What happens on a scheduled visit | **`VisitStoryboard`**: 5–6 frame horizontal/stepper (arrive → access → checks → photos → report → owner notified) | Link to Services packages |
| 4 | **Report walkthrough** | Make documentation tangible early | Sample inspection report — repositioned up | **`ReportWalkthrough`**: adapt `SampleInspectionReport` into stepped panels (header → checklist → photos → summary) with progressive reveal, not one dense table first | — |
| 5 | **Access chain diagram** | Explain controlled third-party entry | Keys, scheduling, verification, documentation | **`AccessChainDiagram`**: linear chain with optional branch for guest/technician | — |
| 6 | **Escalation decision map** | Unify emergency / owner approval content | When Sentinel acts vs when owner must approve; limits unchanged | **`EscalationDecisionMap`**: decision tree or lane diagram by package | Contact |
| 7 | **Onboarding detail (compressed steps)** | Preserve operational completeness | Current step0–step5 copy reorganized into **5 expandable chapters**, not 5 full scroll sections | Accordion / chapter cards with “read details” — default collapsed except user-expanded | — |
| 8 | **Ongoing service rhythm** | Post-activation expectations | Visits, reports, access, emergencies — one visual strip | Timeline strip or card row (not 6 separate H3 lists) | — |
| 9 | **Changes & termination (collapsed)** | Legal/process completeness | Package changes, termination — existing copy | Single expandable panel | — |
| 10 | **Process FAQ** | Resolve blockers | Keep existing 7 Q&A; tighter spacing | Light card FAQ, not essay blocks | — |
| 11 | **Final CTA** | Next step | Qualification checklist (short) + contact | Authority band | Contact |
| — | **`MobileStickyCTA`** | Mobile persistence | Contact + “See packages” | Sticky bar | — |

**Remove / demote:**

- “KROK N:” all-caps step titles as primary headings — use situational titles (“Before we visit”, “When you receive the report”).
- Full duplicate prose in `ongoing` + `changes` if already covered in decision map and collapsed panels — **relocate**, do not delete business substance.

**Move up:**

- `OnboardingTimeline` from section 10 → section 1 or 2.
- `SampleInspectionReport` / photo proof → section 4 walkthrough.

---

## E. Creative modules to build

Codex should create or adapt these reusable components (names are prescriptive):

| Component | Used on | Description |
|---|---|---|
| **`PackageResponsibilityLadder`** | Services | Three-step visual ladder: responsibility level, SLA band, 3 metrics. Syncs with selected package/scenario. Reuses data from `SlaTimeline` / `EscalationLevels` props pattern. |
| **`ScenarioFitGuide`** | Services | Situation selector cards → highlights package recommendation. Not pathway slugs; maps to package fit only. |
| **`WhatIfEventSimulator`** | Services | Tabbed/card event scenarios showing tiered response. Read-only educational UI; no new business rules. |
| **`ServiceBoundaryGrid`** | Services | Does / does-not grid replacing repeated exclusion lists. Pulls from `notIncluded`, package `notIncludedItems`, execution-only limits. |
| **`VisitStoryboard`** | How It Works | Frame sequence of on-site visit; image + caption per frame. |
| **`ReportWalkthrough`** | How It Works | Progressive disclosure wrapper around `SampleInspectionReport` content; mobile-first checklist cards with optional table expand. |
| **`BeforeDuringAfterTimeline`** | How It Works | Owner journey: before service / first month / ongoing. |
| **`AccessChainDiagram`** | How It Works | Keys → request → entry → verification → report chain. |
| **`EscalationDecisionMap`** | How It Works (+ optional Services cross-link) | Visualizes owner vs Sentinel decisions, emergency limits by package. |
| **`OneMinuteSection`** | Both | Short titled band: label + 2 lines + optional image chip. |
| **`MobileStickyCTA`** | Both | Sticky bottom bar on mobile: primary contact + context secondary link. Hide when footer visible. |
| **`OperationalModuleTile`** | Services | Image-led tile for add-on modules. |
| **`ExpandableProofPanel`** | Both | Image + short proof + expand for detail (replaces wall of bullets). |

**Adapt existing:**

- `SlaTimeline`, `EscalationLevels`, `OnboardingTimeline` — refactor for embedding inside new shells, not standalone preamble blocks.
- `SampleInspectionReport`, `OnSiteVisitPhotoGrid`, `OperationalCaptureFrame` — feed `ReportWalkthrough` / storyboard.
- `DisclosureBlock` — framework, legal-adjacent detail, full scope expansions.
- `Estimator` — keep logic; optional external shell for scenario context banner only.

---

## F. Image plan

Stable placeholder filenames under `public/photos/`. Codex may add these as replaceable operational placeholders (no people faces, no luxury villa mood, no fake testimonials).

| Filename | Used in section | Scene description |
|---|---|---|
| `sentinel-costa-blanca-entry-hero.png` | Services hero (reuse) | Residential entry / Costa Blanca context — already exists |
| `sentinel-apartment-entry-placeholder.png` | Services hero alt, Visit storyboard frame 1 | Apartment door / entry / call button |
| `sentinel-access-handover-placeholder.png` | How It Works hero, Access chain | Key handover / controlled access moment |
| `sentinel-corridor-exterior-placeholder.png` | Visit storyboard | Typical residential block corridor or exterior |
| `sentinel-technical-check-placeholder.png` | Services simulator, storyboard | Water/boiler/electrical check — already exists |
| `sentinel-report-tablet-placeholder.png` | Report walkthrough, Services proof | Phone/tablet showing report preview (no fake UI brand) |
| `sentinel-cleaning-readiness-placeholder.png` | Operational modules | Post-clean or arrival-ready scene |
| `sentinel-owner-remote-report-placeholder.png` | How It Works closing bands | Laptop/phone receiving report remotely (no face) |
| `sentinel-escalation-leak-placeholder.png` | What-if simulator | Visible minor leak / valve / moisture observation |
| `sentinel-service-radius-placeholder.png` | Services hero chip / boundary | Map/route/radius abstract (or reuse `ServiceAreaMap` SVG) |
| `sentinel-report-placeholder.png` | Package panels | Document/report proof — already exists |
| `sentinel-access-placeholder.png` | Access chain | Lock / access — already exists |

**Caption rule:** Operational labels only (“Main water valve — visual check”), never “Happy owner” or client names.

---

## G. Copy guidance

### What copy should become

| Dimension | Above the fold | Mid-page | Lower / expandable |
|---|---|---|---|
| **Length** | Headline + 1–2 short sentences per section | Scenario cards: title + 1 line + 1 outcome | Full lists, SLA notes, legal precision |
| **Tone** | Situational (“When you're not on site…”) | Instructional-imperative (“Sentinel checks…”) | Policy-precise (current package bullets) |
| **Structure** | Questions and outcomes | If → then educational frames | Existing `services.*` / `howItWorks.*` detail keys reused where possible |
| **Legalistic density** | Avoid | Minimal | Allowed inside disclosures |

### PL/EN parity rules

- Add new keys to both `messages/pl.json` and `messages/en.json`.
- Polish must not read as translated English.
- Keep locked package public names: PL `Podstawowy` / `Rozszerzony` / `Pełny`; EN `Basic` / `Extended` / `Full`.
- Do not rename “usage situations” or pathway slugs on these pages.

### Copy migration strategy for Codex

1. **Write new short keys** for situational headings and one-minute sections.
2. **Reuse existing long keys** inside expandable panels — do not invent new business rules.
3. **Deprecate display** of redundant sections (e.g. standalone `selection`) without deleting locked substance from locale files until Owner approves cleanup.

---

## H. Protected contracts

Codex must **not** change:

| Contract | Detail |
|---|---|
| Package count & names | 3 packages: Basic/Podstawowy, Extended/Rozszerzony, Full/Pełny |
| SLA definitions | 48h / 24h / same-day acknowledgment logic |
| Emergency authority limits | EUR 300 / EUR 300–500 per package logic |
| Estimator | Matrix, calculation, form fields, result shape |
| Contact API | Route, schema, payload, email behavior |
| Pathway slugs | `private-use-only`, `regular-guest-stays`, `mixed-not-defined` |
| Legal substance | Terms, privacy, exclusions meaning |
| Service area | Torrevieja + ~50–70 km |
| Contact details | Pre-live placeholders unchanged |
| noindex / nofollow | Netlify header + robots behavior |
| i18n routing | `/pl` and `/en` parity |
| Dependencies | No new npm packages unless unavoidable and explicitly reported |
| DNS / Netlify / env | No deployment config changes |

Scenario and simulator UI is **educational** — it must reflect existing package boundaries, not create new ones.

---

## I. Acceptance criteria

### Comprehension

- [ ] Services page understandable in **30 seconds** (ladder + scenario visible without scrolling on desktop; without deep scroll on mobile).
- [ ] Package difference clear **without reading a comparison table**.
- [ ] How It Works explains process **visually** (timeline + storyboard + report walkthrough above detailed prose).

### UX / visual

- [ ] Mobile pages readable without tiny multi-column grids as primary teaching device.
- [ ] No horizontal overflow on primary content paths (tables allowed inside optional expand only).
- [ ] CTAs obvious: hero, mid-page, final, **`MobileStickyCTA`** on mobile.
- [ ] Warm operational-premium direction preserved; no reversion to manual/PDF layout as default.

### Integrity

- [ ] No fake testimonials, client names, or implied customer count.
- [ ] PL/EN parity maintained.
- [ ] Protected contracts unchanged (section H).
- [ ] `npm run build` passes.
- [ ] `npm run lint` passes.

### Deliverable check for this planning task

- [ ] This document exists at `doc/TASK-SERVICES-HOWITWORKS-REDESIGN.md`.
- [ ] No production page rewrites in the same commit as this doc.

---

## Implementation notes for Codex

1. **Prefer composition over monolithic page TSX** — current `services/page.tsx` (~550 lines) and `how-it-works/page.tsx` (~620 lines) should shrink by extracting sections into components listed in section E.
2. **Page order is the product** — implement section order before micro-visual tuning.
3. **Reuse Visual Freedom Sprint tokens** — `visual-card`, `visual-card-strong`, `section-label`, `btn-primary`, authority sections; do not introduce a third visual system.
4. **Large unused locale blocks** — `services.comparison.*` may be mined for comparison content in ladder/simulator, or left for later cleanup; do not restore full comparison table (doctrine: vertical containment).
5. **Cross-linking** — How It Works should link to Services ladder; Services should link to How It Works report walkthrough anchor.

---

## Risks

| Risk | Mitigation |
|---|---|
| Interactive modules imply new service rules | Label simulators “illustrative”; bind all outcomes to existing copy keys |
| Scenario fit guide confused with homepage pathway gate | Different copy and purpose; no pathway slug params on Services |
| Page rebuild becomes copy rewrite | New short keys only above fold; long policy relocated not rewritten |
| Mobile sticky CTA overlaps footer/forms | Hide on contact form focus and footer intersection |
| Image placeholders feel generic | Accept for pre-live; flag for Owner replacement per VISUAL-FREEDOM-SPRINT risks |
| Scope creep into Estimator logic | Estimator shell/context banner only |
| Concordance drift PL/EN | Implement keys in pairs in same PR |

---

## Top 5 recommended creative moves (summary for Owner)

1. **`PackageResponsibilityLadder` + `ScenarioFitGuide` above the fold on Services** — replaces triple-scroll package reading as the first teaching moment.
2. **`WhatIfEventSimulator` on Services** — makes SLA and decision limits memorable through events, not bullets.
3. **Move `OnboardingTimeline` + `VisitStoryboard` to the top of How It Works** — process visible before manual chapters.
4. **`ReportWalkthrough` early on How It Works** — proof before policy; adapts existing sample report components.
5. **`MobileStickyCTA` on both pages** — contact always reachable during long educational scroll.

---

*Planning document only. Implementation PR(s) should reference this file and `doc/VISUAL-FREEDOM-SPRINT.md`.*

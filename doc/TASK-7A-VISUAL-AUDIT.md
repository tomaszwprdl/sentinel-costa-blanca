# TASK 7A — Global Visual System Audit & Implementation Specification

Purpose: Audit the full public website against institutional visual doctrine and produce a Codex-ready implementation plan.

**Scope:** Audit and specification only. No UI or product-logic changes in this task.

**Governance read:** AGENTS.md, DECISIONS.md, STATUS.md, TASK.md (§7), BRAND.md, LAYOUT COMPOSITION.md, LOGO-USAGE-HIERARCHY.md, LOGO-DIRECTION.md, AUDIT-TASK-8-FREEZE.md, QA.md.

**Audit date:** 2026-06-04  
**Code baseline:** `975e6d3` (Task 8 frozen)  
**Locales audited:** PL, EN (code + message keys; live screenshots deferred to post-implementation checklist)

**Hard constraints (unchanged in Task 7):** packages, pricing, estimator behavior, SLA text/logic, service definitions, Task 8 functional layer.

---

## A. Executive visual verdict

| Question | Answer |
|----------|--------|
| Is the site visually ready for launch? | **No** |
| Is the structural foundation sound? | **Yes** — authority palette, two-layer header, Section primitive, navy footer, pathway gate, and Task 8 interaction layer are institutionally aligned |
| Is Task 7 eligible to execute? | **Yes** — Task 8 frozen per AUDIT-TASK-8-FREEZE.md |

### 3-second authority test (global)

Within three seconds, a visitor should perceive: *governed operational system, not agency/concierge/SaaS.*

**Passes today:** Navy authority bar + inverse logo, declarative copy tone, bounded pathway gate, explicit exclusions, authority CTA closures, no lifestyle hero photography.

**Fails today:** Visible empty boxes and bracketed placeholder copy signal “template in progress”; Services package cards use premium SaaS card styling (`rounded-2xl`, heavy vertical padding) that reads closer to product marketing than institutional documentation; no operational diagrams (map, SLA timeline, escalation) to anchor jurisdiction visually.

### Biggest authority leaks

1. **Placeholder surfaces** — Home service-area column (`aria-hidden` empty box), Contact map placeholder text in copy, How It Works photo grid placeholders, Sample Inspection Report photo-ref boxes. These break TASK.md §7.4 (“No placeholders”).
2. **Radius doctrine drift** — Global rule: single `.r` token (LAYOUT §14.3c, `globals.css`). Services package cards use `rounded-2xl` (three instances). Hamburger uses `rounded-full`. Estimator radios use `rounded-full`. Reads as mixed design system.
3. **Package chroma residue** — Public copy de-colored (Task 8I), but CSS still exposes `--package-green/orange/red` left accents on Services cards. Functional hierarchy marker is acceptable per Task 6.14, but combined with large marketing-style cards it reintroduces “pick a color tier” feeling.
4. **Missing graphic language** — No service-area map, no SLA timeline diagram, no three-level escalation diagram, no icon system beyond theme sun/moon and ad-hoc chevrons. Long procedural pages (How It Works, Services) are text-only walls.
5. **Rhythm exceptions without containment rationale** — Home contrast block uses `max-w-7xl`, custom negative margins (`-mb-10 md:-mb-16`), and sits outside canonical Section inner width; reads as one-off layout rather than governed composition.

### Biggest opportunities

1. **Static jurisdictional map** — Single institutional map asset (Torrevieja + 50–70 km) reused on Home, Contact, Footer service-area column; replaces all placeholder surfaces.
2. **Diagram suite** — Monochrome SLA response timeline, onboarding step timeline (How It Works §10 text → visual), three-level escalation structure (DECISIONS § escalation model).
3. **Operational photography doctrine** — Replace photo placeholders with owner-provided / redacted operational evidence (shutoff labels, lock hardware, panel covers)—never lifestyle interiors.
4. **Package card unification** — One `PackageCard` visual contract shared by Services full cards and Home three-level preview cards; align radius, spacing ladder, accent treatment.
5. **Component polish pass** — ConfidenceBar as governed “parameter strip”; DisclosureBlock square corners + `.r` option; Estimator containment frame; execution-only module visual demotion (already structurally secondary—needs visual separation per freeze note).

---

## B. Page-by-page findings

### Home (`app/[locale]/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | Pathway gate (`UsagePathwayLayer`) is visually institutional: bordered choice block, authority left accent on selection, no default unlock. System intro uses Section major variant. Three-level preview cards use `.r`, structural borders, progressive left accent on level 3. Final CTA uses authority Section tone. Distinction blocks are text-forward, no lifestyle cards. |
| **Authority leaks** | Empty service-area column (`bg-surface-light-alt … aria-hidden`) is the most visible “unfinished site” signal post-unlock. Contrast section breaks container grid (`max-w-7xl mx-auto px-6`) and negative margin overlap—feels bespoke, not systemized. |
| **Density / rhythm** | Long unlock stack: gate → system intro (major) → contrast → levels grid → distinction (5 blocks) → service area → final CTA. Vertical cadence is mostly 120px Section primitives, but contrast section internal spacing (`gap-x-20`, `gap-y-10`) is off-ladder. Distinction 2-col grid at `max-w-[1120px]` is dense on tablet. |
| **Diagram / map / photo** | Service-area half-column reserved but empty—**map required**. No hero illustration (allowed per LAYOUT §8: structural monochrome). Levels section could use horizontal jurisdiction axis diagram (optional, low priority). |
| **Mobile / tablet** | Gate fills viewport (`flex-1 justify-center`)—good. Pathway cards stack cleanly. Levels grid 1→3 cols OK. Contrast 2-col collapses; horizontal rules (`h-px w-16`) may feel sparse on mobile. Distinction 5 blocks in 2-col leaves orphan block on some breakpoints. |
| **Task 7 action** | **Patch 1:** Install map in service-area Region. **Patch 2:** Normalize contrast section to Section + GridFrame (remove `max-w-7xl` exception or document as governed exception). **Patch 3:** Optional jurisdiction axis micro-diagram for levels. |

### Services (`app/[locale]/services/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | Clear page intro; three package articles with header-band pause and spacer bands between cards; execution-only block intentionally demoted (small type, narrow column); Estimator in bordered containment; authority CTA closure. Internal JSON keys `green/orange/red` not shown publicly. |
| **Authority leaks** | `rounded-2xl` on all three package cards contradicts `.r` doctrine. Large `text-2xl lg:text-3xl font-bold` card titles read marketing-heavy. Left color accents + premium spacing reintroduce tier-picker aesthetic despite copy cleanup. Page length without visual anchors (no comparison matrix diagram, no SLA graphic). |
| **Density / rhythm** | `space-y-20 md:space-y-28` between cards exceeds canonical 120/160 section scale (intentional premium pause—needs governance: either codify as package-block exception or normalize). Repeated `space-y-14 md:space-y-16` inside cards. Selection guide duplicates card content—long scroll. |
| **Diagram / map / photo** | SLA blocks are text in tinted boxes—**SLA timeline diagram** per package tier (same data, visual). Add-ons section could use module map (not fourth package). No service-area map (footer/contact/home own that). |
| **Mobile / tablet** | Package cards single column; right summary column stacks below main content on `<lg`. Long scroll on mobile without sticky mini-nav. Estimator sticky sidebar desktop-only (`lg:sticky`)—mobile stacks reason panel below inputs (correct). |
| **Task 7 action** | **Patch 2:** Package card system (`PackageCard` component, `.r`, spacing ladder, accent policy). **Patch 4:** SLA timeline graphics in card footers. **Patch 2:** Execution-only visual separation (border style distinct from package cards). Do not change package copy, pricing, or estimator. |

### How It Works (`app/[locale]/how-it-works/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | ConfidenceBar on intro; SampleInspectionReport with dark-mode-aware `report-table`; DisclosureBlock for expandable detail; step structure matches procedural doctrine. |
| **Authority leaks** | `SampleInspectionReport` photo refs are labeled placeholder boxes—not evidence. `OnSiteVisitPhotoGrid` explicitly shows “Photo placeholder {n}”. No visual timeline for §10 (text-only step list). Step 2 still lists green/orange/red package names in copy keys—terminology is internal key paths; verify rendered PL/EN strings are doctrine-clean (functional, not visual). |
| **Density / rhythm** | Very long page; uniform `mb-10` between list blocks creates flat rhythm (noted in Audit 6.7). Multiple consecutive alt/light sections without structural separator diagrams. |
| **Diagram / map / photo** | **Highest-value page for diagrams:** onboarding timeline (§10), first-visit flow, report sample (keep table; add redacted photo thumbnails per doctrine). Photo grid → operational photos. |
| **Mobile / tablet** | Report table has `overflow-x-auto`—good. Photo grid 2×2 may be tight on small phones. |
| **Task 7 action** | **Patch 3:** Timeline diagram component for §10. **Patch 1:** Replace photo grid + report photo refs with doctrine assets. **Patch 3:** Optional step rail (0–5) for desktop sticky nav. |

### FAQ (`app/[locale]/faq/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | Policy notice panel with marker; ConfidenceBar; DisclosureBlock per section; search field institutional styling; anchor nav with `scroll-mt-24`. |
| **Authority leaks** | Search input lacks `.r` (sharp corners vs rest of system). Sticky anchor nav (`top-24`) may collide with sticky header (72px + 64px)—verify overlap in implementation QA. |
| **Density / rhythm** | `notice-panel mb-10` + ConfidenceBar + search = heavy intro stack before content. FAQ pairs in DisclosureBlocks—appropriate. |
| **Diagram / map / photo** | None required; optional icon for policy notice (must not be emoji/playful). |
| **Mobile / tablet** | Anchor nav sticky in single column—limited value on mobile; consider hide below `md`. Search full-width OK. |
| **Task 7 action** | **Patch 5:** Input radius parity (`.r` on search). Sticky offset tune. Dark-mode pass on notice-panel. |

### About (`app/[locale]/about/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | Text-forward philosophy; bullet structure with authority markers; Section alternation; no lifestyle photography. |
| **Authority leaks** | No visual evidence of operational model (pure prose). Reads credible but not *demonstrated*. |
| **Density / rhythm** | Multiple sections with similar list patterns; `space-y-5` / `mb-10` off-ladder (Audit 6.7). |
| **Diagram / map / photo** | Optional: institutional scope diagram (what Sentinel is / is not)—monochrome boundary chart. No lifestyle team photos. |
| **Mobile / tablet** | Low risk; standard single-column flow. |
| **Task 7 action** | **Patch 5:** Spacing ladder normalization. Optional boundary diagram in philosophy section. |

### Contact (`app/[locale]/contact/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | ConfidenceBar on intro; pathway + estimator context panels use `.r`; form grouped in bordered sections; GridFrame for fields; emergency notice panel. |
| **Authority leaks** | **Bracketed map placeholder copy** in service-area section (`mapPlaceholder`, `mapNote`)—critical authority leak. Form is long with many sections—reads operational but visually exhausting. Context panels duplicate Estimator summary (functional OK; visual weight high). |
| **Density / rhythm** | Six major sections before form submit; consecutive `tone="alt"` sections (2 and 3). Form `space-y-10` between field groups OK. |
| **Diagram / map / photo** | Replace map placeholder with static map asset (same as Home). |
| **Mobile / tablet** | Long form scroll; no multi-step wizard (correct per doctrine). Phone/email fields stack. Estimator prefill panel may push form far down—acceptable. |
| **Task 7 action** | **Patch 1:** Map asset + remove placeholder strings. **Patch 4:** Form section visual hierarchy (section labels, optional progress cues without wizard UX). **Patch 5:** `.r` on inputs consistent with Estimator. |

### Terms (`app/[locale]/terms/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | Single Section + TextColumn + prose loop; one H1; institutional tone. |
| **Authority leaks** | None significant; legal density expected. |
| **Density / rhythm** | `mb-10` per section block—not on 20/40 ladder. |
| **Diagram / map / photo** | None. |
| **Mobile / tablet** | Low risk. |
| **Task 7 action** | **Patch 5:** Prose spacing to ladder; dark-mode prose contrast check. |

### Privacy (`app/[locale]/privacy/page.tsx`)

| Dimension | Finding |
|-----------|---------|
| **What works** | Same pattern as Terms. |
| **Authority leaks** | None significant. |
| **Density / rhythm** | Same `mb-10` pattern as Terms. |
| **Diagram / map / photo** | None. |
| **Mobile / tablet** | Low risk. |
| **Task 7 action** | **Patch 5:** Match Terms prose rhythm; dark-mode pass. |

---

## C. Shared component findings

### Header (`components/HeaderClient.tsx`)

| Aspect | Assessment |
|--------|------------|
| **Works** | Two-layer model (authority + operational) per doctrine. Inverse logo on navy. Logo min-width container ~200px. Sticky header. Mobile hamburger with focus rings. Theme + language controls separated by border. |
| **Leaks** | Logo width 216px in bar—verify against LOGO-USAGE-HIERARCHY minimum 140px (pass). Hamburger uses `rounded-full` on bars (minor). Mobile nav dropdown is plain list—acceptable. No active-route indicator (optional Task 7). |
| **Task 7** | Lock authority bar height after viewport QA. Optional: active nav state (underline, not color burst). Dark mode: operational bar uses `bg-surface-light`—verify token flip under `[data-theme="dark"]`. |

### Footer (`components/Footer.tsx`)

| Aspect | Assessment |
|--------|------------|
| **Works** | Authority containment: navy field, inverse logo, four-column GridFrame, jurisdiction closure copy. |
| **Leaks** | Service-area column is text only—missed map thumbnail opportunity. `py-10` (40px) not 120—acceptable for footer but differs from Audit 6.7 note on `py-16` (now 40). |
| **Task 7** | Optional small map mark or radius line graphic in service-area column. Ensure link hover parity in dark mode (already on dark bg). |

### Package cards (Services articles + Home levels grid)

| Aspect | Assessment |
|--------|------------|
| **Works** | Home levels: structural cards, `.r`, border hierarchy. Services: header-band pause, spacer bands, two-column detail/summary split. |
| **Leaks** | Services: `rounded-2xl`, color left accents, marketing title scale. Two different card languages for same three-level model. |
| **Task 7** | Extract shared visual contract; Services cards adopt Home `.r` language; govern accent (structural muted vs package chroma—Owner decision: keep 4px accent or move to neutral structural left bar with label-only differentiation). |

### Estimator (`components/Estimator.tsx`)

| Aspect | Assessment |
|--------|------------|
| **Works** | Bordered outer containment (`border-structural-muted bg-surface-light py-10 px-5 r`). Procedural radio rows, not wizard steps. Sticky reason/result panel on `lg+`. Gate messages without price until Calculate. Scope toggles use `.r` switches. |
| **Leaks** | Custom toggle switch reads slightly SaaS; radio circles use `rounded-full` (doctrine exception candidate for form controls). Desktop sticky `top-6` may tuck under header on scroll—verify offset (`top-24`?). |
| **Task 7** | Visual-only: sticky offset, switch vs checkbox institutional style, ensure dark-mode panel borders match `report-table` parity. **Must not change:** calculate logic, matrix, URL params, collapse behavior. |

### Contact form (`app/[locale]/contact/page.tsx`)

| Aspect | Assessment |
|--------|------------|
| **Works** | Grouped fieldsets in bordered panels; GridFrame responsive; pathway/estimator context blocks. |
| **Leaks** | Inputs lack `.r`; mixed padding (`px-5 py-5`). Long vertical form without sectional numbering. |
| **Task 7** | Input `.r`, consistent focus ring, optional section numbering (01/02/03) without wizard pattern. **Must not change:** validation, API payload, handoff fields. |

### DisclosureBlock (`components/DisclosureBlock.tsx`)

| Aspect | Assessment |
|--------|------------|
| **Works** | Accessible button, aria-expanded, institutional label weight (`text-authority`). |
| **Leaks** | Square outer border (no `.r`)—inconsistent with cards. Inline SVG chevron—not from icon system. `transition-transform duration-200`—minimal motion OK. |
| **Task 7** | Add optional `r` variant; replace chevron with governed icon stroke; dark-mode expanded background contrast. |

### SampleInspectionReport (`components/SampleInspectionReport.tsx`)

| Aspect | Assessment |
|--------|------------|
| **Works** | Mono header block; checklist table with dark parity classes; structured sections; no fake PDF embed. |
| **Leaks** | Photo ref cells are empty bordered boxes—placeholder. Outer card lacks `.r`. |
| **Task 7** | Redacted thumbnail treatment; `.r` on outer card; optional “SEN-INS” watermark styling (copy already uses SEN-INS). **Must not change:** checklist content/structure. |

### ConfidenceBar / parameter bars (`components/ConfidenceBar.tsx`)

| Aspect | Assessment |
|--------|------------|
| **Works** | “Key parameters” strip: service area, SLA, scope in GridFrame thirds; left accent border; `.r` container. Used on How It Works, FAQ, Contact intros. |
| **Leaks** | Title uses `section-label`; not visually distinct from body on alt sections. `mb-10` on component—consumers also add margin (FAQ wraps in `mb-10`). |
| **Task 7** | Treat as canonical **ParameterStrip** pattern: optional subtle authority background on Contact only; unify margins; consider icon-free column dividers. Not a progress bar—do not animate. |

### Service area / map block

| Aspect | Assessment |
|--------|------------|
| **Works** | Copy defines Torrevieja + 50–70 km consistently (Home, Contact, Footer, ConfidenceBar). |
| **Leaks** | Home: empty div. Contact: explicit placeholder strings in UI. No geographic visualization anywhere. |
| **Task 7** | **Single static map asset** (SVG or PNG): monochrome, labeled radius, no Google embed required for MVP. Remove placeholder copy keys from public render. |

### Dark mode (global)

| Aspect | Assessment |
|--------|------------|
| **Works** | `[data-theme="dark"]` token remapping; no `invert()` on logo; report-table parity classes; ThemeSwitch component. |
| **Leaks** | Full-device parity not verified in this audit (code review only). Package accent colors may not be tuned for dark surfaces. Estimator toggle white knob fixed `#fff`. Placeholder boxes same alt bg—low contrast difference. |
| **Task 7** | **Patch 5:** Systematic dark-mode screenshot pass all pages/components; fix token gaps; estimator switch knob token. |

### Mobile / tablet / desktop rhythm (global)

| Aspect | Assessment |
|--------|------------|
| **Works** | Container padding responsive; GridFrame 4/8/12; Section 120/160 ladder; header sticky. |
| **Leaks** | Multiple ad-hoc max-widths (`65ch`, `72ch`, `56ch`, `7xl`, `1120px`). FAQ sticky nav offset. Services page scroll length. |
| **Task 7** | Document allowed max-width tokens; reduce one-offs in Patch 2. |

---

## D. Codex implementation plan

Five patches, ordered for dependency and risk. Each patch is visual-only unless noted.

---

### Patch 1 — Placeholder elimination & service-area map

**Purpose:** Remove all public placeholder surfaces; install governed static map.

**Likely files:**
- `public/images/` — new `service-area-map.svg` (or `.png`)
- `app/[locale]/page.tsx` — Home service-area Region
- `app/[locale]/contact/page.tsx` — map section
- `components/Footer.tsx` — optional map thumbnail
- `messages/en.json`, `messages/pl.json` — remove or retire `mapPlaceholder` / `mapNote` from render (keys may remain unused)
- `components/OnSiteVisitPhotoGrid.tsx` — swap placeholders for assets
- `components/SampleInspectionReport.tsx` — photo ref cells

**Acceptance criteria:**
- No empty `aria-hidden` boxes on Home service area
- No bracketed placeholder strings visible on Contact
- Map shows Torrevieja center + 50–70 km radius; monochrome; no interactive embed required
- Photo grid shows redacted operational images OR governed “redacted capture” frame—not “Photo placeholder N” text
- PL and EN render identically structurally

**Must not change:** Service area copy facts; pathway logic; contact form behavior.

---

### Patch 2 — Package card & layout rhythm unification

**Purpose:** One institutional card language; align radius and spacing doctrine.

**Likely files:**
- `app/[locale]/services/page.tsx` — three package articles
- `app/[locale]/page.tsx` — levels grid, contrast section
- `components/layout/PackageCard.tsx` (new, optional abstraction per TASK.md parking list)
- `app/globals.css` — package accent policy; document spacing exception for package bands if retained

**Acceptance criteria:**
- All package surfaces use `.r` (no `rounded-2xl`)
- Home levels and Services cards share border/header-band/spacing contract
- Contrast section either uses Section+GridFrame without `max-w-7xl` or documents exception in LAYOUT COMPOSITION
- Spacing values on page rhythm use 20/40/120/160; internal card density may use p-6 (24px) per §7.1
- Execution-only block visually distinct from package cards (narrower, muted border, no accent color)

**Must not change:** Package content, SLA text, pricing, selection guide copy, add-on definitions.

---

### Patch 3 — Diagram language (timeline, SLA, escalation)

**Purpose:** Replace text-only procedural walls with monochrome institutional diagrams.

**Likely files:**
- `components/diagrams/ServiceAreaMap.tsx` (if not static-only in Patch 1)
- `components/diagrams/OnboardingTimeline.tsx`
- `components/diagrams/SlaTimeline.tsx`
- `components/diagrams/EscalationLevels.tsx` (three-level jurisdictional model)
- `app/[locale]/how-it-works/page.tsx` — §10 timeline, optional step rail
- `app/[locale]/services/page.tsx` — SLA blocks in package cards
- `public/images/diagrams/` — SVG sources

**Acceptance criteria:**
- Diagrams are monochrome / structural; no illustration style; no stock icons
- SLA diagram data matches existing SLA copy per tier (no new SLA commitments)
- Escalation diagram reflects three-level model from DECISIONS—no fourth tier
- Onboarding timeline matches How It Works §10 step text
- SVGs scale on mobile; no horizontal scroll unless table already required

**Must not change:** Step text meaning; SLA numbers; escalation rules.

---

### Patch 4 — Containment polish (Estimator, forms, disclosure, report)

**Purpose:** Strengthen procedural containment without SaaS/wizard aesthetics.

**Likely files:**
- `components/Estimator.tsx` — sticky offset, switch styling, dark tokens
- `app/[locale]/contact/page.tsx` — input `.r`, section hierarchy
- `components/DisclosureBlock.tsx` — radius variant, icon
- `components/SampleInspectionReport.tsx` — outer `.r`, report framing
- `components/ConfidenceBar.tsx` — margin contract, optional dividers

**Acceptance criteria:**
- Estimator sticky panel clears header (`top-*` verified at 375/768/1280)
- Contact inputs match Estimator field styling
- DisclosureBlock visually consistent with cards
- Sample report reads as “document artifact” in light and dark mode
- ConfidenceBar margins not doubled by parents

**Must not change:** Estimator calculation, form validation, API schema, disclosure expand/collapse behavior.

---

### Patch 5 — Dark mode parity, icon system, responsive QA

**Purpose:** Close visual system across themes and breakpoints.

**Likely files:**
- `app/globals.css` — dark token gaps, input placeholder, package accents
- `components/icons/` — chevron, optional diagram markers (stroke 1.5, 16–24px)
- `components/HeaderClient.tsx`, `components/Footer.tsx`, `components/ThemeSwitch.tsx`
- `app/[locale]/faq/page.tsx` — search `.r`, sticky offset
- `app/[locale]/terms/page.tsx`, `app/[locale]/privacy/page.tsx` — prose spacing

**Acceptance criteria:**
- Side-by-side PL/EN screenshots light+dark for all 8 pages (see §F)
- No `invert()` on logos; correct primary/inverse asset per surface
- Icon stroke weight matches Sun/Moon icons
- FAQ search and nav sticky offsets correct under header
- Terms/Privacy prose uses ladder spacing

**Must not change:** Theme persistence logic; i18n routing; any Task 8 behavior.

---

## E. Visual asset doctrine

Task 7 must codify assets before production photography. Align with BRAND §5 (built not drawn), LAYOUT §8 (hero), TASK.md §7.3.

### Allowed photography

- Redacted operational evidence: utility shutoffs, boiler/plate labels, electrical panel covers (closed), lock hardware, meter readings
- Owner-provided documentary captures with EXIF stripped; desaturated or monochrome treatment
- No people as subjects; no faces; no staged scenes
- Captions state function (e.g. “Main water shutoff — reference capture”)

### Forbidden photography

- Lifestyle interiors, terraces, pools, sea views for mood
- Holiday rental marketing (made beds, welcome trays, champagne)
- Cleaning/concierge performative shots
- Stock photography of any kind
- Aerial luxury property hero shots
- Team portraits or “friendly handshake” imagery

### Allowed diagrams

- Monochrome SVG: service radius map, onboarding timeline, SLA response bands, three-level escalation staircase
- Architectural line weight consistent with logo geometry (orthogonal, no cartoon rounding)
- Labels in UI typography (Inter); no decorative fonts in diagrams
- Static PNG exports of same SVGs for email/print parity

### Forbidden diagrams

- Color-coded traffic-light SLA graphics tied to green/orange/red naming
- Comic icons, emoji, 3D isometric illustrations
- Flowcharts with more than necessary branching (wizard/SaaS onboarding)
- Interactive maps with pins, reviews, or street-view embeds in MVP
- Security camera / surveillance iconography

### Icon system direction

- Single stroke family: 1.5px stroke, round caps, 16px and 24px viewBox
- Use for: disclosure chevron, optional diagram markers, theme toggle (existing Sun/Moon)
- No filled emoji-style icons; no Font Awesome-style mixed weights
- Icons always subordinate to text—never replace headings

### Map direction

- One canonical **Service Area Map**: Torrevieja centroid, 50–70 km radius ring or band
- Monochrome navy/structural on light; inverted lines on dark optional
- No Google Maps iframe for launch (privacy + visual control)
- Same asset on Home (half column), Contact (full width in section), optional Footer thumbnail

### Sample report visual treatment

- Document frame: bordered card, mono header block (existing), table with `report-table` tokens
- Photo refs: small redacted thumbnails OR labeled capture frames with reference ID (SEN-INS-xxx)
- Watermark optional: “Redacted Example” (existing label)
- Must not resemble a consumer app screenshot or PDF SaaS viewer

---

## F. Screenshot checklist (post-implementation)

Capture after Patches 1–5. Both **PL** and **EN**. **Light + dark** unless noted.

### Global chrome
- [ ] Header — desktop (nav + logo + controls)
- [ ] Header — mobile closed + open hamburger
- [ ] Footer — full four columns
- [ ] Theme switch transition (one page sufficient)

### Home
- [ ] Gate state — no pathway selected (PL + EN)
- [ ] Unlocked — pathway selected, first screen above fold
- [ ] Levels three-card grid — desktop + mobile
- [ ] Service area with map — desktop + mobile
- [ ] Final authority CTA section — dark navy block

### Services
- [ ] Page intro
- [ ] Each package card — top header band + SLA area (all three)
- [ ] Execution-only demoted block
- [ ] Estimator — desktop sticky panel + mobile stacked
- [ ] Estimator — result visible after Calculate (no real pricing commitment in caption)
- [ ] Authority CTA footer section

### How It Works
- [ ] Intro + ConfidenceBar
- [ ] SampleInspectionReport — light + dark table parity
- [ ] Photo grid with real/redacted assets
- [ ] Timeline diagram section
- [ ] One DisclosureBlock expanded + collapsed

### FAQ
- [ ] Policy notice + search + ConfidenceBar
- [ ] One FAQ section expanded
- [ ] Search filtered empty state
- [ ] Mobile anchor nav behavior

### About
- [ ] Intro + philosophy section
- [ ] Optional boundary diagram if implemented

### Contact
- [ ] Map section (no placeholder text)
- [ ] Form default
- [ ] Form with estimator prefill query params
- [ ] Form with pathway context
- [ ] Submit error state (if easily staged)

### Terms & Privacy
- [ ] First screen + mid-document prose — light + dark

### Cross-cutting
- [ ] 375px width — Home unlocked, Services estimator, Contact form
- [ ] 768px width — Services package card two-column
- [ ] 1280px width — How It Works report table
- [ ] Dark mode — Estimator toggles + package accents
- [ ] No visible placeholder strings anywhere (grep screen for “Placeholder”, “[”, “will be added”)

---

## Audit metadata

| Item | Value |
|------|-------|
| Task | 7A — audit/spec only |
| UI code changed in 7A | None |
| Task 8 layer | Frozen — untouched |
| Prior related audits | AUDIT-6.7-GLOBAL-EMBODIMENT, AUDIT-TASK-8-FREEZE known non-blockers |
| Recommended activation | Owner approves Patch order; Codex executes Patches 1→5 |

---

End of Task 7A visual audit.

# AUDIT 6.7 — Global Embodiment Audit

**Purpose:** Diagnostic only. No refactors, no fixes, no proposals.  
**Date:** 2025-02-23  
**Governed by:** LAYOUT COMPOSITION, COPY DISCIPLINE CODEX, EN-ADAPTATION-LAYER, DECISIONS.md, TASK.md

---

## Scope + Pages Audited

**Locales:** PL, EN  
**Pages:** Home, Services, How it works, FAQ, About, Contact, Terms, Privacy  
**Evidence:** Code and class references; screenshots not captured (mark as "insufficient evidence" where visual proof would be required).

---

## A) Vertical Rhythm Audit (Global Spacing)

### Section padding sources (code)

- **Section (default):** `.section-primitive` → `padding-block: var(--space-120)` (120px) — `app/globals.css` L199–201
- **Section (major):** `.section-primitive--major` → `padding-block: var(--space-160)` (160px) — L203–205
- **Section (first):** `.section-primitive--first` → `padding-top: var(--space-40)`, `padding-bottom: var(--space-120)` — L207–210
- **Hero:** `.hero-zone` → `padding-block: var(--space-40)` — L213–218
- **Section intro:** `.section-intro` → `margin-bottom: 2.5rem` (40px) — L220–223
- **Section pause:** `.section-pause` → `margin-top: 3rem`, `padding-top: 2rem` — L225–228

### Inconsistencies observed

1. **Services page package blocks** (`app/[locale]/services/page.tsx` L58, L120, L185): `py-8 px-6 md:px-8` — not from layout scale (20/40/120/160). **Category:** A (vertical rhythm). **Route:** /[locale]/services.
2. **How-it-works page:** Repeated `mb-6` on H2→body, body→list, list→next block (e.g. L41, L46, L52, L58, L64, L71, L74). Uniform 24px creates flat rhythm; doctrine prefers graduated scale. **Category:** A. **Route:** /[locale]/how-it-works.
3. **Terms/Privacy prose blocks** (`app/[locale]/terms/page.tsx` L31, `app/[locale]/privacy/page.tsx` L31): `className="mb-8"` on each section div — 32px not on scale (20/40/120/160). **Category:** A. **Route:** /[locale]/terms, /[locale]/privacy.
4. **Home packages section** (page.tsx L156–197): Package cards use `space-y-3`; gaps between sections use default flow. Mix of `space-y-3`, `pt-2`, `mb-*` without a single scale. **Category:** A. **Route:** /[locale] (Home).
5. **Contact confirmation block** (`app/[locale]/contact/page.tsx` L95): `p-6 mb-6` — internal padding and margin mix; `mb-6` (24px) is scale-adjacent but not from canonical scale. **Category:** A. **Route:** /[locale]/contact.
6. **FAQ policy notice** (faq/page.tsx L127–142): Custom `p-8` (187), `mb-2`, `mt-2`, `ml-4` — ad-hoc spacing. **Category:** A. **Route:** /[locale]/faq.
7. **About philosophy section** (about/page.tsx L35–46): `mb-6` on intro, `space-y-4` on list, `mb-6` on ul — consistent use of 24px but not from 20/40/120/160. **Category:** A. **Route:** /[locale]/about.
8. **Home Key Parameters** (ConfidenceBar): Root has `mb-6`; section provides 120px. Combined bottom space = 24px + 120px. **Observed:** No inconsistency if 120px is the only inter-section cadence; **Category:** A (low). **Route:** /[locale].
9. **not-found** (not-found.tsx L17–38): `mb-8`, `space-y-4`, `mb-6`, `mt-8` — multiple non-scale values. **Category:** A. **Route:** /[locale]/* (404).
10. **Footer** (Footer.tsx L15): `container py-16` — 64px vertical; not from scale (40/120/160). **Category:** A. **Route:** All pages.

**Top 10 spacing (impact order):** 1, 2, 3, 4, 6, 5, 7, 8, 10, 9.

---

## B) Heading Hierarchy Audit (Type System Execution)

### H1 per page

- **Home:** One H1 (wordmark) — `page.tsx` L26.
- **Services:** One H1 (intro) — `services/page.tsx` (section 1).
- **How it works:** One H1 (intro) — `how-it-works/page.tsx` L22.
- **FAQ:** One H1 (pageTitle) — `faq/page.tsx` L126.
- **About:** One H1 (pageTitle) — `about/page.tsx` L24.
- **Contact:** One H1 per view (confirmation title L94, intro headline L153) — two templates, each with single H1.
- **Terms:** One H1 (pageTitle) — `terms/page.tsx` L23.
- **Privacy:** One H1 (pageTitle) — `privacy/page.tsx` L23.
- **not-found:** One H1 — `not-found.tsx` L17.

**Observed:** One H1 per page/view. No violation.

### H2 style inventory

| Location | Classes / usage |
|----------|------------------|
| Home (problem, solution, howItWorks, packages, differentiation, serviceArea, credibility, faqPreview) | `h2 className="text-center"` or plain `<h2>` |
| Home final CTA | `h2 className="text-authority-on-dark"` |
| About | `<h2>` (no class) |
| Services | `<h2>` in sections |
| How it works | `<h2>` (no class) for step titles |
| FAQ | `<h2>` for policy notice (L133), notAnswered (L227) |
| Terms/Privacy | Section titles rendered as `h2 className="text-xl font-semibold text-body mb-2"` in loop |

**Outliers:**

- **Home:** Mix of `text-center` and no class on H2; size/weight not explicit (browser default).
- **Terms/Privacy:** H2 explicitly `text-xl font-semibold text-body mb-2` — different from other pages where H2 has no size/weight class.
- **FAQ policy notice:** First subheading is `<h2>` (L133) inside a notice block — hierarchy under H1 is correct but style not aligned with other H2s.

### H3 / subheading discipline

- **Home:** Multiple `<h3>` (solution, howItWorks, differentiation, credibility); one `h3 className="section-label"` (howItWorks principles).
- **How it works:** Many bare `<h3>` for step subsections (e.g. step0.geographicTitle, step1.ownerInfoTitle).
- **About:** `<h3>` with content; list items use `font-semibold` for sub-headings.
- **ConfidenceBar:** `h3 className="section-label"` for title.

**Observed:** No systematic H3 size/weight in components; `.section-label` is uppercase, small (0.75rem), serif — used in ConfidenceBar and FAQ sections label. "Too many loud headings" risk on How it works (dense H3 use). **Category:** B. **Evidence:** File references above; screenshot: insufficient evidence.

---

## C) Container Width Consistency

### Hero text column

- **Home:** `max-w-[58ch]` on clarification + area block — `page.tsx` L32.

### Key parameter block

- **ConfidenceBar:** Inside `<Section>` → `container` (max 1120px); no extra max-w on block. **Evidence:** Section.tsx + ConfidenceBar.tsx.

### Packages

- **Home:** Package cards inside Section container; no additional max-w on card text.
- **Services:** Package blocks full width within container (`mx-auto r`); text flows in grid regions.

### FAQ blocks

- **FAQ page:** Main content in Section container; search and results full width of container. No max-w on answer text. **Evidence:** faq/page.tsx.

### Footer

- **Footer:** `container py-16` — single container, no column max-width override. **Evidence:** Footer.tsx L15.

### Readable width (doctrine: max 720px / no full-width text)

- **globals.css:** `--text-max: 720px`; `.prose { max-width: 65ch; }`; `.section-intro { max-width: 75ch; }`.
- **Terms/Privacy:** Content inside `TextColumn` + `prose` — 65ch. **Evidence:** terms/page.tsx L28–29, privacy/page.tsx L28–29.
- **Home hero:** 58ch. **Evidence:** page.tsx L32.
- **Full-width text risk:** How it works / Services long paragraphs inside Section container without prose/section-intro wrapper — can extend to full container (1120px) on desktop. **Category:** C. **Route:** /[locale]/how-it-works, /[locale]/services. **Observed inconsistency:** Possible full-width text where doctrine says max readable 720px.

**Container divergence summary:** Hero 58ch; section-intro 75ch (CSS); prose 65ch. Services/How-it-works body text not wrapped in prose/section-intro — **divergence:** too wide on large viewports.

---

## D) Package Presentation & Color Semantics

### Implementation

- **Home** (page.tsx L156, L171, L186): Three blocks with `pl-4 border-l-4 border-package-green|orange|red space-y-3`; title `text-xl font-semibold text-authority` (authority, not package color for title text).
- **Services** (services/page.tsx L58, L120, L185): Three blocks `border-l-4 package-green|orange|red`, `bg-surface-light`, `border border-structural-muted`; titles use authority or package context.
- **Tokens** (globals.css L42–44, L330–342): `--package-green: #5a6b5a`, `--package-orange: #8b7355`, `--package-red: #7a6b5d` — desaturated; package-green/orange/red utility sets border-color and color.

### Assessment (evidence only)

- **Structural containment:** Package blocks use left border (4px) + muted, desaturated colors; names (GREEN/ORANGE/RED) denote levels, not marketing tiers.
- **Tier-marketing:** Colors are not bright SaaS tier style; no gradient or strong accent.
- **Restraint risk:** Package blocks on Services are large (py-8 px-6 md:px-8); colored left border + title could dominate viewport on small screens. **Evidence:** Code only; "dominant in viewport" requires screenshot — **insufficient evidence** for breach.
- **Conclusion:** Package color usage appears **structural** (containment + level differentiation) with desaturated palette. No change recommended in this audit.

---

## E) Narrative Tone Drift Scan (Global)

**Source:** messages/pl.json, messages/en.json (content only; no rewrite).

| # | Excerpt (≤25 words) | Location (namespace.key) | Category |
|---|----------------------|---------------------------|----------|
| 1 | "You're 2000km away when a pipe bursts" / "Jesteś 2000km stąd, gdy pęka rura" | home.problem.pain1 | Hypothetical fear scenario |
| 2 | "You don't know who to call for repairs" / "Nie wiesz, kogo wezwać do naprawy" | home.problem.pain2 | Agitation framing (uncertainty) |
| 3 | "You can't coordinate cleaners and technicians from abroad" | home.problem.pain3 (EN) | Pain framing |
| 4 | "Your property sits empty for months - is everything OK?" | home.problem.pain4 (EN) | Hypothetical worry |
| 5 | "Twoja nieruchomość stoi pusta miesiącami - czy wszystko w porządku?" | home.problem.pain4 (PL) | Same |
| 6–10 | (Scan limited to home.problem and obvious reassurance; further scan of services/howItWorks/faq/about/contact for "feel confident", "reassur", "ensure", superlatives not fully enumerated) | — | Tone drift candidates |

**Observed:** home.problem block uses hypothetical, pain-oriented scenarios ("pipe bursts", "2000km away", "is everything OK?"). COPY DISCIPLINE: avoid open-ended emotional framing and narrative storytelling. **Evidence:** messages/en.json L77–79, messages/pl.json L75–78. **No rewrite** — diagnostic only.

---

## F) CTA System Consistency

### Primary CTA

- **Home hero:** `btn-primary w-fit` — Explore Packages / Zobacz Pakiety. **Evidence:** page.tsx L41.
- **Home packages:** `btn-primary` — View packages. **Evidence:** page.tsx L202.
- **Home final CTA:** `btn-primary !bg-surface-light !text-authority ...` (authority section). **Evidence:** page.tsx L337.
- **Services CTA:** `btn-primary !bg-surface-light !text-authority ...`. **Evidence:** services/page.tsx L535.
- **How it works CTA:** Same pattern. **Evidence:** how-it-works/page.tsx L588.
- **About CTA:** Same pattern. **Evidence:** about/page.tsx L431.
- **FAQ:** `btn-primary` (no override). **Evidence:** faq/page.tsx L237.
- **Contact:** `btn-primary` (home link L135, submit button L543). **Evidence:** contact/page.tsx.
- **not-found:** `btn-primary` for Home. **Evidence:** not-found.tsx L24.

**Observed:** Primary always authority (btn-primary or overridden for authority section). No accent used for primary CTA.

### Secondary CTA

- **Home hero:** `text-sm text-body/80 hover:text-body hover:underline mt-3` — text link. **Evidence:** page.tsx L44.
- **Home final CTA:** `btn-secondary !border-authority-on-dark !text-authority-on-dark ...`. **Evidence:** page.tsx L340.
- **About:** Two secondary (How it works, Contact) — both btn-secondary with authority-on-dark overrides. **Evidence:** about/page.tsx L434, L437.
- **Services:** One secondary (FAQ). **Evidence:** services/page.tsx L538.

### Third CTA / drift

- **not-found:** One primary (Home) + **three** secondary (Services, How it works, Contact). **Observed inconsistency:** COPY/TASK discipline implies max 1 primary + 1 secondary per block; not-found has three secondary actions. **Category:** F. **Route:** /[locale]/* (404). **Evidence:** not-found.tsx L24–34.
- **About authority block:** One primary (View packages) + two secondary (How it works, Contact). **Observed:** Two secondary in same block — possible drift vs "1 primary + 1 secondary" if interpreted strictly. **Category:** F. **Route:** /[locale]/about. **Evidence:** about/page.tsx L431–437.

### Hover / accent

- Primary/secondary use authority or overrides; no accent color on CTAs. **Evidence:** globals.css btn-primary/btn-secondary; no accent in CTA classes.

**CTA inventory summary:** Primary consistent (authority); secondary sometimes text link, sometimes btn-secondary; not-found has 3 secondary CTAs; About has 2 secondary in one block. **Inconsistencies:** not-found (3 secondary), About (2 secondary in one block).

---

## G) Dark Mode Parity Audit

**Source:** `app/globals.css` [data-theme="dark"] (L61–86).

### Contrast and background

- **Background:** `--base: #0d1117`, `--surface-light: #0d1117` — near-black; no `#203A5F` as page background. **Observed:** Compliant with doctrine (authority not global bg).
- **Body text:** `--body: #e6edf3` — light on dark. **Evidence:** Code only; WCAG AA contrast not measured — **insufficient evidence** for pass/fail.

### Typography weight

- No extra font-weight or "dramatic" override in dark theme. **Observed:** Parity intended.

### Section containment

- Surfaces and borders use CSS variables; dark theme overrides `--surface-*`, `--structural-*`. **Observed:** Section containment should remain readable; **screenshot:** insufficient evidence.

### Top 10 dark-mode parity (code + inference)

1. **Contrast:** No automated contrast check; **evidence:** insufficient.
2. **Background:** Authority not used as global bg — **clean.**
3. **Support role:** `--support: #4B79AD` in dark (DECISIONS §14.3.4) — **compliant.**
4–10. (Further items would require screenshot or tooling; marked **insufficient evidence**.)

---

## H) Identity Integrity Sweep

### "guardian" / "Guardian" strings (excluding doc and package name)

| String / location | Type | Evidence |
|-------------------|------|----------|
| `lib/email.ts` L21–22 | Variable name `guardianEmail`, `guardianPhone` | Code |
| `lib/email.ts` L31 | `from: 'Guardian Costa Blanca <noreply@guardiancostablanca.com>'` | Outgoing email UI/from |
| `lib/email.ts` L33 | `subject: \`Guardian Costa Blanca - Inquiry Received ...\`` | Outgoing email |
| `lib/email.ts` L36, L40, L88 | Body copy "Guardian Costa Blanca" | Outgoing email body |
| `lib/email.ts` L126–127 | `from: 'Guardian Costa Blanca Contact Form <noreply@guardiancostablanca.com>'`, `to` | Contact form email |
| `package.json` L2 | `"name": "guardian"` | Project name (build/registry) |
| `app/[locale]/about/page.tsx` L36 | Comment `{/* SECTION 2: PHILOSOPHY - WHY GUARDIAN EXISTS */}` | In-code comment only |
| messages (pl/en) | Key names `guardianTerminationTitle`, `guardianTerminationIntro`, `guardianTerminationItems` | i18n keys; **content** of those keys says "Sentinel" |

**Observed violations (identity surface):**

- **lib/email.ts:** User- and recipient-facing strings use "Guardian Costa Blanca" and guardian-related domain. **Category:** H. **Exact:** "Guardian Costa Blanca", "noreply@guardiancostablanca.com".
- **about/page.tsx comment:** "WHY GUARDIAN EXISTS" — developer-only; no user-facing violation.
- **i18n key names:** "guardianTermination*" — internal; content is Sentinel. **Observed:** Naming inconsistency, not user-facing identity violation.

### Descriptors and locale

- **Footer copyright:** Uses `t('siteName')` → "Sentinel" in both locales. **Evidence:** Footer.tsx L110; messages common.siteName.
- **Header:** Logo alt "Sentinel"; no Guardian in component. **Evidence:** HeaderClient.tsx.
- **Descriptors:** PL/EN descriptor copy not re-audited here; EN-ADAPTATION-LAYER binding assumed. **Evidence:** insufficient for full descriptor sweep.

### Mixed-language UI

- No mixed-language UI components observed in audited files.

**Summary:** Identity violations with exact string + location: **lib/email.ts** — "Guardian Costa Blanca", "noreply@guardiancostablanca.com" in from/subject/body. **package.json** — name "guardian". User-facing UI (header, footer, not-found, messages content) uses Sentinel; email pipeline and project name still carry Guardian.

---

## Top 10 Highest-Impact Inconsistencies (Prioritized)

1. **Identity (H):** lib/email.ts — Guardian Costa Blanca and guardian domain in outgoing email (from, subject, body). High; user/recipient facing.
2. **Vertical rhythm (A):** Services package blocks use py-8 px-6 md:px-8 (off scale). Medium; density/doctrine.
3. **CTA (F):** not-found page has 3 secondary CTAs (max 1 primary + 1 secondary per block). Medium; COPY/TASK discipline.
4. **Vertical rhythm (A):** How-it-works uniform mb-6 everywhere; no graduated scale. Medium.
5. **Container (C):** How-it-works / Services long body text not in prose/section-intro — risk of full-width text > 720px. Medium.
6. **Vertical rhythm (A):** Terms/Privacy section divs use mb-8 (off scale). Lower.
7. **Tone (E):** home.problem pain1–pain4 — hypothetical fear / agitation framing. Medium (copy doctrine).
8. **Heading (B):** H2 styles inconsistent (text-center vs none; Terms/Privacy text-xl font-semibold vs default elsewhere). Lower.
9. **Vertical rhythm (A):** Footer py-16 (64px) not on scale. Lower.
10. **Identity (H):** package.json "name": "guardian" — build/identity consistency. Low.

---

## Cleanest Sections (Already Match Doctrine)

- **Hero (Home):** Entity-first (SENTINEL → descriptor → clarification → area); single primary + single secondary CTA; 58ch clarification; hero-zone padding 40px.
- **Section component:** Single source of section padding (120/160, first 40/120); container 1120px.
- **Footer:** Authority containment; Sentinel logo and siteName; no Guardian in visible UI.
- **Header:** Sentinel logo and nav; no Guardian in visible UI.
- **Primary CTA:** Consistently authority (btn-primary); no accent on CTAs.
- **Dark theme:** Authority not page background; Support #4B79AD in dark; no invert.
- **Package colors:** Desaturated, structural left border; not SaaS-tier marketing.
- **Terms/Privacy:** Single H1; prose 65ch; section-primitive--first for first section.

---

## Do Not Fix Yet — Confirmation

This audit is **diagnostic only**. No refactors, no rewrites, no improvements were applied. Only observed inconsistencies and evidence were recorded. No proposals or subjective judgments beyond categorization.

---

## Stop Condition Check

- **Documentation conflict:** TASK.md (Task 6 active) and STATUS.md (Task 6 — Core System Embodiment & Integrity ACTIVE) agree. No conflict detected.
- **Task boundary:** No Task 7 scope (expressive visual layer) found in audited pages. No escalation.

**End of report.**

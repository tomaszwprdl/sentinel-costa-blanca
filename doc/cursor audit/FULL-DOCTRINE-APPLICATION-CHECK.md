# FULL DOCTRINE APPLICATION CHECK

**Source: Code + tokens only.**  
**Reference: BRAND.md, LAYOUT COMPOSITION.md, DECISIONS.md, implementation (post Wave 2C).**

---

## 1️⃣ Palette Saturation

### Extracted from `app/globals.css`

| Token | Value | Role in code |
|-------|--------|--------------|
| `--authority` | `#1a2332` | Headings, header/footer, btn-primary, section-label |
| `--accent` | `#a89878` | ConfidenceBar top border, notice-panel left border, focus ring |
| `--accent-hover` | `#948566` | Defined; not referenced in CSS (accent not on buttons) |
| `--surface-light` | `#f2ede8` | Primary section background |
| `--surface-light-alt` | `#ebe6e0` | Alternating sections |
| `--surface-card` | `#f7f4ef` | ConfidenceBar, notice-panel, cards |
| `--structural` | `#9c958d` | Borders, secondary hover |
| `--structural-light` | `#c9c4bc` | Borders |
| `--structural-muted` | `#ddd8d0` | Borders |
| `--body` | `#3d3d3d` | Body text |
| `--muted` | `#6b6560` | Muted text |
| `--accent-secondary` | `#7a7d5a` | Optional muted olive; defined in @theme |
| `--package-green` | `#5a6b5a` | Package semantic |
| `--package-orange` | `#8b7355` | Package semantic |
| `--package-red` | `#7a6b5d` | Package semantic |

**Warm tokens:** Comment says "warm mineral off-white"; values `#f2ede8`, `#ebe6e0`, `#f7f4ef` are warm off-whites. No separate "warm" variable.

**Gradient tokens:** None in globals.css.

**Legacy aliases (explicit in :root):**
- `--plaster` → `var(--surface-light)`
- `--plaster-alt` → `var(--surface-light-alt)`
- `--plaster-card` → `var(--surface-card)`
- `--anchor` → `var(--authority)`
- `--background` → `var(--surface-light)`
- `--foreground` → `var(--authority)`
- `--muted-bg` → `var(--surface-light-alt)`
- `--text-heading` → `var(--authority)`
- `--text-body` → `var(--body)`
- `--border` → `var(--structural-light)`
- `--border-light` → `var(--structural-muted)`

**Hardcoded value (drift):** `.btn-primary:hover` uses `#252f42` (darker than `--authority`); not a CSS variable. Minor saturation/consistency drift.

**BRAND.md:** §9 Color Psychology states "Primary palette must communicate structured authority, calm control, architectural depth, professional seriousness" and "Accent must remain restrained. Never dominant." BRAND does not specify hex values; it sets principles. Implementation defines the palette; accent is used only for lines/separators/focus, which aligns with "restrained."

**Contact page exception:** `contact/page.tsx` uses Tailwind semantic colors for success/error states:
- `bg-green-50 border-l-4 border-green-400` (confirmation)
- `bg-red-50 border-l-4 border-red-400` (validation error)

These are **not** from the doctrine palette. They introduce non-doctrine greens/reds and are saturation/doctrine drift.

### Confirmation

| Question | Answer |
|----------|--------|
| Are all palette tokens aligned with the final locked palette? | **Mostly.** Authority, accent, surfaces, structural, body, muted, package colors are aligned. Contact uses `green-50`/`green-400` and `red-50`/`red-400` outside the palette. |
| Leftover legacy tokens? | **Yes.** plaster, plaster-alt, plaster-card, anchor, background, foreground, muted-bg, text-heading, text-body, border, border-light are legacy aliases. They map to current roles; code uses both (e.g. `text-body`, `bg-surface-card`). So legacy tokens are **used** but are debt (two names for same role). |
| Accent more saturated than doctrine? | **No.** Accent `#a89878` is muted. Accent not used for backgrounds or buttons. |
| Unused token debt? | **Yes.** Legacy aliases; `--accent-hover` defined but never used in CSS; `--accent-secondary` in @theme but no usage found in components. |
| Unintended saturation creep? | **Yes.** Contact page green/red for success/error; btn-primary hover hardcoded `#252f42`. |

---

## 2️⃣ Section Spacing Doctrine vs Implementation

### LAYOUT COMPOSITION.md §7

- **Base unit:** 10px  
- **Section:** 120px  
- **Major Section:** 160px  
- "Spacing must follow scale. No arbitrary values."

### Extracted section-level padding (page sections only)

| Page | Section padding classes | Effective (1rem=16px) |
|------|-------------------------|-------------------------|
| **Home** | `py-16 md:py-24`, `py-16 md:py-20` | 64px / 96px (md), 64px / 80px (md) |
| **Services** | `py-16 md:py-20`, `py-20` | 64px/80px, 80px |
| **Contact** | `py-16`, `py-20` | 64px, 80px |
| **About** | `py-20` | 80px |
| **FAQ** | Single container `py-20` | 80px |
| **How It Works** | `py-16 md:py-20`, `py-20` | 64px/80px, 80px |
| **Privacy** | `py-16 md:py-20` | 64px/80px |
| **Terms** | `py-20` | 80px |

**globals.css:**  
`section { padding: 5rem 0; }` → 80px.  
`@media (max-width: 768px) { section { padding: 3.5rem 0; } }` → 56px.

Inline classes on `<section>` override this (Tailwind wins). So **effective** section padding is:
- **Dominant scale:** 64px (py-16), 80px (py-20), 96px (py-24 on Home hero only).
- **No 120px.** No 160px.

**Token check:** No variable such as `--section-spacing: 120px` or `7.5rem` in globals.css. The 120px doctrine value is **not** represented as a token and **not** applied in layout.

### Confirmation

| Question | Answer |
|----------|--------|
| Is 120px spacing doctrine actually applied? | **No.** |
| Is there a token representing 120px that isn’t used? | **No.** There is no 120px token. |
| Dominant vertical spacing scale | **64px / 80px / 96px** (py-16 / py-20 / py-24). Scale is consistent internally but below doctrine. |

**Conclusion:** Spacing is authority weight per doctrine; implementation uses a different, smaller scale. Doctrine not fully enforced.

---

## 3️⃣ Authority Hierarchy Weight

### Globals (app/globals.css)

- **h1:** `clamp(2.5rem, 5.5vw, 3.75rem)`, `font-weight: 700`, `line-height: 1.15`, `letter-spacing: -0.03em`, `margin-bottom: 1rem`
- **h2:** `clamp(1.75rem, 4vw, 2.35rem)`, `font-weight: 600`, `margin-bottom: 1.25rem`
- **h3:** `clamp(1.25rem, 3vw, 1.6rem)`, `font-weight: 600`, `margin-bottom: 1rem`
- **h1–h6:** `font-family` serif, `color: var(--authority)`, `margin-bottom: 0.75em`
- **.section-label:** `0.75rem`, `font-weight: 600`, uppercase, letter-spacing 0.08em, `color: var(--authority)`

### Page-level overrides (inspection)

| Page | H1 | H2 | H3 | section-label |
|------|----|----|-----|----------------|
| **Home** | Bare `<h1>` (inherits) | `mb-10 text-center` only | `mb-3` or `mb-4` or `section-label mb-3` (principles) | Used for principles title only |
| **Services** | `text-4xl font-semibold text-authority mb-6` | `text-3xl font-semibold text-authority mb-6` | `text-xl font-semibold text-authority mb-4` (and addons `text-2xl`) | Not used |
| **Contact** | `text-4xl font-semibold ...` | `text-3xl font-semibold ...` | `text-lg font-semibold ...` | Not used |
| **About** | (needs check) | (inherits or overrides) | — | Not used |
| **FAQ** | `text-4xl font-semibold ... mb-8` | `text-lg` (policy), `text-2xl` (notAnswered) | `text-sm font-semibold ... uppercase` (sections) | Not used |
| **How It Works** | `text-4xl font-semibold ...` | `text-3xl font-semibold ...` | `text-xl font-semibold ...` | Not used |

**Drift:**

1. **H1:** Globals = clamp up to 3.75rem, weight 700. Overrides = `text-4xl` (2.25rem) and `font-semibold` (600). So **size and weight** differ from globals on Services, Contact, FAQ, How It Works. Home keeps global H1.
2. **H2:** Globals = clamp up to 2.35rem. Overrides = `text-3xl` (1.875rem) fixed. Home uses global H2 + `mb-10 text-center`. So **scale** differs: responsive (globals) vs fixed 1.875rem (others).
3. **H3:** Globals = clamp up to 1.6rem. Overrides = `text-xl` (1.25rem) or `text-2xl` (addons) or `text-lg` (Contact) or `text-sm` (FAQ sections). **Clear size/weight drift** across pages.
4. **section-label:** Same class everywhere (ConfidenceBar, Footer, Home principles). **Stable.**

### Confirmation

| Question | Answer |
|----------|--------|
| Is hierarchy identical everywhere? | **No.** H1/H2/H3 have silent variations: font-size (text-4xl vs clamp, text-3xl vs clamp, text-xl / text-2xl / text-lg / text-sm) and font-weight (semibold 600 vs global 700 for H1). |
| Font-weight drift? | **Yes.** H1 overridden to font-semibold (600) on most pages; global H1 is 700. |
| Size drift? | **Yes.** H1 2.25rem vs up to 3.75rem; H2 1.875rem vs up to 2.35rem; H3 1.25rem–1.875rem vs up to 1.6rem. |
| Margin drift? | **Yes.** H2 sometimes `mb-6`, sometimes `mb-10`; H3 `mb-2`, `mb-3`, `mb-4`. |

**Conclusion:** Architectural discipline implied by doctrine is weakened by heading drift across pages.

---

## 4️⃣ Invariant Gravity Weight (ConfidenceBar)

### ConfidenceBar component

- **Background:** `bg-surface-card` (same as notice-panel)
- **Border:** `border border-structural-light border-t-2 border-t-accent` → 1px full + 2px top accent
- **Padding:** `py-8 px-6 mb-8` → 32px vertical, 24px horizontal
- **Typography:** Title `section-label` (0.75rem, 600, uppercase); labels `section-label text-muted`; body `text-sm text-body`
- **Shape:** `rounded-lg`

### Other section blocks (for comparison)

- **notice-panel:** `bg-surface-card`, `border-left: 4px solid var(--accent)`, `padding: 1.25rem 1.5rem` (20px, 24px). No top border.
- **Services package blocks:** `py-8 px-6 md:px-8`, `border-l-4 package-green|orange|red`, `rounded-r`, `border border-structural-muted`. **4px** colored left border.

### Comparison

| Aspect | ConfidenceBar | notice-panel | Package blocks (Services) |
|--------|----------------|--------------|---------------------------|
| Background | surface-card | surface-card | surface-light |
| Accent weight | 2px top | 4px left | 4px left (package color) |
| Vertical padding | 32px | 20px | 32px |
| Border overall | 1px + 2px top | 4px left only | 1px + 4px left |

**Conclusion:** ConfidenceBar has **equal or lesser** visual weight than the package blocks (which have a strong 4px colored left edge). ConfidenceBar’s 2px accent top is **lighter** than notice-panel’s 4px left. So invariant block is **moderate**, not heavier than content blocks — it does not dominate as “structural law”; it can read as an informational card.

---

## 5️⃣ Accent Usage Density

### Count by use type

**Borders (accent line):**
- ConfidenceBar: `border-t-2 border-t-accent` (1)
- notice-panel (CSS): `border-left: 4px solid var(--accent)` — used on Home (principles), Services (footer note), About (3×), Contact (2×), FAQ, Privacy, Terms (≈10 panels)
- About: `border-l-4 border-accent` (3 inline blocks)
- DisclosureBlock focus: `focus:ring-accent` (1)

**Section labels:** `.section-label` uses `color: var(--authority)`, not accent. So **no** accent on section labels.

**Links:** No accent on links (authority/muted).

**Highlights:** No accent used for text highlight.

**Per-page accent “instances” (structural only):**
- **Home:** ConfidenceBar (top border), notice-panel (principles), package preview borders (package-green/orange/red — semantic, not accent)
- **Services:** ConfidenceBar, notice-panel (1)
- **Contact:** notice-panel (2)
- **About:** notice-panel (1), border-accent blocks (3)
- **FAQ:** notice-panel (1)
- **How It Works:** ConfidenceBar only
- **Privacy/Terms:** notice-panel (1 each)

Plus global: focus ring `outline: 2px solid var(--accent)`.

**Conclusion:** Accent is **restrained and structural**: only borders and focus. No accent on links, labels, or highlights. Not scattered; not “SaaS energy.” Slightly more accent on About (multiple border-accent blocks). Overall **doctrine-aligned** (restrained, structural).

---

## 6️⃣ Monolithic Feel Check

### Container widths

- **globals.css `.container`:** `max-width: 1280px`
- **LAYOUT:** "Max container width: 1120px"
- **Gap:** Implementation uses **1280px**, doctrine **1120px**. Container is wider than doctrine.

### In-page max-width scale (Tailwind)

- `max-w-2xl` (672px), `max-w-3xl` (768px), `max-w-4xl` (896px), `max-w-5xl` (1024px), `max-w-6xl` (1152px)
- Used inconsistently by page: Home uses 4xl, 5xl, 6xl; Services 4xl, 6xl; Contact 3xl, 4xl; FAQ 6xl; About 4xl; How It Works 4xl, 6xl.
- **LAYOUT:** "Max readable text column width: 720px". No single token (e.g. 45ch or 720px) enforced for prose; `.section-intro` is `max-width: 75ch`, `.prose` is `65ch` — close to 720px in ch but multiple scales (4xl, 5xl, 6xl) for blocks.

### Rounded corners

- **ConfidenceBar:** `rounded-lg`
- **notice-panel:** sometimes `rounded-r-lg` (right only), sometimes no rounding in class (CSS has no border-radius)
- **Package blocks (Services):** `rounded-r` (right only)
- **Home package preview:** `rounded` (all)
- **Contact:** `rounded-r-lg` on panels
- **Card/button:** `0.375rem` in CSS

So: **rounded**, **rounded-r**, **rounded-lg**, **rounded-r-lg** all appear. Not a single geometry; **inconsistent**.

### Visual fragmentation

- **Contact:** Success state uses `bg-green-50 border-green-400`; error uses `bg-red-50 border-red-400`. These are **different** from the rest of the site (doctrine surfaces/borders) and introduce fragmentation.
- **FAQ:** Policy notice with emoji (⚠️); H2 sizes differ (text-lg vs text-2xl).
- **Section padding:** Mix of py-16, py-20, py-24 and responsive variants — consistent in scale but not one token.

### Confirmation

| Question | Answer |
|----------|--------|
| Any page that introduces visual fragmentation? | **Yes.** Contact (green/red semantic blocks); FAQ (different H2 scale and policy styling). |
| Inconsistent container widths? | **Yes.** Container 1280px vs doctrine 1120px; multiple max-w (2xl–6xl) across pages. |
| Different max-w scales? | **Yes.** 2xl, 3xl, 4xl, 5xl, 6xl all used. |
| Inconsistent rounded corners? | **Yes.** rounded, rounded-r, rounded-lg, rounded-r-lg. |
| Do all containment blocks follow the same geometry system? | **No.** Same radius system and one canonical max-width for content are not enforced. |

**Conclusion:** Monolithic architecture is partially cracked: container vs doctrine, multiple max-w and radius values, and Contact/FAQ fragmentation.

---

## 7️⃣ Unused Doctrine Artifacts

### Unused components

| Component | Used? | Note |
|----------|--------|------|
| **Header.tsx** | No | Only HeaderClient is imported everywhere. Header.tsx is unused. |
| **Accordion.tsx** | No | No imports. FAQ uses DisclosureBlock. Accordion is unused. |

HeaderClient, Footer, ConfidenceBar, DisclosureBlock, SampleInspectionReport, OnSiteVisitPhotoGrid are used.

### Unused CSS tokens / classes

| Token / class | Used in TSX/HTML? | Note |
|----------------|-------------------|------|
| **.card** / **.card:hover** | No | No `className="card"`. Components use `bg-surface-card` + border directly. |
| **.table-scannable** and all sub-rules (thead th, .table-cat, .table-data, .zebra-odd, .zebra-even) | No | Comparison table removed (Wave 2B); table markup no longer exists. Full table-scannable block is dead. |
| **.flow**, **.flow-sm**, **.flow-lg** | No | No usage in codebase. |
| **.section-divider** | No | No usage. |
| **.section-transition** | No | No usage. |
| **.section-pause** | Yes | Home (principles), Privacy. |
| **.prose**, **.prose-wide** | Yes | Privacy, Terms use `prose max-w-none`. |
| **--accent-hover** | No | Defined; not referenced in CSS. |
| **--accent-secondary** | No | In @theme; no component uses it. |

### Unused locale keys (comparison table leftovers)

**services.comparison** in both pl.json and en.json still contains:

- `title`, `footerNote` — **footerNote is used** (Services intro).
- `columns` (serviceElement, green, orange, red)
- `categories` (inspections, accessCoordination, emergencyDecisions, sla)
- `rows` (visitsPerMonth, doorWindowInspection, … many row keys)
- `values` (visual, basic, asAgreed, limited, …)

Only **comparison.footerNote** is used. The rest (title, columns, categories, rows, values) are **unused** — leftover from the removed comparison table.

### Confirmation

| Category | Unused items |
|----------|----------------|
| Components | Header.tsx, Accordion.tsx |
| CSS | .card, .card:hover, .table-scannable (full block), .flow, .flow-sm, .flow-lg, .section-divider, .section-transition; --accent-hover, --accent-secondary (no use) |
| Locale (services) | comparison.title, comparison.columns.*, comparison.categories.*, comparison.rows.*, comparison.values.* (all except comparison.footerNote) |

**Conclusion:** Unused doctrine (and post-doctrine) artifacts exist: two components, multiple CSS classes and two CSS variables, and a large set of comparison table locale keys.

---

## Summary: What We Are Actually Testing

**Not “is it wrong?” but: Is the system fully saturated with the doctrine, or is it doctrine + implementation compromise?**

### Findings

| Dimension | Status | Short answer |
|-----------|--------|--------------|
| **1. Palette** | Compromise | Palette roles aligned; legacy aliases and unused tokens; Contact green/red and btn hover hardcode introduce drift. |
| **2. Section spacing** | Not enforced | 120px doctrine not applied; no 120px token; dominant scale 64/80/96px. |
| **3. Hierarchy** | Drift | H1/H2/H3 size and weight vary by page; section-label stable. |
| **4. Invariant gravity** | Moderate | ConfidenceBar equal or lighter than package/notice blocks; not dominant. |
| **5. Accent density** | Aligned | Restrained, structural; no excess. |
| **6. Monolithic feel** | Compromise | Container 1280 vs 1120px; mixed max-w and radius; Contact/FAQ fragmentation. |
| **7. Unused artifacts** | Entropy | Two unused components; unused CSS (card, table-scannable, flow, section-divider/transition, accent-hover, accent-secondary); unused comparison locale keys. |

### Verdict

The site is **structurally compliant, psychologically aligned, category-shifted, and hierarchically stable at the content level**, but:

- **Spacing doctrine is not fully enforced** (no 120px; scale is 64/80/96px).
- **Palette has minor drift** (Contact green/red, legacy tokens, one hardcoded hover).
- **ConfidenceBar is visually moderate**, not heavy.
- **Monolithic rhythm is not fully architectural** (container width, multiple max-w and radius, Contact/FAQ exceptions).
- **Unused doctrine and post-doctrine artifacts** remain (components, CSS, locale).

So: **Doctrine + implementation compromise.** Saturation is not total; the hypothesis (spacing not enforced, palette possibly cooler/minor drift, ConfidenceBar moderate, monolithic rhythm not fully architectural) is **confirmed** by code and tokens.

---

*End of Full Doctrine Application Check. No fixes or suggestions — diagnosis only.*

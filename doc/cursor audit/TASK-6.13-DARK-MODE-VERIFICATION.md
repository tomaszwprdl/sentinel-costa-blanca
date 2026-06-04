# Task 6.13 — Dark Mode Visual Parity Verification (Screenshots)

**Type:** Evidence pass only. No code changes.  
**Governed by:** LAYOUT-COMPOSITION.md, AUDIT-6.7 (dark mode section), design tokens in `app/globals.css`

---

## Objective

Produce screenshot evidence that all 8 core pages have **visual parity** in Light and Dark: no contrast failures, no authority-navy-as-global-background, no “consumer night mode” feel. You will check contrast, borders, buttons, section containment, and institutional tone.

---

## How to toggle Dark mode

- **In app:** Use the theme control in the header (ThemeSwitch). It sets `document.documentElement.setAttribute('data-theme', 'light' | 'dark')`.
- **For automation (if you add a script later):**  
  `document.documentElement.setAttribute('data-theme', 'dark')` or `'light'`.

---

## Core pages (PL routes; EN same layout)

| # | Page        | PL route   | Note                          |
|---|-------------|------------|-------------------------------|
| 1 | Home        | `/pl`      | Hero + Key Params + sections   |
| 2 | Services    | `/pl/services` | Packages + CTA block      |
| 3 | How it works| `/pl/how-it-works` | Steps + CTA           |
| 4 | FAQ         | `/pl/faq`  | Policy notice + accordion      |
| 5 | About       | `/pl/about`| Authority block at bottom      |
| 6 | Contact     | `/pl/contact` | Form + direct contact       |
| 7 | Terms       | `/pl/terms`| Long prose, section H2s       |
| 8 | Privacy     | `/pl/privacy` | Long prose, section H2s   |

**Locale:** PL only is enough if layout is identical. Capture EN as well for any page where content length (e.g. longer EN strings) changes layout or wrapping.

---

## Screenshot matrix

### Full coverage (32 images)

- **Per page:** 2 viewports × 2 modes = 4 shots.
  - **Desktop:** (1) above-the-fold, (2) one mid-page section.
  - **Mobile:** (1) hero (or first screen), (2) first section below.
- **Total:** 4 × 8 pages = **32 images**.

### Reduced option (hero + one section)

- **Per page:** 2 viewports × 2 modes = 4 shots.
  - **Desktop:** One capture that includes hero + one representative section (e.g. first content section).
  - **Mobile:** One capture that includes hero (or top) + first section.
- **Total:** 4 × 8 pages = **32 images** (same count; each image is “hero + one section” instead of two separate frames).

Use whichever is easier; the checklist below applies to both.

---

## Viewport suggestions

| Viewport | Width × Height   | Use case                    |
|----------|------------------|-----------------------------|
| Desktop  | 1280 × 720       | Above-the-fold + mid-page  |
| Mobile   | 390 × 844        | Hero + first section        |

Alternatives: Desktop 1440×900; Mobile 375×667.

---

## File naming (optional)

Keep naming consistent so you can cross-check. Example:

- `6.13-pl-home-desktop-light.png`
- `6.13-pl-home-desktop-dark.png`
- `6.13-pl-home-mobile-light.png`
- `6.13-pl-home-mobile-dark.png`

Repeat for `services`, `how-it-works`, `faq`, `about`, `contact`, `terms`, `privacy`.  
If you add EN: e.g. `6.13-en-home-desktop-light.png`.

---

## What to check (verification checklist)

Use this when reviewing each screenshot. Tick per page × mode × viewport (or note exceptions).

### 1. Contrast discipline

- [ ] No “glowing” text or borders (e.g. pure white on near-black).
- [ ] No harsh edges (e.g. oversharp borders or shadows).
- [ ] Body and headings remain readable in both modes.

### 2. Authority navy not global background

- [ ] Authority navy (`--authority`, `--authority-bg`) appears only in **authority blocks** (e.g. final CTA sections, next-steps blocks), not as the main page background.
- [ ] Dark mode page background stays near-black (`--base` / `--surface-light`), not navy.

### 3. Border visibility on surfaces

- [ ] Cards, frames, and bordered areas (e.g. ConfidenceBar, FAQ policy notice, package cards) still show clear borders in dark mode (`--structural-*`).
- [ ] No “disappearing” panels or boxes.

### 4. Button legibility and hierarchy

- [ ] Primary vs secondary buttons remain clearly distinct in light and dark.
- [ ] Authority-block buttons (e.g. on dark navy) stay legible (e.g. `text-authority-on-dark` on authority background).
- [ ] No low-contrast or invisible buttons.

### 5. Section containment visibility

- [ ] Cards/frames/section blocks still “exist” visually (background vs surrounding page).
- [ ] Section boundaries (e.g. `section-primitive`, `.section-pause`) remain perceptible where intended.

### 6. Institutional tone (no “night mode vibe”)

- [ ] Dark mode feels institutional / product UI, not consumer-app “night theme” (e.g. no oversaturated accents, no gaming-style contrast).
- [ ] Restraint and hierarchy preserved in both modes.

---

## Where to save evidence

Suggested folder: `doc/screenshots/6.13-dark-mode/` (create if needed).  
Optional: add a one-line `README.txt` in that folder listing the 32 files and the date of the pass.

---

## After the pass

- Note any **failures** (e.g. “Terms: dark mode borders invisible on cards”) in this doc or in a short “6.13 findings” section.
- Fixes are **Task 6.14** (or follow-up); this task is evidence only.

# AGENT-BRIEFING.md — SENTINEL

Short briefing for Cursor, Codex, and Cloudie.

---

# Current project state

- **Product:** Sentinel Costa Blanca — structured local owner representation (Torrevieja + ~50–70 km).
- **Website:** Pre-live, soft-launch review ready. `noindex,nofollow` active.
- **Phase:** Launch-era — Trust Spine Pilot delivered; Services page core sections accepted and locked; broad visual iteration stopped; next work is page-by-page micro polish (homepage first).
- **Current live/main baseline:** `69b0d02` (`refine: rebuild operational layer as output record`).
- **Services boundary polish:** `a7d37f7` (`refine: render services boundary as ruled scope register`).
- **Cursor operating protocol:** `2172b0f` (`docs: add cursor operating protocol`); active doc: `doc/CURSOR.md`.
- **Homepage Trust Spine Pilot (historical):** `01b2624` (`refactor: improve mobile homepage gate`).
- **Previous proof-assets integration:** `b9800ce` (`feat: integrate proof layer visual assets`).
- **Selected-pathway contrast (historical):** `e682b5b` (`fix: strengthen selected pathway contrast section`).
- **Latest QA state:** selected pathway routes checked clean: no console errors, hydration mismatch, failed requests, HTTP 4xx/5xx, or 390px overflow in latest capture pass.
- **Launch-era governance baseline SHA:** `6a0d0f7` (reset + alignment + root entry points).
- **Optional cognitive audit tool added:** `96fef3e` (`COGNITIVE-PAGE-AUDIT.md`).

**Visual composition rebuild is merged. The site uses one canonical Sentinel atmosphere — not a toggleable app skin.**

Some older docs may still mention historical SHAs such as `b46a214`, `b3fd918`, or `97997eb`; repo preflight/local git state is the truth unless the Owner overrides.

Canonical mode: dark cinematic hero / authority bands · warm paper body sections · dark final CTA / footer · controlled copper / sea / clay accents · **no public dark/light theme toggle**.

Future visual work should **build on canonical mode**, not recreate dual themes. It should be homepage-first / page-by-page, plan-first, and Owner-scoped rather than another global transformation pass.

**Current baseline:** Trust Spine Pilot is delivered on the homepage gate through `01b2624`. Services page polish is accepted through `69b0d02`: dark checkpoint estimator · Ruled Scope Register boundary · Operational Layer output record (Gotowość · Dostęp · Koordynacja · Decyzja) · About category-clarity split. Execution-only checkpoint remains in older dark form; Gate 2 compact/restyle is unresolved. The homepage gate stays intentional and protected; do not de-gate by default. During homepage polish, protect gate internals: `#usage-situation-gate` · `gate-scroll-cue` · `scroll-mt-28` · mobile-only cue to the pathway selector.

**Cursor agents:** follow `doc/CURSOR.md` — scoped implementation only; preflight · protected areas · validation · no push unless told.

**Proof image policy:** the current proof-layer photos are accepted as temporary synthetic shot-planning placeholders only. They may support placement, crop, atmosphere, and section fit, but must not claim actual Sentinel work, real client property, real reports, real operator identity, or final operational evidence. Replace with real photography before serious public promotion / indexed launch where possible.

---

# Protected contracts

Do not change without explicit Owner approval:

- Brand: Sentinel · PL descriptor · EN descriptor
- Logo asset geometry, colors, usage (`LOGO-*.md`)
- Not concierge · not rental management · not lifestyle/luxury positioning
- Packages: Podstawowy/Basic · Rozszerzony/Extended · Pełny/Full
- SLA meaning · emergency authority limits
- Usage pathway slugs and gate behavior
- Estimator matrix and calculation logic
- Contact form schema, API, payload
- Contact details (email, phone)
- Legal substance (terms, privacy, exclusions)
- `noindex/nofollow` until Owner removes
- PL/EN parity

Full list: `DECISIONS.md`

---

# Flexible visual areas

Website execution may evolve when Owner-scoped:

- Page palette, gradients, and surfaces (reference palette is directional, not a cage)
- Section and full-page composition, imagery, SVG/CSS visual systems
- Card/panel treatment, warmth, contrast, atmosphere, motion
- Generated assets and bold composition shifts

Logo rules apply to the **logo**, not every surrounding surface.

Direction: `VISUAL-FREEDOM-SPRINT.md`  
Layout: `LAYOUT COMPOSITION.md` (guidance, not blocker)

**Anti-repetition:** visual motifs are not wallpaper. Use jurisdiction rings, ledgers, stamps, map/radius graphics, and proof bands only where they answer a page-specific operational question.

**Service area:** Torrevieja + 50–70 km stays locked. Treat it as an operational boundary — not a repeated proof boast. Footer/contact mention + one strong local footprint module is enough unless a page has a real comprehension need.

**Page-specific narratives:** Home · Services · How It Works · Contact · FAQ · About each need their own middle-section visual argument (see `VISUAL-FREEDOM-SPRINT.md`).

---

# Agent routing

| Role | Responsibility |
|------|----------------|
| **Owner** | Final authority, approvals, launch, legal, pricing |
| **Creative Director** | Visual direction and scoped visual briefs |
| **Cursor** | Scoped implementation in repo — protocol: `doc/CURSOR.md` |
| **Cloudie** | Deployment, DNS, Netlify, production risk |
| **Codex** | Deeper refactors, audits, multi-file work |

---

# Workflow rules

- Start with clean `git status`; confirm HEAD.
- **Scoped** patch only — bounded by the approved brief, not limited to small visual changes; one code editor at a time.
- Stage exact files only — never `git add .`
- No screenshots or QA artifacts in commits.
- `npm run lint` and `npm run build` before commit/push.
- User-facing copy in `messages/pl.json` and `messages/en.json`.
- Report changed files; push only when Owner approves (docs-only alignment may push when briefed).

Details: `WORKFLOW.md`

---

# What not to touch (unless briefed)

- Environment variables, Netlify config, DNS
- Estimator pricing matrix values
- Contact API behavior
- Pathway slug renames
- Package or SLA definitions
- Removed build-era docs treated as active law
- Reintroducing a public theme toggle or dual global theme system

---

# Current next phase

1. Page-by-page micro polish, starting with the homepage — Owner-scoped briefs only.
2. Preserve the diagnostic gate and pathway choice; protect gate internals during homepage polish.
3. **Gate 2 (open):** execution-only exception checkpoint — separate scoped task; compact/light-strip attempts rejected.
4. Do not touch accepted Services sections (estimator shell, boundary register, operational outputs) unless explicitly scoped.
5. Reduce repeated scope/documentation/limits language where it weakens trust; do not soften into concierge, lifestyle, rental-management, or vague reassurance.
6. Production contact email verification.
7. Final pricing confirmation.
8. Legal/entity/GDPR review.
9. Noindex decision and indexed-launch deploy smoke when approved.
10. Repo cleanup baseline and readiness audit.
11. Real-photo replacement for accepted synthetic proof-layer placeholders.

Checklist: `LAUNCH-CHECKLIST.md`

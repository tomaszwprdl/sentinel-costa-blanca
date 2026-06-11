# REPO-MAP.md — SENTINEL

Structural orientation only. Does not define behavior or binding decisions.

---

# Application

## `app/[locale]/`

Locale routes (PL / EN):

- `page.tsx` — Home (diagnostic gate)
- `services/`, `how-it-works/`, `faq/`, `about/`, `contact/`
- `terms/`, `privacy/`
- `not-found.tsx`

## `components/`

Reusable UI. Section-specific and shared layout components.

## `lib/`

Shared logic (e.g. estimator matrix, legal body parsing).

## `messages/`

- `pl.json`, `en.json` — all user-facing strings

## `public/`

Static assets including logo files.

---

# Documentation (`doc/`)

**Active (launch-era):**

| File | Role |
|------|------|
| `DECISIONS.md` | Binding contracts |
| `STATUS.md` | Current snapshot |
| `TASK.md` | Phase and scope |
| `AGENT-BRIEFING.md` | Agent quick briefing |
| `WORKFLOW.md` | Git/build discipline |
| `LAUNCH-CHECKLIST.md` | Owner launch checklist |
| `VISUAL-FREEDOM-SPRINT.md` | Website visual direction |
| `AI-GOVERNANCE.md` | Lean agent governance |
| `BRAND.md` | Brand meaning |
| `SERVICE-STRUCTURING.md` | Service architecture |
| `COPY-DISCIPLINE-CODEX.md` | Copy rules |
| `EN-ADAPTATION-LAYER.md` | English adaptation |
| `LAYOUT COMPOSITION.md` | Layout guidance |
| `QA.md` | Technical QA checklist |
| `REPO-MAP.md` | This file |
| `LOGO-DIRECTION.md.md` | Logo concept protection |
| `LOGO-GEOMETRY-SPEC.md` | Logo geometry |
| `LOGO-USAGE-HIERARCHY.md` | Logo usage rules |

**Optional audit tools:**

- `COGNITIVE-PAGE-AUDIT.md` — page-level structural transmission audit; not doctrine, not binding.

**Not in repo / not for commit:** `doc/screenshots/` — local QA captures and scripts (if present locally).

Build-era task and audit documents were removed from the active repository after documentation reset.

---

# Root agent files

- `AGENTS.md` — repository agent protocol
- `CLAUDE.md` — Cursor/Claude instructions

---

# i18n rule

- Route prefix `/pl` or `/en`
- No mixed-language UI
- No hardcoded user-facing strings outside `messages/`

---

End of repository map.

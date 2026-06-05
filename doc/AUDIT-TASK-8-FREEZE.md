# AUDIT — Task 8 Freeze QA

Purpose: Record Task 8 functional-layer freeze verification before Task 7 activation.

This document is a QA record, not a decision document.

---

## Record

| Field | Value |
|-------|-------|
| QA date | 2026-06-04 |
| Commit range checked | `aaef36b` … `23a7a36` (Task 8G–8K closure) |
| Freeze baseline | `23a7a36` — Preserve contact handoff context |
| Build | `npm run build` — PASS |
| Lint | `npm run lint` — PASS |
| Verdict | **Task 8 functional layer — FROZEN** |

---

## Owner note — matrix values

Current estimator matrix values in `lib/estimatorMatrix.ts` are accepted as **PRE-LIVE INDICATIVE VALUES for review/testing only**.

Final commercial ranges remain subject to Owner confirmation before public launch or paid traffic.

This is not a final pricing lock.

---

## 1. Homepage gate

| Check | Result | Evidence |
|-------|--------|----------|
| `/pl` and `/en` show no-selection hard gate only | PASS | `UsagePathwayLayer`: `isUnlocked = hasSelection`; children hidden until valid `?pathway=` |
| Valid pathway unlocks panel + sections (PL/EN) | PASS | `normalizePathwayParam()` accepts three canonical slugs + legacy aliases |
| No default pathway on `/pl` or `/en` | PASS | No auto-select; gate until param present |
| Mixed does not imply numeric estimate | PASS | No estimator on homepage; mixed `finalContext` → structured review; final CTA → contact not Services |

Commits: gate baseline `48258d5`, `3e5a7e7`; adaptation `aaef36b`, `409d58b`; mixed boundary `fa1cc20` (`PathwayFinalCtaLink`).

---

## 2. Services estimator

| Check | Result | Evidence |
|-------|--------|----------|
| Estimator on Services only | PASS | `app/[locale]/services/page.tsx` imports `<Estimator />`; no other page |
| Two calculable modes only | PASS | `private_use`, `active_guest` in `Estimator.tsx` / `estimatorMatrix.ts` |
| Six operational scope elements | PASS | `SCOPE_ELEMENT_KEYS` in `estimatorMatrix.ts`; UI toggles all six |
| Result only after Calculate | PASS | `result` null until `handleCalculate`; gate messages |
| Result collapses on input change | PASS | `collapseResult()` on all input handlers |
| No starting from / discount / savings / best choice | PASS | Message grep; selection guide uses scope-descriptor language (8I) |
| Contact URL uses `est_scope` | PASS | `Estimator.tsx` serializes `est_scope` with doctrine keys |

---

## 3. Contact handoff

| Check | Result | Evidence |
|-------|--------|----------|
| Pathway context display (3 slugs, PL/EN) | PASS | `pathwayKey` + `pathwayContext.*` blocks |
| Estimator context from `est_scope` | PASS | `contact/page.tsx` reads `est_scope ?? est_overlays`; labels via `scopeElements.*` |
| Submission includes context fields | PASS | `onSubmit` payload: pathwaySlug, pathwayLabel, estimator* fields |
| API accepts and normalizes context | PASS | `app/api/contact/route.ts` extended schema |
| Owner email includes usage + estimator context | PASS | `buildContextEmailBlock()` in `lib/email.ts` |
| Auto-response restrained | PASS | No package recommendation; structured review language |
| Legacy `est_overlays=cleaning,key_holding` | PASS | `parseScopeElementParam()` normalizes to doctrine keys |
| Form without query params still submits | PASS | Context fields optional; core validation unchanged |

---

## 4. Public terminology search

Target stale patterns in `messages/`:

| Pattern | Result |
|---------|--------|
| Basic/Extended/Full (Green/Orange/Red) | **None** — removed in `affa636` |
| Zielony / Pomarańczowy / Czerwony / CZERWONEGO | **None** |
| Short-term rental / wynajem krótkoterminowy (usage model) | **None** in form; FAQ question reframed in 8I |
| property management structure / struktury zarządzania | **None** in final CTA |
| GCB-INS | **None** — renamed SEN-INS in 8I |

Remaining matches (non-blockers):

| Match | Classification |
|-------|----------------|
| "property management" in exclusions / FAQ / About / Terms | **Allowed boundary language** |
| "Reducing operational noise" | **False positive** (English word "Reducing") |
| "Redacted Example" (sample report label) | **False positive** |
| "Reduced visit frequency" (FAQ) | **False positive** |
| "recommendations" (inspection report / onboarding docs) | **Internal operational context**, not package recommendation |
| JSON keys `green`, `orange`, `red` under services | **Internal-only keys** |
| `guardianTermination*` JSON keys in terms | **Internal-only keys**; body text says Sentinel |

---

## 5. Contact details

| Check | Result |
|-------|--------|
| `sentinelcostablanca@gmail.com` visible | PASS — `messages/en.json`, `messages/pl.json` `common.contact.email`; contact page |
| `+34 694 22 90 35` visible | PASS — `common.contact.phone`; contact page |
| Env defaults | PASS — `lib/email.ts`, `.env.example` `SENTINEL_EMAIL` / `SENTINEL_PHONE` |

---

## 6. Build / lint

Executed during freeze QA:

```
npm run build  — PASS
npm run lint   — PASS
```

---

## Known non-blockers (post-freeze)

These do not block Task 8 freeze or Task 7 eligibility:

- **Task 7** — visual system completion (photography, diagrams, spacing polish, package card rhythm)
- **Execution-only module visual separation** — structural copy exists; dedicated visual treatment deferred
- **One-click disclosure** — component implemented; full cross-page manual QA deferred
- **Matrix commercial tuning** — pre-live indicative values; Owner confirmation required before launch/paid traffic
- **Generic `home.contrast.*` legacy keys** — unused by UI (`PathwayCopy` uses `pathwayContent.*`)
- **Browser/E2E manual pass** — static/code QA complete; live Resend send requires configured `RESEND_API_KEY` in environment

---

## Task 8 delivery commits (reference)

| SHA | Summary |
|-----|---------|
| `aaef36b` | Adapt homepage content by usage situation |
| `409d58b` | Consolidate homepage pathway content |
| `affa636` | Clean public Task 8 terminology |
| `fa1cc20` | Align estimator scope contract |
| `23a7a36` | Preserve contact handoff context |

Prior gate/panel baseline: `48258d5`, `3e5a7e7`.

---

End of Task 8 freeze QA record.

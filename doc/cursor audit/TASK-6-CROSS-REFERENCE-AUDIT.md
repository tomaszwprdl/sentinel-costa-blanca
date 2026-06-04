# TASK 6 CROSS-REFERENCE AUDIT

**Objective:** Structural cross-reference audit to verify governance and doctrine alignment with redefined Task 6 (Core System Embodiment & Integrity) and Task 7 (Visual System Expansion).  
**Mode:** Audit only. No file modifications.  
**Reference:** DECISIONS.md referenced only; not reinterpreted.

---

## Audit criteria (applied)

**Task 6 includes:** Dark/Light mode, logo deployment, palette role saturation, navbar refinement, estimator containment module, baseline motion discipline, accessibility enforcement, structural placeholder layer, i18n parity sweep, integrity sweep.

**Task 6 explicitly excludes:** Photography direction, illustration system, icon family expansion, expressive animation, atmospheric branding, visual storytelling modules.

**Per-file checks:** Lines that restrict embodiment work; define Task 6 differently; forbid estimator/motion/logo integration; imply Task 6 “micro only”; prohibit interface-level activation of locked doctrine. Missing cross-references: motion discipline, estimator, placeholder system, accessibility.

---

## File 1: AI-GOVERNANCE.md

**Status:** ❗ **Conflict**

**Notes:**

- **Line 198 (§4 Project State Model):**  
  “Next eligible task: **Task 6 — Launch Integrity & Implementation Pass** (eligible; not yet activated).”  
  TASK.md now defines Task 6 as “**Core System Embodiment & Integrity**”. Naming mismatch creates conflicting execution authority: governance and TASK.md disagree on what Task 6 is.

- **Line 295 (§8 Identity & Visual Discipline Context):**  
  “Remaining lock layer: **Launch Integrity & Final Verification**.”  
  Wording ties “remaining lock” to old Task 6 naming. Aligning with new Task 6 scope would avoid ambiguity.

**Risk:** Execution could be judged against “Launch Integrity & Implementation Pass” instead of “Core System Embodiment & Integrity”; scope (estimator, motion, logo deployment, dark mode, placeholders, accessibility) is not contradicted elsewhere in the file but the task name must match TASK.md.

**Recommended patch type:** Structural update. Replace “Task 6 — Launch Integrity & Implementation Pass” with “Task 6 — Core System Embodiment & Integrity” in §4. Optionally align “Remaining lock layer” in §8 with new Task 6 naming (e.g. “Core System Embodiment & Final Verification” or leave “Launch Integrity & Final Verification” with a note that it corresponds to Task 6 as defined in TASK.md).

---

## File 2: PRE-TASK-6-INTEGRITY.md

**Status:** ⚠ **Clarification required**

**Notes:**

- **Lines 89–90 (§4 Execution Authority Verification, Evidence):**  
  Cites “Task 6 — **Launch Integrity & Implementation Pass**” and “Remaining lock layer: **Launch Integrity & Final Verification**.”  
  Task 6 is now “Core System Embodiment & Integrity” in TASK.md. Evidence block is outdated.

- **Lines 90, 121, 127:**  
  References to “Task 6 activation” and “Task 6 may be activated” remain valid; only the task name in the evidence needs updating.

**Risk:** Low. Document is a pre–Task 6 confirmation snapshot; outdated task name does not forbid Task 6 scope but reduces consistency.

**Recommended patch type:** Clarification. Update the evidence sentences in §4 to use “Task 6 — Core System Embodiment & Integrity” and align “Remaining lock layer” wording with AI-GOVERNANCE after that file is patched.

---

## File 3: BRAND.md

**Status:** ✔ **Aligned**

**Notes:**

- No definition of Task 6. No line restricts embodiment work, estimator, motion, logo deployment, placeholders, or accessibility.
- No “micro only” language. No prohibition on interface-level activation of locked doctrine.
- Line 143: “identity layers (logo, typography, layout, communication)” — logo included as identity layer; consistent with Task 6 logo deployment.
- Doctrine governs tone and psychological model; Task 6 embodiment (activating doctrine in the interface) is not restricted.

**Missing cross-references:** None required. BRAND does not need to name Task 6 or enumerate embodiment modules.

---

## File 4: LAYOUT COMPOSITION.md

**Status:** ✔ **Aligned**

**Notes:**

- **§12.1 Mobile (line ~264):** “Estimator expansion must not dominate viewport” — **Estimator structurally acknowledged**; compatible with Task 6 estimator containment (max 70vh, no viewport domination).
- **§14.2 Motion Policy (lines 331–345):** “Subtle fade”, “Disclosure easing”, “Transition ≤ 200ms”; “Not allowed: Parallax, Dramatic animation, Decorative motion” — **Motion discipline present** and aligned with Task 6 baseline motion (≤200ms, no marketing animation).
- **§8 Hero:** Max height 70vh; Task 6 estimator max 70vh — consistent.
- No Task 6 name; no restriction on interface-level activation. No “micro only” constraint. Layout doctrine governs space and structure; Task 6 scope (dark mode, logo, palette, navbar, estimator, motion, placeholders, i18n) is not forbidden.
- Structural placeholder layer: doctrine does not use that phrase but allows “Structural illustration”, containment blocks, and reserved space; no prohibition on non-decorative placeholders for map/proof/icon blocks.

**Missing cross-references:** None. Motion and estimator are already bound in layout doctrine.

---

## File 5: SERVICE-STRUCTURING.md

**Status:** ✔ **Aligned**

**Notes:**

- No mention of Task 6. No line forbids embodiment, estimator, motion, logo, placeholder, or accessibility.
- Package parameters (inspections, decision limit, SLA, allocation, monthly range) support estimator logic conceptually; no conflict with Task 6 estimator containment module.
- “Execution-only layer” and “Layer 2” rules do not restrict interface implementation of package selection or operational mode overlay.

**Missing cross-references:** None required. Service structuring governs what is offered; it does not need to reference estimator UI or Task 6 modules.

---

## File 6: COPY DISCIPLINE CODEX.md

**Status:** ✔ **Aligned**

**Notes:**

- No Task 6 reference. Governs copy, tone, and linguistic discipline only.
- No restriction on estimator, motion, logo deployment, placeholders, or accessibility.
- No “micro only” or prohibition on interface-level activation of doctrine.

**Missing cross-references:** None required.

---

## File 7: EN-ADAPTATION-LAYER.md

**Status:** ✔ **Aligned**

**Notes:**

- No Task 6 reference. Governs EN descriptors and terminology only.
- Task 6 “i18n & Consistency Sweep” and “PL/EN parity” are consistent with this doctrine; no conflict.
- No restriction on embodiment, estimator, motion, logo, placeholder, or accessibility.

**Missing cross-references:** None required.

---

## File 8: QA.md

**Status:** ✔ **Aligned**

**Notes:**

- File at `doc/QA.md` contains audit protocol content (audit preconditions, evidence rules, what AUDIT may/must not check). It does not define Task 6 scope; scope is in TASK.md.
- **§6.4 Integrity Risks:** “Placeholder treated as commitment” — placeholders acknowledged as an audit concern; does not forbid structural placeholder layer; aligns with Task 6 “no placeholder temporary systems remain” at completion.
- No line forbids estimator, motion, logo deployment, or dark mode. No “micro only” language.
- Accessibility: not explicitly listed in QA protocol; protocol does not restrict Task 6 from including accessibility enforcement; when Task 6 is active, accessibility can be verified as implementation evidence. No conflict.

**Missing cross-references:** Optional clarification only: QA could later reference that accessibility (WCAG AA, reduced motion, keyboard, focus) is in Task 6 scope when auditing implementation. Not required for alignment.

---

## Summary

| File                     | Status                | Action before Task 6 activation   |
|--------------------------|-----------------------|-----------------------------------|
| AI-GOVERNANCE.md         | ❗ Conflict           | Patch §4 (and optionally §8)       |
| PRE-TASK-6-INTEGRITY.md | ⚠ Clarification      | Update evidence block             |
| BRAND.md                 | ✔ Aligned            | No change                         |
| LAYOUT COMPOSITION.md    | ✔ Aligned            | No change                         |
| SERVICE-STRUCTURING.md   | ✔ Aligned            | No change                         |
| COPY DISCIPLINE CODEX.md  | ✔ Aligned            | No change                         |
| EN-ADAPTATION-LAYER.md   | ✔ Aligned            | No change                         |
| QA.md                    | ✔ Aligned            | No change                         |

**Critical constraint:** Task 6 must not be activated until AI-GOVERNANCE.md §4 is patched so the next eligible task is named “Task 6 — Core System Embodiment & Integrity”. After that, PRE-TASK-6-INTEGRITY.md evidence block can be updated for consistency.

**Scope legality:** No doctrine file forbids Task 6 scope (dark mode, logo deployment, palette saturation, navbar, estimator, motion, accessibility, structural placeholders, i18n sweep). LAYOUT COMPOSITION explicitly supports estimator and motion rules. Naming conflict in governance is the only structural blocker.

---

*End of TASK 6 Cross-Reference Audit. No files modified. No scope expansion. DECISIONS.md referenced only.*

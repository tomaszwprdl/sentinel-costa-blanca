# AUDIT.md — SENTINEL  
Audit Protocol & Verification Framework

---

## Purpose

This document defines how audits of the Sentinel system are conducted.

It does not contain audit results.  
It does not evaluate quality.  
It does not declare readiness.  
It does not make decisions.

It defines the rules of verification.

If this document becomes interpretive, it has failed.

---

# 1. Authority Scope

AUDIT verifies alignment between:

- DECISIONS.md (binding rules)
- TASK.md (execution scope)
- STATUS.md (current reality)
- AI-GOVERNANCE.md (role discipline)
- Implementation evidence (explicitly provided)

AUDIT does not override any document.  
It reports alignment or conflict.

If conflict exists:
→ It is documented.
→ Resolution belongs to Owner.

---

# 2. Who Executes Audits

- Primary audit executor: Cursor (implementation layer).
   Documentation-level audits may be conducted by designated governance agents under Owner authorization.
- Owner may request audits.
- Other agents may review, but do not execute.

Audit rules are defined only in this document.

---

# 3. Audit Preconditions (Mandatory)

Before any audit begins, the following must be explicitly confirmed:

1. Active task identified.
2. Current DECISIONS.md available.
3. Current STATUS.md available.
4. Audit scope defined (what and why).

If any element is missing:
→ Audit must not proceed.

---

# 4. Evidence Rules (Strict)

Audits may rely only on explicitly provided evidence.

Auditing agents must not assume access to:
- full repository
- local builds
- production environments
- unshared files

If evidence is required, the audit must request it explicitly.

If evidence is not provided:
→ Record: “insufficient evidence”
→ Do not infer.

Inference is prohibited.

---

# 5. Admissible Evidence Types

Audits may reference only:

## 5.1 Documentation Evidence
- DECISIONS.md
- TASK.md
- STATUS.md
- AI-GOVERNANCE.md
- Prior audit outputs

## 5.2 Declared Code Evidence
- Files explicitly shared
- Confirmed file paths
- Build logs explicitly provided
- Snippets supplied for audit

## 5.3 Observed Output
- Screenshots provided
- URLs described and confirmed
- Explicitly quoted rendered text

No other evidence is admissible.

---

# 6. What AUDIT May Check

AUDIT verifies compliance, not quality.

## 6.1 Decision Compliance
Examples:
- Name usage matches DECISIONS.
- SLA definition consistent.
- Geographic constraints presented without exception.
- Identity rules respected.

## 6.2 Task Discipline
Examples:
- No work executed from future task.
- Only one active task.
- Documentation updated after execution.

## 6.3 Governance Discipline
Examples:
- Roles respected.
- No silent overrides.
- No scope expansion.

## 6.4 Integrity Risks
Examples:
- Placeholder treated as commitment.
- Tone drifting into marketing.
- Provisional elements presented as final.

---

# 7. What AUDIT Must Not Check

AUDIT must never evaluate:

- Visual attractiveness
- Brand elegance
- Conversion effectiveness
- Business potential
- Subjective professionalism

If a dimension is not locked in DECISIONS,
it is out of scope.

---

# 8. Audit Output Format Rules

Audit outputs must:

- Be factual
- Be referenced
- Distinguish clearly between:
  - Observed
  - Confirmed
  - Undocumented
  - Conflicting
  - Insufficient evidence

Forbidden language:
- good / bad
- ready / not ready
- should
- better
- weak / strong

Allowed language:
- observed
- documented
- not documented
- conflicts with decision X
- evidence insufficient

---

# 9. Conflict Handling

If conflict is detected:

1. Name the conflict.
2. Reference documents involved.
3. Halt execution.

Resolution requires:
- Owner clarification
- Documentation update

AUDIT surfaces conflict.
It does not resolve it.

---

# 10. Audit Triggers

Audits may occur:

- After task completion
- Before entering a new task
- Before public exposure
- After decision changes
- Upon Owner request

Audits are not continuous.

## 10.1 Task Completion Audit Requirement

Before any task status changes to LOCKED:

- DECISIONS alignment must be verified.
- TASK status must reflect completion.
- STATUS snapshot must reflect current reality.

If alignment is incomplete:
→ Task must not transition to LOCKED.

Task 6 freeze was applied after AUDIT-6.15-FULL-SYSTEM-INTEGRITY.md; documentation was then synced (STATUS, TASK, AI-GOVERNANCE) to reflect Task 6 COMPLETE / LOCKED.

---

# 11. Relationship to QA.md (If Present)

QA (if maintained separately) may:

- Track recurring implementation mistakes
- Provide checklist reminders

QA may not:
- Redefine audit rules
- Introduce new decisions
- Override DECISIONS.md

If conflict exists between QA and AUDIT:
→ AUDIT protocol prevails.

---

# 12. Maintenance Rule

This document changes rarely.

It may be updated only if:
- Audit philosophy changes
- Evidence standards change
- Governance model changes

If it grows narrative or strategic,
it must be reduced.

---

# 13. Task 8 Freeze QA Record

Task 8 functional-layer freeze QA (2026-06-04):

- Record: doc/AUDIT-TASK-8-FREEZE.md
- Baseline commit: `23a7a36`
- Verdict: Task 8 COMPLETE / FROZEN; Task 7 next eligible

---

End of Audit Protocol
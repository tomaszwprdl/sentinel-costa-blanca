# HOMEPAGE-USAGE-SITUATION-PASS.md — SENTINEL

Purpose:
Define the content adaptation brief for Task 8.12 — Homepage Usage-Situation Content Adaptation Pass.

This document is an execution brief for Codex.
It does not change doctrine.
It does not authorize structural, pricing, or service-architecture changes.

---

# Preconditions (implemented baseline)

The following are complete and must not be reworked in this pass:

- Hard diagnostic gate on `/pl` and `/en` with no default pathway
- No-selection gate: identity, diagnostic question, three usage situations, gate instruction
- Selected state: compact bar + diagnostic result panel + shared homepage sections
- Hydration fallback parity for no-selection gate
- Gate presentation (48258d5) and selected panel structure (3e5a7e7)
- Canonical slugs: `private-use-only`, `regular-guest-stays`, `mixed-not-defined`
- Estimator: two calculable modes only (`private_use`, `active_guest`)
- Mixed / Not Yet Defined: structured review / classification, no invented pricing mode

---

# Pass scope

Homepage only.

Adapt copy in shared sections **after** pathway selection, keyed to the active usage situation.

Allowed touchpoints:

1. Selected diagnostic result panel (copy only; preserve panel hierarchy)
2. First system intro contextual sentence
3. Bez nas / Z nami (`contrast`) examples
4. Co wyróżnia Sentinel (`distinction`) emphasis
5. Final CTA / context line (`finalCta`)
6. Contact pathway context labels if needed

Forbidden:

- Packages, SLA, emergency authority, legal pages, service area
- Identity descriptor, navigation, header, footer
- Estimator pricing logic or matrix
- Domain / DNS / Netlify
- New services, concierge tone, rental-management language
- No-selection gate layout or gate behavior changes
- Pathway public names, descriptions, or slugs

---

# Adaptation principle

Shared homepage structure remains ~85–90% identical across pathways.

Adaptation adjusts **problem framing and operational emphasis**, not jurisdiction, packages, or SLA.

Tone: policy-first, literal, procedural. No marketing flourish.

---

# A. Private Use Only (`private-use-only`)

**Operational framing:** dormancy risk while the owner is away.

**Primary anxieties to address:**

- Property standing empty between owner visits
- Slow discovery of leaks, moisture, ventilation failure, smell
- Loss of local control when the owner is distant
- Readiness before owner arrival

**Emphasis axes (content must lean toward):**

- Regular local presence and visible checks
- Water, electricity, boiler / visible utility checks where applicable
- Ventilation, humidity, moisture, smell
- Keyholding and controlled access
- Pre-arrival cleaning and readiness
- Documented condition reporting before the owner arrives

**Avoid:**

- Guest turnover language as primary frame
- Short-term rental / concierge framing
- Event-driven chaos narratives unless clearly secondary

**Estimator note:** maps to `private_use`. Do not add a third pricing mode.

---

# B. Regular Guest Stays (`regular-guest-stays`)

**Operational framing:** turnover and event-driven risk between stays.

**Primary anxieties to address:**

- Disorder between guest, cleaner, and technician visits
- Access coordination failures
- Undetected damage or condition drift after a stay
- Owner pulled into operational noise from abroad

**Emphasis axes (content must lean toward):**

- Turnover order between stays
- Access coordination (keys, vendors, technicians)
- Cleaning between stays and readiness for next use
- Post-stay condition checks
- Damage and event documentation
- Coordination with cleaners and technicians
- Owner protected from operational chaos; decisions remain documented

**Avoid:**

- Pure vacancy / dormancy framing as primary
- Lifestyle concierge tone
- Implied full property-management or rental agency role

**Estimator note:** maps to `active_guest`. Do not add a third pricing mode.

---

# C. Mixed / Not Yet Defined (`mixed-not-defined`)

**Operational framing:** classification-first; scope must not be guessed.

**Primary anxieties to address:**

- Use pattern may change (private now, guest activity later, or uncertain)
- Wrong package or intensity chosen too early
- Over-building guest support before it is needed
- Under-structuring if guest activity begins unexpectedly

**Emphasis axes (content must lean toward):**

- Classify how the property is used before fixing scope
- Avoid wrong scope selection
- Avoid unnecessary guest-service intensity before required
- Avoid too weak a structure if guest stays begin
- Route toward structured review / qualification
- Final scope confirmed after structured review, not invented online

**Avoid:**

- Presenting a numeric estimate or implied price band on homepage
- Treating “mixed” as a third calculable operational mode
- Custom uncontrolled scope language

**Estimator note:** routes to structured review / classification only. No invented pricing mode.

---

# Section mapping (homepage)

| Section | Adaptation type |
|---------|-----------------|
| Selected diagnostic panel | Priority line + bullet emphasis per pathway (existing keys in `home.pathway.detail.*`) |
| System intro | First contextual sentence or intro clause tuned to pathway |
| Contrast (Bez nas / Z nami) | Example bullets or closing lines tuned to pathway risk type |
| Distinction | Block emphasis order or lead sentences tuned to pathway |
| Final CTA | Context line before or within CTA block tuned to pathway |
| Contact handoff | Pathway context label already keyed by slug; adjust only if parity gap found |

Do not adapt: package cards on homepage, service area block, levels/package summaries beyond existing shared copy unless explicitly scoped later by Owner.

---

# QA checks (minimum)

- [ ] PL and EN parity for all adapted strings
- [ ] No pathway shows package, SLA, or legal changes
- [ ] Mixed pathway never implies calculable estimate on homepage
- [ ] Private Use Only copy does not read as guest-rental management
- [ ] Regular Guest Stays copy does not read as pure vacancy monitoring only
- [ ] No-selection gate unchanged when visiting `/pl` or `/en` without param
- [ ] Selected URLs still reveal panel + sections with `?pathway=` canonical slugs
- [ ] Legacy slug aliases still normalize correctly
- [ ] No concierge / lifestyle / rental-agency language introduced
- [ ] Copy discipline codex respected (no promotional anchors, no “starting from”)

---

# References

- doc/TASK.md — Task 8.7 (gate doctrine), Task 8.12 (this pass)
- doc/STATUS.md — current implementation state
- doc/DECISIONS.md — §18 Usage Pathway Segmentation, §18A Operational Mode Overlay
- Commits: 48258d5 (gate presentation), 3e5a7e7 (selected panel)

---

End of brief.

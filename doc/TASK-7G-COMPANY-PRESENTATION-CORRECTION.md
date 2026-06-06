# Task 7G-A - Company Presentation Correction

Purpose:
This document records the market-informed presentation correction audit for Sentinel after Task 7 patches 1-5.

Mode:
Analysis and implementation specification only.

No UI, code, package, pricing, SLA, estimator, contact API, email, legal, or Task 8 behavior changes are authorized by this document.

---

# Research Basis

Web access was available for this audit.

Examples reviewed:

- [CasaMinder](https://www.casaminder.com/) - second-home care, vacant home checks, rental support, add-ons, service-area clarity.
- [CasaGuardian](https://casaguardian.com/) - property oversight, keyholding inside a wider care system, incident response, property report/passport framing.
- [Vacasa local property management](https://www.vacasa.com/property-management/local) - polished local-team presentation and trust signals, mostly outside Sentinel's allowed model.
- [GuestReady](https://www.guestready.com/) - audience segmentation and clear service framing, mostly rental-management language to avoid.
- [Interhome Group](https://www.interhome.group/en-us) - homeowner pathway, service office network, map and local representative pattern.
- [Pass the Keys](https://www.passthekeys.com/en/) - commercial homepage clarity, service cards, repeated CTA pattern, mostly rental-revenue language to avoid.
- [Keys & Care Algarve](https://keysandcarealgarve.com/) - second-home risk framing around vacant homes, humidity, leaks, break-ins, inspections, and contractor coordination.
- CasaNordics, My Second Home Services, Mel House Services, HomeWatch Costa Blanca, and Elite Property Care Algarve were also scanned from search snippets for category patterns.

The useful market pattern is not the rental-management promise. It is the presentation method:

- explain the company quickly
- prove local operation early
- show the operating area
- make services scannable before deep detail
- use process, report, map, and availability artifacts as proof

---

# A. Executive Verdict

The Owner's concern is correct.

The current site is clean, doctrine-aligned, and structurally trustworthy, but the presentation has overcorrected toward a policy document. It reads more like an operating manual than a serious local operating company.

This is not a doctrine problem. It is a presentation sequencing problem.

Sentinel should remain restrained, procedural, and anti-concierge. But the first scan should say:

- this is a real local company
- this company operates in a defined area
- this company has a service system
- this company produces documented proof
- this company can be contacted for a structured review

At present, those facts exist, but they are buried inside long explanatory sections.

The correction should move Sentinel from "text explains authority" to "proof carries authority, text clarifies it."

---

# B. Market Pattern Summary

## What serious comparable sites do well

The strongest comparable sites establish the business category in the first screen. They usually combine:

- one clear company statement
- one local/coverage signal
- one direct contact or quote CTA
- one proof module such as map, service cards, report sample, local team, reviews, or operating stats
- short service tiles before longer explanation

CasaGuardian is the closest conceptual neighbor. It presents keyholding, incident response, contractor coordination, and property reporting as parts of a broader property-care system rather than isolated errands.

CasaMinder shows a useful modular pattern: care plans, add-ons, service area, FAQ, and checklists. It is more commercial than Sentinel should be, but the page structure is easier to scan.

Interhome shows the value of map and local representative signals. Sentinel cannot imply a network, but it can use the same category of proof through a strict Costa Blanca operating-radius module.

GuestReady, Vacasa, and Pass the Keys demonstrate commercial clarity, but their substance is largely forbidden for Sentinel: rental income, guest experience, reviews, platform distribution, 24/7 guest support, and hospitality promises.

## What Sentinel should borrow

- first-screen company clarity
- local service-area proof
- compact service-system modules
- process strips instead of long ordered prose
- sample report and redacted operational captures near the top
- contact/availability block that feels operational, not hidden
- visual hierarchy between summary and policy depth

## What Sentinel should not borrow

- rental revenue framing
- "maximize income" language
- booking/channel/platform claims
- fake testimonials
- trust badges without real backing
- smiling owners or lifestyle interiors
- luxury villa tone
- "peace of mind"
- concierge/service-anything framing

---

# C. Colour Strategy

The palette is not wrong. The issue is that the site currently uses the palette with almost equal institutional quietness everywhere.

The correction should use existing colors with clearer roles:

## Authority navy

Use for:

- first-screen company presence
- selected decision states
- final CTA bands
- high-confidence operating proof frames

Avoid:

- making the whole site navy
- using navy as decoration without informational purpose

## Support blue

Use for:

- secondary interactive emphasis
- link/focus states
- small proof labels
- service-area or contact metadata

Avoid:

- making support blue the main brand color
- SaaS-like dashboard blue surfaces

## Structural green/grey

Use for:

- maps
- diagrams
- report modules
- SLA and escalation structure
- service-system lines

This should remain the primary "proof" color family.

## Base and base-alt

Use alternation more deliberately. The current repeated light/alt sections are correct but too even. The implementation should create stronger page rhythm through:

- shorter first-screen blocks
- proof-led bands
- denser summary rows
- longer detail only after the visual anchor

## Accent burgundy

Use extremely rarely:

- one small decision marker
- one warning/qualification micro-line
- one boundary emphasis

Do not use accent for buttons, package tiers, price emphasis, or emotional urgency.

---

# D. Page-by-Page Correction Plan

## Home

What feels too book-like:

- The first screen is dominated by identity text plus a doctrinal gate.
- The usage selector reads more like a questionnaire than a company decision surface.
- The strongest operational proof appears below the gate and below explanation.
- After selection, multiple sections carry similar visual weight.

Correction:

- Turn the first screen into a company introduction plus operating proof.
- Keep the hard gate, but present it as a decision surface inside the company frame.
- Add or elevate a proof module near the first screen: service-area map, sample report slice, redacted capture, and key operating facts.
- Reduce the first "system" explanation into compact mechanism cards.
- Let pathway adaptation tune the examples, not the whole structure.

What should remain text-heavy:

- Selected pathway explanation
- Scope boundaries
- final qualification language

## Services

What feels too book-like:

- Package cards still feel like vertical policy articles.
- The commercial decision layer is lower than it should be.
- Execution-only support is correctly demoted, but may now be so quiet that the system feels more bureaucratic than service-oriented.

Correction:

- Lead with a compact package jurisdiction axis.
- Show the three packages as a service system first, detailed articles second.
- Put the key comparison parameters in a concise visual block:
  - visit intensity
  - response/presence window
  - authority boundary
  - documentation/reporting
  - eligible operational support
- Preserve estimator position and behavior.
- Keep package articles or disclosures for policy depth.

What should remain text-heavy:

- exclusions
- emergency authority limits
- estimator procedural note

## How It Works

What feels too book-like:

- It explains the process before visually proving that the process exists.
- Several steps are long enough to feel like a manual.
- Diagrams exist but should carry more of the first scan.

Correction:

- Put an onboarding/process timeline high on the page.
- Put sample report / redacted capture proof near the top.
- Shorten visible step text and move secondary lists into disclosures.
- Use escalation and SLA diagrams as the primary explanation, with prose underneath.

What should remain text-heavy:

- onboarding requirements
- responsibility boundaries
- emergency classification detail

## FAQ

What feels too book-like:

- The FAQ is necessarily dense, but the current first impression is still policy-first.
- The user has to parse many legal/operational concerns before seeing the category map of answers.

Correction:

- Keep FAQ detailed, but make the first screen a navigable help index.
- Group questions by owner intent:
  - fit and eligibility
  - packages and scope
  - visits and reporting
  - guests and access
  - emergencies and limits
  - billing and engagement
- Keep only the first category open by default if useful.

What should remain text-heavy:

- answers themselves
- exclusions
- liability and legal boundary clarifications

## About

What feels too book-like:

- About is currently a doctrine essay.
- It explains why Sentinel exists, then why the area is limited, then how the system works, then what it is not.
- This is accurate but reads like internal governance.

Correction:

- Make the first screen a company-operating-model page:
  - who Sentinel is
  - where it operates
  - what it takes responsibility for
  - what it does not take responsibility for
- Add a compact local presence block: operating radius, documented visits, controlled access, structured reporting.
- Convert long philosophy sections into a tighter "operating principles" grid.
- Keep "what Sentinel is not" but reduce its visual dominance or move detail into disclosure.

What should remain text-heavy:

- exclusions
- responsibility model
- capacity limits

## Contact

What feels too book-like:

- The page starts with explanation, then direct contact, then active-client policy, then service area, then cannot-help, then form.
- The form starts too low for a company contact page.

Correction:

- Make the first screen a practical contact surface:
  - direct email/phone
  - response window
  - service area summary
  - primary form entry
- Keep service-area map visible near the form.
- Move "active clients" and "cannot help" to lower disclosure or secondary blocks.
- Preserve all form fields, validation, prefill, and API/email behavior.

What should remain text-heavy:

- acknowledgment
- active-client communication boundaries
- cannot-help exclusions

---

# E. Homepage Presentation Direction

The homepage should become company-first, not gate-first.

The hard diagnostic gate remains mandatory, but it should sit inside a stronger company presentation layer.

Recommended first-screen composition:

1. Left side:
   - Sentinel wordmark/name
   - locked descriptor
   - one concise sentence explaining structured local owner representation / property oversight
   - service-area signal: Torrevieja + defined Costa Blanca radius
   - primary CTA to structured review
   - secondary CTA to services or how it works

2. Right side:
   - proof module, not decoration
   - service-area map mini
   - report/capture preview
   - compact facts:
     - defined operating radius
     - documented checks
     - controlled access
     - structured response windows

3. Below or integrated:
   - usage situation selector
   - three decision cards/rows
   - no default pathway
   - change-situation behavior preserved

The gate should feel like a serious decision surface, not a web form. Each option can have:

- short title
- one-line risk frame
- one visible operational emphasis

The no-selection state must still show only the gate/company frame and no downstream homepage content.

---

# F. Services Presentation Direction

Services should feel like buying into a structured operating system, not reading package regulations.

Recommended structure:

1. First screen:
   - service headline
   - package jurisdiction axis
   - concise explanation that package level defines responsibility, not luxury
   - CTA to estimator / structured review

2. Package summary:
   - three compact package cards
   - same height where possible
   - visible parameters only
   - no "best" or "recommended"

3. Detail layer:
   - package articles or disclosures below
   - include/exclude clarity preserved

4. Estimator:
   - behavior unchanged
   - no third pricing mode
   - no pricing copy changes beyond presentation containment

5. Execution-only support:
   - visually available but subordinate
   - present as operational support, not a separate business line

---

# G. How It Works / FAQ Correction Direction

## How It Works

Make the process visually legible before asking the user to read the process.

Recommended priority:

1. onboarding timeline
2. sample report / capture proof
3. visit and documentation rhythm
4. escalation diagram
5. deeper procedural explanations
6. CTA

The page may still be detailed. The correction is that the visual system should explain the operating sequence first.

## FAQ

FAQ can remain the most text-heavy page. It should not become marketing.

Recommended correction:

- create a stronger first-screen answer index
- reduce visible preamble
- group questions by owner task
- keep policy answers in disclosures
- avoid turning FAQ into a sales page

---

# H. Safe Implementation Plan

## Patch 1 - Homepage company-first presentation

Purpose:
Make the homepage first screen feel like a serious local operating company while preserving the hard diagnostic gate.

Likely files:

- `app/[locale]/page.tsx`
- `components/UsagePathwayLayer.tsx`
- homepage-only visual/proof components if already present or minimally needed
- `messages/pl.json`
- `messages/en.json`

Acceptance criteria:

- no-selection `/pl` and `/en` still show no downstream homepage content
- valid pathway URLs still reveal selected state and adapted content
- pathway slugs unchanged
- first screen contains stronger local operating proof
- no lifestyle, concierge, rental-management, testimonial, or fake-trust language

Must not change:

- Task 8 logic
- packages
- pricing
- SLA
- estimator
- contact behavior
- header/footer

## Patch 2 - Services commercial clarity without package change

Purpose:
Make packages readable as a service system before policy depth.

Likely files:

- `app/[locale]/services/page.tsx`
- package display components if used
- `messages/pl.json`
- `messages/en.json`

Acceptance criteria:

- packages remain Basic / Extended / Full
- package model and SLA unchanged
- estimator matrix and behavior unchanged
- package comparison is easier to scan in the first 3 seconds
- execution-only support remains subordinate

Must not change:

- price ranges or estimator calculations
- emergency authority
- package legal meaning

## Patch 3 - How It Works and FAQ proof-led compression

Purpose:
Move process proof and answer navigation above long prose.

Likely files:

- `app/[locale]/how-it-works/page.tsx`
- `app/[locale]/faq/page.tsx`
- existing diagram/report/disclosure components
- `messages/pl.json`
- `messages/en.json`

Acceptance criteria:

- timeline/report/escalation proof appears before dense explanations
- FAQ remains detailed but easier to navigate
- disclosures contain policy depth, not core positioning
- PL/EN parity preserved

Must not change:

- process commitments
- SLA
- emergency authority
- legal substance

## Patch 4 - About and Contact company-surface correction

Purpose:
Make About and Contact feel like company pages, not governance appendices.

Likely files:

- `app/[locale]/about/page.tsx`
- `app/[locale]/contact/page.tsx`
- `messages/pl.json`
- `messages/en.json`

Acceptance criteria:

- About starts with company operating model and local presence
- Contact starts with usable contact/form surface
- service area and availability are visible early
- form validation, prefill, API, and email payload unchanged
- active-client and cannot-help policies preserved lower on page

Must not change:

- contact submission
- environment variables
- email template logic
- legal/service boundaries

---

# I. Hard Do Not Do List

Do not:

- add stock photography
- add smiling people imagery
- add luxury interiors
- add lifestyle travel imagery
- add testimonials unless real, approved, and legally usable
- add fake trust badges
- add revenue, booking, guest-rating, or platform language
- add "peace of mind"
- add concierge, white-glove, or lifestyle-service language
- add generic SaaS dashboard visuals
- add large gradients or atmospheric decoration
- make the site feel like Airbnb management
- make the site feel like cleaning/keyholding only
- invent a third pricing mode
- recommend packages as "best" or "most popular"
- change Task 8 pathway behavior
- change package model, SLA, emergency authority, pricing logic, contact API, or email behavior

---

# J. Final Opinion

Implementation should happen before Task 7 is frozen.

The site is already serious. The risk is that it is serious in the wrong medium: too much like a formal document and not enough like a company with visible local operation.

The correction should be Codex-led if the owner wants careful preservation of doctrine while changing layout and component hierarchy. Cursor can be useful for visual screenshot review and fast iteration after each patch, but the first implementation pass should be controlled by the repository guardrails and acceptance criteria above.

The safest direction is not to add more decoration. It is to move existing proof higher, reduce visible copy density, and make the company presence obvious within the first screen.

---

# Top 10 Recommendations

1. Reframe the homepage first screen as company presence plus diagnostic decision surface.
2. Move local operating proof near the homepage first screen: map, report slice, redacted capture, and operating facts.
3. Make the usage selector look like a decision surface, not a form.
4. Compress Services package presentation into a scannable jurisdiction axis before long package detail.
5. Keep package/legal depth in lower detail or disclosure layers.
6. Move How It Works timeline, report, and escalation proof above long explanatory prose.
7. Turn FAQ into a navigable answer index with policy depth inside disclosures.
8. Rebuild About as an operating-model/company page before philosophy depth.
9. Bring Contact information, service-area signal, and form entry higher on the page while preserving all form logic.
10. Use color role contrast more deliberately: navy for company gravity, structural tones for proof, accent only as rare boundary emphasis.

---

# Risks

- Overcorrecting into rental-management or concierge presentation.
- Using proof modules as decoration rather than operational evidence.
- Weakening doctrine by hiding exclusions too deeply.
- Changing Task 8 behavior while improving homepage presentation.
- Treating color changes as the solution when the core issue is sequencing and density.
- Making Contact more convenient while accidentally changing form payload or email context.

---

# Freeze Note

Task 7 should not be considered visually frozen until this company-presentation correction is either implemented or explicitly rejected by the Owner.

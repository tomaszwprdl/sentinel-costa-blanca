# TASK.md - Current Approved Work

This file tracks the next action only. Binding contracts live in `DECISIONS.md`.

## Current Task

One final FAQ-only polish pass, then QA and Owner review.

Do not push the FAQ commit before Owner approval.

## Scope

FAQ page only.

Allowed:

- Improve FAQ body background to Codex-style ambient flux.
- No mouse cursor effect.
- No hard diagonal lines.
- No grid scratches.
- No blobs.
- No parchment/paper-wash look.
- Final sanity on diagnostic assumption board labels/copy.

Keep:

- Hero structure and message.
- Category-left / accordion-right FAQ mechanics.
- Diagnostic assumption board structure.
- Final routing panel direction.
- JourneyNav sticky/click behavior.
- PL/EN parity.

## Protected

Do not change:

- FAQ answer meanings unless explicitly approved.
- Services page unless fixing confirmed regression.
- Estimator logic, matrix, ranges, result behavior, contact payload.
- Contact API/schema/payload.
- Routes/slugs/query behavior.
- Legal/noindex.
- Package names/count.
- SLA/emergency authority.

## Current FAQ Targets

Background:

- Codex-style ambient depth.
- Soft luminous layered radial fields.
- Slow, subtle motion.
- `prefers-reduced-motion` fallback.
- No mouse tracking.

Diagnostic labels:

- PL: `Częste założenie` / `Jak działa Sentinel`
- EN: `Common assumption` / `How Sentinel works`

## Validation Required

- `git diff --check`
- `npm.cmd run lint`
- `npm.cmd run build`
- PL desktop screenshot.
- EN desktop screenshot.
- PL 390px screenshot.
- JourneyNav sticky/click test.
- FAQ category switch test.
- Accordion open/close test.
- No horizontal overflow.
- No console errors, failed requests, or 4xx/5xx.

## After Owner Approval

Only after Owner review:

- Amend or commit as requested.
- Push only if explicitly approved.

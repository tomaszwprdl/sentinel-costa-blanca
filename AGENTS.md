# AGENTS.md - Sentinel Costa Blanca

This file defines how AI coding agents should work in this repository.

It applies to the entire repository unless a more specific `AGENTS.md` exists in a subdirectory.

## Project identity

Sentinel is not a concierge service, lifestyle service, cleaning company, keyholding-only company, or generic property-management brand.

Sentinel is a structured local owner-representation system for remote property owners on the southern Costa Blanca.

Locked public identity:

- Brand: `Sentinel`
- Website/domain label: `Sentinel Costa Blanca`
- PL descriptor: `Reprezentacja właściciela na miejscu`
- EN descriptor: `Structured Property Oversight`
- Operating area: Torrevieja + approximately 50-70 km radius

Tone and structure:

- Institutional, restrained, mature, policy-first.
- Qualification over conversion.
- Authority should be implicit, not declared.
- Do not use hype, lifestyle language, concierge framing, luxury-service language, or generic property-management language.
- Do not optimize for conversion metrics unless the Owner explicitly asks.

## Source-of-truth documents

Before any meaningful change, inspect the relevant docs in `doc/`.

Priority order:

1. `doc/DECISIONS.md`
2. `doc/STATUS.md`
3. `doc/TASK.md`
4. `doc/BRAND.md`
5. `doc/COPY DISCIPLINE CODEX.md`
6. `doc/SERVICE-STRUCTURING.md`
7. `doc/AI-GOVERNANCE.md`
8. Other supporting docs as needed

If docs conflict, do not silently choose. Report the conflict and follow `doc/DECISIONS.md` unless the Owner explicitly overrides it.

## Non-negotiable service locks

Do not change these unless explicitly instructed by the Owner:

- Package structure:
  - PL: `Podstawowy`, `Rozszerzony`, `Pełny`
  - EN: `Basic`, `Extended`, `Full`
- SLA structure:
  - 48h / 24h / same-day, according to package logic
- Minimum commitment: 3 months
- Emergency authority limits: EUR 300-EUR 500 according to package logic
- Service area: Torrevieja + approximately 50-70 km radius
- Legal terms, privacy, exclusions, package boundaries
- Estimator pricing matrix and pricing logic
- `noindex` / `nofollow` pre-live protection
- Contact placeholders unless explicitly instructed

Current pre-live contact details:

- Email: `sentinelcostablanca@gmail.com`
- Phone / WhatsApp: `+34 694 22 90 35`

Do not connect the custom domain or modify DNS / Netlify production settings unless explicitly instructed.

## Operational capability doctrine

Keyholding and cleaning are core operational capabilities inside Sentinel.

They must be visible as practical capabilities, but they must not become the brand identity.

Correct framing:

- keys, cleaning, access, readiness, technician entry, documentation, and coordination operate inside an agreed oversight scope.

Incorrect framing:

- Sentinel as a cleaning company
- Sentinel as a keyholding-only company
- Sentinel as rental management
- Sentinel as concierge

## Usage-situation pathway doctrine

The homepage uses an identity + hard diagnostic gate.

No default pathway is selected on `/pl` or `/en` without a pathway parameter.

The first viewport must:

1. Establish Sentinel identity.
2. Ask how the property is used while the owner is away.
3. Require a usage-situation choice before the rest of the homepage appears.

Do not call these public choices "profiles". Use:

- PL: `sytuacje używania`
- EN: `usage situations`

Locked public pathway names:

PL:

- `Tylko użytek prywatny`
- `Regularne pobyty gości`
- `Model mieszany / jeszcze nieustalony`

EN:

- `Private Use Only`
- `Regular Guest Stays`
- `Mixed / Not Yet Defined`

Canonical pathway slugs:

- `private-use-only`
- `regular-guest-stays`
- `mixed-not-defined`

Legacy aliases should remain supported when already present:

- `empty-between-visits` -> `private-use-only`
- `private-absence` -> `private-use-only`
- `active-guest-use` -> `regular-guest-stays`
- `mixed-undetermined` -> `mixed-not-defined`

Pathways may change:

- contextual framing
- examples
- selected diagnosis panel
- operational emphasis
- estimator defaults where existing logic supports it
- contact form context
- FAQ emphasis later

Pathways must not change:

- package model
- SLA model
- emergency authority
- legal boundaries
- service area
- core identity
- estimator pricing logic unless explicitly approved

## Language and copy protocol

Always preserve PL/EN parity.

When changing user-facing strings:

- update `messages/pl.json`
- update `messages/en.json`
- check that labels, CTAs, contact context, and route params still match

Polish must sound natural, not translated from English.

Avoid:

- sales slogans
- overpromising
- emotional reassurance without structure
- "peace of mind" style cliches
- lifestyle or hospitality vocabulary
- vague claims like "premium care", "full support", "we handle everything"

Prefer:

- scope
- procedure
- access
- documentation
- boundaries
- responsibility
- operating area
- decision limits
- structured review

## Visual and UX protocol

The site should feel restrained, institutional, and deliberate.

Do not add decoration, icons, illustrations, animations, gradients, or visual effects unless explicitly requested.

Do not redesign silently.

Preserve existing brand direction unless a task explicitly changes it.

Important acceptance test:

Within 3 seconds, the page should communicate:

1. Sentinel is structured local owner representation / property oversight.
2. It is for remote owners on the southern Costa Blanca.
3. The correct operating scope depends on how the property is used while the owner is away.

## Technical protocol

Default commands:

```bash
npm install
npm run build
```

Before finishing any code change:

Run `npm run build`.

Fix build errors caused by your change.

Do not leave failing TypeScript, lint, or runtime issues unreported.

Do not add new dependencies unless necessary. If a dependency is necessary, explain why.

Do not introduce secrets into the repository.

Do not change environment variables, Netlify configuration, DNS, or production deployment settings unless explicitly instructed.

## Git protocol

Prefer small, reviewable changes.

Do not mix unrelated work in one commit.

Use clear commit messages, for example:

- `Align usage situation naming`
- `Refine hard diagnostic gate`
- `Update contact pathway context`
- `Add Sentinel AI agent protocol`

When working through Codex or another cloud agent, prefer branch / diff / PR review workflows for implementation changes.

Direct commits to main are acceptable only for explicitly requested, low-risk documentation or configuration changes.

## Reporting protocol

Final response after a task should include:

- changed files
- what changed
- what was deliberately not changed
- build result
- commit SHA or PR link when available
- any uncertainty or follow-up required

Do not claim the build passed unless it was actually run.

For docs-only changes where build is not run, say clearly that no build was run because no executable code changed.

## Routing protocol

If a requested action belongs to another role, route it clearly.

Use these labels when useful:

- FOR Cursor - exact implementation instructions
- FOR Cloudie - technical constraints, deployment risks, DNS/Netlify questions
- FOR OWNER - decisions, forks, lock-ins, unresolved strategic choices

Do not make technical or business tradeoffs silently.

## Forbidden changes without explicit Owner approval

Do not change:

- package names or package count
- pricing model or estimator matrix
- SLA definitions
- emergency authority limits
- legal terms, privacy policy, exclusions
- service area
- brand descriptor
- public contact details
- pre-live indexing protection
- domain connection / DNS
- core pathway names or slugs
- business model boundaries

## Current strategic direction

The website is one Sentinel system with three usage situations, not three websites.

The diagnostic gate creates relevance first. The shared system creates consistency after that.

The goal is not to please every visitor. The goal is to qualify the right owner into the right operating scope without taste drift or service-model drift.

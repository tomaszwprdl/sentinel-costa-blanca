# QA.md - Launch Validation

Use Windows `npm.cmd` if PowerShell blocks `npm`.

## Required For Code Changes

```bash
npm.cmd run lint
npm.cmd run build
git diff --check
```

Fix failures caused by the change.

Docs-only changes require:

```bash
git diff --check
git status -sb
```

## Local Server Protocol

Use one server identity at a time. Do not compare dev work against production QA,
live Netlify, or old screenshots.

### Dev Iteration

Use one foreground dev server:

```bash
npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

Use:

```text
http://127.0.0.1:3000/...
```

The dev server should reflect source changes through hot reload. If changes do
not appear, suspect the wrong port, a stuck dev server, or browser/cache state
before suspecting app code. Commit does not refresh the dev server.

### Production QA

Always build before serving production QA:

```bash
npm.cmd run build
npm.cmd run qa:serve
```

`qa:serve` uses:

```text
http://127.0.0.1:3100
```

Production QA serves the current `.next` build. Source changes are not reflected
until `npm.cmd run build` runs again. Commit does not refresh anything.

### Capture

Use an explicit URL and save screenshots under `output/qa` only:

```bash
npm.cmd run qa:capture -- --url=http://127.0.0.1:3100/pl/contact --full --out=output/qa/pl-contact.png --report=output/qa/pl-contact.report.json --wait=2500
```

Do not stage `output/`.

### Stale-State Checklist

When a change looks missing, check these before changing app code:

- Wrong port or host.
- Stale `.next` production build.
- Stuck dev hot reload.
- Old screenshot opened from `output/qa`.
- Live Netlify confused with localhost.
- Lazy images or late client effects captured too early.

### Recovery Commands

Check common local ports:

```powershell
netstat -ano -p tcp | Select-String ':3000|:3001|:3100|:3200'
```

Stop a specific PID:

```powershell
Stop-Process -Id <PID> -Force
```

For broken dev state, stop the dev server first, then:

```powershell
Remove-Item -Recurse -Force .next\dev
npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

For stale production QA, stop the QA server first, then:

```powershell
Remove-Item -Recurse -Force .next
npm.cmd run build
npm.cmd run qa:serve
```

### Windows Environment Note

If PowerShell or `Start-Process` reports duplicate `PATH`/`Path`, restart the
terminal, Cursor, and Codex before debugging app code. Registry checks should
normally show only `Path`; this is usually stale process environment state, not
an app failure. Do not treat duplicate `PATH`/`Path` as an app failure.

### Clean Tooling Runner (AI Agent Shells)

Some AI agent shells (Codex, Cursor, Claude Code) inherit an environment block
with both `PATH` and `Path`, which breaks PowerShell's Env provider
("An item with the same key has already been added") and background server
launches. The repo ships a sanitizer for that case:

```bash
npm.cmd run env:doctor
```

`env:doctor` reports the pollution and exits non-zero only if a child spawned
through the clean runner would still be broken.

When the agent shell is polluted, prefer the clean variants; they run the same
commands through `scripts/tooling/run-clean-env.cjs`, which merges all
`PATH`/`Path` variants into a single de-duplicated `Path`:

```bash
npm.cmd run dev:clean
npm.cmd run build:clean
npm.cmd run qa:serve:clean
npm.cmd run qa:capture:clean -- --url=http://127.0.0.1:3100/pl/contact --full --out=output/qa/pl-contact.png
```

The clean scripts are additive. The normal manual workflow remains valid, and
the existing `dev`/`build`/`qa:serve`/`qa:capture` scripts remain valid from a
clean Owner PowerShell.

## Visual QA

Use production build screenshots, not dev-server screenshots.

1. Build:

```bash
npm.cmd run build
```

2. Serve production build:

```bash
npm.cmd run qa:serve
```

3. Capture with repo tool:

```bash
npm.cmd run qa:capture -- --url=http://127.0.0.1:3100/pl/faq --full --out=output/qa/pl-faq.png --expect=.journey-nav
```

Required checks for visual work:

- PL desktop screenshot.
- EN desktop screenshot.
- PL 390px screenshot.
- `overflowPx <= 0`.
- `consoleErrors` empty.
- `failedRequests` empty.
- `http4xx5xx` empty.
- Open the PNGs before approval.

This is the standard used for the page-by-page polish pass (lint, build, diff-check, plus desktop + 390px mobile capture with the checks above). Screenshots, `output/`, and temp artifacts stay untracked.

For Services, also verify shortcut-rail / in-page anchors still resolve to the correct sections after any mobile IA change. Because the mobile Services order differs from desktop, confirm the anchor targets exist and scroll correctly in both layouts.

## Interaction QA

For FAQ work:

- JourneyNav sticky/click behavior.
- Category switch.
- Accordion open/close.

For forms/contact work:

- Contact form renders.
- Do not change contact schema, field names, validation, payload, or `app/api/contact/route.ts` without Owner approval.

For estimator work:

- Confirm protected logic/matrix/pricing/ranges/result behavior/contact handoff payload are unchanged unless explicitly approved.

## Protected Contract QA

When touched or nearby, verify:

- Package names/count unchanged.
- SLA/emergency authority unchanged.
- Pathway slugs unchanged.
- Estimator logic unchanged.
- Estimator pricing/ranges and contact handoff payload unchanged.
- Contact schema, field names, validation, payload, and API route unchanged.
- Legal/noindex unchanged unless launch brief says otherwise.

## Coherence Regression QA

For future whole-site copy or information-architecture work, confirm:

- Package configuration is not presented as liability or whole-situation responsibility.
- Canonical terminology and meaning remain aligned in PL and EN.
- The primary route-to-Contact CTA remains `Rozpocznij kwalifikację` / `Start qualification`; accepted special-purpose actions remain action-specific.
- Qualification remains the pre-service fit/scope review; Contact submission remains an inquiry.
- The removed FAQ assumptions board is not restored. FAQ retains direct answers and unique rules; About retains the full category boundary.
- Services remains the commercial specification and keeps its accepted section architecture. How It Works remains the operational demonstration.
- Services does not gain a duplicate full-process explanation; its operational-record layer remains output proof.
- `visit report`, `operational record`, `decision request`, and `action summary` remain distinguishable in both languages.
- Collective artifact language stays ordinary (`documentation`, `documents and records`) rather than becoming a new branded abstraction.
- Contextual shorthand appears only after the full meaning has been established.

## Artifacts

Do not stage screenshots, `output/`, QA artifacts, temp scripts, `.env`, zips, or generated folders.

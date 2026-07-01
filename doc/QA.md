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
npm.cmd run qa:capture -- --url=http://127.0.0.1:3100/pl/faq --full --out=doc/screenshots/pl-faq.png --expect=.journey-nav
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

## Interaction QA

For FAQ work:

- JourneyNav sticky/click behavior.
- Category switch.
- Accordion open/close.

For forms/contact work:

- Contact form renders.
- Do not change schema/API/payload without Owner approval.

For estimator work:

- Confirm protected logic/matrix/ranges/result behavior/contact payload are unchanged unless explicitly approved.

## Protected Contract QA

When touched or nearby, verify:

- Package names/count unchanged.
- SLA/emergency authority unchanged.
- Pathway slugs unchanged.
- Estimator logic unchanged.
- Contact API/schema/payload unchanged.
- Legal/noindex unchanged unless launch brief says otherwise.

## Artifacts

Do not stage screenshots, `output/`, QA artifacts, temp scripts, `.env`, zips, or generated folders.

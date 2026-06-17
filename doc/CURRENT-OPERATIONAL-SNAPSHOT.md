# CURRENT OPERATIONAL SNAPSHOT - SENTINEL

## Current pushed baseline

* origin/main / production deploy source currently expected:
  `480de21 chore: remove unused repo leftovers`
* Netlify auto-publishes from main.
* `git push origin main` is the normal deploy path.
* `gh` being logged out does not block push.

## Local unpushed work

Local commits after `origin/main`:

* `1155d2b refactor: redesign homepage process section as operating register`
* `e8c73d4 refactor: strengthen homepage process register band`

Current unstaged work exists in:

* `app/globals.css`

This unstaged CSS work is from the interrupted pathway-specific band tint and motion-removal polish for the homepage process register.

## Current active task

Homepage only:
"Jak dziala system Sentinel" process section.

Current target:

* keep Field Manual / Operational Dossier Register direction
* tune pathway-specific band backgrounds:
  * private: cooler sea-stone / eucalyptus / teal-compatible
  * guest: warm clay/copper, mostly current direction
  * mixed: cool slate / violet-grey / blue-violet-compatible
* remove any remaining visible motion / drift / pulse / micro-animation in the process register, especially near step 01
* keep static operational notation
* no copy changes
* no layout rewrite
* no unrelated sections

## Accepted commits already pushed

* `de15108 chore: harden local visual qa tooling`
* `480de21 chore: remove unused repo leftovers`

## Hardened local QA workflow

Required for visual work:

* `npm run lint`
* `npm run build`
* `git diff --check`
* `npm run qa:serve`
* `npm run qa:capture`
* production server on `127.0.0.1:3100`
* no dev-server screenshot approvals
* real PNG review required
* require `overflowPx=0`, zero console errors, zero failed requests, zero HTTP 4xx/5xx
* screenshots stay ignored / not staged

## Agent routing

* ChatGPT + Owner: verdict, creative direction, acceptance
* Codex: serious visual/layout/CSS implementation
* Cursor: mechanical edits, exact staging, push, screenshots
* Gemini/Nano Banana: visual exploration only
* Cloudie/Claude: deployment/technical risk

## Protected contracts

Do not change:

* packages
* SLA meaning
* emergency authority
* estimator/pricing logic
* pathway slugs
* contact API/schema/payload
* legal substance
* DNS/Netlify/noindex
* logo assets/geometry/usage
* Sentinel positioning
* PL/EN parity

## Next action for Codex

Codex should inspect current local state first, then continue only the active homepage process-section CSS work.

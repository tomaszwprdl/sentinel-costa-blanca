# Sentinel Costa Blanca

Sentinel Costa Blanca is a Next.js site for structured local owner representation on the southern Costa Blanca.

The public site is bilingual (`/pl`, `/en`) and is currently pre-launch with `noindex,nofollow` active until the Owner approves indexing.

## Current State

- The page-by-page polish pass and Owner-accepted whole-site coherence audit are complete. The coherence bundle is currently uncommitted working-tree work; website implementation is frozen while Sentinel document production remains the active phase.
- Home, Pathway states, Services, How It Works, FAQ, About, and Contact pass the current website gate. Reopening requires a confirmed regression, real user evidence, a legal/commercial correction, or explicit Owner scope.
- Mobile may use a buyer-oriented IA distinct from the desktop dossier layout where usability requires it (see `doc/DECISIONS.md`).
- Services, estimator, FAQ, About, and Contact are shipped/live and protected unless the Owner explicitly reopens them.
- Contact is shipped as the Night Desk controlled intake: dark secure intake canvas, white form dossier, sticky preparation/direct-contact guide on desktop, integrated post-submit flow, and a visible but subdued lit-window hero background.
- Contact form schema, field names, validation, payload, and `app/api/contact/route.ts` are protected during visual work.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell, use `npm.cmd` if `npm` is blocked by script policy:

```bash
npm.cmd run dev
```

## Validate

Before code commits:

```bash
npm run lint
npm run build
git diff --check
```

For visual QA, use the production-build capture flow in `doc/QA.md`.

## Deploy

The project is configured for Netlify. Commits and pushes require explicit Owner approval. DNS, Netlify environment variables, indexing, and production configuration changes remain Owner/Cloudie scope.

## Documentation

Active launch-mode docs:

- `AGENTS.md` - short agent entrypoint
- `doc/STATUS.md` - current project state
- `doc/TASK.md` - next approved task
- `doc/DECISIONS.md` - locked decisions and protected contracts
- `doc/QA.md` - validation protocol
- `doc/WORKFLOW.md` - commit/push workflow

Reference docs:

- `doc/BRAND.md`
- `doc/COPY-DISCIPLINE-CODEX.md`
- `doc/EN-ADAPTATION-LAYER.md`
- `doc/PROOF-LAYER-INVENTORY.md`

Do not treat deleted or archived historical docs as active authority.

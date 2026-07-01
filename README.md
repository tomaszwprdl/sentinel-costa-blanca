# Sentinel Costa Blanca

Sentinel Costa Blanca is a Next.js site for structured local owner representation on the southern Costa Blanca.

The public site is bilingual (`/pl`, `/en`) and is currently pre-launch with `noindex,nofollow` active until the Owner approves indexing.

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

The project is configured for Netlify. Production DNS, environment variables, indexing, and deploy operations are Owner/Cloudie scope.

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

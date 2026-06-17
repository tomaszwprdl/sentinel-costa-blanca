# QA.md — SENTINEL

Practical technical QA before commit or handoff. Not doctrine enforcement.

For launch owner actions see `LAUNCH-CHECKLIST.md`.  
For git/commit rules see `WORKFLOW.md`.

---

# Pre-commit (code changes)

```bash
npm run lint
npm run build
git diff --check
```

- Only intended files changed
- No `.env`, screenshots, or artifacts staged
- PL and EN dictionaries updated together if copy changed

---

# Hardened local visual QA (production server)

One reliable path. Use this for every visual change — do **not** screenshot the dev server.

**1. Build** (TLS-safe — no env var needed; `next.config.ts` sets `experimental.turbopackUseSystemTlsCerts`):

```bash
npm run build
```

**2. Serve the production build** on a fixed, known port:

```bash
npm run qa:serve            # next start --hostname 127.0.0.1 --port 3100
```

**3. Capture real pixels** with the repo tool (PowerShell examples; one capture per command):

```bash
npm run qa:capture -- --url=http://127.0.0.1:3100/pl?pathway=private-use-only --full --out=doc/screenshots/home.png
npm run qa:capture -- --url=http://127.0.0.1:3100/pl?pathway=private-use-only --regionFrom=.page-final-cta --regionTo=footer --pad=200 --out=doc/screenshots/cta.png
npm run qa:capture -- --url=http://127.0.0.1:3100/pl?pathway=private-use-only --mobile --width=390 --height=844 --dpr=2 --full --expect=.page-final-cta,footer --out=doc/screenshots/m390.png
```

**4. Stop the server** by its identified PID (never blanket-kill node):

```powershell
$p = (Get-NetTCPConnection -State Listen -LocalPort 3100).OwningProcess; taskkill /PID $p /T /F
```

**Pass criteria** — read the JSON report each capture prints/writes and require all of:

- `overflowPx <= 0` (no horizontal overflow) — check at 390px mobile too
- `consoleErrors` empty
- `failedRequests` empty
- `http4xx5xx` empty
- the actual PNG is opened and looks correct — **never approve on computed style alone**

**Requirements / notes:**

- `qa:capture` uses the repo dev dependency `puppeteer-core` to drive an already-installed browser; it does **not** download Chrome.
- It auto-detects installed Chrome, then Edge (full paths, not `PATH`). Override with `--chrome=<path>`.
- It deliberately avoids network-idle (dev keeps an HMR socket open forever) and uses a fixed settle, so it never hangs.
- Write captures under `doc/screenshots/` (already git-ignored) or the tool's `%TEMP%` default; never commit screenshots (see `WORKFLOW.md`).

---

# Visual / UI spot checks

- [ ] 390px width — no horizontal scroll on changed pages
- [ ] PL and EN routes for changed pages
- [ ] Homepage gate still requires pathway before body sections
- [ ] Logo legible on changed headers/footers
- [ ] Focus states still visible on interactive elements
- [ ] `prefers-reduced-motion` — no essential meaning only in animation
- [ ] **No public theme toggle** in header or mobile menu (unless Owner reintroduces it)
- [ ] **Canonical visual mode** renders consistently — warm paper body, dark authority bands, dark footer; not a second global skin from OS dark preference

---

# Regression routes (smoke)

- [ ] `/pl` and `/en` home (with each pathway param)
- [ ] Services, How It Works, FAQ, About, Contact
- [ ] Terms, Privacy
- [ ] Contact form renders; prep section before form
- [ ] Language switch preserves query params where applicable
- [ ] Footer `tel:` and `mailto:` links present and correctly formed

---

# Protected-contract sanity (if touched)

- [ ] Package names unchanged unless Owner approved
- [ ] Pathway slugs unchanged
- [ ] Estimator logic untouched unless briefed
- [ ] Contact API payload/schema untouched unless briefed
- [ ] `noindex,nofollow` still present unless launch brief says otherwise

---

# Reporting

Note in handoff: lint/build result, routes checked, known deferrals.

Do not commit `doc/screenshots/` or generated capture folders.

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

# Visual / UI spot checks

- [ ] 390px width — no horizontal scroll on changed pages
- [ ] PL and EN routes for changed pages
- [ ] Homepage gate still requires pathway before body sections
- [ ] Logo legible on changed headers/footers
- [ ] Focus states still visible on interactive elements
- [ ] `prefers-reduced-motion` — no essential meaning only in animation

---

# Regression routes (smoke)

- [ ] `/pl` and `/en` home (with each pathway param)
- [ ] Services, How It Works, FAQ, About, Contact
- [ ] Terms, Privacy
- [ ] Contact form renders; prep section before form
- [ ] Language switch preserves query params where applicable

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

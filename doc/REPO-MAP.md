# REPO-MAP.md — SENTINEL

Purpose:
This document provides structural orientation only.

It describes repository topology.
It does not describe behavior, intent, or correctness.

If this document contains interpretation, it has failed.

---

# 1. Application Structure (High-Level)

## app/[locale]/

Locale-scoped routing (PL / EN).

Typical routes:

- page.tsx (Home)
- services/page.tsx
- how-it-works/page.tsx
- faq/page.tsx
- about/page.tsx
- contact/page.tsx
- terms/page.tsx
- privacy/page.tsx
- not-found.tsx

---

## components/

Reusable UI components.

Known components (non-exhaustive):

- HeaderClient.tsx
- Footer.tsx
- ConfidenceBar.tsx
- DisclosureBlock.tsx
- SampleInspectionReport.tsx (report table; table styles in app/globals.css)
- OnSiteVisitPhotoGrid.tsx

Presence of a component does not imply compliance.

---

## messages/

Internationalization dictionaries.

- en.json
- pl.json

All user-facing strings must originate here.

---

## doc/

Project documentation.

- DECISIONS.md
- TASK.md
- STATUS.md
- AI-GOVERNANCE.md
- AUDIT-*.md (per-doctrine audit files)
- BRAND.md
- LOGO-DIRECTION.md
- LOGO-GEOMETRY-SPEC.md
- REPO-MAP.md
- QA.md (if retained)

This folder defines governance authority.

---

# 2. i18n Structural Rule

- Locale is part of route: /[locale]/…
- Mixed-language UI is invalid.
- No hardcoded user-facing strings outside dictionary files.

---

# 3. Authority Boundary

This document:

- Does not validate correctness.
- Does not define decisions.
- Does not confirm build status.
- Does not describe behavior.

In case of conflict between code structure and documentation:
→ Documentation prevails.

---

End of Repository Map
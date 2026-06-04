# VERIFICATION — Task 8 MVP (Estimator)

Purpose: Record placement, build, and scope of the Task 8 estimator MVP before matrix tuning and Task 8 freeze.

---

## 1. Placement confirmation

**Required:** Estimator appears on Services page only, after the “How pricing works” (pricing model) content and before the final CTA section.

**Actual structure (Services page):**

1. Section 1: Page introduction  
2. Section 2: Oversight levels (GREEN / ORANGE / RED package blocks — each includes Pricing: / pricing text)  
3. Engagement terms  
4. Section 3: Add-on modules (with pricing notes)  
5. Section 7: What is not included  
6. Section 8: Operating parameters  
7. Section 9: How to choose your package (selection)  
8. **Estimator** (Task 8 block)  
9. Section 10: Next steps (CTA)

There is no literal “How pricing works” heading. The pricing model is explained in the package blocks (Section 2), add-ons (Section 3), and selection (Section 9). The estimator is placed **after** that full pricing/selection flow and **before** the final CTA.

**Verdict:** Placement is correct. No relocation needed.

---

## 2. Build confirmation

- `npm run build` completes successfully.
- No TypeScript or lint errors in touched files.
- Contact page uses `useSearchParams()` inside a `<Suspense>` boundary (Next.js requirement).

---

## 3. Touched files

| File | Role |
|------|------|
| `lib/estimatorMatrix.ts` | New. Matrix data + `addRanges` + `computeEstimate`. TEMP values. |
| `components/Estimator.tsx` | New. Estimator UI (inputs, Calculate, result, CTA). |
| `app/[locale]/services/page.tsx` | Insert estimator block after selection, before CTA. |
| `app/[locale]/contact/page.tsx` | Read estimator query params; show “Estimator context” block; Suspense wrapper. |
| `messages/en.json` | `services.estimator`, `contact.estimatorContext`. |
| `messages/pl.json` | `services.estimator`, `contact.estimatorContext`. |

---

## 4. Matrix values — TEMP

All ranges in `lib/estimatorMatrix.ts` are **placeholder (TEMP)** and must be replaced in the tuning phase:

- Base matrix (Package × Mode)  
- Size adjustments (S / M / L)  
- Bedrooms adjustments (B1–B4P)  
- Overlay adjustments (cleaning, linen, guest_check, key_holding)

File header comment: `// TEMP MATRIX VALUES — to be tuned by Owner.`

Tuning order (per spec): lock base 3×2 → size → bedrooms → overlays → monotonicity/sanity check.

---

## 5. Screenshot checklist

Before closing Task 8 (or for QA record), capture:

- [ ] **Services page — estimator before Calculate:** All inputs visible (package, mode, size, bedrooms, overlays); heading and Calculate button; no result block.  
- [ ] **Services page — estimator after Calculate:** Result block visible with Structural Summary, Estimated monthly range (€X–€Y / month), disclaimer, “Proceed to structured review” CTA.  
- [ ] **Contact page with estimator context:** URL includes estimator params (e.g. from CTA); read-only “Estimator context” block at top of form showing package, mode, size, bedrooms, overlays, range; form unchanged; no auto-submit.

---

## 6. Mode naming and URL hygiene (sanity checks)

- **Mode labels:** EN “Private Use Mode”, PL “Tryb Użytkowania Prywatnego” used in estimator radios, summary output, and contact context block. No “Residential Mode” in app/messages/components.  
- **Overlays:** Serialized in stable order (cleaning, linen, guest_check, key_holding) for deterministic query params.  
- **Range param:** Parsed as first two finite numbers only; safe display (€min–€max or fallback).  
- **Locale:** Contact CTA uses `/${locale}/contact?…`; no locale leakage.

---

*Document created as part of Task 8 MVP verification. Matrix tuning and freeze protocol (QA entry, STATUS update, Task 7 next eligible) to follow.*

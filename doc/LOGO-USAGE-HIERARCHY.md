 LOGO USAGE HIERARCHY  
Sentinel — Identity Application Protocol  

**Status:** LOCKED  
**Scope:** Digital + Print  
**Related:** BRAND.md, DECISIONS.md §14, LOGO-GEOMETRY-SPEC.md  

---

## 1. Core Principle

The Sentinel logo is not decorative.  
It is a jurisdictional mark.

It does not explain.  
It does not sell.  
It does not negotiate.

The system is built on one fixed geometry and four controlled variants.  
No additional versions are permitted without formal approval.

---

## 2. Production Asset Structure

All production assets are stored in:


/public/images/


### 2.1 Primary Lockup (Digital Default)

- `/public/images/sentinel-logo-primary.svg`
- `/public/images/sentinel-logo-primarytransparent.png`

Navy (#203A5F) on light background.  
This is the default digital version.

SVG is mandatory where supported.  
PNG is fallback only.

---

### 2.2 Inverse Lockup (Dark Surfaces)

- `/public/images/sentinel-logo-inverse.svg`

Light version for navy or dark system backgrounds.

The SVG must not contain its own background shape.  
Background color is controlled by layout.

---

### 2.3 Primary Mark (Symbol Only)

- `/public/images/sentinel-mark-primary.svg`
- `/public/images/sentinel-mark-primarytransparent.png`

Used for:
- Favicon
- Social avatar
- Micro-branding
- Watermark
- System iconography

---

### 2.4 Inverse Mark

- `/public/images/sentinel-mark-inverse.svg`

Used only on dark backgrounds.

---

## 3. Hierarchy of Use

### 3.1 Website Header

- **Light surfaces:** Primary Lockup (SVG).
- **Authority bar / dark surfaces:** Inverse Lockup (for contrast on navy/dark bar).

Not permitted:
- CSS `invert()` on logo
- Communication variant with claim
- Monochrome black version
- PNG if SVG is supported

Implementation note: Logo size increased and given breathing room in header (intent: clear hierarchy; avoid compression).

---

### 3.2 Website Footer

Primary Lockup (scaled down)  
or Inverse Lockup on dark footer backgrounds.

---

### 3.3 Favicon

Primary Mark only.

Permitted sizes:
- 32x32
- 16x16

No text.  
No background fill inside the asset.

---

### 3.4 Contracts, Agreements, PDF

Primary Lockup.

Permitted:
Monochrome black version for technical print situations only.

Monochrome is not permitted in digital environments.

---

### 3.5 Printed Materials (Flyers, Leaflets)

Communication variant allowed:


SENTINEL
Representative of the owner on site
We manage the property in your absence.


This is not part of the core logo.  
It is a communication layer for print contexts.

---

## 4. Color Rules

Permitted colors:

- #203A5F (Authority Navy)
- Inverse (light version)

Not permitted:

- Color changes
- Gradients
- Shadows
- Outlines
- 3D effects
- Stylized reinterpretations

The logo does not adapt its color to page sections.  
It preserves identity integrity.

---

## 5. Minimum Size

### Lockup

Minimum digital width:  
140px

### Mark

Minimum digital width:  
24px

If legibility drops below acceptable clarity, scaling must stop.

---

## 6. Clear Space

Minimum clear space around the logo equals the width of the central vertical axis of the symbol.

No text, buttons, or graphical elements may enter this protected zone.

---

## 7. Prohibited Modifications

The logo must not be:

- Stretched
- Distorted
- Cropped
- Rotated
- Used as uncontrolled background pattern
- Combined with alternate typography
- Embedded with claim as permanent structure

The claim is not part of the core mark.

---

## 8. Dark Mode Rule

On light surfaces → Primary version  
On navy or dark surfaces → Inverse version  

Do not apply CSS filters such as `invert()`.

The asset itself must be selected appropriately.

---

## 9. System Closure

The Sentinel logo system consists of:

- 2 lockups (Primary + Inverse)
- 2 marks (Primary + Inverse)
- 1 communication variant (Print only)

No additional variants may be created without governance approval.

The logo system is closed and structurally defined.

---

## 10. Website scope note

Logo restrictions apply to the **logo asset and logo usage**, not to every section around it.

Website backgrounds, cards, surfaces, accents, and imagery may evolve during launch-era visual work as long as the logo remains protected, legible, and coherent with the page.
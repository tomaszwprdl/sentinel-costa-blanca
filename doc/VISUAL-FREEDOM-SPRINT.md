# Sentinel Visual Freedom Sprint

Status: Experimental visual redesign sprint.

Owner override: all visual, brand, layout, colour, imagery, typography, page-composition, conservative design, Task 7 visual, and institutional-restraint protocols are suspended for this sprint. Functional and business contracts remain protected.

## Websites Reviewed / Inspiration Patterns

- Watchwell Austin, https://www.watchwellaustin.com/ - strong first-screen clarity for "away from home" use, plain local trust signals, photo-led home context.
- Home Watch of America, https://www.hwofa.com/ - clear report/video promise, checklist-style service proof, visual service category tiles.
- Thomas Home Watch, https://www.thomashomewatch.com/ - direct owner-away problem statement and obvious contact route, but too text-heavy and generic.
- Jupiter Luxe Home Watch, https://jupiterluxehomewatch.com/ - stronger premium photography and service grouping, useful as a warning against luxury/concierge drift.
- Rest Assured Home Watch, https://restassuredhomewatch.com/ - practical inspection scope, visit cadence, and photo-report framing.
- Property Presence, https://www.propertypresence.net/ - second-home category warmth, but too close to concierge/lifestyle positioning for Sentinel.
- Stripe, https://stripe.com/us - dense capability made understandable through rhythm, high-contrast CTA, and section-by-section visual variation.
- Airbnb visual pattern references - photography-first cards, large clickable choices, sparse metadata, warm discovery rhythm.
- Lemonade, https://www.lemonade.com/ - simple choice architecture, strong action colour, friendly trust pacing in a high-trust category.
- Haven Life, https://havenlife.com/ - insurance/protection category made approachable with warm imagery and clear next steps.

## Extracted Patterns

- The first screen needs one specific image-led situation, not abstract doctrine.
- Choices feel clickable when they are full cards with title, short description, status line, and a clear action edge.
- Premium service sites use warm light, real objects, and local context rather than generic icons.
- Trust improves when proof is concrete: reports, checklists, access control, service radius, response windows.
- Conversion rhythm works best when dense policy content is lower on the page and key decisions appear early.
- Strong sites repeat a small set of visual devices: image bands, metric strips, card grids, timeline panels, and practical CTAs.

## New Visual Direction

Sentinel should feel like warm local operations: a serious property oversight company that exists on real streets, opens real doors, checks real systems, and sends real records. The visual layer should be more attractive, more tactile, and easier to scan while preserving the underlying service boundaries.

The design direction is:

- Image-led first screen with local Costa Blanca residential context.
- Stronger dark navy / ink surfaces for authority, offset by warm stone and clay accents.
- Fewer document-like columns; more magazine/service rhythm.
- More obvious cards, panels, and choice states.
- Operational photography and report imagery used as proof, not lifestyle decoration.
- Warmer contact and form surfaces with early direct contact details.

## Colour Palette

- Ink: #10263f
- Navy: #163b5c
- Sea: #2f6f73
- Stone: #f2eee6
- Paper: #fffaf2
- Clay: #b8664a
- Copper: #d29a57
- Sage: #738b7c
- Line: #d8cdbc
- Muted: #6f7883

Accessibility goal: keep body text high-contrast on light surfaces and use warm accent colours mainly for action, selection, and small highlights.

## Typography Approach

Use the existing font stack and avoid adding dependencies. Shift away from large serif document headings toward cleaner sans-led hierarchy, tighter display rhythm, shorter line lengths in dense sections, and clearer label/title/body separation.

## Imagery Approach

Keep existing operational images:

- technical check
- report/document
- access/lock

Add a stable hero/local environment asset:

- `public/photos/sentinel-costa-blanca-entry-hero.png`

Use images as replaceable placeholders. No fake people testimonials. No luxury villa-rental energy. No invented client stories.

## Page-by-Page Plan

- Home: rebuild first screen visually around local image, warm authority surface, obvious usage-situation cards, and a more engaging selected-state panel. Keep no-selection hard gate and pathway slugs intact.
- Services: make packages easier to compare as visual service blocks, keep package count/names/SLA/estimator logic, improve estimator shell and CTA visibility.
- How It Works: turn long manual-like steps into visual process sections and stronger timeline/card rhythm while preserving content.
- FAQ: keep search and disclosure behavior, make category navigation and results lighter and easier to scan.
- About: make the company feel real and operational with warmer panels and less doctrine-like wrapping.
- Contact: move practical contact information into a more inviting early panel, improve form grouping, preserve API payload and validation.
- Terms / Privacy: only improve visual wrapping if touched; no legal substance changes.
- Header / Footer: modernize surfaces and spacing, preserve routes, locale controls, theme control, contact details, and legal links.

## Protected Functional Contracts

- Routing stays intact.
- i18n stays PL/EN.
- Contact form schema, POST endpoint, and payload shape stay intact.
- Estimator matrix and calculation logic stay intact.
- Usage-situation slugs, aliases, and no-default gate behavior stay intact.
- Package names, package count, SLA, emergency limits, pricing logic, service area, legal pages, contact details, and noindex/nofollow behavior stay intact.
- No environment, Netlify, DNS, or API behavior changes.

## Risks

- The sprint intentionally overrides the current visual doctrine; this conflicts with locked visual documents but is covered by explicit Owner override.
- More emotional visual language can drift toward concierge/lifestyle if copy is changed too aggressively, so copy changes are minimized.
- AI-style imagery must be replaced or approved before public launch if it feels too generic.
- Dark mode may need a second pass after desktop/mobile visual QA.
- Branch/commit may be blocked by repository metadata permissions in this session.

# SENTINEL-OWNER-DECISION-MEMO.md

Status: Decision memo. This file **converts the Owner's answers into structured decisions** ahead of any
contract or template drafting. It drafts **no** contracts, annexes, protocols, or final legal/customer
wording, and it changes no app code, copy, schema, routes, legal substance, pricing, or estimator logic.

Project: Sentinel Costa Blanca
Authority order (unchanged): `DECISIONS.md` → `STATUS.md` / `TASK.md` → reference docs → this memo.
If this memo conflicts with `DECISIONS.md`, `DECISIONS.md` wins and the conflict is reported.

Inputs absorbed: the Owner's latest brief (customer type, key custody, owner-unreachable doctrine,
cleaning execution, preferred vs owner-selected cleaners, report/UV/photo rules, storage, SLA, payment,
rejection/termination). Prior work: [doc/SENTINEL-DOCUMENT-NEEDS-AUDIT.md](doc/SENTINEL-DOCUMENT-NEEDS-AUDIT.md)
and the design draft `doc/SENTINEL-DOCUMENT-SYSTEM.md` (untracked). `SENTINEL-OPERATING-DOCTRINE.md` is
still external / not committed.

Legal references below identify **risk areas** from Spanish/EU sources the Owner supplied
(TRLGDCU — RDL 1/2007; GDPR — Reg. 2016/679; LOPDGDD — LO 3/2018). They are **not legal advice**; every
binding item is flagged **[NEEDS LAWYER]**.

**Status legend used throughout:** `ACCEPTED` (Owner-decided, stable enough to build internal structure on)
· `PROVISIONAL` (Owner-leaning, may change after test/review) · `[NEEDS LAWYER]` · `[NEEDS ACCOUNTANT]`
· `[NEEDS OPERATIONAL TEST]`. A decision can carry more than one review flag.

---

## 0. The core correction driving this memo

The Owner's central instruction: **"Poziom odpowiedzialności" (package responsibility level) is not the
whole legal answer.** It must not be allowed to read as "the client bought a level where Sentinel takes
unlimited responsibility." Every document in the system must keep three things **separate**:

| Layer | Question it answers | What controls it | What it must NOT do |
|---|---|---|---|
| **Package responsibility** | *What speed, intensity, and autonomous authority posture did the client buy?* | The package (Basic / Extended / Full) | Transfer risk of loss onto Sentinel |
| **Emergency authority** | *What may Sentinel do without asking first?* | The Emergency Authority instrument (Full EUR 300 / opt. 500; Basic / Extended owner approval unless separately reviewed) | Become open-ended "fix everything" power |
| **Liability** | *Who pays if something goes wrong?* | The Liability / Insurance posture + statutory floor | Be disclaimed away below the consumer-law floor |

This separation protects the customer (they cannot be told "your package was too low" when the real issue
is a liability or insurance matter) **and** protects Sentinel (a higher package buys faster response and
more authority, never a guarantee to absorb loss). This memo is structured to hold that line.

### 0a. Launch authority doctrine (Option A)

Owner launch doctrine: **Option A is accepted as the default authority model**.

- **Basic / Extended:** no autonomous paid spend by default. Owner approval is required before any paid
  action, vendor spend, or reimbursement-triggering action unless a separate reviewed authority instrument
  expressly grants authority. No Basic / Extended euro amount is implied.
- **Full:** EUR 300 standard autonomous protective-action authority per decision; optional EUR 500 only if
  expressly agreed.
- **Emergency services / community-required minimal protective action:** may be escalated and documented
  where required by law, safety, emergency services, or community administration. This is **not** a
  pre-authorised Sentinel spend mandate for Basic / Extended.

Final emergency-authority wording, consumer-contract wording, reimbursement wording, and liability wording
remain **[NEEDS LAWYER]**. Paid-action and reimbursement handling remains **[NEEDS ACCOUNTANT]** where it
affects invoicing, receipts, VAT, or cost recovery.

---

## 1. Decisions now accepted

Each decision is tagged with its status. "Accepted" means stable enough to design internal structure
around; it does **not** mean "ready as customer wording."

| # | Decision | Status | Note |
|---|---|---|---|
| 1.1 | **Client capacity is a contract field**: private owner / company owner / authorised representative / other. Default design target = **consumer / private person** (highest-protection case); companies allowed, not designed-for-first. | `ACCEPTED` · `[NEEDS LAWYER]` | Consumer-first design is the safe default under TRLGDCU. Company/representative variants get a lighter review later. |
| 1.2 | **Remote / distance contracting** requires written pre-contract information, a **14-day withdrawal right**, and — if service starts early — an explicit **"start now" consent + acknowledgement** that the right may be lost once fully performed. | `PROVISIONAL` · `[NEEDS LAWYER]` | Currently **absent** from the live Terms. Real consumer-law gap (TRLGDCU distance-selling). |
| 1.3 | **Key custody liability is balanced, not absolute**: Sentinel responsible after signed receipt, while in Sentinel custody, for loss from Sentinel negligence/breach of protocol; **not** responsible for pre-existing lock defects, wrong keys, changed alarm codes, third-party/owner-vendor access, community changes, or wrong/incomplete owner instructions. No "never responsible" clause. | `ACCEPTED` · `[NEEDS LAWYER]` · `[NEEDS OPERATIONAL TEST]` (custody workflow) | Over-broad disclaimers can be treated as abusive/unfair in consumer contracts. See §3. |
| 1.4 | **Owner-unreachable = protective-action doctrine**, tiered Observe / Protective / Above-authority. Package controls *timing + authority only*, never guaranteed resolution or unlimited action. Launch default = Option A: Basic / Extended require owner approval before paid action/vendor spend; Full has EUR 300 standard / EUR 500 optional if agreed. | `ACCEPTED` · `[NEEDS LAWYER]` (final wording) · `[NEEDS ACCOUNTANT]` (paid action / reimbursement) | Reconciles authority doctrine before any REC-01/REC-03 dry-run. See §4. |
| 1.5 | **Sentinel performs cleaning** (readiness / turnover) as a capability inside oversight — not as a cleaning company. This expands the document map (scope annex, checklist, before/after evidence, handoff, re-clean rule, exclusions). | `ACCEPTED` · `[NEEDS OPERATIONAL TEST]` | Must obey Copy Codex §4.4 (cleaning is a scoped capability, not the public category). See §5. |
| 1.6 | **Preferred = Sentinel cleaner** (Sentinel can document execution). **Owner-selected cleaner allowed only if** they accept Sentinel's documentation/scope standard; otherwise Sentinel documents *visible readiness after access only* and guarantees nothing about that cleaner's method/performance. | `ACCEPTED` | See §5. |
| 1.7 | **Report content** = checklist + notes + photos + status + next action; **cleaning adds before/after evidence**. **UV** allowed as an optional evidence aid only. | `ACCEPTED` | UV framing constrained in §6. |
| 1.8 | **Privacy-safe photo rule** with a hard do-not-photograph list; sensitive-but-relevant items are *reported, not photographed*. | `ACCEPTED` · `[NEEDS LAWYER]` (light) | GDPR minimisation from day one. See §7. |
| 1.9 | **Launch workflow** = iPad digital forms → PDF export → email report + selected evidence → structured **encrypted cloud** archive; paper only for signed key custody; **WhatsApp is never the official archive**. | `ACCEPTED` · `[NEEDS OPERATIONAL TEST]` | Storage/retention detail in §8. |
| 1.10 | **SLA = response/decision timing, not guaranteed resolution.** Package-tiered response (48h / 24h / same-day). **No 24/7 promise.** | `ACCEPTED` | Consistent with `DECISIONS.md`. See §9. |
| 1.11 | **Payment**: monthly upfront, **first payment before activation / key custody**, 3-month minimum, cleaning/turnover billed only if scoped, vendor/emergency spend per authority/approval, late-payment pause after notice with orderly handover. | `PROVISIONAL` · `[NEEDS ACCOUNTANT]` · `[NEEDS LAWYER]` | Invoicing identity, VAT, processor = accountant/Owner. Cancellation penalties = consumer-law risk. See §10. |
| 1.12 | **Rejection / termination triggers** adopted as an operational list (accept-before / pause / terminate). | `ACCEPTED` · `[NEEDS LAWYER]` (termination mechanics) | See §11. |
| 1.13 | **Data retention target**: active contract + **24 months** for operational reports/photos, then delete/block unless dispute / unpaid invoice / claim / legal / tax reason; apply Spanish **bloqueo de datos**. | `PROVISIONAL` · `[NEEDS LAWYER]` · `[NEEDS ACCOUNTANT]` (tax periods) | Makes the live Privacy notice's open-ended retention concrete. See §8. |

Nothing in this table is customer-facing wording. It is the decision layer that the Scope Register and,
later, the contract will be built on.

---

## 2. Package responsibility vs emergency authority vs liability

This is the spine of the whole system. State it in the doctrine and repeat it, unweakened, in the MSA and
in operator training.

**Package responsibility** — the *service level* the client bought.
- Controls: response/decision **window** (48h / 24h / same-day), **operating intensity** (visit rhythm,
  access-event allowance, presence during service windows), and the **autonomous authority posture** that
  applies. Launch default: Basic / Extended require owner approval before paid action/vendor spend; Full
  carries EUR 300 standard autonomous protective-action authority, with optional EUR 500 if agreed.
- Does **not** control: whether Sentinel is financially responsible for a loss. A higher package makes
  Sentinel *faster and more empowered*, not *more liable*.

**Emergency authority** — what Sentinel may do **without** prior approval.
- Controls: the ceiling on autonomous protective action where one exists and the *category* of action
  allowed (protective/preventive only). Launch default: no Basic / Extended euro limit is implied; Full
  uses EUR 300 standard / EUR 500 optional if agreed. A separate reviewed authority instrument may define
  a different basis later. Above the agreed authority → owner approval, except where law, safety, or
  emergency services compel minimal action. Final wording is `[NEEDS LAWYER]`.
- Does **not** control: liability. Acting within authority does not mean Sentinel guarantees the outcome;
  it means the action was permitted and documented.

**Liability** — who is financially responsible if something goes wrong.
- Controls: Sentinel answers for **its own service delivery, documentation, SLA response, and its own
  negligence/breach of custody** — bounded and defined. It does **not** answer for force majeure, third-
  party contractor performance, owner-vendor choices, pre-existing defects, insurance-type losses, or
  events outside its control. **The owner carries property insurance; Sentinel is not an insurer.**
- Floor: consumer-law sets a **minimum liability the contract may not disclaim below** (`[NEEDS LAWYER]`).
  Over-broad "we are never responsible" clauses risk being treated as abusive/unfair under TRLGDCU.

**Anti-drift rule (put in doctrine):** No document, script, or operator may answer a liability question
with "you should have bought a higher package." Package = speed + intensity + authority. Liability is a
separate contract layer with a statutory floor. If these three ever collapse into one, the customer is
misled and Sentinel is over-exposed.

---

## 3. Key custody policy recommendation

**Principle (`ACCEPTED`):** the physical person who receives the key fills and signs the record. Custody
liability is **balanced** — real where Sentinel controls the key and is negligent, bounded everywhere else.

**Balanced liability statement (design intent, not final wording — `[NEEDS LAWYER]`):**
- Sentinel *is* responsible for keys **after signed receipt, while under Sentinel custody, where loss is
  caused by Sentinel's negligence or breach of the custody protocol.**
- Sentinel is *not* responsible for: pre-existing lock/alarm defects; wrong keys supplied; alarm codes
  changed without notice; third-party or owner-selected-vendor access; community/building access changes;
  or incomplete/incorrect owner instructions.
- **No unlimited-liability promise and no blanket "never responsible" clause** — the latter is a consumer-
  law abuse risk.

**Protection stack (operational — build these as registers/forms, not contract text):**
1. **Signed key receipt** (on handover and on return).
2. **Key ID / label, never the full property address** on the physical tag.
3. **Named physical custodian** recorded per key.
4. **Storage location category**, not public specifics (security by omission).
5. **Key movement log** (every check-out / check-in).
6. **Access-failure log** (lock/alarm/access problems, with cause where known).
7. **Return signature** at offboarding.

**Open items:**
- **Insurance question** `[NEEDS LAWYER]` `[NEEDS ACCOUNTANT]`: does Sentinel need key-custody /
  professional-liability (civil liability) cover, and does its existence change the liability wording?
  This must be answered before the Access & Key Custody annex is drafted.
- **Emergency-entry pre-authorisation** `[NEEDS LAWYER]`: whether the owner pre-authorises entry, and its
  limits, is decided in §4, recorded here.

---

## 4. Owner non-response doctrine

**Doctrine name:** *Protective Action Doctrine.* When the owner is unreachable, Sentinel acts **only to
prevent escalation**, never to "solve everything." Package sets *how fast Sentinel responds* and, for Full
or a separately reviewed authority instrument, *how much autonomous paid authority exists*. Non-response
never converts into an unlimited mandate.

**Decision tree (design — `[NEEDS LAWYER]` for final wording; public FAQ alignment must not imply Basic /
Extended spend authority):**

```
Finding during any visit / alert
        │
        ▼
[1] Classify severity
        │
        ├── OBSERVABLE (stain, minor wear, dirty window, cosmetic)
        │        → document + report; no autonomous action; owner decides in normal SLA window
        │
        ├── URGENT / PROTECTIVE (active leak, open door, power/water/security risk)
        │        → attempt owner contact (per package window)
        │        → if reachable: act on instruction
        │        → if UNREACHABLE:
        │             Basic / Extended: no autonomous paid action or vendor spend by default;
        │             document, escalate, and seek owner approval unless a reviewed authority
        │             instrument says otherwise
        │             Full: protective action within EUR 300 standard / EUR 500 if agreed
        │        → log evidence + authority basis; notify owner asap
        │
        └── ABOVE AUTHORITY (major repair, expensive vendor, disputed scope)
                 → owner approval REQUIRED before acting
                 → EXCEPTION: law, life-safety, or emergency services / community admin
                   compel immediate action → act minimally, document, notify
```

**Supporting elements:**
- **Emergency services / community admin / vendor escalation:** where the risk exceeds Sentinel's
  protective remit (fire, gas, structural, flooding into other units), Sentinel escalates to the
  appropriate authority/community administration rather than exceeding its own authority. Emergency
  services / community-required minimal action may be documented, but it is not a pre-authorised Sentinel
  spend mandate for Basic / Extended. `[NEEDS LAWYER]`.
- **Evidence log:** every protective action records what was observed, what was done, the authority basis
  used, timestamps, and photos (subject to §7 photo rules).
- **Final owner notification:** a completed-action summary is delivered to the owner as soon as reachable,
  regardless of outcome.

**Reconciliation note (important):** any public or customer-facing wording that mentions "secure up to
EUR 300" must be read and later lawyer-aligned as the Full standard autonomous protective-action authority
unless a separate reviewed authority instrument grants a different basis. It must not imply a Basic /
Extended autonomous spend mandate. This is a sensitive wording item and remains `[NEEDS LAWYER]`.

---

## 5. Cleaning execution model

Because **Sentinel performs cleaning** (§1.5), cleaning is no longer only "coordination." It creates a
required document consequence set. Framing stays fixed: **readiness / turnover cleaning inside structured
oversight — never "we are a cleaning company"** (Copy Codex §4.4).

**Required documents this decision triggers (to be drafted later, not now):**
1. **Cleaning Scope Annex** — what cleaning is in scope per pathway/package; readiness vs turnover trigger.
2. **Cleaning Checklist** — the field form behind cleaning execution.
3. **Before/After Evidence Rule** — mandatory paired evidence for cleaning tasks (subject to §7).
4. **Cleaner Handoff Record** — briefing + verification when a cleaner is engaged.
5. **Re-clean / Cleaning-Failure Rule** — what happens when readiness is not met; who bears cost.
6. **Owner-selected-cleaner limitation** (see below).
7. **Cleaning Exclusions** — biohazard, mould remediation, pest infestation, post-construction dust, high-
   ladder work, unsafe electrical/water situations, illegal disposal, personal laundry unless scoped.

**Preferred vs owner-selected cleaner (`ACCEPTED`):**
- **Sentinel cleaner** → Sentinel can document **cleaning execution** (full before/after standard).
- **Owner-selected cleaner** → Sentinel documents **visible readiness after access only**, and does **not**
  guarantee that cleaner's method, timing, products, staffing, or performance. If the owner insists on
  their own cleaner, they must accept Sentinel's report/checklist standard; otherwise Sentinel will not
  vouch for work it did not perform. This protects Sentinel from being blamed for a third party's result.

**Status:** `ACCEPTED` on model; `[NEEDS OPERATIONAL TEST]` on the checklist depth and re-clean cost rule;
must not drift the locked package meanings (cleaning depth is depth of the same oversight, not a new promise).

---

## 6. UV evidence rule

**Accepted framing (`ACCEPTED`):** UV is an **optional "UV-assisted visible residue check"** — an evidence
aid inside cleaning documentation.

**Hard constraints (put in the Cleaning docs + Copy discipline):**
- UV **may** be used to make some residues more visible in before/after evidence.
- UV **must not** be described or implied as: sanitation proof, hygiene certification, sterilisation,
  disinfection guarantee, or laboratory/scientific evidence.
- UV shows *some residue*; it does **not** prove something is clean, safe, or sanitised. Any report line
  must stay at "UV-assisted visible residue check," never "certified clean."

Status: `ACCEPTED`. No lawyer needed for the framing; a light copy-review ensures no marketing surface
ever upgrades UV into a hygiene claim.

---

## 7. Photo / privacy rule

**Principle (`ACCEPTED` · `[NEEDS LAWYER]` light):** GDPR data-minimisation and storage-limitation apply
from day one (Reg. 2016/679). Photos capture only what documents an operational fact.

**Do-not-photograph list (hard):**
- Passports, IDs, legal papers.
- Bank cards, financial documents.
- Alarm codes, passwords, router/Wi-Fi labels, safe codes.
- Screens showing messages, emails, accounts.
- Children / family photos.
- Medicine, medical documents, intimate items.
- Valuables — unless they are directly part of a reported issue.
- Guest personal belongings — unless needed to document damage, and then **cropped / minimised**.

**Sensitive-but-relevant handling:** when a sensitive item matters operationally, it is **reported, not
photographed**, using a standard line:
> "Sensitive item visible; not photographed. Owner action may be required."

**Consequences:** this rule is a required section of the Photo policy and the Before/After Evidence Rule,
and it binds every report template. Evidence photos are reference-numbered and stored per §8.

---

## 8. Report / storage workflow

**Launch workflow (`ACCEPTED` · `[NEEDS OPERATIONAL TEST]`):**
1. Fill forms on **iPad** (digital field forms).
2. **Export a PDF report.**
3. **Email** the PDF report + selected evidence photos to the owner (owners are abroad — email is the
   delivery channel).
4. Store the **full evidence set in a structured, encrypted cloud folder** (the archive of record).
5. **Paper only** for signed key-custody / signature artifacts where a wet signature is useful.
6. **WhatsApp is never the official archive** (it may be an operational channel per §9, not a record store).

**Retention (`PROVISIONAL` · `[NEEDS LAWYER]` · `[NEEDS ACCOUNTANT]`):**
- Proposed: **active contract period + 24 months** for operational reports/photos, then **delete or block**
  unless there is a dispute, unpaid invoice, claim, legal need, or tax/accounting reason.
- Apply Spanish **bloqueo de datos** (LOPDGDD): on deletion/rectification, data may be **blocked/reserved**
  for possible liabilities, used for nothing else, then destroyed after the relevant period.
- This makes the **live Privacy notice's** open-ended "duration + legal periods" **concrete** — the notice
  and the retention schedule must then agree. Tax/accounting minimums are an **accountant** question and
  may exceed 24 months for financial records specifically.

**Consequence:** confirms the need for a Retention & data-blocking schedule, a Photo policy, a RAT, and a
processor agreement for the cloud/hosting provider (and email provider) — all already in the document
universe, now higher priority (see §12).

---

## 9. SLA recommendation

**Principle (`ACCEPTED`):** SLA = **response/decision timing, not guaranteed resolution.** No 24/7 promise
unless it can truly be operated. Package sets the window; it does not guarantee a fix.

**Proposed service-hour language (design intent — preserves existing package promises):**

| Package | Normal response | Urgent / protective posture |
|---|---|---|
| Basic | within **48h** | document + owner-contact/escalation; no autonomous paid spend by default |
| Extended | within **24h** | faster escalation + owner contact; no autonomous paid spend by default |
| Full | **same-day** | strongest protective-action posture within the EUR 300 / EUR 500 authority |

**Definition of "response" (put in the MSA + FAQ-consistent):** acknowledgement, assessment, owner contact,
protective-action decision, or visit scheduling — **not** guaranteed resolution. Parts, technicians, and
third-party availability are outside Sentinel's full control (already stated on the live FAQ).

Status: `ACCEPTED`; must not weaken the locked Full cadence (`min. 3/mies.`) or the SLA meaning in
`DECISIONS.md`. Any "urgent posture" wording is `[NEEDS LAWYER]` where it touches emergency authority.

---

## 10. Payment recommendation

**Proposed fair model (`PROVISIONAL` · `[NEEDS ACCOUNTANT]` · `[NEEDS LAWYER]`):**
- Monthly fee **paid upfront**.
- **First payment due before key custody / activation** (no custody without activation).
- **Minimum 3 months** (consistent with the live Terms).
- **Cleaning / guest-turnover** billed **only if explicitly scoped** — either included when scoped, or per
  event.
- **Vendor / third-party costs** require owner approval unless within agreed autonomous authority (Full
  EUR 300 standard / EUR 500 optional, or a separately reviewed authority instrument).
- **Emergency protective expenses** may be billed if incurred **inside** agreed authority; Basic /
  Extended have no autonomous paid-spend authority by default.
- **Late payment** pauses **non-urgent** service after notice; **key return / handover remains orderly**
  regardless.

**Consumer-law guardrail (`[NEEDS LAWYER]`):** avoid harsh cancellation penalties. Terms imposing
disproportionate obstacles or charges for ending an ongoing service can be risky/abusive under TRLGDCU.
The **14-day withdrawal + "start now" consent** (from §1.2) is a **lawyer-review** item and must be
resolved before any payment/cancellation wording is drafted.

**Accountant items:** invoicing identity, VAT treatment, payment processor, and whether **online payment is
actually live at launch** — the live Privacy notice references online payments, so either that must be true
or the notice must be reconciled. Do not draft the Price/Range confirmation note until this is settled.

---

## 11. Rejection and termination triggers

**Accept-before-start screen — reject if (`ACCEPTED`):**
- Property outside the service area (Torrevieja + ~50–70 km).
- No reliable access / key / alarm path.
- Unsafe property condition.
- Owner refuses the photo / report / data rules.
- Owner wants rental management, concierge, legal compliance, or "handle everything."
- Owner refuses the emergency-authority boundaries.
- Illegal or unclear rental situation.
- No usable payment method.
- Owner-selected cleaner/vendor refuses the documentation standard.

**Pause or terminate if (`ACCEPTED` · `[NEEDS LAWYER]` on mechanics):**
- Unpaid invoice after notice.
- Repeated owner non-response on required decisions.
- Repeated access failure outside Sentinel's control.
- Unsafe conditions.
- Abusive communication.
- Scope creep.
- Vendor/cleaner conflict that makes documentation impossible.
- Legal / regulatory concern.
- Owner asks Sentinel to conceal, misrepresent, or ignore a material issue.

**Consistency:** these align with the live Terms (breach of scope, non-payment, operational impossibility,
unsafe-service behaviour) and the FAQ refusal right. The **notice periods, cure windows, and consumer
withdrawal interaction** are `[NEEDS LAWYER]` and are drafted with the Cancellation/Handover annex, not
before.

---

## 12. Documents impacted

How these decisions re-prioritise the document universe from the audit. New/raised items are what change
because of the Owner's answers.

**Raised in priority (because Sentinel performs cleaning — §5):**
- Cleaning Scope Annex, Cleaning Checklist, Before/After Evidence Rule, Cleaner Handoff Record, Re-clean/
  Failure Rule, Cleaning Exclusions, Owner-selected-cleaner limitation. These move from "before first
  scoped customer" toward the **core set** if the first customer buys any cleaning scope.

**Raised in priority (because of privacy/photo/storage decisions — §7, §8):**
- Photo policy, Retention & data-blocking schedule, RAT, and the **cloud + email processor agreements**
  become **first-customer** items, not deferrable — the workflow *creates* the processing they govern.

**Raised in priority (because of the liability separation — §2, §3):**
- Liability / Insurance posture statement and the **insurance question** (key-custody / civil-liability
  cover) become blockers for the Access & Key Custody annex and the MSA liability clause.

**Confirmed structure (unchanged by these answers):**
- One shared MSA + modular annexes; pathway = a field; only three real variants (Usage Pathway profiles,
  private/guest visit checklist, onboarding conditional block). Client-capacity (§1.1) is a **field**, not
  a separate contract — consistent with the one-spine rule.

**Sequencing verdict (Owner-endorsed):** the **first real draft is the Scope Register**, not the Master
Service Agreement. The contract depends on the scope system; the scope system does not depend on final
legal wording. Recommended draft order after this memo:
1. **Scope Register + Exclusions master** (absorbs cleaning scope + exclusions from §5).
2. **Cleaning Scope Annex + Cleaning Checklist + Before/After Evidence Rule** (unblocked by §5–§7).
3. **Photo policy + Retention/blocking schedule + RAT** (unblocked by §7–§8; aligns the live Privacy notice).
4. **Key custody register + receipt + movement/access-failure logs** (unblocked by §3; insurance question
   pending for the *annex*, but the internal registers can be built).
5. **Record templates** (visit / issue / decision / completed-action) reflecting the §4 doctrine + §2 layers.

The five legally-gated cornerstones (MSA, Access & Key Custody annex, Emergency Authority + non-response
annex, Data/Photo privacy instrument, Cancellation/withdrawal annex) stay **outline-for-lawyer only** until
the `[NEEDS LAWYER]` items above are resolved. No template drafting in this memo.

---

## Validation

- `git diff --check`: clean (report below).
- Files changed: **one new untracked file** — `doc/SENTINEL-OWNER-DECISION-MEMO.md`.
- No app code, CSS, messages, estimator, contact schema/API, routes, legal/noindex, pricing, package
  logic, or assets touched. Docs-only.
- Not committed (per task).

## Rules preserved

- Package responsibility ≠ emergency authority ≠ liability; "Poziom odpowiedzialności" never becomes
  unlimited responsibility.
- Sentinel = local owner representation / Structured Property Oversight. Cleaning and keyholding are
  scoped capabilities inside oversight, never the public category. No concierge / rental / "handle
  everything" drift.
- SLA = response/decision timing, not guaranteed resolution. Basic / Extended require owner approval before
  paid action/vendor spend by default; Full uses EUR 300 standard / EUR 500 optional if agreed. Above the
  agreed authority requires owner approval, except where law/safety/emergency services compel minimal
  action.
- Mixed / undetermined use is a starting scope to confirm, never a "wrong package" or lock-in.
- No estimator / pricing / package / route / contact-schema / legal changes were proposed or made.

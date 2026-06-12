/**
 * Operational ledger — a section-spanning dark proof band that shows the
 * standing procedure for a detected event: issue → evidence → decision →
 * action. Stations sit on a drawn route; each carries an object glyph and a
 * one-line procedural description. All labels arrive via props so PL/EN
 * parity stays in the message dictionaries.
 */

type LedgerStep = {
  title: string;
  body: string;
};

type OperationalLedgerProps = {
  label: string;
  title: string;
  steps: LedgerStep[];
  className?: string;
};

const GLYPHS = [
  // event: exclamation diamond
  <g key="event" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="-11" y="-11" width="22" height="22" transform="rotate(45)" />
    <line x1="0" y1="-6" x2="0" y2="2" />
    <circle cx="0" cy="7" r="0.8" fill="currentColor" />
  </g>,
  // evidence: documented sheet
  <g key="evidence" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="-9" y="-13" width="18" height="26" rx="2" />
    <line x1="-4" y1="-5" x2="4" y2="-5" />
    <line x1="-4" y1="0" x2="4" y2="0" />
    <line x1="-4" y1="5" x2="1" y2="5" />
  </g>,
  // decision: bracketed limit gate
  <g key="decision" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M -12 -10 H -16 V 10 H -12" />
    <path d="M 12 -10 H 16 V 10 H 12" />
    <rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" />
  </g>,
  // action: confirmed execution
  <g key="action" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="0" cy="0" r="11" />
    <path d="M -4.5 0.5 L -1 4 L 5.5 -3.5" />
  </g>,
];

export default function OperationalLedger({ label, title, steps, className = '' }: OperationalLedgerProps) {
  return (
    <section className={`op-ledger reveal-rise ${className}`.trim()}>
      <header className="op-ledger__head">
        <p className="op-ledger__label">{label}</p>
        <h3 className="op-ledger__title">{title}</h3>
      </header>
      <ol className="op-ledger__track">
        {steps.map((step, index) => (
          <li key={step.title} className="op-ledger__station">
            <span className="op-ledger__node" aria-hidden="true">
              <svg viewBox="-20 -20 40 40" focusable="false">{GLYPHS[index % GLYPHS.length]}</svg>
            </span>
            <span className="op-ledger__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h4 className="op-ledger__step-title">{step.title}</h4>
            <p className="op-ledger__step-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

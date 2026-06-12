/**
 * Access custody chain — a horizontal proof band showing the documented
 * circulation of keys and access: registration → controlled custody →
 * documented entry → confirmation and report. Rendered as linked custody
 * nodes with object glyphs; labels arrive via props (PL/EN in dictionaries).
 */

type CustodyStep = {
  title: string;
  body: string;
};

type AccessCustodyChainProps = {
  eyebrow: string;
  title: string;
  steps: CustodyStep[];
  note: string;
  className?: string;
};

const GLYPHS = [
  // key registered
  <g key="key" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="-5" cy="-5" r="6.5" />
    <line x1="0" y1="0" x2="11" y2="11" />
    <line x1="6.5" y1="11" x2="11" y2="11" />
  </g>,
  // controlled custody: register ledger
  <g key="register" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="-11" y="-12" width="22" height="24" rx="2" />
    <line x1="-11" y1="-4" x2="11" y2="-4" />
    <line x1="-6" y1="2" x2="6" y2="2" />
    <line x1="-6" y1="7" x2="2" y2="7" />
  </g>,
  // documented entry: doorway with record tick
  <g key="entry" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M -9 13 V -9 Q -9 -13 -5.5 -13 H 5.5 Q 9 -13 9 -9 V 13" />
    <path d="M -2.5 1 L 0.5 4 L 6 -2.5" />
  </g>,
  // confirmation: report sheet with tick
  <g key="report" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="-9" y="-13" width="18" height="26" rx="2" />
    <line x1="-4" y1="-6" x2="4" y2="-6" />
    <path d="M -4 3 L -1.5 5.5 L 4 -1" />
  </g>,
];

export default function AccessCustodyChain({
  eyebrow,
  title,
  steps,
  note,
  className = '',
}: AccessCustodyChainProps) {
  return (
    <section className={`custody-chain reveal-rise ${className}`.trim()}>
      <header className="custody-chain__head">
        <p className="custody-chain__eyebrow">{eyebrow}</p>
        <h3 className="custody-chain__title">{title}</h3>
      </header>
      <ol className="custody-chain__track">
        {steps.map((step, index) => (
          <li key={step.title} className="custody-chain__link">
            <span className="custody-chain__node" aria-hidden="true">
              <svg viewBox="-20 -20 40 40" focusable="false">{GLYPHS[index % GLYPHS.length]}</svg>
            </span>
            <h4 className="custody-chain__step-title">{step.title}</h4>
            <p className="custody-chain__step-body">{step.body}</p>
          </li>
        ))}
      </ol>
      <p className="custody-chain__note">{note}</p>
    </section>
  );
}

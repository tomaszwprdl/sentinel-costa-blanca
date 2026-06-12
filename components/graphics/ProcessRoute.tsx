/**
 * Process route — a slim section-spanning strip showing the standing
 * operating sequence (visit → report → decision → action) with the current
 * station highlighted. Placed between chapters so the page reads as a
 * procedure in progress. Labels arrive via props (PL/EN in dictionaries).
 */

type ProcessRouteProps = {
  labels: string[];
  active: number;
  className?: string;
};

const GLYPHS = [
  // visit: doorway
  <g key="visit" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M -7 10 V -7 Q -7 -10 -4.5 -10 H 4.5 Q 7 -10 7 -7 V 10" />
    <circle cx="2.5" cy="1.5" r="1.1" fill="currentColor" stroke="none" />
  </g>,
  // report: sheet
  <g key="report" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="-7" y="-10" width="14" height="20" rx="2" />
    <line x1="-3" y1="-4" x2="3" y2="-4" />
    <line x1="-3" y1="0" x2="3" y2="0" />
    <line x1="-3" y1="4" x2="1" y2="4" />
  </g>,
  // decision: diamond
  <g key="decision" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="-7" y="-7" width="14" height="14" transform="rotate(45)" />
  </g>,
  // action: check
  <g key="action" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="0" cy="0" r="9" />
    <path d="M -3.5 0.5 L -1 3 L 4.5 -3" />
  </g>,
];

export default function ProcessRoute({ labels, active, className = '' }: ProcessRouteProps) {
  return (
    <div className={`process-route reveal-rise ${className}`.trim()} role="presentation">
      <ol className="process-route__track">
        {labels.map((label, index) => (
          <li
            key={label}
            className="process-route__station"
            data-state={index === active ? 'active' : index < active ? 'done' : 'ahead'}
          >
            <span className="process-route__node" aria-hidden="true">
              <svg viewBox="-14 -14 28 28" focusable="false">{GLYPHS[index % GLYPHS.length]}</svg>
            </span>
            <span className="process-route__label">{label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

type IntakePathDiagramProps = {
  className?: string;
};

export default function IntakePathDiagram({ className = '' }: IntakePathDiagramProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-structural-light bg-surface-card shadow-[0_14px_36px_rgba(16,38,63,0.1)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 720 420" className="h-full min-h-[220px] w-full">
        <rect width="720" height="420" fill="var(--surface-light-alt)" />
        <g fill="var(--surface-card)" stroke="var(--structural-light)" strokeWidth="2">
          <rect x="58" y="84" width="154" height="252" rx="24" />
          <rect x="282" y="54" width="174" height="312" rx="24" />
          <rect x="528" y="110" width="134" height="196" rx="24" />
        </g>
        <g stroke="var(--authority)" strokeWidth="8" strokeLinecap="square" opacity="0.3">
          <path d="M96 140h76M96 178h96M96 216h54" />
          <path d="M322 112h92M322 154h72M322 196h96M322 238h54M322 280h82" />
          <path d="M562 174h66M562 212h44" />
        </g>
        <rect x="322" y="306" width="84" height="28" rx="14" fill="var(--accent)" opacity="0.85" />
        <circle cx="594" cy="252" r="22" fill="var(--support)" opacity="0.92" />
        <path d="M584 252l8 8 20-24" fill="none" stroke="var(--authority-on-dark)" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />

        <path d="M212 210h70M456 210h72" stroke="var(--authority)" strokeWidth="5" strokeLinecap="square" opacity="0.34" />
        <path d="M264 186l28 24-28 24M510 186l28 24-28 24" fill="none" stroke="var(--authority)" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" opacity="0.34" />
      </svg>
    </figure>
  );
}

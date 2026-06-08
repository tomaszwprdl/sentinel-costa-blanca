type ResponsibilityStructureDiagramProps = {
  className?: string;
};

export default function ResponsibilityStructureDiagram({
  className = '',
}: ResponsibilityStructureDiagramProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-structural-light bg-surface-card shadow-[0_14px_36px_rgba(16,38,63,0.1)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 760 560" className="h-full min-h-[280px] w-full">
        <rect x="0" y="0" width="760" height="560" fill="var(--surface-light-alt)" />
        <ellipse cx="380" cy="292" rx="250" ry="156" fill="var(--support)" opacity="0.08" />
        <ellipse cx="380" cy="292" rx="188" ry="112" fill="none" stroke="var(--support)" strokeWidth="3" strokeDasharray="9 11" opacity="0.36" />

        <rect x="286" y="190" width="188" height="188" rx="26" fill="var(--authority-bg)" />
        <path d="M330 294h100M354 250h52M354 338h52" stroke="var(--authority-on-dark)" strokeWidth="11" strokeLinecap="square" opacity="0.72" />
        <circle cx="380" cy="294" r="22" fill="var(--accent)" />

        <g fill="var(--surface-card)" stroke="var(--structural-light)" strokeWidth="2">
          <rect x="80" y="88" width="174" height="116" rx="22" />
          <rect x="506" y="88" width="174" height="116" rx="22" />
          <rect x="80" y="392" width="174" height="116" rx="22" />
          <rect x="506" y="392" width="174" height="116" rx="22" />
        </g>
        <g stroke="var(--authority)" strokeWidth="8" strokeLinecap="square" opacity="0.3">
          <path d="M120 136h86M120 164h52" />
          <path d="M546 136h86M546 164h52" />
          <path d="M120 440h86M120 468h52" />
          <path d="M546 440h86M546 468h52" />
        </g>
        <path d="M254 170l72 58M506 170l-72 58M254 416l72-58M506 416l-72-58" stroke="var(--authority)" strokeWidth="5" strokeLinecap="square" opacity="0.26" />
        <g fill="var(--accent)" opacity="0.9">
          <circle cx="286" cy="196" r="8" />
          <circle cx="474" cy="196" r="8" />
          <circle cx="286" cy="388" r="8" />
          <circle cx="474" cy="388" r="8" />
        </g>
      </svg>
    </figure>
  );
}

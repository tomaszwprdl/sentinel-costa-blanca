type ReportEvidenceDiagramProps = {
  className?: string;
};

export default function ReportEvidenceDiagram({ className = '' }: ReportEvidenceDiagramProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-structural-light bg-surface-card shadow-[0_14px_36px_rgba(16,38,63,0.1)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 760 560" className="h-full min-h-[280px] w-full">
        <rect x="0" y="0" width="760" height="560" fill="var(--surface-light-alt)" />
        <rect x="98" y="54" width="564" height="452" rx="24" fill="var(--surface-card)" stroke="var(--structural-light)" strokeWidth="2" />
        <rect x="146" y="104" width="176" height="16" rx="8" fill="var(--authority)" opacity="0.74" />
        <rect x="146" y="150" width="286" height="10" rx="5" fill="var(--authority)" opacity="0.18" />
        <rect x="146" y="178" width="218" height="10" rx="5" fill="var(--authority)" opacity="0.14" />

        <rect x="146" y="236" width="260" height="182" rx="14" fill="var(--surface-light-alt)" stroke="var(--structural-light)" />
        {[0, 1, 2, 3].map((index) => (
          <g key={index} transform={`translate(170 ${272 + index * 32})`}>
            <rect width="122" height="8" rx="4" fill="var(--authority)" opacity="0.24" />
            <circle cx="182" cy="4" r="13" fill="none" stroke="var(--support)" strokeWidth="4" />
            <path d="M176 4l5 5 12-15" fill="none" stroke="var(--support)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
          </g>
        ))}

        <g transform="translate(448 236)">
          {[0, 1, 2, 3].map((index) => (
            <g key={index} transform={`translate(${(index % 2) * 94} ${Math.floor(index / 2) * 92})`}>
              <rect width="72" height="72" rx="12" fill="var(--surface-light)" stroke="var(--structural-light)" />
              <path d="M14 46h44M18 26h18M42 26h14" stroke={index % 2 === 0 ? 'var(--accent)' : 'var(--support)'} strokeWidth="6" strokeLinecap="square" opacity="0.72" />
            </g>
          ))}
        </g>

        <rect x="146" y="454" width="362" height="10" rx="5" fill="var(--authority)" opacity="0.16" />
        <rect x="146" y="478" width="246" height="10" rx="5" fill="var(--authority)" opacity="0.12" />
      </svg>
    </figure>
  );
}

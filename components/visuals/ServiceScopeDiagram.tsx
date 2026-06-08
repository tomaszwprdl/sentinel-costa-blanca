type ScopeVariant = 'basic' | 'extended' | 'full' | 'all';

type ServiceScopeDiagramProps = {
  variant?: ScopeVariant;
  compact?: boolean;
  className?: string;
};

const variantIndex: Record<Exclude<ScopeVariant, 'all'>, number> = {
  basic: 0,
  extended: 1,
  full: 2,
};

function ScopeIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <>
        <path d="M92 82h86v86H92Z" />
        <path d="M92 122h86M135 82v86" />
        <circle cx="178" cy="122" r="6" />
      </>
    );
  }

  if (index === 1) {
    return (
      <>
        <rect x="88" y="74" width="96" height="118" rx="8" />
        <path d="M110 108h52M110 138h52M110 168h34" />
        <path d="M178 174l22 22M192 160l22 22" />
      </>
    );
  }

  return (
    <>
      <rect x="92" y="72" width="92" height="124" rx="4" />
      <path d="M112 106h48M112 134h56M112 162h34" />
      <path d="M174 76l34 34M208 76l-34 34" />
      <circle cx="190" cy="174" r="18" />
      <path d="M181 174l8 8 18-22" />
    </>
  );
}

export default function ServiceScopeDiagram({
  variant = 'all',
  compact = false,
  className = '',
}: ServiceScopeDiagramProps) {
  const activeIndex = variant === 'all' ? -1 : variantIndex[variant];
  const shellClassName = [
    'overflow-hidden rounded-2xl border border-structural-light bg-surface-card shadow-[0_14px_36px_rgba(16,38,63,0.1)]',
    compact ? 'p-3' : 'p-4 md:p-5',
    className,
  ].join(' ');

  return (
    <figure className={shellClassName} aria-hidden="true">
      <svg viewBox="0 0 720 460" className="h-full min-h-[220px] w-full">
        <rect x="0" y="0" width="720" height="460" rx="28" fill="var(--surface-light-alt)" />
        <path d="M540 0c-24 58-18 106 18 144 40 43 44 94 12 154-24 46-18 91 18 134l132 28V0Z" fill="var(--support)" opacity="0.08" />
        <path d="M64 364c84-42 158-45 222-8 74 44 149 38 226-18 50-36 98-46 144-30v92H64Z" fill="var(--accent)" opacity="0.07" />

        <g transform="translate(64 64)">
          {[0, 1, 2].map((index) => {
            const isActive = activeIndex === -1 || activeIndex === index;
            return (
              <g
                key={index}
                className="scope-tier"
                transform={`translate(${index * 202} ${activeIndex === index ? -12 : 0})`}
                opacity={isActive ? 1 : 0.44}
              >
                <rect
                  width="170"
                  height="300"
                  rx="22"
                  fill={index === 1 ? 'var(--surface-card)' : 'var(--surface-light)'}
                  stroke={isActive ? 'var(--accent)' : 'var(--structural-light)'}
                  strokeWidth={isActive ? 3 : 2}
                />
                <circle
                  cx="46"
                  cy="46"
                  r="24"
                  fill={index === 0 ? 'var(--authority-bg)' : index === 1 ? 'var(--support)' : 'var(--accent)'}
                />
                <text
                  x="46"
                  y="52"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="900"
                  fill="var(--authority-on-dark)"
                >
                  {index + 1}
                </text>
                <g
                  transform="translate(0 0)"
                  fill="none"
                  stroke="var(--authority)"
                  strokeWidth="7"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  opacity="0.72"
                >
                  <ScopeIcon index={index} />
                </g>
                <g fill="var(--authority)" opacity="0.22">
                  <rect x="38" y="226" width="94" height="10" rx="5" />
                  <rect x="38" y="254" width="66" height="10" rx="5" />
                </g>
              </g>
            );
          })}

          <path d="M170 214h32M372 214h32" stroke="var(--authority)" strokeWidth="5" strokeLinecap="square" opacity="0.35" />
          <circle cx="186" cy="214" r="8" fill="var(--accent)" opacity="0.82" />
          <circle cx="388" cy="214" r="8" fill="var(--support)" opacity="0.82" />
        </g>
      </svg>
    </figure>
  );
}

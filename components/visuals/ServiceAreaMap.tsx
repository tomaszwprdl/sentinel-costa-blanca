type ServiceAreaMapLabels = {
  title: string;
  center: string;
  radius: string;
  boundary: string;
  caption: string;
};

type ServiceAreaMapProps = {
  labels: ServiceAreaMapLabels;
  compact?: boolean;
  inverse?: boolean;
  className?: string;
};

export default function ServiceAreaMap({
  labels,
  compact = false,
  inverse = false,
  className = '',
}: ServiceAreaMapProps) {
  const shellClassName = [
    'r overflow-hidden border',
    inverse
      ? 'border-authority-on-dark/25 bg-authority-on-dark/5 text-authority-on-dark'
      : 'border-structural-light bg-surface-card text-authority',
    className,
  ].join(' ');

  return (
    <figure className={shellClassName} aria-label={labels.title}>
      <div className={compact ? 'p-3' : 'p-5 md:p-6'}>
        <svg
          viewBox="0 0 640 420"
          role="img"
          aria-hidden="true"
          className={compact ? 'w-full h-auto max-h-36' : 'w-full h-auto'}
        >
          <rect x="0" y="0" width="640" height="420" fill="currentColor" opacity="0.035" />

          <path
            d="M82 52 C124 94 136 138 126 188 C118 230 145 272 196 306 C247 340 284 365 326 382"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            opacity="0.28"
          />
          <path
            d="M112 35 C156 78 170 130 162 186 C154 239 187 284 244 321 C291 352 333 373 382 392"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            opacity="0.22"
          />

          <ellipse
            cx="318"
            cy="220"
            rx="232"
            ry="140"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.42"
          />
          <ellipse
            cx="318"
            cy="220"
            rx="176"
            ry="106"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="8 10"
            opacity="0.32"
          />

          <line x1="318" y1="220" x2="550" y2="220" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
          <line x1="318" y1="220" x2="318" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />

          <circle cx="318" cy="220" r="8" fill="currentColor" opacity="0.9" />
          <circle cx="318" cy="220" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.45" />

          <g fontFamily="Inter, Arial, sans-serif" fill="currentColor">
            <text x="336" y="214" fontSize="18" fontWeight="600">
              {labels.center}
            </text>
            <text x="336" y="237" fontSize="13" opacity="0.72">
              {labels.boundary}
            </text>
            <text x="432" y="206" fontSize="13" opacity="0.72">
              {labels.radius}
            </text>
          </g>

          <g opacity="0.18" stroke="currentColor" strokeWidth="1">
            <path d="M460 88 L520 118 L500 160 L438 130 Z" fill="currentColor" />
            <path d="M408 274 L486 300 L462 350 L386 322 Z" fill="currentColor" />
            <path d="M196 106 L250 128 L232 178 L176 152 Z" fill="currentColor" />
          </g>
        </svg>
      </div>
      {!compact && (
        <figcaption
          className={
            inverse
              ? 'border-t border-authority-on-dark/15 px-5 py-3 text-xs leading-relaxed text-authority-on-dark/70 md:px-6'
              : 'border-t border-structural-light px-5 py-3 text-xs leading-relaxed text-muted md:px-6'
          }
        >
          {labels.caption}
        </figcaption>
      )}
    </figure>
  );
}

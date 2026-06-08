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
    'service-area-map overflow-hidden rounded-2xl border shadow-[0_14px_36px_rgba(16,38,63,0.1)]',
    inverse
      ? 'service-area-map--inverse border-authority-on-dark/25 bg-authority-on-dark/8 text-authority-on-dark'
      : 'border-structural-light bg-surface-card text-support',
    className,
  ].join(' ');

  return (
    <figure className={shellClassName} aria-label={labels.title}>
      {!compact && (
        <div className={inverse ? 'border-b border-authority-on-dark/15 px-5 py-4 md:px-6' : 'border-b border-structural-light bg-surface-light-alt px-5 py-4 md:px-6'}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className={inverse ? 'mb-1 text-[11px] font-black uppercase tracking-wide text-authority-on-dark/70' : 'mb-1 text-[11px] font-black uppercase tracking-wide text-accent'}>
                {labels.title}
              </p>
              <p className={inverse ? 'mb-0 text-lg font-black text-authority-on-dark' : 'mb-0 text-lg font-black text-heading'}>
                {labels.center}
              </p>
            </div>
            <span className={inverse ? 'rounded-full border border-authority-on-dark/18 bg-authority-on-dark/10 px-3 py-1 text-sm font-black' : 'rounded-full border border-structural-light bg-surface-card px-3 py-1 text-sm font-black text-heading'}>
              {labels.radius}
            </span>
          </div>
        </div>
      )}
      <div className={compact ? 'p-3' : 'p-5 md:p-6'}>
        <svg
          viewBox="0 0 640 420"
          role="img"
          aria-hidden="true"
          className={compact ? 'w-full h-auto max-h-36' : 'w-full h-auto'}
        >
          <rect x="0" y="0" width="640" height="420" fill="currentColor" opacity={inverse ? '0.085' : '0.05'} />
          <path
            d="M425 0 C472 58 504 103 506 164 C508 224 548 262 640 301 L640 420 L406 420 C442 376 448 332 428 292 C405 246 414 215 455 183 C486 159 488 122 458 82 C439 56 424 30 425 0 Z"
            fill="currentColor"
            opacity={inverse ? '0.11' : '0.085'}
          />

          <path
            d="M72 70 C126 96 148 136 132 186 C118 230 145 272 196 306 C247 340 284 365 326 382"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            opacity={inverse ? '0.34' : '0.28'}
          />
          <path
            d="M112 35 C156 78 170 130 162 186 C154 239 187 284 244 321 C291 352 333 373 382 392"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            opacity={inverse ? '0.32' : '0.24'}
          />
          <path
            d="M88 330 C154 304 208 278 274 218 C336 162 410 118 548 96"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="12 12"
            opacity={inverse ? '0.28' : '0.2'}
          />

          <ellipse
            cx="318"
            cy="220"
            rx="232"
            ry="140"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="4"
            opacity={inverse ? '0.76' : '0.78'}
            fillOpacity={inverse ? '0.12' : '0.08'}
          />
          <ellipse
            cx="318"
            cy="220"
            rx="176"
            ry="106"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 10"
            opacity={inverse ? '0.48' : '0.45'}
          />

          <line x1="318" y1="220" x2="550" y2="220" stroke="currentColor" strokeWidth="2" opacity="0.38" />
          <line x1="318" y1="220" x2="318" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.24" />

          <g fill="currentColor" opacity={inverse ? '0.42' : '0.48'}>
            <circle cx="184" cy="196" r="7" />
            <circle cx="244" cy="136" r="7" />
            <circle cx="402" cy="146" r="7" />
            <circle cx="468" cy="242" r="7" />
            <circle cx="216" cy="292" r="7" />
          </g>

          <circle cx="318" cy="220" r="10" fill="currentColor" opacity="0.98" />
          <circle cx="318" cy="220" r="22" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.55" />

          <g fontFamily="Inter, Arial, sans-serif" fill="currentColor">
            <text x="336" y="214" fontSize="20" fontWeight="800">
              {labels.center}
            </text>
            <text x="336" y="238" fontSize="14" opacity="0.78">
              {labels.boundary}
            </text>
            <text x="438" y="204" fontSize="15" fontWeight="800" opacity="0.82">
              {labels.radius}
            </text>
          </g>

          <g opacity={inverse ? '0.28' : '0.2'} stroke="currentColor" strokeWidth="1.5">
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

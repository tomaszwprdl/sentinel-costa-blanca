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
  const tone = {
    shell: inverse
      ? 'service-area-map--inverse border-authority-on-dark/25 bg-authority-on-dark/8 text-authority-on-dark'
      : 'border-structural-light bg-surface-card text-support',
    header: inverse
      ? 'border-b border-authority-on-dark/15 px-5 py-4 md:px-6'
      : 'border-b border-structural-light bg-surface-light-alt px-5 py-4 md:px-6',
    eyebrow: inverse
      ? 'mb-1 text-[11px] font-black uppercase tracking-wide text-authority-on-dark/70'
      : 'mb-1 text-[11px] font-black uppercase tracking-wide text-accent',
    title: inverse
      ? 'mb-0 text-lg font-black text-authority-on-dark'
      : 'mb-0 text-lg font-black text-heading',
    radiusBadge: inverse
      ? 'rounded-full border border-authority-on-dark/18 bg-authority-on-dark/10 px-3 py-1 text-sm font-black'
      : 'rounded-full border border-structural-light bg-surface-card px-3 py-1 text-sm font-black text-heading',
    caption: inverse
      ? 'border-t border-authority-on-dark/15 px-5 py-3 text-xs leading-relaxed text-authority-on-dark/70 md:px-6'
      : 'border-t border-structural-light px-5 py-3 text-xs leading-relaxed text-muted md:px-6',
  };

  const color = {
    paper: inverse ? 'rgba(255, 250, 242, 0.055)' : 'var(--surface-light-alt)',
    sea: inverse ? 'rgba(75, 121, 173, 0.2)' : 'color-mix(in srgb, var(--support) 14%, var(--surface-card))',
    seaDeep: inverse ? 'rgba(75, 121, 173, 0.1)' : 'color-mix(in srgb, var(--support) 8%, var(--surface-card))',
    coast: inverse ? 'rgba(255, 250, 242, 0.42)' : 'color-mix(in srgb, var(--authority-bg) 72%, var(--support))',
    land: inverse ? 'rgba(255, 250, 242, 0.1)' : 'color-mix(in srgb, var(--stone) 62%, var(--surface-card))',
    landInner: inverse ? 'rgba(255, 250, 242, 0.06)' : 'color-mix(in srgb, var(--sage) 14%, var(--surface-card))',
    authority: inverse ? 'var(--authority-on-dark)' : 'var(--authority-bg)',
    support: inverse ? '#4B79AD' : 'var(--support)',
    structural: inverse ? 'rgba(255, 250, 242, 0.34)' : 'var(--structural-a)',
    muted: inverse ? 'rgba(255, 250, 242, 0.62)' : 'var(--muted)',
    line: inverse ? 'rgba(255, 250, 242, 0.2)' : 'var(--structural-light)',
    accent: inverse ? 'color-mix(in srgb, var(--accent) 78%, var(--authority-on-dark))' : 'var(--accent)',
  };

  const shellClassName = [
    'service-area-map min-w-0 overflow-hidden rounded-lg border shadow-[0_14px_36px_rgba(16,38,63,0.1)]',
    tone.shell,
    className,
  ].join(' ');

  const coastPath =
    'M 118 58 C 168 42 228 48 286 72 C 334 92 362 118 378 154 C 392 186 388 218 372 248 C 356 280 358 312 378 344 C 398 376 432 398 472 412';
  const landPath = `${coastPath} L 472 420 L 0 420 L 0 0 L 118 58 Z`;
  const seaPath = `${coastPath} L 680 412 L 680 0 L 118 58 Z`;

  return (
    <figure className={shellClassName} aria-label={labels.title}>
      {!compact && (
        <div className={tone.header}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className={tone.eyebrow}>{labels.title}</p>
              <p className={tone.title}>{labels.center}</p>
            </div>
            <span className={tone.radiusBadge}>{labels.radius}</span>
          </div>
        </div>
      )}
      <div className={compact ? 'p-2.5 md:p-3' : 'p-5 md:p-6'}>
        <svg
          viewBox="0 0 680 420"
          role="img"
          aria-hidden="true"
          className={compact ? 'block h-auto max-h-[11.5rem] w-full max-w-full' : 'block h-auto w-full max-w-full'}
        >
          <rect x="0" y="0" width="680" height="420" fill={color.paper} />

          <path d={seaPath} fill={color.sea} />
          <path d="M 472 412 L 680 420 L 680 0 L 378 154 Z" fill={color.seaDeep} opacity="0.55" />

          <path d={landPath} fill={color.land} />
          <path
            d="M 0 0 L 118 58 L 286 72 L 372 248 L 378 344 L 0 420 Z"
            fill={color.landInner}
            opacity="0.72"
          />

          <path
            d={coastPath}
            fill="none"
            stroke={color.coast}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={coastPath}
            fill="none"
            stroke={color.authority}
            strokeWidth="1.4"
            strokeOpacity="0.35"
            strokeLinecap="round"
          />

          <g opacity="0.55">
            <path
              d="M 198 118 L 248 132 L 236 176 L 184 160 Z"
              fill="none"
              stroke={color.line}
              strokeWidth="1.2"
            />
            <path
              d="M 248 228 L 302 242 L 288 292 L 232 276 Z"
              fill="none"
              stroke={color.line}
              strokeWidth="1.2"
            />
          </g>

          <g transform="translate(318 248)">
            <circle
              cx="0"
              cy="0"
              r="128"
              fill={color.support}
              fillOpacity={inverse ? '0.1' : '0.07'}
              stroke={color.authority}
              strokeWidth="2.6"
              strokeOpacity={inverse ? '0.68' : '0.58'}
            />
            <circle
              cx="0"
              cy="0"
              r="98"
              fill="none"
              stroke={color.structural}
              strokeWidth="1.6"
              strokeDasharray="6 8"
              strokeOpacity="0.82"
            />
            <circle
              cx="0"
              cy="0"
              r="68"
              fill="none"
              stroke={color.structural}
              strokeWidth="1.2"
              strokeDasharray="3 7"
              strokeOpacity="0.62"
            />
          </g>

          <line
            x1="318"
            y1="248"
            x2="446"
            y2="248"
            stroke={color.authority}
            strokeWidth="1.3"
            strokeOpacity="0.38"
          />
          <line
            x1="318"
            y1="248"
            x2="318"
            y2="120"
            stroke={color.structural}
            strokeWidth="1.1"
            strokeOpacity="0.45"
          />
          <line
            x1="318"
            y1="248"
            x2="188"
            y2="268"
            stroke={color.structural}
            strokeWidth="1.1"
            strokeOpacity="0.38"
          />

          <g fill={color.authority}>
            <circle cx="318" cy="248" r="8.5" />
            <circle
              cx="318"
              cy="248"
              r="18"
              fill="none"
              stroke={color.authority}
              strokeWidth="2.2"
              strokeOpacity="0.55"
            />
          </g>

          <g fill={color.support} stroke={color.paper} strokeWidth="2">
            <circle cx="352" cy="178" r="4.5" />
            <circle cx="300" cy="118" r="4.5" />
            <circle cx="388" cy="318" r="4.5" />
            <circle cx="248" cy="268" r="4.5" />
          </g>

          {!compact && (
            <g
              fontFamily="var(--font-sans), Arial, sans-serif"
              letterSpacing="0"
              fill={color.authority}
            >
              <text x="334" y="243" fontSize="18" fontWeight="800">
                {labels.center}
              </text>
              <text x="334" y="264" fontSize="12" fill={color.muted}>
                {labels.boundary}
              </text>
              <text x="452" y="236" fontSize="13" fontWeight="800" fill={color.authority}>
                {labels.radius}
              </text>
            </g>
          )}

          <g
            fontFamily="var(--font-sans), Arial, sans-serif"
            fill={color.muted}
            fontSize={compact ? '9.5' : '10.5'}
            fontWeight="800"
            letterSpacing="0.07em"
          >
            <text x="358" y="172">LA MATA</text>
            <text x="268" y="112">GUARDAMAR</text>
            <text x="398" y="312">ORIHUELA COSTA</text>
            <text x="214" y="262">SAN MIGUEL</text>
          </g>

          <g transform="translate(36 36)">
            <text
              x="0"
              y="0"
              fontFamily="var(--font-sans), Arial, sans-serif"
              fontSize="10"
              fontWeight="800"
              letterSpacing="0.1em"
              fill={color.muted}
            >
              N
            </text>
            <path d="M 6 8 V 28" stroke={color.line} strokeWidth="1.2" />
            <path d="M 6 8 L 2 14 M 6 8 L 10 14" stroke={color.line} strokeWidth="1.2" />
          </g>

          <g transform="translate(40 360)">
            <rect
              width="148"
              height="26"
              fill={inverse ? 'rgba(255, 250, 242, 0.07)' : 'rgba(255,255,255,0.58)'}
              stroke={color.line}
            />
            <circle cx="18" cy="13" r="5" fill={color.authority} />
            <text x="30" y="17" fontSize="10" fontWeight="700" fill={color.muted}>
              {labels.center}
            </text>
            <path d="M 92 13 H 132" stroke={color.structural} strokeWidth="1.8" strokeDasharray="4 5" />
          </g>
        </svg>
      </div>
      {!compact && (
        <figcaption className={tone.caption}>{labels.caption}</figcaption>
      )}
    </figure>
  );
}

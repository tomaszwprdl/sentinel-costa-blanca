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
    sea: inverse ? 'rgba(75, 121, 173, 0.16)' : 'color-mix(in srgb, var(--support) 10%, var(--surface-card))',
    seaLine: inverse ? 'rgba(255, 250, 242, 0.22)' : 'color-mix(in srgb, var(--support) 36%, var(--line))',
    land: inverse ? 'rgba(255, 250, 242, 0.105)' : 'color-mix(in srgb, var(--stone) 70%, var(--surface-card))',
    landAlt: inverse ? 'rgba(255, 250, 242, 0.075)' : 'color-mix(in srgb, var(--sage) 18%, var(--surface-card))',
    authority: inverse ? 'var(--authority-on-dark)' : 'var(--authority-bg)',
    support: inverse ? '#4B79AD' : 'var(--support)',
    structural: inverse ? 'rgba(255, 250, 242, 0.38)' : 'var(--structural-a)',
    muted: inverse ? 'rgba(255, 250, 242, 0.66)' : 'var(--muted)',
    line: inverse ? 'rgba(255, 250, 242, 0.24)' : 'var(--structural-light)',
    accent: inverse ? 'color-mix(in srgb, var(--accent) 78%, var(--authority-on-dark))' : 'var(--accent)',
  };

  const shellClassName = [
    'service-area-map min-w-0 overflow-hidden rounded-lg border shadow-[0_14px_36px_rgba(16,38,63,0.1)]',
    tone.shell,
    className,
  ].join(' ');

  return (
    <figure className={shellClassName} aria-label={labels.title}>
      {!compact && (
        <div className={tone.header}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className={tone.eyebrow}>
                {labels.title}
              </p>
              <p className={tone.title}>
                {labels.center}
              </p>
            </div>
            <span className={tone.radiusBadge}>
              {labels.radius}
            </span>
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
          <path
            d="M424 0 L680 0 L680 420 L446 420 C482 374 491 332 469 292 C444 248 454 215 497 184 C529 161 532 124 503 82 C480 49 448 23 424 0 Z"
            fill={color.sea}
          />
          <path
            d="M0 0 H438 C470 24 498 54 514 88 C534 131 523 164 488 190 C449 219 440 251 463 294 C484 334 472 379 431 420 H0 Z"
            fill={color.land}
          />
          <path
            d="M427 0 C461 29 489 62 506 98 C526 141 513 164 482 188 C444 218 431 250 455 296 C476 336 460 381 420 420"
            fill="none"
            stroke={color.seaLine}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M84 68 C132 92 157 128 148 171 C139 215 160 254 204 290 C254 331 316 365 382 388"
            fill="none"
            stroke={color.line}
            strokeWidth="2"
            strokeDasharray="6 9"
          />
          <path
            d="M72 330 C148 303 215 272 278 220 C333 174 395 139 506 116"
            fill="none"
            stroke={color.line}
            strokeWidth="1.5"
            strokeDasharray="11 13"
          />
          <path
            d="M64 220 C146 184 227 164 329 156 C423 148 503 155 612 178"
            fill="none"
            stroke={color.line}
            strokeWidth="1.5"
            strokeDasharray="2 10"
          />

          <g opacity="0.72">
            <path d="M122 118 L189 142 L171 206 L98 179 Z" fill={color.landAlt} />
            <path d="M202 253 L282 277 L264 343 L182 316 Z" fill={color.landAlt} />
            <path d="M342 92 L425 118 L399 174 L318 145 Z" fill={color.landAlt} />
          </g>

          <g transform="translate(382 229) rotate(-10)">
            <ellipse
              cx="0"
              cy="0"
              rx="236"
              ry="136"
              fill={color.support}
              fillOpacity={inverse ? '0.12' : '0.075'}
              stroke={color.authority}
              strokeWidth="3"
              strokeOpacity={inverse ? '0.72' : '0.62'}
            />
            <ellipse
              cx="0"
              cy="0"
              rx="181"
              ry="103"
              fill="none"
              stroke={color.structural}
              strokeWidth="1.7"
              strokeDasharray="7 9"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="98"
              ry="56"
              fill="none"
              stroke={color.structural}
              strokeWidth="1.3"
              strokeDasharray="3 8"
              opacity="0.78"
            />
          </g>

          <line x1="382" y1="229" x2="602" y2="190" stroke={color.authority} strokeWidth="1.4" strokeOpacity="0.44" />
          <line x1="382" y1="229" x2="382" y2="92" stroke={color.structural} strokeWidth="1.2" strokeOpacity="0.52" />
          <line x1="382" y1="229" x2="178" y2="284" stroke={color.structural} strokeWidth="1.2" strokeOpacity="0.42" />

          <g fill={color.authority}>
            <circle cx="382" cy="229" r="9" />
            <circle cx="382" cy="229" r="20" fill="none" stroke={color.authority} strokeWidth="2.4" strokeOpacity="0.58" />
          </g>

          <g fill={color.support} stroke={color.paper} strokeWidth="2.2">
            <circle cx="338" cy="150" r="5.5" />
            <circle cx="474" cy="142" r="5.5" />
            <circle cx="482" cy="284" r="5.5" />
            <circle cx="283" cy="292" r="5.5" />
            <circle cx="520" cy="226" r="5.5" />
          </g>

          <g
            fontFamily="var(--font-sans), Arial, sans-serif"
            letterSpacing="0"
            fill={color.authority}
          >
            <text x="402" y="224" fontSize="19" fontWeight="800">
              {labels.center}
            </text>
            <text x="402" y="247" fontSize="13" fill={color.muted}>
              {labels.boundary}
            </text>
            <text x="525" y="181" fontSize="14" fontWeight="800" fill={color.authority}>
              {labels.radius}
            </text>
          </g>

          <g
            fontFamily="var(--font-sans), Arial, sans-serif"
            fill={color.muted}
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.08em"
          >
            <text x="95" y="74">ALICANTE</text>
            <text x="278" y="135">GUARDAMAR</text>
            <text x="454" y="132">SANTA POLA</text>
            <text x="222" y="314">ORIHUELA COSTA</text>
            <text x="492" y="307">SAN JAVIER</text>
          </g>

          <g stroke={color.line} strokeWidth="1">
            <path d="M38 38 H94" />
            <path d="M38 38 V94" />
            <path d="M624 364 H568" />
            <path d="M624 364 V308" />
          </g>

          <g transform="translate(40 360)">
            <rect width="135" height="24" fill={inverse ? 'rgba(255, 250, 242, 0.07)' : 'rgba(255,255,255,0.58)'} stroke={color.line} />
            <path d="M15 13 H74" stroke={color.authority} strokeWidth="2" />
            <path d="M74 13 H118" stroke={color.structural} strokeWidth="2" strokeDasharray="5 6" />
          </g>
        </svg>
      </div>
      {!compact && (
        <figcaption className={tone.caption}>
          {labels.caption}
        </figcaption>
      )}
    </figure>
  );
}

export type EventResponseVariant = 'leak' | 'technician' | 'turnover' | 'weekend';

type EventResponseDiagramProps = {
  variant: EventResponseVariant;
  className?: string;
};

function EventSymbol({ variant }: { variant: EventResponseVariant }) {
  if (variant === 'technician') {
    return (
      <>
        <circle cx="360" cy="178" r="34" />
        <path d="M336 202l-36 58M384 202l36 58" />
        <path d="M314 284h92M314 320h66" />
      </>
    );
  }

  if (variant === 'turnover') {
    return (
      <>
        <rect x="312" y="142" width="96" height="118" rx="8" />
        <path d="M326 172h68M326 204h68M326 236h42" />
        <path d="M286 306c34-24 66-24 96 0s62 24 92 0" />
      </>
    );
  }

  if (variant === 'weekend') {
    return (
      <>
        <rect x="304" y="132" width="112" height="154" rx="8" />
        <path d="M330 174h60M330 212h60M330 250h38" />
        <circle cx="432" cy="300" r="28" />
        <path d="M420 300l10 10 24-28" />
      </>
    );
  }

  return (
    <>
      <path d="M360 126c42 52 64 90 64 126 0 43-28 76-64 76s-64-33-64-76c0-36 22-74 64-126Z" />
      <path d="M326 274h68M344 302h32" />
    </>
  );
}

export default function EventResponseDiagram({
  variant,
  className = '',
}: EventResponseDiagramProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-structural-light bg-surface-card shadow-[0_14px_36px_rgba(16,38,63,0.1)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 720 420" width="720" height="420" className="block h-auto w-full">
        <rect x="0" y="0" width="720" height="420" fill="var(--surface-light-alt)" />
        <ellipse cx="360" cy="232" rx="226" ry="132" fill="var(--support)" opacity="0.08" />
        <ellipse cx="360" cy="232" rx="164" ry="96" fill="none" stroke="var(--support)" strokeWidth="3" strokeDasharray="8 10" opacity="0.42" />

        <g fill="var(--surface-card)" stroke="var(--structural-light)" strokeWidth="2">
          <rect x="54" y="98" width="160" height="224" rx="24" />
          <rect x="506" y="98" width="160" height="224" rx="24" />
        </g>
        <g stroke="var(--authority)" strokeWidth="8" strokeLinecap="square" opacity="0.34">
          <path d="M92 156h84M92 196h54M92 236h74" />
          <path d="M544 156h84M544 196h54M544 236h74" />
        </g>
        <circle cx="134" cy="282" r="20" fill="var(--accent)" opacity="0.86" />
        <circle cx="586" cy="282" r="20" fill="var(--support)" opacity="0.86" />

        <path d="M214 210h82M424 210h82" stroke="var(--authority)" strokeWidth="5" strokeLinecap="square" opacity="0.34" />
        <path d="M278 186l28 24-28 24M488 186l28 24-28 24" fill="none" stroke="var(--authority)" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" opacity="0.34" />

        <g
          className="event-symbol"
          fill="none"
          stroke={variant === 'leak' ? 'var(--accent)' : 'var(--authority)'}
          strokeWidth="9"
          strokeLinecap="square"
          strokeLinejoin="miter"
          opacity="0.78"
        >
          <EventSymbol variant={variant} />
        </g>
      </svg>
    </figure>
  );
}

type CaptureKind = 'water' | 'boiler' | 'electrical' | 'lock';

type OperationalCaptureFrameProps = {
  reference: string;
  label: string;
  note?: string;
  kind: CaptureKind;
  compact?: boolean;
};

function CaptureDrawing({ kind }: { kind: CaptureKind }) {
  if (kind === 'water') {
    return (
      <>
        <path d="M95 150 H255" />
        <circle cx="175" cy="150" r="36" />
        <path d="M150 126 L200 174 M200 126 L150 174" />
        <path d="M175 70 V114 M145 70 H205" />
      </>
    );
  }

  if (kind === 'boiler') {
    return (
      <>
        <rect x="118" y="62" width="114" height="172" rx="2" />
        <path d="M138 92 H212 M138 120 H212" />
        <circle cx="156" cy="188" r="15" />
        <circle cx="196" cy="188" r="15" />
        <path d="M148 242 V276 M202 242 V276" />
      </>
    );
  }

  if (kind === 'electrical') {
    return (
      <>
        <rect x="108" y="56" width="134" height="188" rx="2" />
        <path d="M128 88 H222 M128 116 H222 M128 144 H222 M128 172 H222" />
        <path d="M154 88 V172 M196 88 V172" />
        <path d="M138 214 H212" />
      </>
    );
  }

  return (
    <>
      <path d="M130 54 H228 V270 H130 Z" />
      <path d="M160 54 V270" />
      <rect x="174" y="138" width="36" height="44" rx="2" />
      <path d="M182 138 V120 C182 104 202 104 202 120 V138" />
      <circle cx="196" cy="160" r="3" />
    </>
  );
}

export default function OperationalCaptureFrame({
  reference,
  label,
  note,
  kind,
  compact = false,
}: OperationalCaptureFrameProps) {
  return (
    <div className="border border-structural-light bg-surface-card r overflow-hidden">
      <div className={compact ? 'p-3' : 'p-4 md:p-5'}>
        <div className="flex items-start justify-between gap-3">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted">{reference}</p>
          <span className="h-px w-10 bg-structural-muted mt-2" aria-hidden />
        </div>
        <div
          className={
            compact
              ? 'mt-3 aspect-[4/3] border border-structural-light bg-surface-light-alt'
              : 'mt-4 aspect-[4/3] border border-structural-light bg-surface-light-alt'
          }
          aria-label={label}
          role="img"
        >
          <svg viewBox="0 0 350 300" aria-hidden="true" className="h-full w-full text-body">
            <rect x="0" y="0" width="350" height="300" fill="currentColor" opacity="0.025" />
            <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" opacity="0.62">
              <CaptureDrawing kind={kind} />
            </g>
            <g fill="currentColor" opacity="0.12">
              <rect x="34" y="34" width="86" height="18" />
              <rect x="240" y="244" width="72" height="18" />
              <rect x="38" y="248" width="46" height="18" />
            </g>
            <path d="M42 42 H308 V258 H42 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          </svg>
        </div>
        <p className={compact ? 'mt-3 text-xs font-medium text-body' : 'mt-4 text-sm font-medium text-body'}>
          {label}
        </p>
        {note && <p className="mt-1 text-xs leading-relaxed text-muted">{note}</p>}
      </div>
    </div>
  );
}

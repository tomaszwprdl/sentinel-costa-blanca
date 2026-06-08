import type { PathwayKey } from '@/lib/pathway';

type PathwaySituationDiagramProps = {
  pathway: PathwayKey;
  className?: string;
};

function PathwayShape({ pathway }: { pathway: PathwayKey }) {
  if (pathway === 'regular-guest-stays') {
    return (
      <>
        <path d="M320 132h120v132H320Z" />
        <path d="M320 186h120M362 132v132" />
        <path d="M270 308c36-24 70-24 102 0s66 24 98 0" />
      </>
    );
  }

  if (pathway === 'mixed-not-defined') {
    return (
      <>
        <rect x="296" y="128" width="148" height="126" rx="8" />
        <path d="M324 166h82M324 202h54" />
        <path d="M290 316h160M320 286l-30 30 30 30M420 286l30 30-30 30" />
      </>
    );
  }

  return (
    <>
      <path d="M298 142h146v126H298Z" />
      <path d="M298 188h146M346 142v126" />
      <circle cx="444" cy="188" r="8" />
      <path d="M336 326h72M356 296v60" />
    </>
  );
}

export default function PathwaySituationDiagram({
  pathway,
  className = '',
}: PathwaySituationDiagramProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-structural-light bg-surface-card shadow-[0_14px_36px_rgba(16,38,63,0.1)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 720 420" className="h-full min-h-[220px] w-full">
        <rect width="720" height="420" fill="var(--surface-light-alt)" />
        <ellipse cx="372" cy="222" rx="226" ry="134" fill="var(--support)" opacity="0.08" />
        <ellipse cx="372" cy="222" rx="168" ry="98" fill="none" stroke="var(--support)" strokeWidth="3" strokeDasharray="8 10" opacity="0.38" />
        <g fill="none" stroke="var(--authority)" strokeWidth="9" strokeLinecap="square" strokeLinejoin="miter" opacity="0.74">
          <PathwayShape pathway={pathway} />
        </g>
        <g fill="var(--surface-card)" stroke="var(--structural-light)" strokeWidth="2">
          <rect x="62" y="94" width="152" height="96" rx="22" />
          <rect x="506" y="230" width="152" height="96" rx="22" />
        </g>
        <g stroke="var(--authority)" strokeWidth="8" strokeLinecap="square" opacity="0.28">
          <path d="M98 134h72M98 162h46" />
          <path d="M542 270h72M542 298h46" />
        </g>
        <path d="M214 154h84M444 286h62" stroke="var(--authority)" strokeWidth="5" strokeLinecap="square" opacity="0.3" />
        <circle cx="298" cy="154" r="9" fill="var(--accent)" />
        <circle cx="444" cy="286" r="9" fill="var(--support)" />
      </svg>
    </figure>
  );
}

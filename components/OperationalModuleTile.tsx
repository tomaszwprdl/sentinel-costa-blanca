import Image from 'next/image';

interface OperationalModuleTileProps {
  image?: string;
  visual?: 'readiness' | 'seasonal' | 'access';
  label: string;
  title: string;
  body: string;
  items: string[];
  note?: string;
}

function ModuleVisual({ visual }: { visual: NonNullable<OperationalModuleTileProps['visual']> }) {
  return (
    <div className="module-tile-visual aspect-[4/3] bg-surface-light-alt p-4" aria-hidden="true">
      <svg viewBox="0 0 360 270" className="h-full w-full">
        <rect width="360" height="270" rx="18" fill="var(--surface-card)" stroke="var(--structural-light)" />
        <ellipse cx="180" cy="146" rx="116" ry="72" fill="var(--support)" opacity="0.07" />
        <g fill="none" stroke="var(--authority)" strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter" opacity="0.68">
          {visual === 'readiness' && (
            <>
              <rect x="104" y="82" width="122" height="104" rx="8" />
              <path d="M128 118h72M128 150h46" />
              <path d="M238 102c30 24 30 60 0 84" />
              <path d="M246 102h32M246 186h32" />
            </>
          )}
          {visual === 'seasonal' && (
            <>
              <path d="M114 88h132v112H114Z" />
              <path d="M114 132h132M158 88v112" />
              <path d="M96 218h168" />
              <path d="M132 230h96" />
            </>
          )}
          {visual === 'access' && (
            <>
              <rect x="124" y="76" width="98" height="126" rx="8" />
              <path d="M148 116h58M148 150h38" />
              <path d="M222 196l34 34M250 176l34 34" />
              <circle cx="250" cy="116" r="18" />
            </>
          )}
        </g>
        <circle cx="76" cy="58" r="10" fill="var(--accent)" opacity="0.78" />
        <circle cx="288" cy="214" r="10" fill="var(--support)" opacity="0.78" />
      </svg>
    </div>
  );
}

export default function OperationalModuleTile({
  image,
  visual,
  label,
  title,
  body,
  items,
  note,
}: OperationalModuleTileProps) {
  const showBody = body.trim().length > 0 && !items.includes(body);

  return (
    <article className="operational-module-tile visual-card overflow-hidden">
      {visual ? (
        <ModuleVisual visual={visual} />
      ) : image ? (
        <div className="module-tile-visual relative aspect-[4/3]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="operational-module-tile__content p-4 md:p-5">
        <p className="operational-module-tile__label mb-2 text-[10px] font-black uppercase text-accent">
          {label}
        </p>
        <h3 className="mb-3 text-lg font-black leading-snug text-heading md:text-xl">{title}</h3>
        {showBody && <p className="mb-0 text-sm leading-relaxed text-body">{body}</p>}
        <ul className={`ml-4 list-disc space-y-2 text-sm leading-relaxed text-body ${showBody ? 'mt-3' : 'mt-1'}`}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {note && note !== body && (
          <p className="operational-module-tile__note mt-4 mb-0 text-xs leading-relaxed text-muted">{note}</p>
        )}
      </div>
    </article>
  );
}

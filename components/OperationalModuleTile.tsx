import Image from 'next/image';

interface OperationalModuleTileProps {
  image?: string;
  visual?: 'readiness' | 'seasonal' | 'access';
  marker: string;
  mode: 'featured' | 'compact';
  label: string;
  title: string;
  body: string;
  items: string[];
  note?: string;
}

function ModuleVisual({ visual }: { visual: NonNullable<OperationalModuleTileProps['visual']> }) {
  return (
    <div className="module-tile-visual module-tile-visual--diagram bg-surface-light-alt p-4" aria-hidden="true">
      <svg viewBox="0 0 360 270" className="h-full w-full">
        <rect width="360" height="270" rx="18" fill="var(--surface-card)" stroke="var(--structural-light)" />
        <path d="M44 58h272M44 212h272" stroke="var(--structural-light)" strokeWidth="1.5" />
        <ellipse cx="180" cy="146" rx="122" ry="74" fill="var(--support)" opacity="0.07" />
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
              <path d="M104 84h152v116H104Z" />
              <path d="M104 124h152M150 84v116M206 84v116" />
              <path d="M92 218h176" />
              <path d="M130 232h100" />
              <path d="M122 104h20M178 146h20M226 170h20" stroke="var(--accent)" opacity="0.86" />
            </>
          )}
          {visual === 'access' && (
            <>
              <rect x="106" y="74" width="98" height="132" rx="8" />
              <path d="M130 114h58M130 150h38" />
              <path d="M204 190l42 42M246 190l38 38" />
              <circle cx="250" cy="112" r="18" />
              <path d="M268 112h44M292 112v24" stroke="var(--accent)" opacity="0.86" />
            </>
          )}
        </g>
        <g fill="var(--accent)" opacity="0.82">
          <circle cx="76" cy="58" r="8" />
          <circle cx="286" cy="214" r="8" />
        </g>
        <g stroke="var(--support)" strokeDasharray="5 9" strokeWidth="2" opacity="0.46">
          <path d="M82 198c68-52 132-54 196-8" fill="none" />
        </g>
      </svg>
    </div>
  );
}

export default function OperationalModuleTile({
  image,
  visual,
  marker,
  mode,
  label,
  title,
  body,
  items,
  note,
}: OperationalModuleTileProps) {
  const showBody = body.trim().length > 0 && !items.includes(body);

  return (
    <article className={`operational-module-tile operational-module-tile--${mode} visual-card overflow-hidden ${image ? 'operational-module-tile--photo' : 'operational-module-tile--diagram'}`}>
      {visual ? (
        <ModuleVisual visual={visual} />
      ) : image ? (
        <div
          className={`module-tile-visual module-tile-visual--photo relative ${mode === 'featured' ? 'module-tile-visual--featured' : ''}`}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes={mode === 'featured' ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
            className={mode === 'featured' ? 'module-tile-visual__image' : 'object-cover'}
          />
          {mode !== 'featured' && <span className="module-tile-visual__frame" aria-hidden="true" />}
          <span className="module-tile-visual__marker" aria-hidden="true">{marker}</span>
        </div>
      ) : null}
      <div className="operational-module-tile__content p-4 md:p-5">
        <div className="operational-module-tile__header">
          <span>{marker}</span>
          <p className="operational-module-tile__label mb-0 text-[10px] font-black uppercase text-accent">
            {label}
          </p>
        </div>
        <h3 className="mb-3 text-lg font-black leading-snug text-heading md:text-xl">{title}</h3>
        {showBody && <p className="mb-0 text-sm leading-relaxed text-body">{body}</p>}
        <ul className={`operational-module-tile__list space-y-2 text-sm leading-relaxed text-body ${showBody ? 'mt-3' : 'mt-1'}`}>
          {items.map((item) => (
            <li key={item}>
              <span aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {note && note !== body && (
          <p className="operational-module-tile__note mt-4 mb-0 text-xs leading-relaxed text-muted">{note}</p>
        )}
      </div>
    </article>
  );
}

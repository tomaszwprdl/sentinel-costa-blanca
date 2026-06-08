interface OneMinuteItem {
  marker: string;
  title: string;
  body: string;
}

interface OneMinuteSectionProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: OneMinuteItem[];
}

export default function OneMinuteSection({
  eyebrow,
  title,
  intro,
  items,
}: OneMinuteSectionProps) {
  return (
    <div className="visual-card-strong overflow-hidden">
      <div className="module-header-band">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="grid gap-0 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div className="hidden border-b border-structural-light bg-surface-light-alt p-5 md:p-7 lg:block lg:border-b-0 lg:border-r">
          <div className="rounded-2xl border border-structural-light bg-surface-card p-4">
            <div className="process-sequence grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
              {items.map((item, index) => (
                <div key={item.marker} className="contents">
                  <span className="process-node flex h-10 w-10 items-center justify-center rounded-full bg-authority-bg text-xs font-black text-authority-on-dark">
                    {item.marker}
                  </span>
                  <div className="border-b border-structural-light pb-3 last:border-b-0">
                    <p className="mb-0 text-sm font-black leading-snug text-heading">{item.title}</p>
                    {index < items.length - 1 && <span className="mt-3 block h-5 w-px bg-structural-light" aria-hidden />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="process-sequence grid gap-0 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.marker}
            className={[
              'border-b border-structural-light p-4 last:border-b-0 md:p-7 [&:nth-child(odd)]:md:border-r',
              ['module-card-tone-1', 'module-card-tone-2', 'module-card-tone-3'][index % 3],
            ].join(' ')}
          >
            <p className="mb-3 text-[11px] font-black uppercase tracking-wide text-accent">{item.marker}</p>
            <h3 className="mb-3 text-xl font-black text-heading">{item.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
          </article>
        ))}
        </div>
      </div>
    </div>
  );
}

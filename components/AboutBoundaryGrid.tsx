interface BoundaryItem {
  title: string;
  body: string;
}

interface AboutBoundaryGridProps {
  eyebrow: string;
  title: string;
  intro: string;
  isTitle: string;
  isNotTitle: string;
  isItems: BoundaryItem[];
  isNotItems: BoundaryItem[];
}

function BoundaryColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: BoundaryItem[];
  tone: 'positive' | 'negative';
}) {
  return (
    <div className="visual-card p-5 md:p-6">
      <h3 className="mb-5 text-xl font-black text-heading">{title}</h3>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-2xl border border-structural-light bg-surface-light-alt p-4"
          >
            <p className={`mb-2 text-[11px] font-black uppercase tracking-wide ${tone === 'positive' ? 'text-accent' : 'text-muted'}`}>
              {String(index + 1).padStart(2, '0')}
            </p>
            <h4 className="mb-1 text-base font-black text-heading">{item.title}</h4>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function AboutBoundaryGrid({
  eyebrow,
  title,
  intro,
  isTitle,
  isNotTitle,
  isItems,
  isNotItems,
}: AboutBoundaryGridProps) {
  return (
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <BoundaryColumn title={isTitle} items={isItems} tone="positive" />
        <BoundaryColumn title={isNotTitle} items={isNotItems} tone="negative" />
      </div>
    </div>
  );
}

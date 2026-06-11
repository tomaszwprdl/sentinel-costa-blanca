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
  tone: 'is' | 'isnot';
}) {
  return (
    <div className={`about-boundary-board__col about-boundary-board__col--${tone}`}>
      <h3 className="about-boundary-board__title">{title}</h3>
      <div className="about-boundary-board__items">
        {items.map((item, index) => (
          <article key={item.title} className="about-boundary-board__item">
            <p className="about-boundary-board__marker">
              {String(index + 1).padStart(2, '0')}
            </p>
            <div>
              <h4 className="mb-1 text-base font-black text-heading">{item.title}</h4>
              <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
            </div>
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
      <div className="about-boundary-board reveal-rise">
        <BoundaryColumn title={isTitle} items={isItems} tone="is" />
        <BoundaryColumn title={isNotTitle} items={isNotItems} tone="isnot" />
      </div>
    </div>
  );
}

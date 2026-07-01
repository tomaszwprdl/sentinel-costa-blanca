interface AssumptionItem {
  assumption: string;
  boundary: string;
}

interface FAQWrongAssumptionsProps {
  eyebrow: string;
  title: string;
  intro: string;
  assumptionLabel: string;
  boundaryLabel: string;
  items: AssumptionItem[];
}

export default function FAQWrongAssumptions({
  eyebrow,
  title,
  intro,
  assumptionLabel,
  boundaryLabel,
  items,
}: FAQWrongAssumptionsProps) {
  return (
    <div className="faq-boundary-strip reveal-rise">
      <div className="faq-boundary-strip__header">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 text-body">{intro}</p>
      </div>
      <div className="faq-boundary-strip__board" role="list">
        {items.map((item, index) => (
          <article key={item.assumption} className="faq-boundary-strip__tile" role="listitem">
            <div className="faq-boundary-strip__tile-top">
              <span className="faq-boundary-strip__marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="faq-boundary-strip__label faq-boundary-strip__label--wrong">{assumptionLabel}</p>
            </div>
            <div className="faq-boundary-strip__tile-body">
              <p className="faq-boundary-strip__assumption">{item.assumption}</p>
              <div className="faq-boundary-strip__correction">
                <p className="faq-boundary-strip__label faq-boundary-strip__label--right">{boundaryLabel}</p>
                <p className="faq-boundary-strip__boundary">{item.boundary}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

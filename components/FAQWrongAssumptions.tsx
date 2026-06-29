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
      <div className="faq-boundary-strip__grid">
        {items.map((item) => (
          <article key={item.assumption} className="faq-boundary-strip__item">
            <div>
              <p className="faq-boundary-strip__label faq-boundary-strip__label--wrong">{assumptionLabel}</p>
              <p className="faq-boundary-strip__assumption">{item.assumption}</p>
            </div>
            <div>
              <p className="faq-boundary-strip__label faq-boundary-strip__label--right">{boundaryLabel}</p>
              <p className="faq-boundary-strip__boundary">{item.boundary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

interface BoundaryItem {
  label: string;
  value: string;
}

interface FAQBoundaryPanelProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: BoundaryItem[];
}

export default function FAQBoundaryPanel({
  eyebrow,
  title,
  intro,
  items,
}: FAQBoundaryPanelProps) {
  return (
    <div className="faq-boundary-registry reveal-rise">
      <div className="faq-boundary-registry__intro">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <ol className="faq-boundary-registry__list">
        {items.map((item, index) => (
          <li key={item.label} className="faq-boundary-registry__item">
            <span className="faq-boundary-registry__marker" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="faq-boundary-registry__content">
              <h3 className="faq-boundary-registry__label">{item.label}</h3>
              <p className="faq-boundary-registry__value">{item.value}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

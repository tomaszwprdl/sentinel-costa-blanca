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
    <div className="faq-boundary-console">
      <div className="faq-boundary-console__header px-5 py-6 md:px-8">
        <p className="section-label faq-boundary-console__eyebrow">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch]">{intro}</p>
      </div>
      <div className="faq-boundary-console__items">
        {items.map((item, index) => (
          <article key={item.label} className="faq-boundary-console__item p-5 md:p-6">
            <p className="faq-boundary-console__marker">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-2 text-base font-black">{item.label}</h3>
            <p className="mb-0 text-sm leading-relaxed">{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

interface AssumptionItem {
  assumption: string;
  boundary: string;
}

interface FAQWrongAssumptionsProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: AssumptionItem[];
}

export default function FAQWrongAssumptions({
  eyebrow,
  title,
  intro,
  items,
}: FAQWrongAssumptionsProps) {
  return (
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      <div className="faq-assumption-ledger reveal-rise">
        {items.map((item) => (
          <article key={item.assumption} className="faq-assumption-ledger__row">
            <p className="faq-assumption-ledger__assumption">{item.assumption}</p>
            <p className="faq-assumption-ledger__boundary">{item.boundary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

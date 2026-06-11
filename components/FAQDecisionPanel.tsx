import Link from 'next/link';

interface DecisionItem {
  title: string;
  body: string;
  href?: string;
  label?: string;
}

interface FAQDecisionPanelProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: DecisionItem[];
}

export default function FAQDecisionPanel({
  eyebrow,
  title,
  intro,
  items,
}: FAQDecisionPanelProps) {
  return (
    <div className="faq-shell">
      <div className="faq-shell__header px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="faq-decision-strip">
        {items.map((item) => (
          <article key={item.title} className="faq-decision-strip__cell flex flex-col p-5 md:p-6">
            <h3 className="mb-3 text-lg font-black text-heading">{item.title}</h3>
            <p className="text-sm leading-relaxed text-body">{item.body}</p>
            {item.href && item.label && (
              <Link href={item.href} className="btn-secondary mt-auto w-full text-sm">
                {item.label}
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

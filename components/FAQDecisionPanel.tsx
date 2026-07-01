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
    <div className="faq-shell faq-shell--decision reveal-rise">
      <div className="faq-shell__header faq-shell__header--decision">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="faq-decision-strip">
        {items.map((item, index) => (
          <article key={item.title} className="faq-decision-strip__cell" data-has-route={item.href ? 'true' : 'false'}>
            <span className="faq-decision-strip__marker" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="faq-decision-strip__copy">
              <h3 className="faq-decision-strip__title">{item.title}</h3>
              <p className="faq-decision-strip__body">{item.body}</p>
            </div>
            {item.href && item.label && (
              <Link href={item.href} className="faq-decision-strip__cta btn-secondary">
                {item.label}
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

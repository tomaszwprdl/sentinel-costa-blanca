import Link from 'next/link';

interface QuickAnswer {
  title: string;
  answer: string;
  href: string;
  linkLabel: string;
}

interface FAQQuickAnswerCardsProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: QuickAnswer[];
}

export default function FAQQuickAnswerCards({
  eyebrow,
  title,
  intro,
  items,
}: FAQQuickAnswerCardsProps) {
  return (
    <div className="faq-shell faq-shell--quick reveal-rise">
      <div className="faq-shell__header faq-shell__header--quick">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="faq-quick-board">
        {items.map((item, index) => (
          <article key={item.title} className="faq-quick-board__cell">
            <p className="faq-quick-board__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="faq-quick-board__title">{item.title}</h3>
            <p className="faq-quick-board__answer">{item.answer}</p>
            <Link href={item.href} className="faq-quick-board__link link-system">
              {item.linkLabel}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

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
    <div className="faq-shell">
      <div className="faq-shell__header px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="faq-quick-board">
        {items.map((item, index) => (
          <article key={item.title} className="faq-quick-board__cell flex flex-col p-5 md:p-6">
            <p className="faq-index-marker mb-3">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-2 text-lg font-black text-heading">{item.title}</h3>
            <p className="text-sm leading-relaxed text-body">{item.answer}</p>
            <Link href={item.href} className="link-system mt-auto pt-4 text-sm font-black">
              {item.linkLabel}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

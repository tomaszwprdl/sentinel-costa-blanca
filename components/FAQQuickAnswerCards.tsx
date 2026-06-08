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
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      <div className="process-sequence grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.title} className="visual-card flex h-full flex-col p-5">
            <p className="mb-4 text-[11px] font-black uppercase tracking-wide text-accent">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-3 text-lg font-black text-heading">{item.title}</h3>
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

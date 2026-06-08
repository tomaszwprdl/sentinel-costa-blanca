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
    <div className="visual-card-strong overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="process-sequence grid gap-0 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="border-b border-structural-light p-5 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0"
          >
            <h3 className="mb-3 text-lg font-black text-heading">{item.title}</h3>
            <p className="text-sm leading-relaxed text-body">{item.body}</p>
            {item.href && item.label && (
              <Link href={item.href} className="btn-secondary mt-4 w-full text-sm">
                {item.label}
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

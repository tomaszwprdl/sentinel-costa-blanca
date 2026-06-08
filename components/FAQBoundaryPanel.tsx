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
    <div className="visual-card-strong overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="grid gap-0 md:grid-cols-5">
        {items.map((item, index) => (
          <article
            key={item.label}
            className="border-b border-structural-light p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <p className="mb-3 text-[11px] font-black uppercase tracking-wide text-accent">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-2 text-base font-black text-heading">{item.label}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

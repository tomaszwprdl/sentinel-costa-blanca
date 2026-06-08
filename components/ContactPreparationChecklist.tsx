interface PreparationItem {
  marker: string;
  title: string;
  body: string;
}

interface ContactPreparationChecklistProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: PreparationItem[];
}

export default function ContactPreparationChecklist({
  eyebrow,
  title,
  intro,
  items,
}: ContactPreparationChecklistProps) {
  return (
    <div className="visual-card-strong overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.marker}
            className="border-b border-structural-light p-5 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
          >
            <p className="mb-4 text-3xl font-black text-accent">{item.marker}</p>
            <h3 className="mb-2 text-lg font-black text-heading">{item.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

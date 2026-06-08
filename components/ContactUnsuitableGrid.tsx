interface UnsuitableItem {
  title: string;
  body: string;
}

interface ContactUnsuitableGridProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: UnsuitableItem[];
}

export default function ContactUnsuitableGrid({
  eyebrow,
  title,
  intro,
  items,
}: ContactUnsuitableGridProps) {
  return (
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.title} className="visual-card p-5">
            <p className="mb-3 text-[11px] font-black uppercase tracking-wide text-muted">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-2 text-lg font-black text-heading">{item.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

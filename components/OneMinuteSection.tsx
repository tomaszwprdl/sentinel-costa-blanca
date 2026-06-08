interface OneMinuteItem {
  marker: string;
  title: string;
  body: string;
}

interface OneMinuteSectionProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: OneMinuteItem[];
}

export default function OneMinuteSection({
  eyebrow,
  title,
  intro,
  items,
}: OneMinuteSectionProps) {
  return (
    <div className="visual-card-strong overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="grid gap-0 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.marker} className="border-b border-structural-light p-5 last:border-b-0 md:p-7 [&:nth-child(odd)]:md:border-r">
            <p className="mb-3 text-4xl font-black text-accent">{item.marker}</p>
            <h3 className="mb-3 text-xl font-black text-heading">{item.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

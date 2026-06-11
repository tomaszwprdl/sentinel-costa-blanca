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
    <div className="contact-shell">
      <div className="contact-shell__header px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="contact-prepare-grid">
        {items.map((item) => (
          <article key={item.marker} className="contact-prepare-grid__cell p-5 md:p-6">
            <p className="contact-marker-chip mb-4">{item.marker}</p>
            <h3 className="mb-2 text-lg font-black text-heading">{item.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

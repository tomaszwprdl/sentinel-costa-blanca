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
    <div>
      <div className="reveal-rise">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3 max-w-[26ch]">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="contact-prepare-rail reveal-stagger">
        {items.map((item) => (
          <article key={item.marker} className="contact-prepare-rail__cell">
            <p className="contact-prepare-rail__num" aria-hidden>{item.marker}</p>
            <h3 className="contact-prepare-rail__title">{item.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

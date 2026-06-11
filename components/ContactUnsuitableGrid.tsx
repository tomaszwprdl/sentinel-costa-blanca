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
      <div className="contact-unsuitable-ledger">
        {items.map((item, index) => (
          <article key={item.title} className="contact-unsuitable-ledger__item">
            <p className="contact-unsuitable-ledger__marker">
              {String(index + 1).padStart(2, '0')}
            </p>
            <div>
              <h3 className="mb-1 text-base font-black text-heading">{item.title}</h3>
              <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

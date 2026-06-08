interface AssumptionItem {
  assumption: string;
  boundary: string;
}

interface FAQWrongAssumptionsProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: AssumptionItem[];
}

export default function FAQWrongAssumptions({
  eyebrow,
  title,
  intro,
  items,
}: FAQWrongAssumptionsProps) {
  return (
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.assumption} className="visual-card p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-wide text-muted">{item.assumption}</p>
            <div className="rounded-lg bg-surface-light-alt p-4">
              <p className="mb-0 text-sm font-semibold leading-relaxed text-body">{item.boundary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

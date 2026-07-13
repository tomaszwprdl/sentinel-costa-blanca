export type VisitCheckCategory = {
  key: string;
  title: string;
  body: string;
};

type VisitChecklistProps = {
  eyebrow: string;
  title: string;
  intro: string;
  scopeNote: string;
  categories: VisitCheckCategory[];
};

export default function VisitChecklist({
  eyebrow,
  title,
  intro,
  scopeNote,
  categories,
}: VisitChecklistProps) {
  return (
    <div className="hiw-checks">
      <div className="hiw-checks__intro">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[58ch] text-body">{intro}</p>
      </div>

      <ul className="hiw-checks__grid">
        {categories.map((category) => (
          <li key={category.key} className="hiw-checks__card" data-check-key={category.key}>
            <span className="hiw-checks__mark" aria-hidden="true" />
            <h3 className="hiw-checks__card-title">{category.title}</h3>
            <p className="hiw-checks__card-body">{category.body}</p>
          </li>
        ))}
      </ul>

      <p className="hiw-checks__note">{scopeNote}</p>
    </div>
  );
}

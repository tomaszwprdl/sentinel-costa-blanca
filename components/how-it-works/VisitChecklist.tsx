import Image from 'next/image';

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
  exampleLabel: string;
  imageAlt: string;
  categories: VisitCheckCategory[];
};

export default function VisitChecklist({
  eyebrow,
  title,
  intro,
  scopeNote,
  exampleLabel,
  imageAlt,
  categories,
}: VisitChecklistProps) {
  return (
    <div className="hiw-checks hiw-checks--matrix">
      <div className="hiw-checks__intro">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[58ch] text-body">{intro}</p>
      </div>

      <div className="hiw-checks__body">
        <figure className="hiw-checks__figure">
          <Image
            src="/images/how-it-works-inspection-matrix.webp"
            alt={imageAlt}
            width={4005}
            height={2992}
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 60vw, 680px"
            className="hiw-checks__image"
          />
          <figcaption className="hiw-checks__caption">{exampleLabel}</figcaption>
        </figure>

        <ol className="hiw-checks__legend" aria-label={title}>
          {categories.map((category, index) => (
            <li key={category.key} className="hiw-checks__legend-item" data-check-key={category.key}>
              <span className="hiw-checks__legend-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="hiw-checks__legend-copy">
                <h3 className="hiw-checks__legend-title">{category.title}</h3>
                <p className="hiw-checks__legend-body">{category.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="hiw-checks__note">{scopeNote}</p>
    </div>
  );
}

import Image from 'next/image';

type ObservationSchematicProps = {
  eyebrow: string;
  observation: string;
  exampleLabel: string;
  routeImageAlt: string;
  chips: string[];
};

export default function ObservationSchematic({
  eyebrow,
  observation,
  exampleLabel,
  routeImageAlt,
  chips,
}: ObservationSchematicProps) {
  return (
    <aside className="hiw-case-thread" aria-label={eyebrow}>
      <div className="hiw-case-thread__lead">
        <p className="hiw-case-thread__eyebrow">{eyebrow}</p>
        <p className="hiw-case-thread__observation">{observation}</p>
        <span className="hiw-case-thread__example">{exampleLabel}</span>
      </div>

      <figure className="hiw-case-thread__figure">
        <Image
          src="/images/how-it-works-case-route.webp"
          alt={routeImageAlt}
          width={4008}
          height={2993}
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 92vw, 1040px"
          className="hiw-case-thread__image"
        />
      </figure>

      <ol className="hiw-case-thread__route">
        {chips.map((label, index) => (
          <li key={label} className="hiw-case-thread__step">
            <span
              className="hiw-case-thread__chip"
              data-threshold={index === chips.length - 1}
            >
              <span className="hiw-case-thread__chip-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="hiw-case-thread__chip-label">{label}</span>
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

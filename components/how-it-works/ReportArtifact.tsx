import Image from 'next/image';

export type ReportMeaningCard = {
  key: string;
  title: string;
  body: string;
};

type ReportArtifactProps = {
  eyebrow: string;
  title: string;
  intro: string;
  photoAlt: string;
  cards: ReportMeaningCard[];
  exampleLabel: string;
};

const CARD_ICONS: Record<string, React.ReactNode> = {
  observation: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M15.8 15.8 21 21" />
    </>
  ),
  evidence: (
    <>
      <rect x="4" y="3.5" width="12" height="16" rx="1.6" />
      <path d="M8 8.5h5M8 12h5M8 15.5h3" />
      <path d="M15.5 15.5 20.5 20.5" />
    </>
  ),
  next: (
    <>
      <path d="M4 12h13.5" />
      <path d="M12.5 6.5 18.5 12l-6 5.5" />
    </>
  ),
};

export default function ReportArtifact({
  eyebrow,
  title,
  intro,
  photoAlt,
  cards,
  exampleLabel,
}: ReportArtifactProps) {
  return (
    <div className="hiw-report">
      <div className="hiw-report__intro">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="hiw-report__lead mt-3">{intro}</p>
      </div>

      <div className="hiw-report__board">
        <figure className="hiw-report__stage">
          <Image
            src="/images/how-it-works-report-photo.webp"
            alt={photoAlt}
            width={2200}
            height={1482}
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 60vw, 640px"
            className="hiw-report__image"
          />
        </figure>

        <p className="hiw-report__disclaimer">
          <span className="hiw-report__disclaimer-mark" aria-hidden="true" />
          {exampleLabel}
        </p>

        <ol className="hiw-report__cards" aria-label={title}>
          {cards.map((card, index) => (
            <li key={card.key} className="hiw-report__card" data-card={card.key}>
              <span className="hiw-report__card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {CARD_ICONS[card.key] ?? CARD_ICONS.observation}
                </svg>
              </span>
              <div className="hiw-report__card-copy">
                <span className="hiw-report__card-step" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="hiw-report__card-title">{card.title}</h3>
                <p className="hiw-report__card-body">{card.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

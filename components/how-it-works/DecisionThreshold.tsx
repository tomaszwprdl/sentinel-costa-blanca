import Link from 'next/link';

export type DecisionThresholdCase = {
  key: string;
  tag: string;
  title: string;
  body: string;
};

type DecisionThresholdProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cases: DecisionThresholdCase[];
  servicesNote: string;
  servicesCta: string;
  servicesHref: string;
};

export default function DecisionThreshold({
  eyebrow,
  title,
  intro,
  cases,
  servicesNote,
  servicesCta,
  servicesHref,
}: DecisionThresholdProps) {
  return (
    <div className="hiw-threshold">
      <div className="hiw-threshold__intro">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[58ch] text-body">{intro}</p>
      </div>

      <ol className="hiw-threshold__cases">
        {cases.map((item, index) => (
          <li key={item.key} className="hiw-threshold__case" data-case-key={item.key}>
            <span className="hiw-threshold__case-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span className="hiw-threshold__case-tag">{item.tag}</span>
            <h3 className="hiw-threshold__case-title">{item.title}</h3>
            <p className="hiw-threshold__case-body">{item.body}</p>
          </li>
        ))}
      </ol>

      <div className="hiw-threshold__services">
        <p>{servicesNote}</p>
        <Link href={servicesHref} className="hiw-threshold__services-link">
          {servicesCta}
        </Link>
      </div>
    </div>
  );
}

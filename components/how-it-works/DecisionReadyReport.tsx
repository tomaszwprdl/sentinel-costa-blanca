export type DecisionReadyReportContent = {
  ribbon: string;
  context: string[];
  headline: string;
  finding: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
  };
  evidenceTitle: string;
  evidence: {
    label: string;
    detail: string;
  }[];
  decisionTitle: string;
  decision: {
    label: string;
    value: string;
  }[];
  nextActionLabel: string;
  nextAction: string;
};

export type DecisionReadyReportLimits = {
  title: string;
  protectiveTitle: string;
  protectiveIntro: string;
  authorityTitle: string;
  authorityScope: string;
  standard: string;
  optional: string;
  approval: string;
  note: string;
};

type DecisionReadyReportProps = {
  report: DecisionReadyReportContent;
  limits: DecisionReadyReportLimits;
};

export default function DecisionReadyReport({ report, limits }: DecisionReadyReportProps) {
  return (
    <article className="hiw-decision-report" aria-label={report.ribbon}>
      <header className="hiw-decision-report__masthead">
        <div className="hiw-decision-report__ribbon-row">
          <p className="hiw-decision-report__ribbon">{report.ribbon}</p>
          <ul className="hiw-decision-report__context" aria-label={report.ribbon}>
            {report.context.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <h3>{report.headline}</h3>
      </header>

      <div className="hiw-decision-report__layout">
        <div className="hiw-decision-report__main">
          <section className="hiw-decision-report__finding" aria-label={report.finding.eyebrow}>
            <p>{report.finding.eyebrow}</p>
            <h4>{report.finding.title}</h4>
            <span>{report.finding.body}</span>
            <em>{report.finding.note}</em>
          </section>

          <section className="hiw-decision-report__evidence" aria-label={report.evidenceTitle}>
            <div className="hiw-decision-report__section-head">
              <span>{report.evidenceTitle}</span>
            </div>
            <ul>
              {report.evidence.map((slot, index) => (
                <li key={slot.label}>
                  <span className="hiw-decision-report__evidence-mark" data-slot={index + 1} aria-hidden="true" />
                  <div>
                    <strong>{slot.label}</strong>
                    <span>{slot.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="hiw-decision-report__side">
          <section className="hiw-decision-report__stamp" aria-label={report.decisionTitle}>
            <p>{report.decisionTitle}</p>
            <dl>
              {report.decision.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="hiw-decision-report__next" aria-label={report.nextActionLabel}>
            <p>{report.nextActionLabel}</p>
            <strong>{report.nextAction}</strong>
          </section>
        </aside>
      </div>

      <footer className="hiw-decision-report__appendix">
        <p className="hiw-decision-report__appendix-title">{limits.title}</p>
        <p>
          <strong>{limits.protectiveTitle}</strong>
          {' '}
          {limits.protectiveIntro}
        </p>
        <p>
          <strong>{limits.authorityTitle}</strong>
          {' '}
          {limits.authorityScope}
          {' '}
          {limits.standard}
          {' / '}
          {limits.optional}
          {'. '}
          {limits.approval}
        </p>
        <p className="hiw-decision-report__appendix-note">{limits.note}</p>
      </footer>
    </article>
  );
}

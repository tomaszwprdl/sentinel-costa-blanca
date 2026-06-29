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
  checklistTitle: string;
  checklist: {
    label: string;
    status: string;
    tone: 'ok' | 'observation';
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
            <div className="hiw-decision-report__evidence-grid">
              {report.evidence.map((slot, index) => (
                <figure key={slot.label} className="hiw-decision-report__evidence-slot">
                  <div className="hiw-decision-report__evidence-visual" data-slot={index + 1} aria-hidden="true">
                    <span />
                  </div>
                  <figcaption>
                    <strong>{slot.label}</strong>
                    <span>{slot.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="hiw-decision-report__checklist" aria-label={report.checklistTitle}>
            <div className="hiw-decision-report__section-head">
              <span>{report.checklistTitle}</span>
            </div>
            <ul>
              {report.checklist.map((row) => (
                <li key={row.label} data-tone={row.tone}>
                  <span>{row.label}</span>
                  <strong>{row.status}</strong>
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
        <div className="hiw-decision-report__appendix-grid">
          <section>
            <strong>{limits.protectiveTitle}</strong>
            <p>{limits.protectiveIntro}</p>
          </section>
          <section>
            <strong>{limits.authorityTitle}</strong>
            <p>{limits.authorityScope}</p>
            <ul>
              <li>{limits.standard}</li>
              <li>{limits.optional}</li>
            </ul>
            <p>{limits.approval}</p>
          </section>
        </div>
        <p className="hiw-decision-report__appendix-note">{limits.note}</p>
      </footer>
    </article>
  );
}

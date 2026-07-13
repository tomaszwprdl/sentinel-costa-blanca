export type ProcedureJourneyStep = {
  key: string;
  marker?: string;
  title: string;
  body: string;
  artifactTitle: string;
  artifactItems: string[];
};

export type ProcedureJourneyRule = {
  label: string;
  value: string;
};

type ProcedureJourneyProps = {
  eyebrow: string;
  title: string;
  intro: string;
  ruleEyebrow: string;
  ruleTitle: string;
  rules: ProcedureJourneyRule[];
  steps: ProcedureJourneyStep[];
  thresholdDeviceLabel: string;
  closureDeviceLabel: string;
  caseLabel: string;
  caseTitle: string;
  caseBody: string;
  caseStatus: string;
};

export default function ProcedureJourney({
  eyebrow,
  title,
  intro,
  ruleEyebrow,
  ruleTitle,
  rules,
  steps,
  thresholdDeviceLabel,
  closureDeviceLabel,
  caseLabel,
  caseTitle,
  caseBody,
  caseStatus,
}: ProcedureJourneyProps) {
  return (
    <div className="hiw-path">
      <div className="hiw-path__intro">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[60ch] text-body">{intro}</p>
      </div>

      <div className="hiw-path__board">
      <ol className="hiw-path__steps">
        {steps.map((step, index) => (
          <li
            key={step.key}
            className="hiw-path__step"
            data-stage-key={step.key}
          >
            <div className="hiw-path__node" aria-hidden="true">
              <span className="hiw-path__marker">{step.marker ?? String(index + 1).padStart(2, '0')}</span>
            </div>
              <div className="hiw-path__panel">
                <h3 className="hiw-path__step-title">{step.title}</h3>
                <div className="hiw-path__artifact">
                  <span className="hiw-path__artifact-label">{step.artifactTitle}</span>
                </div>
              {step.key === 'decision' ? (
                <span className="hiw-path__flag hiw-path__flag--threshold">{thresholdDeviceLabel}</span>
              ) : null}
              {step.key === 'action' ? (
                <span className="hiw-path__flag hiw-path__flag--closure">{closureDeviceLabel}</span>
              ) : null}
            </div>
          </li>
        ))}
        </ol>

        <article className="hiw-path__case-file">
          <div className="hiw-path__case-head">
            <span>{caseLabel}</span>
            <strong>{caseStatus}</strong>
          </div>
          <div className="hiw-path__case-body">
            <span className="hiw-path__case-index" aria-hidden="true">OBS / 01</span>
            <h3>{caseTitle}</h3>
            <p>{caseBody}</p>
            <div className="hiw-path__case-route" aria-hidden="true">
              {steps.map((step, index) => (
                <span key={step.key} data-threshold={step.key === 'decision'}>{String(index + 1).padStart(2, '0')}</span>
              ))}
            </div>
          </div>
        </article>

      <aside className="hiw-path__rules" aria-label={ruleTitle}>
        <div className="hiw-path__rules-head">
          <span>{ruleEyebrow}</span>
          <strong>{ruleTitle}</strong>
        </div>
        <ul className="hiw-path__rules-list">
          {rules.map((rule) => (
            <li key={rule.label}>
              <span>{rule.label}</span>
              <p>{rule.value}</p>
            </li>
          ))}
        </ul>
      </aside>
      </div>
    </div>
  );
}

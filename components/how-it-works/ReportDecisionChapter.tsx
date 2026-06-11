import DisclosureBlock from '@/components/DisclosureBlock';
import SampleInspectionReport from '@/components/SampleInspectionReport';
import ReportEvidenceDiagram from '@/components/visuals/ReportEvidenceDiagram';
import ReportDecisionLimits from '@/components/how-it-works/ReportDecisionLimits';

type Translator = (key: string, values?: Record<string, string | number | Date>) => string;

const WALKTHROUGH_KEYS = ['summary', 'checklist', 'photos', 'notes', 'nextAction'] as const;
const DECISION_KEYS = ['observe', 'document', 'notify', 'withinLimit', 'ownerApproval'] as const;

export default function ReportDecisionChapter({ t }: { t: Translator }) {
  return (
    <div className="hiw-report-decision" id="report-decision">
      <header className="hiw-chapter-header max-w-[760px]">
        <p className="section-label">{t('redesign.report.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.report.title')}</h2>
        <p className="mt-3 text-body">{t('redesign.report.intro')}</p>
      </header>

      <div className="hiw-report-decision__grid">
        <section className="hiw-report-decision__evidence" aria-label={t('redesign.report.title')}>
          <ReportEvidenceDiagram className="motion-diagram" />
          <ol className="hiw-report-flow">
            {WALKTHROUGH_KEYS.map((key, index) => (
              <li key={key} className="hiw-report-flow__item">
                <span className="hiw-report-flow__marker">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="hiw-report-flow__title">{t(`redesign.report.items.${key}.title`)}</h3>
                  <p className="hiw-report-flow__body">{t(`redesign.report.items.${key}.body`)}</p>
                </div>
              </li>
            ))}
          </ol>
          <DisclosureBlock label={t('redesign.report.fullSampleLabel')} explainer={t('redesign.report.fullSampleExplainer')}>
            <SampleInspectionReport t={t} />
          </DisclosureBlock>
        </section>

        <section className="hiw-report-decision__authority" aria-label={t('redesign.decision.title')}>
          <p className="section-label">{t('redesign.decision.eyebrow')}</p>
          <h3 className="mt-2 text-xl font-black text-heading md:text-2xl">{t('redesign.decision.title')}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{t('redesign.decision.intro')}</p>

          <ol className="hiw-decision-ladder">
            {DECISION_KEYS.map((key, index) => (
              <li key={key} className="hiw-decision-ladder__step">
                <span className="hiw-decision-ladder__marker">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="hiw-decision-ladder__title">{t(`redesign.decision.steps.${key}.title`)}</h4>
                  <p className="hiw-decision-ladder__body">{t(`redesign.decision.steps.${key}.body`)}</p>
                </div>
              </li>
            ))}
          </ol>

          <ReportDecisionLimits />
        </section>
      </div>
    </div>
  );
}

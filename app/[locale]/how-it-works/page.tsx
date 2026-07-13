import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { type ProcedureJourneyStep } from '@/components/how-it-works/ProcedureJourney';
import DecisionReadyReport, { type DecisionReadyReportContent } from '@/components/how-it-works/DecisionReadyReport';
import DecisionThreshold, { type DecisionThresholdCase } from '@/components/how-it-works/DecisionThreshold';
import ObservationSchematic from '@/components/how-it-works/ObservationSchematic';

type RecordRow = {
  label: string;
  value: string;
};

const RHYTHM_KEYS = ['visits', 'reports', 'access', 'changes'] as const;

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'howItWorks' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const heroRows = t.raw('redesign.hero.registerRows') as RecordRow[];
  const procedureSteps = t.raw('redesign.procedure.steps') as ProcedureJourneyStep[];
  const sampleReport = t.raw('redesign.evidence.sampleReport') as DecisionReadyReportContent;
  const thresholdCases = t.raw('redesign.threshold.cases') as DecisionThresholdCase[];

  return (
    <>
      <HeaderClient />
      <main className="hiw-page hiw-procedure-page min-h-screen">
        <Section tone="authority" className="section-primitive--first hiw-hero hiw-procedure-hero" id="process-start">
          <span className="gfx-ruler" aria-hidden="true" />
          <div className="hiw-procedure-hero__grid">
            <div className="hiw-procedure-hero__copy motion-entrance">
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[16ch]">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead max-w-[58ch]">{t('redesign.hero.lead')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link href="#operational-path" className="btn-secondary btn-secondary-on-dark hiw-hero__secondary-cta">
                  {t('redesign.hero.secondaryCta')}
                </Link>
              </div>
            </div>

            <figure className="hiw-procedure-register motion-panel-reveal" aria-label={t('redesign.hero.registerTitle')}>
              <div className="hiw-procedure-register__header">
                <p>{t('redesign.hero.registerKicker')}</p>
                <strong>{t('redesign.hero.registerTitle')}</strong>
                <span>{t('redesign.hero.registerStatus')}</span>
              </div>
              <div className="hiw-procedure-register__body">
                <div className="hiw-procedure-register__rows">
                  {heroRows.map((row) => (
                    <div key={row.label} className="hiw-procedure-register__row">
                      <span>{row.label}</span>
                      <strong>{row.value}</strong>
                    </div>
                  ))}
                </div>
                <span className="hiw-procedure-register__stamp">{t('redesign.hero.registerStamp')}</span>
              </div>
            </figure>
          </div>
        </Section>

        <Section tone="light" id="operational-path" className="section-primitive--compact hiw-interface-section hiw-observation-section">
          <div className="hiw-observation-intro">
            <p className="section-label">{t('redesign.procedure.schematic.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.procedure.schematic.heading')}</h2>
          </div>
          <ObservationSchematic
            exampleLabel={t('redesign.procedure.schematic.exampleLabel')}
            title={t('redesign.procedure.schematic.title')}
            observationLabel={t('redesign.procedure.schematic.observationLabel')}
            observation={t('redesign.evidence.sampleReport.finding.title')}
            accessLabel={t('redesign.procedure.schematic.accessLabel')}
            accessValue={t('redesign.procedure.schematic.accessValue')}
            checkLabel={t('redesign.procedure.schematic.checkLabel')}
            checkValue={t('redesign.procedure.schematic.checkValue')}
            evidenceLabel={t('redesign.procedure.schematic.evidenceLabel')}
            evidenceValue={t('redesign.procedure.schematic.evidenceValue')}
            note={t('redesign.procedure.schematic.note')}
          />
          <div className="hiw-case-route hiw-case-route--attached" id="case-route">
            <p className="hiw-case-route__label">{t('redesign.procedure.eyebrow')}</p>
            <ol className="hiw-case-route__rail" aria-label={t('redesign.procedure.title')}>
              {procedureSteps.slice(1, 5).map((step, index) => (
                <li key={step.key} data-threshold={step.key === 'decision'}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step.title}</strong>
                  <p>{step.artifactTitle}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section tone="light" id="report-record" className="section-primitive--compact hiw-interface-section hiw-evidence-section">
          <div className="hiw-evidence-shell">
            <div className="hiw-evidence-shell__intro">
              <p className="section-label">{t('redesign.evidence.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.evidence.title')}</h2>
              <p className="mt-3 max-w-[62ch] text-body">{t('redesign.evidence.intro')}</p>
            </div>

            <DecisionReadyReport
              report={sampleReport}
              exampleLabel={t('redesign.evidence.exampleLabel')}
            />
          </div>
        </Section>

        <Section tone="authority" id="decision-threshold" className="section-primitive--compact hiw-interface-section hiw-threshold-section hiw-final-act">
          <DecisionThreshold
            eyebrow={t('redesign.threshold.eyebrow')}
            title={t('redesign.threshold.title')}
            intro={t('redesign.threshold.intro')}
            cases={thresholdCases}
            servicesNote={t('redesign.threshold.servicesNote')}
            servicesCta={t('redesign.threshold.servicesCta')}
            servicesHref={`/${locale}/services#package-fit`}
          />
          <div className="hiw-rhythm-band">
            <div className="hiw-rhythm-band__intro">
              <p className="section-label">{t('redesign.rhythm.eyebrow')}</p>
              <h2>{t('redesign.rhythm.title')}</h2>
            </div>
            <ul className="hiw-rhythm-band__list">
              {RHYTHM_KEYS.map((key) => (
                <li key={key} className="hiw-rhythm-band__item">
                  <h3>{t(`redesign.rhythm.cards.${key}.title`)}</h3>
                  <p>{t(`redesign.rhythm.cards.${key}.body`)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="hiw-handoff">
            <div className="hiw-handoff__copy">
              <p className="section-label">{t('cta.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('cta.title')}</h2>
              <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-body">{t('cta.body')}</p>
              <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-body">{t('cta.bodyFollowUp')}</p>
            </div>
            <div className="hiw-handoff__actions">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {t('cta.primaryCta')}
              </Link>
              <Link href={`/${locale}/services#package-fit`} className="btn-secondary btn-secondary-on-dark">
                {t('cta.secondaryCta')}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <MobileStickyCTA
        primaryHref={`/${locale}/contact`}
        primaryLabel={tCommon('nav.contact')}
        secondaryHref="#operational-path"
        secondaryLabel={t('redesign.procedure.eyebrow')}
        suppressWhenVisible="footer,.hiw-handoff,.hiw-section--support,#decision-threshold,#report-record,#operational-path"
      />
      <Footer />
    </>
  );
}

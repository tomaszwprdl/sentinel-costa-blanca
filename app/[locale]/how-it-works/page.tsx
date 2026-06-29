import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JourneyNav from '@/components/JourneyNav';
import ProcedureJourney from '@/components/how-it-works/ProcedureJourney';
import ReportDecisionLimits from '@/components/how-it-works/ReportDecisionLimits';

type RecordRow = {
  label: string;
  value: string;
};

type ProcedureStep = {
  key: string;
  title: string;
  body: string;
  artifactTitle: string;
  artifactItems: string[];
};

type EvidencePanel = {
  title: string;
  rows: RecordRow[];
};

const RHYTHM_KEYS = ['visits', 'reports', 'access', 'changes'] as const;

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'howItWorks' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const heroRows = t.raw('redesign.hero.registerRows') as RecordRow[];
  const procedureSteps = t.raw('redesign.procedure.steps') as ProcedureStep[];
  const procedureRules = t.raw('redesign.procedure.rules') as RecordRow[];
  const evidencePanels = t.raw('redesign.evidence.panels') as EvidencePanel[];
  const journeyItems = [
    { id: 'process-start', label: t('redesign.hero.eyebrow') },
    { id: 'procedure-corridor', label: t('redesign.procedure.eyebrow') },
    { id: 'report-decision', label: t('redesign.evidence.eyebrow') },
    { id: 'process-handoff', label: t('cta.eyebrow') },
  ];

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
                <Link href="#procedure-corridor" className="btn-secondary btn-secondary-on-dark hiw-hero__secondary-cta">
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
                <ol className="hiw-procedure-mini-rail" aria-label={t('redesign.procedure.title')}>
                  {procedureSteps.slice(1, 6).map((step) => (
                    <li key={step.key}>
                      <strong>{step.title}</strong>
                    </li>
                  ))}
                </ol>
                <span className="hiw-procedure-register__stamp">{t('redesign.hero.registerStamp')}</span>
              </div>
            </figure>
          </div>
        </Section>

        <JourneyNav items={journeyItems} ariaLabel={t('redesign.hero.headline')} className="hiw-journey-nav" />

        <Section tone="light" id="procedure-corridor" className="section-primitive--compact hiw-interface-section hiw-procedure-section">
          <ProcedureJourney
            eyebrow={t('redesign.procedure.eyebrow')}
            title={t('redesign.procedure.title')}
            intro={t('redesign.procedure.intro')}
            ruleEyebrow={t('redesign.procedure.rulesEyebrow')}
            ruleTitle={t('redesign.procedure.rulesTitle')}
            rules={procedureRules}
            steps={procedureSteps}
            thresholdDeviceLabel={t('redesign.procedure.thresholdDeviceLabel')}
            closureDeviceLabel={t('redesign.procedure.closureDeviceLabel')}
            visitRecordImageAlt={t('redesign.procedure.visitRecordImageAlt')}
          />
        </Section>

        <Section tone="alt" id="report-decision" className="section-primitive--compact hiw-interface-section hiw-evidence-section">
          <div className="hiw-evidence-shell">
            <div className="hiw-evidence-shell__intro">
              <p className="section-label">{t('redesign.evidence.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.evidence.title')}</h2>
              <p className="mt-3 max-w-[62ch] text-body">{t('redesign.evidence.intro')}</p>
            </div>

            <div className="hiw-evidence-grid">
              <section className="hiw-report-excerpt" aria-label={evidencePanels[0]?.title}>
                <div className="hiw-report-excerpt__top">
                  <span>{t('redesign.evidence.reportLabel')}</span>
                  <strong>{evidencePanels[0]?.title}</strong>
                </div>
                <div className="hiw-report-excerpt__rows">
                  {evidencePanels[0]?.rows.map((row) => (
                    <div key={row.label} className="hiw-report-excerpt__row">
                      <span>{row.label}</span>
                      <p>{row.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="hiw-threshold-console" aria-label={evidencePanels[1]?.title}>
                <div className="hiw-threshold-console__top">
                  <span>{t('redesign.evidence.thresholdLabel')}</span>
                  <strong>{evidencePanels[1]?.title}</strong>
                </div>
                <div className="hiw-threshold-console__rows">
                  {evidencePanels[1]?.rows.map((row) => (
                    <dl key={row.label} className="hiw-threshold-console__row">
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </dl>
                  ))}
                </div>
                <ReportDecisionLimits />
              </section>
            </div>
          </div>
        </Section>

        <Section tone="alt" className="section-primitive--compact hiw-interface-section hiw-section--support">
          <div className="hiw-action-log">
            <div>
              <p className="section-label">{t('redesign.rhythm.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.rhythm.title')}</h2>
            </div>
            <ul className="hiw-action-log__list">
              {RHYTHM_KEYS.map((key) => (
                <li key={key} className="hiw-action-log__item">
                  <h3>{t(`redesign.rhythm.cards.${key}.title`)}</h3>
                  <p>{t(`redesign.rhythm.cards.${key}.body`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="light" className="hiw-closing-section hiw-section--handoff" id="process-handoff">
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
        secondaryHref="#procedure-corridor"
        secondaryLabel={t('redesign.procedure.eyebrow')}
        suppressWhenVisible="footer,.hiw-handoff,.hiw-section--support,#report-decision"
      />
      <Footer />
    </>
  );
}

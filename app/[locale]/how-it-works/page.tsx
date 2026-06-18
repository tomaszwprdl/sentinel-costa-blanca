import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';
import ProcessDetailChapters from '@/components/ProcessDetailChapters';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JourneyNav from '@/components/JourneyNav';
import ReportDecisionLimits from '@/components/how-it-works/ReportDecisionLimits';

type RecordRow = {
  label: string;
  value: string;
};

type ProcedureStep = {
  key: string;
  marker: string;
  title: string;
  body: string;
  artifactTitle: string;
  artifactItems: string[];
};

type EvidencePanel = {
  title: string;
  rows: RecordRow[];
};

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'] as const;
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
    { id: 'onboarding-detail', label: t('redesign.details.eyebrow') },
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
                      <span>{step.marker}</span>
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
          <div className="hiw-procedure-shell">
            <div className="hiw-procedure-shell__intro">
              <p className="section-label">{t('redesign.procedure.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.procedure.title')}</h2>
              <p className="mt-3 max-w-[62ch] text-body">{t('redesign.procedure.intro')}</p>
            </div>

            <div className="hiw-procedure-shell__grid">
              <ol className="hiw-procedure-corridor">
                {procedureSteps.map((step, index) => (
                  <li key={step.key} className="hiw-procedure-step" data-step-key={step.key}>
                    <div className="hiw-procedure-step__marker" aria-hidden="true">
                      <span>{step.marker}</span>
                    </div>
                    <div className="hiw-procedure-step__copy">
                      <p>{String(index + 1).padStart(2, '0')}</p>
                      <h3>{step.title}</h3>
                      <span>{step.body}</span>
                    </div>
                    <aside className="hiw-procedure-step__artifact" aria-label={step.artifactTitle}>
                      <strong>{step.artifactTitle}</strong>
                      <ul>
                        {step.artifactItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </aside>
                  </li>
                ))}
              </ol>

              <aside className="hiw-procedure-rulebook" aria-label={t('redesign.procedure.rulesTitle')}>
                <p className="section-label">{t('redesign.procedure.rulesEyebrow')}</p>
                <h3>{t('redesign.procedure.rulesTitle')}</h3>
                <div>
                  {procedureRules.map((rule) => (
                    <dl key={rule.label} className="hiw-procedure-rulebook__row">
                      <dt>{rule.label}</dt>
                      <dd>{rule.value}</dd>
                    </dl>
                  ))}
                </div>
              </aside>
            </div>
          </div>
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

        <Section tone="light" id="onboarding-detail" className="section-primitive--compact hiw-section--ledger hiw-appendix-section">
          <div className="hiw-ledger-intro">
            <p className="section-label">{t('redesign.details.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.details.title')}</h2>
            <p className="mt-3 max-w-[62ch] text-body">{t('redesign.details.intro')}</p>
          </div>
          <ProcessDetailChapters t={t} />
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

          <div className="hiw-support-disclosures">
            <DisclosureBlock label={t('changes.title')} explainer={t('changes.packageChangesIntro')}>
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-black text-heading">{t('changes.packageChangesTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    <li>{t('changes.packageChangesItems.request')}</li>
                    <li>{t('changes.packageChangesItems.terms')}</li>
                    <li>{t('changes.packageChangesItems.effective')}</li>
                    <li>{t('changes.packageChangesItems.retroactive')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-black text-heading">{t('changes.additionsTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    <li>{t('changes.additionsItems.quoted')}</li>
                    <li>{t('changes.additionsItems.added')}</li>
                    <li>{t('changes.additionsItems.noAlter')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-black text-heading">{t('changes.clientTerminationTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    <li>{t('changes.clientTerminationItems.effective')}</li>
                    <li>{t('changes.clientTerminationItems.finalVisit')}</li>
                    <li>{t('changes.clientTerminationItems.keysReturned')}</li>
                    <li>{t('changes.clientTerminationItems.finalReport')}</li>
                  </ul>
                </div>
              </div>
            </DisclosureBlock>

            <DisclosureBlock label={t('redesign.faq.title')} explainer={t('redesign.faq.eyebrow')}>
              <dl className="hiw-faq-list">
                {FAQ_KEYS.map((key) => (
                  <div key={key} className="hiw-faq-list__item">
                    <dt className="hiw-faq-list__question">{t(`faq.questions.${key}.question`)}</dt>
                    <dd className="hiw-faq-list__answer">{t(`faq.questions.${key}.answer`)}</dd>
                  </div>
                ))}
              </dl>
            </DisclosureBlock>
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
        suppressWhenVisible="footer,.hiw-handoff,.hiw-section--support,#report-decision,#onboarding-detail"
      />
      <Footer />
    </>
  );
}

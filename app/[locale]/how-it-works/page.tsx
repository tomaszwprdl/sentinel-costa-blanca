import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import ReportArtifact, { type ReportMeaningCard } from '@/components/how-it-works/ReportArtifact';
import DecisionThreshold, { type DecisionThresholdCase } from '@/components/how-it-works/DecisionThreshold';
import ObservationSchematic from '@/components/how-it-works/ObservationSchematic';
import VisitChecklist, { type VisitCheckCategory } from '@/components/how-it-works/VisitChecklist';

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
  const caseThreadChips = t.raw('redesign.procedure.schematic.chips') as string[];
  const reportCards = t.raw('redesign.evidence.cards') as ReportMeaningCard[];
  const thresholdCases = t.raw('redesign.threshold.cases') as DecisionThresholdCase[];
  const checkCategories = t.raw('redesign.checks.categories') as VisitCheckCategory[];

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
          <ObservationSchematic
            eyebrow={t('redesign.procedure.schematic.eyebrow')}
            observation={t('redesign.evidence.sampleReport.finding.title')}
            exampleLabel={t('redesign.procedure.schematic.exampleLabel')}
            routeImageAlt={t('redesign.procedure.schematic.routeImageAlt')}
            chips={caseThreadChips}
          />
        </Section>

        <Section tone="light" id="visit-checks" className="section-primitive--compact hiw-interface-section hiw-checks-section">
          <VisitChecklist
            eyebrow={t('redesign.checks.eyebrow')}
            title={t('redesign.checks.title')}
            intro={t('redesign.checks.intro')}
            scopeNote={t('redesign.checks.scopeNote')}
            exampleLabel={t('redesign.checks.exampleLabel')}
            imageAlt={t('redesign.checks.imageAlt')}
            categories={checkCategories}
          />
        </Section>

        <Section tone="authority" id="report-record" className="section-primitive--compact hiw-interface-section hiw-evidence-section">
          <ReportArtifact
            eyebrow={t('redesign.evidence.eyebrow')}
            title={t('redesign.evidence.title')}
            intro={t('redesign.evidence.intro')}
            photoAlt={t('redesign.evidence.photoAlt')}
            cards={reportCards}
            exampleLabel={t('redesign.evidence.exampleLabel')}
          />
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

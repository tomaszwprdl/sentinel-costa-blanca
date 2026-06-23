import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';
import Estimator from '@/components/Estimator';
import PackageResponsibilityLadder from '@/components/PackageResponsibilityLadder';
import ServiceBoundaryGrid from '@/components/ServiceBoundaryGrid';
import OperationalModuleTile from '@/components/OperationalModuleTile';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JourneyNav from '@/components/JourneyNav';
import CleaningAccordion from '@/components/CleaningAccordion';

type OperationalModule = {
  visual?: 'readiness' | 'seasonal' | 'access';
  marker: string;
  mode: 'compact';
  label: string;
  title: string;
  body: string;
  items: string[];
  note?: string;
};

type DossierRecordRow = {
  label: string;
  value: string;
};

const NOT_INCLUDED_ITEM_KEYS = [
  'noGuaranteeFixes',
  'contractorResponsibility',
  'concierge',
  'construction',
  'outsideArea',
  'operationalWithoutScope',
] as const;

const EXECUTION_ONLY_AVAILABLE_KEYS = ['keyHolding', 'cleaning', 'oneTimeAccess', 'seasonalPrep'] as const;
const EXECUTION_ONLY_LIMITATION_KEYS = ['noRegularChecks', 'noCyclicReporting', 'noEmergencySLA', 'noDecisionAuthority'] as const;
const CLEANING_CAPABILITY_KEYS = ['readiness', 'turnover', 'documentation', 'boundary'] as const;
const SKIM_ITEM_KEYS = ['inspections', 'access', 'decisions', 'approval'] as const;

const CLEANING_STORY_IMAGES: Record<(typeof CLEANING_CAPABILITY_KEYS)[number], { src: string; focus: string }> = {
  readiness: {
    src: '/photos/home-pathway-guest-readiness.webp',
    focus: '52% 54%',
  },
  turnover: {
    src: '/images/home/regular-guest-stays/guest-risk-turnover-readiness.webp',
    focus: '48% 58%',
  },
  documentation: {
    src: '/photos/hiw-field-note.webp',
    focus: '54% 58%',
  },
  boundary: {
    src: '/photos/services-scope-object.webp',
    focus: '48% 58%',
  },
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const headlineParts = t.raw('redesign.hero.headlineParts') as string[];
  const heroRecordRows = t.raw('redesign.dossier.hero.recordRows') as DossierRecordRow[];
  const heroChecklist = t.raw('redesign.dossier.hero.checklist') as string[];
  const qualificationSteps = t.raw('redesign.executionStrip.gateSteps') as string[];
  const cleaningItems = CLEANING_CAPABILITY_KEYS.map((key, index) => ({
    id: key,
    marker: String(index + 1).padStart(2, '0'),
    title: t(`redesign.modules.cleaning.items.${key}.title`),
    body: t(`redesign.modules.cleaning.items.${key}.body`),
    summaryLines: [
      {
        label: t(`redesign.modules.cleaning.items.${key}.summary.primary.label`),
        text: t(`redesign.modules.cleaning.items.${key}.summary.primary.text`),
      },
      {
        label: t(`redesign.modules.cleaning.items.${key}.summary.secondary.label`),
        text: t(`redesign.modules.cleaning.items.${key}.summary.secondary.text`),
      },
    ],
    imageSrc: CLEANING_STORY_IMAGES[key].src,
    imageAlt: t(`redesign.modules.cleaning.items.${key}.imageAlt`),
    focus: CLEANING_STORY_IMAGES[key].focus,
  }));
  const journeyItems = [
    { id: 'what-you-get', label: t('redesign.journey.overview') },
    { id: 'responsibility', label: t('redesign.journey.responsibility') },
    { id: 'estimator', label: t('redesign.journey.estimator') },
    { id: 'scope', label: t('redesign.journey.scope') },
    { id: 'operational-modules', label: t('redesign.journey.modules') },
  ];

  const operationalModules = [
    {
      visual: 'access',
      marker: '01',
      mode: 'compact',
      label: t('redesign.modules.useWhen'),
      title: t('addons.transfers.title'),
      body: t('redesign.modules.moduleBodies.access'),
      items: [
        t('executionOnly.availableItems.keyHolding'),
        t('executionOnly.availableItems.oneTimeAccess'),
        t('addons.transfers.provider'),
      ],
    },
    {
      visual: 'seasonal',
      marker: '02',
      mode: 'compact',
      label: t('redesign.modules.useWhen'),
      title: t('addons.seasonal.title'),
      body: t('redesign.modules.moduleBodies.seasonal'),
      items: [
        t('addons.seasonal.items.openingClosing'),
        t('addons.seasonal.items.preparation'),
        t('addons.seasonal.items.extraVisit'),
      ],
    },
  ] satisfies [OperationalModule, OperationalModule];

  return (
    <>
      <HeaderClient />
      <main className="services-page min-h-screen">
        <Section tone="authority" className="section-primitive--first services-command-hero" id="qualification">
          <span className="gfx-ruler" aria-hidden="true" />
          <GridFrame className="services-command-hero__grid items-center">
            <Region name="main" desktopSpan="half">
              <div className="motion-entrance services-hero-copy max-w-[680px]">
                <p className="services-hero-question">{t('redesign.hero.decisionQuestion')}</p>
                <h1 className="hero-display services-hero-display services-hero-headline !text-[2.35rem] md:!text-[3rem] lg:!text-[3.2rem]">
                  {headlineParts.map((part, index) => (
                    <span key={part} className="services-hero-headline__part">
                      {part}
                      {index < headlineParts.length - 1 ? ' ' : null}
                    </span>
                  ))}
                </h1>
                <p className="hero-lead services-hero-lead">{t('redesign.hero.lead')}</p>
                <div className="services-hero-actions mt-7 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                  <Link href={`/${locale}/contact`} className="btn-primary services-hero-cta services-hero-cta--primary">
                    {t('cta.primaryButton')}
                  </Link>
                  <Link href="#what-you-get" className="btn-secondary btn-secondary-on-dark services-hero-cta services-hero-cta--secondary">
                    {t('redesign.hero.secondaryCta')}
                  </Link>
                </div>
                <p className="services-hero-estimator-cue mt-4 max-w-[36rem] text-sm leading-relaxed text-authority-on-dark/75">
                  {t('redesign.hero.estimatorCue.text')}{' '}
                  <Link
                    href="#estimator"
                    className="services-hero-estimator-cue__link font-black text-authority-on-dark underline decoration-authority-on-dark/35 underline-offset-4 transition hover:decoration-authority-on-dark"
                  >
                    {t('redesign.hero.estimatorCue.link')}
                  </Link>
                </p>
              </div>
            </Region>
            <Region name="support" tabletSpan="half" desktopSpan="half">
              <figure className="services-dossier-artifact motion-panel-reveal" aria-hidden="true">
                <div className="services-dossier-artifact__header">
                  <p>{t('redesign.dossier.hero.kicker')}</p>
                  <strong>{t('redesign.dossier.hero.title')}</strong>
                  <span>{t('redesign.dossier.hero.status')}</span>
                </div>
                <div className="services-dossier-artifact__body">
                  <div className="services-dossier-record">
                    {heroRecordRows.map((row) => (
                      <div key={row.label} className="services-dossier-record__row">
                        <span>{row.label}</span>
                        <strong>{row.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="services-dossier-flow">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="services-dossier-checklist">
                    <p>{t('redesign.dossier.hero.checklistTitle')}</p>
                    {heroChecklist.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <span className="services-dossier-artifact__stamp">{t('redesign.dossier.hero.stamp')}</span>
                </div>
              </figure>
            </Region>
          </GridFrame>
        </Section>

        <JourneyNav items={journeyItems} ariaLabel={t('redesign.hero.headline')} className="services-journey-nav" />

        <Section tone="light" className="section-primitive--compact services-interface-section services-interface-section--skim" id="what-you-get">
          <div className="services-skim-strip">
            <div className="services-skim-strip__header">
              <div>
                <p className="section-label">{t('redesign.skim.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('redesign.skim.title')}</h2>
              </div>
              <p>{t('redesign.skim.intro')}</p>
            </div>
            <div className="services-skim-strip__items">
              {SKIM_ITEM_KEYS.map((key, index) => (
                <article key={key} className="services-skim-item">
                  <span className="services-skim-item__marker">{String(index + 1).padStart(2, '0')}</span>
                  <p>{t(`redesign.skim.items.${key}.label`)}</p>
                  <h3>{t(`redesign.skim.items.${key}.title`)}</h3>
                  <small>{t(`redesign.skim.items.${key}.body`)}</small>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="light" className="section-primitive--compact services-interface-section services-interface-section--responsibility">
          <div className="services-responsibility-stage">
            <PackageResponsibilityLadder />
          </div>
        </Section>

        <Section tone="light" className="section-primitive--compact services-interface-section services-interface-section--estimator" id="estimator">
          <div className="services-estimator-band">
            <div className="mb-6 max-w-[760px]">
              <p className="section-label">{t('redesign.estimatorBand.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.estimatorBand.title')}</h2>
              <p className="mt-3 text-body">{t('redesign.estimatorBand.intro')}</p>
              <p className="mt-4 rounded-2xl border border-structural-light bg-surface-light-alt px-4 py-3 text-sm text-body">
                {t('redesign.estimatorBand.transition')}
              </p>
              <div className="services-estimator-context" aria-label={t('redesign.estimatorBand.contextTitle')}>
                <p>{t('redesign.estimatorBand.contextTitle')}</p>
                <div>
                  <span>{t('redesign.estimatorBand.contextItems.bathrooms.label')}</span>
                  <strong>{t('redesign.estimatorBand.contextItems.bathrooms.body')}</strong>
                </div>
                <div>
                  <span>{t('redesign.estimatorBand.contextItems.outdoor.label')}</span>
                  <strong>{t('redesign.estimatorBand.contextItems.outdoor.body')}</strong>
                </div>
                <div>
                  <span>{t('redesign.estimatorBand.contextItems.logic.label')}</span>
                  <strong>{t('redesign.estimatorBand.contextItems.logic.body')}</strong>
                </div>
              </div>
            </div>
            <div>
              <Estimator embedded />
            </div>
          </div>
        </Section>

        <Section tone="alt" className="section-primitive--compact services-interface-section services-interface-section--boundary" id="scope">
          <div className="services-boundary-stack">
            <ServiceBoundaryGrid />
            <div className="services-boundary-details">
              <DisclosureBlock label={t('redesign.details.frameworkLabel')} explainer={t('redesign.details.frameworkExplainer')}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-black text-heading">{t('framework.visitSchedulingTitle')}</h3>
                    <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                      <li>{t('framework.visitSchedulingItems.scheduled')}</li>
                      <li>{t('framework.visitSchedulingItems.additional')}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-heading">{t('framework.decisionLimitsTitle')}</h3>
                    <p className="mb-0 text-sm text-body">{t('framework.decisionLimitsText')}</p>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-heading">{t('framework.minCommitmentTitle')}</h3>
                    <p className="mb-0 text-sm text-body">{t('framework.minCommitmentText')}</p>
                  </div>
                </div>
              </DisclosureBlock>

              <DisclosureBlock label={t('redesign.details.notIncludedLabel')} explainer={t('redesign.details.notIncludedExplainer')}>
                <p className="text-sm text-body">{t('notIncluded.intro')}</p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                  {NOT_INCLUDED_ITEM_KEYS.map((key) => (
                    <li key={key}>{t(`notIncluded.items.${key}`)}</li>
                  ))}
                </ul>
              </DisclosureBlock>
            </div>
          </div>
        </Section>

        <Section tone="light" className="section-primitive--compact services-interface-section services-interface-section--modules" id="operational-modules">
          <div className="services-modules-band services-capability-theatre">
            <div className="mb-6 max-w-[760px]">
              <p className="section-label">{t('redesign.modules.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.modules.title')}</h2>
              <p className="mt-3 text-body">{t('redesign.modules.intro')}</p>
            </div>
            <div className="services-capability-console">
              <div className="services-capability-record">
                <div className="services-capability-record__main">
                  <CleaningAccordion
                    eyebrow={t('redesign.modules.cleaning.eyebrow')}
                    title={t('redesign.modules.cleaning.title')}
                    intro={t('redesign.modules.cleaning.intro')}
                    items={cleaningItems}
                  />
                </div>

                <div className="services-capability-record__support">
                  <div className="services-module-stack__header">
                    <span>{t('redesign.modules.stackLabel')}</span>
                    <strong>{t('redesign.modules.stackTitle')}</strong>
                  </div>
                  <div className="services-module-system">
                    {operationalModules.map((module) => (
                      <OperationalModuleTile key={module.title} {...module} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="services-capability-footnotes">
                <div className="services-module-guardrail">
                  <span>{t('redesign.modules.guardrailLabel')}</span>
                  <p>{t('redesign.modules.guardrailBody')}</p>
                </div>
                <p className="services-partner-note">{t('redesign.modules.partnerNote')}</p>
              </div>

              <div className="services-checkpoint" id="execution-only">
                <p className="services-checkpoint__marker">
                  <svg
                    className="services-checkpoint__marker-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M12 2.9 L21.5 20.5 H2.5 Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinejoin="round"
                    />
                    <path d="M12 8.8 V13.9" stroke="#0f2238" strokeWidth="2.1" strokeLinecap="round" />
                    <circle cx="12" cy="17" r="1.2" fill="#0f2238" />
                  </svg>
                  {t('redesign.executionStrip.thresholdLabel')}
                </p>

                <div className="services-checkpoint__body">
                  <div className="services-checkpoint__request">
                    <p className="services-checkpoint__label">{t('executionOnly.microLabel')}</p>
                    <h3 className="services-checkpoint__title">{t('redesign.executionStrip.title')}</h3>
                    <p className="services-checkpoint__rule">{t('redesign.executionStrip.body')}</p>

                    <div className="services-checkpoint__possible">
                      <h4 className="services-checkpoint__list-title">{t('redesign.executionStrip.availableLabel')}</h4>
                      <ul className="services-checkpoint__list services-checkpoint__list--possible">
                        {EXECUTION_ONLY_AVAILABLE_KEYS.map((key) => (
                          <li key={key}>{t(`executionOnly.availableItems.${key}`)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="services-checkpoint__gate">
                    <p className="services-checkpoint__gate-label">{t('redesign.executionStrip.gateLabel')}</p>
                    <ol className="services-checkpoint__sequence">
                      {qualificationSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                    <p className="services-checkpoint__gate-note">{t('redesign.executionStrip.gateNote')}</p>
                    <Link href={`/${locale}/contact`} className="btn-primary services-checkpoint__cta">
                      {t('redesign.executionStrip.cta')}
                    </Link>
                  </div>

                  <div className="services-checkpoint__lockout">
                    <h4 className="services-checkpoint__list-title services-checkpoint__list-title--lockout">
                      {t('redesign.executionStrip.limitsLabel')}
                    </h4>
                    <ul className="services-checkpoint__list services-checkpoint__list--lockout">
                      {EXECUTION_ONLY_LIMITATION_KEYS.map((key) => (
                        <li key={key}>{t(`executionOnly.limitationsItems.${key}`)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section tone="light" className="services-closing-section !pt-10">
          <div className="services-final-cta services-final-cta--no-map overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)]">
              <div className="p-5 md:p-8">
                <p className="section-label">{t('redesign.ladder.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('cta.headline')}</h2>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-body">
                  {t('cta.subheadline')}
                </p>
                <div className="services-final-threshold" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="services-final-cta__panel p-5 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="services-final-registry">
                    <div>
                      <span>{t('redesign.finalRegistry.review.label')}</span>
                      <strong>{t('redesign.finalRegistry.review.body')}</strong>
                    </div>
                    <div>
                      <span>{t('redesign.finalRegistry.scope.label')}</span>
                      <strong>{t('redesign.finalRegistry.scope.body')}</strong>
                    </div>
                    <div>
                      <span>{t('redesign.finalRegistry.next.label')}</span>
                      <strong>{t('redesign.finalRegistry.next.body')}</strong>
                    </div>
                  </div>
                  <Link href={`/${locale}/contact`} className="btn-primary">
                    {t('cta.primaryButton')}
                  </Link>
                  <Link href={`/${locale}/faq`} className="btn-secondary btn-secondary-on-dark">
                    {t('cta.secondaryButton')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <MobileStickyCTA
        primaryHref={`/${locale}/contact`}
        primaryLabel={t('cta.primaryButton')}
        secondaryHref="#what-you-get"
        secondaryLabel={t('redesign.hero.secondaryCta')}
        suppressWhenVisible="#what-you-get, #responsibility, #estimator, #scope, #operational-modules"
      />
      <Footer />
    </>
  );
}

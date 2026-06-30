import Link from 'next/link';
import Image from 'next/image';
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
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JourneyNav from '@/components/JourneyNav';

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
const OPERATIONAL_OUTPUT_KEYS = ['readiness', 'access', 'coordination', 'decision'] as const;
const BRIEFING_SIGNAL_KEYS = ['inspections', 'access', 'decisions'] as const;
const ESTIMATOR_INPUT_KEYS = ['package', 'usage', 'property'] as const;

// Service-map node icons, in the order of redesign.siteMap.nodes:
// activity · access (key) · readiness (check) · documentation · agreed scope.
const SITE_MAP_NODE_ICONS = [
  <path key="activity" d="M3 12h3.3l1.9-5.4 3.5 10.8 1.9-5.4H21" />,
  <g key="access">
    <circle cx="8.6" cy="8.6" r="3.3" />
    <path d="M11 11 19 19M16 18l2.2-2.2" />
  </g>,
  <g key="ready">
    <circle cx="12" cy="12" r="8.4" />
    <path d="M8.2 12.4 11 15.1 16 9.5" />
  </g>,
  <g key="document">
    <path d="M13.4 3H7v18h10V7.6z" />
    <path d="M13.4 3v4.6H18M9.6 12.4h4.8M9.6 15.8h4.8" />
  </g>,
  <g key="scope">
    <path d="M5 8.2h14M5 15.8h14" />
    <circle cx="9.4" cy="8.2" r="1.7" />
    <circle cx="14.6" cy="15.8" r="1.7" />
  </g>,
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const headlineParts = t.raw('redesign.hero.headlineParts') as string[];
  const siteMapNodes = t.raw('redesign.siteMap.nodes') as string[];
  const qualificationSteps = t.raw('redesign.executionStrip.gateSteps') as string[];
  const journeyItems = [
    { id: 'what-you-get', label: t('redesign.journey.overview') },
    { id: 'responsibility', label: t('redesign.journey.responsibility') },
    { id: 'estimator', label: t('redesign.journey.estimator') },
    { id: 'scope', label: t('redesign.journey.scope') },
    { id: 'operational-modules', label: t('redesign.journey.modules') },
  ];

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
              <figure className="services-site-map motion-panel-reveal" aria-hidden="true">
                <div className="services-site-map__photo">
                  <Image
                    src="/photos/sentinel-corridor-exterior-placeholder.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 42vw, 90vw"
                    priority
                  />
                </div>
                <p className="services-site-map__title">{t('redesign.siteMap.title')}</p>
                <div className="services-site-map__field">
                  <svg
                    className="services-site-map__links"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <line x1="50" y1="50" x2="24" y2="13" />
                    <line x1="50" y1="50" x2="76" y2="13" />
                    <line x1="50" y1="50" x2="24" y2="80" />
                    <line x1="50" y1="50" x2="76" y2="80" />
                    <line x1="50" y1="50" x2="50" y2="93" />
                  </svg>
                  <div className="services-site-map__core">
                    <svg
                      className="services-site-map__core-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M4 11 12 4.5 20 11" />
                      <path d="M6.2 9.6V19.5h11.6V9.6" />
                    </svg>
                    <span>{t('redesign.siteMap.center')}</span>
                  </div>
                  {siteMapNodes.map((label, index) => (
                    <div key={label} className={`services-site-map__node services-site-map__node--${index + 1}`}>
                      <span className="services-site-map__node-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.6}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          focusable="false"
                        >
                          {SITE_MAP_NODE_ICONS[index]}
                        </svg>
                      </span>
                      <span className="services-site-map__node-label">{label}</span>
                    </div>
                  ))}
                </div>
              </figure>
            </Region>
          </GridFrame>
        </Section>

        <JourneyNav items={journeyItems} ariaLabel={t('redesign.hero.headline')} className="services-journey-nav" />

        <Section tone="light" className="section-primitive--compact services-interface-section services-interface-section--skim" id="what-you-get">
          <div className="services-briefing-panel">
            <div className="services-briefing-panel__copy motion-reveal">
              <p className="services-briefing-kicker">{t('redesign.skim.eyebrow')}</p>
              <h2>{t('redesign.skim.title')}</h2>
              <p>{t('redesign.skim.intro')}</p>
            </div>
            <div className="services-briefing-register reveal-stagger">
              <p className="services-briefing-register__label">{t('redesign.skim.protocolLabel')}</p>
              <div className="services-briefing-register__body">
                {BRIEFING_SIGNAL_KEYS.map((key) => (
                  <article key={key} className="services-briefing-signal">
                    <span>{t(`redesign.skim.items.${key}.label`)}</span>
                    <h3>{t(`redesign.skim.items.${key}.title`)}</h3>
                    <p>{t(`redesign.skim.items.${key}.body`)}</p>
                  </article>
                ))}
              </div>
              <div className="services-briefing-decision">
                <span>{t('redesign.skim.items.approval.label')}</span>
                <strong>{t('redesign.skim.items.approval.title')}</strong>
                <p>{t('redesign.skim.items.approval.body')}</p>
              </div>
              <p className="services-briefing-register__note">{t('redesign.skim.protocolNote')}</p>
            </div>
          </div>
        </Section>

        <Section tone="light" className="section-primitive--compact services-interface-section services-interface-section--responsibility">
          <div className="services-responsibility-stage">
            <PackageResponsibilityLadder />
          </div>
        </Section>

        <Section tone="light" className="section-primitive--compact services-interface-section services-interface-section--estimator" id="estimator">
          <div className="services-estimator-band services-estimator-band--checkpoint">
            <div className="services-estimator-stage mb-6">
              <div className="services-estimator-stage__copy">
                <p className="section-label">{t('redesign.estimatorBand.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('redesign.estimatorBand.title')}</h2>
                <p className="mt-3 text-body">{t('redesign.estimatorBand.intro')}</p>
                <p className="services-estimator-note">{t('redesign.estimatorBand.note')}</p>
              </div>
              <div className="services-estimator-ticket">
                <p className="services-estimator-ticket__header">{t('redesign.estimatorBand.preview.header')}</p>
                <div className="services-estimator-ticket__range" aria-hidden="true">
                  <span className="services-estimator-ticket__cap">{t('redesign.estimatorBand.preview.from')}</span>
                  <span className="services-estimator-ticket__bar">
                    <span className="services-estimator-ticket__bar-fill" />
                  </span>
                  <span className="services-estimator-ticket__cap">{t('redesign.estimatorBand.preview.to')}</span>
                </div>
                <p className="services-estimator-ticket__caption">{t('redesign.estimatorBand.preview.rangeCaption')}</p>
                <ul className="services-estimator-ticket__tiles">
                  {ESTIMATOR_INPUT_KEYS.map((key) => (
                    <li key={key} className="services-estimator-tile">
                      <p className="services-estimator-tile__label">{t(`redesign.estimatorBand.inputs.${key}.label`)}</p>
                      <p className="services-estimator-tile__body">{t(`redesign.estimatorBand.inputs.${key}.body`)}</p>
                    </li>
                  ))}
                </ul>
                <p className="services-estimator-ticket__result">{t('redesign.estimatorBand.preview.resultNote')}</p>
              </div>
            </div>
            <div>
              <Estimator embedded />
            </div>
          </div>
        </Section>

        <Section tone="alt" className="section-primitive--compact services-interface-section services-interface-section--boundary" id="scope">
          <div className="services-boundary-contract">
            <ServiceBoundaryGrid />
            <div className="services-boundary-details">
              <DisclosureBlock className="services-boundary-note" label={t('redesign.details.frameworkLabel')} explainer={t('redesign.details.frameworkExplainer')}>
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

              <DisclosureBlock className="services-boundary-note" label={t('redesign.details.notIncludedLabel')} explainer={t('redesign.details.notIncludedExplainer')}>
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
            <div className="services-capability-console">
              <div className="services-operational-record services-output-preview">
                <div className="services-operational-record__header services-output-preview__header">
                  <div>
                    <p className="section-label">{t('redesign.modules.eyebrow')}</p>
                    <h2 className="h2-system mt-3">{t('redesign.modules.title')}</h2>
                    <p className="services-operational-record__intro mt-3">{t('redesign.modules.intro')}</p>
                  </div>
                  <p className="services-output-preview__stamp">{t('redesign.modules.recordLabel')}</p>
                </div>
                <div className="services-output-preview__body">
                  <div className="services-output-preview__record-shell">
                    <div className="services-output-preview__media" aria-hidden="true">
                      <Image
                        src="/photos/services-operational-capability.webp"
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 26vw, 90vw"
                      />
                    </div>
                    <ol className="services-operational-outputs services-output-preview__outputs">
                      {OPERATIONAL_OUTPUT_KEYS.map((key, index) => (
                        <li key={key} className="services-operational-output">
                          <span className="services-operational-output__marker" aria-hidden="true">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="services-operational-output__text">
                            <h3>{t(`redesign.modules.outputs.${key}.title`)}</h3>
                            <p>{t(`redesign.modules.outputs.${key}.body`)}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <aside className="services-output-preview__handoff">
                    <span>{t('redesign.modules.handoffLabel')}</span>
                    <strong>{t('redesign.modules.recordSummary')}</strong>
                  </aside>
                </div>
                <p className="services-operational-guardrail">{t('redesign.modules.guardrailBody')}</p>
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

                  <div className="services-checkpoint__lanes">
                    <div className="services-checkpoint__possible">
                      <h4 className="services-checkpoint__list-title">{t('redesign.executionStrip.availableLabel')}</h4>
                      <ul className="services-checkpoint__list services-checkpoint__list--possible">
                        {EXECUTION_ONLY_AVAILABLE_KEYS.map((key) => (
                          <li key={key}>{t(`executionOnly.availableItems.${key}`)}</li>
                        ))}
                      </ul>
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
          </div>
        </Section>

        <Section tone="light" className="services-closing-section !pt-10">
          <div className="services-final-cta services-final-cta--no-map overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)]">
              <div className="p-5 md:p-8">
                <p className="section-label">{t('redesign.finalCta.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('cta.headline')}</h2>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-body">
                  {t('cta.subheadline')}
                </p>
                <p className="services-final-cta__continuity">{t('redesign.finalCta.continuity')}</p>
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

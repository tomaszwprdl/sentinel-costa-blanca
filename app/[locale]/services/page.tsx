import Image from 'next/image';
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
import ScenarioFitGuide from '@/components/ScenarioFitGuide';
import WhatIfEventSimulator from '@/components/WhatIfEventSimulator';
import PackageDetailPanels from '@/components/PackageDetailPanels';
import ServiceBoundaryGrid from '@/components/ServiceBoundaryGrid';
import OperationalModuleTile from '@/components/OperationalModuleTile';
import MobileStickyCTA from '@/components/MobileStickyCTA';

type Fact = {
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

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const facts = t.raw('redesign.hero.facts') as Fact[];

  const operationalModules = [
    {
      image: '/photos/sentinel-cleaning-readiness-placeholder.png',
      label: t('redesign.modules.useWhen'),
      title: t('addons.rental.title'),
      body: t('addons.intro'),
      items: [
        t('addons.rental.items.preparation'),
        t('addons.rental.items.cleaning'),
        t('addons.rental.items.guests'),
      ],
      note: t('addons.rental.notPM'),
    },
    {
      image: '/photos/sentinel-corridor-exterior-placeholder.png',
      label: t('redesign.modules.useWhen'),
      title: t('addons.seasonal.title'),
      body: t('executionOnly.intro'),
      items: [
        t('addons.seasonal.items.openingClosing'),
        t('addons.seasonal.items.preparation'),
        t('addons.seasonal.items.extraVisit'),
      ],
    },
    {
      image: '/photos/sentinel-access-handover-placeholder.png',
      label: t('redesign.modules.useWhen'),
      title: t('addons.transfers.title'),
      body: t('addons.transfers.provider'),
      items: [
        t('executionOnly.availableItems.keyHolding'),
        t('executionOnly.availableItems.oneTimeAccess'),
      ],
    },
  ];

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        <Section tone="authority" className="section-primitive--first" id="qualification">
          <GridFrame className="items-center gap-10">
            <Region name="main" desktopSpan="half">
              <div className="max-w-[680px]">
                <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
                <h1 className="hero-display max-w-[16ch]">{t('redesign.hero.headline')}</h1>
                <p className="hero-lead">{t('redesign.hero.lead')}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/${locale}/contact`} className="btn-primary">
                    {t('cta.primaryButton')}
                  </Link>
                  <Link href="#scenario-fit" className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                    {t('redesign.hero.secondaryCta')}
                  </Link>
                </div>
                <div className="hero-fact-grid">
                  {facts.map((fact) => (
                    <div key={fact.label} className="hero-fact">
                      <span>{fact.label}</span>
                      <strong>{fact.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </Region>
            <Region name="support" tabletSpan="half" desktopSpan="half">
              <figure className="visual-card-strong overflow-hidden border-authority-on-dark/25 bg-authority-on-dark/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/photos/sentinel-apartment-entry-placeholder.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </figure>
            </Region>
          </GridFrame>
        </Section>

        <Section tone="light">
          <PackageResponsibilityLadder />
        </Section>

        <Section tone="alt">
          <ScenarioFitGuide />
        </Section>

        <Section tone="light">
          <WhatIfEventSimulator />
        </Section>

        <Section tone="alt">
          <PackageDetailPanels />
        </Section>

        <Section tone="light">
          <ServiceBoundaryGrid />
        </Section>

        <Section tone="alt">
          <div className="mb-10 max-w-[760px]">
            <p className="section-label">{t('redesign.modules.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.modules.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.modules.intro')}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {operationalModules.map((module) => (
              <OperationalModuleTile key={module.title} {...module} />
            ))}
          </div>
        </Section>

        <Section tone="light">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
            <div className="visual-card-strong p-5 md:p-8">
              <p className="section-label">{t('executionOnly.microLabel')}</p>
              <h2 className="h2-system mt-3">{t('executionOnly.title')}</h2>
              <p className="text-body">{t('executionOnly.intro')}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-surface-light-alt p-4">
                  <h3 className="mb-3 text-base font-black text-heading">{t('executionOnly.availableTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    {EXECUTION_ONLY_AVAILABLE_KEYS.map((key) => (
                      <li key={key}>{t(`executionOnly.availableItems.${key}`)}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-surface-light-alt p-4">
                  <h3 className="mb-3 text-base font-black text-heading">{t('executionOnly.limitationsTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    {EXECUTION_ONLY_LIMITATION_KEYS.map((key) => (
                      <li key={key}>{t(`executionOnly.limitationsItems.${key}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-5 mb-0 text-sm leading-relaxed text-muted">{t('executionOnly.closing')}</p>
            </div>

            <div className="visual-card-strong overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/sentinel-technical-check-placeholder.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <Link href={`/${locale}/contact`} className="btn-secondary w-full">
                  {t('redesign.execution.cta')}
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section tone="alt">
          <div className="mb-8 max-w-[760px]">
            <p className="section-label">{t('redesign.estimatorBand.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.estimatorBand.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.estimatorBand.intro')}</p>
          </div>
          <div id="estimator">
            <Estimator />
          </div>
        </Section>

        <Section tone="light">
          <div className="grid gap-5 lg:grid-cols-2">
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
              <p className="mb-0 mt-4 text-sm text-muted">{t('notIncluded.areaNote')}</p>
            </DisclosureBlock>
          </div>
        </Section>

        <Section tone="authority">
          <div className="max-w-[65ch]">
            <h2 className="h2-system text-authority-on-dark">{t('cta.headline')}</h2>
            <p className="text-lg text-authority-on-dark/80 mb-10 leading-relaxed">
              {t('cta.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href={`/${locale}/contact`} className="btn-primary !bg-surface-light !text-authority hover:!bg-surface-light-alt !border-surface-light">
                {t('cta.primaryButton')}
              </Link>
              <Link href={`/${locale}/faq`} className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                {t('cta.secondaryButton')}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <MobileStickyCTA
        primaryHref={`/${locale}/contact`}
        primaryLabel={t('cta.primaryButton')}
        secondaryHref="#scenario-fit"
        secondaryLabel={t('redesign.hero.secondaryCta')}
        suppressWhenVisible="#estimator"
      />
      <Footer />
    </>
  );
}

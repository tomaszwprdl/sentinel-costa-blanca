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
import SlaTimeline from '@/components/diagrams/SlaTimeline';
import EscalationLevels from '@/components/diagrams/EscalationLevels';

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

const RED_NOT_INCLUDED_KEYS = [
  'contractorResult',
  'contractorQuality',
  'availability24x7',
  'conciergeServices',
] as const;

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const tHomeLevels = await getTranslations({ locale, namespace: 'home.levels' });

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        {/* 1. HERO — qualification entry point for homepage CTA */}
        <Section tone="light" className="section-primitive--first" id="qualification">
          <GridFrame className="items-center gap-10">
            <Region name="main" tabletSpan="half" desktopSpan="half">
              <div className="section-intro mb-0">
                <p className="section-label">{t('summaryTitle')}</p>
                <h1 className="mt-3">{t('intro.headline')}</h1>
                <p className="text-lg text-body mb-4 leading-relaxed">
                  {t('intro.lead1')}
                </p>
                <p className="text-base text-body leading-relaxed">
                  {t('intro.lead2')}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/${locale}/contact`} className="btn-primary">
                    {t('cta.primaryButton')}
                  </Link>
                  <Link href="#estimator" className="btn-secondary">
                    {t('estimator.calculate')}
                  </Link>
                </div>
              </div>
            </Region>
            <Region name="support" tabletSpan="half" desktopSpan="half">
              <figure className="visual-card-strong overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/photos/sentinel-report-placeholder.png"
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

        {/* 2. TRZY PAKIETY — neutral jurisdictional escalation blocks */}
        <Section tone="alt">
          <div className="max-w-4xl mx-auto space-y-10">
            <SlaTimeline
              eyebrow={t('diagrams.sla.eyebrow')}
              axisLabel={t('diagrams.sla.axisLabel')}
              footerNote={t('comparison.footerNote')}
              items={[
                {
                  marker: '01',
                  packageName: t('green.title'),
                  scopeLabel: tHomeLevels('axis1'),
                  value: '48h',
                  note: t('green.slaItems.ack'),
                  band: 'long',
                },
                {
                  marker: '02',
                  packageName: t('orange.title'),
                  scopeLabel: tHomeLevels('axis2'),
                  value: '24h',
                  note: t('orange.slaItems.ack'),
                  band: 'medium',
                },
                {
                  marker: '03',
                  packageName: t('red.title'),
                  scopeLabel: tHomeLevels('axis3'),
                  value: t('diagrams.sla.sameDay'),
                  note: t('red.slaItems.ack'),
                  band: 'short',
                },
              ]}
            />

            <EscalationLevels
              eyebrow={t('diagrams.escalation.eyebrow')}
              title={t('diagrams.escalation.title')}
              intro={t('diagrams.escalation.intro')}
              footerNote={t('diagrams.escalation.footerNote')}
              levels={[
                {
                  marker: '01',
                  packageName: t('green.title'),
                  axisLabel: tHomeLevels('axis1'),
                  boundary: tHomeLevels('level1_6'),
                  parameters: [
                    { label: t('green.summary.visitsLabel'), value: t('green.summary.visitsValue') },
                    { label: t('green.summary.accessLabel'), value: t('green.summary.accessValue') },
                    { label: t('green.summary.decisionsLabel'), value: t('green.summary.decisionsValue') },
                  ],
                },
                {
                  marker: '02',
                  packageName: t('orange.title'),
                  axisLabel: tHomeLevels('axis2'),
                  boundary: tHomeLevels('level2_6'),
                  parameters: [
                    { label: t('orange.summary.visitsLabel'), value: t('orange.summary.visitsValue') },
                    { label: t('orange.summary.accessLabel'), value: t('orange.summary.accessValue') },
                    { label: t('orange.summary.decisionsLabel'), value: t('orange.summary.decisionsValue') },
                  ],
                },
                {
                  marker: '03',
                  packageName: t('red.title'),
                  axisLabel: tHomeLevels('axis3'),
                  boundary: tHomeLevels('level3_6'),
                  parameters: [
                    { label: t('red.summary.visitsLabel'), value: t('red.summary.visitsValue') },
                    { label: t('red.summary.accessLabel'), value: t('red.summary.accessValue') },
                    { label: t('red.summary.decisionsLabel'), value: t('red.summary.decisionsValue') },
                  ],
                },
              ]}
            />

            {/* KARTA 1: Podstawowy */}
            <article className="visual-card-strong relative max-w-4xl mx-auto overflow-hidden">
              <div className="bg-surface-light-alt/60 border-b border-structural-light px-5 py-6 md:px-10 md:py-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">01</p>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-heading mb-3">{t('green.title')}</h2>
                    <p className="text-base text-body mb-0 leading-relaxed">{t('green.definition')}</p>
                  </div>
                  <div className="w-full border border-structural-light border-l-2 border-l-structural-muted bg-surface-card r px-4 py-3 md:w-64">
                    <p className="text-sm font-semibold text-heading leading-snug mb-0">{tHomeLevels('axis1')}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.36fr)] gap-10 px-5 py-10 md:px-10">
                <div className="space-y-10">
                  <section>
                    <h3 className="text-base font-semibold text-heading mb-3">{t('green.visitScopeTitle')}</h3>
                    <p className="text-body text-sm mb-3 leading-relaxed">{t('green.visitScopeIntro')}</p>
                    <ul className="list-disc list-inside space-y-3 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('green.visitItems.accessSecurity')}</li>
                      <li>{t('green.visitItems.roomsInstallations')}</li>
                      <li>{t('green.visitItems.moistureDamage')}</li>
                      <li>{t('green.visitItems.photoReport')}</li>
                    </ul>
                    <div className="mt-4">
                      <DisclosureBlock label={t('green.visitScopeDisclosureLabel')}>
                        <p className="text-body text-sm leading-relaxed">{t('green.visitScopeDisclosureBody')}</p>
                      </DisclosureBlock>
                    </div>
                  </section>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('green.keyStorageTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('green.keyStorageItems.minimum')}</li>
                      <li>{t('green.keyStorageItems.secure')}</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('green.emergencyTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('green.emergencyItems.assessment')}</li>
                      <li>{t('green.emergencyItems.actions')}</li>
                      <li>{t('green.emergencyItems.documentation')}</li>
                    </ul>
                  </section>
                  <section className="border-t border-structural-light pt-5">
                    <h3 className="text-xs font-medium text-muted/90 mb-1.5">{t('green.notIncludedTitle')}</h3>
                    <ul className="space-y-1 text-muted/90 text-xs leading-snug">
                      <li className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t('green.notIncludedItems.thirdPartyAccess')}</li>
                      <li className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t('green.notIncludedItems.repairCoordination')}</li>
                      <li className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t('green.notIncludedItems.financialDecisions')}</li>
                      <li className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t('green.notIncludedItems.contractorOversight')}</li>
                    </ul>
                  </section>
                </div>
                <div className="flex flex-col gap-5 border-t border-structural-light pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div className="border border-structural-light bg-surface-light-alt r p-5">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">{t('summaryTitle')}</p>
                    <p className="text-body text-sm leading-relaxed mb-0"><span className="text-muted">{t('green.summary.visitsLabel')}</span> <strong className="font-semibold text-body">{t('green.summary.visitsValue')}</strong></p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0"><span className="text-muted">{t('green.summary.accessLabel')}</span> <strong className="font-semibold text-body">{t('green.summary.accessValue')}</strong></p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0"><span className="text-muted">{t('green.summary.decisionsLabel')}</span> <strong className="font-semibold text-body">{t('green.summary.decisionsValue')}</strong></p>
                  </div>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('green.suitableForTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('green.suitableItems.rarelyUsed')}</li>
                      <li>{t('green.suitableItems.ownRepairs')}</li>
                      <li>{t('green.suitableItems.regularVisits')}</li>
                    </ul>
                  </section>
                  <div className="border border-structural-light bg-surface-light-alt r p-5">
                    <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">{t('green.slaTitle')}</p>
                    <p className="text-body text-sm leading-relaxed mb-0">{t('green.slaItems.ack')}</p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0">{t('green.slaItems.intervention')}</p>
                  </div>
                  <p className="text-muted text-xs mt-auto leading-relaxed">{t('framework.minCommitmentText')}</p>
                </div>
              </div>
            </article>

            {/* KARTA 2: Rozszerzony */}
            <article className="visual-card-strong relative max-w-4xl mx-auto overflow-hidden">
              <div className="bg-surface-light-alt/60 border-b border-structural-light px-5 py-6 md:px-10 md:py-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">02</p>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-heading mb-3">{t('orange.title')}</h2>
                    <p className="text-base text-body mb-0 leading-relaxed">{t('orange.definition')}</p>
                  </div>
                  <div className="w-full border border-structural-light border-l-2 border-l-structural-muted bg-surface-card r px-4 py-3 md:w-64">
                    <p className="text-sm font-semibold text-heading leading-snug mb-0">{tHomeLevels('axis2')}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.36fr)] gap-10 px-5 py-10 md:px-10">
                <div className="space-y-10">
                  <p className="text-body text-sm leading-relaxed">{t('orange.fromBasic')}</p>
                  <section>
                    <h3 className="text-base font-semibold text-heading mb-3">{t('orange.accessTitle')}</h3>
                    <ul className="list-disc list-inside space-y-3 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('orange.accessItems.arranging')}</li>
                      <li>{t('orange.accessItems.scheduling')}</li>
                      <li>{t('orange.accessItems.verification')}</li>
                      <li>{t('orange.accessItems.documentation')}</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('orange.emergencyTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('orange.emergencyItems.faster')}</li>
                      <li>{t('orange.emergencyItems.coordination')}</li>
                      <li>{t('orange.emergencyItems.contractors')}</li>
                    </ul>
                  </section>
                  <section className="border-t border-structural-light pt-5">
                    <h3 className="text-xs font-medium text-muted/90 mb-1.5">{t('orange.notIncludedTitle')}</h3>
                    <ul className="space-y-1 text-muted/90 text-xs leading-snug">
                      <li className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t('orange.notIncludedItems.renovationSupervision')}</li>
                      <li className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t('orange.notIncludedItems.extendedResponsibility')}</li>
                      <li className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t('orange.notIncludedItems.majorWorks')}</li>
                    </ul>
                  </section>
                </div>
                <div className="flex flex-col gap-5 border-t border-structural-light pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div className="border border-structural-light bg-surface-light-alt r p-5">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">{t('summaryTitle')}</p>
                    <p className="text-body text-sm leading-relaxed mb-0"><span className="text-muted">{t('orange.summary.visitsLabel')}</span> <strong className="font-semibold text-body">{t('orange.summary.visitsValue')}</strong></p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0"><span className="text-muted">{t('orange.summary.accessLabel')}</span> <strong className="font-semibold text-body">{t('orange.summary.accessValue')}</strong></p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0"><span className="text-muted">{t('orange.summary.decisionsLabel')}</span> <strong className="font-semibold text-body">{t('orange.summary.decisionsValue')}</strong></p>
                  </div>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('selection.orangeTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('selection.orangeItems.accessNeeded')}</li>
                      <li>{t('selection.orangeItems.technicalWorks')}</li>
                      <li>{t('selection.orangeItems.oversight')}</li>
                    </ul>
                  </section>
                  <div className="border border-structural-light bg-surface-light-alt r p-5">
                    <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">{t('orange.slaTitle')}</p>
                    <p className="text-body text-sm leading-relaxed mb-0">{t('orange.slaItems.ack')}</p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0">{t('orange.slaItems.accessCoordination')}</p>
                  </div>
                  <p className="text-muted text-xs mt-auto leading-relaxed">{t('framework.minCommitmentText')}</p>
                </div>
              </div>
            </article>

            {/* KARTA 3: Pełny */}
            <article className="visual-card-strong relative max-w-4xl mx-auto overflow-hidden">
              <div className="bg-surface-light-alt/60 border-b border-structural-light px-5 py-6 md:px-10 md:py-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">03</p>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-heading mb-3">{t('red.title')}</h2>
                    <p className="text-base text-body mb-0 leading-relaxed">{t('red.definition')}</p>
                  </div>
                  <div className="w-full border border-structural-light border-l-2 border-l-structural-muted bg-surface-card r px-4 py-3 md:w-64">
                    <p className="text-sm font-semibold text-heading leading-snug mb-0">{tHomeLevels('axis3')}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.36fr)] gap-10 px-5 py-10 md:px-10">
                <div className="space-y-10">
                  <p className="text-body text-sm leading-relaxed">{t('red.fromExtended')}</p>
                  <section>
                    <h3 className="text-base font-semibold text-heading mb-3">{t('red.emergencyTitle')}</h3>
                    <ul className="list-disc list-inside space-y-3 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('red.emergencyItems.immediate')}</li>
                      <li>{t('red.emergencyItems.protective')}</li>
                      <li>{t('red.emergencyItems.repairOrg')}</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('red.decisionTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('red.decisionItems.operational')}</li>
                      <li>{t('red.decisionItems.contractorEngagement')}</li>
                      <li>{t('red.decisionItems.coordinationUntilEnd')}</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('red.coordinationTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('red.coordinationItems.presence')}</li>
                      <li>{t('red.coordinationItems.verification')}</li>
                      <li>{t('red.coordinationItems.priority')}</li>
                    </ul>
                  </section>
                  <section className="border-t border-structural-light pt-5">
                    <h3 className="text-xs font-medium text-muted/90 mb-1.5">{t('red.notIncludedTitle')}</h3>
                    <ul className="space-y-1 text-muted/90 text-xs leading-snug">
                      {RED_NOT_INCLUDED_KEYS.map((key) => (
                        <li key={key} className="flex gap-2"><span className="text-muted/70" aria-hidden>−</span>{t(`red.notIncludedItems.${key}`)}</li>
                      ))}
                    </ul>
                  </section>
                </div>
                <div className="flex flex-col gap-5 border-t border-structural-light pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div className="border border-structural-light bg-surface-light-alt r p-5">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">{t('summaryTitle')}</p>
                    <p className="text-body text-sm leading-relaxed mb-0"><span className="text-muted">{t('red.summary.visitsLabel')}</span> <strong className="font-semibold text-body">{t('red.summary.visitsValue')}</strong></p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0"><span className="text-muted">{t('red.summary.accessLabel')}</span> <strong className="font-semibold text-body">{t('red.summary.accessValue')}</strong></p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0"><span className="text-muted">{t('red.summary.decisionsLabel')}</span> <strong className="font-semibold text-body">{t('red.summary.decisionsValue')}</strong></p>
                  </div>
                  <section>
                    <h3 className="text-sm font-semibold text-heading mb-2">{t('selection.redTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-body text-sm ml-1 leading-relaxed">
                      <li>{t('selection.redItems.localDecisions')}</li>
                      <li>{t('selection.redItems.emergencyResponse')}</li>
                      <li>{t('selection.redItems.minimalInvolvement')}</li>
                    </ul>
                  </section>
                  <div className="border border-structural-light bg-surface-light-alt r p-5">
                    <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">{t('red.slaTitle')}</p>
                    <p className="text-body text-sm leading-relaxed mb-0">{t('red.slaItems.ack')}</p>
                    <p className="text-body text-sm leading-relaxed mt-1 mb-0">{t('red.slaItems.intervention')}</p>
                  </div>
                  <p className="text-muted text-xs mt-auto leading-relaxed">{t('framework.minCommitmentText')}</p>
                </div>
              </div>
            </article>
          </div>
        </Section>

        {/* 3. WARSTWA OPERACYJNA — moduły (nie czwarty pakiet) */}
        <Section tone="light">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">{t('addons.overline')}</p>
            <h2 className="text-xl font-semibold text-body mb-4">{t('addons.title')}</h2>
            <p className="text-body text-sm mb-6 leading-relaxed">{t('addons.intro')}</p>

            <div className="space-y-5">
              <div className="visual-card py-4 px-4">
                <h3 className="text-sm font-semibold text-body mb-2">{t('addons.rental.title')}</h3>
                <ul className="list-disc list-inside space-y-0.5 text-body text-sm mb-1.5 ml-2">
                  <li>{t('addons.rental.items.preparation')}</li>
                  <li>{t('addons.rental.items.cleaning')}</li>
                  <li>{t('addons.rental.items.guests')}</li>
                </ul>
                <p className="text-xs text-muted mt-1.5">{t('addons.rental.notPM')}</p>
              </div>

              <div className="visual-card py-4 px-4">
                <h3 className="text-sm font-semibold text-body mb-2">{t('addons.seasonal.title')}</h3>
                <ul className="list-disc list-inside space-y-0.5 text-body text-sm mb-0 ml-2">
                  <li>{t('addons.seasonal.items.openingClosing')}</li>
                  <li>{t('addons.seasonal.items.preparation')}</li>
                  <li>{t('addons.seasonal.items.extraVisit')}</li>
                </ul>
              </div>

              <div className="visual-card py-4 px-4">
                <h3 className="text-sm font-semibold text-body mb-1">{t('addons.transfers.title')}</h3>
                <p className="text-body text-sm mb-0">{t('addons.transfers.provider')}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3b. USŁUGI OPERACYJNE BEZ PAKIETU — informacja pomocnicza, nie karta */}
        <Section tone="alt">
          <div className="max-w-[44ch] mx-auto">
            <div className="border-y border-structural-light py-5">
              <p className="text-[11px] font-medium text-muted uppercase tracking-wide mb-1.5">{t('executionOnly.microLabel')}</p>
              <h2 className="text-sm font-semibold text-body mb-2">{t('executionOnly.title')}</h2>
              <p className="text-xs text-muted mb-4 leading-relaxed">{t('executionOnly.intro')}</p>

              <p className="text-[11px] font-medium text-muted uppercase tracking-wide mb-1">{t('executionOnly.availableTitle')}</p>
              <ul className="list-disc list-inside space-y-0.5 text-muted text-xs mb-4 ml-2">
                {EXECUTION_ONLY_AVAILABLE_KEYS.map((key) => (
                  <li key={key}>{t(`executionOnly.availableItems.${key}`)}</li>
                ))}
              </ul>

              <p className="text-[11px] font-medium text-muted uppercase tracking-wide mb-1">{t('executionOnly.limitationsTitle')}</p>
              <ul className="list-disc list-inside space-y-0.5 text-muted text-xs mb-4 ml-2">
                {EXECUTION_ONLY_LIMITATION_KEYS.map((key) => (
                  <li key={key}>{t(`executionOnly.limitationsItems.${key}`)}</li>
                ))}
              </ul>

              <p className="text-muted text-[11px] leading-relaxed mb-0">{t('executionOnly.closing')}</p>
            </div>
          </div>
        </Section>

        {/* 4. USŁUGI NIEOBJĘTE ŻADNYM PAKIETEM */}
        <Section tone="alt">
          <div className="max-w-[65ch]">
            <h2 className="h2-system">{t('notIncluded.title')}</h2>
            <p className="text-body mb-4">{t('notIncluded.intro')}</p>
            <ul className="list-disc list-inside space-y-1 text-body mb-4 ml-4">
              {NOT_INCLUDED_ITEM_KEYS.map((key) => (
                <li key={key}>{t(`notIncluded.items.${key}`)}</li>
              ))}
            </ul>
            <p className="text-body text-muted">{t('notIncluded.areaNote')}</p>
          </div>
        </Section>

        {/* 5. RAMY SYSTEMU */}
        <Section tone="light">
          <div className="max-w-[65ch]">
            <h2 className="h2-system">{t('framework.title')}</h2>

            <h3 className="font-semibold text-body mb-2 mt-6">{t('framework.visitSchedulingTitle')}</h3>
            <ul className="list-disc list-inside space-y-1 text-body mb-6 ml-4">
              <li>{t('framework.visitSchedulingItems.scheduled')}</li>
              <li>{t('framework.visitSchedulingItems.additional')}</li>
            </ul>

            <h3 className="font-semibold text-body mb-2">{t('framework.decisionLimitsTitle')}</h3>
            <p className="text-body mb-6">{t('framework.decisionLimitsText')}</p>

            <h3 className="font-semibold text-body mb-2">{t('framework.communicationTitle')}</h3>
            <ul className="list-disc list-inside space-y-1 text-body mb-6 ml-4">
              <li>{t('framework.communicationItems.reports')}</li>
              <li>{t('framework.communicationItems.afterVisit')}</li>
              <li>{t('framework.communicationItems.archived')}</li>
            </ul>

            <h3 className="font-semibold text-body mb-2">{t('framework.minCommitmentTitle')}</h3>
            <p className="text-body mb-0">{t('framework.minCommitmentText')}</p>
          </div>
        </Section>

        {/* 6. SEKCJA WYBORU */}
        <Section tone="alt">
          <div className="max-w-[65ch]">
            <h2 className="h2-system">{t('selection.title')}</h2>

            <div className="mt-6">
              <h3 className="font-semibold text-body mb-2">{t('selection.greenTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-body mb-6 ml-4">
                <li>{t('selection.greenItems.regularVisits')}</li>
                <li>{t('selection.greenItems.ownRepairs')}</li>
                <li>{t('selection.greenItems.noAccess')}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-body mb-2">{t('selection.orangeTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-body mb-6 ml-4">
                <li>{t('selection.orangeItems.accessNeeded')}</li>
                <li>{t('selection.orangeItems.technicalWorks')}</li>
                <li>{t('selection.orangeItems.oversight')}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-body mb-2">{t('selection.redTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-body mb-0 ml-4">
                <li>{t('selection.redItems.localDecisions')}</li>
                <li>{t('selection.redItems.emergencyResponse')}</li>
                <li>{t('selection.redItems.minimalInvolvement')}</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 7. ESTIMATOR */}
        <div id="estimator">
          <Estimator />
        </div>

        {/* CTA */}
        <Section tone="authority">
          <div>
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
      <Footer />
    </>
  );
}

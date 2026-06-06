import { Suspense } from 'react';
import UsagePathwayLayer, { PathwayCopy, PathwayFinalCtaLink } from '@/components/UsagePathwayLayer';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';
import {
  PATHWAY_KEYS,
  type PathwayKey,
} from '@/lib/pathway';

const PATHWAY_POINT_COUNTS: Record<PathwayKey, number> = {
  'private-use-only': 5,
  'regular-guest-stays': 6,
  'mixed-not-defined': 5,
};

const DIAGNOSTIC_SHELL_CLASS = 'mx-auto w-full max-w-3xl';
const COMPANY_SHELL_CLASS = 'mx-auto w-full max-w-6xl';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const serviceAreaMapLabels = {
    title: tCommon('serviceAreaMap.title'),
    center: tCommon('serviceAreaMap.center'),
    radius: tCommon('serviceAreaMap.radius'),
    boundary: tCommon('serviceAreaMap.boundary'),
    caption: tCommon('serviceAreaMap.caption'),
  };

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen flex flex-col bg-surface-light">
        <Suspense fallback={<UsagePathwayFallback locale={locale} selected={null} t={t} />}>
          <UsagePathwayLayer>
        <Section tone="alt" variant="major" className="!pt-10">
          <div className="max-w-3xl text-left">
            <h2 className="h2-system font-bold mb-10">{t('systemIntro.title')}</h2>
            <p className="text-body leading-relaxed mb-5"><PathwayCopy path="systemIntroContext" /></p>
            <p className="text-body leading-relaxed mb-10">{t('systemIntro.intro')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              <div>
                <h3 className="text-xl font-semibold text-heading mb-4">{t('systemIntro.scopeTitle')}</h3>
                <div className="space-y-5 mb-10">
                  <p className="text-body leading-relaxed">{t('systemIntro.scope1')} {t('systemIntro.scope2')}</p>
                </div>

                <h3 className="text-xl font-semibold text-heading mb-4 mt-10">{t('systemIntro.procedureTitle')}</h3>
                <div className="space-y-5">
                  <p className="text-body leading-relaxed">{t('systemIntro.procedure1')} {t('systemIntro.procedure2')}</p>
                  <p className="text-body leading-relaxed">{t('systemIntro.procedure3')}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-heading mb-4">{t('systemIntro.docsTitle')}</h3>
                <div className="space-y-5 mb-10">
                  <p className="text-body leading-relaxed">{t('systemIntro.docs1')} {t('systemIntro.docs2')}</p>
                </div>

                <h3 className="text-xl font-semibold text-heading mb-4 mt-10">{t('systemIntro.decisionsTitle')}</h3>
                <div className="space-y-5">
                  <p className="text-body leading-relaxed">{t('systemIntro.decisions1')}</p>
                  <p className="text-body leading-relaxed">{t('systemIntro.decisions2a')} {t('systemIntro.decisions2b')}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <p className="text-body leading-relaxed">{t('systemIntro.decisions3')}</p>
              <p className="text-body leading-relaxed">{t('systemIntro.close1')} {t('systemIntro.close2')}</p>
            </div>
          </div>
        </Section>

        {/* 4. BEZ NAS / Z NAMI — shared section rhythm */}
        <Section tone="light">
          <div className="text-left">
            <h2 className="h2-system font-bold">{t('contrast.title')}</h2>
            <div className="mt-3 h-px w-16 bg-structural-muted" aria-hidden />
            <p className="text-body leading-relaxed mt-4 mb-10"><PathwayCopy path="contrast.intro" /></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="min-w-0 space-y-5 border-t border-structural-light pt-5">
                <h3 className="text-lg font-semibold text-heading mt-0 pl-5">{t('contrast.leftHeading')}</h3>
                <ul className="list-disc pl-5 space-y-3 leading-relaxed text-base text-body">
                  <li><PathwayCopy path="contrast.left1" /></li>
                  <li><PathwayCopy path="contrast.left2" /></li>
                  <li><PathwayCopy path="contrast.left3" /></li>
                  <li><PathwayCopy path="contrast.left4" /></li>
                </ul>
                <p className="mt-2 text-sm text-body/80 leading-relaxed">
                  <PathwayCopy path="contrast.leftClosing" />
                </p>
              </div>
              <div className="min-w-0 space-y-5 border-t border-structural-light pt-5">
                <h3 className="text-lg font-semibold text-heading mt-0 pl-5">{t('contrast.rightHeading')}</h3>
                <ul className="list-disc pl-5 space-y-3 leading-relaxed text-base text-body">
                  <li><PathwayCopy path="contrast.right1" /></li>
                  <li><PathwayCopy path="contrast.right2" /></li>
                  <li><PathwayCopy path="contrast.right3" /></li>
                  <li><PathwayCopy path="contrast.right4" /></li>
                </ul>
                <p className="mt-2 text-sm text-body/80 leading-relaxed">
                  <PathwayCopy path="contrast.rightClosing" />
                </p>
              </div>
            </div>
            <div className="mt-10 h-px w-24 bg-structural-muted" aria-hidden />
          </div>
        </Section>

        {/* 5. ZAKRES PAKIETÓW — jedna oś: wrapper flex flex-col items-center; tekst max-w-[72ch]; grid w-full max-w-[1120px] mx-auto justify-items-center; karty w-full */}
        <Section tone="light">
          <div className="flex flex-col items-center w-full">
            <h2 className="h2-system text-center max-w-[72ch] w-full">{t('levels.title')}</h2>
            <p className="text-body text-center max-w-[72ch] mx-auto mt-5">{t('levels.intro')}</p>
            <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              <div className="flex flex-col h-full border border-structural-light border-t-2 border-t-structural-muted bg-surface-card r overflow-hidden">
                <div className="px-5 py-4 md:px-6 md:py-5 border-b border-structural-light bg-surface-light-alt">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">01</p>
                  <h3 className="text-base font-semibold text-heading">{t('levels.level1Title')}</h3>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-heading">{t('levels.axis1')}</p>
                </div>
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <ul className="space-y-2.5 text-sm text-body leading-relaxed list-disc pl-4 marker:text-muted">
                    <li>{t('levels.level1_1')}</li>
                    <li>{t('levels.level1_2')}</li>
                  </ul>
                  <p className="mt-auto pt-5 border-t border-structural-light text-xs text-muted leading-relaxed">
                    {t('levels.level1_6')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-full border border-structural-light border-t-2 border-t-structural-muted bg-surface-card r overflow-hidden">
                <div className="px-5 py-4 md:px-6 md:py-5 border-b border-structural-light bg-surface-light-alt">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">02</p>
                  <h3 className="text-base font-semibold text-heading">{t('levels.level2Title')}</h3>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-heading">{t('levels.axis2')}</p>
                </div>
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <ul className="space-y-2.5 text-sm text-body leading-relaxed list-disc pl-4 marker:text-muted">
                    <li>{t('levels.level2_1')}</li>
                    <li>{t('levels.level2_2')}</li>
                  </ul>
                  <p className="mt-auto pt-5 border-t border-structural-light text-xs text-muted leading-relaxed">
                    {t('levels.level2_6')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-full border border-structural-light border-t-2 border-t-structural-muted bg-surface-card r overflow-hidden">
                <div className="px-5 py-4 md:px-6 md:py-5 border-b border-structural-light bg-surface-light-alt">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">03</p>
                  <h3 className="text-base font-semibold text-heading">{t('levels.level3Title')}</h3>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-heading">{t('levels.axis3')}</p>
                </div>
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <ul className="space-y-2.5 text-sm text-body leading-relaxed list-disc pl-4 marker:text-muted">
                    <li>{t('levels.level3_1')}</li>
                    <li>{t('levels.level3_2')}</li>
                  </ul>
                  <p className="mt-auto pt-5 border-t border-structural-light text-xs text-muted leading-relaxed">
                    {t('levels.level3_6')}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[72ch] mx-auto mt-10 text-center w-full">
              <p className="text-sm font-medium text-heading">{t('levels.systemRuleTitle')}</p>
              <p className="mt-2 text-sm text-body leading-relaxed">
                {t('levels.systemRule1')} {t('levels.systemRule2')} {t('levels.systemRule3')}
              </p>
            </div>
            <p className="text-center mt-5 w-full">
              <Link
                href={`/${locale}/how-it-works`}
                className="text-body font-medium underline underline-offset-2 hover:text-heading focus:outline-none focus:ring-2 focus:ring-structural-muted rounded"
              >
                {t('levels.ctaCompare')}
              </Link>
            </p>
          </div>
        </Section>

        {/* 6. CO WYRÓŻNIA SENTINEL — bloki deklaracji modelu, 2 kolumny, bez card/badge, oś centralna */}
        <Section tone="alt">
          <h2 className="h2-system text-center">{t('distinction.title')}</h2>
          <p className="mt-4 text-body text-center max-w-[56ch] mx-auto leading-relaxed">
            <PathwayCopy path="distinctionIntro" />
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1120px] mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-heading">{t('distinction.block1Title')}</h3>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block1p1')}</p>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block1p2')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-heading">{t('distinction.block2Title')}</h3>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block2p1')}</p>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block2p2')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-heading">{t('distinction.block3Title')}</h3>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block3p1')}</p>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block3p2')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-heading">{t('distinction.block4Title')}</h3>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block4p1')}</p>
              <ul className="mt-2 space-y-1 list-none text-body leading-relaxed">
                <li>{t('distinction.block4list1')}</li>
                <li>{t('distinction.block4list2')}</li>
                <li>{t('distinction.block4list3')}</li>
              </ul>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block4p2')}</p>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block4p3')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-heading">{t('distinction.block5Title')}</h3>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block5p1')}</p>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block5p2')}</p>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block5p3')}</p>
              <p className="mt-3 text-body leading-relaxed">{t('distinction.block5p4')}</p>
            </div>
          </div>
        </Section>

        {/* 7. OBSZAR DZIAŁANIA — H2+H3, lista myślniki, bez placeholderów */}
        <Section tone="alt">
          <h2 className="h2-system text-center">{t('serviceArea.title')}</h2>
          <GridFrame className="mt-10">
            <Region name="support" tabletSpan="half" desktopSpan="half">
              <div className="space-y-4 text-body leading-relaxed">
                <h3 className="text-lg font-semibold text-heading">{t('serviceArea.subtitle')}</h3>
                <p>{t('serviceArea.intro')}</p>
                <p>{t('serviceArea.introNote1')}</p>
                <p>{t('serviceArea.introNote2')}</p>
                <p className="font-medium text-heading">{t('serviceArea.bulletsTitle')}</p>
                <ul className="list-none space-y-1">
                  <li>– {t('serviceArea.bullet1')}</li>
                  <li>– {t('serviceArea.bullet2')}</li>
                  <li>– {t('serviceArea.bullet3')}</li>
                  <li>– {t('serviceArea.bullet4')}</li>
                </ul>
                <p>{t('serviceArea.close')}</p>
              </div>
            </Region>
            <Region name="support" tabletSpan="half" desktopSpan="half">
              <ServiceAreaMap labels={serviceAreaMapLabels} />
            </Region>
          </GridFrame>
        </Section>

        {/* 8. FINAL BINARY CLOSURE — 2 akapity domknięcia + CTA, bez powtórzeń */}
        <Section tone="authority">
          <div className="text-center max-w-[56ch] mx-auto">
            <h2 className="h2-system text-authority-on-dark">{t('finalCta.title')}</h2>
            <div className="mt-6 space-y-4 text-authority-on-dark/90 text-left">
              <p><PathwayCopy path="finalContext" /></p>
              <p>{t('finalCta.p2')}</p>
            </div>
            <div className="mt-10">
              <PathwayFinalCtaLink
                locale={locale}
                className="btn-primary !bg-surface-light !text-authority hover:!bg-surface-light-alt !border-surface-light inline-block"
              >
                {t('finalCta.cta')}
              </PathwayFinalCtaLink>
            </div>
          </div>
        </Section>
          </UsagePathwayLayer>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function UsagePathwayFallback({
  locale,
  selected,
  t,
}: {
  locale: string;
  selected: PathwayKey | null;
  t: (key: string) => string;
}) {
  const hasSelection = selected !== null;

  return (
    <Section
      tone={hasSelection ? 'light' : 'alt'}
      className={
        hasSelection
          ? 'section-primitive--first !pb-10 md:!pb-12'
          : 'section-primitive--first flex-1 !max-h-none !pt-5 md:!pt-6 !pb-8 md:!pb-12'
      }
    >
      <div className={hasSelection ? DIAGNOSTIC_SHELL_CLASS : COMPANY_SHELL_CLASS}>
        {!hasSelection && (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:items-center lg:gap-5">
              <div className="self-start bg-authority-bg text-authority-on-dark r px-6 py-6 md:px-8 md:py-7 lg:self-center lg:px-9 lg:py-8">
                <div className="flex max-w-[32rem] flex-col gap-4">
                  <div className="space-y-1">
                    <p className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-authority-on-dark/65 md:text-xs">
                      {t('hero.wordmark')}
                    </p>
                    <p className="text-xs leading-snug text-authority-on-dark/70">{t('hero.descriptor')}</p>
                  </div>

                  <h1 className="!mt-0 !mb-0 max-w-[24rem] text-[1.625rem] font-semibold leading-[1.22] tracking-[-0.02em] !text-authority-on-dark md:max-w-[26rem] md:text-[1.875rem] lg:max-w-[28rem] lg:text-[2rem]">
                    {t('pathway.companyHeadline')}
                  </h1>

                  <p className="!mt-0 !mb-0 max-w-[30rem] text-sm leading-relaxed text-authority-on-dark/75">
                    {t('pathway.companyLine')}
                  </p>

                  <div className="flex flex-wrap gap-1.5 border-t border-authority-on-dark/12 pt-3.5">
                    <FallbackHeroFactChip value={t('pathway.companyFacts.area.value')} />
                    <FallbackHeroFactChip value={t('pathway.companyFacts.documentation.value')} />
                    <FallbackHeroFactChip value={t('pathway.companyFacts.access.value')} />
                  </div>
                </div>
              </div>

              <FallbackProofAlbum t={t} />
            </div>

            <div className="bg-surface-light-alt r p-5 md:p-6">
              <div className="max-w-3xl">
                <p className="mb-2 text-sm font-semibold text-support">
                  {t('pathway.selectorEyebrow')}
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-heading leading-tight">
                  {t('pathway.selectorTitle')}
                </h2>
                <p className="mt-2 text-sm md:text-base text-body leading-relaxed">{t('pathway.selectorInstruction')}</p>
              </div>

              <div className="mt-5">
                <FallbackDiagnosticChoiceBlock locale={locale} selected={selected} t={t} />
                <p className="mt-5 text-sm text-muted leading-relaxed">{t('pathway.gateInstruction')}</p>
              </div>
            </div>
          </div>
        )}

        {hasSelection && selected && (
          <>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-5 text-sm text-body border-b border-structural-light pb-4">
              <span>
                <span className="text-muted">{t('pathway.selectedSituationLabel')}</span>{' '}
                <span className="font-medium text-heading">{t(`pathway.cards.${selected}.title`)}</span>
              </span>
              <Link
                href={`/${locale}`}
                className="text-sm text-body underline underline-offset-2 hover:text-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-authority rounded"
              >
                {t('pathway.changeSituation')}
              </Link>
            </div>

            <div className="mb-8 md:mb-10 border border-structural-light border-l-2 border-l-authority bg-surface-card r">
              <div className="p-5 md:p-6 space-y-5">
                <h3 className="text-base font-semibold text-heading leading-snug">
                  {t(`pathway.cards.${selected}.title`)}
                </h3>

                <div>
                  <p className="text-sm text-muted mb-1.5">{t('pathway.priorityLabel')}</p>
                  <p className="text-base text-body leading-relaxed">
                    {t(`pathway.detail.${selected}.priority`)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted mb-2">{t('pathway.changesLabel')}</p>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-body leading-relaxed">
                    {Array.from({ length: PATHWAY_POINT_COUNTS[selected] }, (_, i) => (
                      <li key={i}>{t(`pathway.detail.${selected}.point${i + 1}`)}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1">
                  <Link
                    href={`/${locale}/contact?pathway=${selected}`}
                    className="btn-primary inline-flex w-fit text-sm px-5 py-3"
                  >
                    {t('pathway.cta')}
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}

function FallbackProofAlbum({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <aside className="r overflow-hidden border border-structural-light bg-surface-card">
      <figure className="relative aspect-[4/3] w-full bg-authority-bg">
        <Image
          src="/photos/sentinel-technical-check-placeholder.png"
          alt={t('pathway.proof.album.technical.alt')}
          width={1456}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-authority-bg/85 px-4 py-3 md:px-5 md:py-4">
          <p className="text-sm md:text-base font-semibold leading-snug text-authority-on-dark">
            {t('pathway.proof.album.technical.label')}
          </p>
          <p className="mt-1 text-xs md:text-sm leading-relaxed text-authority-on-dark/85">
            {t('pathway.proof.album.technical.value')}
          </p>
        </figcaption>
      </figure>

      <div
        className="flex justify-center gap-2 px-4 py-3"
        role="tablist"
        aria-label={t('pathway.proof.controlsLabel')}
      >
        <span className="h-2 w-2 r bg-authority" aria-hidden />
        <span className="h-2 w-2 r bg-structural-light" aria-hidden />
        <span className="h-2 w-2 r bg-structural-light" aria-hidden />
      </div>
    </aside>
  );
}

function FallbackHeroFactChip({ value }: { value: string }) {
  return (
    <span className="inline-flex max-w-full items-center border border-authority-on-dark/15 px-2 py-0.5 text-[0.625rem] leading-snug text-authority-on-dark/65 md:text-[0.6875rem]">
      {value}
    </span>
  );
}

function FallbackDiagnosticChoiceBlock({
  locale,
  selected,
  t,
}: {
  locale: string;
  selected: PathwayKey | null;
  t: (key: string) => string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {PATHWAY_KEYS.map((key) => {
          const isSelected = selected === key;
          return (
            <Link
              key={key}
              href={`/${locale}?pathway=${key}`}
              aria-current={isSelected ? 'true' : undefined}
              className={`group block text-left w-full r border p-5 cursor-pointer transition-[background,border-color,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-authority hover:-translate-y-1 active:translate-y-0 ${
                isSelected
                  ? 'border-authority bg-surface-card'
                  : 'border-structural-light bg-surface-card hover:border-authority hover:bg-surface-light'
              }`}
            >
              <p className="text-base font-semibold text-heading mb-1.5 leading-snug">
                {t(`pathway.cards.${key}.title`)}
              </p>
              <p className="text-sm text-body leading-relaxed">{t(`pathway.cards.${key}.description`)}</p>
              <p className="mt-4 text-sm font-medium leading-snug text-support">
                {t(`pathway.cards.${key}.emphasis`)}
              </p>
              <span
                className={`mt-5 inline-flex items-center gap-2 r border px-3 py-2 text-sm font-semibold transition-colors ${
                  isSelected
                    ? 'border-authority bg-authority text-authority-on-dark'
                    : 'border-support text-support group-hover:bg-support group-hover:text-authority-on-dark'
                }`}
              >
                <span>{t('pathway.chooseModel')}</span>
                <span
                  className="text-base leading-none"
                  aria-hidden="true"
                >
                  -&gt;
                </span>
              </span>
            </Link>
          );
        })}
    </div>
  );
}

import { Suspense } from 'react';
import UsagePathwayLayer from '@/components/UsagePathwayLayer';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';
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

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen flex flex-col bg-surface-light">
        <Suspense fallback={<UsagePathwayFallback locale={locale} selected={null} t={t} />}>
          <UsagePathwayLayer>
        <Section tone="alt" variant="major" className="!pt-10">
          <div className="max-w-3xl text-left">
            <h2 className="h2-system font-bold mb-10">{t('systemIntro.title')}</h2>
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

        {/* 4. BEZ NAS / Z NAMI — panel contrast: document rhythm, max-w-7xl, air frame, closing anchor */}
        <Section tone="light">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-left pb-6 md:pb-10 -mb-10 md:-mb-16">
            <h2 className="h2-system font-bold">{t('contrast.title')}</h2>
            <div className="mt-3 h-px w-16 bg-structural-muted" aria-hidden />
            <p className="text-body leading-relaxed mt-4 mb-10">{t('contrast.intro')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 items-start">
              <div className="min-w-0 space-y-4 md:pr-6">
                <h3 className="text-lg font-semibold text-heading mt-0 pl-5">{t('contrast.leftHeading')}</h3>
                <ul className="list-disc pl-5 space-y-4 leading-relaxed text-base text-body">
                  <li>{t('contrast.left1')}</li>
                  <li>{t('contrast.left2')}</li>
                  <li>{t('contrast.left3')}</li>
                  <li>{t('contrast.left4')}</li>
                  <li>{t('contrast.left5')}</li>
                  <li>{t('contrast.left6')}</li>
                </ul>
                <p className="mt-2 text-sm text-body/80 leading-relaxed">
                  {t('contrast.leftClosing')}
                </p>
              </div>
              <div className="min-w-0 space-y-4 md:pl-6">
                <h3 className="text-lg font-semibold text-heading mt-0 pl-5">{t('contrast.rightHeading')}</h3>
                <ul className="list-disc pl-5 space-y-4 leading-relaxed text-base text-body">
                  <li>{t('contrast.right1')}</li>
                  <li>{t('contrast.right2')}</li>
                  <li>{t('contrast.right3')}</li>
                  <li>{t('contrast.right4')}</li>
                  <li>{t('contrast.right5')}</li>
                  <li>{t('contrast.right6')}</li>
                  <li>{t('contrast.right7')}</li>
                </ul>
                <p className="mt-2 text-sm text-body/80 leading-relaxed">
                  {t('contrast.rightClosing')}
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
            <div className="w-full max-w-[1120px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch justify-items-center">
              {/* Pakiet Podstawowy */}
              <div className="flex flex-col h-full w-full p-6 border border-structural-muted">
                <h3 className="text-lg font-semibold text-heading">{t('levels.level1Title')}</h3>
                <p className="mt-3 text-base font-medium text-body">{t('levels.axis1')}</p>
                <ul className="mt-5 space-y-5 text-sm text-body leading-relaxed list-disc pl-5">
                  <li>{t('levels.level1_1')}</li>
                  <li>{t('levels.level1_2')}</li>
                  <li>{t('levels.level1_3')}</li>
                </ul>
                <div className="mt-auto pt-5 border-t border-structural-muted">
                  <p className="text-sm text-body leading-relaxed">{t('levels.level1_6')}</p>
                </div>
              </div>
              {/* Pakiet Rozszerzony */}
              <div className="flex flex-col h-full w-full p-6 border border-structural-muted">
                <h3 className="text-lg font-semibold text-heading">{t('levels.level2Title')}</h3>
                <p className="mt-3 text-base font-medium text-body">{t('levels.axis2')}</p>
                <ul className="mt-5 space-y-5 text-sm text-body leading-relaxed list-disc pl-5">
                  <li>{t('levels.level2_1')}</li>
                  <li>{t('levels.level2_2')}</li>
                  <li>{t('levels.level2_3')}</li>
                </ul>
                <div className="mt-auto pt-5 border-t border-structural-muted">
                  <p className="text-sm text-body leading-relaxed">{t('levels.level2_6')}</p>
                </div>
              </div>
              {/* Pakiet Pełny */}
              <div className="flex flex-col h-full w-full p-6 border border-structural-muted">
                <h3 className="text-lg font-semibold text-heading">{t('levels.level3Title')}</h3>
                <p className="mt-3 text-base font-medium text-body">{t('levels.axis3')}</p>
                <ul className="mt-5 space-y-5 text-sm text-body leading-relaxed list-disc pl-5">
                  <li>{t('levels.level3_1')}</li>
                  <li>{t('levels.level3_2')}</li>
                  <li>{t('levels.level3_3')}</li>
                </ul>
                <div className="mt-auto pt-5 border-t border-structural-muted">
                  <p className="text-sm text-body leading-relaxed">{t('levels.level3_6')}</p>
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1120px] mx-auto">
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
              <div className="bg-surface-light-alt p-10 flex items-center justify-center r min-h-[200px]" aria-hidden />
            </Region>
          </GridFrame>
        </Section>

        {/* 8. FINAL BINARY CLOSURE — 2 akapity domknięcia + CTA, bez powtórzeń */}
        <Section tone="authority">
          <div className="text-center max-w-[56ch] mx-auto">
            <h2 className="h2-system text-authority-on-dark">{t('finalCta.title')}</h2>
            <div className="mt-6 space-y-4 text-authority-on-dark/90 text-left">
              <p>{t('finalCta.p1')}</p>
              <p>{t('finalCta.p2')}</p>
            </div>
            <div className="mt-10">
              <Link
                href={`/${locale}/services#qualification`}
                className="btn-primary !bg-surface-light !text-authority hover:!bg-surface-light-alt !border-surface-light inline-block"
              >
                {t('finalCta.cta')}
              </Link>
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
          : 'section-primitive--first flex-1 !max-h-none flex flex-col justify-center'
      }
    >
      <div className={DIAGNOSTIC_SHELL_CLASS}>
        {!hasSelection && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6 pb-6 md:pb-8 mb-6 md:mb-8 border-b border-structural-light">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-heading">
                  {t('hero.wordmark')}
                </h1>
                <h2 className="text-lg md:text-xl font-normal text-body mt-4 leading-snug">
                  {t('hero.descriptor')}
                </h2>
                <p className="text-base text-body mt-4 leading-relaxed">{t('hero.line3')}</p>
                <p className="text-base text-body mt-3 leading-relaxed">{t('hero.line4')}</p>
              </div>

              <div className="lg:pt-1">
                <h2 className="text-lg md:text-xl font-semibold text-heading leading-snug">
                  {t('pathway.selectorTitle')}
                </h2>
              </div>
            </div>

            <FallbackDiagnosticChoiceBlock locale={locale} selected={selected} t={t} />
            <p className="mt-5 text-sm text-muted leading-relaxed">{t('pathway.gateInstruction')}</p>
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

            <div className="mb-10 md:mb-12 border border-structural-light border-l-4 border-l-authority bg-surface-card r">
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-sm text-muted mb-1">{t('pathway.selectedLabel')}</p>
                  <p className="text-lg font-semibold text-heading leading-snug">
                    {t(`pathway.cards.${selected}.title`)}
                  </p>
                </div>

                <div className="h-px bg-structural-light" aria-hidden />

                <div>
                  <p className="text-sm text-muted mb-2">{t('pathway.priorityLabel')}</p>
                  <p className="text-base text-body leading-relaxed">
                    {t(`pathway.detail.${selected}.priority`)}
                  </p>
                </div>

                <div className="h-px bg-structural-light" aria-hidden />

                <div>
                  <p className="text-sm font-semibold text-heading mb-3">{t('pathway.changesLabel')}</p>
                  <ul className="list-disc pl-5 space-y-2 text-body leading-relaxed">
                    {Array.from({ length: PATHWAY_POINT_COUNTS[selected] }, (_, i) => (
                      <li key={i}>{t(`pathway.detail.${selected}.point${i + 1}`)}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1">
                  <Link href={`/${locale}/contact?pathway=${selected}`} className="btn-primary inline-flex w-fit">
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
    <div className="border border-structural-light bg-surface-card r overflow-hidden">
      <div className="divide-y divide-structural-light">
        {PATHWAY_KEYS.map((key) => {
          const isSelected = selected === key;
          return (
            <Link
              key={key}
              href={`/${locale}?pathway=${key}`}
              aria-current={isSelected ? 'true' : undefined}
              className={`block text-left w-full p-4 md:p-5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-authority ${
                isSelected
                  ? 'border-l-4 border-authority bg-surface-light-alt pl-[calc(1rem-3px)] md:pl-[calc(1.25rem-3px)]'
                  : 'bg-surface-card hover:bg-surface-light-alt/40'
              }`}
            >
              <p className="text-base font-semibold text-heading mb-1.5 leading-snug">
                {t(`pathway.cards.${key}.title`)}
              </p>
              <p className="text-sm text-body leading-relaxed">{t(`pathway.cards.${key}.description`)}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

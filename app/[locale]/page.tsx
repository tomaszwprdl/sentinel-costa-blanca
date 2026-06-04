import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';

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
      <main className="min-h-screen bg-surface-light">
        {/* 1. HERO — 20/40 spacing only; body lines same size; geo 85–88% + muted */}
        <section className="bg-surface-light hero-zone">
          <div className="container">
            <div className="section-intro max-w-[720px] text-left">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-10 text-heading">
                {t('hero.wordmark')}
              </h1>
              <h2 className="text-lg md:text-xl font-normal text-body mb-5 leading-[1.25]">
                {t('hero.descriptor')}
              </h2>
              <p className="text-base text-body font-normal mb-5 leading-relaxed">
                {t('hero.line3')}
              </p>
              <p className="text-base text-[var(--structural-muted)] leading-relaxed mb-5">
                {t('hero.line4')} {t('hero.line5')}
              </p>
              <p className="text-sm text-[var(--structural-muted)] mb-10 leading-relaxed">
                {t('hero.area')}
              </p>
              <div>
                <Link
                  href={`/${locale}/how-it-works`}
                  className="btn-primary w-fit inline-flex px-6 py-6"
                >
                  {t('hero.ctaPrimary')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPOSURE — max-w-3xl, prose spacing space-y-5, closure one paragraph */}
        <Section tone="alt">
          <div className="max-w-3xl text-left">
            <h2 className="h2-system font-bold mb-10">{t('exposure.title')}</h2>
            <div className="space-y-5">
              <p className="text-body leading-relaxed">{t('exposure.p1')}</p>
              <p className="text-body leading-relaxed">{t('exposure.p2')}</p>
              <p className="text-body leading-relaxed">{t('exposure.p3')}</p>
              <p className="text-body leading-relaxed">{t('exposure.p4')}</p>
              <p className="text-body leading-relaxed mt-5">{t('exposure.close1')} {t('exposure.close2')}</p>
            </div>
          </div>
        </Section>

        {/* 3. SYSTEM — max-w-3xl, 2 cols gap-x-10, space-y-5 in blocks; reduced top padding for flow from Exposure */}
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
      </main>
      <Footer />
    </>
  );
}

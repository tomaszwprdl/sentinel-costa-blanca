import { Suspense } from 'react';
import UsagePathwayLayer, { PathwayCopy, PathwayFinalCtaLink } from '@/components/UsagePathwayLayer';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
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

const PROCESS_KEYS = ['scope', 'documentation', 'procedure', 'decisions'] as const;
const PACKAGE_PREVIEW = [
  { marker: '01', title: 'level1Title', axis: 'axis1', purpose: 'level1Purpose' },
  { marker: '02', title: 'level2Title', axis: 'axis2', purpose: 'level2Purpose' },
  { marker: '03', title: 'level3Title', axis: 'axis3', purpose: 'level3Purpose' },
] as const;
const CREDIBILITY_KEYS = ['scope', 'documentation', 'decisions', 'responsibility'] as const;
const SERVICE_AREA_POINTS = ['bullet1', 'bullet2', 'bullet3', 'bullet4'] as const;

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
        <Section tone="light" className="!py-16 md:!py-20">
          <div className="visual-card-strong overflow-hidden">
            <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
              <p className="section-label">{t('systemIntro.eyebrow')}</p>
              <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(18rem,0.34fr)] lg:items-end">
                <div>
                  <h2 className="h2-system">{t('systemIntro.title')}</h2>
                  <p className="mt-3 max-w-[62ch] text-body">
                    <PathwayCopy path="systemIntroContext" />
                  </p>
                </div>
                <p className="mb-0 rounded-2xl border border-structural-light bg-surface-card p-4 text-sm leading-relaxed text-body">
                  {t('systemIntro.intro')}
                </p>
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-4">
              {PROCESS_KEYS.map((key, index) => (
                <article
                  key={key}
                  className="border-b border-structural-light p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-authority-bg text-xs font-black text-authority-on-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-5 mb-2 text-[11px] font-black uppercase tracking-wide text-muted">
                    {t(`systemIntro.process.${key}.label`)}
                  </p>
                  <h3 className="mb-2 text-xl font-black text-heading">
                    {t(`systemIntro.process.${key}.title`)}
                  </h3>
                  <p className="mb-0 text-sm leading-relaxed text-body">
                    {t(`systemIntro.process.${key}.body`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* 4. BEZ NAS / Z NAMI — shared section rhythm */}
        <Section tone="alt" className="!py-16 md:!py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.34fr)_minmax(0,0.66fr)] lg:items-start">
            <div>
              <p className="section-label">{t('contrast.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('contrast.title')}</h2>
              <p className="mt-4 max-w-[46ch] text-body leading-relaxed">
                <PathwayCopy path="contrast.intro" />
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="visual-card-strong overflow-hidden">
                <div className="border-b border-structural-light bg-surface-light-alt px-5 py-4">
                  <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-accent">
                    {t('contrast.leftModeLabel')}
                  </p>
                  <h3 className="mb-0 text-xl font-black text-heading">{t('contrast.leftHeading')}</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-3 text-sm leading-relaxed text-body">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span><PathwayCopy path={`contrast.left${item}`} /></span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-structural-light pt-4 text-sm font-semibold text-heading">
                    <PathwayCopy path="contrast.leftClosing" />
                  </p>
                </div>
              </article>

              <article className="visual-card-strong overflow-hidden">
                <div className="border-b border-structural-light bg-surface-card px-5 py-4">
                  <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-support">
                    {t('contrast.rightModeLabel')}
                  </p>
                  <h3 className="mb-0 text-xl font-black text-heading">{t('contrast.rightHeading')}</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-3 text-sm leading-relaxed text-body">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-support" aria-hidden />
                        <span><PathwayCopy path={`contrast.right${item}`} /></span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-structural-light pt-4 text-sm font-semibold text-heading">
                    <PathwayCopy path="contrast.rightClosing" />
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Section>

        {/* 5. ZAKRES PAKIETÓW — jedna oś: wrapper flex flex-col items-center; tekst max-w-[72ch]; grid w-full max-w-[1120px] mx-auto justify-items-center; karty w-full */}
        <Section tone="light" className="!py-16 md:!py-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(20rem,0.38fr)] lg:items-start">
            <div className="visual-card-strong overflow-hidden">
              <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
                <p className="section-label">{t('levels.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('levels.title')}</h2>
                <p className="mt-3 max-w-[62ch] text-body">{t('levels.intro')}</p>
              </div>
              <div className="grid gap-0 md:grid-cols-3">
                {PACKAGE_PREVIEW.map((item) => (
                  <article
                    key={item.marker}
                    className="border-b border-structural-light p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-6"
                  >
                    <p className="mb-3 text-xs font-black uppercase tracking-wide text-muted">{item.marker}</p>
                    <h3 className="mb-2 text-xl font-black text-heading">{t(`levels.${item.title}`)}</h3>
                    <p className="mb-3 text-sm font-bold text-support">{t(`levels.${item.axis}`)}</p>
                    <p className="mb-0 text-sm leading-relaxed text-body">{t(`levels.${item.purpose}`)}</p>
                  </article>
                ))}
              </div>
              <div className="flex flex-col gap-4 border-t border-structural-light bg-surface-light-alt px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
                <p className="mb-0 max-w-[58ch] text-sm leading-relaxed text-body">
                  {t('levels.systemRule1')} {t('levels.systemRule2')} {t('levels.systemRule3')}
                </p>
                <Link href={`/${locale}/services#package-fit`} className="btn-secondary w-fit text-sm">
                  {t('levels.ctaCompare')}
                </Link>
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="visual-card p-5 md:p-6">
                <p className="section-label">{t('serviceArea.eyebrow')}</p>
                <h2 className="mt-3 text-2xl font-black text-heading">{t('serviceArea.title')}</h2>
                <p className="mt-3 text-sm leading-relaxed text-body">{t('serviceArea.intro')}</p>
                <div className="mt-5 grid gap-2">
                  {SERVICE_AREA_POINTS.map((key) => (
                    <p key={key} className="mb-0 flex gap-3 border-b border-structural-light pb-2 text-sm text-body last:border-b-0 last:pb-0">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-support" aria-hidden />
                      <span>{t(`serviceArea.${key}`)}</span>
                    </p>
                  ))}
                </div>
              </div>
              <ServiceAreaMap labels={serviceAreaMapLabels} />
            </aside>
          </div>
        </Section>

        {/* 6. CO WYRÓŻNIA SENTINEL — bloki deklaracji modelu, 2 kolumny, bez card/badge, oś centralna */}
        <Section tone="alt" className="!py-16 md:!py-20">
          <div className="max-w-[760px]">
            <p className="section-label">{t('distinction.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('distinction.title')}</h2>
            <p className="mt-4 text-body leading-relaxed">
              <PathwayCopy path="distinctionIntro" />
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {CREDIBILITY_KEYS.map((key, index) => (
              <article key={key} className="visual-card p-5">
                <p className="mb-3 text-xs font-black uppercase tracking-wide text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-2 text-lg font-black text-heading">
                  {t(`distinction.cards.${key}.title`)}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-body">
                  {t(`distinction.cards.${key}.body`)}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* 7. OBSZAR DZIAŁANIA — H2+H3, lista myślniki, bez placeholderów */}
        <Section tone="authority" className="!py-16 md:!py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(16rem,0.32fr)] lg:items-end">
            <div>
              <p className="section-label text-authority-on-dark/70">{t('finalCta.eyebrow')}</p>
              <h2 className="h2-system mt-3 text-authority-on-dark">{t('finalCta.title')}</h2>
              <div className="mt-5 max-w-[62ch] space-y-3 text-authority-on-dark/86">
                <p><PathwayCopy path="finalContext" /></p>
                <p>{t('finalCta.p2')}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:items-stretch">
              <PathwayFinalCtaLink
                locale={locale}
                className="btn-primary !border-surface-light !bg-surface-light !text-authority hover:!bg-surface-light-alt"
              >
                {t('finalCta.cta')}
              </PathwayFinalCtaLink>
              <Link
                href={`/${locale}/services#package-fit`}
                className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority"
              >
                {t('finalCta.secondaryCta')}
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
      tone={hasSelection ? 'alt' : 'authority'}
      className={hasSelection ? 'section-primitive--first !pb-12' : 'visual-hero-section'}
    >
      {!hasSelection && (
        <div className="visual-hero-shell">
          <div className="visual-hero-media">
            <Image
              src="/photos/sentinel-costa-blanca-entry-hero.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="visual-hero-content">
            <div className="hero-copy-panel">
              <p className="hero-kicker">{t('pathway.companyEyebrow')}</p>
              <h1 className="hero-display">{t('pathway.companyHeadline')}</h1>
              <p className="hero-lead mt-6">{t('pathway.companyLine')}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-authority-on-dark/70">
                {t('pathway.companyProofLine')}
              </p>

              <div className="hero-fact-grid">
                <FallbackHeroFactChip label={t('pathway.companyFacts.area.label')} value={t('pathway.companyFacts.area.value')} />
                <FallbackHeroFactChip label={t('pathway.companyFacts.documentation.label')} value={t('pathway.companyFacts.documentation.value')} />
                <FallbackHeroFactChip label={t('pathway.companyFacts.access.label')} value={t('pathway.companyFacts.access.value')} />
              </div>
            </div>

            <div className="diagnostic-panel p-5 md:p-6">
              <h2 className="text-2xl leading-tight md:text-3xl">
                {t('pathway.selectorTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">{t('pathway.selectorInstruction')}</p>
              <div className="mt-5">
                <FallbackDiagnosticChoiceBlock locale={locale} selected={selected} t={t} />
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">{t('pathway.gateInstruction')}</p>
            </div>
          </div>
        </div>
      )}

      {hasSelection && selected && (
        <div className="mx-auto w-full max-w-5xl">
          <div className="diagnostic-result-top r mb-5 border border-structural-light bg-surface-card">
            <span className="text-sm text-body">
              <span className="text-muted">{t('pathway.selectedSituationLabel')}</span>{' '}
              <span className="font-bold text-heading">{t(`pathway.cards.${selected}.title`)}</span>
            </span>
            <Link href={`/${locale}`} className="btn-secondary min-h-0 px-4 py-2 text-sm">
              {t('pathway.changeSituation')}
            </Link>
          </div>

          <div className="diagnostic-result-shell">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.42fr)]">
              <div className="p-6 md:p-8">
                <p className="section-label">{t('pathway.selectedLabel')}</p>
                <h3 className="mt-2 text-3xl">{t(`pathway.cards.${selected}.title`)}</h3>
                <p className="mt-5 text-base leading-relaxed text-body">
                  {t(`pathway.detail.${selected}.priority`)}
                </p>
                <div className="mt-7">
                  <Link href={`/${locale}/contact?pathway=${selected}`} className="btn-primary inline-flex w-fit text-sm">
                    {t('pathway.cta')}
                  </Link>
                </div>
              </div>

              <div className="border-t border-structural-light bg-surface-light-alt p-6 md:p-8 lg:border-l lg:border-t-0">
                <p className="section-label">{t('pathway.changesLabel')}</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-body">
                  {Array.from({ length: PATHWAY_POINT_COUNTS[selected] }, (_, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{t(`pathway.detail.${selected}.point${i + 1}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

function FallbackHeroFactChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="hero-fact">
      <span>{label}</span>
      <strong className="mt-1 block text-sm font-bold leading-snug">{value}</strong>
    </div>
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
    <div className="diagnostic-choice-grid">
        {PATHWAY_KEYS.map((key) => {
          const isSelected = selected === key;
          return (
            <Link
              key={key}
              href={`/${locale}?pathway=${key}`}
              aria-current={isSelected ? 'true' : undefined}
              className="diagnostic-choice-card"
            >
              <span className="diagnostic-choice-card__title">
                {t(`pathway.cards.${key}.title`)}
              </span>
              <span className="diagnostic-choice-card__body">
                {t(`pathway.cards.${key}.description`)}
              </span>
              <span className="diagnostic-choice-card__footer">
                <span>{t(`pathway.cards.${key}.emphasis`)}</span>
                <span className="choice-arrow" aria-hidden>
                  -&gt;
                </span>
              </span>
            </Link>
          );
        })}
    </div>
  );
}

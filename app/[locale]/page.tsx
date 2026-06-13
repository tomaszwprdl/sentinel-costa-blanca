import { Suspense } from 'react';
import UsagePathwayLayer, { PathwayCopy, PathwayFinalCtaLink } from '@/components/UsagePathwayLayer';
import HeroGateFrame from '@/components/HeroGateFrame';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
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
      <main className="home-page min-h-screen flex flex-col bg-surface-light">
        <Suspense fallback={<UsagePathwayFallback locale={locale} selected={null} t={t} />}>
          <UsagePathwayLayer>
        <div className="home-pathway-body">
        <Section id="system-intro" tone="light" className="home-section home-section--route !py-16 md:!py-24">
          <div className="home-system-intro reveal-rise">
            <header className="home-system-intro__header">
              <p className="section-label">{t('systemIntro.eyebrow')}</p>
              <div className="home-route-open mt-4">
                <h2 className="h2-system home-route-open__title">{t('systemIntro.title')}</h2>
                <div className="home-route-open__context">
                  <p className="home-route-open__lead">
                    <PathwayCopy path="systemIntroContext" />
                  </p>
                  <p className="home-route-open__note mb-0">{t('systemIntro.intro')}</p>
                </div>
              </div>
            </header>
          </div>

          <ol className="home-process-rail reveal-stagger" aria-label={t('systemIntro.title')}>
            {PROCESS_KEYS.map((key, index) => (
              <li key={key} className="home-process-rail__step">
                <div className="home-process-rail__marker">
                  <span className="home-process-rail__num" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="home-process-rail__content">
                  <p className="home-process-rail__label">
                    {t(`systemIntro.process.${key}.label`)}
                  </p>
                  <h3 className="home-process-rail__title">
                    {t(`systemIntro.process.${key}.title`)}
                  </h3>
                  <p className="home-process-rail__body mb-0">
                    {t(`systemIntro.process.${key}.body`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* 4. BEZ NAS / Z NAMI — full split band: risk in ink, control on paper */}
        <Section tone="alt" className="home-section home-section--contrast !py-16 md:!py-24">
          <div className="reveal-rise">
            <p className="section-label">{t('contrast.eyebrow')}</p>
            <h2 className="h2-system mt-3 max-w-[24ch]">{t('contrast.title')}</h2>
            <p className="mt-4 max-w-[56ch] text-body leading-relaxed">
              <PathwayCopy path="contrast.intro" />
            </p>
          </div>

          <div className="home-contrast-band reveal-rise">
            <article className="home-contrast-band__half home-contrast-band__half--risk">
              <p className="home-contrast-band__mode">{t('contrast.leftModeLabel')}</p>
              <h3 className="home-contrast-band__heading">{t('contrast.leftHeading')}</h3>
              <ul className="home-contrast-band__list">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <span className="home-contrast-band__marker" aria-hidden />
                    <span><PathwayCopy path={`contrast.left${item}`} /></span>
                  </li>
                ))}
              </ul>
              <p className="home-contrast-band__closing">
                <PathwayCopy path="contrast.leftClosing" />
              </p>
            </article>

            <article className="home-contrast-band__half home-contrast-band__half--control">
              <p className="home-contrast-band__mode">{t('contrast.rightModeLabel')}</p>
              <h3 className="home-contrast-band__heading">{t('contrast.rightHeading')}</h3>
              <ul className="home-contrast-band__list">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <span className="home-contrast-band__marker" aria-hidden />
                    <span><PathwayCopy path={`contrast.right${item}`} /></span>
                  </li>
                ))}
              </ul>
              <p className="home-contrast-band__closing">
                <PathwayCopy path="contrast.rightClosing" />
              </p>
            </article>
          </div>

          <div className="home-mechanism-board reveal-rise" aria-label={t('proofLedger.title')}>
            <div className="home-mechanism-board__header">
              <p className="section-label">{t('proofLedger.label')}</p>
              <h3>{t('proofLedger.title')}</h3>
            </div>
            <div className="home-mechanism-board__track">
              {['issue', 'evidence', 'decision', 'action'].map((key, index) => (
                <article key={key} className="home-mechanism-board__step">
                  <span className="home-mechanism-board__index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4>{t(`proofLedger.steps.${key}.title`)}</h4>
                    <p>{t(`proofLedger.steps.${key}.body`)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* 5. ZAKRES PAKIETÓW — pełnowymiarowa drabina odpowiedzialności (vertical containment) */}
        <Section tone="light" className="home-section home-section--scope !py-16 md:!py-24">
          <div className="reveal-rise">
            <p className="section-label">{t('levels.eyebrow')}</p>
            <h2 className="h2-system mt-3 max-w-[26ch]">{t('levels.title')}</h2>
            <p className="mt-3 max-w-[62ch] text-body">{t('levels.intro')}</p>
          </div>

          <div className="home-level-ladder reveal-stagger">
            {PACKAGE_PREVIEW.map((item) => (
              <article key={item.marker} className="home-level-ladder__row">
                <span className="home-level-ladder__num" aria-hidden>{item.marker}</span>
                <div className="home-level-ladder__head">
                  <h3 className="home-level-ladder__title">{t(`levels.${item.title}`)}</h3>
                  <p className="home-level-ladder__axis mb-0">{t(`levels.${item.axis}`)}</p>
                </div>
                <p className="home-level-ladder__purpose mb-0">{t(`levels.${item.purpose}`)}</p>
              </article>
            ))}
          </div>

          <div className="home-level-ladder__rule reveal-rise">
            <p className="mb-0 max-w-[58ch] text-sm leading-relaxed text-body">
              {t('levels.systemRule1')} {t('levels.systemRule2')} {t('levels.systemRule3')}
            </p>
            <Link href={`/${locale}/services#package-fit`} className="btn-secondary w-fit text-sm">
              {t('levels.ctaCompare')}
            </Link>
          </div>
        </Section>

        {/* 6. CO WYRÓŻNIA SENTINEL — bloki deklaracji modelu, 2 kolumny, bez card/badge, oś centralna */}
        <Section tone="alt" className="home-section home-section--distinction !py-16 md:!py-20">
          <div className="max-w-[760px]">
            <p className="section-label">{t('distinction.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('distinction.title')}</h2>
            <p className="mt-4 text-body leading-relaxed">
              <PathwayCopy path="distinctionIntro" />
            </p>
          </div>
          <div className="reveal-stagger mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {CREDIBILITY_KEYS.map((key, index) => (
              <article key={key} className="home-distinction-item">
                <p className="home-distinction-item__num" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="home-distinction-item__title">
                  {t(`distinction.cards.${key}.title`)}
                </h3>
                <p className="home-distinction-item__body mb-0">
                  {t(`distinction.cards.${key}.body`)}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="light" className="home-section home-closing-section !pt-10 !pb-0">
          <div className="page-final-cta reveal-rise overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)]">
              <div className="page-final-cta__copy p-5 md:p-8">
                <p className="section-label">{t('finalCta.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('finalCta.title')}</h2>
                <div className="mt-4 max-w-[62ch] space-y-3 text-lg leading-relaxed text-body">
                  <p><PathwayCopy path="finalContext" /></p>
                  <p>{t('finalCta.p2')}</p>
                </div>
              </div>
              <div className="page-final-cta__panel p-5 md:p-8">
                <div className="flex flex-col gap-3">
                  <PathwayFinalCtaLink
                    locale={locale}
                    className="btn-primary btn-primary-inverse"
                  >
                    {t('finalCta.cta')}
                  </PathwayFinalCtaLink>
                  <Link
                    href={`/${locale}/services#package-fit`}
                    className="btn-secondary btn-secondary-on-dark"
                  >
                    {t('finalCta.secondaryCta')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
        </div>
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
        <HeroGateFrame>
          <div className="visual-hero-content">
            <div className="hero-copy-panel">
              <div className="hero-copy-stack">
                <p className="hero-kicker">{t('pathway.companyEyebrow')}</p>
                <h1 className="hero-display">{t('pathway.companyHeadline')}</h1>
                <p className="hero-lead">{t('pathway.companyLine')}</p>
                <p className="hero-proof-line max-w-xl text-sm leading-relaxed text-authority-on-dark/70">
                  {t('pathway.companyProofLine')}
                </p>
              </div>

              <div className="hero-fact-grid">
                <FallbackHeroFactChip label={t('pathway.companyFacts.area.label')} value={t('pathway.companyFacts.area.value')} />
                <FallbackHeroFactChip label={t('pathway.companyFacts.documentation.label')} value={t('pathway.companyFacts.documentation.value')} />
                <FallbackHeroFactChip label={t('pathway.companyFacts.access.label')} value={t('pathway.companyFacts.access.value')} />
              </div>
            </div>

            <div className="diagnostic-panel diagnostic-panel--gate">
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
        </HeroGateFrame>
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

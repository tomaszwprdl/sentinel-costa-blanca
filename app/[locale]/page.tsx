import { Suspense } from 'react';
import UsagePathwayLayer, {
  PathwayCopy,
  PathwayFinalCtaLink,
  PathwayModeLens,
  PathwayProcessPanel,
} from '@/components/UsagePathwayLayer';
import HeroGateFrame from '@/components/HeroGateFrame';
import HomeOperatingFloor from '@/components/HomeOperatingFloor';
import PropertyGlyph from '@/components/icons/PropertyGlyph';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import HomeContrastBlock from '@/components/HomeContrastBlock';
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
      <main id="main-content" tabIndex={-1} className="home-page min-h-screen flex flex-col bg-surface-light">
        <Suspense fallback={<UsagePathwayFallback locale={locale} selected={null} t={t} />}>
          <UsagePathwayLayer>
        <div className="home-pathway-body">
        <Section id="system-intro" tone="light" className="home-section home-section--route !py-16 md:!py-24">
          <div className="home-system-intro">
            <header className="home-system-intro__header">
              <p className="section-label">{t('systemIntro.eyebrow')}</p>
              <div className="home-route-open mt-4">
                <h2 className="h2-system home-route-open__title">{t('systemIntro.title')}</h2>
                <div className="home-route-open__context">
                  <p className="home-route-open__lead">
                    <PathwayCopy path="systemIntroContext" />
                  </p>
                  <PathwayModeLens />
                </div>
              </div>
            </header>
          </div>

          <PathwayProcessPanel />
        </Section>

        {/* 4. BEZ NAS / Z NAMI — private-use risk carousel; split band for the other pathways */}
        <Section tone="alt" className="home-section home-section--contrast !py-16 md:!py-24">
          <HomeContrastBlock />
        </Section>

        <section className="page-final-cta home-handoff-cta" aria-labelledby="home-handoff-cta-heading">
          <div className="home-handoff-cta__media">
            <Image
              src="/photos/final-cta-handoff-checklist.webp"
              alt={t('finalCta.mediaAlt')}
              fill
              sizes="100vw"
              className="home-handoff-cta__image"
              loading="eager"
            />
          </div>
          <div className="home-handoff-cta__scrim" aria-hidden />
          <span className="home-handoff-cta__edge home-handoff-cta__edge--top" aria-hidden />
          <span className="home-handoff-cta__edge home-handoff-cta__edge--bottom" aria-hidden />
          <div className="home-handoff-cta__inner">
            <div className="home-handoff-cta__copy">
              <p className="section-label">{t('finalCta.eyebrow')}</p>
              <h2 id="home-handoff-cta-heading" className="home-handoff-cta__title">
                <PathwayCopy path="finalCtaTitle" />
              </h2>
              <div className="home-handoff-cta__body">
                <p><PathwayCopy path="finalContext" /></p>
                <p><PathwayCopy path="finalCtaSupport" /></p>
              </div>
            </div>
            <aside className="home-handoff-cta__dock" aria-label={t('finalCta.eyebrow')}>
              <div className="home-handoff-cta__actions">
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
            </aside>
          </div>
        </section>
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
    <>
    <Section
      tone={hasSelection ? 'alt' : 'authority'}
      className={hasSelection ? 'section-primitive--first !pb-12' : 'visual-hero-section'}
    >
      {!hasSelection && (
        <HeroGateFrame>
          <div className="visual-hero-content">
            <div className="hero-copy-panel">
              <div className="hero-copy-stack">
                <p className="hero-kicker hero-kicker--property">
                  <PropertyGlyph className="hero-kicker__glyph" />
                  {t('pathway.companyEyebrow')}
                </p>
                <h1 className="hero-display hero-gate-title">
                  <span className="hero-gate-title__question">{t('pathway.companyHeadlineQuestion')}</span>
                  <span className="hero-gate-title__answer">
                    <span className="hero-gate-title__answer-brand">{t('pathway.companyHeadlineAnswerBrand')}</span>
                    {t('pathway.companyHeadlineAnswerRest')}
                  </span>
                </h1>
                <p className="hero-lead">{t('pathway.companyLine')}</p>
                <p className="mt-2 text-sm leading-relaxed text-authority-on-dark/80">
                  {t('pathway.companyMetaLine')}
                </p>
              </div>

              <div className="hero-fact-grid">
                <FallbackHeroFactChip label={t('pathway.companyFacts.area.label')} value={t('pathway.companyFacts.area.value')} />
                <FallbackHeroFactChip label={t('pathway.companyFacts.documentation.label')} value={t('pathway.companyFacts.documentation.value')} />
                <FallbackHeroFactChip label={t('pathway.companyFacts.access.label')} value={t('pathway.companyFacts.access.value')} />
              </div>

              <FallbackGateOperatorCue t={t} locale={locale} />

              <a href="#usage-situation-gate" className="gate-scroll-cue inline-flex lg:hidden">
                <span>{t('pathway.gateScrollCue')}</span>
              </a>
            </div>

            <div id="usage-situation-gate" className="diagnostic-panel diagnostic-panel--gate scroll-mt-28">
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
    {!hasSelection && <HomeOperatingFloor locale={locale} t={t} />}
    </>
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

function FallbackGateOperatorCue({
  t,
  locale,
}: {
  t: (key: string) => string;
  locale: string;
}) {
  return (
    <aside className="gate-operator-cue" aria-label={t('pathway.operatorCue.eyebrow')}>
      <div className="gate-operator-cue__identity">
        <Image
          src="/photos/aleksy-gugala-operator.jpg"
          alt={t('pathway.operatorCue.photoAlt')}
          width={96}
          height={96}
          sizes="44px"
          className="gate-operator-cue__photo"
        />
        <div className="gate-operator-cue__id-copy">
          <span className="gate-operator-cue__eyebrow">{t('pathway.operatorCue.eyebrow')}</span>
          <strong className="gate-operator-cue__name">{t('pathway.operatorCue.name')}</strong>
          <span className="gate-operator-cue__role">{t('pathway.operatorCue.role')}</span>
        </div>
      </div>
      <p className="gate-operator-cue__presence">{t('pathway.operatorCue.presence')}</p>
      <div className="gate-operator-cue__price">
        <span className="gate-operator-cue__price-label">{t('pathway.operatorCue.priceLabel')}</span>
        <span className="gate-operator-cue__price-text">
          <span className="gate-cost-line">
            <span className="gate-cost-lead">{t('pathway.operatorCue.priceTextLead')}</span>
            <span className="gate-cost-amount">{t('pathway.operatorCue.priceTextAmount')}</span>
          </span>
          <span className="gate-cost-detail">{t('pathway.operatorCue.priceTextTail')}</span>
        </span>
        <Link href={`/${locale}/services#estimator`} className="gate-operator-cue__estimate-btn">
          {t('pathway.operatorCue.priceLink')}
          <span className="choice-arrow" aria-hidden>
            -&gt;
          </span>
        </Link>
      </div>
    </aside>
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

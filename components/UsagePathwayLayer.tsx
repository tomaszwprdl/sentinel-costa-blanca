'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Section from '@/components/layout/Section';
import {
  PATHWAY_KEYS,
  normalizePathwayParam,
  type PathwayKey,
} from '@/lib/pathway';

const PATHWAY_POINT_COUNTS: Record<PathwayKey, number> = {
  'private-use-only': 5,
  'regular-guest-stays': 6,
  'mixed-not-defined': 5,
};

const DIAGNOSTIC_SHELL_CLASS = 'mx-auto w-full max-w-3xl';
const COMPANY_SHELL_CLASS = 'mx-auto w-full max-w-6xl';
const PROOF_SLIDES = ['technical', 'documentation', 'access'] as const;

type ProofSlideKey = (typeof PROOF_SLIDES)[number];

const PROOF_IMAGE_SOURCES: Record<ProofSlideKey, string> = {
  technical: '/photos/sentinel-technical-check-placeholder.png',
  documentation: '/photos/sentinel-report-placeholder.png',
  access: '/photos/sentinel-access-placeholder.png',
};

const PROOF_AUTOPLAY_MS = 4250;

type UsagePathwayLayerProps = {
  children: ReactNode;
};

export default function UsagePathwayLayer({ children }: UsagePathwayLayerProps) {
  const locale = useLocale();
  const t = useTranslations('home');
  const tp = useTranslations('home.pathway');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const paramPathway = normalizePathwayParam(searchParams.get('pathway'));
  const [isChanging, setIsChanging] = useState(false);
  const selected = paramPathway;

  const selectPathway = useCallback(
    (key: PathwayKey) => {
      setIsChanging(false);
      const params = new URLSearchParams(searchParams.toString());
      params.set('pathway', key);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const hasSelection = selected !== null;
  const isUnlocked = hasSelection;
  const showFullGate = !hasSelection;
  const showPicker = !hasSelection || isChanging;
  const gateSectionClassName = [
    'section-primitive--first',
    !hasSelection
      ? 'flex-1 !max-h-none !pt-5 md:!pt-6 !pb-8 md:!pb-12'
      : '!pb-10 md:!pb-12',
  ].join(' ');

  return (
    <>
      <Section tone={hasSelection ? 'light' : 'alt'} className={gateSectionClassName}>
        <div className={hasSelection ? DIAGNOSTIC_SHELL_CLASS : COMPANY_SHELL_CLASS}>
          {showFullGate && (
            <DiagnosticGateIntro t={t} tp={tp}>
              {showPicker && (
                <>
                  <DiagnosticChoiceBlock
                    selected={selected}
                    isChanging={isChanging}
                    onSelect={selectPathway}
                    t={tp}
                  />
                  {!hasSelection && (
                    <p className="mt-5 text-sm text-muted leading-relaxed">
                      {tp('gateInstruction')}
                    </p>
                  )}
                </>
              )}
            </DiagnosticGateIntro>
          )}

          {!showFullGate && showPicker && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-heading">{tp('selectorTitle')}</h2>
              <div className="mt-5">
                <DiagnosticChoiceBlock
                  selected={selected}
                  isChanging={isChanging}
                  onSelect={selectPathway}
                  t={tp}
                />
              </div>
            </div>
          )}

          {hasSelection && !isChanging && selected && (
            <>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-5 text-sm text-body border-b border-structural-light pb-4">
                <span>
                  <span className="text-muted">{tp('selectedSituationLabel')}</span>{' '}
                  <span className="font-medium text-heading">{tp(`cards.${selected}.title`)}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsChanging(true)}
                  className="text-sm text-body underline underline-offset-2 hover:text-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-authority rounded"
                >
                  {tp('changeSituation')}
                </button>
              </div>

              <PathwayDetailPanel locale={locale} pathway={selected} t={tp} />
            </>
          )}
        </div>
      </Section>

      {isUnlocked && children}
    </>
  );
}

export function PathwayCopy({ path }: { path: string }) {
  const t = useTranslations('home');
  const searchParams = useSearchParams();
  const selected = normalizePathwayParam(searchParams.get('pathway')) ?? 'private-use-only';

  return <>{t(`pathwayContent.${selected}.${path}`)}</>;
}

export function PathwayFinalCtaLink({
  locale,
  className,
  children,
}: {
  locale: string;
  className?: string;
  children: ReactNode;
}) {
  const searchParams = useSearchParams();
  const pathway = normalizePathwayParam(searchParams.get('pathway'));
  const href =
    pathway === 'mixed-not-defined'
      ? `/${locale}/contact?pathway=mixed-not-defined`
      : `/${locale}/services#qualification`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function DiagnosticGateIntro({
  t,
  tp,
  children,
}: {
  t: ReturnType<typeof useTranslations<'home'>>;
  tp: ReturnType<typeof useTranslations<'home.pathway'>>;
  children: ReactNode;
}) {
  return (
    <div className="space-y-5 md:space-y-6">
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.52fr)] lg:gap-6">
        <div className="self-start bg-authority-bg text-authority-on-dark r px-6 py-6 md:px-8 md:py-7 lg:px-9 lg:py-8">
          <p className="text-xs font-semibold tracking-[0.08em] uppercase text-authority-on-dark/70">
            {t('hero.wordmark')}
          </p>
          <p className="mt-1 text-xs leading-snug text-authority-on-dark/75 md:text-sm">
            {t('hero.descriptor')}
          </p>
          <h1 className="!mt-4 !mb-0 max-w-[33rem] text-3xl font-bold leading-[1.12] !text-authority-on-dark md:text-4xl lg:text-[2.625rem] xl:text-[2.75rem]">
            {tp('companyHeadline')}
          </h1>
          <p className="!mt-4 !mb-0 max-w-[31rem] text-sm leading-relaxed text-authority-on-dark/80 md:text-[0.9375rem]">
            {tp('companyLine')}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 border-t border-authority-on-dark/15 pt-4">
            <HeroFactChip value={tp('companyFacts.area.value')} />
            <HeroFactChip value={tp('companyFacts.documentation.value')} />
            <HeroFactChip value={tp('companyFacts.access.value')} />
          </div>
        </div>

        <ProofAlbum t={tp} />
      </div>

      <div className="bg-surface-light-alt r p-5 md:p-6">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-semibold text-support">
            {tp('selectorEyebrow')}
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-heading leading-tight">
            {tp('selectorTitle')}
          </h2>
          <p className="mt-2 text-sm md:text-base text-body leading-relaxed">{tp('selectorInstruction')}</p>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

function ProofAlbum({
  t,
}: {
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const activeSlide = PROOF_SLIDES[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    syncPreference();
    mediaQuery.addEventListener('change', syncPreference);
    return () => mediaQuery.removeEventListener('change', syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % PROOF_SLIDES.length);
    }, PROOF_AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <aside
      className="r overflow-hidden border border-structural-light bg-surface-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <figure className="relative aspect-[4/3] w-full bg-authority-bg">
        <Image
          src={PROOF_IMAGE_SOURCES[activeSlide]}
          alt={t(`proof.album.${activeSlide}.alt`)}
          width={1456}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-authority-bg/85 px-4 py-3 md:px-5 md:py-4">
          <p className="text-sm md:text-base font-semibold leading-snug text-authority-on-dark">
            {t(`proof.album.${activeSlide}.label`)}
          </p>
          <p className="mt-1 text-xs md:text-sm leading-relaxed text-authority-on-dark/85">
            {t(`proof.album.${activeSlide}.value`)}
          </p>
        </figcaption>
      </figure>

      <div
        className="flex justify-center gap-2 px-4 py-3"
        role="tablist"
        aria-label={t('proof.controlsLabel')}
      >
        {PROOF_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              aria-label={t(`proof.album.${slide}.label`)}
              className={`h-2 w-2 r transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-authority focus-visible:ring-offset-2 ${
                isActive ? 'bg-authority' : 'bg-structural-light hover:bg-support'
              }`}
            />
          );
        })}
      </div>
    </aside>
  );
}

function HeroFactChip({ value }: { value: string }) {
  return (
    <span className="inline-flex max-w-full items-center border border-authority-on-dark/20 bg-authority-on-dark/[0.04] px-3 py-1.5 text-[0.6875rem] leading-snug text-authority-on-dark/70 md:text-xs">
      {value}
    </span>
  );
}

function DiagnosticChoiceBlock({
  selected,
  isChanging,
  onSelect,
  t,
}: {
  selected: PathwayKey | null;
  isChanging: boolean;
  onSelect: (key: PathwayKey) => void;
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {PATHWAY_KEYS.map((key) => {
          const isSelected = selected === key && !isChanging;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(key)}
              aria-pressed={isSelected}
              className={`group text-left w-full r border p-5 cursor-pointer transition-[background,border-color,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-authority hover:-translate-y-1 active:translate-y-0 ${
                isSelected
                  ? 'border-authority bg-surface-card'
                  : 'border-structural-light bg-surface-card hover:border-authority hover:bg-surface-light'
              }`}
            >
              <p className="text-base font-semibold text-heading mb-1.5 leading-snug">
                {t(`cards.${key}.title`)}
              </p>
              <p className="text-sm text-body leading-relaxed">{t(`cards.${key}.description`)}</p>
              <p className="mt-4 text-sm font-medium leading-snug text-support">
                {t(`cards.${key}.emphasis`)}
              </p>
              <span
                className={`mt-5 inline-flex items-center gap-2 r border px-3 py-2 text-sm font-semibold transition-colors ${
                  isSelected
                    ? 'border-authority bg-authority text-authority-on-dark'
                    : 'border-support text-support group-hover:bg-support group-hover:text-authority-on-dark'
                }`}
              >
                <span>{t('chooseModel')}</span>
                <span
                  className="text-base leading-none"
                  aria-hidden="true"
                >
                  -&gt;
                </span>
              </span>
            </button>
          );
        })}
    </div>
  );
}

function PathwayDetailPanel({
  locale,
  pathway,
  t,
}: {
  locale: string;
  pathway: PathwayKey;
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
}) {
  return (
    <div className="mb-8 md:mb-10 border border-structural-light border-l-2 border-l-authority bg-surface-card r">
      <div className="p-5 md:p-6 space-y-5">
        <h3 className="text-base font-semibold text-heading leading-snug">
          {t(`cards.${pathway}.title`)}
        </h3>

        <div>
          <p className="text-sm text-muted mb-1.5">{t('priorityLabel')}</p>
          <p className="text-base text-body leading-relaxed">{t(`detail.${pathway}.priority`)}</p>
        </div>

        <div>
          <p className="text-sm text-muted mb-2">{t('changesLabel')}</p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-body leading-relaxed">
            {Array.from({ length: PATHWAY_POINT_COUNTS[pathway] }, (_, i) => (
              <li key={i}>{t(`detail.${pathway}.point${i + 1}`)}</li>
            ))}
          </ul>
        </div>

        <div className="pt-1">
          <Link
            href={`/${locale}/contact?pathway=${pathway}`}
            className="btn-primary inline-flex w-fit text-sm px-5 py-3"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useCallback, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Section from '@/components/layout/Section';
import OperationalCaptureFrame from '@/components/visuals/OperationalCaptureFrame';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';
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
const PROOF_SLIDES = ['area', 'documentation', 'access'] as const;

type ProofSlideKey = (typeof PROOF_SLIDES)[number];

type UsagePathwayLayerProps = {
  children: ReactNode;
};

export default function UsagePathwayLayer({ children }: UsagePathwayLayerProps) {
  const locale = useLocale();
  const t = useTranslations('home');
  const tp = useTranslations('home.pathway');
  const tCommon = useTranslations('common');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const serviceAreaMapLabels = {
    title: tCommon('serviceAreaMap.title'),
    center: tCommon('serviceAreaMap.center'),
    radius: tCommon('serviceAreaMap.radius'),
    boundary: tCommon('serviceAreaMap.boundary'),
    caption: tCommon('serviceAreaMap.caption'),
  };

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
            <DiagnosticGateIntro t={t} tp={tp} serviceAreaMapLabels={serviceAreaMapLabels}>
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
  serviceAreaMapLabels,
  children,
}: {
  t: ReturnType<typeof useTranslations<'home'>>;
  tp: ReturnType<typeof useTranslations<'home.pathway'>>;
  serviceAreaMapLabels: Parameters<typeof ServiceAreaMap>[0]['labels'];
  children: ReactNode;
}) {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:gap-5">
        <div className="bg-authority-bg text-authority-on-dark r p-5 md:p-7 lg:p-8">
          <div className="flex h-full flex-col">
            <div className="mb-3 md:mb-4">
              <p className="mb-1 text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-authority-on-dark/75">
                {t('hero.wordmark')}
              </p>
              <p className="text-sm text-authority-on-dark/80 leading-snug">
                {t('hero.descriptor')}
              </p>
            </div>
            <h1 className="max-w-[42rem] text-[2.05rem] md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-authority-on-dark">
              {tp('companyHeadline')}
            </h1>
            <p className="mt-4 max-w-[38rem] text-sm md:text-base text-authority-on-dark/85 leading-relaxed">
              {tp('companyLine')}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-authority-on-dark/20 pt-4 md:grid-cols-3 lg:mt-auto">
              <HeroFact value={tp('companyFacts.area.value')} />
              <HeroFact value={tp('companyFacts.documentation.value')} />
              <HeroFact value={tp('companyFacts.access.value')} />
            </div>
          </div>
        </div>

        <ProofAlbum t={tp} serviceAreaMapLabels={serviceAreaMapLabels} />
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
  serviceAreaMapLabels,
}: {
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
  serviceAreaMapLabels: Parameters<typeof ServiceAreaMap>[0]['labels'];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = PROOF_SLIDES[activeIndex];

  return (
    <aside className="border border-structural-light bg-surface-card r p-4 md:p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold leading-snug text-heading">{t('proof.eyebrow')}</p>
        <p className="text-xs text-muted">{activeIndex + 1} / {PROOF_SLIDES.length}</p>
      </div>

      <div className="mt-4">
        <ProofSlideVisual
          slide={activeSlide}
          t={t}
          serviceAreaMapLabels={serviceAreaMapLabels}
        />
      </div>

      <div className="mt-4">
        <p className="text-base font-semibold leading-snug text-heading">
          {t(`companyFacts.${activeSlide}.label`)}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-body">
          {t(`companyFacts.${activeSlide}.value`)}
        </p>
      </div>

      <div className="mt-4 flex gap-2" role="tablist" aria-label={t('proof.eyebrow')}>
        {PROOF_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              aria-label={t(`companyFacts.${slide}.label`)}
              className={`h-2.5 flex-1 r transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-authority ${
                isActive ? 'bg-authority' : 'bg-structural-light hover:bg-support'
              }`}
            />
          );
        })}
      </div>
    </aside>
  );
}

function ProofSlideVisual({
  slide,
  t,
  serviceAreaMapLabels,
}: {
  slide: ProofSlideKey;
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
  serviceAreaMapLabels: Parameters<typeof ServiceAreaMap>[0]['labels'];
}) {
  if (slide === 'area') {
    return <ServiceAreaMap labels={serviceAreaMapLabels} compact />;
  }

  if (slide === 'access') {
    return (
      <OperationalCaptureFrame
        reference={t('proof.capture.reference')}
        label={t('proof.capture.label')}
        note={t('proof.capture.note')}
        kind="lock"
        compact
      />
    );
  }

  return (
    <div className="border border-structural-light bg-surface-light-alt r p-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted">SEN-INS</p>
        <span className="mt-2 h-px w-10 bg-structural-muted" aria-hidden />
      </div>
      <div className="mt-3 border border-structural-light bg-surface-card p-3">
        <div className="h-3 w-24 bg-structural-muted/35" aria-hidden />
        <div className="mt-4 space-y-2">
          <div className="h-2 w-full bg-structural-muted/25" aria-hidden />
          <div className="h-2 w-5/6 bg-structural-muted/25" aria-hidden />
          <div className="h-2 w-2/3 bg-structural-muted/25" aria-hidden />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <span className="h-12 border border-structural-light bg-surface-light-alt" aria-hidden />
          <span className="h-12 border border-structural-light bg-surface-light-alt" aria-hidden />
          <span className="h-12 border border-structural-light bg-surface-light-alt" aria-hidden />
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">{t('proof.capture.note')}</p>
    </div>
  );
}

function HeroFact({ value }: { value: string }) {
  return (
    <div className="flex gap-2.5 text-sm leading-snug text-authority-on-dark/85">
      <span className="mt-2 h-px w-4 shrink-0 bg-authority-on-dark/35" aria-hidden />
      <p className="mb-0">{value}</p>
    </div>
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

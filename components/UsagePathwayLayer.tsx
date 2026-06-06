'use client';

import { useCallback, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Section from '@/components/layout/Section';
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
      ? 'flex-1 !max-h-none !pt-6 md:!pt-8 !pb-10 md:!pb-14'
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
    <div className="space-y-5 md:space-y-7">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.68fr)] lg:gap-6">
        <div className="bg-authority-bg text-authority-on-dark r p-5 md:p-8 lg:p-10">
          <div className="mb-4 md:mb-6">
            <p className="mb-1 text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-authority-on-dark/75">
              {t('hero.wordmark')}
            </p>
            <p className="text-sm text-authority-on-dark/80 leading-snug">
              {t('hero.descriptor')}
            </p>
          </div>
          <h1 className="max-w-[42rem] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-authority-on-dark">
            {tp('companyHeadline')}
          </h1>
          <p className="mt-4 max-w-[38rem] text-sm md:text-base text-authority-on-dark/85 leading-relaxed">
            {tp('companyLine')}
          </p>

          <p className="mt-5 md:mt-6 max-w-[34rem] border-l-2 border-authority-on-dark/30 pl-4 text-sm text-authority-on-dark/80 leading-relaxed">
            {tp('companyProofLine')}
          </p>
        </div>

        <DiagnosticProofPanel t={tp} serviceAreaMapLabels={serviceAreaMapLabels} />
      </div>

      <div className="bg-surface-light-alt r p-5 md:p-7">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-semibold text-support">
            {tp('selectorEyebrow')}
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-heading leading-tight">
            {tp('selectorTitle')}
          </h2>
          <p className="mt-2 text-sm md:text-base text-body leading-relaxed">{tp('selectorInstruction')}</p>
        </div>

        <div className="mt-5 md:mt-6">{children}</div>
      </div>
    </div>
  );
}

function DiagnosticProofPanel({
  t,
  serviceAreaMapLabels,
}: {
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
  serviceAreaMapLabels: Parameters<typeof ServiceAreaMap>[0]['labels'];
}) {
  return (
    <div className="border border-structural-light bg-surface-card r p-4 md:p-5">
      <div className="max-w-[30rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{t('proof.eyebrow')}</p>
        <h2 className="mt-2 text-base md:text-lg font-semibold leading-snug text-heading">{t('proof.title')}</h2>
        <p className="mt-2 text-sm text-body leading-relaxed">{t('proof.summary')}</p>
      </div>

      <ServiceAreaMap labels={serviceAreaMapLabels} compact className="mt-4" />

      <div className="mt-4 space-y-2.5">
        <ProofFact value={t('proof.facts.response.value')} />
        <ProofFact value={t('proof.facts.reports.value')} />
        <ProofFact value={t('proof.facts.access.value')} />
      </div>
    </div>
  );
}

function ProofFact({ value }: { value: string }) {
  return (
    <div className="flex gap-3 text-sm leading-relaxed text-body">
      <span className="mt-2 h-px w-5 shrink-0 bg-structural-muted" aria-hidden />
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

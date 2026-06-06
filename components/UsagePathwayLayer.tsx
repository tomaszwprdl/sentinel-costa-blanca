'use client';

import { useCallback, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Section from '@/components/layout/Section';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';
import OperationalCaptureFrame from '@/components/visuals/OperationalCaptureFrame';
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
      ? 'flex-1 !max-h-none flex flex-col justify-center'
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
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.82fr)] lg:gap-6">
        <div className="bg-authority-bg text-authority-on-dark r p-6 md:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-authority-on-dark/70">
            {tp('companyEyebrow')}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-authority-on-dark">
            {t('hero.wordmark')}
          </h1>
          <h2 className="text-lg md:text-xl font-normal text-authority-on-dark/90 mt-4 leading-snug">
            {t('hero.descriptor')}
          </h2>
          <p className="mt-5 max-w-[38rem] text-base md:text-lg text-authority-on-dark/85 leading-relaxed">
            {tp('companyLine')}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <CompanyFact label={tp('companyFacts.area.label')} value={tp('companyFacts.area.value')} />
            <CompanyFact label={tp('companyFacts.documentation.label')} value={tp('companyFacts.documentation.value')} />
            <CompanyFact label={tp('companyFacts.access.label')} value={tp('companyFacts.access.value')} />
          </div>
        </div>

        <DiagnosticProofPanel t={tp} serviceAreaMapLabels={serviceAreaMapLabels} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(16rem,0.36fr)_minmax(0,1fr)]">
        <div className="border border-structural-light bg-surface-card r p-5 md:p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            {tp('selectorEyebrow')}
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-heading leading-tight">
            {tp('selectorTitle')}
          </h2>
          <p className="mt-4 text-sm text-body leading-relaxed">{t('hero.line4')}</p>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

function CompanyFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-authority-on-dark/25 pt-3">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-authority-on-dark/60">
        {label}
      </p>
      <p className="text-sm font-medium leading-snug text-authority-on-dark">{value}</p>
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
    <div className="border border-structural-light bg-surface-card r overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{t('proof.eyebrow')}</p>
        <h2 className="mt-2 text-lg font-semibold leading-snug text-heading">{t('proof.title')}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[minmax(0,1fr)_minmax(9rem,0.55fr)] md:p-5">
        <ServiceAreaMap labels={serviceAreaMapLabels} compact />
        <OperationalCaptureFrame
          compact
          kind="lock"
          reference={t('proof.capture.reference')}
          label={t('proof.capture.label')}
          note={t('proof.capture.note')}
        />
      </div>
      <div className="grid grid-cols-1 border-t border-structural-light md:grid-cols-3">
        <ProofFact label={t('proof.facts.response.label')} value={t('proof.facts.response.value')} />
        <ProofFact label={t('proof.facts.reports.label')} value={t('proof.facts.reports.value')} />
        <ProofFact label={t('proof.facts.access.label')} value={t('proof.facts.access.value')} />
      </div>
    </div>
  );
}

function ProofFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-structural-light px-5 py-4 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{label}</p>
      <p className="text-sm font-medium leading-snug text-body">{value}</p>
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
    <div className="border border-structural-light bg-surface-card r overflow-hidden">
      <div className="divide-y divide-structural-light">
        {PATHWAY_KEYS.map((key) => {
          const isSelected = selected === key && !isChanging;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(key)}
              aria-pressed={isSelected}
              className={`text-left w-full p-4 md:p-5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-authority ${
                isSelected
                  ? 'border-l-4 border-authority bg-surface-light-alt pl-[calc(1rem-3px)] md:pl-[calc(1.25rem-3px)]'
                  : 'bg-surface-card hover:bg-surface-light-alt/40'
              }`}
            >
              <p className="text-base font-semibold text-heading mb-1.5 leading-snug">
                {t(`cards.${key}.title`)}
              </p>
              <p className="text-sm text-body leading-relaxed">{t(`cards.${key}.description`)}</p>
              <p className="mt-3 border-t border-structural-light pt-3 text-xs font-medium uppercase tracking-[0.08em] text-muted">
                {t(`cards.${key}.emphasis`)}
              </p>
            </button>
          );
        })}
      </div>
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

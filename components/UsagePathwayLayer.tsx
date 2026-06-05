'use client';

import { useCallback, useState, type ReactNode } from 'react';
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

  return (
    <>
      <Section tone="light" className="section-primitive--first hero-zone !pb-8 md:!pb-10">
        <div className="container max-w-7xl">
          {showFullGate && (
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 lg:items-start mb-8 md:mb-10">
              <div className="max-w-xl">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-heading">
                  {t('hero.wordmark')}
                </h1>
                <h2 className="text-lg md:text-xl font-normal text-body mt-4 leading-snug">
                  {t('hero.descriptor')}
                </h2>
                <p className="text-base text-body mt-4 leading-relaxed">{t('hero.line3')}</p>
                <p className="text-base text-body mt-3 leading-relaxed">{t('hero.line4')}</p>
              </div>

              {showPicker && (
                <div className="lg:pt-2">
                  <h2 className="text-lg md:text-xl font-semibold text-heading mb-5 leading-snug">
                    {tp('selectorTitle')}
                  </h2>
                  <PathwayCards
                    selected={selected}
                    isChanging={isChanging}
                    onSelect={selectPathway}
                    t={tp}
                  />
                  {!hasSelection && (
                    <p className="mt-5 text-sm text-muted leading-relaxed">{tp('gateInstruction')}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {!showFullGate && showPicker && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-heading mb-5">{tp('selectorTitle')}</h2>
              <PathwayCards
                selected={selected}
                isChanging={isChanging}
                onSelect={selectPathway}
                t={tp}
              />
            </div>
          )}

          {hasSelection && !isChanging && selected && (
            <>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-6 text-sm text-body border-b border-structural-light pb-4">
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

function PathwayCards({
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      {PATHWAY_KEYS.map((key) => {
        const isSelected = selected === key && !isChanging;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            aria-pressed={isSelected}
            className={`text-left w-full min-h-[7.5rem] md:min-h-[8.5rem] p-5 md:p-6 border r transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-authority focus-visible:ring-offset-2 ${
              isSelected
                ? 'border-authority border-l-4 bg-surface-light-alt'
                : 'border-structural-light bg-surface-card hover:border-structural-muted hover:bg-surface-light-alt/40'
            }`}
          >
            <p className="text-base font-semibold text-heading mb-2 leading-snug">
              {t(`cards.${key}.title`)}
            </p>
            <p className="text-sm text-body leading-relaxed">{t(`cards.${key}.description`)}</p>
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
    <div className="w-full border border-structural-light bg-surface-light-alt r p-6 md:p-8 mb-8 md:mb-10">
      <p className="text-base text-body leading-relaxed mb-3">
        <span className="text-muted">{t('selectedLabel')}</span>{' '}
        <span className="font-semibold text-heading">{t(`cards.${pathway}.title`)}</span>
      </p>
      <p className="text-base text-body leading-relaxed mb-6">
        <span className="text-muted">{t('priorityLabel')}</span>{' '}
        {t(`detail.${pathway}.priority`)}
      </p>
      <p className="text-sm font-semibold text-heading mb-3">{t('changesLabel')}</p>
      <ul className="list-disc pl-5 space-y-2 text-body leading-relaxed mb-6 max-w-3xl">
        {Array.from({ length: PATHWAY_POINT_COUNTS[pathway] }, (_, i) => (
          <li key={i}>{t(`detail.${pathway}.point${i + 1}`)}</li>
        ))}
      </ul>
      <Link
        href={`/${locale}/contact?pathway=${pathway}`}
        className="btn-primary inline-flex w-fit"
      >
        {t('cta')}
      </Link>
    </div>
  );
}

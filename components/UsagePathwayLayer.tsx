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

const DIAGNOSTIC_SHELL_CLASS = 'mx-auto w-full max-w-3xl';

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
      ? 'flex-1 !max-h-none flex flex-col justify-center'
      : '!pb-10 md:!pb-12',
  ].join(' ');

  return (
    <>
      <Section tone={hasSelection ? 'light' : 'alt'} className={gateSectionClassName}>
        <div className={DIAGNOSTIC_SHELL_CLASS}>
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
            {tp('selectorTitle')}
          </h2>
        </div>
      </div>

      {children}
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

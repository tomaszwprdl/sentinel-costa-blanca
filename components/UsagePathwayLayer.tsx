'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Section from '@/components/layout/Section';
import PathwaySituationDiagram from '@/components/visuals/PathwaySituationDiagram';
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
  const tp = useTranslations('home.pathway');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = normalizePathwayParam(searchParams.get('pathway'));
  const [isChanging, setIsChanging] = useState(false);
  const [pendingSelection, setPendingSelection] = useState<PathwayKey | null>(null);
  const pendingTimerRef = useRef<number | null>(null);

  const selectPathway = useCallback(
    (key: PathwayKey) => {
      if (pendingTimerRef.current !== null) {
        window.clearTimeout(pendingTimerRef.current);
      }

      setPendingSelection(key);
      setIsChanging(false);
      const params = new URLSearchParams(searchParams.toString());
      params.set('pathway', key);
      const query = params.toString();
      const nextHref = query ? `${pathname}?${query}` : pathname;

      pendingTimerRef.current = window.setTimeout(() => {
        router.replace(nextHref, { scroll: false });
        setPendingSelection(null);
        pendingTimerRef.current = null;
      }, 160);
    },
    [pathname, router, searchParams]
  );

  useEffect(() => {
    return () => {
      if (pendingTimerRef.current !== null) {
        window.clearTimeout(pendingTimerRef.current);
      }
    };
  }, []);

  const hasSelection = selected !== null;
  const showFullGate = !hasSelection;
  const showPicker = !hasSelection || isChanging;
  const activeSelection = pendingSelection ?? selected;

  return (
    <>
      {showFullGate && (
        <Section tone="authority" className="visual-hero-section">
          <DiagnosticGateIntro tp={tp}>
            <DiagnosticChoiceBlock
              selected={activeSelection}
              isChanging={isChanging}
              onSelect={selectPathway}
              t={tp}
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {tp('gateInstruction')}
            </p>
          </DiagnosticGateIntro>
        </Section>
      )}

      {!showFullGate && (
        <Section tone="alt" className="section-primitive--first !pb-12">
          <div className="mx-auto w-full max-w-5xl">
            {showPicker && (
              <div className="diagnostic-result-shell motion-panel-reveal mb-8">
                <div className="diagnostic-result-top">
                  <div>
                    <h2 className="text-2xl md:text-3xl">{tp('selectorTitle')}</h2>
                    <p className="mt-2 max-w-2xl text-sm text-body">{tp('selectorInstruction')}</p>
                  </div>
                </div>
                <div className="diagnostic-result-body">
                  <DiagnosticChoiceBlock
                    selected={activeSelection}
                    isChanging={isChanging}
                    onSelect={selectPathway}
                    t={tp}
                  />
                </div>
              </div>
            )}

            {hasSelection && !isChanging && selected && (
              <>
                <div className="diagnostic-result-top motion-panel-reveal r mb-5 border border-structural-light bg-surface-card">
                  <span className="text-sm text-body">
                    <span className="text-muted">{tp('selectedSituationLabel')}</span>{' '}
                    <span className="font-bold text-heading">{tp(`cards.${selected}.title`)}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsChanging(true)}
                    className="btn-secondary min-h-0 px-4 py-2 text-sm"
                  >
                    {tp('changeSituation')}
                  </button>
                </div>

                <PathwayDetailPanel key={selected} locale={locale} pathway={selected} t={tp} />
              </>
            )}
          </div>
        </Section>
      )}

      {hasSelection && children}
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
  const href = pathway ? `/${locale}/contact?pathway=${pathway}` : `/${locale}/contact`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function DiagnosticGateIntro({
  tp,
  children,
}: {
  tp: ReturnType<typeof useTranslations<'home.pathway'>>;
  children: ReactNode;
}) {
  return (
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

      <div className="visual-hero-content motion-entrance">
        <div className="hero-copy-panel motion-entrance">
          <p className="hero-kicker">{tp('companyEyebrow')}</p>
          <h1 className="hero-display">{tp('companyHeadline')}</h1>
          <p className="hero-lead mt-6">{tp('companyLine')}</p>
          <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-authority-on-dark/70 sm:block">
            {tp('companyProofLine')}
          </p>

          <div className="hero-fact-grid">
            <HeroFactChip label={tp('companyFacts.area.label')} value={tp('companyFacts.area.value')} />
            <HeroFactChip label={tp('companyFacts.documentation.label')} value={tp('companyFacts.documentation.value')} />
            <HeroFactChip label={tp('companyFacts.access.label')} value={tp('companyFacts.access.value')} />
          </div>

          <a href="#usage-situation-gate" className="gate-scroll-cue mt-5 inline-flex lg:hidden">
            <span>{tp('gateScrollCue')}</span>
          </a>
        </div>

        <div id="usage-situation-gate" className="diagnostic-panel diagnostic-panel--gate motion-panel-reveal scroll-mt-28">
          <h2 className="text-2xl leading-tight md:text-3xl">
            {tp('selectorTitle')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body">
            {tp('selectorInstruction')}
          </p>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

function HeroFactChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="hero-fact">
      <span>{label}</span>
      <strong className="mt-1 block text-sm font-bold leading-snug">{value}</strong>
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
    <div className="diagnostic-choice-grid motion-entrance">
      {PATHWAY_KEYS.map((key) => {
        const isSelected = selected === key && !isChanging;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            aria-pressed={isSelected}
            className="diagnostic-choice-card"
          >
            <span className="diagnostic-choice-card__title">
              {t(`cards.${key}.title`)}
            </span>
            <span className="diagnostic-choice-card__body">
              {t(`cards.${key}.description`)}
            </span>
            <span className="diagnostic-choice-card__footer">
              <span>{t(`cards.${key}.emphasis`)}</span>
              <span className="choice-arrow" aria-hidden>
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
  const primaryHref =
    pathway === 'mixed-not-defined'
      ? `/${locale}/contact?pathway=mixed-not-defined`
      : `/${locale}/services#qualification`;
  const secondaryHref =
    pathway === 'mixed-not-defined'
      ? `/${locale}/services#qualification`
      : `/${locale}/contact?pathway=${pathway}`;
  const primaryLabel = pathway === 'mixed-not-defined' ? t('reviewCta') : t('servicesCta');
  const secondaryLabel = pathway === 'mixed-not-defined' ? t('servicesCta') : t('reviewCta');

  return (
    <div className="diagnostic-result-shell motion-panel-reveal">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.45fr)]">
        <div className="pathway-result-main p-6 pt-7 md:p-8 md:pt-8">
          <p className="section-label hidden md:block">{t('selectedLabel')}</p>
          <h2 className="mt-0 max-w-[18ch] text-3xl font-black leading-tight text-heading md:mt-2 md:text-4xl">
            {t(`cards.${pathway}.title`)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body">
            {t(`detail.${pathway}.priority`)}
          </p>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            <div className="rounded-2xl border border-structural-light bg-surface-light-alt p-4">
              <p className="mb-2 text-[11px] font-black uppercase tracking-wide text-muted">
                {t('meaningLabel')}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-body">
                {t(`detail.${pathway}.meaning`)}
              </p>
            </div>
            <div className="rounded-2xl border border-structural-light bg-surface-light-alt p-4">
              <p className="mb-2 text-[11px] font-black uppercase tracking-wide text-muted">
                {t('nextLabel')}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-body">
                {t(`detail.${pathway}.next`)}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 lg:flex-row">
            <Link
              href={primaryHref}
              className="btn-primary inline-flex w-fit text-sm"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="btn-secondary inline-flex w-fit text-sm"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="border-t border-structural-light bg-surface-light-alt p-6 md:p-8 lg:border-l lg:border-t-0">
          <PathwaySituationDiagram pathway={pathway} className="motion-panel-reveal mb-5 shadow-none" />
          <p className="section-label">{t('changesLabel')}</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-body">
            {Array.from({ length: PATHWAY_POINT_COUNTS[pathway] }, (_, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{t(`detail.${pathway}.point${i + 1}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

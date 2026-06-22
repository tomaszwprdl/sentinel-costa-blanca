'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import HeroGateFrame from '@/components/HeroGateFrame';
import Section from '@/components/layout/Section';
import OperationalField from '@/components/graphics/OperationalField';
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

const PATHWAY_EVIDENCE_ROW_KEYS = ['first', 'second', 'third'] as const;

const PATHWAY_MEDIA: Record<PathwayKey, string> = {
  'private-use-only': '/photos/home-pathway-private-empty-check.webp',
  'regular-guest-stays': '/photos/home-pathway-guest-readiness.webp',
  'mixed-not-defined': '/photos/home-pathway-mixed-decision-threshold.webp',
};

// Each pathway carries its own operational geometry on the selected hero
const PATHWAY_FIELD: Record<PathwayKey, 'inspection' | 'turnover' | 'classification'> = {
  'private-use-only': 'inspection',
  'regular-guest-stays': 'turnover',
  'mixed-not-defined': 'classification',
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
          <DiagnosticGateIntro tp={tp} locale={locale}>
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

      {!showFullGate && showPicker && (
        <Section tone="alt" className="section-primitive--first !pb-12">
          <div className="mx-auto w-full max-w-5xl">
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
          </div>
        </Section>
      )}

      {!showFullGate && hasSelection && !isChanging && selected && (
        <PathwayHero
          key={selected}
          locale={locale}
          pathway={selected}
          t={tp}
          onChange={() => setIsChanging(true)}
        />
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

export function PathwayModeLens() {
  const t = useTranslations('home');
  const searchParams = useSearchParams();
  const selected = normalizePathwayParam(searchParams.get('pathway')) ?? 'private-use-only';

  return (
    <div className="home-route-open__lens" data-pathway={selected}>
      <p className="home-route-open__lens-label">{t('systemIntro.lensLabel')}</p>
      <p className="home-route-open__note mb-0">
        {t(`pathwayContent.${selected}.systemIntroLens`)}
      </p>
    </div>
  );
}

const PROCESS_KEYS = ['scope', 'documentation', 'procedure', 'decisions'] as const;

const PROCESS_EMPHASIS: Record<PathwayKey, readonly (typeof PROCESS_KEYS)[number][]> = {
  'private-use-only': ['scope', 'decisions'],
  'regular-guest-stays': ['documentation', 'procedure'],
  'mixed-not-defined': ['scope'],
};

export function PathwayProcessPosture() {
  const t = useTranslations('home');
  const searchParams = useSearchParams();
  const selected = normalizePathwayParam(searchParams.get('pathway')) ?? 'private-use-only';

  return (
    <p className="home-process-posture" data-pathway={selected}>
      {t(`pathwayContent.${selected}.systemIntroPosture`)}
    </p>
  );
}

export function PathwayProcessPanel() {
  const searchParams = useSearchParams();
  const selected = normalizePathwayParam(searchParams.get('pathway')) ?? 'private-use-only';

  return (
    <div className="home-process-panel home-command-panel" data-pathway={selected}>
      <PathwayProcessPosture />
      <PathwayProcessRail />
    </div>
  );
}

export function PathwayProcessRail() {
  const t = useTranslations('home');
  const searchParams = useSearchParams();
  const selected = normalizePathwayParam(searchParams.get('pathway')) ?? 'private-use-only';
  const emphasized = PROCESS_EMPHASIS[selected];

  return (
    <div
      className="home-command-system"
      data-pathway={selected}
      aria-label={t('systemIntro.title')}
    >
      <svg
        className="home-property-trace"
        viewBox="0 0 720 420"
        aria-hidden="true"
        focusable="false"
      >
        <g className="home-property-trace__plan" vectorEffect="non-scaling-stroke">
          <path d="M64 58 H276 V132 H352 V316 H66 V214" />
          <path d="M66 188 V58" />
          <path d="M116 132 H276" />
          <path d="M176 132 V316" />
          <path d="M176 224 H352" />
          <path d="M64 214 H116" />
          <path d="M138 214 H176" />
          <path d="M276 132 V180" />
          <path d="M276 206 V224" />
          <path d="M106 88 H136" />
          <path d="M304 258 H334" />
        </g>
        <g className="home-property-trace__route" vectorEffect="non-scaling-stroke">
          <path d="M94 95 H148 V176 H226 V254 H322" />
          <path d="M226 254 V296 H300" />
        </g>
        <g className="home-property-trace__checks" vectorEffect="non-scaling-stroke">
          <path d="M92 92 H104 M98 86 V98" />
          <path d="M220 248 H232 M226 242 V254" />
          <path d="M318 250 H330 M324 244 V256" />
        </g>
        <g className="home-property-trace__mixed" vectorEffect="non-scaling-stroke">
          <path d="M92 92 H142 L178 128" />
          <path d="M92 92 H142 L178 56" />
        </g>
      </svg>

      <div className="home-command-spine" aria-hidden>
        <div className="home-command-spine__plate">
          <span className="home-command-spine__channel" />
          <span className="home-command-spine__signal" />
          <span className="home-command-spine__branch home-command-spine__branch--upper" />
          <span className="home-command-spine__branch home-command-spine__branch--lower" />
          <ol className="home-command-spine__nodes">
            {PROCESS_KEYS.map((key, index) => (
              <li
                key={key}
                className="home-command-spine__node"
                data-process-key={key}
                data-emphasis={emphasized.includes(key) ? 'true' : undefined}
              >
                <span className="home-command-spine__node-face">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ol className="home-command-outputs">
        {PROCESS_KEYS.map((key, index) => (
          <li
            key={key}
            className="home-command-output"
            data-process-key={key}
            data-emphasis={emphasized.includes(key) ? 'true' : undefined}
          >
            <span className="home-command-output__num" aria-hidden>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="home-command-output__copy">
              <p className="home-command-output__label">
                {t(`systemIntro.process.${key}.label`)}
              </p>
              <h3 className="home-command-output__title">
                {t(`systemIntro.process.${key}.title`)}
              </h3>
              <p className="home-command-output__body mb-0">
                {t(`pathwayContent.${selected}.systemIntroProcess.${key}.body`)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
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
  locale,
  children,
}: {
  tp: ReturnType<typeof useTranslations<'home.pathway'>>;
  locale: string;
  children: ReactNode;
}) {
  return (
    <HeroGateFrame>
      <div className="visual-hero-content motion-entrance">
        <div className="hero-copy-panel motion-entrance">
          <div className="hero-copy-stack">
            <p className="hero-kicker">{tp('companyEyebrow')}</p>
            <h1 className="hero-display">{tp('companyHeadline')}</h1>
            <p className="hero-lead">{tp('companyLine')}</p>
          </div>

          <div className="hero-fact-grid">
            <HeroFactChip label={tp('companyFacts.area.label')} value={tp('companyFacts.area.value')} />
            <HeroFactChip label={tp('companyFacts.documentation.label')} value={tp('companyFacts.documentation.value')} />
            <HeroFactChip label={tp('companyFacts.access.label')} value={tp('companyFacts.access.value')} />
          </div>

          <GateOperatorCue t={tp} locale={locale} />

          <a href="#usage-situation-gate" className="gate-scroll-cue inline-flex lg:hidden">
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
    </HeroGateFrame>
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

function GateOperatorCue({
  t,
  locale,
}: {
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
  locale: string;
}) {
  return (
    <aside className="gate-operator-cue" aria-label={t('operatorCue.eyebrow')}>
      <div className="gate-operator-cue__identity">
        <Image
          src="/photos/aleksy-gugala-operator.jpg"
          alt={t('operatorCue.photoAlt')}
          width={96}
          height={96}
          sizes="44px"
          className="gate-operator-cue__photo"
        />
        <div className="gate-operator-cue__id-copy">
          <span className="gate-operator-cue__eyebrow">{t('operatorCue.eyebrow')}</span>
          <strong className="gate-operator-cue__name">{t('operatorCue.name')}</strong>
          <span className="gate-operator-cue__role">{t('operatorCue.role')}</span>
        </div>
      </div>
      <p className="gate-operator-cue__presence">{t('operatorCue.presence')}</p>
      <Link href={`/${locale}/services#estimator`} className="gate-operator-cue__price">
        <span className="gate-operator-cue__price-label">{t('operatorCue.priceLabel')}</span>
        <span className="gate-operator-cue__price-text">{t('operatorCue.priceText')}</span>
        <span className="gate-operator-cue__price-link">
          {t('operatorCue.priceLink')}
          <span className="choice-arrow" aria-hidden>
            -&gt;
          </span>
        </span>
      </Link>
    </aside>
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

function PathwayHero({
  locale,
  pathway,
  t,
  onChange,
}: {
  locale: string;
  pathway: PathwayKey;
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
  onChange: () => void;
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
    <section className="pathway-hero motion-panel-reveal" data-pathway={pathway}>
      <div className="pathway-hero__media">
        <Image
          src={PATHWAY_MEDIA[pathway]}
          alt={t(`mediaAlt.${pathway}`)}
          fill
          sizes="100vw"
          className="pathway-hero__image object-cover"
          priority
        />
      </div>

      <div className="container pathway-hero__inner">
        <div className="pathway-hero__main">
          <div className="pathway-hero__topline">
            <p className="pathway-hero__eyebrow">
              {t('selectedSituationLabel')}
            </p>
            <button type="button" onClick={onChange} className="pathway-hero__change">
              {t('changeSituation')}
            </button>
          </div>

          <h1 className="pathway-hero__title">{t(`cards.${pathway}.title`)}</h1>
          <p className="pathway-hero__lead">{t(`detail.${pathway}.priority`)}</p>

          <div className="pathway-hero__facts">
            <div className="pathway-hero__fact">
              <p className="pathway-hero__fact-label">{t('meaningLabel')}</p>
              <p className="pathway-hero__fact-body">{t(`detail.${pathway}.meaning`)}</p>
            </div>
            <div className="pathway-hero__fact">
              <p className="pathway-hero__fact-label">{t('nextLabel')}</p>
              <p className="pathway-hero__fact-body">{t(`detail.${pathway}.next`)}</p>
            </div>
          </div>

          <div className="pathway-hero__ctas">
            <Link href={primaryHref} className="btn-primary inline-flex w-fit text-sm">
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="btn-secondary btn-secondary-on-dark inline-flex w-fit text-sm"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>

        <aside className="pathway-hero__changes">
          <OperationalField variant={PATHWAY_FIELD[pathway]} className="pathway-hero__changes-field" />
          <p className="pathway-hero__changes-label">{t('changesLabel')}</p>
          <PathwayEvidenceArtifact pathway={pathway} t={t} />
          <ul className="pathway-hero__changes-list">
            {Array.from({ length: PATHWAY_POINT_COUNTS[pathway] }, (_, i) => (
              <li key={i}>
                <span className="pathway-hero__tick" aria-hidden />
                <span>{t(`detail.${pathway}.point${i + 1}`)}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function PathwayEvidenceArtifact({
  pathway,
  t,
}: {
  pathway: PathwayKey;
  t: ReturnType<typeof useTranslations<'home.pathway'>>;
}) {
  return (
    <section className="pathway-evidence-artifact" aria-label={t(`evidence.pathways.${pathway}.title`)}>
      <div className="pathway-evidence-artifact__head">
        <span>{t(`evidence.pathways.${pathway}.eyebrow`)}</span>
        <strong>{t(`evidence.pathways.${pathway}.title`)}</strong>
      </div>
      <dl className="pathway-evidence-artifact__rows">
        {PATHWAY_EVIDENCE_ROW_KEYS.map((key) => (
          <div key={key}>
            <dt>{t(`evidence.pathways.${pathway}.rows.${key}.label`)}</dt>
            <dd>{t(`evidence.pathways.${pathway}.rows.${key}.value`)}</dd>
          </div>
        ))}
      </dl>
      <p className="pathway-evidence-artifact__note">{t(`evidence.pathways.${pathway}.note`)}</p>
    </section>
  );
}

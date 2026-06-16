'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { PathwayKey } from '@/lib/pathway';

type RiskSlide = { key: string; image: string };
type PathwayRiskConfig = {
  namespace: string;
  imageBase: string;
  slides: readonly RiskSlide[];
};

// Each pathway carries its own copy namespace, image folder and four-slide order.
// Slide keys must match both the message keys and the `data-risk-slide` object-position
// rules in globals.css. Only pathways flagged ready in HomeContrastBlock render live.
const PATHWAY_RISK: Record<PathwayKey, PathwayRiskConfig> = {
  'private-use-only': {
    namespace: 'home.privateRisk',
    imageBase: '/images/home/private-use',
    slides: [
      { key: 'water', image: 'private-risk-water-floor.webp' },
      { key: 'moisture', image: 'private-risk-ac-moisture.webp' },
      { key: 'access', image: 'private-risk-access-keys.webp' },
      { key: 'arrival', image: 'private-risk-arrival-not-ready.webp' },
    ],
  },
  'regular-guest-stays': {
    namespace: 'home.guestRisk',
    imageBase: '/images/home/regular-guest-stays',
    slides: [
      { key: 'turnover', image: 'guest-risk-turnover-readiness.webp' },
      { key: 'damage', image: 'guest-risk-post-stay-damage.webp' },
      { key: 'dispatcher', image: 'guest-risk-owner-dispatcher.webp' },
      { key: 'review', image: 'guest-risk-review-complaint.webp' },
    ],
  },
  'mixed-not-defined': {
    namespace: 'home.mixedRisk',
    imageBase: '/images/home/mixed-not-defined',
    slides: [
      { key: 'wrongModel', image: 'mixed-risk-wrong-model.webp' },
      { key: 'adHoc', image: 'mixed-risk-ad-hoc-scope.webp' },
      { key: 'conflict', image: 'mixed-risk-private-guest-conflict.webp' },
      { key: 'wrongPackage', image: 'mixed-risk-wrong-package.webp' },
    ],
  },
};

const MECHANISM_STEPS = ['detection', 'documentation', 'decision', 'action'] as const;

const SWEEP_MS = 820;
const AUTO_MS = 6000;

export default function PathwayRiskCarousel({ pathway }: { pathway: PathwayKey }) {
  const config = PATHWAY_RISK[pathway];
  const slides = config.slides;
  const t = useTranslations(config.namespace);
  const total = slides.length;

  // Initial render is fully deterministic (matches SSR): active=0, no transition,
  // not paused, motion/desktop flags false until measured client-side in effects.
  const [active, setActive] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const commitTimer = useRef<number | null>(null);

  const clearCommit = useCallback(() => {
    if (commitTimer.current !== null) {
      window.clearTimeout(commitTimer.current);
      commitTimer.current = null;
    }
  }, []);

  // Commit to a known index supplied by the swept figure (animationend) or the
  // fallback timer, so we never read a ref during render.
  const commitTo = useCallback(
    (index: number) => {
      clearCommit();
      setActive(index);
      setIncoming(null);
    },
    [clearCommit],
  );

  const transitionTo = useCallback(
    (next: number) => {
      if (incoming !== null) return; // ignore while a sweep is in flight
      const target = ((next % total) + total) % total;
      if (target === active) return;

      // Mobile or reduced-motion: swap instantly, no sweep.
      if (reduced || !isDesktop) {
        setActive(target);
        return;
      }

      setIncoming(target);
      clearCommit();
      // Fallback commit in case animationend does not fire.
      commitTimer.current = window.setTimeout(() => commitTo(target), SWEEP_MS + 180);
    },
    [incoming, active, reduced, isDesktop, total, clearCommit, commitTo],
  );

  // Measure environment client-side only. Defaults match SSR, so no hydration drift.
  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqDesktop = window.matchMedia('(min-width: 900px)');
    const sync = () => {
      setReduced(mqReduce.matches);
      setIsDesktop(mqDesktop.matches);
    };
    sync();
    mqReduce.addEventListener('change', sync);
    mqDesktop.addEventListener('change', sync);
    return () => {
      mqReduce.removeEventListener('change', sync);
      mqDesktop.removeEventListener('change', sync);
    };
  }, []);

  // Auto-advance: desktop only, paused on hover/focus/interaction and reduced-motion.
  useEffect(() => {
    if (!isDesktop || reduced || paused || incoming !== null) return;
    const id = window.setTimeout(() => transitionTo(active + 1), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [isDesktop, reduced, paused, incoming, active, transitionTo]);

  useEffect(() => clearCommit, [clearCommit]);

  const displayIndex = incoming ?? active;
  const displaySlide = slides[displayIndex];

  const stateFor = (i: number) => {
    if (i === incoming) return 'incoming';
    if (i === active) return 'active';
    return 'hidden';
  };

  return (
    <div className="home-risk-module">
      <div
        className="home-risk-stage"
        data-transitioning={incoming !== null ? 'true' : undefined}
        data-active-slide={displaySlide.key}
        role="group"
        aria-roledescription="carousel"
        aria-label={t('riskHeading')}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* RISK plane - the unmanaged situation, swept on each advance */}
        <div className="home-risk-plane home-risk-plane--risk">
          <div className="home-risk-imgwrap">
            {slides.map((slide, i) => (
              <figure
                key={slide.key}
                className="home-risk-figure"
                data-state={stateFor(i)}
                data-risk-slide={slide.key}
                onAnimationEnd={(e) => {
                  if (e.animationName === 'homeRiskSweepIn') commitTo(i);
                }}
              >
                <Image
                  src={`${config.imageBase}/${slide.image}`}
                  alt={t(`slides.${slide.key}.alt`)}
                  fill
                  sizes="(min-width: 900px) 76vw, 100vw"
                  className="home-risk-figure__img"
                />
              </figure>
            ))}
            <span className="home-risk-scan" aria-hidden />
          </div>
        </div>

        {/* RISK thought-bubble */}
        <div className="home-risk-bubble home-risk-bubble--risk" key={`risk-${displayIndex}`}>
          <span className="home-risk-bubble__tag">{t('riskHeading')}</span>
          <p className="home-risk-bubble__title">{t(`slides.${displaySlide.key}.title`)}</p>
          <p className="home-risk-bubble__body">{t(`slides.${displaySlide.key}.body`)}</p>
        </div>

        {/* CONTROL response - synced to the active risk, without a repeated second image */}
        <div className="home-risk-bubble home-risk-bubble--control">
          <span className="home-risk-control-aura" aria-hidden />
          <div className="home-risk-control-main" key={`ctrl-main-${displayIndex}`}>
            <div className="home-risk-control-head">
              <span className="home-risk-bubble__tag">{t('controlHeading')}</span>
              <span className="home-risk-control-signal" aria-hidden />
            </div>
            <div className="home-risk-bubble__response">
              <p className="home-risk-bubble__response-lead">
                {t(`slides.${displaySlide.key}.responseLead`)}
              </p>
              <p className="home-risk-bubble__response-body">
                {t(`slides.${displaySlide.key}.responseBody`)}
              </p>
            </div>
            <div className="home-risk-controls">
              <button
                type="button"
                className="home-risk-arrow"
                onClick={() => transitionTo(active - 1)}
                aria-label={t('prev')}
              >
                <span aria-hidden>&#8592;</span>
              </button>
              <div className="home-risk-dots">
                {slides.map((slide, i) => (
                  <button
                    key={slide.key}
                    type="button"
                    className="home-risk-dot"
                    data-active={i === displayIndex ? 'true' : undefined}
                    aria-current={i === displayIndex ? 'true' : undefined}
                    aria-label={t('position', { n: i + 1, total })}
                    onClick={() => transitionTo(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="home-risk-arrow"
                onClick={() => transitionTo(active + 1)}
                aria-label={t('next')}
              >
                <span aria-hidden>&#8594;</span>
              </button>
            </div>
            <ol className="home-risk-control-steps">
              {MECHANISM_STEPS.map((step, i) => (
                <li key={step} className="home-risk-control-step">
                  <span className="home-risk-control-step__num" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="home-risk-control-step__name">{t(`mechanism.${step}`)}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {t('position', { n: displayIndex + 1, total })}. {t(`slides.${displaySlide.key}.title`)}
        </p>
      </div>
    </div>
  );
}

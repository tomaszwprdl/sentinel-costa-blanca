'use client';

import Image from 'next/image';
import { type CSSProperties, useEffect, useRef, useState } from 'react';

export type ProcedureJourneyStep = {
  key: string;
  title: string;
  body: string;
  artifactTitle: string;
  artifactItems: string[];
};

export type ProcedureJourneyRule = {
  label: string;
  value: string;
};

type ProcedureJourneyProps = {
  eyebrow: string;
  title: string;
  intro: string;
  ruleEyebrow: string;
  ruleTitle: string;
  rules: ProcedureJourneyRule[];
  steps: ProcedureJourneyStep[];
  visitRecordImageAlt: string;
};

type JourneyState = {
  activeIndex: number;
  progress: number;
  stageProgress: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ProcedureJourney({
  eyebrow,
  title,
  intro,
  ruleEyebrow,
  ruleTitle,
  rules,
  steps,
  visitRecordImageAlt,
}: ProcedureJourneyProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const stateRef = useRef<JourneyState>({ activeIndex: 0, progress: -1, stageProgress: -1 });
  const [journeyState, setJourneyState] = useState<JourneyState>({
    activeIndex: 0,
    progress: 0,
    stageProgress: 0,
  });

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const maxStage = Math.max(steps.length - 1, 1);

    const commitState = (nextState: JourneyState) => {
      root.style.setProperty('--journey-progress', String(nextState.progress));
      root.style.setProperty('--journey-progress-percent', `${Number((nextState.progress * 100).toFixed(1))}%`);
      root.style.setProperty('--journey-stage-progress', String(nextState.stageProgress));

      const current = stateRef.current;

      if (
        current.activeIndex === nextState.activeIndex
        && current.progress === nextState.progress
        && current.stageProgress === nextState.stageProgress
      ) {
        return;
      }

      stateRef.current = nextState;
      setJourneyState(nextState);
    };

    const update = () => {
      frameRef.current = 0;

      if (reducedMotionQuery.matches) {
        commitState({
          activeIndex: steps.length - 1,
          progress: 1,
          stageProgress: maxStage,
        });
        return;
      }

      const rect = root.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const progress = clamp(-rect.top / travel, 0, 1);
      const stageProgress = progress * maxStage;
      const activeIndex = clamp(Math.round(stageProgress), 0, steps.length - 1);

      commitState({
        activeIndex,
        progress: Number(progress.toFixed(3)),
        stageProgress: Number(stageProgress.toFixed(3)),
      });
    };

    const scheduleUpdate = () => {
      if (frameRef.current) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    reducedMotionQuery.addEventListener('change', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotionQuery.removeEventListener('change', scheduleUpdate);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [steps.length]);

  const activeStep = steps[journeyState.activeIndex] ?? steps[0];
  const rootStyle = {
    '--journey-progress': journeyState.progress,
    '--journey-progress-percent': `${Number((journeyState.progress * 100).toFixed(1))}%`,
    '--journey-stage-progress': journeyState.stageProgress,
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      className="hiw-procedure-journey"
      data-active-step={activeStep?.key}
      style={rootStyle}
    >
      <div className="hiw-procedure-journey__sticky">
        <div className="hiw-procedure-journey__field">
          <div className="hiw-procedure-journey__intro">
            <p className="section-label">{eyebrow}</p>
            <h2 className="h2-system">{title}</h2>
            <p>{intro}</p>
            <div className="hiw-procedure-journey__rule">
              <span>{ruleEyebrow}</span>
              <strong>{ruleTitle}</strong>
            </div>
          </div>

          <div className="hiw-procedure-journey__corridor" aria-hidden="true">
            <svg className="hiw-procedure-journey__route-map" viewBox="0 0 1200 560" preserveAspectRatio="none">
              <path
                className="hiw-procedure-journey__route-base"
                d="M68 418 C220 300 292 224 420 246 C560 270 590 128 725 152 C860 176 885 344 1036 262 L1136 210"
                pathLength="1"
              />
              <path
                className="hiw-procedure-journey__route-progress"
                d="M68 418 C220 300 292 224 420 246 C560 270 590 128 725 152 C860 176 885 344 1036 262 L1136 210"
                pathLength="1"
              />
              {steps.map((step, index) => (
                <g key={step.key} className="hiw-procedure-journey__checkpoint" data-stage-key={step.key}>
                  <line x1={118 + index * 194} y1="128" x2={70 + index * 194} y2="432" />
                </g>
              ))}
            </svg>
            <span className="hiw-procedure-journey__threshold-plane" />
            <span className="hiw-procedure-journey__closure-mark" />
            <figure className="hiw-procedure-journey__photo-fragment">
              <Image
                src="/photos/hiw-visit-record.webp"
                alt={visitRecordImageAlt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 768px) 34vw, 100vw"
                className="hiw-procedure-journey__photo-image"
                loading="eager"
                priority={false}
              />
            </figure>
          </div>

          <ol className="hiw-procedure-journey__stages">
            {steps.map((step, index) => {
              const distance = index - journeyState.stageProgress;
              const absDistance = clamp(Math.abs(distance), 0, 3);
              const presence = clamp(1 - absDistance * 0.36, 0.1, 1);
              const scale = clamp(1 - absDistance * 0.08, 0.78, 1);
              const isActive = index === journeyState.activeIndex;

              const stageStyle = {
                '--stage-index': index,
                '--stage-distance': Number(distance.toFixed(3)),
                '--stage-abs-distance': Number(absDistance.toFixed(3)),
                '--stage-opacity': Number(presence.toFixed(3)),
                '--stage-scale': Number(scale.toFixed(3)),
                '--stage-layer': Math.round(80 - absDistance * 12),
              } as CSSProperties;

              return (
                <li
                  key={step.key}
                  className="hiw-procedure-journey__stage"
                  data-stage-key={step.key}
                  data-active={isActive ? 'true' : undefined}
                  style={stageStyle}
                >
                  <article className="hiw-procedure-journey__stage-panel">
                    <div className="hiw-procedure-journey__stage-copy">
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                    <div className="hiw-procedure-journey__artifact" aria-label={step.artifactTitle}>
                      <span>{step.artifactTitle}</span>
                      <p>{step.artifactItems.join(' / ')}</p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>

          <aside className="hiw-procedure-journey__guardrails" aria-label={ruleTitle}>
            {rules.map((rule) => (
              <section key={rule.label}>
                <span>{rule.label}</span>
                <p>{rule.value}</p>
              </section>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}

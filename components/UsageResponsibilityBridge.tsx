'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { PATHWAY_KEYS, type PathwayKey } from '@/lib/pathway';

const SCALE_SEGMENTS = ['green', 'orange', 'red'] as const;

type ScaleSegment = (typeof SCALE_SEGMENTS)[number];

const SCALE_RANGES: Record<PathwayKey, Record<ScaleSegment, boolean>> = {
  'private-use-only': { green: true, orange: true, red: false },
  'regular-guest-stays': { green: false, orange: true, red: true },
  'mixed-not-defined': { green: false, orange: false, red: false },
};

export default function UsageResponsibilityBridge() {
  const t = useTranslations('services');
  const tPathway = useTranslations('home.pathway.cards');
  const locale = useLocale();
  const [activeKey, setActiveKey] = useState<PathwayKey>('private-use-only');
  const activeIndex = PATHWAY_KEYS.indexOf(activeKey);
  const isGated = activeKey === 'mixed-not-defined';

  return (
    <div className="services-bridge-band" id="situation">
      <div className="mb-3 max-w-[760px]">
        <p className="section-label">{t('redesign.bridge.eyebrow')}</p>
        <h2 className="h2-system mt-2">{t('redesign.bridge.title')}</h2>
      </div>

      <div className="services-router-board">
        <div className="services-router-board__choices" role="tablist" aria-label={t('redesign.scenario.promptLabel')}>
          {PATHWAY_KEYS.map((key: PathwayKey, index) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={key === activeKey}
              data-active={key === activeKey}
              onClick={() => setActiveKey(key)}
              className="services-router-choice"
            >
              <span className="services-router-choice__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="services-router-choice__copy">
                <span className="services-router-choice__label">{tPathway(`${key}.emphasis`)}</span>
                <strong>{tPathway(`${key}.title`)}</strong>
              </span>
            </button>
          ))}
        </div>

        <article className="services-router-panel" role="tabpanel">
          <div className="services-router-panel__content">
            <p className="services-router-panel__kicker">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              {t('redesign.scenario.selectedLabel')}
            </p>
            <h3 key={`title-${activeKey}`} className="motion-panel-reveal">
              {tPathway(`${activeKey}.title`)}
            </h3>

            <div className="services-bridge-readout">
              <p className="services-bridge-readout__label">{t('redesign.bridge.depthColumn')}</p>

              {isGated && (
                <div className="services-bridge-gate">
                  <span className="services-bridge-gate__chip">{t('redesign.bridge.gateLabel')}</span>
                  <span className="services-bridge-gate__connector" aria-hidden="true" />
                </div>
              )}

              <div className="services-bridge-scale" data-gated={isGated} aria-hidden="true">
                {SCALE_SEGMENTS.map((segment) => (
                  <span
                    key={segment}
                    className="services-bridge-scale__segment"
                    data-active={SCALE_RANGES[activeKey][segment]}
                  >
                    {t(`${segment}.badgeLabel`)}
                  </span>
                ))}
              </div>

              <p key={`reason-${activeKey}`} className="services-bridge-readout__reason motion-panel-reveal">
                {t(`redesign.bridge.pathways.${activeKey}.depth`)}
              </p>
            </div>

            <p className="services-bridge-caveat">{t('redesign.bridge.caveat')}</p>

            <div className="services-router-panel__actions">
              <Link href="#responsibility" className="btn-primary">
                {t('redesign.scenario.responsibilityCta')}
              </Link>
              <Link href={`/${locale}/contact`} className="btn-secondary">
                {t('cta.primaryButton')}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

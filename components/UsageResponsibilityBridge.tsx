'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { PATHWAY_KEYS, type PathwayKey } from '@/lib/pathway';
import ServiceScopeDiagram from '@/components/visuals/ServiceScopeDiagram';
import EventResponseDiagram from '@/components/visuals/EventResponseDiagram';
import PathwaySituationDiagram from '@/components/visuals/PathwaySituationDiagram';

const PATHWAY_VISUALS: Record<PathwayKey, 'private' | 'guest' | 'mixed'> = {
  'private-use-only': 'private',
  'regular-guest-stays': 'guest',
  'mixed-not-defined': 'mixed',
};

function PathwayVisual({ pathway }: { pathway: PathwayKey }) {
  const visual = PATHWAY_VISUALS[pathway];

  if (visual === 'private') {
    return <ServiceScopeDiagram variant="basic" compact className="services-bridge-visual" />;
  }

  if (visual === 'guest') {
    return <EventResponseDiagram variant="turnover" className="services-bridge-visual" />;
  }

  return <PathwaySituationDiagram pathway={pathway} className="services-bridge-visual" />;
}

export default function UsageResponsibilityBridge() {
  const t = useTranslations('services');
  const tPathway = useTranslations('home.pathway.cards');
  const locale = useLocale();
  const [activeKey, setActiveKey] = useState<PathwayKey>('private-use-only');
  const activeIndex = PATHWAY_KEYS.indexOf(activeKey);

  return (
    <div className="services-bridge-band" id="situation">
      <div className="mb-4 max-w-[760px]">
        <p className="section-label">{t('redesign.bridge.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.bridge.title')}</h2>
        <p className="mt-3 text-body">{t('redesign.bridge.intro')}</p>
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

        <article key={activeKey} className="services-router-panel motion-panel-reveal" role="tabpanel">
          <div className="services-router-panel__visual" aria-hidden="true">
            <PathwayVisual pathway={activeKey} />
          </div>

          <div className="services-router-panel__content">
            <div className="services-router-panel__header">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <p>{t('redesign.scenario.selectedLabel')}</p>
            </div>
            <h3>{tPathway(`${activeKey}.title`)}</h3>
            <p>{tPathway(`${activeKey}.description`)}</p>

            <div className="services-router-panel__outcomes">
              <div>
                <p>{t('redesign.scenario.depthLabel')}</p>
                <strong>{t(`redesign.bridge.pathways.${activeKey}.depth`)}</strong>
              </div>
              <div>
                <p>{t('redesign.scenario.noteLabel')}</p>
                <span>{t('redesign.scenario.note')}</span>
              </div>
            </div>

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

      <p className="services-bridge-map-note mt-5 mb-0 text-sm text-muted">{t('redesign.bridge.note')}</p>
    </div>
  );
}

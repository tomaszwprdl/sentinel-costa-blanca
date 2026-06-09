'use client';

import { useTranslations } from 'next-intl';
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

  return (
    <div className="services-bridge-band" id="situation">
      <div className="mb-4 max-w-[760px]">
        <p className="section-label">{t('redesign.bridge.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.bridge.title')}</h2>
        <p className="mt-3 text-body">{t('redesign.bridge.intro')}</p>
      </div>

      <div className="services-bridge-grid">
        <div className="services-bridge-grid__head">
          <span>{t('redesign.bridge.situationColumn')}</span>
          <span>{t('redesign.bridge.depthColumn')}</span>
        </div>
        {PATHWAY_KEYS.map((key: PathwayKey) => (
          <div key={key} className="services-bridge-grid__row">
            <div className="services-bridge-grid__situation">
              <div className="services-bridge-grid__visual" aria-hidden="true">
                <PathwayVisual pathway={key} />
              </div>
              <div>
                <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-accent">
                  {tPathway(`${key}.emphasis`)}
                </p>
                <h3 className="mb-0 text-base font-black text-heading">{tPathway(`${key}.title`)}</h3>
                <p className="mt-2 mb-0 text-sm leading-relaxed text-body">{tPathway(`${key}.description`)}</p>
              </div>
            </div>
            <p className="mb-0 text-sm font-semibold leading-relaxed text-body">
              {t(`redesign.bridge.pathways.${key}.depth`)}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-5 mb-0 text-sm text-muted">{t('redesign.bridge.note')}</p>
    </div>
  );
}

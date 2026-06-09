'use client';

import Link from 'next/link';
import { useState } from 'react';
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

export default function ScenarioFitGuide() {
  const t = useTranslations('services');
  const tPathway = useTranslations('home.pathway.cards');
  const [selected, setSelected] = useState<PathwayKey | null>(null);
  const active = selected;

  return (
    <div className="services-flow-band" id="situation">
      <div className="mb-6 max-w-[760px]">
        <p className="section-label">{t('redesign.scenario.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.scenario.title')}</h2>
        <p className="mt-3 text-body">{t('redesign.scenario.intro')}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.78fr)_minmax(18rem,0.34fr)] lg:gap-5">
        <div className="grid gap-2.5 md:grid-cols-1">
          {PATHWAY_KEYS.map((key) => {
            const isSelected = active === key;
            const visual = PATHWAY_VISUALS[key];
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isSelected}
                data-selected={isSelected}
                onClick={() => setSelected(key)}
                className="selected-option group overflow-hidden rounded-2xl border border-structural-light bg-surface-card text-left shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md aria-pressed:border-accent aria-pressed:bg-surface-light-alt"
              >
                <div className="grid gap-0 md:grid-cols-[minmax(10rem,0.34fr)_minmax(0,1fr)]">
                  <div className="border-b border-structural-light bg-surface-light-alt md:border-b-0 md:border-r">
                    {visual === 'private' ? (
                      <ServiceScopeDiagram variant="basic" compact className="rounded-none border-0 shadow-none" />
                    ) : visual === 'guest' ? (
                      <EventResponseDiagram variant="turnover" className="rounded-none border-0 shadow-none" />
                    ) : (
                      <PathwaySituationDiagram pathway={key} className="rounded-none border-0 shadow-none" />
                    )}
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="mb-2 text-[11px] font-black uppercase tracking-wide text-accent">
                      {tPathway(`${key}.emphasis`)}
                    </p>
                    <h3 className="mb-2 text-lg font-black text-heading">{tPathway(`${key}.title`)}</h3>
                    <p className="mb-0 text-sm leading-relaxed text-body">{tPathway(`${key}.description`)}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <aside className="services-side-panel motion-panel-reveal h-fit p-5 lg:sticky lg:top-28">
          {!active ? (
            <>
              <p className="section-label">{t('redesign.scenario.promptLabel')}</p>
              <p className="mt-3 mb-0 text-sm leading-relaxed text-body">{t('redesign.scenario.promptBody')}</p>
            </>
          ) : (
            <>
              <p className="section-label">{t('redesign.scenario.selectedLabel')}</p>
              <h3 className="mt-3 text-xl font-black text-heading">{tPathway(`${active}.title`)}</h3>
              <p className="mb-0 mt-3 text-sm font-bold uppercase tracking-wide text-muted">
                {t('redesign.scenario.depthLabel')}
              </p>
              <p className="text-body">{t(`redesign.scenario.cards.${active}.result`)}</p>
              <div className="mt-5 rounded-2xl bg-surface-light-alt p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">
                  {t('redesign.scenario.noteLabel')}
                </p>
                <p className="mb-0 text-sm text-body">{t('redesign.scenario.note')}</p>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <Link href="#responsibility" className="btn-primary">
                  {t('redesign.scenario.responsibilityCta')}
                </Link>
                <Link href="#scope" className="btn-secondary">
                  {t('redesign.scenario.packageCta')}
                </Link>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

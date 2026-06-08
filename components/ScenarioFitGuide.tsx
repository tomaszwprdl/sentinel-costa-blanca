'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';

const SCENARIOS = [
  {
    key: 'private',
    image: '/photos/sentinel-corridor-exterior-placeholder.png',
    packageKey: 'green',
  },
  {
    key: 'guest',
    image: '/photos/sentinel-cleaning-readiness-placeholder.png',
    packageKey: 'orange',
  },
  {
    key: 'decisions',
    image: '/photos/sentinel-escalation-leak-placeholder.png',
    packageKey: 'red',
  },
  {
    key: 'mixed',
    diagram: 'area',
    packageKey: 'orange',
  },
] as const;

export default function ScenarioFitGuide() {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [selected, setSelected] = useState<(typeof SCENARIOS)[number]['key']>('private');
  const active = SCENARIOS.find((scenario) => scenario.key === selected) ?? SCENARIOS[0];
  const serviceAreaMapLabels = {
    title: tCommon('serviceAreaMap.title'),
    center: tCommon('serviceAreaMap.center'),
    radius: tCommon('serviceAreaMap.radius'),
    boundary: tCommon('serviceAreaMap.boundary'),
    caption: tCommon('serviceAreaMap.caption'),
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.38fr)]" id="scenario-fit">
      <div className="visual-card-strong overflow-hidden">
        <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
          <p className="section-label">{t('redesign.scenario.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('redesign.scenario.title')}</h2>
          <p className="mt-3 max-w-[62ch] text-body">{t('redesign.scenario.intro')}</p>
        </div>

        <div className="grid gap-3 p-4 md:grid-cols-2 md:p-5">
          {SCENARIOS.map((scenario) => {
            const isSelected = scenario.key === selected;
            return (
              <button
                key={scenario.key}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelected(scenario.key)}
                className="group overflow-hidden rounded-2xl border border-structural-light bg-surface-card text-left shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg aria-pressed:border-accent aria-pressed:bg-surface-light-alt"
              >
                {'image' in scenario ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={scenario.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <ServiceAreaMap
                    labels={serviceAreaMapLabels}
                    compact
                    className="rounded-none border-0 shadow-none"
                  />
                )}
                <div className="p-4">
                  <p className="mb-2 text-[11px] font-black uppercase tracking-wide text-accent">
                    {t(`redesign.scenario.cards.${scenario.key}.label`)}
                  </p>
                  <h3 className="mb-2 text-lg font-black text-heading">
                    {t(`redesign.scenario.cards.${scenario.key}.title`)}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-body">
                    {t(`redesign.scenario.cards.${scenario.key}.body`)}
                  </p>
                  <p className="mb-0 text-sm font-bold text-support">
                    {t('redesign.scenario.suggestedPrefix')} {t(`${scenario.packageKey}.title`)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <aside className="visual-card-strong h-fit p-5 lg:sticky lg:top-28">
        <p className="section-label">{t('redesign.scenario.selectedLabel')}</p>
        <h3 className="mt-3 text-2xl font-black text-heading">
          {t(`${active.packageKey}.title`)}
        </h3>
        <p className="text-body">{t(`redesign.scenario.cards.${active.key}.result`)}</p>
        <div className="mt-5 rounded-2xl bg-surface-light-alt p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">
            {t('redesign.scenario.noteLabel')}
          </p>
          <p className="mb-0 text-sm text-body">{t('redesign.scenario.note')}</p>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <Link href="#package-details" className="btn-secondary">
            {t('redesign.scenario.packageCta')}
          </Link>
          <Link href={`/${locale}/contact`} className="btn-primary">
            {t('cta.primaryButton')}
          </Link>
        </div>
      </aside>
    </div>
  );
}

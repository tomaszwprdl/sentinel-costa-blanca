'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import EventResponseDiagram, { type EventResponseVariant } from '@/components/visuals/EventResponseDiagram';

const EVENTS = [
  {
    key: 'leak',
  },
  {
    key: 'technician',
  },
  {
    key: 'turnover',
  },
  {
    key: 'weekend',
  },
] as const;

const PACKAGE_LEVELS = [
  { key: 'green', marker: '01', tone: 'basic', sla: '48h' },
  { key: 'orange', marker: '02', tone: 'extended', sla: '24h' },
  { key: 'red', marker: '03', tone: 'full', sla: 'sameDay' },
] as const;

export default function WhatIfEventSimulator() {
  const t = useTranslations('services');
  const locale = useLocale();
  const [activeKey, setActiveKey] = useState<(typeof EVENTS)[number]['key']>('leak');
  const [activePackageKey, setActivePackageKey] = useState<(typeof PACKAGE_LEVELS)[number]['key']>('orange');
  const active = EVENTS.find((event) => event.key === activeKey) ?? EVENTS[0];
  const activePackage = PACKAGE_LEVELS.find((pkg) => pkg.key === activePackageKey) ?? PACKAGE_LEVELS[1];
  const detailKeys = ['observes', 'documents', 'owner', 'package'] as const;
  const packageSla = activePackage.sla === 'sameDay' ? t('diagrams.sla.sameDay') : activePackage.sla;
  const packagePanelId = 'services-event-package-panel';

  return (
    <div className="services-event-simulator" id="event-simulator">
      <div className="services-event-simulator__grid">
        <div className="services-event-simulator__control">
          <div className="services-event-simulator__header">
            <p className="section-label">{t('redesign.events.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.events.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.events.intro')}</p>
          </div>

          <div className="services-event-switchboard">
            {EVENTS.map((event) => (
              <button
                key={event.key}
                type="button"
                aria-pressed={event.key === activeKey}
                data-selected={event.key === activeKey}
                onClick={() => setActiveKey(event.key)}
                className="services-event-switch selected-option rounded-2xl border border-structural-light bg-surface-card px-4 py-2.5 text-left text-sm font-bold text-body transition hover:border-accent hover:bg-surface-light aria-pressed:border-accent aria-pressed:bg-authority-bg aria-pressed:text-authority-on-dark"
              >
                <span aria-hidden="true" />
                {t(`redesign.events.items.${event.key}.title`)}
              </button>
            ))}
          </div>

          <div className="services-event-package-strip" role="tablist" aria-label={t('redesign.ladder.eyebrow')}>
            {PACKAGE_LEVELS.map((pkg) => (
              <button
                key={pkg.key}
                id={`services-event-package-tab-${pkg.key}`}
                type="button"
                role="tab"
                aria-selected={pkg.key === activePackageKey}
                aria-controls={packagePanelId}
                data-active={pkg.key === activePackageKey}
                onClick={() => setActivePackageKey(pkg.key)}
                className={`services-event-package services-event-package--${pkg.tone}`}
              >
                <span>{pkg.marker}</span>
                <strong>{t(`${pkg.key}.title`)}</strong>
              </button>
            ))}
          </div>
        </div>

        <div className="services-event-simulator__stage">
          <div key={active.key} className="services-event-diagram motion-panel-reveal">
            <EventResponseDiagram
              variant={active.key as EventResponseVariant}
              className="rounded-none border-0 shadow-none"
            />
          </div>

          <div key={`${active.key}-detail`} className="services-event-output motion-panel-reveal">
            <div className="services-event-output__summary">
              <p className="section-label">{t(`redesign.events.items.${active.key}.label`)}</p>
              <h3 className="mt-3 text-2xl font-black text-heading">
                {t(`redesign.events.items.${active.key}.title`)}
              </h3>
              <p className="mb-0 text-body">{t(`redesign.events.items.${active.key}.lead`)}</p>
            </div>

            <div className="services-event-timeline">
              {detailKeys.map((key) => (
                <div key={key} className="services-event-timeline__step">
                  <p className="services-event-timeline__label">
                    {t(`redesign.events.detailLabels.${key}`)}
                  </p>
                  <p className="mb-0 text-sm leading-relaxed text-body">
                    {t(`redesign.events.items.${active.key}.${key}`)}
                  </p>
                </div>
              ))}
            </div>

            <div
              id={packagePanelId}
              key={`${active.key}-${activePackage.key}`}
              className="services-event-tier-readout motion-panel-reveal"
              role="tabpanel"
              aria-labelledby={`services-event-package-tab-${activePackage.key}`}
            >
              <div>
                <p>{t('redesign.ladder.eyebrow')}</p>
                <strong>{t(`${activePackage.key}.title`)}</strong>
              </div>
              <dl>
                <div>
                  <dt>{t('diagrams.sla.axisLabel')}</dt>
                  <dd>{packageSla}</dd>
                </div>
                <div>
                  <dt>{t(`${activePackage.key}.summary.accessLabel`)}</dt>
                  <dd>{t(`${activePackage.key}.summary.accessValue`)}</dd>
                </div>
                <div>
                  <dt>{t(`${activePackage.key}.summary.decisionsLabel`)}</dt>
                  <dd>{t(`${activePackage.key}.summary.decisionsValue`)}</dd>
                </div>
              </dl>
            </div>

            <div className="services-event-output__actions mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#responsibility" className="btn-secondary">
                {t('redesign.events.packageCta')}
              </Link>
              <Link href={`/${locale}/contact`} className="btn-primary">
                {t('cta.primaryButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

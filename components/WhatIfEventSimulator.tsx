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

export default function WhatIfEventSimulator() {
  const t = useTranslations('services');
  const locale = useLocale();
  const [activeKey, setActiveKey] = useState<(typeof EVENTS)[number]['key']>('leak');
  const active = EVENTS.find((event) => event.key === activeKey) ?? EVENTS[0];
  const detailKeys = ['observes', 'documents', 'owner', 'package'] as const;

  return (
    <div className="visual-card-strong overflow-hidden" id="event-simulator">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
        <div className="border-b border-structural-light bg-surface-light-alt p-5 md:p-8 lg:border-b-0 lg:border-r">
          <p className="section-label">{t('redesign.events.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('redesign.events.title')}</h2>
          <p className="mt-3 text-body">{t('redesign.events.intro')}</p>

          <div className="mt-6 grid gap-2">
            {EVENTS.map((event) => (
              <button
                key={event.key}
                type="button"
                aria-pressed={event.key === activeKey}
                onClick={() => setActiveKey(event.key)}
                className="rounded-2xl border border-structural-light bg-surface-card px-4 py-3 text-left text-sm font-bold text-body transition hover:border-accent hover:bg-surface-light aria-pressed:border-accent aria-pressed:bg-authority-bg aria-pressed:text-authority-on-dark"
              >
                {t(`redesign.events.items.${event.key}.title`)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <EventResponseDiagram
            variant={active.key as EventResponseVariant}
            className="rounded-none border-0 shadow-none"
          />
          <div className="p-5 md:p-8">
            <p className="section-label">{t(`redesign.events.items.${active.key}.label`)}</p>
            <h3 className="mt-3 text-2xl font-black text-heading">
              {t(`redesign.events.items.${active.key}.title`)}
            </h3>
            <p className="text-body">{t(`redesign.events.items.${active.key}.lead`)}</p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {detailKeys.map((key) => (
                <div key={key} className="rounded-2xl border border-structural-light bg-surface-light-alt p-4">
                  <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-muted">
                    {t(`redesign.events.detailLabels.${key}`)}
                  </p>
                  <p className="mb-0 text-sm leading-relaxed text-body">
                    {t(`redesign.events.items.${active.key}.${key}`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#package-details" className="btn-secondary">
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

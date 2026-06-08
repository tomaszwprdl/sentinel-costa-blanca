'use client';

import { useTranslations } from 'next-intl';

const TIMELINE_KEYS = ['before', 'setup', 'active', 'followup'] as const;

export default function BeforeDuringAfterTimeline() {
  const t = useTranslations('howItWorks');

  return (
    <div className="visual-card-strong overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{t('redesign.timeline.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.timeline.title')}</h2>
      </div>
      <div className="grid gap-0 md:grid-cols-4">
        {TIMELINE_KEYS.map((key, index) => (
          <article
            key={key}
            className="border-b border-structural-light p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-6"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-authority-bg text-sm font-black text-authority-on-dark">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-xl font-black text-heading">{t(`redesign.timeline.items.${key}.title`)}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{t(`redesign.timeline.items.${key}.body`)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

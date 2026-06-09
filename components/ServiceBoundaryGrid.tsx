'use client';

import { useTranslations } from 'next-intl';

const DOES_KEYS = ['oversight', 'access', 'documentation', 'coordination'] as const;
const DOES_NOT_KEYS = ['rentalAgency', 'concierge', 'unlimitedEmergency', 'undefinedTasks'] as const;

export default function ServiceBoundaryGrid() {
  const t = useTranslations('services');

  return (
    <div className="services-scope-subband overflow-hidden rounded-2xl border border-structural-light bg-surface-card">
      <div className="module-header-band">
        <p className="section-label">{t('redesign.boundary.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.boundary.title')}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{t('redesign.boundary.intro')}</p>
      </div>

      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-structural-light p-4 md:border-b-0 md:border-r md:p-8">
          <h3 className="mb-5 text-2xl font-black text-heading">{t('redesign.boundary.doesTitle')}</h3>
          <div className="grid gap-3">
            {DOES_KEYS.map((key) => (
              <div key={key} className="rounded-2xl border border-structural-light bg-surface-light-alt p-4">
                <p className="mb-1 text-sm font-black text-heading">{t(`redesign.boundary.does.${key}.title`)}</p>
                <p className="mb-0 text-sm leading-relaxed text-body">{t(`redesign.boundary.does.${key}.body`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 md:p-8">
          <h3 className="mb-5 text-2xl font-black text-heading">{t('redesign.boundary.doesNotTitle')}</h3>
          <div className="grid gap-3">
            {DOES_NOT_KEYS.map((key) => (
              <div key={key} className="rounded-2xl border border-structural-light bg-surface-card p-4">
                <p className="mb-1 text-sm font-black text-heading">{t(`redesign.boundary.doesNot.${key}.title`)}</p>
                <p className="mb-0 text-sm leading-relaxed text-body">{t(`redesign.boundary.doesNot.${key}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

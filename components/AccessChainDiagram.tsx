'use client';

import { useTranslations } from 'next-intl';
import ServiceScopeDiagram from '@/components/visuals/ServiceScopeDiagram';

const CHAIN_KEYS = ['agreement', 'keys', 'request', 'entry', 'record'] as const;

export default function AccessChainDiagram() {
  const t = useTranslations('howItWorks');

  return (
    <div className="visual-card-strong overflow-hidden" id="access-chain">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <div className="min-h-[340px] bg-surface-light-alt p-4 md:p-5">
          <ServiceScopeDiagram variant="extended" className="motion-diagram h-full min-h-[300px]" />
        </div>
        <div className="p-5 md:p-8">
          <p className="section-label">{t('redesign.access.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('redesign.access.title')}</h2>
          <p className="mt-3 text-body">{t('redesign.access.intro')}</p>

          <div className="mt-6 grid gap-3">
            {CHAIN_KEYS.map((key, index) => (
              <div key={key} className="motion-step grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                <span className="process-node flex h-10 w-10 items-center justify-center rounded-full bg-authority-bg text-xs font-black text-authority-on-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="rounded-2xl border border-structural-light bg-surface-light-alt p-4">
                  <h3 className="mb-1 text-base font-black text-heading">{t(`redesign.access.items.${key}.title`)}</h3>
                  <p className="mb-0 text-sm leading-relaxed text-body">{t(`redesign.access.items.${key}.body`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

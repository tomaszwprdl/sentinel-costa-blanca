'use client';

import { useTranslations } from 'next-intl';

const DECISION_KEYS = ['observe', 'document', 'notify', 'withinLimit', 'ownerApproval'] as const;
const PACKAGE_KEYS = ['green', 'orange', 'red'] as const;

export default function EscalationDecisionMap() {
  const t = useTranslations('howItWorks');
  const tServices = useTranslations('services');

  return (
    <div className="visual-card-strong overflow-hidden" id="decision-map">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{t('redesign.decision.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.decision.title')}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{t('redesign.decision.intro')}</p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.62fr)_minmax(18rem,0.38fr)]">
        <div className="border-b border-structural-light p-5 md:p-8 lg:border-b-0 lg:border-r">
          <div className="grid gap-3">
            {DECISION_KEYS.map((key, index) => (
              <div key={key} className="rounded-2xl border border-structural-light bg-surface-light-alt p-4">
                <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-2 text-lg font-black text-heading">{t(`redesign.decision.steps.${key}.title`)}</h3>
                <p className="mb-0 text-sm leading-relaxed text-body">{t(`redesign.decision.steps.${key}.body`)}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-surface-light-alt p-5 md:p-8">
          <h3 className="mb-4 text-xl font-black text-heading">{t('redesign.decision.limitsTitle')}</h3>
          <div className="space-y-3">
            {PACKAGE_KEYS.map((key) => (
              <div key={key} className="rounded-2xl bg-surface-card p-4">
                <p className="mb-1 text-sm font-black text-heading">{tServices(`${key}.title`)}</p>
                <p className="mb-0 text-sm leading-relaxed text-body">{tServices(`${key}.summary.decisionsValue`)}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 mb-0 text-xs leading-relaxed text-muted">{t('redesign.decision.note')}</p>
        </aside>
      </div>
    </div>
  );
}

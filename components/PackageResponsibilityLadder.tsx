'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

const PACKAGE_KEYS = ['green', 'orange', 'red'] as const;
const LEVEL_KEYS = ['basic', 'extended', 'full'] as const;
const AXIS_KEYS = ['axis1', 'axis2', 'axis3'] as const;
const SLA_VALUES = ['48h', '24h', 'sameDay'] as const;

export default function PackageResponsibilityLadder() {
  const t = useTranslations('services');
  const tHomeLevels = useTranslations('home.levels');

  return (
    <div className="visual-card-strong overflow-hidden" id="package-fit">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{t('redesign.ladder.eyebrow')}</p>
        <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,0.75fr)_minmax(18rem,0.35fr)] lg:items-end">
          <div>
            <h2 className="h2-system">{t('redesign.ladder.title')}</h2>
            <p className="mt-3 max-w-[62ch] text-body">{t('redesign.ladder.intro')}</p>
          </div>
          <Link href="#package-details" className="btn-secondary justify-self-start lg:justify-self-end">
            {t('redesign.ladder.detailCta')}
          </Link>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-3">
        {PACKAGE_KEYS.map((packageKey, index) => {
          const levelKey = LEVEL_KEYS[index];
          return (
            <article
              key={packageKey}
              className="relative border-b border-structural-light p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-authority-bg text-sm font-black text-authority-on-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="rounded-full bg-surface-light-alt px-3 py-1 text-xs font-bold text-support">
                  {SLA_VALUES[index] === 'sameDay' ? t('diagrams.sla.sameDay') : SLA_VALUES[index]}
                </span>
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
                {tHomeLevels(AXIS_KEYS[index])}
              </p>
              <h3 className="mb-3 text-2xl font-black text-heading">{t(`${packageKey}.title`)}</h3>
              <p className="text-sm leading-relaxed text-body">{t(`redesign.ladder.${levelKey}.fit`)}</p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-surface-light-alt p-4">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted">{t('redesign.ladder.responsibilityLabel')}</p>
                  <p className="mb-0 text-sm font-semibold text-heading">{t(`redesign.ladder.${levelKey}.responsibility`)}</p>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <p className="mb-0 flex justify-between gap-3 border-b border-structural-light pb-2">
                    <span className="text-muted">{t(`${packageKey}.summary.visitsLabel`)}</span>
                    <strong className="text-right text-body">{t(`${packageKey}.summary.visitsValue`)}</strong>
                  </p>
                  <p className="mb-0 flex justify-between gap-3 border-b border-structural-light pb-2">
                    <span className="text-muted">{t(`${packageKey}.summary.accessLabel`)}</span>
                    <strong className="text-right text-body">{t(`${packageKey}.summary.accessValue`)}</strong>
                  </p>
                  <p className="mb-0 flex justify-between gap-3">
                    <span className="text-muted">{t(`${packageKey}.summary.decisionsLabel`)}</span>
                    <strong className="text-right text-body">{t(`${packageKey}.summary.decisionsValue`)}</strong>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

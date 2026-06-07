'use client';

import { useTranslations } from 'next-intl';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';

export default function ConfidenceBar() {
  const t = useTranslations('common.confidenceBar');

  return (
    <div className="visual-card-strong p-6">
      <h3 className="section-label">
        {t('title')}
      </h3>
      <GridFrame className="mt-5">
        <Region name="main" desktopSpan="third">
          <div className="h-full rounded-2xl border border-structural-light bg-surface-light-alt p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-accent">
              {t('serviceArea.label')}
            </p>
            <p className="text-sm text-body leading-relaxed">
              {t('serviceArea.text')}
            </p>
          </div>
        </Region>
        <Region name="main" desktopSpan="third">
          <div className="h-full rounded-2xl border border-structural-light bg-surface-light-alt p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-accent">
              {t('sla.label')}
            </p>
            <p className="text-sm text-body leading-relaxed">
              {t('sla.text')}
            </p>
          </div>
        </Region>
        <Region name="main" desktopSpan="third">
          <div className="h-full rounded-2xl border border-structural-light bg-surface-light-alt p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-accent">
              {t('scope.label')}
            </p>
            <p className="text-sm text-body leading-relaxed">
              {t('scope.text')}
            </p>
          </div>
        </Region>
      </GridFrame>
    </div>
  );
}

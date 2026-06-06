'use client';

import { useTranslations } from 'next-intl';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';

export default function ConfidenceBar() {
  const t = useTranslations('common.confidenceBar');

  return (
    <div className="bg-surface-card border border-structural-muted border-l-2 border-l-structural-a r p-6">
      <h3 className="section-label">
        {t('title')}
      </h3>
      <GridFrame>
        <Region name="main" desktopSpan="third">
          <div className="border-t border-structural-light pt-5">
            <p className="section-label mb-1 text-muted">
              {t('serviceArea.label')}
            </p>
            <p className="text-sm text-body leading-relaxed">
              {t('serviceArea.text')}
            </p>
          </div>
        </Region>
        <Region name="main" desktopSpan="third">
          <div className="border-t border-structural-light pt-5">
            <p className="section-label mb-1 text-muted">
              {t('sla.label')}
            </p>
            <p className="text-sm text-body leading-relaxed">
              {t('sla.text')}
            </p>
          </div>
        </Region>
        <Region name="main" desktopSpan="third">
          <div className="border-t border-structural-light pt-5">
            <p className="section-label mb-1 text-muted">
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

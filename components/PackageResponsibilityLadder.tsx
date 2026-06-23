'use client';

import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import { useTranslations } from 'next-intl';

const PACKAGES = [
  { packageKey: 'green', levelKey: 'basic', marker: '01', axisKey: 'axis1', slaKey: '48h', depth: '34%', windowPos: '33.3%' },
  { packageKey: 'orange', levelKey: 'extended', marker: '02', axisKey: 'axis2', slaKey: '24h', depth: '67%', windowPos: '66.7%' },
  { packageKey: 'red', levelKey: 'full', marker: '03', axisKey: 'axis3', slaKey: 'sameDay', depth: '100%', windowPos: '100%' },
] as const;

type PackageLevel = (typeof PACKAGES)[number]['levelKey'];

export default function PackageResponsibilityLadder() {
  const t = useTranslations('services');
  const tHomeLevels = useTranslations('home.levels');
  const [activeLevel, setActiveLevel] = useState<PackageLevel>('extended');
  const active = PACKAGES.find((pkg) => pkg.levelKey === activeLevel) ?? PACKAGES[1];
  const activeSla = active.slaKey === 'sameDay' ? t('diagrams.sla.sameDay') : active.slaKey;
  const panelId = 'services-package-responsibility-panel';
  const cueLabels = t.raw('redesign.ladder.cueLabels') as string[];

  return (
    <div className="services-ladder-band" id="responsibility">
      <div className="services-responsibility-principle motion-reveal">
        <div className="services-responsibility-principle__lead">
          <p className="section-label">{t('redesign.ladder.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('redesign.ladder.title')}</h2>
        </div>
        <div className="services-responsibility-principle__body">
          <p className="services-responsibility-principle__kicker">{t('redesign.ladder.bridgeLine')}</p>
          <p className="services-responsibility-principle__intro">{t('redesign.ladder.intro')}</p>
          <ul className="services-responsibility-principle__cues" aria-label={t('redesign.ladder.eyebrow')}>
            {cueLabels.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="services-authority-scale services-responsibility-console">
        <div className="services-responsibility-console__scale" role="tablist" aria-label={t('redesign.ladder.title')}>
          {PACKAGES.map((pkg) => (
            <button
              key={pkg.levelKey}
              id={`services-package-tab-${pkg.levelKey}`}
              type="button"
              role="tab"
              aria-selected={pkg.levelKey === activeLevel}
              aria-controls={panelId}
              data-active={pkg.levelKey === activeLevel}
              onClick={() => setActiveLevel(pkg.levelKey)}
              className={`services-responsibility-node services-responsibility-node--${pkg.levelKey}`}
            >
              <span className="services-responsibility-node__marker">{pkg.marker}</span>
              <span className="services-responsibility-node__body">
                <span>{tHomeLevels(pkg.axisKey)}</span>
                <strong>{t(`${pkg.packageKey}.title`)}</strong>
              </span>
              <span className="services-responsibility-node__sla">
                {pkg.slaKey === 'sameDay' ? t('diagrams.sla.sameDay') : pkg.slaKey}
              </span>
            </button>
          ))}
        </div>

        <article
          id={panelId}
          key={active.levelKey}
          className={`services-responsibility-reveal services-responsibility-reveal--${active.levelKey} motion-panel-reveal`}
          role="tabpanel"
          aria-labelledby={`services-package-tab-${active.levelKey}`}
        >
          <div className="services-responsibility-reveal__header">
            <div>
              <p>{tHomeLevels(active.axisKey)}</p>
              <h3>{t(`${active.packageKey}.title`)}</h3>
            </div>
            <span className="services-responsibility-reveal__sla">
              {activeSla}
              <span
                className="svc-window"
                style={{ '--window-pos': active.windowPos } as CSSProperties}
                aria-hidden="true"
              />
            </span>
          </div>

          <div
            className="services-responsibility-meter"
            style={{ '--responsibility-depth': active.depth } as CSSProperties}
            aria-hidden="true"
          >
            <span />
          </div>

          <div className="services-responsibility-reveal__body">
            <p>{t(`redesign.ladder.${active.levelKey}.fit`)}</p>
            <div>
              <span>{t('redesign.ladder.responsibilityLabel')}</span>
              <strong>{t(`redesign.ladder.${active.levelKey}.responsibility`)}</strong>
            </div>
          </div>

          <dl className="services-responsibility-metrics">
            <div>
              <dt>{t(`${active.packageKey}.summary.visitsLabel`)}</dt>
              <dd>{t(`${active.packageKey}.summary.visitsValue`)}</dd>
            </div>
            <div>
              <dt>{t(`${active.packageKey}.summary.accessLabel`)}</dt>
              <dd>{t(`${active.packageKey}.summary.accessValue`)}</dd>
            </div>
            <div>
              <dt>{t(`${active.packageKey}.summary.decisionsLabel`)}</dt>
              <dd>
                {t(`${active.packageKey}.summary.decisionsValue`)}
                <span
                  className="svc-instrument svc-depth"
                  style={{ '--depth-pos': active.depth } as CSSProperties}
                  aria-hidden="true"
                />
              </dd>
            </div>
          </dl>

          <div className="services-responsibility-reveal__actions">
            <Link href="#scope" className="btn-primary">
              {t('redesign.ladder.detailCta')}
            </Link>
            <Link href="#estimator" className="btn-secondary">
              {t('redesign.ladder.estimatorCta')}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

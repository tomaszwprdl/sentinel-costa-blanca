'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import DisclosureBlock from '@/components/DisclosureBlock';
import ServiceScopeDiagram from '@/components/visuals/ServiceScopeDiagram';

const PACKAGES = [
  {
    key: 'green',
    level: 'basic',
    marker: '01',
    highlights: ['visitScopeIntro', 'keyStorageTitle', 'emergencyTitle'],
  },
  {
    key: 'orange',
    level: 'extended',
    marker: '02',
    highlights: ['fromBasic', 'accessTitle', 'emergencyTitle'],
  },
  {
    key: 'red',
    level: 'full',
    marker: '03',
    highlights: ['fromExtended', 'decisionTitle', 'coordinationTitle'],
  },
] as const;

const NOT_INCLUDED_KEYS = {
  green: ['thirdPartyAccess', 'repairCoordination', 'financialDecisions', 'contractorOversight'],
  orange: ['renovationSupervision', 'extendedResponsibility', 'majorWorks'],
  red: ['contractorResult', 'contractorQuality', 'availability24x7', 'conciergeServices'],
} as const;

type PackageKey = (typeof PACKAGES)[number]['key'];

export default function PackageDetailPanels() {
  const t = useTranslations('services');
  const [selected, setSelected] = useState<PackageKey>('orange');
  const active = PACKAGES.find((pkg) => pkg.key === selected) ?? PACKAGES[1];

  return (
    <div className="services-scope-band" id="scope">
      <div className="mb-6 max-w-[760px]">
        <p className="section-label">{t('redesign.packageDetails.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.packageDetails.title')}</h2>
        <p className="mt-3 text-body">{t('redesign.packageDetails.intro')}</p>
      </div>

      <div className="services-package-panel overflow-hidden rounded-2xl border border-structural-light bg-surface-card" id="package-details">
        <div className="grid gap-0 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="border-b border-structural-light bg-surface-light-alt p-4 lg:border-b-0 lg:border-r">
            <div className="grid gap-2">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.key}
                  type="button"
                  onClick={() => setSelected(pkg.key)}
                  aria-pressed={pkg.key === selected}
                  data-selected={pkg.key === selected}
                  className="selected-option rounded-2xl border border-structural-light bg-surface-card px-4 py-4 text-left transition hover:border-accent aria-pressed:border-accent aria-pressed:bg-authority-bg aria-pressed:text-authority-on-dark"
                >
                  <span className="block text-xs font-black uppercase tracking-wide opacity-75">{pkg.marker}</span>
                  <span className="mt-1 block text-lg font-black">{t(`${pkg.key}.title`)}</span>
                </button>
              ))}
            </div>
          </div>

          <article>
            <>
                <div className="grid gap-0 md:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
                  <div key={active.key} className="motion-panel-reveal p-5 md:p-8">
                    <p className="section-label">{active.marker}</p>
                    <h3 className="mt-3 text-3xl font-black text-heading">{t(`${active.key}.title`)}</h3>
                    <p className="text-lg leading-relaxed text-body">{t(`${active.key}.definition`)}</p>

                    <div className="mt-6 grid gap-3">
                      {active.highlights.map((key) => (
                        <div key={key} className="rounded-2xl bg-surface-light-alt p-4">
                          <p className="mb-0 text-sm font-semibold leading-relaxed text-body">
                            {t(`${active.key}.${key}`)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link href="#estimator" className="btn-primary">
                        {t('redesign.packageDetails.estimateCta')}
                      </Link>
                      <Link href="#event-simulator" className="btn-secondary">
                        {t('redesign.packageDetails.simulatorCta')}
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-structural-light bg-surface-light-alt p-4 md:border-l md:border-t-0 md:p-5">
                    <ServiceScopeDiagram
                      key={active.level}
                      variant={active.level}
                      compact
                      className="motion-panel-reveal rounded-2xl"
                    />
                    <div className="mt-4 rounded-2xl bg-surface-card p-4">
                      <p className="mb-2 text-xs font-black uppercase tracking-wide text-muted">{t('summaryTitle')}</p>
                      <p className="mb-1 text-sm text-body">
                        <strong>{t(`${active.key}.summary.visitsValue`)}</strong> {t(`${active.key}.summary.visitsLabel`)}
                      </p>
                      <p className="mb-1 text-sm text-body">
                        <strong>{t(`${active.key}.summary.accessValue`)}</strong> {t(`${active.key}.summary.accessLabel`)}
                      </p>
                      <p className="mb-0 text-sm text-body">
                        <strong>{t(`${active.key}.summary.decisionsValue`)}</strong>{' '}
                        {t(`${active.key}.summary.decisionsLabel`)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-structural-light p-5 md:p-8">
                  <DisclosureBlock
                    label={t('redesign.packageDetails.fullScopeLabel')}
                    explainer={t('redesign.packageDetails.fullScopeExplainer')}
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-base font-black text-heading">
                          {t('redesign.packageDetails.includedLabel')}
                        </h4>
                        <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                          {active.key === 'green' && (
                            <>
                              <li>{t('green.visitItems.accessSecurity')}</li>
                              <li>{t('green.visitItems.roomsInstallations')}</li>
                              <li>{t('green.visitItems.moistureDamage')}</li>
                              <li>{t('green.visitItems.photoReport')}</li>
                            </>
                          )}
                          {active.key === 'orange' && (
                            <>
                              <li>{t('orange.accessItems.arranging')}</li>
                              <li>{t('orange.accessItems.scheduling')}</li>
                              <li>{t('orange.accessItems.verification')}</li>
                              <li>{t('orange.accessItems.documentation')}</li>
                            </>
                          )}
                          {active.key === 'red' && (
                            <>
                              <li>{t('red.emergencyItems.immediate')}</li>
                              <li>{t('red.emergencyItems.protective')}</li>
                              <li>{t('red.decisionItems.contractorEngagement')}</li>
                              <li>{t('red.coordinationItems.priority')}</li>
                            </>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-base font-black text-heading">
                          {t('redesign.packageDetails.notIncludedLabel')}
                        </h4>
                        <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                          {NOT_INCLUDED_KEYS[active.key].map((key) => (
                            <li key={key}>{t(`${active.key}.notIncludedItems.${key}`)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DisclosureBlock>
                </div>
              </>
          </article>
        </div>
      </div>
    </div>
  );
}

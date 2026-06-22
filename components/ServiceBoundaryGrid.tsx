'use client';

import { useTranslations } from 'next-intl';

const DOES_KEYS = ['oversight', 'access', 'documentation', 'coordination'] as const;
const DOES_NOT_KEYS = ['bookings', 'administration', 'lifestyleTasks', 'unlimitedEmergency', 'undefinedTasks'] as const;

export default function ServiceBoundaryGrid() {
  const t = useTranslations('services');

  return (
    <div className="services-boundary-panel services-scope-subband">
      <div className="services-boundary-panel__header">
        <p className="section-label">{t('redesign.boundary.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.boundary.title')}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{t('redesign.boundary.intro')}</p>
        <p className="services-boundary-eligibility">{t('redesign.boundary.eligibility')}</p>
      </div>

      <div className="services-boundary-dual">
        <section className="services-boundary-column services-boundary-column--inside">
          <div className="services-boundary-column__heading">
            <span aria-hidden="true">01</span>
            <h3>{t('redesign.boundary.doesTitle')}</h3>
          </div>
          <div className="services-boundary-list">
            {DOES_KEYS.map((key) => (
              <article key={key} className="services-boundary-item">
                <span aria-hidden="true" />
                <div>
                  <p>{t(`redesign.boundary.does.${key}.title`)}</p>
                  <small>{t(`redesign.boundary.does.${key}.body`)}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-boundary-column services-boundary-column--outside">
          <div className="services-boundary-column__heading">
            <span aria-hidden="true">02</span>
            <h3>{t('redesign.boundary.doesNotTitle')}</h3>
          </div>
          <div className="services-boundary-list">
            {DOES_NOT_KEYS.map((key) => (
              <article key={key} className="services-boundary-item">
                <span aria-hidden="true" />
                <div>
                  <p>{t(`redesign.boundary.doesNot.${key}.title`)}</p>
                  <small>{t(`redesign.boundary.doesNot.${key}.body`)}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

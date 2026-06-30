'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const DOES_KEYS = ['oversight', 'access', 'documentation', 'coordination'] as const;
const DOES_NOT_KEYS = ['bookings', 'administration', 'lifestyleTasks', 'unlimitedEmergency', 'undefinedTasks'] as const;

export default function ServiceBoundaryGrid() {
  const t = useTranslations('services');

  // Render the location qualification as a recorded "label: value" field
  // without altering copy: split on the first colon, preserving the full string.
  const eligibility = t('redesign.boundary.eligibility');
  const eligColon = eligibility.indexOf(':');
  const eligLabel = eligColon > -1 ? eligibility.slice(0, eligColon).trim() : '';
  const eligValue = eligColon > -1 ? eligibility.slice(eligColon + 1).trim() : eligibility.trim();

  return (
    <div className="services-boundary-panel services-scope-subband">
      <div className="services-boundary-panel__header">
        <div className="services-boundary-panel__header-copy">
          <p className="section-label">{t('redesign.boundary.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('redesign.boundary.title')}</h2>
          <p className="mt-3 max-w-[62ch] text-body">{t('redesign.boundary.intro')}</p>
          <p className="services-boundary-eligibility">
            {eligLabel && <span className="services-boundary-eligibility__label">{eligLabel}</span>}
            <span className="services-boundary-eligibility__value">{eligValue}</span>
          </p>
        </div>
        <div className="services-boundary-panel__object" aria-hidden="true">
          <Image
            src="/photos/services-scope-object.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 22vw, 90vw"
          />
        </div>
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

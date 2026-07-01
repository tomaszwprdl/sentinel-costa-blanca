'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ChevronIcon from '@/components/icons/ChevronIcon';

const DOES_KEYS = ['oversight', 'access', 'documentation', 'coordination'] as const;
const DOES_NOT_KEYS = ['bookings', 'administration', 'lifestyleTasks', 'unlimitedEmergency', 'undefinedTasks'] as const;

const ZONES = [
  { id: 'inside', index: '01', titleKey: 'doesTitle', group: 'does', keys: DOES_KEYS },
  { id: 'outside', index: '02', titleKey: 'doesNotTitle', group: 'doesNot', keys: DOES_NOT_KEYS },
] as const;

export default function ServiceBoundaryGrid() {
  const t = useTranslations('services');
  const tDisclosure = useTranslations('common.disclosure');
  const [openZones, setOpenZones] = useState<Record<string, boolean>>({});

  // Render the location qualification as a recorded "label: value" field
  // without altering copy: split on the first colon, preserving the full string.
  const eligibility = t('redesign.boundary.eligibility');
  const eligColon = eligibility.indexOf(':');
  const eligLabel = eligColon > -1 ? eligibility.slice(0, eligColon).trim() : '';
  const eligValue = eligColon > -1 ? eligibility.slice(eligColon + 1).trim() : eligibility.trim();

  const toggleZone = (id: string) => {
    setOpenZones((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="services-boundary-panel services-scope-subband">
      <div className="services-boundary-panel__header">
        <div className="services-boundary-panel__header-copy">
          <p className="section-label">{t('redesign.boundary.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('redesign.boundary.title')}</h2>
          <p className="services-boundary-panel__intro mt-3">{t('redesign.boundary.intro')}</p>
        </div>
        <div className="services-boundary-panel__object" aria-hidden="true">
          <Image
            src="/photos/services-boundary-scope-map.webp"
            alt=""
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
          />
        </div>
        <p className="services-boundary-eligibility">
          {eligLabel && <span className="services-boundary-eligibility__label">{eligLabel}</span>}
          <span className="services-boundary-eligibility__value">{eligValue}</span>
        </p>
      </div>

      <div className="services-boundary-dual">
        {ZONES.map((zone) => {
          const isOpen = !!openZones[zone.id];
          return (
            <section
              key={zone.id}
              className={`services-boundary-column services-boundary-column--${zone.id}${isOpen ? ' services-boundary-column--open' : ''}`}
            >
              <div className="services-boundary-column__heading">
                <span aria-hidden="true">{zone.index}</span>
                <h3>{t(`redesign.boundary.${zone.titleKey}`)}</h3>
              </div>
              <div className="services-boundary-list">
                {zone.keys.map((key) => (
                  <article key={key} className="services-boundary-item">
                    <span aria-hidden="true" />
                    <div>
                      <p>{t(`redesign.boundary.${zone.group}.${key}.title`)}</p>
                      <small>{t(`redesign.boundary.${zone.group}.${key}.body`)}</small>
                    </div>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className="services-boundary-column__toggle"
                aria-expanded={isOpen}
                onClick={() => toggleZone(zone.id)}
              >
                <span>{isOpen ? tDisclosure('hideDetails') : tDisclosure('showDetails')}</span>
                <ChevronIcon className={`disclosure-icon ${isOpen ? 'disclosure-icon--open' : ''}`} />
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
}

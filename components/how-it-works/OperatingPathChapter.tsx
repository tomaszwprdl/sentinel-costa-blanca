'use client';

import { useTranslations } from 'next-intl';

const TIMELINE_KEYS = ['before', 'setup', 'active', 'followup'] as const;
const ONE_MINUTE_KEYS = ['qualify', 'scope', 'inspect', 'escalate'] as const;

export default function OperatingPathChapter() {
  const t = useTranslations('howItWorks');

  return (
    <div className="hiw-operating-path">
      <header className="hiw-chapter-header hiw-chapter-header--on-dark max-w-[760px]">
        <p className="section-label text-authority-on-dark/80">{t('redesign.timeline.eyebrow')}</p>
        <h2 className="h2-system mt-3 text-authority-on-dark">{t('redesign.timeline.title')}</h2>
        <p className="mt-3 max-w-[62ch] text-authority-on-dark/85">{t('redesign.oneMinute.intro')}</p>
      </header>

      <div className="hiw-operating-path__phases" aria-label={t('redesign.timeline.title')}>
        <div className="hiw-operating-path__phase-line" aria-hidden />
        <ol className="hiw-operating-path__phase-list">
          {TIMELINE_KEYS.map((key, index) => (
            <li key={key} className="hiw-operating-path__phase">
              <span className="hiw-operating-path__phase-marker" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="hiw-operating-path__phase-title">{t(`redesign.timeline.items.${key}.title`)}</h3>
                <p className="hiw-operating-path__phase-body">{t(`redesign.timeline.items.${key}.body`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="hiw-operating-path__checklist">
        <p className="hiw-operating-path__checklist-label">{t('redesign.oneMinute.title')}</p>
        <ol className="hiw-operating-path__checklist-list">
          {ONE_MINUTE_KEYS.map((key, index) => (
            <li key={key} className="hiw-operating-path__checklist-item">
              <span className="hiw-operating-path__checklist-index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="hiw-operating-path__checklist-title">{t(`redesign.oneMinute.items.${key}.title`)}</h3>
                <p className="hiw-operating-path__checklist-body">{t(`redesign.oneMinute.items.${key}.body`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

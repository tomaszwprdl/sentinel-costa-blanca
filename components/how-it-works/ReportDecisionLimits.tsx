'use client';

import { useTranslations } from 'next-intl';

const PACKAGE_KEYS = ['green', 'orange', 'red'] as const;

export default function ReportDecisionLimits() {
  const t = useTranslations('howItWorks');
  const tServices = useTranslations('services');

  return (
    <div className="hiw-decision-limits">
      <h4 className="hiw-decision-limits__title">{t('redesign.decision.limitsTitle')}</h4>

      <div className="hiw-decision-limits__securing-band">
        <p className="hiw-decision-limits__securing-title">{t('redesign.decision.securingBandTitle')}</p>
        <p className="hiw-decision-limits__securing-value">{tServices('comparison.values.euroLimit300')}</p>
        <p className="hiw-decision-limits__securing-intro">{t('redesign.decision.securingBandIntro')}</p>
      </div>

      <p className="hiw-decision-limits__subsection">{t('redesign.decision.emergencyPostureTitle')}</p>
      <ul className="hiw-decision-limits__list">
        {PACKAGE_KEYS.map((key) => (
          <li
            key={key}
            className={[
              'hiw-decision-limits__item',
              key === 'red' ? 'hiw-decision-limits__item--full' : '',
            ].join(' ')}
          >
            <p className="hiw-decision-limits__package">{tServices(`${key}.title`)}</p>
            <p className="hiw-decision-limits__row">
              <span className="hiw-decision-limits__label">{tServices(`${key}.summary.decisionsLabel`)}</span>
              <span>{tServices(`${key}.summary.decisionsValue`)}</span>
            </p>
            {key === 'red' && (
              <div className="hiw-decision-limits__authority-block">
                <p className="hiw-decision-limits__authority-title">{t('redesign.decision.fullAuthorityTitle')}</p>
                <p className="hiw-decision-limits__authority-line">{t('step2.redPackageLimits.standard')}</p>
                <p className="hiw-decision-limits__authority-line">{t('step2.redPackageLimits.optional')}</p>
              </div>
            )}
          </li>
        ))}
      </ul>

      <p className="hiw-decision-limits__approval">{t('redesign.decision.ownerApprovalLine')}</p>
      <p className="hiw-decision-limits__note">{t('redesign.decision.note')}</p>
    </div>
  );
}

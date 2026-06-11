'use client';

import { useTranslations } from 'next-intl';

export default function ReportDecisionLimits() {
  const t = useTranslations('howItWorks');

  return (
    <div className="hiw-decision-limits">
      <h4 className="hiw-decision-limits__title">{t('redesign.decision.limitsTitle')}</h4>

      <div className="hiw-decision-limits__block hiw-decision-limits__block--protective">
        <p className="hiw-decision-limits__block-title">{t('redesign.decision.protectiveTitle')}</p>
        <p className="hiw-decision-limits__block-body">{t('redesign.decision.protectiveIntro')}</p>
      </div>

      <div className="hiw-decision-limits__block hiw-decision-limits__block--authority">
        <p className="hiw-decision-limits__block-title">{t('redesign.decision.authorityTitle')}</p>
        <p className="hiw-decision-limits__block-body">{t('redesign.decision.authorityScope')}</p>
        <p className="hiw-decision-limits__authority-line">{t('step2.redPackageLimits.standard')}</p>
        <p className="hiw-decision-limits__authority-line">{t('step2.redPackageLimits.optional')}</p>
        <p className="hiw-decision-limits__approval">{t('redesign.decision.ownerApprovalLine')}</p>
      </div>

      <p className="hiw-decision-limits__note">{t('redesign.decision.note')}</p>
    </div>
  );
}

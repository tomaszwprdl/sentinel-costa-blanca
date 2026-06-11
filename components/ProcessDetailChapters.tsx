import { type ReactNode } from 'react';
import DisclosureBlock from '@/components/DisclosureBlock';

type Translator = (key: string, values?: Record<string, string | number | Date>) => string;

const STEP0_GROUPS = [
  ['geographicTitle', ['geographicItems.radius', 'geographicItems.outside']],
  ['propertyTypeTitle', ['propertyTypeItems.types', 'propertyTypeItems.access']],
  ['usagePatternTitle', ['usagePatternItems.usage', 'usagePatternItems.frequency']],
  ['expectationsTitle', ['expectationsItems.understanding', 'expectationsItems.acceptance', 'expectationsItems.procedures']],
  ['disqualifyingTitle', ['disqualifyingItems.outsideArea', 'disqualifyingItems.unlimitedExpectation', 'disqualifyingItems.boundaries', 'disqualifyingItems.pressure']],
] as const;

const STEP1_GROUPS = [
  ['ownerInfoTitle', ['ownerInfoItems.fullName', 'ownerInfoItems.permanentAddress', 'ownerInfoItems.phone', 'ownerInfoItems.email', 'ownerInfoItems.language']],
  ['propertyInfoTitle', ['propertyInfoItems.address', 'propertyInfoItems.unit', 'propertyInfoItems.size', 'propertyInfoItems.type']],
  ['systemsTitle', ['systemsItems.water', 'systemsItems.electrical', 'systemsItems.boiler', 'systemsItems.climate', 'systemsItems.alarm']],
  ['keysTitle', ['keysItems.minimum', 'keysItems.types', 'keysItems.handover']],
] as const;

const STEP2_ITEMS = ['packages.green', 'packages.orange', 'packages.red', 'confirmationsItems.scope', 'confirmationsItems.limitations', 'confirmationsItems.sla', 'confirmationsItems.authority', 'confirmationsItems.pricing'] as const;

const STEP3_GROUPS = [
  ['scopeTitle', ['scopeItems.visual', 'scopeItems.doors', 'scopeItems.water', 'scopeItems.electrical', 'scopeItems.boiler', 'scopeItems.condition', 'scopeItems.damage']],
  ['documentationTitle', ['documentationItems.photos', 'documentationItems.meters', 'documentationItems.notes', 'documentationItems.recommendations']],
  ['reportTitle', ['reportItems.condition', 'reportItems.photos', 'reportItems.concerns', 'reportItems.immediate']],
] as const;

const STEP4_GROUPS = [
  ['scheduleTitle', ['scheduleItems.preferred', 'scheduleItems.frequency', 'scheduleItems.seasonal']],
  ['emergencyTitle', ['emergencyItems.definition', 'emergencyItems.priority', 'emergencyItems.protocol', 'emergencyItems.limits']],
  ['accessTitle', ['accessItems.contacts', 'accessItems.scheduling', 'accessItems.reporting']],
  ['keyHandoverTitle', ['keyHandoverItems.transfer', 'keyHandoverItems.inventory', 'keyHandoverItems.storage']],
] as const;

const STEP5_ITEMS = ['fromDateItems.sla', 'fromDateItems.schedule', 'fromDateItems.emergency', 'fromDateItems.terms', 'ongoingItems.visits', 'ongoingItems.reports', 'ongoingItems.access', 'ongoingItems.emergency'] as const;

function DetailGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="mb-2 text-base font-black text-heading">{title}</h4>
      <ul className="ml-4 list-disc space-y-1.5 text-sm text-body">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function LedgerRow({ index, children }: { index: number; children: ReactNode }) {
  return (
    <li className="hiw-ledger__row">
      <span className="hiw-ledger__marker" aria-hidden>
        {String(index).padStart(2, '0')}
      </span>
      <div className="min-w-0">{children}</div>
    </li>
  );
}

export default function ProcessDetailChapters({ t }: { t: Translator }) {
  return (
    <ol className="hiw-ledger">
      <LedgerRow index={1}>
        <DisclosureBlock label={t('redesign.details.chapters.qualification')} explainer={t('step0.subtitle')}>
          <div className="grid gap-6 md:grid-cols-2">
            {STEP0_GROUPS.map(([titleKey, itemKeys]) => (
              <DetailGroup
                key={titleKey}
                title={t(`step0.${titleKey}`)}
                items={itemKeys.map((itemKey) => t(`step0.${itemKey}`))}
              />
            ))}
          </div>
        </DisclosureBlock>
      </LedgerRow>

      <LedgerRow index={2}>
        <DisclosureBlock label={t('redesign.details.chapters.documentation')} explainer={t('step1.subtitle')}>
          <div className="grid gap-6 md:grid-cols-2">
            {STEP1_GROUPS.map(([titleKey, itemKeys]) => (
              <DetailGroup
                key={titleKey}
                title={t(`step1.${titleKey}`)}
                items={itemKeys.map((itemKey) => t(`step1.${itemKey}`))}
              />
            ))}
          </div>
        </DisclosureBlock>
      </LedgerRow>

      <LedgerRow index={3}>
        <DisclosureBlock label={t('redesign.details.chapters.package')} explainer={t('step2.subtitle')}>
          <ul className="ml-4 list-disc space-y-2 text-sm text-body">
            {STEP2_ITEMS.map((itemKey) => (
              <li key={itemKey}>{t(`step2.${itemKey}`)}</li>
            ))}
          </ul>
        </DisclosureBlock>
      </LedgerRow>

      <LedgerRow index={4}>
        <DisclosureBlock label={t('redesign.details.chapters.inspection')} explainer={t('step3.purposeText')}>
          <div className="space-y-5">
            {STEP3_GROUPS.map(([titleKey, itemKeys]) => (
              <DetailGroup
                key={titleKey}
                title={t(`step3.${titleKey}`)}
                items={itemKeys.map((itemKey) => t(`step3.${itemKey}`))}
              />
            ))}
            <div>
              <h4 className="mb-2 text-base font-black text-heading">{t('step3.approvalTitle')}</h4>
              <p className="mb-0 text-sm text-body">{t('step3.approvalText')}</p>
            </div>
            <div>
              <h4 className="mb-2 text-base font-black text-heading">{t('step3.timelineTitle')}</h4>
              <p className="mb-0 text-sm text-body">{t('step3.timelineText')}</p>
            </div>
          </div>
        </DisclosureBlock>
      </LedgerRow>

      <LedgerRow index={5}>
        <DisclosureBlock label={t('redesign.details.chapters.setup')} explainer={t('step4.scheduleIntro')}>
          <div className="grid gap-6 md:grid-cols-2">
            {STEP4_GROUPS.map(([titleKey, itemKeys]) => (
              <DetailGroup
                key={titleKey}
                title={t(`step4.${titleKey}`)}
                items={itemKeys.map((itemKey) => t(`step4.${itemKey}`))}
              />
            ))}
          </div>
        </DisclosureBlock>
      </LedgerRow>

      <LedgerRow index={6}>
        <DisclosureBlock label={t('redesign.details.chapters.activation')} explainer={t('step5.confirmationText')}>
          <ul className="ml-4 list-disc space-y-2 text-sm text-body">
            {STEP5_ITEMS.map((itemKey) => (
              <li key={itemKey}>{t(`step5.${itemKey}`)}</li>
            ))}
          </ul>
        </DisclosureBlock>
      </LedgerRow>
    </ol>
  );
}

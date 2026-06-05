'use client';

import { useState, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  type PackageKey,
  type ModeKey,
  type SizeKey,
  type BedroomsKey,
  type ScopeElementKey,
  SCOPE_ELEMENT_KEYS,
  computeEstimate,
  getSizeKeyFromSqm,
  SQM_INPUT_MIN,
  SQM_INPUT_MAX,
} from '@/lib/estimatorMatrix';
import Section from '@/components/layout/Section';

const PACKAGE_KEYS: PackageKey[] = ['structured_presence', 'active_oversight', 'extended_jurisdiction'];
const BEDROOMS_KEYS: BedroomsKey[] = ['B1', 'B2', 'B3', 'B4P'];

function formatRange(min: number, max: number): string {
  return `€${min}–€${max}`;
}

function sortScopeElements(keys: ScopeElementKey[]): ScopeElementKey[] {
  return [...keys].sort((a, b) => SCOPE_ELEMENT_KEYS.indexOf(a) - SCOPE_ELEMENT_KEYS.indexOf(b));
}

export default function Estimator() {
  const locale = useLocale();
  const t = useTranslations('services.estimator');
  const [packageKey, setPackageKey] = useState<PackageKey>('structured_presence');
  const [modeKey, setModeKey] = useState<ModeKey>('private_use');
  const [sqm, setSqm] = useState<number>(80);
  const [bedroomsKey, setBedroomsKey] = useState<BedroomsKey>('B2');
  const [scopeElements, setScopeElements] = useState<ScopeElementKey[]>([]);
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [hasCalculatedOnce, setHasCalculatedOnce] = useState(false);

  const clampedSqm = Math.max(SQM_INPUT_MIN, Math.min(SQM_INPUT_MAX, Math.round(sqm)));
  const sizeKey: SizeKey = getSizeKeyFromSqm(clampedSqm);
  const showCompatibilityNote = packageKey === 'structured_presence' && modeKey === 'active_guest';
  const showSqmMinValidation = sqm < SQM_INPUT_MIN && Number.isFinite(sqm);
  const showSqmMaxValidation = sqm > SQM_INPUT_MAX;

  const collapseResult = useCallback(() => {
    if (hasCalculated) {
      setResult(null);
      setHasCalculated(false);
    }
  }, [hasCalculated]);

  const handlePackageChange = (v: PackageKey) => {
    setPackageKey(v);
    collapseResult();
  };
  const handleModeChange = (v: ModeKey) => {
    setModeKey(v);
    collapseResult();
  };
  const handleSqmChange = (v: number) => {
    const num = Number.isFinite(v) ? Math.round(v) : SQM_INPUT_MIN;
    setSqm(num);
    collapseResult();
  };
  const handleBedroomsChange = (v: BedroomsKey) => {
    setBedroomsKey(v);
    collapseResult();
  };
  const handleScopeToggle = (k: ScopeElementKey) => {
    setScopeElements((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]));
    collapseResult();
  };

  const handleCalculate = () => {
    const r = computeEstimate(packageKey, modeKey, sizeKey, bedroomsKey, sortScopeElements(scopeElements));
    setResult(r);
    setHasCalculated(true);
    setHasCalculatedOnce(true);
  };

  const scopeSerialized = sortScopeElements(scopeElements).join(',');
  const contactPayload = result
    ? new URLSearchParams({
        est_package: packageKey,
        est_mode: modeKey,
        est_size: sizeKey,
        est_sqm: String(clampedSqm),
        est_bedrooms: bedroomsKey,
        est_scope: scopeSerialized,
        est_range: `${result.min}-${result.max}`,
      })
    : null;

  const showParamsChangedCue = hasCalculatedOnce && !result;

  const gateMessage = showParamsChangedCue ? t('paramsChangedCue') : hasCalculated && result ? t('gateAfter') : t('gateBefore');

  const liveStructureSummary = (
    <dl className="grid gap-1.5 text-sm">
      <div className="flex gap-2">
        <dt className="text-muted shrink-0">{t('resultJurisdiction')}:</dt>
        <dd className="text-body">{t(`packages.${packageKey}`)}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="text-muted shrink-0">{t('resultMode')}:</dt>
        <dd className="text-body">{modeKey === 'private_use' ? t('modePrivateUse') : t('modeActiveGuest')}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="text-muted shrink-0">{t('resultArea')}:</dt>
        <dd className="text-body">{clampedSqm} m²</dd>
      </div>
      <div className="flex gap-2">
        <dt className="text-muted shrink-0">{t('resultBedrooms')}:</dt>
        <dd className="text-body">{bedroomsKey === 'B4P' ? '4+' : bedroomsKey.slice(1)}</dd>
      </div>
      {scopeElements.length > 0 && (
        <div className="flex gap-2">
          <dt className="text-muted shrink-0">{t('resultScopeElements')}:</dt>
          <dd className="text-body">{sortScopeElements(scopeElements).map((k) => t(`scopeElements.${k}`)).join(', ')}</dd>
        </div>
      )}
    </dl>
  );

  const reasonPanel = (
    <div className="border border-structural-light bg-surface-light-alt r p-5 h-fit space-y-4">
      <p className="text-sm text-body">{t('reasonWhatModeling')}</p>
      <p className="text-xs text-muted">{t('reasonGuestModeChange')}</p>
      <div>
        <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">{t('reasonSelectedStructure')}</p>
        {liveStructureSummary}
      </div>
      <p className="text-xs text-muted border-t border-structural-muted/50 pt-3">{t('reasonPriceAfterCalculate')}</p>
    </div>
  );

  const resultPanel = result && hasCalculated && (
    <div className="border border-structural-light bg-surface-light-alt r p-5 mt-4 space-y-3">
      <h3 className="text-body text-[11px] font-medium uppercase tracking-wide text-muted">{t('resultTitle')}</h3>
      <p className="text-body font-semibold">
        {t('rangeTitle')}: {formatRange(result.min, result.max)} {t('rangeSuffix')}
      </p>
      <p className="text-[11px] text-muted font-medium uppercase tracking-wide">{t('rangeWordingHeading')}</p>
      <ul className="text-xs text-muted list-disc list-inside space-y-0.5">
        <li>{t('driverBullet1')}</li>
        <li>{t('driverBullet2')}</li>
        <li>{t('driverBullet3')}</li>
        <li>{t('driverBullet4')}</li>
        {modeKey === 'active_guest' && <li>{t('driverBulletGuest')}</li>}
      </ul>
      <p className="text-xs text-muted">{t('disclaimer')}</p>
      {contactPayload && (
        <div className="flex justify-end pt-2">
          <Link href={`/${locale}/contact?${contactPayload.toString()}`} className="btn-secondary text-sm">
            {t('ctaProceed')}
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <Section tone="alt">
      <div className="max-w-[65ch] lg:max-w-none mx-auto border border-structural-muted bg-surface-light py-10 px-5 r">
        <h2 className="h2-system mb-10">{t('heading')}</h2>

        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10 lg:items-start">
          <div className="space-y-8">
            <fieldset className="space-y-0 border-0 p-0 m-0">
              <legend className="text-body font-semibold mb-2 block">{t('groupJurisdiction')}</legend>
              <p className="text-xs text-muted mb-4">{t('groupJurisdictionAnchor')}</p>
              <div className="space-y-2" role="radiogroup" aria-label={t('packageLabel')}>
                {PACKAGE_KEYS.map((k) => (
                  <label
                    key={k}
                    className={`flex cursor-pointer border border-structural-light r p-4 transition-colors ${
                      packageKey === k ? 'border-authority bg-surface-light-alt' : 'bg-surface-light hover:border-structural-muted'
                    }`}
                  >
                    <input
                      type="radio"
                      name="estimator-package"
                      value={k}
                      checked={packageKey === k}
                      onChange={() => handlePackageChange(k)}
                      className="sr-only"
                    />
                    <span className="flex shrink-0 w-5 h-5 mt-0.5 rounded-full border-2 border-structural-muted flex items-center justify-center mr-4">
                      {packageKey === k && <span className="w-2 h-2 rounded-full bg-authority" aria-hidden />}
                    </span>
                    <div className="min-w-0">
                      <span className="text-body font-medium block">{t(`packages.${k}`)}</span>
                      <span className="text-sm text-muted block mt-0.5">{t(`packageDescriptor.${k}`)}</span>
                    </div>
                  </label>
                ))}
              </div>
              {showCompatibilityNote && (
                <div className="mt-3 p-3 border border-structural-muted/50 bg-surface-light-alt r" role="note">
                  <p className="text-xs text-muted">{t('compatibilityNote')}</p>
                </div>
              )}
            </fieldset>

            <fieldset className="space-y-0 border-0 p-0 m-0">
              <legend className="text-body text-sm font-medium text-muted mb-2 block">{t('groupMode')}</legend>
              <p className="text-xs text-muted mb-3">{t('groupModeAnchor')}</p>
              <div className="inline-flex border border-structural-light r overflow-hidden" role="radiogroup" aria-label={t('modeLabel')}>
                <label
                  className={`cursor-pointer px-5 py-3 text-sm ${
                    modeKey === 'private_use' ? 'bg-authority text-authority-on-dark' : 'bg-surface-light text-body hover:bg-surface-light-alt'
                  }`}
                >
                  <input type="radio" name="estimator-mode" value="private_use" checked={modeKey === 'private_use'} onChange={() => handleModeChange('private_use')} className="sr-only" />
                  {t('modePrivateUse')}
                </label>
                <label
                  className={`cursor-pointer px-5 py-3 text-sm border-l border-structural-light ${
                    modeKey === 'active_guest' ? 'bg-authority text-authority-on-dark' : 'bg-surface-light text-body hover:bg-surface-light-alt'
                  }`}
                >
                  <input type="radio" name="estimator-mode" value="active_guest" checked={modeKey === 'active_guest'} onChange={() => handleModeChange('active_guest')} className="sr-only" />
                  {t('modeActiveGuest')}
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className={`p-3 border r text-sm ${modeKey === 'private_use' ? 'border-authority bg-surface-light-alt' : 'border-structural-muted/50 opacity-70'}`}>
                  <p className="font-medium text-body mb-1.5">{t('modePrivateUse')}</p>
                  <ul className="text-xs text-muted space-y-0.5 list-disc list-inside">
                    <li>{t('modeWhatPrivate1')}</li>
                    <li>{t('modeWhatPrivate2')}</li>
                  </ul>
                </div>
                <div className={`p-3 border r text-sm ${modeKey === 'active_guest' ? 'border-authority bg-surface-light-alt' : 'border-structural-muted/50 opacity-70'}`}>
                  <p className="font-medium text-body mb-1.5">{t('modeActiveGuest')}</p>
                  <ul className="text-xs text-muted space-y-0.5 list-disc list-inside">
                    <li>{t('modeWhatGuest1')}</li>
                    <li>{t('modeWhatGuest2')}</li>
                    <li>{t('modeWhatGuest3')}</li>
                  </ul>
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-0 border-0 p-0 m-0">
              <legend className="text-body text-sm font-medium text-muted mb-2 block">{t('groupParameters')}</legend>
              <p className="text-xs text-muted mb-3">{t('groupParametersAnchor')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="estimator-sqm" className="block text-sm text-body mb-2">{t('sizeLabel')}</label>
                  <input
                    id="estimator-sqm"
                    type="number"
                    min={SQM_INPUT_MIN}
                    max={SQM_INPUT_MAX}
                    value={sqm}
                    onChange={(e) => {
                      const raw = e.target.value;
                      if (raw === '') handleSqmChange(SQM_INPUT_MIN);
                      else handleSqmChange(Number(raw));
                    }}
                    className="w-full px-4 py-3 border border-structural-light bg-surface-light text-body focus:ring-2 focus:ring-authority focus:border-authority r text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                    aria-required="true"
                  />
                  <p className="text-xs text-muted mt-1">{t('sizeHelper')}</p>
                  {showSqmMinValidation && <p className="text-xs text-muted mt-1" role="alert">{t('sqmValidationMin')}</p>}
                  {showSqmMaxValidation && <p className="text-xs text-muted mt-1" role="alert">{t('sqmValidationMax')}</p>}
                </div>
                <div>
                  <label htmlFor="estimator-bedrooms" className="block text-sm text-body mb-2">{t('bedroomsLabel')}</label>
                  <select
                    id="estimator-bedrooms"
                    value={bedroomsKey}
                    onChange={(e) => handleBedroomsChange(e.target.value as BedroomsKey)}
                    className="w-full px-4 py-3 border border-structural-light bg-surface-light text-body focus:ring-2 focus:ring-authority focus:border-authority r text-sm"
                  >
                    {BEDROOMS_KEYS.map((k) => (
                      <option key={k} value={k}>{k === 'B4P' ? t('bedrooms.4p') : t(`bedrooms.${k.slice(1)}`)}</option>
                    ))}
                  </select>
                  <p className="text-xs text-muted mt-1">{t('bedroomsHelper')}</p>
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-0 border-0 p-0 m-0">
              <legend className="text-body text-sm text-muted mb-2 block">{t('groupScopeElements')}</legend>
              <p className="text-xs text-muted mb-3">{t('groupScopeElementsAnchor')}</p>
              <div className="space-y-4">
                {SCOPE_ELEMENT_KEYS.map((k) => (
                  <div key={k} className="flex items-center justify-between gap-4 py-3 border-b border-structural-muted/30 last:border-0">
                    <div>
                      <p className="text-sm text-body font-medium">{t(`scopeElements.${k}`)}</p>
                      <p className="text-xs text-muted">{t('scopeElementBilledByUse')}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={scopeElements.includes(k)}
                      aria-label={t(`scopeElements.${k}`)}
                      onClick={() => handleScopeToggle(k)}
                      className={`shrink-0 w-11 h-6 r transition-colors border-2 ${
                        scopeElements.includes(k)
                          ? 'bg-authority border-authority'
                          : 'bg-surface-light border-structural-muted'
                      }`}
                    >
                      <span className={`block w-5 h-5 mt-0.5 ml-0.5 r bg-white border border-structural-muted transition-transform ${scopeElements.includes(k) ? 'translate-x-6' : 'translate-x-0'}`} aria-hidden />
                    </button>
                  </div>
                ))}
              </div>
            </fieldset>

            <div className="pt-2">
              <p className="text-sm text-muted mb-3" role="status">{gateMessage}</p>
              <button
                type="button"
                onClick={handleCalculate}
                className="btn-primary"
                aria-label={hasCalculated ? t('recalculate') : t('calculate')}
              >
                {hasCalculated ? t('recalculate') : t('calculate')}
              </button>
            </div>

            <div className="lg:hidden space-y-4">
              {reasonPanel}
              {resultPanel}
            </div>
          </div>

          <div className="hidden lg:block lg:sticky lg:top-6">
            {reasonPanel}
            {resultPanel}
          </div>
        </div>
      </div>
    </Section>
  );
}

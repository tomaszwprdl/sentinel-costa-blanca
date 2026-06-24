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
// Intake context only; these do not feed computeEstimate().
const BATHROOMS_KEYS = ['B1', 'B2', 'B3', 'B4P'] as const;
const OUTDOOR_KEYS = ['none', 'terrace', 'large'] as const;
const ESTIMATOR_STEP_KEYS = ['jurisdiction', 'mode', 'parameters', 'scope'] as const;

type EstimatorStepKey = (typeof ESTIMATOR_STEP_KEYS)[number];
type BathroomsKey = (typeof BATHROOMS_KEYS)[number];
type OutdoorKey = (typeof OUTDOOR_KEYS)[number];

function formatRange(min: number, max: number): string {
  return `€${min}–€${max}`;
}

function sortScopeElements(keys: ScopeElementKey[]): ScopeElementKey[] {
  return [...keys].sort((a, b) => SCOPE_ELEMENT_KEYS.indexOf(a) - SCOPE_ELEMENT_KEYS.indexOf(b));
}

type EstimatorProps = {
  embedded?: boolean;
};

export default function Estimator({ embedded = false }: EstimatorProps) {
  const locale = useLocale();
  const t = useTranslations('services.estimator');
  const [activeStep, setActiveStep] = useState<EstimatorStepKey>('jurisdiction');
  const [packageKey, setPackageKey] = useState<PackageKey>('structured_presence');
  const [modeKey, setModeKey] = useState<ModeKey>('private_use');
  const [sqm, setSqm] = useState<number>(80);
  const [bedroomsKey, setBedroomsKey] = useState<BedroomsKey>('B2');
  const [bathroomsKey, setBathroomsKey] = useState<BathroomsKey>('B1');
  const [outdoorKey, setOutdoorKey] = useState<OutdoorKey>('none');
  const [scopeElements, setScopeElements] = useState<ScopeElementKey[]>([]);
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [hasCalculatedOnce, setHasCalculatedOnce] = useState(false);

  const clampedSqm = Math.max(SQM_INPUT_MIN, Math.min(SQM_INPUT_MAX, Math.round(sqm)));
  const sizeKey: SizeKey = getSizeKeyFromSqm(clampedSqm);
  const showCompatibilityNote = packageKey === 'structured_presence' && modeKey === 'active_guest';
  const showSqmMinValidation = sqm < SQM_INPUT_MIN && Number.isFinite(sqm);
  const showSqmMaxValidation = sqm > SQM_INPUT_MAX;
  const activeStepIndex = ESTIMATOR_STEP_KEYS.indexOf(activeStep);

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
  const handleBathroomsChange = (v: BathroomsKey) => {
    setBathroomsKey(v);
  };
  const handleOutdoorChange = (v: OutdoorKey) => {
    setOutdoorKey(v);
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

  const stepTitles: Record<EstimatorStepKey, string> = {
    jurisdiction: t('stepJurisdiction'),
    mode: t('stepMode'),
    parameters: t('stepParameters'),
    scope: t('stepScope'),
  };

  const liveStructureSummary = (
    <dl className="estimator-live-summary">
      <div>
        <dt>{t('resultJurisdiction')}</dt>
        <dd>{t(`packages.${packageKey}`)}</dd>
      </div>
      <div>
        <dt>{t('resultMode')}</dt>
        <dd>{modeKey === 'private_use' ? t('modePrivateUse') : t('modeActiveGuest')}</dd>
      </div>
      <div>
        <dt>{t('resultArea')}</dt>
        <dd>{clampedSqm} m²</dd>
      </div>
      <div>
        <dt>{t('resultBedrooms')}</dt>
        <dd>{bedroomsKey === 'B4P' ? '4+' : bedroomsKey.slice(1)}</dd>
      </div>
      <div>
        <dt>{t('bathroomsLabel')}</dt>
        <dd>{bathroomsKey === 'B4P' ? '4+' : bathroomsKey.slice(1)}</dd>
      </div>
      <div>
        <dt>{t('outdoorLabel')}</dt>
        <dd>{t(`outdoorOptions.${outdoorKey}`)}</dd>
      </div>
      <div>
        <dt>{t('resultScopeElements')}</dt>
        <dd>
          {scopeElements.length > 0
            ? sortScopeElements(scopeElements).map((k) => t(`scopeElements.${k}`)).join(', ')
            : t('wizard.scopeNone')}
        </dd>
      </div>
    </dl>
  );

  const goToStep = (step: EstimatorStepKey) => setActiveStep(step);
  const goToNext = () => {
    const next = ESTIMATOR_STEP_KEYS[Math.min(activeStepIndex + 1, ESTIMATOR_STEP_KEYS.length - 1)];
    setActiveStep(next);
  };
  const goToPrevious = () => {
    const previous = ESTIMATOR_STEP_KEYS[Math.max(activeStepIndex - 1, 0)];
    setActiveStep(previous);
  };

  const activeControl = (() => {
    if (activeStep === 'jurisdiction') {
      return (
        <div className="estimator-control-scene">
          <div className="estimator-control-scene__header">
            <p>{t('groupJurisdiction')}</p>
            <h3>{stepTitles.jurisdiction}</h3>
            <span>{t('groupJurisdictionAnchor')}</span>
          </div>
          <div className="estimator-option-grid estimator-option-grid--packages" role="radiogroup" aria-label={t('packageLabel')}>
            {PACKAGE_KEYS.map((k, index) => (
              <button
                key={k}
                type="button"
                aria-pressed={packageKey === k}
                data-selected={packageKey === k}
                onClick={() => handlePackageChange(k)}
                className="estimator-choice-card"
              >
                <span className="estimator-choice-card__marker">{String(index + 1).padStart(2, '0')}</span>
                <span className="estimator-choice-card__body">
                  <strong>{t(`packages.${k}`)}</strong>
                  <span>{t(`packageDescriptor.${k}`)}</span>
                </span>
              </button>
            ))}
          </div>
          {showCompatibilityNote && <p className="estimator-compatibility-note" role="note">{t('compatibilityNote')}</p>}
        </div>
      );
    }

    if (activeStep === 'mode') {
      return (
        <div className="estimator-control-scene">
          <div className="estimator-control-scene__header">
            <p>{t('groupMode')}</p>
            <h3>{stepTitles.mode}</h3>
            <span>{t('groupModeAnchor')}</span>
          </div>
          <div className="estimator-option-grid estimator-option-grid--mode" role="radiogroup" aria-label={t('modeLabel')}>
            <button
              type="button"
              aria-pressed={modeKey === 'private_use'}
              data-selected={modeKey === 'private_use'}
              onClick={() => handleModeChange('private_use')}
              className="estimator-mode-card"
            >
              <strong>{t('modePrivateUse')}</strong>
              <span>{t('modeWhatPrivate1')}</span>
              <span>{t('modeWhatPrivate2')}</span>
            </button>
            <button
              type="button"
              aria-pressed={modeKey === 'active_guest'}
              data-selected={modeKey === 'active_guest'}
              onClick={() => handleModeChange('active_guest')}
              className="estimator-mode-card"
            >
              <strong>{t('modeActiveGuest')}</strong>
              <span>{t('modeWhatGuest1')}</span>
              <span>{t('modeWhatGuest2')}</span>
              <span>{t('modeWhatGuest3')}</span>
            </button>
          </div>
        </div>
      );
    }

    if (activeStep === 'parameters') {
      return (
        <div className="estimator-control-scene">
          <div className="estimator-control-scene__header">
            <p>{t('groupParameters')}</p>
            <h3>{stepTitles.parameters}</h3>
            <span>{t('groupParametersAnchor')}</span>
          </div>
          <div className="estimator-parameter-grid">
            <div className="estimator-quantity-card">
              <label htmlFor="estimator-sqm">{t('sizeLabel')}</label>
              <div className="estimator-quantity-control">
                <button type="button" onClick={() => handleSqmChange(clampedSqm - 10)} aria-label="-10 m²">-</button>
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
                  className="estimator-quantity-input"
                  required
                  aria-required="true"
                />
                <button type="button" onClick={() => handleSqmChange(clampedSqm + 10)} aria-label="+10 m²">+</button>
              </div>
              <p>{t('sizeHelper')}</p>
              {showSqmMinValidation && <p role="alert">{t('sqmValidationMin')}</p>}
              {showSqmMaxValidation && <p role="alert">{t('sqmValidationMax')}</p>}
            </div>

            <div className="estimator-bedroom-card">
              <p>{t('bedroomsLabel')}</p>
              <div className="estimator-bedroom-options" role="radiogroup" aria-label={t('bedroomsLabel')}>
                {BEDROOMS_KEYS.map((k) => (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={bedroomsKey === k}
                    data-selected={bedroomsKey === k}
                    onClick={() => handleBedroomsChange(k)}
                  >
                    {k === 'B4P' ? t('bedrooms.4p') : t(`bedrooms.${k.slice(1)}`)}
                  </button>
                ))}
              </div>
              <span>{t('bedroomsHelper')}</span>
            </div>

            <div className="estimator-bedroom-card">
              <p>{t('bathroomsLabel')}</p>
              <div className="estimator-bedroom-options" role="radiogroup" aria-label={t('bathroomsLabel')}>
                {BATHROOMS_KEYS.map((k) => (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={bathroomsKey === k}
                    data-selected={bathroomsKey === k}
                    onClick={() => handleBathroomsChange(k)}
                  >
                    {k === 'B4P' ? t('bathrooms.4p') : t(`bathrooms.${k.slice(1)}`)}
                  </button>
                ))}
              </div>
              <span>{t('bathroomsHelper')}</span>
            </div>

            <div className="estimator-bedroom-card">
              <p>{t('outdoorLabel')}</p>
              <div className="estimator-bedroom-options estimator-bedroom-options--outdoor" role="radiogroup" aria-label={t('outdoorLabel')}>
                {OUTDOOR_KEYS.map((k) => (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={outdoorKey === k}
                    data-selected={outdoorKey === k}
                    onClick={() => handleOutdoorChange(k)}
                  >
                    {t(`outdoorOptions.${k}`)}
                  </button>
                ))}
              </div>
              <span>{t('outdoorHelper')}</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="estimator-control-scene">
        <div className="estimator-control-scene__header">
          <p>{t('groupScopeElements')}</p>
          <h3>{stepTitles.scope}</h3>
          <span>{t('groupScopeElementsAnchor')}</span>
        </div>
        <div className="estimator-scope-grid">
          {SCOPE_ELEMENT_KEYS.map((k) => (
            <button
              key={k}
              type="button"
              role="switch"
              aria-checked={scopeElements.includes(k)}
              data-selected={scopeElements.includes(k)}
              onClick={() => handleScopeToggle(k)}
              className="estimator-scope-pill"
            >
              <span aria-hidden="true" />
              <strong>{t(`scopeElements.${k}`)}</strong>
              <em>{t('scopeElementBilledByUse')}</em>
            </button>
          ))}
        </div>
      </div>
    );
  })();

  const outputPanel = (
    <div className="estimator-live-panel">
      <div className="estimator-live-panel__top">
        <p>{t('wizard.outputTitle')}</p>
        <strong>{result && hasCalculated ? formatRange(result.min, result.max) : t('wizard.pendingRange')}</strong>
      </div>
      <p className={showParamsChangedCue ? 'params-changed-cue' : ''} role="status">{gateMessage}</p>
      {liveStructureSummary}
      {result && hasCalculated ? (
        <div className="estimator-result-output">
          <p>{t('rangeWordingHeading')}</p>
          <ul>
            <li>{t('driverBullet1')}</li>
            <li>{t('driverBullet2')}</li>
            <li>{t('driverBullet3')}</li>
            <li>{t('driverBullet4')}</li>
            {modeKey === 'active_guest' && <li>{t('driverBulletGuest')}</li>}
          </ul>
          <span>{t('disclaimer')}</span>
          {contactPayload && (
            <Link href={`/${locale}/contact?${contactPayload.toString()}`} className="btn-secondary">
              {t('ctaProceed')}
            </Link>
          )}
        </div>
      ) : (
        <div className="estimator-live-panel__pending">
          <span>{t('reasonWhatModeling')}</span>
          <span>{t('reasonPriceAfterCalculate')}</span>
        </div>
      )}
      <button
        type="button"
        onClick={handleCalculate}
        className="btn-primary estimator-generate-button"
        aria-label={hasCalculated ? t('recalculate') : t('calculate')}
      >
        {hasCalculated ? t('recalculate') : t('calculate')}
      </button>
    </div>
  );

  const shell = (
    <div className={embedded ? 'estimator-embedded-shell estimator-configurator' : 'visual-card-strong mx-auto max-w-[65ch] p-5 md:p-8 lg:max-w-none'}>
      {!embedded && (
        <div className="mb-8 max-w-3xl">
          <p className="section-label">{t('groupJurisdiction')}</p>
          <h2 className="h2-system mt-2">{t('heading')}</h2>
        </div>
      )}

      {embedded && (
        <p className="estimator-configurator__intro mb-6 max-w-3xl text-sm text-body">{t('orientationIntro')}</p>
      )}

      <div className="estimator-configurator__grid">
        <nav className="estimator-stepper" aria-label={t('heading')}>
          {ESTIMATOR_STEP_KEYS.map((step, index) => (
            <button
              key={step}
              type="button"
              aria-current={step === activeStep ? 'step' : undefined}
              data-active={step === activeStep}
              onClick={() => goToStep(step)}
              className="estimator-stepper__item"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{stepTitles[step]}</strong>
            </button>
          ))}
        </nav>

        <section className="estimator-configurator__control" aria-live="polite">
          {activeControl}

          <div className="estimator-configurator__footer">
            <button type="button" onClick={goToPrevious} className="btn-secondary" disabled={activeStepIndex === 0}>
              {t('wizard.previous')}
            </button>
            {activeStepIndex < ESTIMATOR_STEP_KEYS.length - 1 ? (
              <button type="button" onClick={goToNext} className="btn-primary">
                {t('wizard.next')}
              </button>
            ) : (
              <button type="button" onClick={handleCalculate} className="btn-primary">
                {hasCalculated ? t('recalculate') : t('calculate')}
              </button>
            )}
          </div>
        </section>

        <aside className="estimator-configurator__output">
          {outputPanel}
        </aside>
      </div>
    </div>
  );

  if (embedded) {
    return shell;
  }

  return <Section tone="alt">{shell}</Section>;
}

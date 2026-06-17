'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { normalizePathwayParam, type PathwayKey } from '@/lib/pathway';
import PathwayRiskCarousel from '@/components/PathwayRiskCarousel';

const CONTRAST_ITEMS = [1, 2, 3, 4] as const;
const PROOF_STEPS = ['issue', 'evidence', 'decision', 'action'] as const;

// A pathway only renders the risk carousel once its photography exists.
const CAROUSEL_READY: Record<PathwayKey, boolean> = {
  'private-use-only': true,
  'regular-guest-stays': true,
  'mixed-not-defined': true,
};

export default function HomeContrastBlock() {
  const t = useTranslations('home');
  const searchParams = useSearchParams();
  const selected = normalizePathwayParam(searchParams.get('pathway')) ?? 'private-use-only';

  const carouselReady = CAROUSEL_READY[selected];

  return (
    <>
      <div className={carouselReady ? undefined : 'reveal-rise'}>
        <p className="section-label">{t('contrast.eyebrow')}</p>
        <h2 className="h2-system mt-3 max-w-[24ch]">{t('contrast.title')}</h2>
        <p className="mt-4 max-w-[56ch] text-body leading-relaxed">
          {t(`pathwayContent.${selected}.contrast.intro`)}
        </p>
      </div>

      {carouselReady ? (
        <PathwayRiskCarousel pathway={selected} />
      ) : (
        <>
          <div className="home-contrast-band reveal-rise">
            <article className="home-contrast-band__half home-contrast-band__half--risk">
              <p className="home-contrast-band__mode">{t('contrast.leftModeLabel')}</p>
              <h3 className="home-contrast-band__heading">{t('contrast.leftHeading')}</h3>
              <ul className="home-contrast-band__list">
                {CONTRAST_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="home-contrast-band__marker" aria-hidden />
                    <span>{t(`pathwayContent.${selected}.contrast.left${item}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="home-contrast-band__closing">
                {t(`pathwayContent.${selected}.contrast.leftClosing`)}
              </p>
            </article>

            <article className="home-contrast-band__half home-contrast-band__half--control">
              <p className="home-contrast-band__mode">{t('contrast.rightModeLabel')}</p>
              <h3 className="home-contrast-band__heading">{t('contrast.rightHeading')}</h3>
              <ul className="home-contrast-band__list">
                {CONTRAST_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="home-contrast-band__marker" aria-hidden />
                    <span>{t(`pathwayContent.${selected}.contrast.right${item}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="home-contrast-band__closing">
                {t(`pathwayContent.${selected}.contrast.rightClosing`)}
              </p>
            </article>
          </div>

          <div className="home-mechanism-board reveal-rise" aria-label={t('proofLedger.title')}>
            <div className="home-mechanism-board__header">
              <p className="section-label">{t('proofLedger.label')}</p>
              <h3>{t('proofLedger.title')}</h3>
            </div>
            <div className="home-mechanism-board__track">
              {PROOF_STEPS.map((key, index) => (
                <article key={key} className="home-mechanism-board__step">
                  <span className="home-mechanism-board__index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4>{t(`proofLedger.steps.${key}.title`)}</h4>
                    <p>{t(`proofLedger.steps.${key}.body`)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

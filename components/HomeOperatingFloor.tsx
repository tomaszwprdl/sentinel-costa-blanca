import Link from 'next/link';
import Section from '@/components/layout/Section';

const FLOOR_STEP_KEYS = ['scope', 'access', 'check', 'record'] as const;

type HomeOperatingFloorProps = {
  locale: string;
  t: (key: string) => string;
};

// Shared continuation under the unselected chooser: the operating core stays
// visible for visitors who scroll past the gate without picking a pathway.
export default function HomeOperatingFloor({ locale, t }: HomeOperatingFloorProps) {
  return (
    <Section tone="light" className="home-floor-section !py-14 md:!py-20">
      <div className="mx-auto w-full max-w-6xl">
        <header className="max-w-3xl">
          <p className="section-label">{t('floor.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('floor.title')}</h2>
          <p className="mt-4 text-base leading-relaxed text-body">{t('floor.lead')}</p>
        </header>

        <ol className="home-floor-core mt-8">
          {FLOOR_STEP_KEYS.map((key, index) => (
            <li key={key} className="home-floor-core__step">
              <span className="home-floor-core__marker" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="home-floor-core__copy">
                <h3 className="home-floor-core__title">{t(`floor.steps.${key}.title`)}</h3>
                <p className="home-floor-core__body">{t(`floor.steps.${key}.body`)}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted">{t('floor.note')}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
            <Link href={`/${locale}/services#package-fit`} className="btn-secondary">
              {t('pathway.servicesCta')}
            </Link>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t('pathway.reviewCta')}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

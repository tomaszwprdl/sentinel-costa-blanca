'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Section from '@/components/layout/Section';

export type PathwayKey = 'private-absence' | 'regular-guest-stays' | 'mixed-undetermined';

const PATHWAY_KEYS: PathwayKey[] = ['private-absence', 'regular-guest-stays', 'mixed-undetermined'];

const PATHWAY_POINT_COUNTS: Record<PathwayKey, number> = {
  'private-absence': 5,
  'regular-guest-stays': 6,
  'mixed-undetermined': 5,
};

export default function UsagePathwayLayer() {
  const locale = useLocale();
  const t = useTranslations('home.pathway');
  const [selected, setSelected] = useState<PathwayKey | null>(null);

  return (
    <Section tone="alt" className="section-primitive--first !pt-10 !pb-16 md:!pb-24">
      <div className="max-w-7xl mx-auto text-left px-0">
        <div className="max-w-3xl mb-10 md:mb-12">
          <h2 className="h2-system font-bold mb-4">{t('selectorTitle')}</h2>
          <p className="text-base md:text-lg text-body leading-relaxed">{t('selectorIntro')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {PATHWAY_KEYS.map((key) => {
            const isSelected = selected === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                aria-pressed={isSelected}
                className={`text-left w-full min-h-[8.5rem] md:min-h-[9.5rem] p-6 md:p-8 border r transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-authority focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'border-authority border-l-4 bg-surface-light-alt'
                    : 'border-structural-light bg-surface-card hover:border-structural-muted hover:bg-surface-light-alt/40'
                }`}
              >
                <p className="text-base md:text-lg font-semibold text-heading mb-3 leading-snug">
                  {t(`cards.${key}.title`)}
                </p>
                <p className="text-sm md:text-base text-body leading-relaxed">
                  {t(`cards.${key}.description`)}
                </p>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-10 md:mt-14 w-full border border-structural-light bg-surface-light-alt r p-6 md:p-10">
            <p className="text-base text-body leading-relaxed mb-3">
              <span className="text-muted">{t('selectedLabel')}</span>{' '}
              <span className="font-semibold text-heading">{t(`cards.${selected}.title`)}</span>
            </p>
            <p className="text-base text-body leading-relaxed mb-8">
              <span className="text-muted">{t('priorityLabel')}</span>{' '}
              {t(`detail.${selected}.priority`)}
            </p>
            <p className="text-sm font-semibold text-heading mb-4">{t('changesLabel')}</p>
            <ul className="list-disc pl-5 space-y-2.5 md:space-y-3 text-body leading-relaxed mb-8 md:mb-10 max-w-3xl">
              {Array.from({ length: PATHWAY_POINT_COUNTS[selected] }, (_, i) => (
                <li key={i}>{t(`detail.${selected}.point${i + 1}`)}</li>
              ))}
            </ul>
            <Link
              href={`/${locale}/contact?pathway=${selected}`}
              className="btn-primary inline-flex w-fit"
            >
              {t('cta')}
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
}

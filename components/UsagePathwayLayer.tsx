'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Section from '@/components/layout/Section';

export type PathwayKey = 'private-absence' | 'active-guest-use' | 'mixed-undetermined';

const PATHWAY_KEYS: PathwayKey[] = ['private-absence', 'active-guest-use', 'mixed-undetermined'];

const PATHWAY_POINT_COUNTS: Record<PathwayKey, number> = {
  'private-absence': 5,
  'active-guest-use': 6,
  'mixed-undetermined': 5,
};

export default function UsagePathwayLayer() {
  const locale = useLocale();
  const t = useTranslations('home.pathway');
  const [selected, setSelected] = useState<PathwayKey | null>(null);

  const contentKey = selected ?? null;

  return (
    <>
      <Section tone="alt" className="section-primitive--first !pt-10">
        <div className="max-w-3xl text-left">
          <h2 className="h2-system font-bold mb-8">{t('selectorTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PATHWAY_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={`text-left p-5 border r transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-authority ${
                  selected === key
                    ? 'border-authority bg-surface-light-alt'
                    : 'border-structural-light bg-surface-card hover:border-structural-muted'
                }`}
              >
                <p className="text-base font-semibold text-heading mb-2">{t(`cards.${key}.title`)}</p>
                <p className="text-sm text-body leading-relaxed">{t(`cards.${key}.description`)}</p>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {contentKey && (
        <Section tone="alt" className="!pt-0">
          <div className="max-w-3xl text-left">
            <p className="text-lg text-body font-medium leading-relaxed mb-6">
              {t(`framing.${contentKey}.lead`)}
            </p>
            <ul className="list-disc pl-5 space-y-3 text-body leading-relaxed mb-8">
              {Array.from({ length: PATHWAY_POINT_COUNTS[contentKey] }, (_, i) => (
                <li key={i}>{t(`framing.${contentKey}.point${i + 1}`)}</li>
              ))}
            </ul>
            <Link
              href={`/${locale}/contact?pathway=${contentKey}`}
              className="btn-primary inline-flex w-fit"
            >
              {t('cta')}
            </Link>
          </div>
        </Section>
      )}
    </>
  );
}

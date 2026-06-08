'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const STORY_FRAMES = [
  { key: 'arrive', image: '/photos/sentinel-corridor-exterior-placeholder.png' },
  { key: 'access', image: '/photos/sentinel-access-handover-placeholder.png' },
  { key: 'check', image: '/photos/sentinel-technical-check-placeholder.png' },
  { key: 'document', image: '/photos/sentinel-report-tablet-placeholder.png' },
  { key: 'report', image: '/photos/sentinel-owner-remote-report-placeholder.png' },
  { key: 'decision', image: '/photos/sentinel-escalation-leak-placeholder.png' },
] as const;

export default function VisitStoryboard() {
  const t = useTranslations('howItWorks');

  return (
    <div className="visual-card-strong overflow-hidden" id="visit-storyboard">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{t('redesign.storyboard.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.storyboard.title')}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{t('redesign.storyboard.intro')}</p>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-5">
        {STORY_FRAMES.map((frame, index) => (
          <article key={frame.key} className="overflow-hidden rounded-2xl border border-structural-light bg-surface-card">
            <div className="relative aspect-[4/3]">
              <Image
                src={frame.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-[11px] font-black uppercase tracking-wide text-accent">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mb-2 text-lg font-black text-heading">
                {t(`redesign.storyboard.frames.${frame.key}.title`)}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-body">
                {t(`redesign.storyboard.frames.${frame.key}.body`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

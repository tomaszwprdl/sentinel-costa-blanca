'use client';

import { useTranslations } from 'next-intl';

const STORY_FRAMES = [
  { key: 'arrive', kind: 'entry' },
  { key: 'access', kind: 'access' },
  { key: 'check', kind: 'risk' },
  { key: 'document', kind: 'note' },
  { key: 'report', kind: 'report' },
  { key: 'decision', kind: 'decision' },
] as const;

function StoryboardMediaFrame({ kind }: { kind: (typeof STORY_FRAMES)[number]['kind'] }) {
  return (
    <div className="aspect-[4/3] bg-surface-light-alt p-4" aria-hidden="true">
      <svg viewBox="0 0 360 270" className="h-full w-full">
        <rect width="360" height="270" rx="18" fill="var(--surface-card)" stroke="var(--structural-light)" />
        <ellipse cx="180" cy="148" rx="118" ry="72" fill="var(--support)" opacity="0.07" />
        <g fill="none" stroke="var(--authority)" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" opacity="0.68">
          {kind === 'entry' && (
            <>
              <path d="M124 62h112v156H124Z" />
              <path d="M164 62v156M124 112h112" />
              <circle cx="224" cy="112" r="6" />
            </>
          )}
          {kind === 'access' && (
            <>
              <rect x="128" y="72" width="92" height="120" rx="6" />
              <path d="M152 112h56M152 144h38" />
              <path d="M220 184l34 34M246 166l34 34" />
            </>
          )}
          {kind === 'risk' && (
            <>
              <rect x="112" y="74" width="136" height="120" rx="6" />
              <path d="M136 108h88M136 140h88M136 172h48" />
              <circle cx="248" cy="190" r="22" />
            </>
          )}
          {kind === 'note' && (
            <>
              <rect x="120" y="58" width="120" height="154" rx="6" />
              <path d="M142 96h68M142 128h82M142 160h48" />
              <path d="M246 80l32 32M278 80l-32 32" />
            </>
          )}
          {kind === 'report' && (
            <>
              <rect x="108" y="58" width="144" height="158" rx="6" />
              <path d="M132 96h74M132 128h94M132 160h62" />
              <circle cx="236" cy="184" r="18" />
              <path d="M228 184l8 8 18-22" />
            </>
          )}
          {kind === 'decision' && (
            <>
              <path d="M180 58v70M180 172v40M126 128h108" />
              <circle cx="180" cy="150" r="28" />
              <path d="M168 150l10 10 24-30" />
            </>
          )}
        </g>
        <circle cx="76" cy="56" r="10" fill={kind === 'decision' ? 'var(--accent)' : 'var(--support)'} opacity="0.84" />
        <circle cx="292" cy="218" r="10" fill="var(--accent)" opacity="0.76" />
      </svg>
    </div>
  );
}

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
            <StoryboardMediaFrame kind={frame.kind} />
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

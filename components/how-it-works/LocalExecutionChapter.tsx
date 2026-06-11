'use client';

import { useTranslations } from 'next-intl';
import ServiceScopeDiagram from '@/components/visuals/ServiceScopeDiagram';

const STORY_FRAMES = [
  { key: 'arrive', kind: 'entry' },
  { key: 'access', kind: 'access' },
  { key: 'check', kind: 'risk' },
  { key: 'document', kind: 'note' },
  { key: 'report', kind: 'report' },
  { key: 'decision', kind: 'decision' },
] as const;

const CHAIN_KEYS = ['agreement', 'keys', 'request', 'entry', 'record'] as const;

function StoryboardGlyph({ kind }: { kind: (typeof STORY_FRAMES)[number]['kind'] }) {
  return (
    <div className="hiw-execution-glyph" aria-hidden="true">
      <svg viewBox="0 0 48 48" className="h-12 w-12">
        <rect width="48" height="48" rx="8" fill="var(--surface-light-alt)" stroke="var(--structural-light)" />
        <g fill="none" stroke="var(--authority)" strokeWidth="2.5" strokeLinecap="square" opacity="0.72">
          {kind === 'entry' && <path d="M16 12h16v24H16Z M24 12v24 M16 24h16" />}
          {kind === 'access' && <path d="M14 14h14v20H14Z M20 22h8 M28 32l6 6" />}
          {kind === 'risk' && <path d="M12 14h24v18H12Z M18 22h12 M30 36a6 6 0 1 0 0 .1" />}
          {kind === 'note' && <path d="M14 10h16v28H14Z M18 20h10 M26 14l6 6" />}
          {kind === 'report' && <path d="M12 10h20v28H12Z M18 20h10 M30 34a5 5 0 1 0 0 .1" />}
          {kind === 'decision' && <path d="M24 10v10 M24 30v8 M16 24h16 M24 24a6 6 0 1 0 0 .1" />}
        </g>
      </svg>
    </div>
  );
}

export default function LocalExecutionChapter() {
  const t = useTranslations('howItWorks');

  return (
    <div className="hiw-local-execution" id="local-execution">
      <header className="hiw-chapter-header max-w-[760px]">
        <p className="section-label">{t('redesign.storyboard.eyebrow')}</p>
        <h2 className="h2-system mt-3">{t('redesign.storyboard.title')}</h2>
        <p className="mt-3 text-body">{t('redesign.storyboard.intro')}</p>
      </header>

      <div className="hiw-local-execution__grid">
        <section className="hiw-local-execution__visit" aria-label={t('redesign.storyboard.title')}>
          <ol className="hiw-execution-sequence">
            {STORY_FRAMES.map((frame, index) => (
              <li key={frame.key} className="hiw-execution-step">
                <StoryboardGlyph kind={frame.kind} />
                <div className="hiw-execution-step__copy">
                  <p className="hiw-execution-step__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="hiw-execution-step__title">{t(`redesign.storyboard.frames.${frame.key}.title`)}</h3>
                  <p className="hiw-execution-step__body">{t(`redesign.storyboard.frames.${frame.key}.body`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="hiw-local-execution__access">
          <div className="hiw-local-execution__diagram">
            <ServiceScopeDiagram variant="extended" className="motion-diagram h-full min-h-[200px] md:min-h-[280px]" />
          </div>
          <div className="hiw-local-execution__access-copy">
            <p className="section-label">{t('redesign.access.eyebrow')}</p>
            <h3 className="mt-2 text-xl font-black text-heading">{t('redesign.access.title')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{t('redesign.access.intro')}</p>
            <ol className="hiw-access-chain">
              {CHAIN_KEYS.map((key, index) => (
                <li key={key} className="hiw-access-chain__item">
                  <span className="hiw-access-chain__marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="hiw-access-chain__title">{t(`redesign.access.items.${key}.title`)}</h4>
                    <p className="hiw-access-chain__body">{t(`redesign.access.items.${key}.body`)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}

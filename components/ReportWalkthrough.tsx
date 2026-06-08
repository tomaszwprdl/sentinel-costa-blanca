import Image from 'next/image';
import DisclosureBlock from '@/components/DisclosureBlock';
import SampleInspectionReport from '@/components/SampleInspectionReport';

type Translator = (key: string, values?: Record<string, string | number | Date>) => string;

const WALKTHROUGH_KEYS = ['summary', 'checklist', 'photos', 'notes', 'nextAction'] as const;

export default function ReportWalkthrough({ t }: { t: Translator }) {
  return (
    <div className="visual-card-strong overflow-hidden" id="report-walkthrough">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
        <div className="border-b border-structural-light bg-surface-light-alt p-5 md:p-8 lg:border-b-0 lg:border-r">
          <p className="section-label">{t('redesign.report.eyebrow')}</p>
          <h2 className="h2-system mt-3">{t('redesign.report.title')}</h2>
          <p className="mt-3 text-body">{t('redesign.report.intro')}</p>
          <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/photos/sentinel-report-tablet-placeholder.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="p-5 md:p-8">
          <div className="grid gap-3">
            {WALKTHROUGH_KEYS.map((key, index) => (
              <article key={key} className="rounded-2xl border border-structural-light bg-surface-light-alt p-4">
                <p className="mb-1 text-[11px] font-black uppercase tracking-wide text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-2 text-lg font-black text-heading">{t(`redesign.report.items.${key}.title`)}</h3>
                <p className="mb-0 text-sm leading-relaxed text-body">{t(`redesign.report.items.${key}.body`)}</p>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <DisclosureBlock label={t('redesign.report.fullSampleLabel')} explainer={t('redesign.report.fullSampleExplainer')}>
              <SampleInspectionReport t={t} />
            </DisclosureBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

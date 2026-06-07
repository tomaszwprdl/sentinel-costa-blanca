type SlaTimelineBand = 'long' | 'medium' | 'short';

export interface SlaTimelineItem {
  marker: string;
  packageName: string;
  scopeLabel: string;
  value: string;
  note: string;
  band: SlaTimelineBand;
}

interface SlaTimelineProps {
  eyebrow: string;
  axisLabel: string;
  footerNote: string;
  items: SlaTimelineItem[];
}

const bandClass: Record<SlaTimelineBand, string> = {
  long: 'w-full',
  medium: 'w-2/3',
  short: 'w-1/3',
};

export default function SlaTimeline({
  eyebrow,
  axisLabel,
  footerNote,
  items,
}: SlaTimelineProps) {
  return (
    <section className="visual-card-strong p-6" aria-label={eyebrow}>
      <div className="flex flex-col gap-3 border-b border-structural-light pb-5 md:flex-row md:items-end md:justify-between">
        <p className="section-label mb-0">{eyebrow}</p>
        <p className="text-xs font-medium uppercase tracking-wide text-muted mb-0">{axisLabel}</p>
      </div>

      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div
            key={item.marker}
            className="grid grid-cols-1 gap-4 border-t border-structural-light pt-5 first:border-t-0 first:pt-0 md:grid-cols-[minmax(11rem,0.34fr)_minmax(0,1fr)_minmax(6rem,0.18fr)] md:items-center"
          >
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-surface-light-alt text-xs font-bold text-accent">
                {item.marker}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-heading leading-snug mb-1">{item.packageName}</p>
                <p className="text-xs text-muted leading-snug mb-0">{item.scopeLabel}</p>
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-2 h-px w-full bg-structural-light" aria-hidden />
              <div className="h-4 w-full overflow-hidden rounded-full border border-structural-light bg-surface-light" aria-hidden>
                <div className={`${bandClass[item.band]} h-full border-r border-structural-light bg-support/45`} />
              </div>
              <p className="mt-2 text-xs text-muted leading-snug mb-0">{item.note}</p>
            </div>

            <p className="text-base font-semibold text-heading md:text-right mb-0">{item.value}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 border-t border-structural-light pt-5 text-xs text-muted leading-relaxed mb-0">
        {footerNote}
      </p>
    </section>
  );
}

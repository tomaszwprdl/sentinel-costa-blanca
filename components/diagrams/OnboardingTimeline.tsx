export interface OnboardingTimelineItem {
  marker: string;
  title: string;
  description: string;
}

interface OnboardingTimelineProps {
  eyebrow: string;
  items: OnboardingTimelineItem[];
  summaryLabel: string;
  summaryText: string;
}

export default function OnboardingTimeline({
  eyebrow,
  items,
  summaryLabel,
  summaryText,
}: OnboardingTimelineProps) {
  return (
    <section className="border border-structural-light bg-surface-card r p-6" aria-label={eyebrow}>
      <p className="section-label mb-6">{eyebrow}</p>

      <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <li key={item.marker} className="border-t border-structural-light pt-5">
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-structural-light text-xs font-semibold text-heading r">
                {item.marker}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-heading leading-snug mb-2">{item.title}</p>
                <p className="text-xs text-muted leading-relaxed mb-0">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 border-t border-structural-light pt-5 text-sm text-body leading-relaxed mb-0">
        <strong className="font-semibold text-heading">{summaryLabel}</strong> {summaryText}
      </p>
    </section>
  );
}

interface EscalationParameter {
  label: string;
  value: string;
}

export interface EscalationLevel {
  marker: string;
  packageName: string;
  axisLabel: string;
  boundary: string;
  parameters: EscalationParameter[];
}

interface EscalationLevelsProps {
  eyebrow: string;
  title: string;
  intro: string;
  footerNote: string;
  levels: EscalationLevel[];
}

export default function EscalationLevels({
  eyebrow,
  title,
  intro,
  footerNote,
  levels,
}: EscalationLevelsProps) {
  return (
    <section className="border border-structural-light bg-surface-card r p-6" aria-label={title}>
      <div className="max-w-[65ch]">
        <p className="section-label mb-2">{eyebrow}</p>
        <p className="text-xl font-semibold text-heading leading-tight mb-3">{title}</p>
        <p className="text-sm text-body leading-relaxed mb-0">{intro}</p>
      </div>

      <div className="mt-6 space-y-5">
        {levels.map((level) => (
          <div
            key={level.marker}
            className="grid grid-cols-1 gap-5 border-t border-structural-light pt-5 md:grid-cols-[4rem_minmax(11rem,0.28fr)_minmax(0,1fr)]"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-structural-light text-xs font-semibold text-heading r">
              {level.marker}
            </span>

            <div>
              <p className="text-sm font-semibold text-heading leading-snug mb-1">{level.packageName}</p>
              <p className="text-xs text-muted leading-snug mb-0">{level.axisLabel}</p>
            </div>

            <div className="min-w-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {level.parameters.map((parameter) => (
                  <div key={parameter.label} className="border-t border-structural-light pt-3">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-muted mb-1">{parameter.label}</p>
                    <p className="text-sm font-semibold text-body leading-snug mb-0">{parameter.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted leading-relaxed mb-0">{level.boundary}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-structural-light pt-5 text-xs text-muted leading-relaxed mb-0">
        {footerNote}
      </p>
    </section>
  );
}

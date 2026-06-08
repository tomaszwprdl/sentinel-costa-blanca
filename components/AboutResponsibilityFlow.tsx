interface ResponsibilityStep {
  marker: string;
  title: string;
  body: string;
}

interface AboutResponsibilityFlowProps {
  eyebrow: string;
  title: string;
  intro: string;
  steps: ResponsibilityStep[];
  note: string;
}

export default function AboutResponsibilityFlow({
  eyebrow,
  title,
  intro,
  steps,
  note,
}: AboutResponsibilityFlowProps) {
  return (
    <div className="visual-card-strong overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="relative grid gap-0 md:grid-cols-4">
        <div className="pointer-events-none absolute left-8 right-8 top-[4.35rem] hidden h-px bg-structural-light md:block" aria-hidden />
        {steps.map((step) => (
          <article
            key={step.marker}
            className="relative border-b border-structural-light p-5 last:border-b-0 md:border-b-0 md:p-6"
          >
            <p className="relative z-10 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-authority-bg text-xs font-black text-authority-on-dark shadow-[0_0_0_8px_var(--surface-card)]">
              {step.marker}
            </p>
            <h3 className="mb-3 text-lg font-black text-heading">{step.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{step.body}</p>
          </article>
        ))}
      </div>
      <div className="border-t border-structural-light bg-surface-light-alt p-5 md:px-8">
        <p className="mb-0 text-sm leading-relaxed text-muted">{note}</p>
      </div>
    </div>
  );
}

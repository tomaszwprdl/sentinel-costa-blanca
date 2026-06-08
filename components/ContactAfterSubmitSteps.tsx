interface SubmitStep {
  marker: string;
  title: string;
  body: string;
}

interface ContactAfterSubmitStepsProps {
  eyebrow: string;
  title: string;
  intro: string;
  steps: SubmitStep[];
}

export default function ContactAfterSubmitSteps({
  eyebrow,
  title,
  intro,
  steps,
}: ContactAfterSubmitStepsProps) {
  return (
    <div className="visual-card-strong overflow-hidden">
      <div className="border-b border-structural-light bg-surface-light-alt px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="grid gap-0 md:grid-cols-4">
        {steps.map((step) => (
          <article
            key={step.marker}
            className="border-b border-structural-light p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-6"
          >
            <p className="mb-4 text-4xl font-black text-accent">{step.marker}</p>
            <h3 className="mb-3 text-lg font-black text-heading">{step.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{step.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

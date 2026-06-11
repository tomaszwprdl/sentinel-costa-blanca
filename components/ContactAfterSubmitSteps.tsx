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
    <div className="contact-shell">
      <div className="contact-shell__header px-5 py-6 md:px-8">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="contact-after-strip">
        {steps.map((step) => (
          <article key={step.marker} className="contact-after-strip__step p-5 md:p-6">
            <p className="contact-after-strip__marker">{step.marker}</p>
            <h3 className="mb-2 text-lg font-black text-heading">{step.title}</h3>
            <p className="mb-0 text-sm leading-relaxed text-body">{step.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

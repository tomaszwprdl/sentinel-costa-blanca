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
    <div className="about-responsibility-console">
      <div className="about-responsibility-console__header px-5 py-6 md:px-8">
        <p className="section-label about-responsibility-console__eyebrow">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch]">{intro}</p>
      </div>
      <div className="about-responsibility-console__steps">
        {steps.map((step) => (
          <article key={step.marker} className="about-responsibility-console__step p-5 md:p-6">
            <p className="about-responsibility-console__marker">{step.marker}</p>
            <h3 className="mb-2 text-lg font-black">{step.title}</h3>
            <p className="mb-0 text-sm leading-relaxed">{step.body}</p>
          </article>
        ))}
      </div>
      <div className="about-responsibility-console__footer px-5 py-4 md:px-8">
        <p className="mb-0 text-sm leading-relaxed">{note}</p>
      </div>
    </div>
  );
}

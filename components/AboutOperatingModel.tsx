import ResponsibilityStructureDiagram from '@/components/visuals/ResponsibilityStructureDiagram';

interface AboutModelItem {
  marker: string;
  title: string;
  body: string;
}

interface AboutOperatingModelProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: AboutModelItem[];
}

export default function AboutOperatingModel({
  eyebrow,
  title,
  intro,
  items,
}: AboutOperatingModelProps) {
  return (
    <div className="about-model-shell reveal-rise">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
        <div className="about-model-shell__diagram gfx-evidence-frame p-4 md:p-5">
          <ResponsibilityStructureDiagram className="h-full min-h-[300px]" />
        </div>
        <div className="p-5 md:p-8">
          <p className="section-label">{eyebrow}</p>
          <h2 className="h2-system mt-3">{title}</h2>
          <p className="mt-3 text-body">{intro}</p>

          <div className="about-model-rail mt-7">
            {items.map((item) => (
              <article key={item.marker} className="about-model-rail__row">
                <span className="about-model-rail__marker">{item.marker}</span>
                <div>
                  <h3 className="mb-1 text-base font-black text-heading">{item.title}</h3>
                  <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

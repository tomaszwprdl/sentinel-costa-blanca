import Image from 'next/image';

interface AboutModelItem {
  marker: string;
  title: string;
  body: string;
}

interface AboutOperatingModelProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  items: AboutModelItem[];
}

export default function AboutOperatingModel({
  eyebrow,
  title,
  intro,
  image,
  items,
}: AboutOperatingModelProps) {
  return (
    <div className="visual-card-strong overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
        <div className="relative min-h-[340px] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-5 md:p-8">
          <p className="section-label">{eyebrow}</p>
          <h2 className="h2-system mt-3">{title}</h2>
          <p className="mt-3 text-body">{intro}</p>

          <div className="mt-7 grid gap-3">
            {items.map((item) => (
              <article key={item.marker} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 rounded-2xl border border-structural-light bg-surface-light-alt p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-authority-bg text-xs font-black text-authority-on-dark">
                  {item.marker}
                </span>
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

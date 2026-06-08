interface RouteCard {
  marker: string;
  title: string;
  body: string;
  note: string;
}

interface ContactRouteCardsProps {
  eyebrow: string;
  title: string;
  intro: string;
  cards: RouteCard[];
}

export default function ContactRouteCards({
  eyebrow,
  title,
  intro,
  cards,
}: ContactRouteCardsProps) {
  return (
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <article key={card.marker} className="visual-card p-5 md:p-6">
            <p className="mb-4 text-[11px] font-black uppercase tracking-wide text-accent">{card.marker}</p>
            <h3 className="mb-3 text-xl font-black text-heading">{card.title}</h3>
            <p className="text-sm leading-relaxed text-body">{card.body}</p>
            <p className="mt-5 mb-0 rounded-2xl bg-surface-light-alt p-4 text-sm font-semibold leading-relaxed text-body">
              {card.note}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

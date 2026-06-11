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
      <div className="contact-route-board reveal-rise">
        {cards.map((card) => (
          <article key={card.marker} className="contact-route-board__col">
            <div className="p-5 md:p-6">
              <p className="contact-marker-chip mb-4">{card.marker}</p>
              <h3 className="mb-3 text-xl font-black text-heading">{card.title}</h3>
              <p className="mb-0 text-sm leading-relaxed text-body">{card.body}</p>
            </div>
            <p className="contact-route-board__note mb-0 px-5 py-4 text-sm font-semibold leading-relaxed text-body md:px-6">
              {card.note}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

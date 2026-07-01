interface QuickAnswer {
  title: string;
  answer: string;
  targetSectionId: string;
  targetQuestionId: string;
  linkLabel: string;
}

interface FAQQuickAnswerCardsProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: QuickAnswer[];
  activeTargetQuestionId?: string;
  onSelect: (item: QuickAnswer) => void;
}

export default function FAQQuickAnswerCards({
  eyebrow,
  title,
  intro,
  items,
  activeTargetQuestionId,
  onSelect,
}: FAQQuickAnswerCardsProps) {
  return (
    <div>
      <div className="reveal-rise">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3 max-w-[26ch]">{title}</h2>
        <p className="mt-3 mb-0 max-w-[62ch] text-body">{intro}</p>
      </div>
      <div className="faq-quick-rail reveal-stagger">
        {items.map((item, index) => {
          const isActive = activeTargetQuestionId === item.targetQuestionId;

          return (
            <article key={item.title} className="faq-quick-rail__cell" data-active={isActive ? 'true' : 'false'}>
              <p className="faq-quick-rail__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="faq-quick-rail__title">{item.title}</h3>
              <p className="faq-quick-rail__answer">{item.answer}</p>
              <button
                type="button"
                className="faq-quick-rail__link link-system"
                aria-controls="faq-details"
                aria-pressed={isActive}
                onClick={() => onSelect(item)}
              >
                {item.linkLabel}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

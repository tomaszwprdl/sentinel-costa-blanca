'use client';

import { useId, useState } from 'react';

interface AssumptionItem {
  assumption: string;
  boundary: string;
}

interface FAQWrongAssumptionsProps {
  eyebrow: string;
  title: string;
  intro: string;
  assumptionLabel: string;
  boundaryLabel: string;
  showMoreLabel: string;
  showLessLabel: string;
  items: AssumptionItem[];
}

export default function FAQWrongAssumptions({
  eyebrow,
  title,
  intro,
  assumptionLabel,
  boundaryLabel,
  showMoreLabel,
  showLessLabel,
  items,
}: FAQWrongAssumptionsProps) {
  const [showAllOnMobile, setShowAllOnMobile] = useState(false);
  const boardId = useId();
  const mobileVisibleCount = 2;
  const hasMobileOverflow = items.length > mobileVisibleCount;

  return (
    <div className="faq-boundary-strip reveal-rise">
      <div className="faq-boundary-strip__header">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 mb-0 text-body">{intro}</p>
      </div>
      <div
        id={boardId}
        className="faq-boundary-strip__board"
        role="list"
        data-mobile-expanded={showAllOnMobile ? 'true' : 'false'}
      >
        {items.map((item, index) => (
          <article
            key={item.assumption}
            className="faq-boundary-strip__tile"
            role="listitem"
            data-mobile-secondary={index >= mobileVisibleCount ? 'true' : 'false'}
          >
            <div className="faq-boundary-strip__tile-top">
              <span className="faq-boundary-strip__marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="faq-boundary-strip__label faq-boundary-strip__label--wrong">{assumptionLabel}</p>
            </div>
            <div className="faq-boundary-strip__tile-body">
              <p className="faq-boundary-strip__assumption">{item.assumption}</p>
              <div className="faq-boundary-strip__correction">
                <p className="faq-boundary-strip__label faq-boundary-strip__label--right">{boundaryLabel}</p>
                <p className="faq-boundary-strip__boundary">{item.boundary}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      {hasMobileOverflow && (
        <button
          type="button"
          className="faq-boundary-strip__mobile-toggle"
          aria-expanded={showAllOnMobile}
          aria-controls={boardId}
          onClick={() => setShowAllOnMobile((current) => !current)}
        >
          {showAllOnMobile ? showLessLabel : showMoreLabel}
        </button>
      )}
    </div>
  );
}

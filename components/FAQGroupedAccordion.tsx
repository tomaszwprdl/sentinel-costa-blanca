import { type ReactNode } from 'react';
import DisclosureBlock from '@/components/DisclosureBlock';

export interface FAQAnswer {
  id: string;
  question: string;
  answer: string;
}

export interface FAQGroup {
  id: string;
  title: string;
  intro: string;
  faqs: FAQAnswer[];
}

interface FAQGroupedAccordionProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: FAQGroup[];
  activeSectionId: string;
  activeAnswerId?: string;
  onSectionChange: (sectionId: string, answerId?: string) => void;
  sectionsLabel: string;
  noResults?: string;
  searchControl?: ReactNode;
}

export default function FAQGroupedAccordion({
  eyebrow,
  title,
  intro,
  sections,
  activeSectionId,
  activeAnswerId,
  onSectionChange,
  sectionsLabel,
  noResults,
  searchControl,
}: FAQGroupedAccordionProps) {
  const activeSection = sections.find((section) => section.id === activeSectionId) ?? sections[0];
  const hasResults = sections.some((section) => section.faqs.length > 0);

  return (
    <div className="faq-accordion faq-answer-console">
      <div className="faq-answer-console__rail">
        <div className="faq-accordion__intro">
          <p className="section-label">{eyebrow}</p>
          <h2 className="h2-system mt-3">{title}</h2>
          <p className="mt-3 text-body">{intro}</p>
        </div>

        {sections.length > 0 && (
          <nav className="faq-section-anchor-strip" aria-label={sectionsLabel}>
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className="faq-section-anchor-strip__link"
                aria-pressed={activeSection?.id === section.id}
                aria-controls="faq-answer-list"
                onClick={() => onSectionChange(section.id, section.faqs[0]?.id)}
              >
                {section.title}
              </button>
            ))}
          </nav>
        )}

        {searchControl && (
          <div className="faq-accordion__search">
            {searchControl}
          </div>
        )}
      </div>

      <div className="faq-answer-console__body reveal-rise">
        {!activeSection || !hasResults ? (
          <div className="visual-card p-8 text-center">
            <p className="mb-0 text-body">{noResults}</p>
          </div>
        ) : (
          <section key={activeSection.id} id={activeSection.id} className="journey-scroll-target faq-answer-console__panel">
            <div className="faq-answer-console__active-header">
              <h3 className="faq-answer-console__active-title">{activeSection.title}</h3>
              <p className="faq-answer-console__active-intro">{activeSection.intro}</p>
            </div>

            {activeSection.faqs.length === 0 ? (
              <div className="visual-card p-8 text-center">
                <p className="mb-0 text-body">{noResults}</p>
              </div>
            ) : (
              <div id="faq-answer-list" className="faq-accordion__answers faq-answer-console__answers">
                {activeSection.faqs.map((faq) => (
                  <div key={faq.id} id={faq.id} className="faq-answer-console__target">
                    <DisclosureBlock
                      key={`${faq.id}-${activeAnswerId === faq.id ? 'open' : 'closed'}`}
                      label={faq.question}
                      defaultExpanded={activeAnswerId === faq.id}
                      className="faq-accordion__answer-shell faq-answer-console__answer-shell border-0"
                    >
                      <p className="faq-accordion__answer-body">{faq.answer}</p>
                    </DisclosureBlock>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

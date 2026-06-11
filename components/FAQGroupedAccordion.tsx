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
  sectionsLabel: string;
  noResults?: string;
  searchControl?: ReactNode;
}

export default function FAQGroupedAccordion({
  eyebrow,
  title,
  intro,
  sections,
  sectionsLabel,
  noResults,
  searchControl,
}: FAQGroupedAccordionProps) {
  return (
    <div className="faq-accordion">
      <div className="faq-accordion__intro">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>

      {sections.length > 0 && (
        <nav className="faq-section-anchor-strip" aria-label={sectionsLabel}>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="faq-section-anchor-strip__link">
              {section.title}
            </a>
          ))}
        </nav>
      )}

      {searchControl && (
        <div className="faq-accordion__search">
          {searchControl}
        </div>
      )}

      {sections.length === 0 ? (
        <div className="visual-card p-8 text-center">
          <p className="mb-0 text-body">{noResults}</p>
        </div>
      ) : (
        <div className="faq-accordion__groups reveal-stagger">
          {sections.map((section, sectionIndex) => (
            <section key={section.id} id={section.id} className="journey-scroll-target faq-accordion__group">
              <DisclosureBlock
                label={section.title}
                explainer={section.intro}
                defaultExpanded={sectionIndex === 0}
                className="faq-accordion__section-shell"
              >
                <div className="faq-accordion__answers">
                  {section.faqs.map((faq, faqIndex) => (
                    <DisclosureBlock
                      key={faq.id}
                      label={faq.question}
                      defaultExpanded={sectionIndex === 0 && faqIndex === 0}
                      className="faq-accordion__answer-shell border-0"
                    >
                      <p className="faq-accordion__answer-body">{faq.answer}</p>
                    </DisclosureBlock>
                  ))}
                </div>
              </DisclosureBlock>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

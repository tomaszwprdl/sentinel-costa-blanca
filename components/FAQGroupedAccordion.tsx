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
  noResults?: string;
  searchControl?: ReactNode;
}

export default function FAQGroupedAccordion({
  eyebrow,
  title,
  intro,
  sections,
  noResults,
  searchControl,
}: FAQGroupedAccordionProps) {
  return (
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      {searchControl && (
        <div className="mb-6 max-w-[760px]">
          {searchControl}
        </div>
      )}
      {sections.length === 0 ? (
        <div className="visual-card p-8 text-center">
          <p className="mb-0 text-body">{noResults}</p>
        </div>
      ) : (
        <div className="grid gap-5">
          {sections.map((section, sectionIndex) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <DisclosureBlock
                label={section.title}
                explainer={section.intro}
                defaultExpanded={sectionIndex === 0}
              >
                <div className="grid gap-3">
                  {section.faqs.map((faq, faqIndex) => (
                    <DisclosureBlock
                      key={faq.id}
                      label={faq.question}
                      defaultExpanded={sectionIndex === 0 && faqIndex === 0}
                      className="border-0"
                    >
                      <p className="mb-0 text-sm leading-relaxed text-body">{faq.answer}</p>
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

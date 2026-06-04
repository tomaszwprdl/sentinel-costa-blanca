'use client';

import { useState, useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import ConfidenceBar from '@/components/ConfidenceBar';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const locale = useLocale();
  const t = useTranslations('faq');
  const tCommon = useTranslations('common');
  const [searchQuery, setSearchQuery] = useState('');

  // Build FAQ sections from translations
  const faqSections = [
  {
    id: 'service-model',
    title: t('sections.serviceModel.title'),
    intro: t('sections.serviceModel.description'),
    faqs: [
      { id: 'q1', question: t('sections.serviceModel.questions.q1.question'), answer: t('sections.serviceModel.questions.q1.answer') },
      { id: 'q2', question: t('sections.serviceModel.questions.q2.question'), answer: t('sections.serviceModel.questions.q2.answer') },
      { id: 'q3', question: t('sections.serviceModel.questions.q3.question'), answer: t('sections.serviceModel.questions.q3.answer') },
      { id: 'q4', question: t('sections.serviceModel.questions.q4.question'), answer: t('sections.serviceModel.questions.q4.answer') },
      { id: 'q5', question: t('sections.serviceModel.questions.q5.question'), answer: t('sections.serviceModel.questions.q5.answer') },
      { id: 'q6', question: t('sections.serviceModel.questions.q6.question'), answer: t('sections.serviceModel.questions.q6.answer') },
    ],
  },
  {
    id: 'operations',
    title: t('sections.operations.title'),
    intro: t('sections.operations.description'),
    faqs: [
      { id: 'q7', question: t('sections.operations.questions.q7.question'), answer: t('sections.operations.questions.q7.answer') },
      { id: 'q8', question: t('sections.operations.questions.q8.question'), answer: t('sections.operations.questions.q8.answer') },
    ],
  },
  {
    id: 'emergencies',
    title: t('sections.emergencies.title'),
    intro: t('sections.emergencies.description'),
    faqs: [
      { id: 'q9', question: t('sections.emergencies.questions.q9.question'), answer: t('sections.emergencies.questions.q9.answer') },
      { id: 'q10', question: t('sections.emergencies.questions.q10.question'), answer: t('sections.emergencies.questions.q10.answer') },
      { id: 'q11', question: t('sections.emergencies.questions.q11.question'), answer: t('sections.emergencies.questions.q11.answer') },
      { id: 'q12', question: t('sections.emergencies.questions.q12.question'), answer: t('sections.emergencies.questions.q12.answer') },
    ],
  },
  {
    id: 'practical',
    title: t('sections.practical.title'),
    intro: t('sections.practical.description'),
    faqs: [
      { id: 'q13', question: t('sections.practical.questions.q13.question'), answer: t('sections.practical.questions.q13.answer') },
      { id: 'q14', question: t('sections.practical.questions.q14.question'), answer: t('sections.practical.questions.q14.answer') },
      { id: 'q15', question: t('sections.practical.questions.q15.question'), answer: t('sections.practical.questions.q15.answer') },
      { id: 'q16', question: t('sections.practical.questions.q16.question'), answer: t('sections.practical.questions.q16.answer') },
      { id: 'q17', question: t('sections.practical.questions.q17.question'), answer: t('sections.practical.questions.q17.answer') },
      { id: 'q18', question: t('sections.practical.questions.q18.question'), answer: t('sections.practical.questions.q18.answer') },
    ],
  },
  {
    id: 'communication',
    title: t('sections.communication.title'),
    intro: t('sections.communication.description'),
    faqs: [
      { id: 'q19', question: t('sections.communication.questions.q19.question'), answer: t('sections.communication.questions.q19.answer') },
      { id: 'q20', question: t('sections.communication.questions.q20.question'), answer: t('sections.communication.questions.q20.answer') },
      { id: 'q21', question: t('sections.communication.questions.q21.question'), answer: t('sections.communication.questions.q21.answer') },
      { id: 'q22', question: t('sections.communication.questions.q22.question'), answer: t('sections.communication.questions.q22.answer') },
      { id: 'q23', question: t('sections.communication.questions.q23.question'), answer: t('sections.communication.questions.q23.answer') },
    ],
  },
  {
    id: 'meta',
    title: t('sections.meta.title'),
    intro: t('sections.meta.description'),
    faqs: [
      { id: 'q24', question: t('sections.meta.questions.q24.question'), answer: t('sections.meta.questions.q24.answer') },
      { id: 'q25', question: t('sections.meta.questions.q25.question'), answer: t('sections.meta.questions.q25.answer') },
    ],
  },
];


  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqSections;
    }

    const query = searchQuery.toLowerCase();
    return faqSections.map(section => {
      const filteredFAQs = section.faqs.filter(faq => {
        const searchText = `${faq.question} ${faq.answer}`.toLowerCase();
        return searchText.includes(query);
      });
      return { ...section, faqs: filteredFAQs };
    }).filter(section => section.faqs.length > 0);
  }, [searchQuery, faqSections]);

  /** Chunk FAQs into groups of 2 so we never have more than 2 consecutive DisclosureBlocks (doctrine §11.3b). */
  const chunkFaqs = (faqs: FAQ[]) => {
    const chunks: FAQ[][] = [];
    for (let i = 0; i < faqs.length; i += 2) {
      chunks.push(faqs.slice(i, i + 2));
    }
    return chunks;
  };

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        <Section tone="light" className="section-primitive--first">
          <div>
            <h1>{t('pageTitle')}</h1>

            {/* POLICY NOTICE BANNER */}
            <div className="notice-panel mb-10">
              <div className="flex items-start">
                <span className="notice-panel__marker" aria-hidden />
                <div>
                  <h2 className="h2-system">{t('policyNotice.title')}</h2>
                  <p className="text-body mb-2">
                    {t('policyNotice.intro')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-body ml-4">
                    <li>{t('policyNotice.rules.rule1')}</li>
                    <li>{t('policyNotice.rules.rule2')}</li>
                    <li>{t('policyNotice.rules.rule3')}</li>
                  </ul>
                  <p className="text-body mt-2">
                    {t('policyNotice.footer')}
                  </p>
                </div>
              </div>
            </div>

            {/* CONFIDENCE BAR */}
            <div className="mb-10">
              <ConfidenceBar />
            </div>

            {/* SEARCH FIELD */}
            <div className="mb-10">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority text-authority"
              />
            </div>

            <div className="space-y-8">
              {/* ANCHOR NAVIGATION — stacked per Task 5D-1C (no tablet 3+ col) */}
              <div>
                <div className="sticky top-24">
                  <h3 className="section-label">{t('sectionsLabel')}</h3>
                  <nav className="space-y-2">
                    {faqSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm link-system py-1"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* FAQ CONTENT */}
              <div>
                {filteredSections.length === 0 ? (
                  <div className="bg-surface-light-alt p-10 text-center">
                    <p className="text-body">{t('noResults')}</p>
                  </div>
                ) : (
                  <div className="space-y-10">
                    {filteredSections.map((section) => (
                      <div key={section.id} id={section.id} className="scroll-mt-24">
                        <DisclosureBlock
                          label={section.title}
                          explainer={section.intro}
                          defaultExpanded={section.id === 'service-model'}
                        >
                          <div className="space-y-3">
                            {chunkFaqs(section.faqs).map((group, groupIndex) => (
                              <div key={groupIndex}>
                                {groupIndex > 0 && (
                                  <div className="structural-break" style={{ paddingBlock: 'var(--space-40)' }} aria-hidden />
                                )}
                                {group.map((faq) => (
                                  <DisclosureBlock
                                    key={faq.id}
                                    label={faq.question}
                                    className="border-0 border-t border-structural-muted first:border-t-0"
                                  >
                                    <p className="text-body leading-relaxed">{faq.answer}</p>
                                  </DisclosureBlock>
                                ))}
                              </div>
                            ))}
                          </div>
                        </DisclosureBlock>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="mt-10 bg-surface-light-alt p-10 border border-structural-light">
              <h2 className="h2-system">{t('notAnswered.title')}</h2>
              <p className="text-body mb-5 leading-relaxed">
                {t('notAnswered.intro')}
              </p>
              <p className="text-body mb-5 leading-relaxed">
                {t('notAnswered.important')}
              </p>
              <p className="text-body mb-10 leading-relaxed">
                {t('notAnswered.footer')}
              </p>
              <Link href={`/${locale}/contact`} className="btn-primary">
                {tCommon('nav.contact')}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

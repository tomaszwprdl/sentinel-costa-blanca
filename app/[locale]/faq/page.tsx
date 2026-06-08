'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import FAQBoundaryPanel from '@/components/FAQBoundaryPanel';
import FAQCategoryNav from '@/components/FAQCategoryNav';
import FAQDecisionPanel from '@/components/FAQDecisionPanel';
import FAQGroupedAccordion, { type FAQGroup } from '@/components/FAQGroupedAccordion';
import FAQQuickAnswerCards from '@/components/FAQQuickAnswerCards';
import FAQWrongAssumptions from '@/components/FAQWrongAssumptions';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import FAQRoutingDiagram from '@/components/visuals/FAQRoutingDiagram';

type HeroFact = {
  label: string;
  value: string;
};

type QuickAnswerSource = {
  title: string;
  answer: string;
  href: string;
};

type CategoryItem = {
  id: string;
  title: string;
  body: string;
};

type BoundaryItem = {
  label: string;
  value: string;
};

type AssumptionItem = {
  assumption: string;
  boundary: string;
};

export default function FAQPage() {
  const locale = useLocale();
  const t = useTranslations('faq');
  const tCommon = useTranslations('common');
  const [searchQuery, setSearchQuery] = useState('');

  const facts = t.raw('redesign.hero.facts') as HeroFact[];
  const quickAnswers = (t.raw('redesign.quick.items') as QuickAnswerSource[]).map((item) => ({
    ...item,
    linkLabel: t('redesign.quick.linkLabel'),
  }));
  const categories = t.raw('redesign.categories.items') as CategoryItem[];
  const boundaryItems = t.raw('redesign.boundary.items') as BoundaryItem[];
  const assumptionItems = t.raw('redesign.assumptions.items') as AssumptionItem[];

  const decisionItems = [
    {
      title: t('redesign.decision.items.services.title'),
      body: t('redesign.decision.items.services.body'),
      href: `/${locale}/services`,
      label: tCommon('nav.services'),
    },
    {
      title: t('redesign.decision.items.how.title'),
      body: t('redesign.decision.items.how.body'),
      href: `/${locale}/how-it-works`,
      label: tCommon('nav.howItWorks'),
    },
    {
      title: t('redesign.decision.items.contact.title'),
      body: t('redesign.decision.items.contact.body'),
      href: `/${locale}/contact`,
      label: tCommon('nav.contact'),
    },
    {
      title: t('redesign.decision.items.decline.title'),
      body: t('redesign.decision.items.decline.body'),
    },
  ];

  const faqSections = useMemo<FAQGroup[]>(() => [
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
  ], [t]);

  const filteredSections = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return faqSections;
    }

    return faqSections.map((section) => {
      const sectionMatches = `${section.title} ${section.intro}`.toLowerCase().includes(query);
      const faqs = sectionMatches
        ? section.faqs
        : section.faqs.filter((faq) => `${faq.question} ${faq.answer}`.toLowerCase().includes(query));

      return { ...section, faqs };
    }).filter((section) => section.faqs.length > 0);
  }, [faqSections, searchQuery]);

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        <Section tone="authority" className="section-primitive--first" id="faq-start">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.72fr)] lg:items-center">
            <div>
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[17ch]">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead max-w-[62ch]">{t('redesign.hero.lead')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link href={`/${locale}/services`} className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                  {t('redesign.hero.secondaryCta')}
                </Link>
              </div>
              <div className="hero-fact-grid">
                {facts.map((fact) => (
                  <div key={fact.label} className="hero-fact">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <FAQRoutingDiagram />
          </div>
        </Section>

        <Section tone="light">
          <FAQQuickAnswerCards
            eyebrow={t('redesign.quick.eyebrow')}
            title={t('redesign.quick.title')}
            intro={t('redesign.quick.intro')}
            items={quickAnswers}
          />
        </Section>

        <Section tone="alt">
          <FAQCategoryNav
            eyebrow={t('redesign.categories.eyebrow')}
            title={t('redesign.categories.title')}
            intro={t('redesign.categories.intro')}
            categories={categories}
          />
        </Section>

        <Section tone="light" id="faq-details">
          <FAQGroupedAccordion
            eyebrow={t('redesign.details.eyebrow')}
            title={t('redesign.details.title')}
            intro={t('redesign.details.intro')}
            sections={filteredSections}
            noResults={t('noResults')}
            searchControl={(
              <div className="visual-card-strong p-3">
                <input
                  type="search"
                  aria-label={t('search.placeholder')}
                  placeholder={t('search.placeholder')}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="form-control border-0 bg-surface-light-alt text-base"
                />
              </div>
            )}
          />
        </Section>

        <Section tone="alt">
          <FAQBoundaryPanel
            eyebrow={t('redesign.boundary.eyebrow')}
            title={t('redesign.boundary.title')}
            intro={t('redesign.boundary.intro')}
            items={boundaryItems}
          />
        </Section>

        <Section tone="light">
          <FAQWrongAssumptions
            eyebrow={t('redesign.assumptions.eyebrow')}
            title={t('redesign.assumptions.title')}
            intro={t('redesign.assumptions.intro')}
            items={assumptionItems}
          />
        </Section>

        <Section tone="alt">
          <FAQDecisionPanel
            eyebrow={t('redesign.decision.eyebrow')}
            title={t('redesign.decision.title')}
            intro={t('redesign.decision.intro')}
            items={decisionItems}
          />
        </Section>

        <Section tone="light" className="!pt-10">
          <div className="visual-card-strong overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)]">
              <div className="p-5 md:p-8">
                <p className="section-label">FAQ</p>
                <h2 className="h2-system mt-3">{t('redesign.finalCta.title')}</h2>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-body">{t('redesign.finalCta.intro')}</p>
              </div>
              <div className="border-t border-structural-light bg-surface-light-alt p-5 md:p-8 lg:border-l lg:border-t-0">
                <div className="flex flex-col gap-3">
                  <Link href={`/${locale}/contact`} className="btn-primary">
                    {tCommon('nav.contact')}
                  </Link>
                  <Link href={`/${locale}/services`} className="btn-secondary">
                    {tCommon('nav.services')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <MobileStickyCTA
        primaryHref={`/${locale}/contact`}
        primaryLabel={tCommon('nav.contact')}
        secondaryHref="#faq-details"
        secondaryLabel={t('redesign.details.eyebrow')}
      />
      <Footer />
    </>
  );
}

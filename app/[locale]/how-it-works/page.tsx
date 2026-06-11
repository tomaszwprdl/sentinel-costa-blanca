import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import ConfidenceBar from '@/components/ConfidenceBar';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';
import ProcessDetailChapters from '@/components/ProcessDetailChapters';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JourneyNav from '@/components/JourneyNav';
import OperatingPathChapter from '@/components/how-it-works/OperatingPathChapter';
import LocalExecutionChapter from '@/components/how-it-works/LocalExecutionChapter';
import ReportDecisionChapter from '@/components/how-it-works/ReportDecisionChapter';

type Fact = {
  label: string;
  value: string;
};

const RHYTHM_KEYS = ['visits', 'reports', 'access', 'changes'] as const;
const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'] as const;

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'howItWorks' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const facts = t.raw('redesign.hero.facts') as Fact[];
  const journeyItems = [
    { id: 'process-start', label: t('redesign.hero.eyebrow') },
    { id: 'operating-path', label: t('redesign.timeline.eyebrow') },
    { id: 'local-execution', label: t('redesign.storyboard.eyebrow') },
    { id: 'report-decision', label: t('redesign.report.eyebrow') },
    { id: 'onboarding-detail', label: t('redesign.details.eyebrow') },
  ];

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen hiw-page">
        <Section tone="authority" className="section-primitive--first hiw-hero" id="process-start">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.72fr)] lg:items-center">
            <div className="motion-entrance">
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[17ch]">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead max-w-[62ch]">{t('redesign.hero.lead')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link
                  href="#report-decision"
                  className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority"
                >
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

            <figure className="visual-card-strong motion-panel-reveal overflow-hidden border-authority-on-dark/25 bg-authority-on-dark/5">
              <div className="relative aspect-[4/3] bg-surface-light">
                <Image
                  src="/visuals/sentinel-process-report-preview.svg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </figure>
          </div>

          <div className="mt-10">
            <ConfidenceBar />
          </div>
        </Section>

        <JourneyNav items={journeyItems} ariaLabel={t('redesign.hero.headline')} className="services-journey-nav" />

        <Section tone="light" id="operating-path" className="section-primitive--compact hiw-interface-section hiw-section--operating">
          <OperatingPathChapter />
        </Section>

        <Section tone="light" className="section-primitive--compact hiw-interface-section hiw-section--local">
          <LocalExecutionChapter />
        </Section>

        <Section tone="alt" className="section-primitive--compact hiw-interface-section hiw-section--report">
          <ReportDecisionChapter t={t} />
        </Section>

        <Section tone="light" id="onboarding-detail" className="section-primitive--compact hiw-section--ledger">
          <div className="mb-6 max-w-[760px] md:mb-8">
            <p className="section-label">{t('redesign.details.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.details.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.details.intro')}</p>
          </div>
          <ProcessDetailChapters t={t} />
        </Section>

        <Section tone="alt" className="section-primitive--compact hiw-interface-section hiw-section--support">
          <div className="hiw-support-band">
            <div className="hiw-support-band__rhythm">
              <p className="section-label">{t('redesign.rhythm.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.rhythm.title')}</h2>
              <ul className="hiw-rhythm-list">
                {RHYTHM_KEYS.map((key) => (
                  <li key={key} className="hiw-rhythm-list__item">
                    <h3 className="hiw-rhythm-list__title">{t(`redesign.rhythm.cards.${key}.title`)}</h3>
                    <p className="hiw-rhythm-list__body">{t(`redesign.rhythm.cards.${key}.body`)}</p>
                  </li>
                ))}
              </ul>
            </div>

            <DisclosureBlock label={t('changes.title')} explainer={t('changes.packageChangesIntro')}>
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-black text-heading">{t('changes.packageChangesTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    <li>{t('changes.packageChangesItems.request')}</li>
                    <li>{t('changes.packageChangesItems.terms')}</li>
                    <li>{t('changes.packageChangesItems.effective')}</li>
                    <li>{t('changes.packageChangesItems.retroactive')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-black text-heading">{t('changes.additionsTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    <li>{t('changes.additionsItems.quoted')}</li>
                    <li>{t('changes.additionsItems.added')}</li>
                    <li>{t('changes.additionsItems.noAlter')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-black text-heading">{t('changes.clientTerminationTitle')}</h3>
                  <ul className="ml-4 list-disc space-y-2 text-sm text-body">
                    <li>{t('changes.clientTerminationItems.effective')}</li>
                    <li>{t('changes.clientTerminationItems.finalVisit')}</li>
                    <li>{t('changes.clientTerminationItems.keysReturned')}</li>
                    <li>{t('changes.clientTerminationItems.finalReport')}</li>
                  </ul>
                </div>
              </div>
            </DisclosureBlock>
          </div>

          <DisclosureBlock
            label={t('redesign.faq.title')}
            explainer={t('redesign.faq.eyebrow')}
            className="mt-5"
          >
            <dl className="hiw-faq-list">
              {FAQ_KEYS.map((key) => (
                <div key={key} className="hiw-faq-list__item">
                  <dt className="hiw-faq-list__question">{t(`faq.questions.${key}.question`)}</dt>
                  <dd className="hiw-faq-list__answer">{t(`faq.questions.${key}.answer`)}</dd>
                </div>
              ))}
            </dl>
          </DisclosureBlock>
        </Section>

        <Section tone="light" className="hiw-closing-section hiw-section--handoff">
          <div className="hiw-handoff">
            <div className="hiw-handoff__copy">
              <p className="section-label">{t('redesign.details.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('cta.title')}</h2>
              <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-body">{t('cta.nextIntro')}</p>
            </div>
            <div className="hiw-handoff__actions">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {tCommon('nav.contact')}
              </Link>
              <Link href={`/${locale}/services#package-fit`} className="btn-secondary btn-secondary-on-dark">
                {tCommon('nav.services')}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <MobileStickyCTA
        primaryHref={`/${locale}/contact`}
        primaryLabel={tCommon('nav.contact')}
        secondaryHref="#local-execution"
        secondaryLabel={t('redesign.storyboard.eyebrow')}
        suppressWhenVisible="footer,.hiw-handoff,.hiw-section--support,#report-decision,#onboarding-detail"
      />
      <Footer />
    </>
  );
}

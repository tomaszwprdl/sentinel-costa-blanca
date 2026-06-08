import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import ConfidenceBar from '@/components/ConfidenceBar';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';
import BeforeDuringAfterTimeline from '@/components/BeforeDuringAfterTimeline';
import OneMinuteSection from '@/components/OneMinuteSection';
import VisitStoryboard from '@/components/VisitStoryboard';
import ReportWalkthrough from '@/components/ReportWalkthrough';
import AccessChainDiagram from '@/components/AccessChainDiagram';
import EscalationDecisionMap from '@/components/EscalationDecisionMap';
import ProcessDetailChapters from '@/components/ProcessDetailChapters';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JourneyNav from '@/components/JourneyNav';

type Fact = {
  label: string;
  value: string;
};

const ONE_MINUTE_KEYS = ['qualify', 'scope', 'inspect', 'escalate'] as const;
const RHYTHM_KEYS = ['visits', 'reports', 'access', 'changes'] as const;
const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'] as const;

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'howItWorks' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const facts = t.raw('redesign.hero.facts') as Fact[];
  const journeyItems = [
    { id: 'process-start', label: t('redesign.hero.eyebrow') },
    { id: 'process-rhythm', label: t('redesign.timeline.eyebrow') },
    { id: 'one-minute-process', label: t('redesign.oneMinute.eyebrow') },
    { id: 'visit-storyboard', label: t('redesign.storyboard.eyebrow') },
    { id: 'report-walkthrough', label: t('redesign.report.eyebrow') },
    { id: 'access-chain', label: t('redesign.access.eyebrow') },
    { id: 'decision-map', label: t('redesign.decision.eyebrow') },
  ];
  const oneMinuteItems = ONE_MINUTE_KEYS.map((key, index) => ({
    marker: String(index + 1).padStart(2, '0'),
    title: t(`redesign.oneMinute.items.${key}.title`),
    body: t(`redesign.oneMinute.items.${key}.body`),
  }));

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        <Section tone="authority" className="section-primitive--first" id="process-start">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.72fr)] lg:items-center">
            <div className="motion-entrance">
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[17ch]">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead max-w-[62ch]">{t('redesign.hero.lead')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link href="#report-walkthrough" className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
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

        <JourneyNav items={journeyItems} ariaLabel={t('redesign.hero.headline')} />

        <Section tone="light" id="process-rhythm">
          <BeforeDuringAfterTimeline />
        </Section>

        <Section tone="alt" id="one-minute-process">
          <OneMinuteSection
            eyebrow={t('redesign.oneMinute.eyebrow')}
            title={t('redesign.oneMinute.title')}
            intro={t('redesign.oneMinute.intro')}
            items={oneMinuteItems}
          />
        </Section>

        <Section tone="light">
          <VisitStoryboard />
        </Section>

        <Section tone="alt">
          <ReportWalkthrough t={t} />
        </Section>

        <Section tone="light">
          <AccessChainDiagram />
        </Section>

        <Section tone="alt">
          <EscalationDecisionMap />
        </Section>

        <Section tone="light">
          <div className="mb-8 max-w-[760px]">
            <p className="section-label">{t('redesign.details.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.details.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.details.intro')}</p>
          </div>
          <ProcessDetailChapters t={t} />
        </Section>

        <Section tone="alt">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:items-start">
            <div>
              <p className="section-label">{t('redesign.rhythm.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.rhythm.title')}</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {RHYTHM_KEYS.map((key) => (
                  <article key={key} className="visual-card p-5">
                    <h3 className="mb-2 text-lg font-black text-heading">
                      {t(`redesign.rhythm.cards.${key}.title`)}
                    </h3>
                    <p className="mb-0 text-sm leading-relaxed text-body">
                      {t(`redesign.rhythm.cards.${key}.body`)}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <DisclosureBlock label={t('changes.title')} explainer={t('changes.packageChangesIntro')}>
              <div className="space-y-6">
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
        </Section>

        <Section tone="light">
          <div className="mb-8 max-w-[760px]">
            <p className="section-label">{t('redesign.faq.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.faq.title')}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {FAQ_KEYS.map((key) => (
              <article key={key} className="visual-card p-5">
                <h3 className="mb-3 text-lg font-black text-heading">{t(`faq.questions.${key}.question`)}</h3>
                <p className="mb-0 text-sm leading-relaxed text-body">{t(`faq.questions.${key}.answer`)}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="light" className="!pt-10">
          <div className="visual-card-strong overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)]">
              <div className="p-5 md:p-8">
                <p className="section-label">{t('redesign.details.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('cta.title')}</h2>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-body">
                  {t('cta.nextIntro')}
                </p>
              </div>
              <div className="border-t border-structural-light bg-surface-light-alt p-5 md:p-8 lg:border-l lg:border-t-0">
                <div className="flex flex-col gap-4">
                  <Link href={`/${locale}/contact`} className="btn-primary">
                    {tCommon('nav.contact')}
                  </Link>
                  <Link href={`/${locale}/services#package-fit`} className="btn-secondary">
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
        secondaryHref="#visit-storyboard"
        secondaryLabel={t('redesign.storyboard.eyebrow')}
      />
      <Footer />
    </>
  );
}

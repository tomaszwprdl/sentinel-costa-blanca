import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';
import AboutOperatingModel from '@/components/AboutOperatingModel';
import AboutBoundaryGrid from '@/components/AboutBoundaryGrid';
import AboutResponsibilityFlow from '@/components/AboutResponsibilityFlow';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';

type Fact = {
  label: string;
  value: string;
};

type InfoCard = {
  title: string;
  body: string;
};

type MarkedItem = InfoCard & {
  marker: string;
};

const DETAIL_KEYS = ['model', 'area', 'accountability'] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const heroFacts = t.raw('redesign.hero.facts') as Fact[];
  const whyCards = t.raw('redesign.why.cards') as MarkedItem[];
  const modelItems = t.raw('redesign.model.items') as MarkedItem[];
  const isItems = t.raw('redesign.boundary.isItems') as InfoCard[];
  const isNotItems = t.raw('redesign.boundary.isNotItems') as InfoCard[];
  const localCards = t.raw('redesign.local.cards') as InfoCard[];
  const capabilityItems = t.raw('redesign.capabilities.items') as MarkedItem[];
  const responsibilitySteps = t.raw('redesign.responsibility.steps') as MarkedItem[];
  const serviceAreaMapLabels = {
    title: tCommon('serviceAreaMap.title'),
    center: tCommon('serviceAreaMap.center'),
    radius: tCommon('serviceAreaMap.radius'),
    boundary: tCommon('serviceAreaMap.boundary'),
    caption: tCommon('serviceAreaMap.caption'),
  };

  return (
    <>
      <HeaderClient />
      <main className="about-page min-h-screen">
        <Section tone="authority" className="section-primitive--first about-hero" id="about-start">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(20rem,0.38fr)] lg:items-center">
            <div>
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[18ch]">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead max-w-[64ch]">{t('redesign.hero.lead')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link href={`/${locale}/services`} className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                  {t('redesign.hero.secondaryCta')}
                </Link>
              </div>
              <div className="hero-fact-grid">
                {heroFacts.map((fact) => (
                  <div key={fact.label} className="hero-fact">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <figure className="about-hero-media reveal-rise">
              <div className="about-hero-media__frame">
                <Image
                  src="/photos/sentinel-about-local-entry-placeholder.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
          </div>
        </Section>

        <Section tone="light" className="about-section about-section--why">
          <div className="about-shell reveal-rise">
            <div className="about-shell__header px-5 py-6 md:px-8">
              <p className="section-label">{t('redesign.why.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.why.title')}</h2>
              <p className="mt-3 mb-0 max-w-[62ch] text-body">{t('redesign.why.intro')}</p>
            </div>
            <div className="about-why-ledger">
              {whyCards.map((card) => (
                <article key={card.marker} className="about-why-ledger__row">
                  <span className="about-why-ledger__marker">{card.marker}</span>
                  <div>
                    <h3 className="mb-2 text-lg font-black text-heading">{card.title}</h3>
                    <p className="mb-0 max-w-[68ch] text-sm leading-relaxed text-body">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="about-shell__footer px-5 py-5 md:px-8">
              <p className="mb-0 max-w-[78ch] text-sm leading-relaxed text-body">{t('redesign.why.closing')}</p>
            </div>
          </div>
        </Section>

        <Section tone="alt" className="about-section about-section--model">
          <AboutOperatingModel
            eyebrow={t('redesign.model.eyebrow')}
            title={t('redesign.model.title')}
            intro={t('redesign.model.intro')}
            items={modelItems}
          />
        </Section>

        <Section tone="light" className="about-section about-section--boundary">
          <AboutBoundaryGrid
            eyebrow={t('redesign.boundary.eyebrow')}
            title={t('redesign.boundary.title')}
            intro={t('redesign.boundary.intro')}
            isTitle={t('redesign.boundary.isTitle')}
            isNotTitle={t('redesign.boundary.isNotTitle')}
            isItems={isItems}
            isNotItems={isNotItems}
          />
        </Section>

        <Section tone="alt" className="about-section about-section--local">
          <div className="reveal-rise grid gap-8 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-center">
            <div>
              <p className="section-label">{t('redesign.local.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.local.title')}</h2>
              <p className="mt-3 text-body">{t('redesign.local.intro')}</p>
              <div className="about-local-list mt-6">
                {localCards.map((card) => (
                  <article key={card.title} className="about-local-list__item">
                    <h3 className="mb-1 text-base font-black text-heading">{card.title}</h3>
                    <p className="mb-0 text-sm leading-relaxed text-body">{card.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 mb-0 text-sm leading-relaxed text-muted">{t('redesign.local.note')}</p>
            </div>

            <ServiceAreaMap labels={serviceAreaMapLabels} />
          </div>
        </Section>

        <Section tone="light" className="about-section about-section--capabilities">
          <div className="about-shell reveal-rise">
            <div className="about-shell__header px-5 py-6 md:px-8">
              <p className="section-label">{t('redesign.capabilities.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.capabilities.title')}</h2>
              <p className="mt-3 mb-0 max-w-[62ch] text-body">{t('redesign.capabilities.intro')}</p>
            </div>
            <div className="about-capability-matrix">
              {capabilityItems.map((item) => (
                <article key={item.marker} className="about-capability-matrix__cell p-5 md:p-6">
                  <p className="mb-3 text-[11px] font-black uppercase tracking-wide text-accent">{item.marker}</p>
                  <h3 className="mb-2 text-base font-black text-heading">{item.title}</h3>
                  <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="about-shell__footer px-5 py-5 md:px-8">
              <p className="mb-0 max-w-[78ch] text-sm leading-relaxed text-body">{t('redesign.capabilities.note')}</p>
            </div>
          </div>
        </Section>

        <Section tone="alt" className="about-section about-section--responsibility">
          <AboutResponsibilityFlow
            eyebrow={t('redesign.responsibility.eyebrow')}
            title={t('redesign.responsibility.title')}
            intro={t('redesign.responsibility.intro')}
            steps={responsibilitySteps}
            note={t('redesign.responsibility.note')}
          />
        </Section>

        <Section tone="light" className="about-section about-section--details">
          <div className="mb-8 max-w-[780px]">
            <p className="section-label">{t('redesign.details.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.details.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.details.intro')}</p>
          </div>
          <div className="reveal-stagger grid gap-5 lg:grid-cols-3">
            {DETAIL_KEYS.map((key) => (
              <DisclosureBlock
                key={key}
                label={t(`redesign.details.items.${key}.title`)}
                explainer={t(`redesign.details.items.${key}.explainer`)}
              >
                <p className="mb-0 text-sm leading-relaxed text-body">
                  {t(`redesign.details.items.${key}.body`)}
                </p>
              </DisclosureBlock>
            ))}
          </div>
        </Section>

        <Section tone="authority" className="about-section about-section--final">
          <div className="reveal-rise max-w-[760px]">
            <h2 className="h2-system text-authority-on-dark">{t('redesign.cta.title')}</h2>
            <p className="text-lg text-authority-on-dark/80 mb-10 leading-relaxed">
              {t('redesign.cta.intro')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/contact`} className="btn-primary btn-primary-inverse">
                {t('redesign.cta.primaryCta')}
              </Link>
              <Link href={`/${locale}/services`} className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                {t('redesign.cta.secondaryCta')}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

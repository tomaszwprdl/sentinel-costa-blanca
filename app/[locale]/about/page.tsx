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

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        <Section tone="authority" className="section-primitive--first" id="about-start">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(20rem,0.38fr)] lg:items-center">
            <div>
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[16ch]">{t('redesign.hero.headline')}</h1>
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

            <figure className="visual-card-strong overflow-hidden border-authority-on-dark/25 bg-authority-on-dark/5">
              <div className="relative aspect-[4/3]">
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

        <Section tone="light">
          <div className="mb-8 max-w-[780px]">
            <p className="section-label">{t('redesign.why.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.why.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.why.intro')}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {whyCards.map((card) => (
              <article key={card.marker} className="visual-card p-5 md:p-6">
                <p className="mb-5 text-4xl font-black text-accent">{card.marker}</p>
                <h3 className="mb-3 text-xl font-black text-heading">{card.title}</h3>
                <p className="mb-0 text-sm leading-relaxed text-body">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="notice-panel mt-8">
            <p className="mb-0 text-body">{t('redesign.why.closing')}</p>
          </div>
        </Section>

        <Section tone="alt">
          <AboutOperatingModel
            eyebrow={t('redesign.model.eyebrow')}
            title={t('redesign.model.title')}
            intro={t('redesign.model.intro')}
            image="/photos/sentinel-about-operating-model-placeholder.png"
            items={modelItems}
          />
        </Section>

        <Section tone="light">
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

        <Section tone="alt">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-center">
            <div>
              <p className="section-label">{t('redesign.local.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.local.title')}</h2>
              <p className="mt-3 text-body">{t('redesign.local.intro')}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {localCards.map((card) => (
                  <article key={card.title} className="rounded-2xl border border-structural-light bg-surface-card p-4">
                    <h3 className="mb-2 text-base font-black text-heading">{card.title}</h3>
                    <p className="mb-0 text-sm leading-relaxed text-body">{card.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 mb-0 text-sm leading-relaxed text-muted">{t('redesign.local.note')}</p>
            </div>

            <figure className="visual-card-strong overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/sentinel-service-radius-placeholder.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </Section>

        <Section tone="light">
          <div className="mb-8 max-w-[780px]">
            <p className="section-label">{t('redesign.capabilities.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.capabilities.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.capabilities.intro')}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilityItems.map((item) => (
              <article key={item.marker} className="visual-card p-5">
                <p className="mb-3 text-[11px] font-black uppercase tracking-wide text-accent">{item.marker}</p>
                <h3 className="mb-3 text-lg font-black text-heading">{item.title}</h3>
                <p className="mb-0 text-sm leading-relaxed text-body">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="notice-panel mt-8">
            <p className="mb-0 text-body">{t('redesign.capabilities.note')}</p>
          </div>
        </Section>

        <Section tone="alt">
          <AboutResponsibilityFlow
            eyebrow={t('redesign.responsibility.eyebrow')}
            title={t('redesign.responsibility.title')}
            intro={t('redesign.responsibility.intro')}
            steps={responsibilitySteps}
            note={t('redesign.responsibility.note')}
          />
        </Section>

        <Section tone="light">
          <div className="mb-8 max-w-[780px]">
            <p className="section-label">{t('redesign.details.eyebrow')}</p>
            <h2 className="h2-system mt-3">{t('redesign.details.title')}</h2>
            <p className="mt-3 text-body">{t('redesign.details.intro')}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
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

        <Section tone="authority">
          <div className="max-w-[760px]">
            <h2 className="h2-system text-authority-on-dark">{t('redesign.cta.title')}</h2>
            <p className="text-lg text-authority-on-dark/80 mb-10 leading-relaxed">
              {t('redesign.cta.intro')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/contact`} className="btn-primary !bg-surface-light !text-authority hover:!bg-surface-light-alt !border-surface-light">
                {tCommon('nav.contact')}
              </Link>
              <Link href={`/${locale}/services`} className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                {tCommon('nav.services')}
              </Link>
              <Link href={`/${locale}/how-it-works`} className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                {tCommon('nav.howItWorks')}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

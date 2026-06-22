import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';

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

function LocalOperatorRecord({
  badge,
  title,
  imageAlt,
  rows,
  facts,
}: {
  badge: string;
  title: string;
  imageAlt: string;
  rows: Fact[];
  facts: Fact[];
}) {
  return (
    <aside className="about-local-record reveal-rise" aria-label={title}>
      <div className="about-local-record__header">
        <p className="section-label">{badge}</p>
        <h2>{title}</h2>
      </div>
      <figure className="about-local-record__photo">
        <Image
          src="/photos/about-operator-presence.webp"
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="about-proof-photo__image"
          loading="eager"
        />
      </figure>
      <dl className="about-local-record__rows">
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="about-local-record__facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}

function OperatingGapBoard({ items, closing }: { items: MarkedItem[]; closing: string }) {
  return (
    <div className="about-gap-board reveal-rise">
      <div className="about-gap-board__items">
        {items.map((item) => (
          <article key={item.marker} className="about-gap-board__item">
            <span>{item.marker}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="about-gap-board__closing">{closing}</p>
    </div>
  );
}

function BoundaryColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: InfoCard[];
  tone: 'is' | 'isnot';
}) {
  return (
    <div className={`about-operator-boundary__col about-operator-boundary__col--${tone}`}>
      <h3>{title}</h3>
      <div className="about-operator-boundary__items">
        {items.map((item) => (
          <article key={item.title} className="about-operator-boundary__item">
            <span aria-hidden="true" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function LocalEvidencePanel({ cards }: { cards: InfoCard[] }) {
  return (
    <div className="about-local-evidence">
      {cards.map((card) => (
        <article key={card.title} className="about-local-evidence__row">
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function OperatorProofSurface({
  eyebrow,
  title,
  status,
  body,
  rows,
  artifactAlt,
  artifactCaption,
}: {
  eyebrow: string;
  title: string;
  status: string;
  body: string;
  rows: Fact[];
  artifactAlt: string;
  artifactCaption: string;
}) {
  return (
    <aside className="about-operator-proof reveal-rise" aria-label={title}>
      <div className="about-operator-proof__identity">
        <span className="about-operator-proof__mark" aria-hidden />
        <div>
          <p className="section-label">{eyebrow}</p>
          <h3>{title}</h3>
          <span>{status}</span>
        </div>
      </div>

      <p className="about-operator-proof__body">{body}</p>

      <dl className="about-operator-proof__rows">
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>

      <figure className="about-operator-proof__photo">
        <Image
          src="/photos/aleksy-gugala-operator.jpg"
          alt={artifactAlt}
          width={875}
          height={1280}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="about-operator-proof__photo-image"
          loading="eager"
        />
        <figcaption>{artifactCaption}</figcaption>
      </figure>
    </aside>
  );
}

function CapabilityRegister({ items }: { items: MarkedItem[] }) {
  return (
    <div className="about-capability-register">
      {items.map((item) => (
        <article key={item.marker} className="about-capability-register__item">
          <p>{item.marker}</p>
          <h3>{item.title}</h3>
          <span>{item.body}</span>
        </article>
      ))}
    </div>
  );
}

function ResponsibilityLedger({ steps, note }: { steps: MarkedItem[]; note: string }) {
  return (
    <div className="about-responsibility-ledger reveal-rise">
      <div className="about-responsibility-ledger__steps">
        {steps.map((step) => (
          <article key={step.marker} className="about-responsibility-ledger__step">
            <span>{step.marker}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
      <p className="about-responsibility-ledger__note">{note}</p>
    </div>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const heroFacts = t.raw('redesign.hero.facts') as Fact[];
  const heroRows = t.raw('redesign.hero.artifactRows') as Fact[];
  const whyCards = t.raw('redesign.why.cards') as MarkedItem[];
  const isItems = t.raw('redesign.boundary.isItems') as InfoCard[];
  const isNotItems = t.raw('redesign.boundary.isNotItems') as InfoCard[];
  const localCards = t.raw('redesign.local.cards') as InfoCard[];
  const operatorRows = t.raw('redesign.operator.rows') as Fact[];
  const capabilityItems = t.raw('redesign.capabilities.items') as MarkedItem[];
  const responsibilitySteps = t.raw('redesign.responsibility.steps') as MarkedItem[];

  return (
    <>
      <HeaderClient />
      <main className="about-page about-operator-page min-h-screen">
        <Section tone="authority" className="section-primitive--first about-operator-hero" id="about-start">
          <div className="about-operator-hero__grid">
            <div className="about-operator-hero__copy">
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead">{t('redesign.hero.lead')}</p>
              <div className="about-operator-hero__actions">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link href="#about-boundaries" className="btn-secondary btn-secondary-on-dark">
                  {t('redesign.boundary.eyebrow')}
                </Link>
              </div>
            </div>

            <LocalOperatorRecord
              badge={t('redesign.hero.artifactBadge')}
              title={t('redesign.hero.artifactTitle')}
              rows={heroRows}
              facts={heroFacts}
              imageAlt={t('redesign.hero.operatorImageAlt')}
            />
          </div>
        </Section>

        <Section tone="light" className="about-operator-section about-operator-section--gap">
          <div className="about-operator-intro">
            <div>
              <p className="section-label">{t('redesign.why.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.why.title')}</h2>
            </div>
            <p>{t('redesign.why.intro')}</p>
          </div>
          <OperatingGapBoard items={whyCards} closing={t('redesign.why.closing')} />
        </Section>

        <Section tone="alt" id="about-boundaries" className="about-operator-section about-operator-section--boundary">
          <div className="about-operator-intro about-operator-intro--wide">
            <div>
              <p className="section-label">{t('redesign.boundary.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.boundary.title')}</h2>
            </div>
            <p>{t('redesign.boundary.intro')}</p>
          </div>
          <div className="about-operator-boundary reveal-rise">
            <BoundaryColumn title={t('redesign.boundary.isTitle')} items={isItems} tone="is" />
            <BoundaryColumn title={t('redesign.boundary.isNotTitle')} items={isNotItems} tone="isnot" />
          </div>
        </Section>

        <Section tone="light" className="about-operator-section about-operator-section--local">
          <div className="about-local-layout">
            <div className="about-local-layout__copy">
              <p className="section-label">{t('redesign.local.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.local.title')}</h2>
              <p>{t('redesign.local.intro')}</p>
              <p className="about-local-layout__note">{t('redesign.local.note')}</p>
              <figure className="about-local-context-photo">
                <Image
                  src="/photos/about-local-exterior.webp"
                  alt={t('redesign.local.exteriorImageAlt')}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="about-proof-photo__image"
                  loading="eager"
                />
              </figure>
            </div>
            <div className="about-local-layout__evidence-stack">
              <OperatorProofSurface
                eyebrow={t('redesign.operator.eyebrow')}
                title={t('redesign.operator.title')}
                status={t('redesign.operator.status')}
                body={t('redesign.operator.body')}
                rows={operatorRows}
                artifactAlt={t('redesign.operator.artifact.alt')}
                artifactCaption={t('redesign.operator.artifact.caption')}
              />
              <LocalEvidencePanel cards={localCards} />
            </div>
          </div>
        </Section>

        <Section tone="alt" className="about-operator-section about-operator-section--responsibility">
          <div className="about-operator-intro">
            <div>
              <p className="section-label">{t('redesign.responsibility.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.responsibility.title')}</h2>
            </div>
            <p>{t('redesign.responsibility.intro')}</p>
          </div>
          <ResponsibilityLedger steps={responsibilitySteps} note={t('redesign.responsibility.note')} />
        </Section>

        <Section tone="light" className="about-operator-section about-operator-section--capabilities">
          <div className="about-capability-layout">
            <div>
              <p className="section-label">{t('redesign.capabilities.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.capabilities.title')}</h2>
              <p>{t('redesign.capabilities.intro')}</p>
              <p className="about-capability-layout__note">{t('redesign.capabilities.note')}</p>
            </div>
            <CapabilityRegister items={capabilityItems} />
          </div>
        </Section>

        <Section tone="authority" className="about-operator-section about-operator-section--final">
          <div className="about-operator-final reveal-rise">
            <p className="section-label">{t('redesign.hero.eyebrow')}</p>
            <h2 className="h2-system">{t('redesign.cta.title')}</h2>
            <p>{t('redesign.cta.intro')}</p>
            <div className="about-operator-final__actions">
              <Link href={`/${locale}/contact`} className="btn-primary btn-primary-inverse">
                {t('redesign.cta.primaryCta')}
              </Link>
              <Link href={`/${locale}/services`} className="btn-secondary btn-secondary-on-dark">
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

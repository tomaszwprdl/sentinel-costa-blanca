import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';

type WhyPoint = {
  marker: string;
  title: string;
  body: string;
};

type ContrastRow = {
  role: string;
  action: string;
  body: string;
};

type DoctrineItem = {
  title: string;
  body: string;
};

type TeamMember = {
  name: string;
  role: string;
};

function DoctrineColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: DoctrineItem[];
  tone: 'is' | 'isnot';
}) {
  return (
    <div className={`about-doctrine__col about-doctrine__col--${tone}`}>
      <h3>{title}</h3>
      <ul className="about-doctrine__items">
        {items.map((item) => (
          <li key={item.title}>
            <span aria-hidden="true" />
            <div>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
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

  const whyPoints = t.raw('redesign.why.points') as WhyPoint[];
  const contrastRows = t.raw('redesign.contrast.rows') as ContrastRow[];
  const isItems = t.raw('redesign.boundary.isItems') as DoctrineItem[];
  const isNotItems = t.raw('redesign.boundary.isNotItems') as DoctrineItem[];
  const teamRoster = t.raw('redesign.team.roster') as TeamMember[];

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
                  {t('redesign.hero.boundaryCta')}
                </Link>
              </div>
            </div>

            <figure className="about-hero-photo reveal-rise">
              <div className="about-hero-photo__frame">
                <Image
                  src="/photos/about-operator-presence.webp"
                  alt={t('redesign.hero.photoAlt')}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="about-hero-photo__image"
                  priority
                />
              </div>
              <figcaption>{t('redesign.hero.photoCaption')}</figcaption>
            </figure>
          </div>
        </Section>

        <Section tone="light" className="about-operator-section about-why">
          <div className="about-operator-intro">
            <div>
              <p className="section-label">{t('redesign.why.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.why.title')}</h2>
            </div>
            <p>{t('redesign.why.body')}</p>
          </div>
          <div className="about-why-board reveal-rise">
            <div className="about-why-board__points">
              {whyPoints.map((point) => (
                <article key={point.marker} className="about-why-board__point">
                  <span>{point.marker}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="about-why-board__closing">{t('redesign.why.closing')}</p>
          </div>
        </Section>

        <Section tone="light" className="about-operator-section about-access-break-section">
          <figure className="about-access-break">
            <div className="about-access-break__frame">
              <Image
                src="/photos/about-access-check.webp"
                alt={t('redesign.accessBreak.alt')}
                width={2048}
                height={1152}
                sizes="(min-width: 1024px) 76vw, 100vw"
                className="about-access-break__image"
                loading="eager"
              />
            </div>
            <figcaption>{t('redesign.accessBreak.caption')}</figcaption>
          </figure>
        </Section>

        <Section tone="alt" className="about-operator-section about-contrast-section">
          <div className="about-operator-intro">
            <div>
              <p className="section-label">{t('redesign.contrast.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.contrast.title')}</h2>
            </div>
            <p>{t('redesign.contrast.intro')}</p>
          </div>
          <div className="about-contrast reveal-rise">
            <div className="about-contrast__chain">
              {contrastRows.map((row, index) => (
                <article
                  key={row.role}
                  className={
                    row.role === 'Sentinel'
                      ? 'about-contrast__row about-contrast__row--sentinel'
                      : 'about-contrast__row'
                  }
                >
                  <div className="about-contrast__node" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="about-contrast__content">
                    <div className="about-contrast__lede">
                      <span>{row.role}</span>
                      <strong>{row.action}</strong>
                    </div>
                    <p>{row.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="about-contrast__closing">{t('redesign.contrast.closing')}</p>
          </div>
        </Section>

        <Section tone="light" className="about-operator-section about-team-section">
          <div className="about-team reveal-rise">
            <div className="about-team__copy">
              <p className="section-label">{t('redesign.team.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.team.title')}</h2>
              <p>{t('redesign.team.body')}</p>
              <p className="about-team__named">{t('redesign.team.named')}</p>
              <p className="about-team__area">{t('redesign.team.area')}</p>
            </div>
            <figure className="about-team__photo">
              <Image
                src="/photos/sentinel-team.webp"
                alt={t('redesign.team.photoAlt')}
                width={3996}
                height={2997}
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="about-team__photo-image"
                loading="eager"
              />
              <figcaption>{t('redesign.team.photoCaption')}</figcaption>
            </figure>
          </div>
          <div className="about-team-roster reveal-rise">
            <p className="about-team-roster__label">{t('redesign.team.rosterLabel')}</p>
            <ul>
              {teamRoster.map((member) => (
                <li key={member.name}>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="alt" id="about-boundaries" className="about-operator-section about-doctrine-section">
          <div className="about-operator-intro about-operator-intro--wide">
            <div>
              <p className="section-label">{t('redesign.boundary.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.boundary.title')}</h2>
            </div>
            <p>{t('redesign.boundary.intro')}</p>
          </div>
          <div className="about-doctrine reveal-rise">
            <DoctrineColumn title={t('redesign.boundary.isTitle')} items={isItems} tone="is" />
            <DoctrineColumn title={t('redesign.boundary.isNotTitle')} items={isNotItems} tone="isnot" />
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

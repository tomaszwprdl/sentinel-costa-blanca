'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('common');
  const serviceAreaMapLabels = {
    title: t('serviceAreaMap.title'),
    center: t('serviceAreaMap.center'),
    radius: t('serviceAreaMap.radius'),
    boundary: t('serviceAreaMap.boundary'),
    caption: t('serviceAreaMap.caption'),
  };

  return (
    <footer className="mt-[var(--space-120)] bg-authority-bg text-authority-on-dark">
      <div className="container py-14">
        <div className="grid gap-10 border-b border-authority-on-dark/15 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-end">
          <div>
            <Link href={`/${locale}`} className="inline-block" aria-label={t('nav.home')}>
              <Image
                src="/images/sentinel-logo-inverse.svg"
                alt="Sentinel"
                width={170}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-authority-on-dark/78">
              {t('meta.defaultDescription')}
            </p>
          </div>

          <div className="rounded-2xl border border-authority-on-dark/15 bg-authority-on-dark/8 p-5">
            <p className="section-label text-authority-on-dark/80">{t('footer.contact')}</p>
            <ul className="mt-4 space-y-2 text-sm text-authority-on-dark/82">
              <li>{t('contact.phone')}</li>
              <li>
                <a href={`mailto:${t('contact.email')}`} className="hover:text-authority-on-dark">
                  {t('contact.email')}
                </a>
              </li>
              <li>{t('footer.operatingHours')}: {t('contact.hours')}</li>
            </ul>
          </div>
        </div>

        <GridFrame className="gap-10 py-10">
          <Region name="authority" desktopSpan="quarter">
            <div>
              <h3 className="section-label text-authority-on-dark/80">
                {t('footer.navigation')}
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href={`/${locale}/services`} className="text-sm text-authority-on-dark/78 hover:text-authority-on-dark">
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/how-it-works`} className="text-sm text-authority-on-dark/78 hover:text-authority-on-dark">
                    {t('nav.howItWorks')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/faq`} className="text-sm text-authority-on-dark/78 hover:text-authority-on-dark">
                    {t('nav.faq')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`} className="text-sm text-authority-on-dark/78 hover:text-authority-on-dark">
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="text-sm text-authority-on-dark/78 hover:text-authority-on-dark">
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          </Region>
          <Region name="authority" desktopSpan="quarter">
            <div>
              <h3 className="section-label text-authority-on-dark/80">
                {t('footer.legal')}
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href={`/${locale}/terms`} className="text-sm text-authority-on-dark/78 hover:text-authority-on-dark">
                    {t('footer.termsConditions')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/privacy`} className="text-sm text-authority-on-dark/78 hover:text-authority-on-dark">
                    {t('footer.privacyPolicy')}
                  </Link>
                </li>
              </ul>
            </div>
          </Region>
          <Region name="authority" desktopSpan="half">
            <div>
              <h3 className="section-label text-authority-on-dark/80">
                {t('footer.serviceArea')}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-authority-on-dark/78">
                {t('footer.serviceAreaText')}
              </p>
              <ServiceAreaMap
                labels={serviceAreaMapLabels}
                compact
                inverse
                className="mt-5 max-w-sm"
              />
            </div>
          </Region>
        </GridFrame>

        <div className="border-t border-authority-on-dark/15 pt-8 text-center text-sm text-authority-on-dark/58">
          <p>
            &copy; {new Date().getFullYear()} {t('siteName')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

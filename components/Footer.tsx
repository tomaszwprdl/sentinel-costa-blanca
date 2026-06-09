'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
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
    <footer id="site-footer" className="mt-[var(--space-40)] bg-authority-bg text-authority-on-dark">
      <div className="container py-10 md:py-14">
        <div className="grid gap-7 border-b border-authority-on-dark/15 pb-8 md:gap-10 md:pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.34fr)] lg:items-start">
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

          <div className="footer-contact-card hidden rounded-2xl border border-authority-on-dark/15 bg-authority-on-dark/8 p-5 lg:block">
            <p className="section-label pt-0.5 text-authority-on-dark/80">{t('footer.contact')}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-authority-on-dark/82">
              <li>{t('contact.phone')}</li>
              <li>
                <a href={`mailto:${t('contact.email')}`} className="hover:text-authority-on-dark">
                  {t('contact.email')}
                </a>
              </li>
              <li>
                {t('footer.operatingHours')}: {t('contact.hours')}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact-strip mt-8 rounded-2xl border border-authority-on-dark/15 bg-authority-on-dark/8 p-4 md:p-5 lg:hidden">
          <p className="section-label text-authority-on-dark/80">{t('footer.contact')}</p>
          <ul className="mt-3 space-y-2 text-sm text-authority-on-dark/82">
            <li>{t('contact.phone')}</li>
            <li>
              <a href={`mailto:${t('contact.email')}`} className="hover:text-authority-on-dark">
                {t('contact.email')}
              </a>
            </li>
            <li>
              {t('footer.operatingHours')}: {t('contact.hours')}
            </li>
          </ul>
        </div>

        <div className="grid-frame gap-8 py-8 md:gap-10 md:py-10">
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
            <div className="footer-service-area">
              <h3 className="section-label text-authority-on-dark/80">
                {t('footer.serviceArea')}
              </h3>
              <p className="mt-3 max-w-md break-words text-sm leading-relaxed text-authority-on-dark/78">
                {t('footer.serviceAreaText')}
              </p>
              <ServiceAreaMap
                labels={serviceAreaMapLabels}
                compact
                inverse
                className="footer-service-area-map mt-4 min-w-0 max-w-full"
              />
            </div>
          </Region>
        </div>

        <div className="border-t border-authority-on-dark/15 pt-6 text-center text-sm text-authority-on-dark/58 md:pt-8">
          <p>
            &copy; {new Date().getFullYear()} {t('siteName')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

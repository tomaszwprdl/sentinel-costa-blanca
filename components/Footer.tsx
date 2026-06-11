'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Region from '@/components/layout/Region';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('common');

  return (
    <footer id="site-footer" className="site-footer text-authority-on-dark">
      <div className="container py-9 md:py-10">
        <div className="border-b border-authority-on-dark/15 pb-7 md:pb-8">
          <Link href={`/${locale}`} className="inline-block" aria-label={t('nav.home')}>
            <Image
              src="/images/sentinel-logo-inverse.svg"
              alt="Sentinel"
              width={170}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="site-footer__brand-line mt-5 max-w-xl text-base leading-relaxed">
            {t('footer.brandLine')}
          </p>
          <p className="site-footer__area-line mt-3 max-w-xl text-sm leading-relaxed">
            {t('footer.serviceAreaLine')}
          </p>
        </div>

        <div className="grid-frame gap-7 py-7 md:gap-8 md:py-8">
          <Region name="authority" desktopSpan="quarter">
            <div>
              <h3 className="site-footer__column-label section-label">
                {t('footer.navigation')}
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href={`/${locale}/services`} className="site-footer__nav-link text-sm">
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/how-it-works`} className="site-footer__nav-link text-sm">
                    {t('nav.howItWorks')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/faq`} className="site-footer__nav-link text-sm">
                    {t('nav.faq')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`} className="site-footer__nav-link text-sm">
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="site-footer__nav-link text-sm">
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          </Region>
          <Region name="authority" desktopSpan="quarter">
            <div>
              <h3 className="site-footer__column-label section-label">
                {t('footer.legal')}
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href={`/${locale}/terms`} className="site-footer__nav-link text-sm">
                    {t('footer.termsConditions')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/privacy`} className="site-footer__nav-link text-sm">
                    {t('footer.privacyPolicy')}
                  </Link>
                </li>
              </ul>
            </div>
          </Region>
          <Region name="authority" desktopSpan="half" className="footer-contact-region">
            <div className="footer-contact-panel">
              <p className="site-footer__column-label section-label">{t('footer.contact')}</p>
              <div className="footer-contact-panel__items">
                <p className="footer-contact-panel__phone">
                  <a
                    href={`tel:${t('contact.phone').replace(/\s+/g, '')}`}
                    className="hover:text-authority-on-dark"
                  >
                    {t('contact.phone')}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${t('contact.email')}`} className="hover:text-authority-on-dark">
                    {t('contact.email')}
                  </a>
                </p>
                <p>
                  {t('footer.operatingHours')}: {t('contact.hours')}
                </p>
              </div>
            </div>
          </Region>
        </div>

        <div className="site-footer__copyright border-t border-authority-on-dark/15 pt-6 text-center text-sm md:pt-8">
          <p>
            &copy; {new Date().getFullYear()} {t('siteName')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

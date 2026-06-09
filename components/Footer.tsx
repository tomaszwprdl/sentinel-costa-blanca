'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Region from '@/components/layout/Region';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('common');

  return (
    <footer id="site-footer" className="mt-[var(--space-40)] bg-authority-bg text-authority-on-dark">
      <div className="container py-10 md:py-14">
        <div className="border-b border-authority-on-dark/15 pb-8 md:pb-10">
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
            {t('footer.brandLine')}
          </p>
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
            <div className="footer-contact-panel">
              <p className="section-label text-authority-on-dark/80">{t('footer.contact')}</p>
              <div className="mt-5 grid gap-3 text-sm text-authority-on-dark/84">
                <p className="mb-0 text-lg font-semibold leading-tight text-authority-on-dark">
                  {t('contact.phone')}
                </p>
                <p className="mb-0 leading-tight">
                  <a href={`mailto:${t('contact.email')}`} className="hover:text-authority-on-dark">
                    {t('contact.email')}
                  </a>
                </p>
                <p className="mb-0 leading-tight">
                  {t('footer.operatingHours')}: {t('contact.hours')}
                </p>
              </div>
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

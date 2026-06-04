'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('common');

  return (
    <footer className="mt-[var(--space-120)] border-t border-authority-on-dark/20 bg-authority-bg text-authority-on-dark">
      <div className="container py-10">
        <div className="mb-10">
          <Link href={`/${locale}`} className="inline-block" aria-label={t('nav.home')}>
            <Image
              src="/images/sentinel-logo-inverse.svg"
              alt="Sentinel"
              width={120}
              height={28}
              className="object-contain"
            />
          </Link>
        </div>
        <GridFrame className="gap-10">
          <Region name="authority" desktopSpan="quarter">
            <div>
            <h3 className="section-label text-authority-on-dark/90">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/services`} className="text-sm text-authority-on-dark/80 hover:text-authority-on-dark transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/how-it-works`} className="text-sm text-authority-on-dark/80 hover:text-authority-on-dark transition-colors">
                  {t('nav.howItWorks')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-sm text-authority-on-dark/80 hover:text-authority-on-dark transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-authority-on-dark/80 hover:text-authority-on-dark transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-authority-on-dark/80 hover:text-authority-on-dark transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
            </div>
          </Region>
          <Region name="authority" desktopSpan="quarter">
            <div>
            <h3 className="section-label text-authority-on-dark/90">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/terms`} className="text-sm text-authority-on-dark/80 hover:text-authority-on-dark transition-colors">
                  {t('footer.termsConditions')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="text-sm text-authority-on-dark/80 hover:text-authority-on-dark transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
            </div>
          </Region>
          <Region name="authority" desktopSpan="quarter">
            <div>
            <h3 className="section-label text-authority-on-dark/90">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-authority-on-dark/80">
              <li className="hover:text-authority-on-dark transition-colors">{t('contact.phone')}</li>
              <li>
                <a href={`mailto:${t('contact.email')}`} className="hover:text-authority-on-dark transition-colors">
                  {t('contact.email')}
                </a>
              </li>
              <li>{t('footer.operatingHours')}: {t('contact.hours')}</li>
            </ul>
            </div>
          </Region>
          <Region name="authority" desktopSpan="quarter">
            <div>
            <h3 className="section-label text-authority-on-dark/90">
              {t('footer.serviceArea')}
            </h3>
            <p className="text-sm text-authority-on-dark/80 leading-relaxed">
              {t('footer.serviceAreaText')}
            </p>
            </div>
          </Region>
        </GridFrame>
        <div className="mt-10 pt-10 border-t border-authority-on-dark/20 text-sm text-authority-on-dark/60 text-center">
          <p>
            © {new Date().getFullYear()} {t('siteName')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

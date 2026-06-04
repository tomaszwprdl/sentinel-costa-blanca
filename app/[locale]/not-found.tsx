'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations('notFound');

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1>{t('title')}</h1>
          <p className="text-lg text-body mb-10">
            {t('body')}
          </p>
          <div className="space-y-5">
            <p className="text-muted mb-5">{t('returnTo')}</p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href={`/${locale}`} className="btn-primary">
                {t('home')}
              </Link>
              <Link href={`/${locale}/contact`} className="btn-secondary">
                {t('contact')}
              </Link>
            </div>
            <p className="text-sm text-muted mt-10">
              {t('contactPrompt')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Source_Serif_4, Inter } from 'next/font/google';
import { locales, type Locale, getMessages } from '@/lib/i18n';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import MotionObserver from '@/components/MotionObserver';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale as Locale);
  const common = messages?.common as { meta?: { defaultTitle?: string; defaultDescription?: string } } | undefined;
  const title = common?.meta?.defaultTitle ?? 'Sentinel';
  const description = common?.meta?.defaultDescription ?? undefined;
  const preLiveReview = process.env.PRE_LIVE_REVIEW === 'true';
  return {
    title,
    description,
    ...(preLiveReview
      ? { robots: { index: false, follow: false, googleBot: { index: false, follow: false } } }
      : {}),
    icons: {
      icon: [
        { url: '/images/sentinel-mark-primary.svg', type: 'image/svg+xml', sizes: 'any' },
      ],
    },
    openGraph: {
      title,
      description: description ?? undefined,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);

  const themeScript = `
// Light-first: ignores prefers-color-scheme unless a future "System" mode is added.
(function() {
  var key = 'sentinel-theme';
  var stored = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
  var theme = stored === 'dark' || stored === 'light' ? stored : 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();
`;

  return (
    <html lang={locale} className={`${sourceSerif.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MotionObserver />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

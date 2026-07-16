import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

const baseUrl = 'https://sentinelcostablanca.com';

// Public pages mounted under app/[locale]. '' is the locale home.
const routes = ['', 'services', 'how-it-works', 'faq', 'about', 'contact', 'terms', 'privacy'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: route ? `${baseUrl}/${locale}/${route}` : `${baseUrl}/${locale}`,
    }))
  );
}

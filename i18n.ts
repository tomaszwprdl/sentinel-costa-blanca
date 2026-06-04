import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './lib/i18n';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || defaultLocale;
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});

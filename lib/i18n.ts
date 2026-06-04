export const locales = ['en', 'pl'] as const;
export const defaultLocale = 'pl';
export type Locale = typeof locales[number];

export async function getMessages(locale: Locale) {
  const messages = await import(`@/messages/${locale}.json`);
  return messages.default;
}

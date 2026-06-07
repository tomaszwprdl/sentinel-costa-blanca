'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageControl() {
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'en' ? 'pl' : 'en';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <div className="locale-switch">
      <Link
        href={locale === 'pl' ? pathname : switchPath}
        className="locale-switch__link"
        aria-current={locale === 'pl' ? 'page' : undefined}
      >
        PL
      </Link>
      <Link
        href={locale === 'en' ? pathname : switchPath}
        className="locale-switch__link"
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        EN
      </Link>
    </div>
  );
}

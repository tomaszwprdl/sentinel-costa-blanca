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
    <div className="flex h-8 items-center border border-structural-light rounded-sm overflow-hidden leading-none">
      <Link
        href={locale === 'pl' ? pathname : switchPath}
        className={`flex items-center justify-center h-full px-2.5 text-xs font-medium transition-opacity duration-150 ${
          locale === 'pl'
            ? 'bg-authority-bg text-authority-on-dark'
            : 'bg-transparent text-body hover:opacity-80'
        }`}
        aria-current={locale === 'pl' ? 'page' : undefined}
      >
        PL
      </Link>
      <Link
        href={locale === 'en' ? pathname : switchPath}
        className={`flex items-center justify-center h-full px-2.5 text-xs font-medium transition-opacity duration-150 ${
          locale === 'en'
            ? 'bg-authority-bg text-authority-on-dark'
            : 'bg-transparent text-body hover:opacity-80'
        }`}
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        EN
      </Link>
    </div>
  );
}

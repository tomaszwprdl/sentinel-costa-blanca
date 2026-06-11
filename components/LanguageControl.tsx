'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

function LanguageControlInner() {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const localizedPath = (targetLocale: string) => {
    const base = pathname.replace(`/${locale}`, `/${targetLocale}`);
    return queryString ? `${base}?${queryString}` : base;
  };

  return (
    <div className="locale-switch">
      <Link
        href={localizedPath('pl')}
        className="locale-switch__link"
        aria-current={locale === 'pl' ? 'page' : undefined}
      >
        PL
      </Link>
      <Link
        href={localizedPath('en')}
        className="locale-switch__link"
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        EN
      </Link>
    </div>
  );
}

export default function LanguageControl() {
  return (
    <Suspense
      fallback={
        <div className="locale-switch">
          <span className="locale-switch__link">PL</span>
          <span className="locale-switch__link">EN</span>
        </div>
      }
    >
      <LanguageControlInner />
    </Suspense>
  );
}

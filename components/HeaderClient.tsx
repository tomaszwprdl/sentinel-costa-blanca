'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import ThemeSwitch from '@/components/ThemeSwitch';
import LanguageControl from '@/components/LanguageControl';

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="hamburger-icon relative block h-4 w-5" aria-hidden>
      <span className={`hamburger-line absolute left-0 top-0 h-0.5 w-5 r transition-transform duration-150 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
      <span className={`hamburger-line absolute left-0 top-[7px] h-0.5 w-5 r transition-opacity duration-150 ${open ? 'opacity-0' : ''}`} />
      <span className={`hamburger-line absolute left-0 top-[14px] h-0.5 w-5 r transition-transform duration-150 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
    </span>
  );
}

export default function HeaderClient() {
  const locale = useLocale();
  const t = useTranslations('common');
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/how-it-works`, label: t('nav.howItWorks') },
    { href: `/${locale}/faq`, label: t('nav.faq') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-structural-light/80 bg-surface-card/90 shadow-[0_10px_30px_rgba(16,38,63,0.08)] backdrop-blur-xl">
      <div className="container flex min-h-[76px] items-center justify-between gap-5">
        <Link
          href={`/${locale}`}
          aria-label={t('menu.home')}
          title={t('menu.home')}
          className="flex min-w-0 items-center hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-support r"
        >
          <Image
            src="/images/sentinel-logo-primary.svg"
            alt="Sentinel"
            width={184}
            height={42}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="site-nav hidden lg:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="site-nav__link focus:outline-none focus-visible:ring-2 focus-visible:ring-support"
              onClick={() => setNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-4 border-l border-structural-light pl-4 lg:flex">
            <LanguageControl />
            <ThemeSwitch />
          </div>
          <button
            type="button"
            className="mobile-menu-button focus:outline-none focus-visible:ring-2 focus-visible:ring-support"
            onClick={() => setNavOpen((o) => !o)}
            aria-expanded={navOpen}
            aria-controls="header-nav-links"
            aria-label={navOpen ? t('menu.close') : t('menu.open')}
          >
            <HamburgerIcon open={navOpen} />
          </button>
        </div>
      </div>

      {navOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-structural-light bg-surface-card shadow-[0_22px_44px_rgba(16,38,63,0.14)] lg:hidden">
          <div className="container py-3">
            <div className="mb-3 flex items-center gap-4 border-b border-structural-light pb-3">
              <LanguageControl />
              <ThemeSwitch />
            </div>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-xl px-4 py-4 text-sm font-semibold text-body hover:bg-surface-light-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-support"
                onClick={() => setNavOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

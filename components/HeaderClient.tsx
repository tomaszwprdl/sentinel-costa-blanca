'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import ThemeSwitch from '@/components/ThemeSwitch';
import LanguageControl from '@/components/LanguageControl';

/** Authority bar height: 68 | 72 (baseline) | 76. Change here to test; lock after viewport check. */
const AUTHORITY_BAR_HEIGHT = 72;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="block w-5 h-4 relative" aria-hidden>
      <span className={`absolute left-0 top-0 w-5 h-0.5 bg-body rounded-full transition-transform duration-150 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
      <span className={`absolute left-0 top-[7px] w-5 h-0.5 bg-body rounded-full transition-opacity duration-150 ${open ? 'opacity-0' : ''}`} />
      <span className={`absolute left-0 top-[14px] w-5 h-0.5 bg-body rounded-full transition-transform duration-150 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
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
    <header className="relative w-full sticky top-0 z-50">
      {/* LAYER 1 — AUTHORITY */}
      <div className="w-full bg-authority-bg">
        <div className="container flex items-center pl-6 md:pl-8" style={{ height: `${AUTHORITY_BAR_HEIGHT}px` }}>
          <Link
            href={`/${locale}`}
            aria-label={t('menu.home')}
            title={t('menu.home')}
            className="block w-fit hover:opacity-95 hover:brightness-[0.98] transition-[opacity,filter] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-support focus-visible:ring-offset-2 rounded-sm"
          >
            <div className="min-w-[200px] h-12 flex items-center relative translate-y-[1px]">
              <Image
                src="/images/sentinel-logo-inverse.svg"
                alt="Sentinel"
                width={216}
                height={48}
                className="h-12 w-auto object-contain object-left select-none"
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      {/* LAYER 2 — OPERATIONAL: nav + controls, both grid-bound */}
      <div className="w-full bg-surface-light border-b border-structural-light">
        <div className="container h-16 flex items-center justify-between">
          <nav className="flex items-center">
            <button
              type="button"
              className="md:hidden p-2 -ml-2 text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-support focus-visible:ring-offset-2 rounded-sm"
              onClick={() => setNavOpen((o) => !o)}
              aria-expanded={navOpen}
              aria-controls="header-nav-links"
              aria-label={navOpen ? t('menu.close') : t('menu.open')}
            >
              <HamburgerIcon open={navOpen} />
            </button>
            <div
              id="header-nav-links"
              className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-10 leading-none"
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-normal text-body/90 hover:text-body transition-colors duration-150 py-2 leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-support focus-visible:ring-offset-2 rounded-sm"
                  onClick={() => setNavOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="shrink-0 flex items-center gap-5 pl-6 border-l border-structural-light">
            <LanguageControl />
            <ThemeSwitch />
          </div>
        </div>
      </div>
      {/* Mobile dropdown panel */}
      {navOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-light border-b border-structural-light">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-5 px-5 text-sm font-normal text-body/90 leading-none hover:text-body border-t border-structural-light first:border-t-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-support focus-visible:ring-inset"
              onClick={() => setNavOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

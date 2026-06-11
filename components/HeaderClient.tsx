'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [navMounted, setNavMounted] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const navLinks = [
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/how-it-works`, label: t('nav.howItWorks') },
    { href: `/${locale}/faq`, label: t('nav.faq') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  const isCurrent = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openNav = () => {
    clearCloseTimer();
    setNavMounted(true);
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setNavMounted(false);
      closeTimerRef.current = null;
    }, 220);
  };

  const toggleNav = () => {
    if (navOpen) {
      closeNav();
      return;
    }

    openNav();
  };

  useEffect(() => {
    if (navOpen) {
      document.documentElement.setAttribute('data-mobile-menu-open', 'true');
    } else {
      document.documentElement.removeAttribute('data-mobile-menu-open');
    }
  }, [navOpen]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
      document.documentElement.removeAttribute('data-mobile-menu-open');
    };
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 w-full">
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
              aria-current={isCurrent(href) ? 'page' : undefined}
              className="site-nav__link focus:outline-none focus-visible:ring-2 focus-visible:ring-support"
              onClick={closeNav}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-controls flex shrink-0 items-center gap-2 lg:gap-3">
          <div className="header-locale-mobile lg:hidden">
            <LanguageControl />
          </div>
          <div className="hidden items-center gap-4 border-l border-structural-light pl-4 lg:flex">
            <LanguageControl />
            <ThemeSwitch />
          </div>
          <button
            type="button"
            className="mobile-menu-button focus:outline-none focus-visible:ring-2 focus-visible:ring-support"
            onClick={toggleNav}
            aria-expanded={navOpen}
            aria-controls="header-nav-links"
            aria-label={navOpen ? t('menu.close') : t('menu.open')}
          >
            <HamburgerIcon open={navOpen} />
          </button>
        </div>
      </div>

      {navMounted && (
        <div
          id="header-nav-links"
          className={`mobile-nav-panel absolute left-0 right-0 top-full lg:hidden ${navOpen ? 'mobile-nav-panel--open' : ''}`}
          aria-hidden={!navOpen}
        >
          <div className="container py-3">
            <div className="mobile-nav-controls flex items-center gap-4 border-b border-structural-light">
              <LanguageControl />
              <ThemeSwitch />
            </div>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                tabIndex={navOpen ? undefined : -1}
                aria-current={isCurrent(href) ? 'page' : undefined}
                className="mobile-nav-link block rounded-xl px-4 py-4 text-sm font-semibold text-body hover:bg-surface-light-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-support"
                onClick={closeNav}
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

'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import SunIcon from '@/components/icons/SunIcon';
import MoonIcon from '@/components/icons/MoonIcon';

const STORAGE_KEY = 'sentinel-theme';
type Theme = 'light' | 'dark';

function getTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark' || attr === 'light') return attr;
  return 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

export default function ThemeSwitch() {
  const t = useTranslations('common.theme');
  const [theme, setTheme] = useState<Theme>(getTheme);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    applyTheme(next);
  };

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-2.5 h-8">
      <SunIcon className="w-4 h-4 text-body opacity-80" />
      <button
        type="button"
        onClick={toggle}
        className="flex items-center relative w-10 h-5 bg-structural-light r focus:outline-none focus-visible:ring-2 focus-visible:ring-support focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
        aria-label={isDark ? t('switchToLight') : t('switchToDark')}
        title={isDark ? t('switchToLight') : t('switchToDark')}
      >
        <span
          className="absolute top-1 w-3 h-3 bg-authority-on-dark r transition-[left] duration-150"
          style={{ left: isDark ? '22px' : '4px' }}
        />
      </button>
      <MoonIcon className="w-4 h-4 text-body opacity-80" />
    </div>
  );
}

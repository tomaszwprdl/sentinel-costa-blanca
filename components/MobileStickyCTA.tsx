'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MobileStickyCTAProps {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showAfter?: number;
  suppressWhenVisible?: string;
}

export default function MobileStickyCTA({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  showAfter = 560,
  suppressWhenVisible,
}: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const secondaryAction = secondaryHref && secondaryLabel ? { href: secondaryHref, label: secondaryLabel } : null;

  useEffect(() => {
    const STICKY_BAND_HEIGHT = 88;

    const overlapsStickyBand = (node: Element | null) => {
      if (!node) {
        return false;
      }

      const rect = node.getBoundingClientRect();
      const bandTop = window.innerHeight - STICKY_BAND_HEIGHT;

      return rect.top < window.innerHeight && rect.bottom > bandTop;
    };

    const updateState = () => {
      setVisible(window.scrollY > showAfter);

      const suppressSelectors = suppressWhenVisible
        ? suppressWhenVisible.split(',').map((selector) => selector.trim()).filter(Boolean)
        : [];
      const defaultSuppressSelectors = ['footer', '#site-footer', '.site-footer'];
      const allSuppressSelectors = [...new Set([...defaultSuppressSelectors, ...suppressSelectors])];
      const targetBlocked = allSuppressSelectors.some((selector) =>
        Array.from(document.querySelectorAll(selector)).some((node) => overlapsStickyBand(node)),
      );
      const nearPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - STICKY_BAND_HEIGHT - 8;

      setBlocked(targetBlocked || nearPageBottom);
    };

    const frame = window.requestAnimationFrame(updateState);
    const interval = window.setInterval(updateState, 250);
    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(interval);
      window.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [showAfter, suppressWhenVisible]);

  if (!visible || blocked) {
    return null;
  }

  return (
    <div className="mobile-sticky-cta fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="visual-card-strong flex items-center gap-2 p-2 shadow-[0_18px_46px_rgba(16,38,63,0.28)]">
        <Link href={primaryHref} className="btn-primary flex-1 px-4 py-3 text-sm">
          {primaryLabel}
        </Link>
        {secondaryAction && (
          <Link href={secondaryAction.href} className="btn-secondary flex-1 px-4 py-3 text-sm">
            {secondaryAction.label}
          </Link>
        )}
      </div>
    </div>
  );
}

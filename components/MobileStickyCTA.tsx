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
    const intersectsViewport = (node: Element | null, topRatio = 0, bottomRatio = 1) => {
      if (!node) {
        return false;
      }

      const rect = node.getBoundingClientRect();
      const topLimit = window.innerHeight * topRatio;
      const bottomLimit = window.innerHeight * bottomRatio;

      return rect.top < bottomLimit && rect.bottom > topLimit;
    };

    const updateState = () => {
      setVisible(window.scrollY > showAfter);

      const footerBlocked = intersectsViewport(document.querySelector('footer'), 0, 1);
      const suppressSelectors = suppressWhenVisible
        ? suppressWhenVisible.split(',').map((selector) => selector.trim()).filter(Boolean)
        : [];
      const targetBlocked = suppressSelectors.some((selector) =>
        Array.from(document.querySelectorAll(selector)).some((node) =>
          intersectsViewport(node, 0.06, 0.94),
        ),
      );

      setBlocked(footerBlocked || targetBlocked);
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

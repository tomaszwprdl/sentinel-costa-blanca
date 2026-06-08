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
  const [footerVisible, setFooterVisible] = useState(false);
  const [suppressionState, setSuppressionState] = useState<{ selector?: string; active: boolean }>({
    active: false,
  });
  const secondaryAction = secondaryHref && secondaryLabel ? { href: secondaryHref, label: secondaryLabel } : null;
  const suppressed =
    Boolean(suppressWhenVisible) &&
    suppressionState.selector === suppressWhenVisible &&
    suppressionState.active;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const footer = document.querySelector('footer');
    let observer: IntersectionObserver | undefined;
    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { rootMargin: '0px 0px -12% 0px' },
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, [showAfter]);

  useEffect(() => {
    if (!suppressWhenVisible) {
      return;
    }

    const nodes = Array.from(document.querySelectorAll(suppressWhenVisible));
    if (nodes.length === 0) {
      return;
    }

    const visibleNodes = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleNodes.add(entry.target);
          } else {
            visibleNodes.delete(entry.target);
          }
        });
        setSuppressionState({ selector: suppressWhenVisible, active: visibleNodes.size > 0 });
      },
      { rootMargin: '-16% 0px -24% 0px', threshold: 0.01 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [suppressWhenVisible]);

  if (!visible || footerVisible || suppressed) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
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

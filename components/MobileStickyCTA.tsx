'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MobileStickyCTAProps {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export default function MobileStickyCTA({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
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
  }, []);

  if (!visible || footerVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="visual-card-strong flex items-center gap-2 p-2 shadow-[0_18px_46px_rgba(16,38,63,0.28)]">
        <Link href={primaryHref} className="btn-primary flex-1 px-4 py-3 text-sm">
          {primaryLabel}
        </Link>
        <Link href={secondaryHref} className="btn-secondary flex-1 px-4 py-3 text-sm">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}

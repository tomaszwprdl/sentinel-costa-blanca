'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const MOTION_SELECTOR = [
  '.motion-reveal',
  '.motion-step',
  '.motion-diagram',
  '.process-sequence > *',
  '.storyboard-card',
  '.timeline-card',
].join(',');

export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(MOTION_SELECTOR));

    if (nodes.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

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
  '.reveal-rise',
  '.reveal-stagger',
  '.gfx-field',
].join(',');

export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsObserver = 'IntersectionObserver' in window;

    // Fail-safe path: reveal everything immediately, including content that
    // mounts later (e.g. Suspense-deferred client pages like Contact).
    if (reducedMotion || !supportsObserver) {
      const revealAll = () =>
        document
          .querySelectorAll<HTMLElement>(MOTION_SELECTOR)
          .forEach((node) => node.classList.add('is-visible'));

      revealAll();
      const mutation = new MutationObserver(revealAll);
      mutation.observe(document.body, { childList: true, subtree: true });
      return () => mutation.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal on entry, or if the element has already been scrolled past
          // (covers content that mounts late — e.g. Suspense — below the fold).
          if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    const observed = new WeakSet<Element>();
    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(MOTION_SELECTOR).forEach((node) => {
        if (!observed.has(node)) {
          observed.add(node);
          observer.observe(node);
        }
      });
    };

    observeAll();

    // Catch content that mounts after the first pass (Suspense, client reveals,
    // search-filtered lists) without re-querying on every micro-mutation.
    let frame = 0;
    const scheduleObserve = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        observeAll();
      });
    };

    const mutation = new MutationObserver(scheduleObserve);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pathname]);

  return null;
}

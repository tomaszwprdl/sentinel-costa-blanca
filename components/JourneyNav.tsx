'use client';

import { useEffect, useState } from 'react';

export type JourneyNavItem = {
  id: string;
  label: string;
};

interface JourneyNavProps {
  items: JourneyNavItem[];
  ariaLabel: string;
  className?: string;
}

export default function JourneyNav({
  items,
  ariaLabel,
  className = '',
}: JourneyNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0 || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-32% 0px -58% 0px', threshold: [0, 0.08, 0.2] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={`journey-nav ${className}`} aria-label={ariaLabel}>
      <div className="container">
        <div className="journey-nav__track">
          {items.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="journey-nav__link"
                onClick={() => setActiveId(item.id)}
              >
                <span className="journey-nav__marker" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

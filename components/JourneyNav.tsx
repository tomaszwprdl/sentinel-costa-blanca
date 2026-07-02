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

    // Recompute from live geometry on every callback: fast scrolls batch
    // entries so a section's exit can arrive alone, which would otherwise
    // keep the previous section highlighted while the next one fills the
    // viewport. The reading line sits on the observation band's bottom edge
    // (42% viewport, matching the rootMargin below) because that is exactly
    // where entry/exit events fire; the epsilon absorbs rounding at the edge.
    const syncActive = () => {
      const line = window.innerHeight * 0.42 + 2;
      let nextId = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) {
          nextId = section.id;
        } else {
          break;
        }
      }
      setActiveId(nextId);
    };

    const observer = new IntersectionObserver(syncActive, {
      rootMargin: '-32% 0px -58% 0px',
      threshold: [0, 0.08, 0.2],
    });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="journey-nav-shell">
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
    </div>
  );
}

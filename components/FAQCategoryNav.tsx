'use client';

import { useEffect, useRef, useState } from 'react';

interface CategoryItem {
  id: string;
  targetId: string;
  title: string;
  body: string;
}

interface FAQCategoryNavProps {
  eyebrow: string;
  title: string;
  intro: string;
  categories: CategoryItem[];
}

export default function FAQCategoryNav({
  eyebrow,
  title,
  intro,
  categories,
}: FAQCategoryNavProps) {
  const [activeCardId, setActiveCardId] = useState(categories[0]?.id ?? '');
  const lastClickedRef = useRef<string | null>(null);

  useEffect(() => {
    const targetIds = [...new Set(categories.map((category) => category.targetId))];
    const sections = targetIds
      .map((targetId) => document.getElementById(targetId))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0 || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const visibleTargetId = visible[0]?.target.id;
        if (!visibleTargetId) {
          return;
        }

        const matchingCards = categories.filter((category) => category.targetId === visibleTargetId);
        const preferredCard = matchingCards.find((category) => category.id === lastClickedRef.current)
          ?? matchingCards[0];

        if (preferredCard) {
          setActiveCardId(preferredCard.id);
        }
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.08, 0.18] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categories]);

  return (
    <div>
      <div className="mb-8 max-w-[760px]">
        <p className="section-label">{eyebrow}</p>
        <h2 className="h2-system mt-3">{title}</h2>
        <p className="mt-3 text-body">{intro}</p>
      </div>
      <nav className="reveal-stagger grid gap-3 md:grid-cols-2 lg:grid-cols-4" aria-label={title}>
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.targetId}`}
            aria-current={activeCardId === category.id ? 'true' : undefined}
            data-selected={activeCardId === category.id}
            onClick={() => {
              lastClickedRef.current = category.id;
              setActiveCardId(category.id);
            }}
            className="faq-category-link selected-option p-4 no-underline"
          >
            <span className="block text-sm font-black text-heading">{category.title}</span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">{category.body}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

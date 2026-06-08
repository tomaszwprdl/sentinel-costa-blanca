'use client';

import { useEffect, useState } from 'react';

interface CategoryItem {
  id: string;
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
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.id))
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
      <nav className="grid gap-3 md:grid-cols-2 lg:grid-cols-4" aria-label={title}>
        {categories.map((category) => (
          <a
            key={`${category.id}-${category.title}`}
            href={`#${category.id}`}
            aria-current={activeId === category.id ? 'true' : undefined}
            data-selected={activeId === category.id}
            onClick={() => setActiveId(category.id)}
            className="faq-category-link selected-option visual-card p-4 no-underline transition hover:border-accent"
          >
            <span className="block text-sm font-black text-heading">{category.title}</span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">{category.body}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

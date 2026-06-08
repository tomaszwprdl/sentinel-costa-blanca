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
            className="visual-card p-4 no-underline transition hover:border-accent"
          >
            <span className="block text-sm font-black text-heading">{category.title}</span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">{category.body}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

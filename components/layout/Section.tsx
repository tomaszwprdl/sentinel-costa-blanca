import { type ReactNode } from 'react';

type SectionVariant = 'section' | 'major';
type SectionTone = 'light' | 'alt' | 'authority';

const toneClass: Record<SectionTone, string> = {
  light: 'bg-surface-light',
  alt: 'bg-surface-light-alt',
  authority: 'bg-authority-bg text-authority-on-dark',
};

const variantClass: Record<SectionVariant, string> = {
  section: 'section-primitive',
  major: 'section-primitive--major',
};

interface SectionProps {
  variant?: SectionVariant;
  tone?: SectionTone;
  as?: 'section';
  className?: string;
  id?: string;
  children: ReactNode;
}

export default function Section({
  variant = 'section',
  tone = 'light',
  as: Component = 'section',
  className = '',
  id,
  children,
}: SectionProps) {
  const classes = [
    toneClass[tone],
    variantClass[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} id={id}>
      <div className="container">
        {children}
      </div>
    </Component>
  );
}

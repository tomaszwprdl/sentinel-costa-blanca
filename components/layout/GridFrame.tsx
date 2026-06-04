import { type ReactNode } from 'react';

/**
 * Alignment grid per LAYOUT §6.1–§6.3, §12 (Task 5D-1C).
 * Mobile ≤640px: 4 columns. Tablet 641–1024px: 8 columns. Desktop ≥1025px: 12 columns.
 * Uses .container (1120px cap) and --space-20 gutters. No decorative behavior.
 */
interface GridFrameProps {
  children: ReactNode;
  className?: string;
}

export default function GridFrame({ children, className = '' }: GridFrameProps) {
  const classes = ['container', 'grid-frame', className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
}

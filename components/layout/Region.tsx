import { type ReactNode } from 'react';

export type RegionName = 'authority' | 'main' | 'support';
export type TabletSpan = 'full' | 'half';
export type DesktopSpan = 'full' | 'half' | 'third' | 'quarter';

/**
 * Semantic region per LAYOUT Task 5D-1C. Aligned to GridFrame (4/8/12).
 * Mobile: all regions full width. Tablet: stacked by default; only support may use 2-col (half).
 * Desktop: full | half | third | quarter. Text width (720px) preserved inside; max 3 logical blocks per section.
 */
interface RegionProps {
  name: RegionName;
  /** Tablet: full (stacked) or half. Half allowed only for name="support". */
  tabletSpan?: TabletSpan;
  /** Desktop: full, half, third, or quarter. */
  desktopSpan?: DesktopSpan;
  children: ReactNode;
  className?: string;
}

export default function Region({
  name,
  tabletSpan = 'full',
  desktopSpan = 'full',
  children,
  className = '',
}: RegionProps) {
  if (tabletSpan === 'half' && name !== 'support') {
    tabletSpan = 'full';
  }
  const classes = [
    'region-m-full',
    tabletSpan === 'half' ? 'region-tb-half' : 'region-tb-full',
    desktopSpan === 'half' ? 'region-dt-half' : desktopSpan === 'third' ? 'region-dt-third' : desktopSpan === 'quarter' ? 'region-dt-quarter' : 'region-dt-full',
    className,
  ].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
}

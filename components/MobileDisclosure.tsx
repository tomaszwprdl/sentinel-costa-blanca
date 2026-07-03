'use client';

import { useId, useState, type ReactNode } from 'react';
import ChevronIcon from '@/components/icons/ChevronIcon';

interface MobileDisclosureProps {
  title: string;
  summary: string;
  openLabel: string;
  closeLabel: string;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export default function MobileDisclosure({
  title,
  summary,
  openLabel,
  closeLabel,
  children,
  className = '',
  defaultOpen = false,
}: MobileDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();
  const contentId = `mobile-disclosure-${id}`;

  return (
    <div className={`mobile-disclosure ${className}`} data-open={isOpen ? 'true' : 'false'}>
      <button
        type="button"
        className="mobile-disclosure__trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="mobile-disclosure__copy">
          <span className="mobile-disclosure__title">{title}</span>
          <span className="mobile-disclosure__summary">{summary}</span>
        </span>
        <span className="mobile-disclosure__action">
          <span className="mobile-disclosure__state">{isOpen ? closeLabel : openLabel}</span>
          <ChevronIcon className={`mobile-disclosure__icon ${isOpen ? 'mobile-disclosure__icon--open' : ''}`} />
        </span>
      </button>
      <div id={contentId} className="mobile-disclosure__body" role="region">
        {children}
      </div>
    </div>
  );
}

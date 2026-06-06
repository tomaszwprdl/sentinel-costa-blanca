'use client';

import { useState, useId, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import ChevronIcon from '@/components/icons/ChevronIcon';

interface DisclosureBlockProps {
  label: string;
  explainer?: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export default function DisclosureBlock({
  label,
  explainer,
  children,
  defaultExpanded = false,
  className = '',
}: DisclosureBlockProps) {
  const t = useTranslations('common.disclosure');
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const id = useId();
  const contentId = `disclosure-content-${id}`;
  const buttonId = `disclosure-button-${id}`;

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={`border border-structural-light bg-surface-card r overflow-hidden ${className}`}>
      <button
        id={buttonId}
        type="button"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className="w-full px-5 py-5 text-left flex items-center justify-between bg-surface-card hover:bg-surface-light-alt transition-colors focus:outline-none focus:ring-2 focus:ring-support focus:ring-offset-2"
      >
        <div className="flex-1 pr-4">
          <div className="font-semibold text-authority text-base">{label}</div>
          {explainer && (
            <div className="text-sm text-muted mt-1">{explainer}</div>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-sm text-body hover:underline">{isExpanded ? t('hideDetails') : t('showDetails')}</span>
          <ChevronIcon
            className={`h-4 w-4 text-structural-a transition-transform duration-200 ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>
      {isExpanded && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-structural-light px-5 py-5 bg-surface-light-alt"
        >
          {children}
        </div>
      )}
    </div>
  );
}

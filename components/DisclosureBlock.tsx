'use client';

import { useState, useId, ReactNode } from 'react';
import { useTranslations } from 'next-intl';

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
    <div className={`border border-structural-light ${className}`}>
      <button
        id={buttonId}
        type="button"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className="w-full px-5 py-5 text-left flex items-center justify-between hover:bg-surface-card transition-colors focus:outline-none focus:ring-2 focus:ring-support focus:ring-offset-2"
      >
        <div className="flex-1 pr-4">
          <div className="font-semibold text-authority text-base">{label}</div>
          {explainer && (
            <div className="text-sm text-muted mt-1">{explainer}</div>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-sm text-body hover:underline">{isExpanded ? t('hideDetails') : t('showDetails')}</span>
          <svg
            className={`w-5 h-5 text-structural transition-transform duration-200 ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
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

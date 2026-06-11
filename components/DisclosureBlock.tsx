'use client';

import { useState, useId, type ReactNode } from 'react';
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
    <div className={`visual-card disclosure-shell overflow-hidden ${isExpanded ? 'border-support/45 shadow-[0_16px_34px_rgba(16,38,63,0.12)]' : ''} ${className}`}>
      <button
        id={buttonId}
        type="button"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className="disclosure-trigger"
      >
        <div className="disclosure-trigger__text">
          <div className="disclosure-trigger__title">{label}</div>
          {explainer && <p className="disclosure-trigger__summary">{explainer}</p>}
        </div>
        <div className="disclosure-trigger__action">
          <span className="disclosure-trigger__label">{isExpanded ? t('hideDetails') : t('showDetails')}</span>
          <ChevronIcon
            className={`disclosure-icon ${isExpanded ? 'disclosure-icon--open' : ''}`}
          />
        </div>
      </button>
      <div className={`disclosure-grid ${isExpanded ? 'disclosure-grid--open' : ''}`}>
        <div className="disclosure-grid__inner">
          <div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            aria-hidden={!isExpanded}
            className="disclosure-content"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

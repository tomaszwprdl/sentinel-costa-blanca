'use client';

import { useEffect, useRef, useState } from 'react';
import type { FocusEvent } from 'react';
import Image from 'next/image';

type CleaningItem = {
  id: string;
  marker: string;
  title: string;
  body: string;
  summaryLines: {
    label: string;
    text: string;
  }[];
  imageSrc: string;
  imageAlt: string;
  /** object-position for the item photo, tuned for the compact storyboard frame */
  focus: string;
};

type CleaningAccordionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: CleaningItem[];
};

/**
 * Single-open vertical accordion for the Services "cleaning is part of oversight"
 * block. One item is active at a time; autoplay only runs while visible and
 * stops after manual interaction.
 */
export default function CleaningAccordion({ eyebrow, title, intro, items }: CleaningAccordionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const manualPauseRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener('change', updateMotionPreference);

    return () => motionQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: '120px 0px', threshold: 0.25 },
    );

    observer.observe(rootRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (items.length < 2 || prefersReducedMotion || !inView || isHovering || hasFocusWithin || manualPauseRef.current) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [hasFocusWithin, inView, isHovering, items.length, prefersReducedMotion]);

  const activateItem = (index: number) => {
    manualPauseRef.current = true;
    setActiveIndex(index);
  };

  const pauseForFocus = () => setHasFocusWithin(true);

  const resumeAfterFocus = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;

    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      setHasFocusWithin(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className="svc-clean-acc"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocusCapture={pauseForFocus}
      onBlurCapture={resumeAfterFocus}
    >
      <div className="svc-clean-acc__intro">
        <p className="svc-clean-acc__eyebrow section-label">{eyebrow}</p>
        <h3 className="svc-clean-acc__title-main">{title}</h3>
        <p className="svc-clean-acc__summary">{intro}</p>
      </div>

      <div className="svc-clean-acc__list">
        {items.map((item, index) => {
          const open = index === activeIndex;
          const panelId = `clean-panel-${item.id}`;
          const triggerId = `clean-trigger-${item.id}`;
          return (
            <div key={item.id} className={`svc-clean-acc__item${open ? ' is-open' : ''}`}>
              <h3 className="svc-clean-acc__head">
                <button
                  type="button"
                  id={triggerId}
                  className="svc-clean-acc__trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => activateItem(index)}
                >
                  <span className="svc-clean-acc__marker" aria-hidden="true">
                    {item.marker}
                  </span>
                  <span className="svc-clean-acc__title">{item.title}</span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="svc-clean-acc__panel"
                hidden={!open}
              >
                {open ? (
                  <div className="svc-clean-acc__panel-inner">
                    <p className="svc-clean-acc__body">{item.body}</p>
                    <dl className="svc-clean-acc__micro">
                      {item.summaryLines.map((line) => (
                        <div key={`${item.id}-${line.label}`} className="svc-clean-acc__micro-line">
                          <dt>{line.label}</dt>
                          <dd>{line.text}</dd>
                        </div>
                      ))}
                    </dl>
                    <figure className="services-proof-photo svc-clean-acc__photo">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        className="services-proof-photo__image"
                        style={{ objectPosition: item.focus }}
                        loading="eager"
                      />
                    </figure>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

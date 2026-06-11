import LegalBody from '@/components/legal/LegalBody';
import Section from '@/components/layout/Section';
import { legalSectionId } from '@/lib/legal-body';

export interface LegalSection {
  title: string;
  body: string;
}

interface LegalDocumentProps {
  documentId: 'terms' | 'privacy';
  pageTitle: string;
  subtitle: string;
  lastUpdated: string;
  tocLabel: string;
  sections: LegalSection[];
}

export default function LegalDocument({
  documentId,
  pageTitle,
  subtitle,
  lastUpdated,
  tocLabel,
  sections,
}: LegalDocumentProps) {
  return (
    <main className="legal-page min-h-screen">
      <Section tone="light" className="section-primitive--first legal-page__section">
        <article className="legal-document">
          <header className="legal-document__header">
            <h1 className="legal-document__title">{pageTitle}</h1>
            <p className="legal-document__subtitle">{subtitle}</p>
            <p className="legal-document__meta">{lastUpdated}</p>
          </header>

          {sections.length > 0 && (
            <nav className="legal-toc" aria-label={tocLabel}>
              <p className="legal-toc__label">{tocLabel}</p>
              <ol className="legal-toc__list">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#${legalSectionId(documentId, index)}`} className="legal-toc__link">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="legal-prose">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={legalSectionId(documentId, index)}
                className="legal-prose__section"
              >
                <h2 className="legal-prose__section-title">{section.title}</h2>
                <LegalBody body={section.body} />
              </section>
            ))}
          </div>

          <footer className="legal-document__footer">
            <p>{lastUpdated}</p>
          </footer>
        </article>
      </Section>
    </main>
  );
}

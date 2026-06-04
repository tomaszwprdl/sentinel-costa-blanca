import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import TextColumn from '@/components/layout/TextColumn';

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  const sections = t.raw('sections') as Array<{ title: string; body: string }> | undefined;

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        <Section tone="light" className="section-primitive--first">
          <div className="section-intro">
            <h1>{t('pageTitle')}</h1>
            <p className="text-lg text-body mb-5">
              {t('subtitle')}
            </p>

            <TextColumn>
              <div className="prose">
                {sections?.map((section, i) => (
                  <div key={i} className="mb-10">
                    <h2 className="h2-system">{section.title}</h2>
                    <div className="text-body whitespace-pre-line">{section.body}</div>
                  </div>
                ))}
                <div className="mt-10 pt-10 border-t border-structural-light text-sm text-muted">
                  <p>{t('lastUpdated')}</p>
                </div>
              </div>
            </TextColumn>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

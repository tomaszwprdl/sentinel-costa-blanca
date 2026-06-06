import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import TextColumn from '@/components/layout/TextColumn';

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

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
              <div className="legal-prose">
                {sections?.map((section, i) => (
                  <div key={i} className="legal-prose__section">
                    <h2 className="h2-system">{section.title}</h2>
                    <div className="legal-prose__body">{section.body}</div>
                  </div>
                ))}
                <div className="legal-prose__updated">
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

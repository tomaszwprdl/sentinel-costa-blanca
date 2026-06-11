import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import LegalDocument, { type LegalSection } from '@/components/legal/LegalDocument';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const sections = t.raw('sections') as LegalSection[] | undefined;

  return (
    <>
      <HeaderClient />
      <LegalDocument
        documentId="privacy"
        pageTitle={t('pageTitle')}
        subtitle={t('subtitle')}
        lastUpdated={t('lastUpdated')}
        tocLabel={t('tocLabel')}
        sections={sections ?? []}
      />
      <Footer />
    </>
  );
}

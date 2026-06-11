import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import LegalDocument, { type LegalSection } from '@/components/legal/LegalDocument';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  const sections = t.raw('sections') as LegalSection[] | undefined;

  return (
    <>
      <HeaderClient />
      <LegalDocument
        documentId="terms"
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

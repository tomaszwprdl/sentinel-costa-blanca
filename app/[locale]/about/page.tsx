import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        {/* SECTION 1: PAGE INTRODUCTION */}
        <Section tone="light" className="section-primitive--first">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.7fr)] lg:items-center">
            <div className="section-intro mb-0">
                <p className="section-label">Sentinel Costa Blanca</p>
                <h1>{t('pageTitle')}</h1>
                <p className="text-lg text-body mb-5 leading-relaxed">
                  {t('intro.description')}
                </p>
                <p className="text-base text-muted leading-relaxed">
                  {t('intro.subtext')}
                </p>
            </div>
            <figure className="visual-card-strong overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/sentinel-technical-check-placeholder.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
          </div>
        </Section>

        {/* SECTION 2: PHILOSOPHY - WHY GUARDIAN EXISTS */}
        <Section tone="alt">
          <div>
              <h2 className="h2-system">{t('philosophy.title')}</h2>
              <p className="text-lg text-body mb-10 leading-relaxed">
                {t('philosophy.intro')}
              </p>

              <h3>{t('philosophy.subtitle')}</h3>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body font-semibold mb-1">{t('philosophy.reasons.scopeClarity.title')}</p>
                    <p className="text-body">{t('philosophy.reasons.scopeClarity.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body font-semibold mb-1">{t('philosophy.reasons.procedures.title')}</p>
                    <p className="text-body">{t('philosophy.reasons.procedures.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body font-semibold mb-1">{t('philosophy.reasons.responsibility.title')}</p>
                    <p className="text-body">{t('philosophy.reasons.responsibility.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body font-semibold mb-1">{t('philosophy.reasons.geographic.title')}</p>
                    <p className="text-body">{t('philosophy.reasons.geographic.description')}</p>
                  </div>
                </li>
              </ul>

              <div className="bg-surface-light p-6 border-l-4 border-structural-a mt-10">
                <p className="text-body">
                  {t('philosophy.practice')}
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 3: GEOGRAPHIC FOCUS - WHY 50-70KM */}
        <Section tone="light">
          <div>
              <h2 className="h2-system">{t('geographic.title')}</h2>
              <p className="text-lg text-body mb-10 leading-relaxed">
                {t('geographic.intro')}
              </p>

              <h3>{t('geographic.subtitle')}</h3>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body">{t('geographic.reasons.responseTime')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body">{t('geographic.reasons.visitFrequency')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body">{t('geographic.reasons.emergencyAccess')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body">{t('geographic.reasons.qualityControl')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-authority font-semibold mr-3">•</span>
                  <div>
                    <p className="text-body">{t('geographic.reasons.sustainability')}</p>
                  </div>
                </li>
              </ul>

              <div className="notice-panel r mt-10">
                <p className="text-body">
                  {t('geographic.footer')}
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 4: THE SYSTEM - HOW GUARDIAN OPERATES */}
        <Section tone="alt">
          <div>
              <h2 className="h2-system">{t('system.title')}</h2>
              <p className="text-lg text-body mb-10 leading-relaxed">
                {t('system.intro')}
              </p>

              <div className="space-y-10">
                <div>
                  <h3>{t('system.onboarding.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('system.onboarding.items.qualification')}</li>
                    <li>{t('system.onboarding.items.dataCollection')}</li>
                    <li>{t('system.onboarding.items.inspection')}</li>
                    <li>{t('system.onboarding.items.activation')}</li>
                  </ul>
                </div>

                <div>
                  <h3>{t('system.operations.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('system.operations.items.checklists')}</li>
                    <li>{t('system.operations.items.documentation')}</li>
                    <li>{t('system.operations.items.reports')}</li>
                    <li>{t('system.operations.items.assessments')}</li>
                  </ul>
                </div>

                <div>
                  <h3>{t('system.access.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('system.access.items.approval')}</li>
                    <li>{t('system.access.items.supervision')}</li>
                    <li>{t('system.access.items.reports')}</li>
                    <li>{t('system.access.items.tracking')}</li>
                  </ul>
                </div>

                <div>
                  <h3>{t('system.emergency.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('system.emergency.items.criteria')}</li>
                    <li>{t('system.emergency.items.limits')}</li>
                    <li>{t('system.emergency.items.contact')}</li>
                    <li>{t('system.emergency.items.documentation')}</li>
                  </ul>
                </div>

                <div>
                  <h3>{t('system.communication.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('system.communication.items.dedicated')}</li>
                    <li>{t('system.communication.items.sla')}</li>
                    <li>{t('system.communication.items.formal')}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-surface-light p-6 border-l-4 border-structural-a mt-10">
                <p className="text-body">
                  {t('system.footer')}
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 5: OPERATIONAL CAPABILITY - RESOURCES AND CAPACITY */}
        <Section tone="light">
          <div>
              <h2 className="h2-system">{t('resources.title')}</h2>
              <p className="text-lg text-body mb-10 leading-relaxed">
                {t('resources.intro')}
              </p>

              <div className="space-y-10">
                <DisclosureBlock 
                  label={t('resources.inspection.title')}
                >
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('resources.inspection.items.cleaner')}</li>
                    <li>{t('resources.inspection.items.technician')}</li>
                    <li>{t('resources.inspection.items.network')}</li>
                  </ul>
                </DisclosureBlock>

                <DisclosureBlock 
                  label={t('resources.coordination.title')}
                >
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('resources.coordination.items.coordinator')}</li>
                    <li>{t('resources.coordination.items.reporting')}</li>
                    <li>{t('resources.coordination.items.protocols')}</li>
                  </ul>
                </DisclosureBlock>

                <DisclosureBlock 
                  label={t('resources.transportation.title')}
                >
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('resources.transportation.items.partnership')}</li>
                    <li>{t('resources.transportation.items.scheduling')}</li>
                    <li>{t('resources.transportation.items.availability')}</li>
                  </ul>
                </DisclosureBlock>

                <DisclosureBlock 
                  label={t('resources.capacity.title')}
                >
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('resources.capacity.items.limited')}</li>
                    <li>{t('resources.capacity.items.seasonal')}</li>
                    <li>{t('resources.capacity.items.decline')}</li>
                  </ul>
                </DisclosureBlock>
              </div>

              <div className="bg-surface-light-alt p-6 border border-structural-light mt-10">
                <h3>{t('resources.notIncluded.title')}</h3>
                <ul className="list-disc list-inside space-y-2 text-body ml-4">
                  <li>{t('resources.notIncluded.items.contractor')}</li>
                  <li>{t('resources.notIncluded.items.availability')}</li>
                  <li>{t('resources.notIncluded.items.individuals')}</li>
                </ul>
                <p className="text-body mt-5">
                  <strong>{t('resources.footer')}</strong>
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 6: WHAT GUARDIAN IS NOT */}
        <Section tone="alt">
          <div>
              <h2 className="h2-system">{t('notWhat.title')}</h2>
              <p className="text-lg text-body mb-10 leading-relaxed">
                {t('notWhat.intro')}
              </p>

              <div className="space-y-10">
                <div className="bg-surface-light p-6 border border-structural-light">
                  <h3>{t('notWhat.insurance.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('notWhat.insurance.items.prevention')}</li>
                    <li>{t('notWhat.insurance.items.liability')}</li>
                    <li>{t('notWhat.insurance.items.forceMajeure')}</li>
                    <li>{t('notWhat.insurance.items.coverage')}</li>
                  </ul>
                </div>

                <div className="bg-surface-light p-6 border border-structural-light">
                  <h3>{t('notWhat.concierge.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('notWhat.concierge.items.unlimited')}</li>
                    <li>{t('notWhat.concierge.items.errands')}</li>
                    <li>{t('notWhat.concierge.items.flexibility')}</li>
                    <li>{t('notWhat.concierge.items.separate')}</li>
                  </ul>
                </div>

                <div className="bg-surface-light p-6 border border-structural-light">
                  <h3>{t('notWhat.propertyManagement.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('notWhat.propertyManagement.items.bookings')}</li>
                    <li>{t('notWhat.propertyManagement.items.support')}</li>
                    <li>{t('notWhat.propertyManagement.items.agency')}</li>
                    <li>{t('notWhat.propertyManagement.items.addon')}</li>
                  </ul>
                </div>

                <div className="bg-surface-light p-6 border border-structural-light">
                  <h3>{t('notWhat.contractor.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('notWhat.contractor.items.coordinates')}</li>
                    <li>{t('notWhat.contractor.items.quality')}</li>
                    <li>{t('notWhat.contractor.items.projects')}</li>
                    <li>{t('notWhat.contractor.items.licensed')}</li>
                  </ul>
                </div>

                <div className="bg-surface-light p-6 border border-structural-light">
                  <h3>{t('notWhat.availability.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('notWhat.availability.items.sla')}</li>
                    <li>{t('notWhat.availability.items.red')}</li>
                    <li>{t('notWhat.availability.items.timeframes')}</li>
                    <li>{t('notWhat.availability.items.guarantee')}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-surface-light p-6 border-l-4 border-structural-a mt-10">
                <p className="text-body">
                  <strong>{t('notWhat.footer')}</strong>
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 7: ACCOUNTABILITY AND RESPONSIBILITY */}
        <Section tone="light">
          <div>
              <h2 className="h2-system">{t('accountability.title')}</h2>
              <p className="text-lg text-body mb-10 leading-relaxed">
                {t('accountability.intro')}
              </p>

              <div className="space-y-10">
                <div>
                  <h3>{t('accountability.service.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('accountability.service.items.visits')}</li>
                    <li>{t('accountability.service.items.checklists')}</li>
                    <li>{t('accountability.service.items.reports')}</li>
                    <li>{t('accountability.service.items.sla')}</li>
                  </ul>
                </div>

                <div>
                  <h3>{t('accountability.documentation.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('accountability.documentation.items.photos')}</li>
                    <li>{t('accountability.documentation.items.written')}</li>
                    <li>{t('accountability.documentation.items.meters')}</li>
                    <li>{t('accountability.documentation.items.emergency')}</li>
                  </ul>
                </div>

                <div>
                  <h3>{t('accountability.decisions.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('accountability.decisions.items.operational')}</li>
                    <li>{t('accountability.decisions.items.securing')}</li>
                    <li>{t('accountability.decisions.items.repair')}</li>
                    <li>{t('accountability.decisions.items.documented')}</li>
                  </ul>
                </div>

                <div>
                  <h3>{t('accountability.communication.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('accountability.communication.items.response')}</li>
                    <li>{t('accountability.communication.items.notice')}</li>
                    <li>{t('accountability.communication.items.clarity')}</li>
                    <li>{t('accountability.communication.items.written')}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-surface-light-alt p-6 border border-structural-light mt-10">
                <h3>{t('accountability.notIncluded.title')}</h3>
                <ul className="list-disc list-inside space-y-2 text-body ml-4">
                  <li>{t('accountability.notIncluded.items.prevention')}</li>
                  <li>{t('accountability.notIncluded.items.contractors')}</li>
                  <li>{t('accountability.notIncluded.items.control')}</li>
                  <li>{t('accountability.notIncluded.items.unlimited')}</li>
                </ul>
                <p className="text-body mt-5">
                  <strong>{t('accountability.footer')}</strong>
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 8: NEXT STEPS */}
        <Section tone="authority">
          <div>
              <h2 className="h2-system">{t('nextSteps.title')}</h2>
              <p className="text-lg text-authority-on-dark/80 mb-10 leading-relaxed">
                {t('nextSteps.intro')}
              </p>

              <ol className="list-decimal list-inside space-y-2 text-authority-on-dark/80 mb-10 ml-4">
                <li>{t('nextSteps.steps.step1')}</li>
                <li>{t('nextSteps.steps.step2')}</li>
                <li>{t('nextSteps.steps.step3')}</li>
                <li>{t('nextSteps.steps.step4')}</li>
              </ol>

              <div className="bg-authority-bg p-6 mb-10">
                <h3>{t('nextSteps.required.title')}</h3>
                <ul className="list-disc list-inside space-y-2 text-authority-on-dark/80 ml-4">
                  <li>{t('nextSteps.required.items.location')}</li>
                  <li>{t('nextSteps.required.items.acceptance')}</li>
                  <li>{t('nextSteps.required.items.keys')}</li>
                  <li>{t('nextSteps.required.items.procedures')}</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-accent/40 bg-surface-light-alt p-6 mb-10">
                <h3>{t('nextSteps.declines.title')}</h3>
                <ul className="list-disc list-inside space-y-2 text-authority-on-dark/80 ml-4">
                  <li>{t('nextSteps.declines.items.outside')}</li>
                  <li>{t('nextSteps.declines.items.needs')}</li>
                  <li>{t('nextSteps.declines.items.expectations')}</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mt-10">
                <Link href={`/${locale}/services`} className="btn-primary !bg-surface-light !text-authority hover:!bg-surface-light-alt !border-surface-light">
                  {tCommon('nav.services')}
                </Link>
                <Link href={`/${locale}/contact`} className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                  {tCommon('nav.contact')}
                </Link>
              </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

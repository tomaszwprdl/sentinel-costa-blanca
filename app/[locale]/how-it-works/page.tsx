import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import ConfidenceBar from '@/components/ConfidenceBar';
import DisclosureBlock from '@/components/DisclosureBlock';
import SampleInspectionReport from '@/components/SampleInspectionReport';
import OnSiteVisitPhotoGrid from '@/components/OnSiteVisitPhotoGrid';
import Section from '@/components/layout/Section';
import OnboardingTimeline from '@/components/diagrams/OnboardingTimeline';

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'howItWorks' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        {/* SECTION 1: PAGE INTRODUCTION */}
        <Section tone="light" className="section-primitive--first">
          <div className="section-intro">
              <h1>
                {t('intro.headline')}
              </h1>
              <p className="text-lg text-body mb-5 leading-relaxed">
                {t('intro.description')}
              </p>
              <p className="text-base text-muted leading-relaxed">
                {t('intro.processOverview')}
              </p>
          </div>
          <div className="mt-10">
            <ConfidenceBar />
          </div>
        </Section>

        {/* SECTION 2: STEP 0 - QUALIFICATION */}
        <Section tone="alt">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('step0.title')}</h2>
              <p className="text-lg text-body mb-5">
                {t('step0.subtitle')}
              </p>

              <h3>{t('step0.geographicTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step0.geographicItems.radius')}</li>
                <li>{t('step0.geographicItems.outside')}</li>
              </ul>

              <h3>{t('step0.propertyTypeTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step0.propertyTypeItems.types')}</li>
                <li>{t('step0.propertyTypeItems.access')}</li>
              </ul>

              <h3>{t('step0.usagePatternTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step0.usagePatternItems.usage')}</li>
                <li>{t('step0.usagePatternItems.frequency')}</li>
              </ul>

              <h3>{t('step0.expectationsTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step0.expectationsItems.understanding')}</li>
                <li>{t('step0.expectationsItems.acceptance')}</li>
                <li>{t('step0.expectationsItems.procedures')}</li>
              </ul>

              <h3>{t('step0.disqualifyingTitle')}</h3>
              <p className="text-body mb-5">
                {t('step0.disqualifyingIntro')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step0.disqualifyingItems.outsideArea')}</li>
                <li>{t('step0.disqualifyingItems.unlimitedExpectation')}</li>
                <li>{t('step0.disqualifyingItems.boundaries')}</li>
                <li>{t('step0.disqualifyingItems.pressure')}</li>
              </ul>

              <p className="text-body">
                <strong>{t('step0.outcomeTitle')}</strong> {t('step0.outcomeText')}
              </p>
          </div>
        </Section>

        {/* SECTION 3: STEP 1 - DATA COLLECTION */}
        <Section tone="light">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('step1.title')}</h2>
              <p className="text-lg text-body mb-5">
                {t('step1.subtitle')}
              </p>

              <h3>{t('step1.ownerInfoTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step1.ownerInfoItems.fullName')}</li>
                <li>{t('step1.ownerInfoItems.permanentAddress')}</li>
                <li>{t('step1.ownerInfoItems.phone')}</li>
                <li>{t('step1.ownerInfoItems.email')}</li>
                <li>{t('step1.ownerInfoItems.language')}</li>
              </ul>

              <h3>{t('step1.emergencyContactTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step1.emergencyContactItems.alternative')}</li>
                <li>{t('step1.emergencyContactItems.unreachable')}</li>
              </ul>

              <h3>{t('step1.propertyInfoTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step1.propertyInfoItems.address')}</li>
                <li>{t('step1.propertyInfoItems.unit')}</li>
                <li>{t('step1.propertyInfoItems.size')}</li>
                <li>{t('step1.propertyInfoItems.type')}</li>
              </ul>

              <h3>{t('step1.systemsTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step1.systemsItems.water')}</li>
                <li>{t('step1.systemsItems.electrical')}</li>
                <li>{t('step1.systemsItems.boiler')}</li>
                <li>{t('step1.systemsItems.climate')}</li>
                <li>{t('step1.systemsItems.alarm')}</li>
              </ul>

              <h3>{t('step1.keysTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step1.keysItems.minimum')}</li>
                <li>{t('step1.keysItems.types')}</li>
                <li>{t('step1.keysItems.handover')}</li>
              </ul>

              <p className="text-body">
                <strong>{t('step1.incompleteDataTitle')}</strong> {t('step1.incompleteDataText')}
              </p>
          </div>
        </Section>

        {/* SECTION 4: STEP 2 - PACKAGE SELECTION */}
        <Section tone="alt">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('step2.title')}</h2>
              <p className="text-lg text-body mb-5">
                {t('step2.subtitle')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step2.packages.green')}</li>
                <li>{t('step2.packages.orange')}</li>
                <li>{t('step2.packages.red')}</li>
              </ul>

              <h3>{t('step2.confirmationsTitle')}</h3>
              <p className="text-body mb-5">{t('step2.confirmationsIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step2.confirmationsItems.scope')}</li>
                <li>{t('step2.confirmationsItems.limitations')}</li>
                <li>{t('step2.confirmationsItems.sla')}</li>
                <li>{t('step2.confirmationsItems.authority')}</li>
                <li>{t('step2.confirmationsItems.pricing')}</li>
              </ul>

              <h3>{t('step2.redPackageTitle')}</h3>
              <p className="text-body mb-5">{t('step2.redPackageText')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step2.redPackageLimits.standard')}</li>
                <li>{t('step2.redPackageLimits.optional')}</li>
              </ul>

              <p className="text-body mb-10">
                <strong>{t('step2.documentationTitle')}</strong> {t('step2.documentationText')}
              </p>

              <p className="text-body">
                <strong>{t('step2.changesTitle')}</strong> {t('step2.changesText')}
              </p>
          </div>
        </Section>

        {/* SECTION 5: STEP 3 - INITIAL INSPECTION */}
        <Section tone="light">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('step3.title')}</h2>
              
              <h3>{t('step3.purposeTitle')}</h3>
              <p className="text-body mb-10">
                {t('step3.purposeText')}
              </p>

              <h3>{t('step3.scopeTitle')}</h3>
              <p className="text-body mb-5">{t('step3.scopeIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step3.scopeItems.visual')}</li>
                <li>{t('step3.scopeItems.doors')}</li>
                <li>{t('step3.scopeItems.water')}</li>
                <li>{t('step3.scopeItems.electrical')}</li>
                <li>{t('step3.scopeItems.boiler')}</li>
                <li>{t('step3.scopeItems.condition')}</li>
                <li>{t('step3.scopeItems.damage')}</li>
              </ul>

              <h3>{t('step3.documentationTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step3.documentationItems.photos')}</li>
                <li>{t('step3.documentationItems.meters')}</li>
                <li>{t('step3.documentationItems.notes')}</li>
                <li>{t('step3.documentationItems.recommendations')}</li>
              </ul>

              <h3>{t('step3.reportTitle')}</h3>
              <p className="text-body mb-5">{t('step3.reportIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step3.reportItems.condition')}</li>
                <li>{t('step3.reportItems.photos')}</li>
                <li>{t('step3.reportItems.concerns')}</li>
                <li>{t('step3.reportItems.immediate')}</li>
              </ul>

              <p className="text-body mb-10">
                <strong>{t('step3.approvalTitle')}</strong> {t('step3.approvalText')}
              </p>

              <p className="text-body">
                <strong>{t('step3.timelineTitle')}</strong> {t('step3.timelineText')}
              </p>

              <SampleInspectionReport t={t} />
              <OnSiteVisitPhotoGrid t={t} />
          </div>
        </Section>

        {/* SECTION 6: STEP 4 - OPERATIONAL SETUP */}
        <Section tone="alt">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('step4.title')}</h2>

              <h3>{t('step4.scheduleTitle')}</h3>
              <p className="text-body mb-5">{t('step4.scheduleIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step4.scheduleItems.preferred')}</li>
                <li>{t('step4.scheduleItems.frequency')}</li>
                <li>{t('step4.scheduleItems.seasonal')}</li>
              </ul>

              <h3>{t('step4.emergencyTitle')}</h3>
              <p className="text-body mb-5">{t('step4.emergencyIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step4.emergencyItems.definition')}</li>
                <li>{t('step4.emergencyItems.priority')}</li>
                <li>{t('step4.emergencyItems.protocol')}</li>
                <li>{t('step4.emergencyItems.limits')}</li>
              </ul>

              <h3>{t('step4.specialTitle')}</h3>
              <p className="text-body mb-5">{t('step4.specialIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step4.specialItems.plants')}</li>
                <li>{t('step4.specialItems.pets')}</li>
                <li>{t('step4.specialItems.attention')}</li>
                <li>{t('step4.specialItems.seasonal')}</li>
              </ul>

              <h3>{t('step4.accessTitle')}</h3>
              <p className="text-body mb-5">{t('step4.accessIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step4.accessItems.contacts')}</li>
                <li>{t('step4.accessItems.scheduling')}</li>
                <li>{t('step4.accessItems.reporting')}</li>
              </ul>

              <h3>{t('step4.communicationTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step4.communicationItems.primary')}</li>
                <li>{t('step4.communicationItems.response')}</li>
                <li>{t('step4.communicationItems.reporting')}</li>
              </ul>

              <h3>{t('step4.keyHandoverTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step4.keyHandoverItems.transfer')}</li>
                <li>{t('step4.keyHandoverItems.inventory')}</li>
                <li>{t('step4.keyHandoverItems.storage')}</li>
              </ul>

              <DisclosureBlock 
                label={t('step4.checklistTitle')}
              >
                <ul className="list-disc list-inside space-y-2 text-body ml-4">
                  <li>✓ {t('step4.checklistItems.data')}</li>
                  <li>✓ {t('step4.checklistItems.package')}</li>
                  <li>✓ {t('step4.checklistItems.inspection')}</li>
                  <li>✓ {t('step4.checklistItems.parameters')}</li>
                  <li>✓ {t('step4.checklistItems.keys')}</li>
                </ul>
              </DisclosureBlock>
          </div>
        </Section>

        {/* SECTION 7: STEP 5 - SERVICE ACTIVATION */}
        <Section tone="light">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('step5.title')}</h2>

              <h3>{t('step5.confirmationTitle')}</h3>
              <p className="text-body mb-10">
                {t('step5.confirmationText')}
              </p>

              <h3>{t('step5.fromDateTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step5.fromDateItems.sla')}</li>
                <li>{t('step5.fromDateItems.schedule')}</li>
                <li>{t('step5.fromDateItems.emergency')}</li>
                <li>{t('step5.fromDateItems.terms')}</li>
              </ul>

              <h3>{t('step5.firstVisitTitle')}</h3>
              <p className="text-body mb-10">
                {t('step5.firstVisitText')}
              </p>

              <h3>{t('step5.ongoingTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step5.ongoingItems.visits')}</li>
                <li>{t('step5.ongoingItems.reports')}</li>
                <li>{t('step5.ongoingItems.access')}</li>
                <li>{t('step5.ongoingItems.emergency')}</li>
              </ul>

              <h3>{t('step5.changesTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('step5.changesItems.package')}</li>
                <li>{t('step5.changesItems.additions')}</li>
                <li>{t('step5.changesItems.temporary')}</li>
              </ul>
          </div>
        </Section>

        {/* SECTION 8: ONGOING SERVICE */}
        <Section tone="alt">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('ongoing.title')}</h2>

              <h3>{t('ongoing.visitsTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('ongoing.visitsItems.schedule')}</li>
                <li>{t('ongoing.visitsItems.windows')}</li>
                <li>{t('ongoing.visitsItems.documented')}</li>
                <li>{t('ongoing.visitsItems.reported')}</li>
              </ul>

              <h3>{t('ongoing.reportsTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('ongoing.reportsItems.datetime')}</li>
                <li>{t('ongoing.reportsItems.checklist')}</li>
                <li>{t('ongoing.reportsItems.photos')}</li>
                <li>{t('ongoing.reportsItems.observations')}</li>
                <li>{t('ongoing.reportsItems.meters')}</li>
                <li>{t('ongoing.reportsItems.actions')}</li>
              </ul>

              <h3>{t('ongoing.accessTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('ongoing.accessItems.requested')}</li>
                <li>{t('ongoing.accessItems.confirmation')}</li>
                <li>{t('ongoing.accessItems.scheduled')}</li>
                <li>{t('ongoing.accessItems.report')}</li>
              </ul>

              <h3>{t('ongoing.emergencyTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('ongoing.emergencyItems.contact')}</li>
                <li>{t('ongoing.emergencyItems.assessment')}</li>
                <li>{t('ongoing.emergencyItems.action')}</li>
                <li>{t('ongoing.emergencyItems.documentation')}</li>
              </ul>

              <h3>{t('ongoing.communicationTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('ongoing.communicationItems.regular')}</li>
                <li>{t('ongoing.communicationItems.adhoc')}</li>
                <li>{t('ongoing.communicationItems.emergency')}</li>
                <li>{t('ongoing.communicationItems.monthly')}</li>
              </ul>

              <h3>{t('ongoing.outsideScopeTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('ongoing.outsideScopeItems.discussed')}</li>
                <li>{t('ongoing.outsideScopeItems.approval')}</li>
                <li>{t('ongoing.outsideScopeItems.billed')}</li>
              </ul>
          </div>
        </Section>

        {/* SECTION 9: SERVICE CHANGES AND TERMINATION */}
        <Section tone="light">
          <div className="max-w-[65ch]">
              <h2 className="h2-system">{t('changes.title')}</h2>

              <h3>{t('changes.packageChangesTitle')}</h3>
              <p className="text-body mb-5">{t('changes.packageChangesIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('changes.packageChangesItems.request')}</li>
                <li>{t('changes.packageChangesItems.terms')}</li>
                <li>{t('changes.packageChangesItems.effective')}</li>
                <li>{t('changes.packageChangesItems.retroactive')}</li>
              </ul>

              <h3>{t('changes.additionsTitle')}</h3>
              <p className="text-body mb-5">{t('changes.additionsIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('changes.additionsItems.quoted')}</li>
                <li>{t('changes.additionsItems.added')}</li>
                <li>{t('changes.additionsItems.noAlter')}</li>
              </ul>

              <h3>{t('changes.temporaryTitle')}</h3>
              <p className="text-body mb-5">{t('changes.temporaryIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('changes.temporaryItems.caseByCase')}</li>
                <li>{t('changes.temporaryItems.documented')}</li>
                <li>{t('changes.temporaryItems.return')}</li>
              </ul>

              <h3>{t('changes.clientTerminationTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('changes.clientTerminationItems.effective')}</li>
                <li>{t('changes.clientTerminationItems.finalVisit')}</li>
                <li>{t('changes.clientTerminationItems.keysReturned')}</li>
                <li>{t('changes.clientTerminationItems.finalReport')}</li>
              </ul>

              <h3>{t('changes.guardianTerminationTitle')}</h3>
              <p className="text-body mb-5">{t('changes.guardianTerminationIntro')}</p>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('changes.guardianTerminationItems.violations')}</li>
                <li>{t('changes.guardianTerminationItems.nonPayment')}</li>
                <li>{t('changes.guardianTerminationItems.impossibility')}</li>
                <li>{t('changes.guardianTerminationItems.behavior')}</li>
              </ul>

              <h3>{t('changes.processTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                <li>{t('changes.processItems.notice')}</li>
                <li>{t('changes.processItems.settled')}</li>
                <li>{t('changes.processItems.keys')}</li>
                <li>{t('changes.processItems.documentation')}</li>
              </ul>
          </div>
        </Section>

        {/* SECTION 10: TIMELINE SUMMARY */}
        <Section tone="alt">
          <div className="max-w-4xl">
              <h2 className="h2-system">{t('timeline.title')}</h2>

              <h3>{t('timeline.subtitle')}</h3>

              <OnboardingTimeline
                eyebrow={t('diagrams.onboarding.eyebrow')}
                summaryLabel={t('timeline.totalTitle')}
                summaryText={t('timeline.totalText')}
                items={[
                  {
                    marker: '00',
                    title: t('timeline.steps.step0.title'),
                    description: t('timeline.steps.step0.description'),
                  },
                  {
                    marker: '01',
                    title: t('timeline.steps.step1.title'),
                    description: t('timeline.steps.step1.description'),
                  },
                  {
                    marker: '02',
                    title: t('timeline.steps.step2.title'),
                    description: t('timeline.steps.step2.description'),
                  },
                  {
                    marker: '03',
                    title: t('timeline.steps.step3.title'),
                    description: t('timeline.steps.step3.description'),
                  },
                  {
                    marker: '04',
                    title: t('timeline.steps.step4.title'),
                    description: t('timeline.steps.step4.description'),
                  },
                  {
                    marker: '05',
                    title: t('timeline.steps.step5.title'),
                    description: t('timeline.steps.step5.description'),
                  },
                ]}
              />

              <div className="mt-10 max-w-[65ch]">
                <DisclosureBlock
                  label={t('timeline.delaysTitle')}
                >
                  <ul className="list-disc list-inside space-y-2 text-body ml-4">
                    <li>{t('timeline.delaysItems.incomplete')}</li>
                    <li>{t('timeline.delaysItems.access')}</li>
                    <li>{t('timeline.delaysItems.keys')}</li>
                    <li>{t('timeline.delaysItems.approval')}</li>
                  </ul>
                </DisclosureBlock>

                <h3 className="mt-10">{t('timeline.fasterTitle')}</h3>
                <ul className="list-disc list-inside space-y-2 text-body mb-10 ml-4">
                  <li>{t('timeline.fasterItems.immediate')}</li>
                  <li>{t('timeline.fasterItems.available')}</li>
                  <li>{t('timeline.fasterItems.ready')}</li>
                  <li>{t('timeline.fasterItems.responsive')}</li>
                </ul>
              </div>
          </div>
        </Section>

        {/* SECTION 11: PROCESS FAQ */}
        <Section tone="light">
          <div>
              <h2 className="h2-system">{t('faq.title')}</h2>
              
              <div className="space-y-10">
                <div>
                  <h3>{t('faq.questions.q1.question')}</h3>
                  <p className="text-body">{t('faq.questions.q1.answer')}</p>
                </div>

                <div>
                  <h3>{t('faq.questions.q2.question')}</h3>
                  <p className="text-body">{t('faq.questions.q2.answer')}</p>
                </div>

                <div>
                  <h3>{t('faq.questions.q3.question')}</h3>
                  <p className="text-body">{t('faq.questions.q3.answer')}</p>
                </div>

                <div>
                  <h3>{t('faq.questions.q4.question')}</h3>
                  <p className="text-body">{t('faq.questions.q4.answer')}</p>
                </div>

                <div>
                  <h3>{t('faq.questions.q5.question')}</h3>
                  <p className="text-body">{t('faq.questions.q5.answer')}</p>
                </div>

                <div>
                  <h3>{t('faq.questions.q6.question')}</h3>
                  <p className="text-body">{t('faq.questions.q6.answer')}</p>
                </div>

                <div>
                  <h3>{t('faq.questions.q7.question')}</h3>
                  <p className="text-body">{t('faq.questions.q7.answer')}</p>
                </div>
              </div>
          </div>
        </Section>

        {/* SECTION 12: NEXT STEP */}
        <Section tone="authority">
          <div className="max-w-[65ch]">
              <h2 className="h2-system text-authority-on-dark">{t('cta.title')}</h2>
              
              <h3>{t('cta.subtitle')}</h3>
              <ol className="list-decimal list-inside space-y-2 text-authority-on-dark/80 mb-10 ml-4">
                <li>{t('cta.steps.step1')}</li>
                <li>{t('cta.steps.step2')}</li>
                <li>{t('cta.steps.step3')}:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>{t('cta.steps.step3Items.location')}</li>
                    <li>{t('cta.steps.step3Items.package')}</li>
                    <li>{t('cta.steps.step3Items.availability')}</li>
                  </ul>
                </li>
              </ol>

              <h3>{t('cta.nextTitle')}</h3>
              <p className="text-authority-on-dark/80 mb-10">
                {t('cta.nextIntro')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-authority-on-dark/80 mb-10 ml-4">
                <li>{t('cta.nextItems.confirm')}</li>
                <li>{t('cta.nextItems.request')}</li>
                <li>{t('cta.nextItems.schedule')}</li>
                <li>{t('cta.nextItems.begin')}</li>
              </ul>

              <div className="mt-10">
                <Link href={`/${locale}/contact`} className="btn-primary !bg-surface-light !text-authority hover:!bg-surface-light-alt !border-surface-light">
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

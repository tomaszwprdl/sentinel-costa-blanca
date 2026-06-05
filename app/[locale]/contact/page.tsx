'use client';

import { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import ConfidenceBar from '@/components/ConfidenceBar';
import DisclosureBlock from '@/components/DisclosureBlock';
import Section from '@/components/layout/Section';
import GridFrame from '@/components/layout/GridFrame';
import Region from '@/components/layout/Region';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';

import { normalizePathwayParam } from '@/lib/pathway';
import {
  parseScopeElementParam,
  SQM_INPUT_MIN,
  SQM_INPUT_MAX,
  type PackageKey,
  type ModeKey,
  type SizeKey,
  type BedroomsKey,
} from '@/lib/estimatorMatrix';

const USAGE_SITUATION_SLUGS = [
  'private-use-only',
  'regular-guest-stays',
  'mixed-not-defined',
] as const;

const PACKAGE_KEYS: PackageKey[] = ['structured_presence', 'active_oversight', 'extended_jurisdiction'];
const MODE_KEYS: ModeKey[] = ['private_use', 'active_guest'];
const SIZE_KEYS: SizeKey[] = ['S', 'M', 'L'];
const BEDROOMS_KEYS: BedroomsKey[] = ['B1', 'B2', 'B3', 'B4P'];

function isPackageKey(value: string): value is PackageKey {
  return PACKAGE_KEYS.includes(value as PackageKey);
}

function isModeKey(value: string): value is ModeKey {
  return MODE_KEYS.includes(value as ModeKey);
}

function isSizeKey(value: string): value is SizeKey {
  return SIZE_KEYS.includes(value as SizeKey);
}

function isBedroomsKey(value: string): value is BedroomsKey {
  return BEDROOMS_KEYS.includes(value as BedroomsKey);
}

const createContactFormSchema = (t: (key: string) => string) => z.object({
  fullName: z.string().min(2, t('form.requiredField')),
  email: z.string().email(t('form.requiredField')),
  phone: z.string().min(5, t('form.requiredField')),
  preferredContactMethod: z.enum(['Email', 'WhatsApp', 'Phone']),
  preferredLanguage: z.enum(['English', 'Polish']),
  propertyLocation: z.string().min(3, t('form.requiredField')),
  propertyType: z.enum(['Apartment', 'House', 'Villa', 'Other']),
  currentStatus: z.enum(['private-use-only', 'regular-guest-stays', 'mixed-not-defined']),
  expectedPackage: z.enum(['Basic', 'Extended', 'Full', 'Not sure - need consultation']),
  expectedAccessFrequency: z.string().optional(),
  primaryServiceNeeds: z.string().max(500, t('form.requiredField')).optional(),
  acknowledgment: z.boolean().refine((val) => val === true, {
    message: t('form.requiredField'),
  }),
});

function ContactPageInner() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const t = useTranslations('contact');
  const tEst = useTranslations('services.estimator');
  const tCommon = useTranslations('common');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const serviceAreaMapLabels = {
    title: tCommon('serviceAreaMap.title'),
    center: tCommon('serviceAreaMap.center'),
    radius: tCommon('serviceAreaMap.radius'),
    boundary: tCommon('serviceAreaMap.boundary'),
    caption: tCommon('serviceAreaMap.caption'),
  };

  const estimatorPrefill = useMemo(() => {
    const package_ = searchParams.get('est_package');
    const mode = searchParams.get('est_mode');
    const size = searchParams.get('est_size');
    const sqmParam = searchParams.get('est_sqm');
    const bedrooms = searchParams.get('est_bedrooms');
    const scopeParam = searchParams.get('est_scope') ?? searchParams.get('est_overlays');
    const range = searchParams.get('est_range');

    if (!package_ || !mode || !size || !bedrooms) return null;
    if (!isPackageKey(package_) || !isModeKey(mode) || !isSizeKey(size) || !isBedroomsKey(bedrooms)) {
      return null;
    }

    const num = sqmParam ? Number(sqmParam) : NaN;
    const sqm = Number.isFinite(num) ? Math.max(SQM_INPUT_MIN, Math.min(SQM_INPUT_MAX, Math.round(num))) : null;
    const scopeElements = parseScopeElementParam(scopeParam);
    const rangeParts = range
      ? range.split('-').map(Number).filter((n) => Number.isFinite(n)).slice(0, 2)
      : [];
    const rangeDisplay =
      rangeParts.length === 2
        ? `€${rangeParts[0]}–€${rangeParts[1]}`
        : (range || '—');

    return {
      package: package_,
      mode,
      size,
      sqm: Number.isFinite(sqm) ? sqm : null,
      bedrooms,
      scopeElements,
      scopeSerialized: scopeElements.join(','),
      rangeDisplay,
      rangeRaw: rangeParts.length === 2 ? `${rangeParts[0]}-${rangeParts[1]}` : (range ?? ''),
    };
  }, [searchParams]);

  const pathwayKey = normalizePathwayParam(searchParams.get('pathway'));

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  const contactFormSchema = createContactFormSchema(t);
  type ContactFormData = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (pathwayKey) {
      setValue('currentStatus', pathwayKey);
      const label = t(`pathwayContext.${pathwayKey}`);
      setValue('primaryServiceNeeds', `${t('pathwayContext.prefillPrefix')} ${label}`);
    }
  }, [pathwayKey, setValue, t]);

  const expectedPackage = watch('expectedPackage');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      ...data,
      pathwaySlug: pathwayKey ?? undefined,
      pathwayLabel: pathwayKey ? t(`pathwayContext.${pathwayKey}`) : undefined,
      estimatorPackage: estimatorPrefill?.package,
      estimatorMode: estimatorPrefill?.mode,
      estimatorSize: estimatorPrefill?.size,
      estimatorSqm: estimatorPrefill?.sqm ?? undefined,
      estimatorBedrooms: estimatorPrefill?.bedrooms,
      estimatorScope: estimatorPrefill?.scopeSerialized || undefined,
      estimatorRange: estimatorPrefill?.rangeRaw || undefined,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry');
      }

      setReferenceNumber(result.referenceNumber);
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <>
        <HeaderClient />
        <main className="min-h-screen">
          <Section tone="light" className="section-primitive--first">
            <div>
                <h1>{t('confirmation.title')}</h1>
                <div className="bg-surface-card border-l-4 border-structural-a p-6 mb-10">
                  <p className="text-lg text-authority mb-5">
                    {t('confirmation.thankYou')}
                  </p>
                  <p className="text-body mb-5">
                    {t('confirmation.received')}
                  </p>
                </div>

                <div className="bg-surface-light-alt p-6 mb-10">
                  <h2 className="h2-system">{t('confirmation.nextStepsTitle')}</h2>
                  <ol className="list-decimal list-inside space-y-2 text-body mb-5">
                    <li>{t('confirmation.nextSteps.step1', { email: tCommon('contact.email') })}</li>
                    <li>{t('confirmation.nextSteps.step2')}</li>
                    <li>{t('confirmation.nextSteps.step3')}</li>
                  </ol>
                </div>

                <div className="notice-panel r mb-10">
                  <h3>{t('confirmation.outsideAreaTitle')}</h3>
                  <p className="text-body mb-5">
                    {t('confirmation.outsideAreaText')}
                  </p>
                </div>

                <div className="bg-surface-light-alt p-6 mb-10">
                  <h3>{t('confirmation.noResponseTitle')}</h3>
                  <p className="text-body mb-5">
                    {t('confirmation.noResponseText', { email: tCommon('contact.email'), phone: tCommon('contact.phone') })}
                  </p>
                </div>

                {referenceNumber && (
                  <div className="bg-surface-light border border-structural-light p-5 mb-10">
                    <p className="text-sm text-muted mb-1">{t('confirmation.referenceNumber')}</p>
                    <p className="text-lg font-semibold text-authority">{referenceNumber}</p>
                  </div>
                )}

                <div className="mt-10">
                  <Link href={`/${locale}`} className="btn-primary">
                    {t('confirmation.returnToHome')}
                  </Link>
                </div>
              </div>
          </Section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <HeaderClient />
      <main className="min-h-screen">
        {/* SECTION 1: PAGE INTRODUCTION */}
        <Section tone="light" className="section-primitive--first">
          <div>
              <h1>{t('intro.headline')}</h1>
              <p className="text-lg text-body mb-5 leading-relaxed">
                {t('intro.description')}
              </p>
              <p className="text-base text-muted leading-relaxed mb-10">
                {t('intro.responseCommitment')}
              </p>
              <ConfidenceBar />
          </div>
        </Section>

        {/* SECTION 2: DIRECT CONTACT INFORMATION */}
        <Section tone="alt">
          <div>
              <h2 className="h2-system">{t('directContact.title')}</h2>
              <div className="bg-surface-light p-6 border border-structural-light mb-10">
                <h3>{t('directContact.subtitle')}</h3>
                <ul className="space-y-2 text-body mb-5">
                  <li><strong>{t('directContact.email')}:</strong> {tCommon('contact.email')}</li>
                  <li><strong>{t('directContact.phone')}:</strong> {tCommon('contact.phone')}</li>
                </ul>
                <p className="text-sm text-muted mb-5">
                  <strong>{t('directContact.hoursTitle')}</strong> {tCommon('contact.hours')}
                </p>
                <p className="text-sm text-muted">
                  {t('directContact.sundayHolidays')}
                </p>
              </div>

              <DisclosureBlock 
                label={t('directContact.prepareTitle')}
              >
                <ul className="list-disc list-inside space-y-2 text-body">
                  <li>{t('directContact.prepareItems.location')}</li>
                  <li>{t('directContact.prepareItems.propertyType')}</li>
                  <li>{t('directContact.prepareItems.expectedPackage')}</li>
                  <li>{t('directContact.prepareItems.serviceNeeds')}</li>
                </ul>
              </DisclosureBlock>

              <div className="notice-panel r">
                <h3>{t('directContact.emergencyTitle')}</h3>
                <p className="text-body">
                  {t('directContact.emergencyText')}
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 3: ACTIVE CLIENTS */}
        <Section tone="alt">
          <div>
              <h2 className="h2-system">{t('activeClients.title')}</h2>
              <div className="bg-surface-light p-6 border border-structural-light">
                <p className="text-body mb-5">
                  {t('activeClients.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-body mb-5">
                  <li><strong>{t('activeClients.channels.operational')}</strong></li>
                  <li><strong>{t('activeClients.channels.formal', { email: tCommon('contact.email') })}</strong></li>
                  <li><strong>{t('activeClients.channels.emergency')}</strong></li>
                </ul>
                <p className="text-body font-semibold mb-2">{t('activeClients.doNotUseTitle')}</p>
                <ul className="list-disc list-inside space-y-1 text-body">
                  <li>{t('activeClients.doNotUseItems.accessRequests')}</li>
                  <li>{t('activeClients.doNotUseItems.emergencies')}</li>
                  <li>{t('activeClients.doNotUseItems.routineQuestions')}</li>
                </ul>
                <p className="text-body mt-5">
                  {t('activeClients.fasterResponse')}
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 4: SERVICE AREA */}
        <Section tone="light">
          <div>
              <h2 className="h2-system">{t('serviceArea.title')}</h2>
              <p className="text-body mb-5">
                {t('serviceArea.description')}
              </p>
              <div className="mb-10">
                <ServiceAreaMap labels={serviceAreaMapLabels} />
              </div>
              <DisclosureBlock 
                label={t('serviceArea.examplesTitle')}
              >
                <p className="text-body">{t('serviceArea.examplesText')}</p>
              </DisclosureBlock>
              <p className="text-body">
                <strong>{t('serviceArea.notCoveredTitle')}</strong> {t('serviceArea.notCoveredText')}
              </p>
          </div>
        </Section>

        {/* SECTION 5: CANNOT HELP */}
        <Section tone="alt">
          <div>
              <h2 className="h2-system">{t('cannotHelp.title')}</h2>
              <div className="bg-surface-light p-6 border border-structural-light">
                <p className="text-body mb-5">
                  {t('cannotHelp.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-body mb-5">
                  <li>{t('cannotHelp.items.outsideArea')}</li>
                  <li>{t('cannotHelp.items.oneTime')}</li>
                  <li>{t('cannotHelp.items.fullPM')}</li>
                  <li>{t('cannotHelp.items.concierge')}</li>
                  <li>{t('cannotHelp.items.construction')}</li>
                </ul>
                <p className="text-body">
                  {t('cannotHelp.notAppropriate')}
                </p>
                <p className="text-body mt-5">
                  {t('cannotHelp.proceedText')}
                </p>
              </div>
          </div>
        </Section>

        {/* SECTION 6: CONTACT FORM */}
        <Section tone="light">
          <div>
              <h2 className="h2-system">{t('form.title')}</h2>

              {pathwayKey && (
                <div className="bg-surface-light-alt border border-structural-light p-6 mb-10 r">
                  <h3 className="text-body font-medium mb-2">{t('pathwayContext.title')}</h3>
                  <p className="text-sm text-body">{t(`pathwayContext.${pathwayKey}`)}</p>
                </div>
              )}

              {estimatorPrefill && (
                <div className="bg-surface-light-alt border border-structural-light p-6 mb-10 r">
                  <h3 className="text-body font-medium mb-5">{t('estimatorContext.title')}</h3>
                  <ul className="space-y-2 text-sm text-body">
                    <li><strong>{t('estimatorContext.package')}:</strong> {tEst(`packages.${estimatorPrefill.package}`)}</li>
                    <li><strong>{t('estimatorContext.mode')}:</strong> {estimatorPrefill.mode === 'private_use' ? tEst('modePrivateUse') : tEst('modeActiveGuest')}</li>
                    <li><strong>{t('estimatorContext.size')}:</strong> {estimatorPrefill.sqm != null ? `${estimatorPrefill.sqm} m²` : '—'}</li>
                    <li><strong>{t('estimatorContext.bedrooms')}:</strong> {estimatorPrefill.bedrooms === 'B4P' ? '4+' : estimatorPrefill.bedrooms.slice(1)}</li>
                    <li><strong>{t('estimatorContext.scopeElements')}:</strong> {estimatorPrefill.scopeElements.length ? estimatorPrefill.scopeElements.map((k) => tEst(`scopeElements.${k}`)).join(', ') : '—'}</li>
                    <li><strong>{t('estimatorContext.range')}:</strong> {estimatorPrefill.rangeDisplay}</li>
                  </ul>
                </div>
              )}
              
              {submitError && (
                <div className="bg-surface-card border-l-4 border-structural-a p-5 mb-10">
                  <p className="text-authority font-medium">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                {/* Your Details */}
                <div className="bg-surface-light-alt p-6 border border-structural-light">
                  <h3>{t('form.yourDetails')}</h3>
                  <GridFrame>
                    <Region name="support" tabletSpan="half" desktopSpan="half">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-body mb-2">
                        {t('form.fullName')} *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        {...register('fullName')}
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-neutral">{errors.fullName.message}</p>
                      )}
                    </div>
                    </Region>
                    <Region name="support" tabletSpan="half" desktopSpan="half">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-body mb-2">
                        {t('form.emailAddress')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-neutral">{errors.email.message}</p>
                      )}
                    </div>
                    </Region>
                    <Region name="support" tabletSpan="half" desktopSpan="half">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-body mb-2">
                        {t('form.phoneNumber')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        placeholder="+34 123 456 789"
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-neutral">{errors.phone.message}</p>
                      )}
                    </div>
                    </Region>
                    <Region name="support" tabletSpan="half" desktopSpan="half">
                    <div>
                      <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-body mb-2">
                        {t('form.preferredContact')} *
                      </label>
                      <select
                        id="preferredContactMethod"
                        {...register('preferredContactMethod')}
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      >
                        <option value="">{t('form.selectPlaceholder')}</option>
                        <option value="Email">{t('form.contactMethods.email')}</option>
                        <option value="WhatsApp">{t('form.contactMethods.whatsapp')}</option>
                        <option value="Phone">{t('form.contactMethods.phone')}</option>
                      </select>
                      {errors.preferredContactMethod && (
                        <p className="mt-1 text-sm text-neutral">{errors.preferredContactMethod.message}</p>
                      )}
                    </div>
                    </Region>
                    <Region name="support" tabletSpan="half" desktopSpan="half">
                    <div>
                      <label htmlFor="preferredLanguage" className="block text-sm font-medium text-body mb-2">
                        {t('form.preferredLanguage')} *
                      </label>
                      <select
                        id="preferredLanguage"
                        {...register('preferredLanguage')}
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      >
                        <option value="">{t('form.selectPlaceholder')}</option>
                        <option value="English">{t('form.languages.english')}</option>
                        <option value="Polish">{t('form.languages.polish')}</option>
                      </select>
                      {errors.preferredLanguage && (
                        <p className="mt-1 text-sm text-neutral">{errors.preferredLanguage.message}</p>
                      )}
                    </div>
                    </Region>
                  </GridFrame>
                </div>

                {/* Property Information */}
                <div className="bg-surface-light-alt p-6 border border-structural-light">
                  <h3>{t('form.propertyInfo')}</h3>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="propertyLocation" className="block text-sm font-medium text-body mb-2">
                        {t('form.propertyLocation')} *
                      </label>
                      <input
                        type="text"
                        id="propertyLocation"
                        {...register('propertyLocation')}
                        placeholder={t('form.propertyLocationPlaceholder')}
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      />
                      <p className="mt-1 text-sm text-muted">
                        {t('form.propertyLocationHelp')}
                      </p>
                      {errors.propertyLocation && (
                        <p className="mt-1 text-sm text-neutral">{errors.propertyLocation.message}</p>
                      )}
                    </div>

                    <GridFrame>
                      <Region name="support" tabletSpan="half" desktopSpan="half">
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-body mb-2">
                          {t('form.propertyType')} *
                        </label>
                        <select
                          id="propertyType"
                          {...register('propertyType')}
                          className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                        >
                          <option value="">{t('form.selectPlaceholder')}</option>
                          <option value="Apartment">{t('form.propertyTypes.apartment')}</option>
                          <option value="House">{t('form.propertyTypes.house')}</option>
                          <option value="Villa">{t('form.propertyTypes.villa')}</option>
                          <option value="Other">{t('form.propertyTypes.other')}</option>
                        </select>
                        {errors.propertyType && (
                          <p className="mt-1 text-sm text-neutral">{errors.propertyType.message}</p>
                        )}
                      </div>
                      </Region>
                      <Region name="support" tabletSpan="half" desktopSpan="half">
                      <div>
                        <label htmlFor="currentStatus" className="block text-sm font-medium text-body mb-2">
                          {t('form.propertyStatus')} *
                        </label>
                        <select
                          id="currentStatus"
                          {...register('currentStatus')}
                          className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                        >
                          <option value="">{t('form.selectPlaceholder')}</option>
                          {USAGE_SITUATION_SLUGS.map((slug) => (
                            <option key={slug} value={slug}>
                              {t(`form.propertyStatuses.${slug}`)}
                            </option>
                          ))}
                        </select>
                        {errors.currentStatus && (
                          <p className="mt-1 text-sm text-neutral">{errors.currentStatus.message}</p>
                        )}
                      </div>
                      </Region>
                    </GridFrame>
                  </div>
                </div>

                {/* Service Requirements */}
                <div className="bg-surface-light-alt p-6 border border-structural-light">
                  <h3>{t('form.serviceRequirements')}</h3>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="expectedPackage" className="block text-sm font-medium text-body mb-2">
                        {t('form.expectedPackage')} *
                      </label>
                      <select
                        id="expectedPackage"
                        {...register('expectedPackage')}
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      >
                        <option value="">{t('form.selectPlaceholder')}</option>
                        <option value="Basic">{t('form.packages.green')}</option>
                        <option value="Extended">{t('form.packages.orange')}</option>
                        <option value="Full">{t('form.packages.red')}</option>
                        <option value="Not sure - need consultation">{t('form.packages.consultation')}</option>
                      </select>
                      {errors.expectedPackage && (
                        <p className="mt-1 text-sm text-neutral">{errors.expectedPackage.message}</p>
                      )}
                    </div>

                    {(expectedPackage === 'Extended' || expectedPackage === 'Full') && (
                      <div>
                        <label htmlFor="expectedAccessFrequency" className="block text-sm font-medium text-body mb-2">
                          {t('form.accessFrequency')} *
                        </label>
                        <select
                          id="expectedAccessFrequency"
                          {...register('expectedAccessFrequency')}
                          className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                        >
                          <option value="">{t('form.selectPlaceholder')}</option>
                          <option value="1-2 times per month">{t('form.accessFrequencies.oneToTwo')}</option>
                          <option value="3-5 times per month">{t('form.accessFrequencies.threeToFive')}</option>
                          <option value="More than 5 times per month">{t('form.accessFrequencies.moreThanFive')}</option>
                          <option value="Varies seasonally">{t('form.accessFrequencies.seasonal')}</option>
                        </select>
                        {errors.expectedAccessFrequency && (
                          <p className="mt-1 text-sm text-neutral">{errors.expectedAccessFrequency.message}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <label htmlFor="primaryServiceNeeds" className="block text-sm font-medium text-body mb-2">
                        {t('form.primaryNeeds')} ({t('form.optionalLabel')})
                      </label>
                      <textarea
                        id="primaryServiceNeeds"
                        {...register('primaryServiceNeeds')}
                        placeholder={t('form.primaryNeedsPlaceholder')}
                        rows={4}
                        maxLength={500}
                        className="w-full px-5 py-5 border border-structural-light focus:ring-2 focus:ring-authority focus:border-authority"
                      />
                      <p className="mt-1 text-sm text-muted">{t('form.maxCharacters')}</p>
                      {errors.primaryServiceNeeds && (
                        <p className="mt-1 text-sm text-neutral">{errors.primaryServiceNeeds.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Acknowledgment */}
                <div className="notice-panel r">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acknowledgment"
                      {...register('acknowledgment')}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="acknowledgment" className="text-sm text-body">
                      {t('form.acknowledgment')} *
                    </label>
                  </div>
                  {errors.acknowledgment && (
                    <p className="mt-2 text-sm text-neutral">{errors.acknowledgment.message}</p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? tCommon('loading') : t('form.submitButton')}
                  </button>
                </div>
              </form>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default function ContactPage() {
  const tCommon = useTranslations('common');

  return (
    <Suspense fallback={
      <>
        <HeaderClient />
        <main className="min-h-screen">
          <Section tone="light" className="section-primitive--first">
            <div className="py-20"><p className="text-muted">{tCommon('loading')}</p></div>
          </Section>
        </main>
        <Footer />
      </>
    }>
      <ContactPageInner />
    </Suspense>
  );
}

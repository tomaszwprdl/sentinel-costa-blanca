'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocale, useTranslations } from 'next-intl';
import HeaderClient from '@/components/HeaderClient';
import Footer from '@/components/Footer';
import Section from '@/components/layout/Section';
import ContactMethodPanel from '@/components/ContactMethodPanel';
import ContactPreparationChecklist from '@/components/ContactPreparationChecklist';
import ContactRouteCards from '@/components/ContactRouteCards';
import ContactUnsuitableGrid from '@/components/ContactUnsuitableGrid';
import ContactAfterSubmitSteps from '@/components/ContactAfterSubmitSteps';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import ServiceAreaMap from '@/components/visuals/ServiceAreaMap';
import IntakePathDiagram from '@/components/visuals/IntakePathDiagram';

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

type Fact = {
  label: string;
  value: string;
};

type MarkedItem = {
  marker: string;
  title: string;
  body: string;
  note?: string;
};

type InfoCard = {
  title: string;
  body: string;
};

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

  const heroFacts = t.raw('redesign.hero.facts') as Fact[];
  const preparationItems = t.raw('redesign.prepare.items') as MarkedItem[];
  const routeCards = t.raw('redesign.routes.cards') as Required<MarkedItem>[];
  const fitCards = t.raw('redesign.fit.cards') as InfoCard[];
  const unsuitableItems = t.raw('redesign.unsuitable.items') as InfoCard[];
  const afterSubmitSteps = t.raw('redesign.afterSubmit.steps') as MarkedItem[];
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
        ? `EUR ${rangeParts[0]}-${rangeParts[1]}`
        : (range || '-');

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
        <main className="contact-page min-h-screen">
          <Section tone="authority" className="section-primitive--first contact-hero">
            <div className="max-w-[760px]">
              <p className="hero-kicker">{t('redesign.confirmation.eyebrow')}</p>
              <h1 className="hero-display max-w-[16ch]">{t('redesign.confirmation.headline')}</h1>
              <p className="hero-lead">{t('redesign.confirmation.body')}</p>
            </div>
          </Section>

          <Section tone="light">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
              <div className="visual-card-strong p-5 md:p-8">
                <h2 className="h2-system">{t('confirmation.nextStepsTitle')}</h2>
                <ol className="mt-6 list-decimal space-y-3 pl-5 text-body">
                  <li>{t('confirmation.nextSteps.step1', { email: tCommon('contact.email') })}</li>
                  <li>{t('confirmation.nextSteps.step2')}</li>
                  <li>{t('confirmation.nextSteps.step3')}</li>
                </ol>
              </div>

              <aside className="visual-card p-5 md:p-6">
                {referenceNumber && (
                  <div className="mb-6 rounded-2xl bg-surface-light-alt p-4">
                    <p className="mb-1 text-xs font-black uppercase tracking-wide text-muted">
                      {t('confirmation.referenceNumber')}
                    </p>
                    <p className="mb-0 text-lg font-black text-heading">{referenceNumber}</p>
                  </div>
                )}
                <h3 className="text-xl font-black text-heading">{t('confirmation.noResponseTitle')}</h3>
                <p className="text-sm leading-relaxed text-body">
                  {t('confirmation.noResponseText', { email: tCommon('contact.email'), phone: tCommon('contact.phone') })}
                </p>
                <Link href={`/${locale}`} className="btn-primary mt-5">
                  {t('confirmation.returnToHome')}
                </Link>
              </aside>
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
      <main className="contact-page min-h-screen">
        <Section tone="authority" className="section-primitive--first contact-hero" id="contact-start">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(20rem,0.38fr)] lg:items-center">
            <div>
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[17ch]">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead max-w-[64ch]">{t('redesign.hero.lead')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#intake-form" className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link href="#prepare" className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority">
                  {t('redesign.hero.secondaryCta')}
                </Link>
              </div>
              <div className="hero-fact-grid">
                {heroFacts.map((fact) => (
                  <div key={fact.label} className="hero-fact">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <figure className="contact-hero-media">
              <div className="contact-hero-media__frame bg-surface-light">
                <Image
                  src="/visuals/sentinel-contact-intake-path.svg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </figure>
          </div>
        </Section>

        <Section tone="light" className="contact-section contact-section--method">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(18rem,0.42fr)] lg:items-start">
            <div>
              <p className="section-label">{t('redesign.method.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.method.title')}</h2>
              <p className="mt-3 text-body">{t('intro.responseCommitment')}</p>
            </div>
            <ContactMethodPanel
              eyebrow={t('directContact.subtitle')}
              title={t('directContact.title')}
              emailLabel={t('directContact.email')}
              email={tCommon('contact.email')}
              phoneLabel={t('directContact.phone')}
              phone={tCommon('contact.phone')}
              hoursLabel={t('directContact.hoursTitle')}
              hours={tCommon('contact.hours')}
              note={t('redesign.method.note')}
            />
          </div>
        </Section>

        <Section tone="alt" id="intake-form" className="contact-section contact-section--intake">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <p className="section-label">{t('redesign.form.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.form.title')}</h2>
              <p className="mt-3 text-body">{t('redesign.form.intro')}</p>
              <IntakePathDiagram className="mt-6 hidden lg:block" />
              <p className="notice-panel mt-6 text-sm leading-relaxed text-body">
                {t('redesign.form.submitNote')}
              </p>
            </aside>

            <div className="contact-intake-shell p-4 md:p-6">
              {pathwayKey && (
                <div className="visual-card p-5 mb-5">
                  <h3 className="text-base font-black text-heading">{t('pathwayContext.title')}</h3>
                  <p className="mb-0 text-sm leading-relaxed text-body">{t(`pathwayContext.${pathwayKey}`)}</p>
                </div>
              )}

              {estimatorPrefill && (
                <div className="visual-card p-5 mb-5">
                  <h3 className="text-base font-black text-heading">{t('estimatorContext.title')}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-body">
                    <li><strong>{t('estimatorContext.package')}:</strong> {tEst(`packages.${estimatorPrefill.package}`)}</li>
                    <li><strong>{t('estimatorContext.mode')}:</strong> {estimatorPrefill.mode === 'private_use' ? tEst('modePrivateUse') : tEst('modeActiveGuest')}</li>
                    <li><strong>{t('estimatorContext.size')}:</strong> {estimatorPrefill.sqm != null ? `${estimatorPrefill.sqm} m2` : '-'}</li>
                    <li><strong>{t('estimatorContext.bedrooms')}:</strong> {estimatorPrefill.bedrooms === 'B4P' ? '4+' : estimatorPrefill.bedrooms.slice(1)}</li>
                    <li><strong>{t('estimatorContext.scopeElements')}:</strong> {estimatorPrefill.scopeElements.length ? estimatorPrefill.scopeElements.map((k) => tEst(`scopeElements.${k}`)).join(', ') : '-'}</li>
                    <li><strong>{t('estimatorContext.range')}:</strong> {estimatorPrefill.rangeDisplay}</li>
                  </ul>
                </div>
              )}

              {submitError && (
                <div className="notice-panel mb-5">
                  <p className="mb-0 text-authority font-medium">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <fieldset className="form-section">
                  <span className="form-section__label">01</span>
                  <legend className="mb-5 text-xl font-black text-heading">{t('redesign.form.ownerSection')}</legend>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-body mb-2">
                        {t('form.fullName')} *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        {...register('fullName')}
                        className="form-control"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-neutral">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-body mb-2">
                        {t('form.emailAddress')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className="form-control"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-neutral">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-body mb-2">
                        {t('form.phoneNumber')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        placeholder="+34 123 456 789"
                        className="form-control"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-neutral">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-body mb-2">
                        {t('form.preferredContact')} *
                      </label>
                      <select
                        id="preferredContactMethod"
                        {...register('preferredContactMethod')}
                        className="form-control"
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

                    <div>
                      <label htmlFor="preferredLanguage" className="block text-sm font-medium text-body mb-2">
                        {t('form.preferredLanguage')} *
                      </label>
                      <select
                        id="preferredLanguage"
                        {...register('preferredLanguage')}
                        className="form-control"
                      >
                        <option value="">{t('form.selectPlaceholder')}</option>
                        <option value="English">{t('form.languages.english')}</option>
                        <option value="Polish">{t('form.languages.polish')}</option>
                      </select>
                      {errors.preferredLanguage && (
                        <p className="mt-1 text-sm text-neutral">{errors.preferredLanguage.message}</p>
                      )}
                    </div>
                  </div>
                </fieldset>

                <fieldset className="form-section">
                  <span className="form-section__label">02</span>
                  <legend className="mb-5 text-xl font-black text-heading">{t('redesign.form.propertySection')}</legend>
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
                        className="form-control"
                      />
                      <p className="mt-1 text-sm text-muted">
                        {t('form.propertyLocationHelp')}
                      </p>
                      {errors.propertyLocation && (
                        <p className="mt-1 text-sm text-neutral">{errors.propertyLocation.message}</p>
                      )}
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-body mb-2">
                          {t('form.propertyType')} *
                        </label>
                        <select
                          id="propertyType"
                          {...register('propertyType')}
                          className="form-control"
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

                      <div>
                        <label htmlFor="currentStatus" className="block text-sm font-medium text-body mb-2">
                          {t('form.propertyStatus')} *
                        </label>
                        <select
                          id="currentStatus"
                          {...register('currentStatus')}
                          className="form-control"
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
                    </div>
                  </div>
                </fieldset>

                <fieldset className="form-section">
                  <span className="form-section__label">03</span>
                  <legend className="mb-5 text-xl font-black text-heading">{t('redesign.form.serviceSection')}</legend>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="expectedPackage" className="block text-sm font-medium text-body mb-2">
                        {t('form.expectedPackage')} *
                      </label>
                      <select
                        id="expectedPackage"
                        {...register('expectedPackage')}
                        className="form-control"
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
                          {t('form.accessFrequency')}
                        </label>
                        <select
                          id="expectedAccessFrequency"
                          {...register('expectedAccessFrequency')}
                          className="form-control"
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
                        rows={5}
                        maxLength={500}
                        className="form-control"
                      />
                      <p className="mt-1 text-sm text-muted">{t('form.maxCharacters')}</p>
                      {errors.primaryServiceNeeds && (
                        <p className="mt-1 text-sm text-neutral">{errors.primaryServiceNeeds.message}</p>
                      )}
                    </div>
                  </div>
                </fieldset>

                <fieldset className="notice-panel">
                  <span className="form-section__label">04</span>
                  <legend className="mb-4 text-xl font-black text-heading">{t('redesign.form.consentSection')}</legend>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acknowledgment"
                      {...register('acknowledgment')}
                      className="mt-1 mr-3 h-4 w-4 r"
                    />
                    <label htmlFor="acknowledgment" className="text-sm leading-relaxed text-body">
                      {t('form.acknowledgment')} *
                    </label>
                  </div>
                  {errors.acknowledgment && (
                    <p className="mt-2 text-sm text-neutral">{errors.acknowledgment.message}</p>
                  )}
                </fieldset>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {isSubmitting ? tCommon('loading') : t('form.submitButton')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Section>

        <Section tone="light" id="prepare" className="contact-section contact-section--prepare">
          <ContactPreparationChecklist
            eyebrow={t('redesign.prepare.eyebrow')}
            title={t('redesign.prepare.title')}
            intro={t('redesign.prepare.intro')}
            items={preparationItems}
          />
        </Section>

        <Section tone="alt" className="contact-section contact-section--routes">
          <ContactRouteCards
            eyebrow={t('redesign.routes.eyebrow')}
            title={t('redesign.routes.title')}
            intro={t('redesign.routes.intro')}
            cards={routeCards}
          />
        </Section>

        <Section tone="light" className="contact-section contact-section--fit">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center">
            <div>
              <p className="section-label">{t('redesign.fit.eyebrow')}</p>
              <h2 className="h2-system mt-3">{t('redesign.fit.title')}</h2>
              <p className="mt-3 text-body">{t('redesign.fit.intro')}</p>
              <div className="contact-fit-list mt-6">
                {fitCards.map((card) => (
                  <article key={card.title} className="contact-fit-list__item">
                    <h3 className="mb-1 text-base font-black text-heading">{card.title}</h3>
                    <p className="mb-0 text-sm leading-relaxed text-body">{card.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 mb-0 text-sm leading-relaxed text-muted">{t('redesign.fit.note')}</p>
            </div>

            <div className="grid gap-4">
              <IntakePathDiagram />
              <ServiceAreaMap labels={serviceAreaMapLabels} compact />
            </div>
          </div>
        </Section>

        <Section tone="alt" className="contact-section contact-section--unsuitable">
          <ContactUnsuitableGrid
            eyebrow={t('redesign.unsuitable.eyebrow')}
            title={t('redesign.unsuitable.title')}
            intro={t('redesign.unsuitable.intro')}
            items={unsuitableItems}
          />
        </Section>

        <Section tone="light" className="contact-section contact-section--after">
          <ContactAfterSubmitSteps
            eyebrow={t('redesign.afterSubmit.eyebrow')}
            title={t('redesign.afterSubmit.title')}
            intro={t('redesign.afterSubmit.intro')}
            steps={afterSubmitSteps}
          />
        </Section>

        <Section tone="authority" className="contact-section contact-section--final">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(16rem,0.32fr)] lg:items-end">
            <div>
              <p className="section-label text-authority-on-dark/70">{t('redesign.form.eyebrow')}</p>
              <h2 className="h2-system mt-3 text-authority-on-dark">{t('redesign.finalCta.title')}</h2>
              <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-authority-on-dark/86">
                {t('redesign.finalCta.intro')}
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-stretch">
              <Link href="#intake-form" className="btn-primary !border-surface-light !bg-surface-light !text-authority hover:!bg-surface-light-alt">
                {t('form.submitButton')}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="btn-secondary !border-authority-on-dark !text-authority-on-dark hover:!bg-surface-light hover:!text-authority"
              >
                {tCommon('nav.services')}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <MobileStickyCTA
        primaryHref="#intake-form"
        primaryLabel={t('redesign.hero.primaryCta')}
        suppressWhenVisible="#intake-form, footer, #site-footer, .site-footer"
      />
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

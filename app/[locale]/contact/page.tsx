'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
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
import MobileStickyCTA from '@/components/MobileStickyCTA';

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
  email: z.string().min(1, t('form.requiredField')).email(t('form.errors.invalidEmail')),
  phone: z.string().min(5, t('form.requiredField')),
  preferredContactMethod: z.enum(['Email', 'WhatsApp', 'Phone'], {
    error: t('form.errors.preferredContactMethod'),
  }),
  preferredLanguage: z.enum(['English', 'Polish'], {
    error: t('form.errors.preferredLanguage'),
  }),
  propertyLocation: z.string().min(3, t('form.requiredField')),
  propertyType: z.enum(['Apartment', 'House', 'Villa', 'Other'], {
    error: t('form.errors.propertyType'),
  }),
  currentStatus: z.enum(['private-use-only', 'regular-guest-stays', 'mixed-not-defined'], {
    error: t('form.errors.currentStatus'),
  }),
  expectedPackage: z.enum(['Basic', 'Extended', 'Full', 'Not sure - need consultation'], {
    error: t('form.errors.expectedPackage'),
  }),
  expectedAccessFrequency: z.string().optional(),
  primaryServiceNeeds: z.string().max(500, t('form.maxCharacters')).optional(),
  acknowledgment: z.boolean().refine((val) => val === true, {
    message: t('form.requiredField'),
  }),
});

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="contact-field-error" role="alert">
      {message}
    </p>
  );
}

function ContactInfoList({
  items,
  markerMode = 'text',
}: {
  items: Array<MarkedItem | InfoCard>;
  markerMode?: 'text' | 'number';
}) {
  return (
    <div className="contact-info-list">
      {items.map((item, index) => {
        const marker = 'marker' in item ? item.marker : String(index + 1).padStart(2, '0');

        return (
          <article key={`${marker}-${item.title}`} className="contact-info-list__item">
            <span className="contact-info-list__marker" aria-hidden="true">
              {markerMode === 'number' ? String(index + 1).padStart(2, '0') : marker}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {'note' in item && item.note ? <p className="contact-info-list__note">{item.note}</p> : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ContactPageInner() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const t = useTranslations('contact');
  const tEst = useTranslations('services.estimator');
  const tCommon = useTranslations('common');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const preparationItems = t.raw('redesign.prepare.items') as MarkedItem[];
  const routeCards = t.raw('redesign.routes.cards') as Required<MarkedItem>[];
  const nextSteps = t.raw('redesign.afterSubmit.steps') as MarkedItem[];

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

  const fieldErrorProps = (name: keyof ContactFormData) =>
    errors[name]
      ? { 'aria-invalid': true as const, 'aria-describedby': `${name}-error` }
      : {};

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
        console.error('Contact submit API error:', result);
        setSubmitError(t('form.submitError'));
        return;
      }

      setReferenceNumber(result.referenceNumber);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Contact submit failed:', error);
      setSubmitError(t('form.submitErrorGeneric'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <>
        <HeaderClient />
        <main id="main-content" tabIndex={-1} className="contact-page min-h-screen">
          <Section tone="authority" className="section-primitive--first contact-hero contact-dossier-hero contact-success-hero">
            <div className="contact-hero-grid contact-hero-grid--success">
              <div>
                <p className="hero-kicker">{t('redesign.confirmation.eyebrow')}</p>
                <h1 className="hero-display max-w-[16ch]">{t('redesign.confirmation.headline')}</h1>
                <p className="hero-lead max-w-[58ch]">{t('redesign.confirmation.body')}</p>
              </div>
              <aside className="contact-record-artifact contact-record-artifact--success">
                <div className="contact-record-artifact__top">
                  <p className="section-label">{t('confirmation.referenceNumber')}</p>
                  <h2>{referenceNumber ?? t('redesign.confirmation.eyebrow')}</h2>
                </div>
                <p className="mb-0 text-sm leading-relaxed text-body">
                  {t('confirmation.noResponseText', { email: tCommon('contact.email'), phone: tCommon('contact.phone') })}
                </p>
              </aside>
            </div>
          </Section>

          <Section tone="light" className="contact-section contact-success-section">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(18rem,0.38fr)]">
              <div className="contact-next-shell">
                <div className="contact-section-heading">
                  <p className="section-label">{t('redesign.afterSubmit.eyebrow')}</p>
                  <h2 className="h2-system">{t('confirmation.nextStepsTitle')}</h2>
                </div>
                <ol className="contact-next-list">
                  <li>{t('confirmation.nextSteps.step1', { email: tCommon('contact.email') })}</li>
                  <li>{t('confirmation.nextSteps.step2')}</li>
                  <li>{t('confirmation.nextSteps.step3')}</li>
                </ol>
              </div>

              <aside className="contact-support-panel contact-support-panel--calm">
                <h3>{routeCards[0]?.title}</h3>
                <p>{routeCards[0]?.note}</p>
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
      <main id="main-content" tabIndex={-1} className="contact-page min-h-screen">
        <Section tone="authority" className="section-primitive--first contact-hero contact-dossier-hero" id="contact-start">
          <div className="contact-hero-grid">
            <div className="contact-hero-copy">
              <p className="hero-kicker">{t('redesign.hero.eyebrow')}</p>
              <h1 className="hero-display max-w-[14ch]">{t('redesign.hero.headline')}</h1>
              <p className="hero-lead max-w-[62ch]">{t('redesign.hero.lead')}</p>
              <div className="contact-hero-actions">
                <Link href="#intake-form" className="btn-primary">
                  {t('redesign.hero.primaryCta')}
                </Link>
                <Link href="#qualification-context" className="btn-secondary btn-secondary-on-dark">
                  {t('redesign.hero.secondaryCta')}
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section tone="alt" id="contact-intake" className="contact-section contact-dossier-intake-section">
          <div className="contact-intake-layout">
            <div className="contact-form-file" id="intake-form">
              <div className="contact-intake-shell contact-form-dossier">
                <div className="contact-form-dossier__header">
                  <div>
                    <p className="section-label contact-form-dossier__eyebrow">{t('redesign.form.eyebrow')}</p>
                    <h2 className="h2-system">{t('redesign.form.title')}</h2>
                    <p className="mt-3 mb-0 text-body">{t('redesign.form.intro')}</p>
                  </div>
                </div>

                {pathwayKey && (
                  <div className="contact-context-card">
                    <h3>{t('pathwayContext.title')}</h3>
                    <p>{t(`pathwayContext.${pathwayKey}`)}</p>
                  </div>
                )}

                {estimatorPrefill && (
                  <div className="contact-context-card">
                    <h3>{t('estimatorContext.title')}</h3>
                    <ul>
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

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form-fields">
                  <fieldset className="form-section contact-form-section">
                    <legend>
                      <span className="form-section__label" aria-hidden="true">01</span>
                      <span>{t('redesign.form.ownerSection')}</span>
                    </legend>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="contact-field-label">
                          {t('form.fullName')} *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          autoComplete="name"
                          {...register('fullName')}
                          {...fieldErrorProps('fullName')}
                          className="form-control"
                        />
                        <FieldError id="fullName-error" message={errors.fullName?.message} />
                      </div>

                      <div>
                        <label htmlFor="email" className="contact-field-label">
                          {t('form.emailAddress')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          {...register('email')}
                          {...fieldErrorProps('email')}
                          className="form-control"
                        />
                        <FieldError id="email-error" message={errors.email?.message} />
                      </div>

                      <div>
                        <label htmlFor="phone" className="contact-field-label">
                          {t('form.phoneNumber')} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          autoComplete="tel"
                          {...register('phone')}
                          {...fieldErrorProps('phone')}
                          placeholder={t('form.phonePlaceholder')}
                          className="form-control"
                        />
                        <FieldError id="phone-error" message={errors.phone?.message} />
                      </div>

                      <div>
                        <label htmlFor="preferredContactMethod" className="contact-field-label">
                          {t('form.preferredContact')} *
                        </label>
                        <select
                          id="preferredContactMethod"
                          {...register('preferredContactMethod')}
                          {...fieldErrorProps('preferredContactMethod')}
                          className="form-control"
                        >
                          <option value="">{t('form.selectPlaceholder')}</option>
                          <option value="Email">{t('form.contactMethods.email')}</option>
                          <option value="WhatsApp">{t('form.contactMethods.whatsapp')}</option>
                          <option value="Phone">{t('form.contactMethods.phone')}</option>
                        </select>
                        <FieldError id="preferredContactMethod-error" message={errors.preferredContactMethod?.message} />
                      </div>

                      <div>
                        <label htmlFor="preferredLanguage" className="contact-field-label">
                          {t('form.preferredLanguage')} *
                        </label>
                        <select
                          id="preferredLanguage"
                          {...register('preferredLanguage')}
                          {...fieldErrorProps('preferredLanguage')}
                          className="form-control"
                        >
                          <option value="">{t('form.selectPlaceholder')}</option>
                          <option value="English">{t('form.languages.english')}</option>
                          <option value="Polish">{t('form.languages.polish')}</option>
                        </select>
                        <FieldError id="preferredLanguage-error" message={errors.preferredLanguage?.message} />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="form-section contact-form-section">
                    <legend>
                      <span className="form-section__label" aria-hidden="true">02</span>
                      <span>{t('redesign.form.propertySection')}</span>
                    </legend>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="propertyLocation" className="contact-field-label">
                          {t('form.propertyLocation')} *
                        </label>
                        <input
                          type="text"
                          id="propertyLocation"
                          {...register('propertyLocation')}
                          {...fieldErrorProps('propertyLocation')}
                          placeholder={t('form.propertyLocationPlaceholder')}
                          className="form-control"
                        />
                        <p className="contact-field-help">
                          {t('form.propertyLocationHelp')}
                        </p>
                        <FieldError id="propertyLocation-error" message={errors.propertyLocation?.message} />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="propertyType" className="contact-field-label">
                            {t('form.propertyType')} *
                          </label>
                          <select
                            id="propertyType"
                            {...register('propertyType')}
                            {...fieldErrorProps('propertyType')}
                            className="form-control"
                          >
                            <option value="">{t('form.selectPlaceholder')}</option>
                            <option value="Apartment">{t('form.propertyTypes.apartment')}</option>
                            <option value="House">{t('form.propertyTypes.house')}</option>
                            <option value="Villa">{t('form.propertyTypes.villa')}</option>
                            <option value="Other">{t('form.propertyTypes.other')}</option>
                          </select>
                          <FieldError id="propertyType-error" message={errors.propertyType?.message} />
                        </div>

                        <div>
                          <label htmlFor="currentStatus" className="contact-field-label">
                            {t('form.propertyStatus')} *
                          </label>
                          <select
                            id="currentStatus"
                            {...register('currentStatus')}
                            {...fieldErrorProps('currentStatus')}
                            className="form-control"
                          >
                            <option value="">{t('form.selectPlaceholder')}</option>
                            {USAGE_SITUATION_SLUGS.map((slug) => (
                              <option key={slug} value={slug}>
                                {t(`form.propertyStatuses.${slug}`)}
                              </option>
                            ))}
                          </select>
                          <FieldError id="currentStatus-error" message={errors.currentStatus?.message} />
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="form-section contact-form-section">
                    <legend>
                      <span className="form-section__label" aria-hidden="true">03</span>
                      <span>{t('redesign.form.serviceSection')}</span>
                    </legend>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="expectedPackage" className="contact-field-label">
                          {t('form.expectedPackage')} *
                        </label>
                        <select
                          id="expectedPackage"
                          {...register('expectedPackage')}
                          {...fieldErrorProps('expectedPackage')}
                          className="form-control"
                        >
                          <option value="">{t('form.selectPlaceholder')}</option>
                          <option value="Basic">{t('form.packages.green')}</option>
                          <option value="Extended">{t('form.packages.orange')}</option>
                          <option value="Full">{t('form.packages.red')}</option>
                          <option value="Not sure - need consultation">{t('form.packages.consultation')}</option>
                        </select>
                        <FieldError id="expectedPackage-error" message={errors.expectedPackage?.message} />
                      </div>

                      {(expectedPackage === 'Extended' || expectedPackage === 'Full') && (
                        <div>
                          <label htmlFor="expectedAccessFrequency" className="contact-field-label">
                            {t('form.accessFrequency')}
                          </label>
                          <select
                            id="expectedAccessFrequency"
                            {...register('expectedAccessFrequency')}
                            {...fieldErrorProps('expectedAccessFrequency')}
                            className="form-control"
                          >
                            <option value="">{t('form.selectPlaceholder')}</option>
                            <option value="1-2 times per month">{t('form.accessFrequencies.oneToTwo')}</option>
                            <option value="3-5 times per month">{t('form.accessFrequencies.threeToFive')}</option>
                            <option value="More than 5 times per month">{t('form.accessFrequencies.moreThanFive')}</option>
                            <option value="Varies seasonally">{t('form.accessFrequencies.seasonal')}</option>
                          </select>
                          <FieldError id="expectedAccessFrequency-error" message={errors.expectedAccessFrequency?.message} />
                        </div>
                      )}

                      <div>
                        <label htmlFor="primaryServiceNeeds" className="contact-field-label">
                          {t('form.primaryNeeds')} ({t('form.optionalLabel')})
                        </label>
                        <textarea
                          id="primaryServiceNeeds"
                          {...register('primaryServiceNeeds')}
                          {...fieldErrorProps('primaryServiceNeeds')}
                          placeholder={t('form.primaryNeedsPlaceholder')}
                          rows={5}
                          maxLength={500}
                          className="form-control"
                        />
                        <p className="contact-field-help">{t('form.maxCharacters')}</p>
                        <FieldError id="primaryServiceNeeds-error" message={errors.primaryServiceNeeds?.message} />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="notice-panel contact-consent-panel">
                    <legend>
                      <span className="form-section__label" aria-hidden="true">04</span>
                      <span>{t('redesign.form.consentSection')}</span>
                    </legend>
                    <div className="contact-consent-panel__check">
                      <input
                        type="checkbox"
                        id="acknowledgment"
                        {...register('acknowledgment')}
                        {...fieldErrorProps('acknowledgment')}
                      />
                      <label htmlFor="acknowledgment">
                        {t('form.acknowledgment')} *
                      </label>
                    </div>
                    <FieldError id="acknowledgment-error" message={errors.acknowledgment?.message} />
                  </fieldset>

                  <div className="contact-submit-row">
                    <p>{t('redesign.form.submitNote')}</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? tCommon('loading') : t('form.submitButton')}
                    </button>
                  </div>
                </form>

                <div id="after-sending" className="contact-next-shell contact-next-shell--attached">
                  <div className="contact-section-heading contact-section-heading--compact">
                    <p className="section-label">{t('redesign.afterSubmit.eyebrow')}</p>
                    <h2 className="h2-system">{t('redesign.afterSubmit.title')}</h2>
                    <p>{t('redesign.afterSubmit.intro')}</p>
                  </div>
                  <div className="contact-next-shell__steps">
                    {nextSteps.map((step) => (
                      <article key={step.marker} className="contact-next-step">
                        <span>{step.marker}</span>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="contact-intake-support">
              <div className="contact-support-panel" id="qualification-context">
                <p className="section-label">{t('redesign.prepare.eyebrow')}</p>
                <h3>{t('redesign.dossier.helpsTitle')}</h3>
                <ContactInfoList items={preparationItems.slice(0, 3)} />
              </div>

              <ContactMethodPanel
                eyebrow={t('directContact.subtitle')}
                title={t('directContact.title')}
                emailLabel={t('directContact.email')}
                email={tCommon('contact.email')}
                phoneLabel={t('directContact.phone')}
                phone={tCommon('contact.phone')}
                responseLabel={t('directContact.responseTitle')}
                responseValue={t('directContact.responseValue')}
                responseNote={t('directContact.responseNote')}
              />
            </aside>
          </div>
        </Section>

        <Section tone="light" className="contact-section contact-closing-section !pt-10 !pb-0">
          <div className="page-final-cta contact-final-cta overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)]">
              <div className="page-final-cta__copy p-5 md:p-8">
                <p className="section-label">{t('redesign.form.eyebrow')}</p>
                <h2 className="h2-system mt-3">{t('redesign.finalCta.title')}</h2>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-body">
                  {t('redesign.finalCta.intro')}
                </p>
              </div>
              <div className="page-final-cta__panel p-5 md:p-8">
                <div className="flex flex-col gap-3">
                  <Link href={`/${locale}/services`} className="btn-primary btn-primary-inverse">
                    {tCommon('nav.services')}
                  </Link>
                  <Link href={`/${locale}/how-it-works`} className="btn-secondary btn-secondary-on-dark">
                    {tCommon('nav.howItWorks')}
                  </Link>
                </div>
              </div>
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
        <main id="main-content" tabIndex={-1} className="min-h-screen">
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

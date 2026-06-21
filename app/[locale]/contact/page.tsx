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

function ContactRecordArtifact({
  title,
  badge,
  rows,
  facts,
}: {
  title: string;
  badge: string;
  rows: Fact[];
  facts: Fact[];
}) {
  return (
    <aside className="contact-record-artifact reveal-rise" aria-label={title}>
      <div className="contact-record-artifact__top">
        <p className="section-label">{badge}</p>
        <h2>{title}</h2>
      </div>
      <dl className="contact-record-artifact__rows">
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="contact-record-artifact__facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
    </aside>
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

  const heroFacts = t.raw('redesign.hero.facts') as Fact[];
  const heroRows = t.raw('redesign.hero.artifactRows') as Fact[];
  const preparationItems = t.raw('redesign.prepare.items') as MarkedItem[];
  const routeCards = t.raw('redesign.routes.cards') as Required<MarkedItem>[];
  const fitCards = t.raw('redesign.fit.cards') as InfoCard[];
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
        <main className="contact-page min-h-screen">
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
      <main className="contact-page min-h-screen">
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

            <ContactRecordArtifact
              title={t('redesign.hero.artifactTitle')}
              badge={t('redesign.hero.artifactBadge')}
              rows={heroRows}
              facts={heroFacts}
            />
          </div>
        </Section>

        <Section tone="alt" id="contact-intake" className="contact-section contact-dossier-intake-section">
          <div className="contact-intake-layout">
            <aside className="contact-intake-support">
              <div className="contact-support-panel contact-support-panel--primary">
                <p className="section-label">{t('redesign.dossier.eyebrow')}</p>
                <h2>{t('redesign.dossier.title')}</h2>
                <p>{t('redesign.dossier.intro')}</p>
              </div>

              <div className="contact-support-panel" id="qualification-context">
                <p className="section-label">{t('redesign.prepare.eyebrow')}</p>
                <h3>{t('redesign.dossier.helpsTitle')}</h3>
                <ContactInfoList items={preparationItems.slice(0, 5)} />
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
            </aside>

            <div className="contact-form-file reveal-rise" id="intake-form">
              <span className="contact-intake-tab">{t('redesign.form.eyebrow')}</span>
              <div className="contact-intake-shell contact-form-dossier p-4 md:p-6">
                <div className="contact-form-dossier__header">
                  <div>
                    <p className="section-label">{t('redesign.form.eyebrow')}</p>
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
                    <span className="form-section__label">01</span>
                    <legend>{t('redesign.form.ownerSection')}</legend>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="contact-field-label">
                          {t('form.fullName')} *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          {...register('fullName')}
                          className="form-control"
                        />
                        {errors.fullName && (
                          <p className="contact-field-error">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="contact-field-label">
                          {t('form.emailAddress')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className="form-control"
                        />
                        {errors.email && (
                          <p className="contact-field-error">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="contact-field-label">
                          {t('form.phoneNumber')} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          placeholder={t('form.phonePlaceholder')}
                          className="form-control"
                        />
                        {errors.phone && (
                          <p className="contact-field-error">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="preferredContactMethod" className="contact-field-label">
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
                          <p className="contact-field-error">{errors.preferredContactMethod.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="preferredLanguage" className="contact-field-label">
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
                          <p className="contact-field-error">{errors.preferredLanguage.message}</p>
                        )}
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="form-section contact-form-section">
                    <span className="form-section__label">02</span>
                    <legend>{t('redesign.form.propertySection')}</legend>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="propertyLocation" className="contact-field-label">
                          {t('form.propertyLocation')} *
                        </label>
                        <input
                          type="text"
                          id="propertyLocation"
                          {...register('propertyLocation')}
                          placeholder={t('form.propertyLocationPlaceholder')}
                          className="form-control"
                        />
                        <p className="contact-field-help">
                          {t('form.propertyLocationHelp')}
                        </p>
                        {errors.propertyLocation && (
                          <p className="contact-field-error">{errors.propertyLocation.message}</p>
                        )}
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="propertyType" className="contact-field-label">
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
                            <p className="contact-field-error">{errors.propertyType.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="currentStatus" className="contact-field-label">
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
                            <p className="contact-field-error">{errors.currentStatus.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="form-section contact-form-section">
                    <span className="form-section__label">03</span>
                    <legend>{t('redesign.form.serviceSection')}</legend>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="expectedPackage" className="contact-field-label">
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
                          <p className="contact-field-error">{errors.expectedPackage.message}</p>
                        )}
                      </div>

                      {(expectedPackage === 'Extended' || expectedPackage === 'Full') && (
                        <div>
                          <label htmlFor="expectedAccessFrequency" className="contact-field-label">
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
                            <p className="contact-field-error">{errors.expectedAccessFrequency.message}</p>
                          )}
                        </div>
                      )}

                      <div>
                        <label htmlFor="primaryServiceNeeds" className="contact-field-label">
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
                        <p className="contact-field-help">{t('form.maxCharacters')}</p>
                        {errors.primaryServiceNeeds && (
                          <p className="contact-field-error">{errors.primaryServiceNeeds.message}</p>
                        )}
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="notice-panel contact-consent-panel">
                    <span className="form-section__label">04</span>
                    <legend>{t('redesign.form.consentSection')}</legend>
                    <div className="contact-consent-panel__check">
                      <input
                        type="checkbox"
                        id="acknowledgment"
                        {...register('acknowledgment')}
                      />
                      <label htmlFor="acknowledgment">
                        {t('form.acknowledgment')} *
                      </label>
                    </div>
                    {errors.acknowledgment && (
                      <p className="contact-field-error">{errors.acknowledgment.message}</p>
                    )}
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
              </div>
            </div>
          </div>
        </Section>

        <Section tone="light" id="after-sending" className="contact-section contact-after-section">
          <div className="contact-after-layout">
            <div className="contact-section-heading">
              <p className="section-label">{t('redesign.afterSubmit.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.afterSubmit.title')}</h2>
              <p>{t('redesign.afterSubmit.intro')}</p>
            </div>
            <div className="contact-next-shell">
              {nextSteps.map((step) => (
                <article key={step.marker} className="contact-next-step">
                  <span>{step.marker}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="alt" className="contact-section contact-boundary-section">
          <div className="contact-boundary-layout">
            <div className="contact-section-heading">
              <p className="section-label">{t('redesign.fit.eyebrow')}</p>
              <h2 className="h2-system">{t('redesign.fit.title')}</h2>
              <p>{t('redesign.fit.intro')}</p>
            </div>

            <div className="contact-support-panel contact-boundary-panel">
              <ContactInfoList items={fitCards} markerMode="number" />
              <p className="contact-support-panel__note">{t('redesign.fit.note')}</p>
            </div>
          </div>
        </Section>

        <Section tone="light" className="contact-section contact-closing-section !pt-10 !pb-0">
          <div className="page-final-cta contact-final-cta reveal-rise overflow-hidden">
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
                  <Link href="#intake-form" className="btn-primary btn-primary-inverse">
                    {t('form.submitButton')}
                  </Link>
                  <Link href={`/${locale}/services`} className="btn-secondary btn-secondary-on-dark">
                    {tCommon('nav.services')}
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

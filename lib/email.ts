import { Resend } from 'resend';
import {
  type ModeKey,
  type PackageKey,
  type ScopeElementKey,
  parseScopeElementParam,
} from '@/lib/estimatorMatrix';
import { type PathwayKey, normalizePathwayParam } from '@/lib/pathway';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const SENTINEL_EMAIL = process.env.SENTINEL_EMAIL || 'sentinelcostablanca@gmail.com';
const SENTINEL_PHONE = process.env.SENTINEL_PHONE || '+34 694 22 90 35';
const SENTINEL_NOTIFICATION_FROM =
  process.env.SENTINEL_NOTIFICATION_FROM || 'Sentinel <notifications@sentinelcostablanca.com>';

export class EmailDeliveryError extends Error {
  readonly statusCode: 500 | 503;

  constructor(message: string, statusCode: 500 | 503 = 503) {
    super(message);
    this.name = 'EmailDeliveryError';
    this.statusCode = statusCode;
  }
}

type SafeEmailLog = {
  hasResendKey: boolean;
  from: string;
  recipient: string;
  referenceNumber?: string;
  providerStatus?: string;
  providerMessage?: string;
};

function logEmailAttempt(log: SafeEmailLog) {
  console.info('Contact email delivery', log);
}

function getResendClient(): Resend {
  if (!resend) {
    logEmailAttempt({
      hasResendKey: false,
      from: SENTINEL_NOTIFICATION_FROM,
      recipient: SENTINEL_EMAIL,
      providerStatus: 'skipped',
      providerMessage: 'RESEND_API_KEY not configured',
    });
    throw new EmailDeliveryError('Email delivery is not configured', 503);
  }
  return resend;
}

async function sendWithResend(
  payload: {
    from: string;
    to: string[];
    subject: string;
    html: string;
    replyTo?: string;
  },
  logContext: Omit<SafeEmailLog, 'hasResendKey' | 'from' | 'recipient' | 'providerStatus' | 'providerMessage'>
) {
  const client = getResendClient();
  const recipient = payload.to.join(', ');

  logEmailAttempt({
    hasResendKey: true,
    from: payload.from,
    recipient,
    ...logContext,
  });

  try {
    const { data, error } = await client.emails.send({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      replyTo: payload.replyTo,
    });

    if (error) {
      logEmailAttempt({
        hasResendKey: true,
        from: payload.from,
        recipient,
        ...logContext,
        providerStatus: 'rejected',
        providerMessage: error.message,
      });
      throw new EmailDeliveryError(`Email provider rejected delivery: ${error.message}`, 503);
    }

    logEmailAttempt({
      hasResendKey: true,
      from: payload.from,
      recipient,
      ...logContext,
      providerStatus: 'accepted',
      providerMessage: data?.id ? `message-id:${data.id}` : 'accepted',
    });
  } catch (error) {
    if (error instanceof EmailDeliveryError) {
      throw error;
    }

    const message = error instanceof Error ? error.message : 'Unknown email delivery error';
    logEmailAttempt({
      hasResendKey: true,
      from: payload.from,
      recipient,
      ...logContext,
      providerStatus: 'failed',
      providerMessage: message,
    });
    throw new EmailDeliveryError(`Email delivery failed: ${message}`, 500);
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const PATHWAY_LABELS: Record<PathwayKey, string> = {
  'private-use-only': 'Private Use Only',
  'regular-guest-stays': 'Regular Guest Stays',
  'mixed-not-defined': 'Mixed / Not Yet Defined',
};

const PACKAGE_LABELS: Record<PackageKey, string> = {
  structured_presence: 'Basic',
  active_oversight: 'Extended',
  extended_jurisdiction: 'Full',
};

const MODE_LABELS: Record<ModeKey, string> = {
  private_use: 'Private Use Only',
  active_guest: 'Regular Guest Stays',
};

const SCOPE_LABELS: Record<ScopeElementKey, string> = {
  cleaning_readiness: 'Readiness cleaning',
  turnover_cleaning: 'Turnover cleaning support',
  linen: 'Linen handling',
  guest_check: 'Guest check support',
  keyholding: 'Keyholding',
  vendor_access: 'Vendor / technician access',
};

const LEGACY_USAGE_LABELS: Record<string, string> = {
  'Empty most of the year': 'Private Use Only (legacy submission)',
  'Occasional personal use': 'Occasional personal use (legacy submission)',
  'Short-term rental': 'Regular Guest Stays (legacy submission)',
  Other: 'Other (legacy submission)',
};

export type ContactSubmission = {
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  preferredLanguage: string;
  propertyLocation: string;
  propertyType: string;
  currentStatus: string;
  expectedPackage: string;
  expectedAccessFrequency?: string;
  primaryServiceNeeds?: string;
  pathwaySlug?: string;
  pathwayLabel?: string;
  estimatorPackage?: string;
  estimatorMode?: string;
  estimatorSize?: string;
  estimatorSqm?: number;
  estimatorBedrooms?: string;
  estimatorScope?: string;
  estimatorRange?: string;
};

function formatUsageSituationLabel(value: string): string {
  const normalized = normalizePathwayParam(value);
  if (normalized) return PATHWAY_LABELS[normalized];
  return LEGACY_USAGE_LABELS[value] ?? value;
}

function formatPackageLabel(value: string | undefined): string | null {
  if (!value) return null;
  return PACKAGE_LABELS[value as PackageKey] ?? value;
}

function formatModeLabel(value: string | undefined): string | null {
  if (!value) return null;
  return MODE_LABELS[value as ModeKey] ?? value;
}

function formatScopeLabels(scope: string | undefined): string | null {
  if (!scope?.trim()) return null;
  const keys = parseScopeElementParam(scope);
  if (keys.length === 0) return null;
  return keys.map((k) => SCOPE_LABELS[k] ?? k).join(', ');
}

function hasEstimatorContext(data: ContactSubmission): boolean {
  return Boolean(
    data.estimatorPackage ||
      data.estimatorMode ||
      data.estimatorSize ||
      data.estimatorBedrooms ||
      data.estimatorScope ||
      data.estimatorRange ||
      data.estimatorSqm
  );
}

function buildContextEmailBlock(data: ContactSubmission): string {
  const rows: string[] = [];
  const pathwaySlug = data.pathwaySlug ? normalizePathwayParam(data.pathwaySlug) : null;

  if (pathwaySlug || data.pathwayLabel) {
    const label =
      data.pathwayLabel?.trim() ||
      (pathwaySlug ? PATHWAY_LABELS[pathwaySlug] : '') ||
      data.pathwaySlug ||
      '';
    rows.push(`<li><strong>Usage situation / pathway:</strong> ${escapeHtml(label)}</li>`);
    if (pathwaySlug === 'mixed-not-defined' && !hasEstimatorContext(data)) {
      rows.push(
        '<li><strong>Classification note:</strong> Mixed / Not Yet Defined — classification-first pathway; no numeric estimate submitted.</li>'
      );
    }
  }

  const packageLabel = formatPackageLabel(data.estimatorPackage);
  if (packageLabel) {
    rows.push(`<li><strong>Estimator package:</strong> ${escapeHtml(packageLabel)}</li>`);
  }

  const modeLabel = formatModeLabel(data.estimatorMode);
  if (modeLabel) {
    rows.push(`<li><strong>Estimator mode:</strong> ${escapeHtml(modeLabel)}</li>`);
  }

  if (data.estimatorSqm != null && Number.isFinite(data.estimatorSqm)) {
    rows.push(`<li><strong>Property area:</strong> ${escapeHtml(String(data.estimatorSqm))} m²</li>`);
  } else if (data.estimatorSize) {
    rows.push(`<li><strong>Size band:</strong> ${escapeHtml(data.estimatorSize)}</li>`);
  }

  if (data.estimatorBedrooms) {
    const bedroomsDisplay = data.estimatorBedrooms === 'B4P' ? '4+' : data.estimatorBedrooms.slice(1);
    rows.push(`<li><strong>Bedrooms:</strong> ${escapeHtml(bedroomsDisplay)}</li>`);
  }

  const scopeLabels = formatScopeLabels(data.estimatorScope);
  if (scopeLabels) {
    rows.push(`<li><strong>Operational scope elements:</strong> ${escapeHtml(scopeLabels)}</li>`);
  }

  if (data.estimatorRange?.trim()) {
    rows.push(`<li><strong>Estimated monthly range:</strong> ${escapeHtml(data.estimatorRange)} (indicative)</li>`);
  }

  if (rows.length === 0) return '';

  return `
    <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Usage &amp; Estimator Context</h3>
    <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
      ${rows.join('\n      ')}
    </ul>
    <p style="color: #1a1a1a; font-size: 14px; line-height: 1.6; margin-top: 10px;">
      Estimate is indicative. Final scope is confirmed after structured review.
    </p>
  `;
}

export function generateReferenceNumber(): string {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `#SEN-${dateStr}-${random}`;
}

export async function sendAutoResponseEmail(
  to: string,
  name: string,
  referenceNumber: string,
  propertyLocation: string,
  expectedPackage: string,
  preferredContactMethod: string,
  preferredLanguage: string
) {
  const safeName = escapeHtml(name);
  const safeLocation = escapeHtml(propertyLocation);
  const safePackage = escapeHtml(expectedPackage);
  const safeMethod = escapeHtml(preferredContactMethod);
  const safeLanguage = escapeHtml(preferredLanguage);
  const safeReference = escapeHtml(referenceNumber);

  await sendWithResend(
    {
      from: SENTINEL_NOTIFICATION_FROM,
      to: [to],
      replyTo: SENTINEL_EMAIL,
      subject: `Sentinel - Inquiry Received [Reference: ${referenceNumber}]`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">Sentinel</h2>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">Dear ${safeName},</p>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">Thank you for contacting Sentinel.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-left: 4px solid #171717;">
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;"><strong>Your inquiry details:</strong></p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">- Property Location: ${safeLocation}</p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">- Expected Package: ${safePackage}</p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">- Preferred Contact: ${safeMethod} in ${safeLanguage}</p>
          </div>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">What happens next:</h3>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">
            Sentinel will review your submitted property and scope information within 24-48 hours and verify that your property is within our service area (Torrevieja + 50-70km radius).
          </p>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">
            Final scope is confirmed after structured review. If your property location and service needs align with our operational model, we will contact you via ${safeMethod}.
          </p>
          
          <div style="background-color: #fff3cd; padding: 15px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;"><strong>If your property is outside our service area:</strong></p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">
              We will notify you via email. Unfortunately, we cannot service properties beyond our geographic boundaries.
            </p>
          </div>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Questions before we respond?</h3>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">
            You can reach us directly:
          </p>
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li>Email: ${escapeHtml(SENTINEL_EMAIL)}</li>
            <li>Phone/WhatsApp: ${escapeHtml(SENTINEL_PHONE)}</li>
          </ul>
          
          <p style="color: #1a1a1a; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            Please reference your inquiry number: <strong>${safeReference}</strong>
          </p>
          
          <p style="color: #737373; font-size: 14px; margin-top: 20px;">
            Sentinel<br />
            ${escapeHtml(SENTINEL_EMAIL)}<br />
            ${escapeHtml(SENTINEL_PHONE)}
          </p>
        </div>
      `,
    },
    { referenceNumber }
  );
}

export async function sendNotificationEmail(referenceNumber: string, formData: ContactSubmission) {
  const safeReference = escapeHtml(referenceNumber);
  const safeLocation = escapeHtml(formData.propertyLocation);
  const usageLabel = escapeHtml(formatUsageSituationLabel(formData.currentStatus));
  const contextBlock = buildContextEmailBlock(formData);

  await sendWithResend(
    {
      from: SENTINEL_NOTIFICATION_FROM,
      to: [SENTINEL_EMAIL],
      replyTo: formData.email,
      subject: `New Inquiry - ${referenceNumber} - ${formData.propertyLocation}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">New Inquiry Received</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0;">
            <p style="color: #1a1a1a; font-size: 16px; margin: 5px 0;"><strong>Reference Number:</strong> ${safeReference}</p>
            <p style="color: #1a1a1a; font-size: 16px; margin: 5px 0;"><strong>Submitted:</strong> ${escapeHtml(new Date().toLocaleString())}</p>
          </div>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Contact Information</h3>
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li><strong>Name:</strong> ${escapeHtml(formData.fullName)}</li>
            <li><strong>Email:</strong> ${escapeHtml(formData.email)}</li>
            <li><strong>Phone:</strong> ${escapeHtml(formData.phone)}</li>
            <li><strong>Preferred Contact:</strong> ${escapeHtml(formData.preferredContactMethod)}</li>
            <li><strong>Preferred Language:</strong> ${escapeHtml(formData.preferredLanguage)}</li>
          </ul>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Property Information</h3>
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li><strong>Location:</strong> ${safeLocation}</li>
            <li><strong>Type:</strong> ${escapeHtml(formData.propertyType)}</li>
            <li><strong>Usage situation (form):</strong> ${usageLabel}</li>
          </ul>

          ${contextBlock}
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Service Requirements</h3>
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li><strong>Expected Package:</strong> ${escapeHtml(formData.expectedPackage)}</li>
            ${formData.expectedAccessFrequency ? `<li><strong>Expected Access Frequency:</strong> ${escapeHtml(formData.expectedAccessFrequency)}</li>` : ''}
            ${formData.primaryServiceNeeds ? `<li><strong>Primary Service Needs:</strong> ${escapeHtml(formData.primaryServiceNeeds)}</li>` : ''}
          </ul>
          
          <div style="background-color: #fff3cd; padding: 15px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;"><strong>Action Required:</strong></p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">
              Review inquiry and respond within 24-48 hours. Verify property location is within service area (Torrevieja + 50-70km radius).
            </p>
          </div>
        </div>
      `,
    },
    { referenceNumber }
  );
}

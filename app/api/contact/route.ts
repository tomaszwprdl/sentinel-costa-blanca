import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { parseScopeElementParam } from '@/lib/estimatorMatrix';
import { normalizePathwayParam } from '@/lib/pathway';
import {
  generateReferenceNumber,
  sendAutoResponseEmail,
  sendNotificationEmail,
  type ContactSubmission,
} from '@/lib/email';

const emptyToUndefined = (value: string | undefined) =>
  value === undefined || value.trim() === '' ? undefined : value.trim();

const usageSituationSchema = z
  .enum([
    'private-use-only',
    'regular-guest-stays',
    'mixed-not-defined',
    'Empty most of the year',
    'Occasional personal use',
    'Short-term rental',
    'Other',
  ])
  .transform((value) => {
    const legacyMap: Record<string, ContactSubmission['currentStatus']> = {
      'Empty most of the year': 'private-use-only',
      'Occasional personal use': 'private-use-only',
      'Short-term rental': 'regular-guest-stays',
      Other: 'mixed-not-defined',
    };
    return legacyMap[value] ?? value;
  });

const optionalEmpty = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((value) => (value === '' || value === null || value === undefined ? undefined : value), schema);

const contactFormSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(5).max(40),
  preferredContactMethod: z.enum(['Email', 'WhatsApp', 'Phone']),
  preferredLanguage: z.enum(['English', 'Polish']),
  propertyLocation: z.string().min(3).max(300),
  propertyType: z.enum(['Apartment', 'House', 'Villa', 'Other']),
  currentStatus: usageSituationSchema,
  expectedPackage: z.enum(['Basic', 'Extended', 'Full', 'Not sure - need consultation']),
  expectedAccessFrequency: z.string().max(120).optional(),
  primaryServiceNeeds: z.string().max(500).optional(),
  acknowledgment: z.boolean().refine((val) => val === true),
  pathwaySlug: optionalEmpty(
    z
      .string()
      .max(64)
      .transform((value) => normalizePathwayParam(value.trim()) ?? undefined)
      .optional()
  ),
  pathwayLabel: optionalEmpty(z.string().max(200).optional()),
  estimatorPackage: optionalEmpty(
    z.enum(['structured_presence', 'active_oversight', 'extended_jurisdiction']).optional()
  ),
  estimatorMode: optionalEmpty(z.enum(['private_use', 'active_guest']).optional()),
  estimatorSize: optionalEmpty(z.enum(['S', 'M', 'L']).optional()),
  estimatorSqm: optionalEmpty(z.coerce.number().int().min(20).max(1000).optional()),
  estimatorBedrooms: optionalEmpty(z.enum(['B1', 'B2', 'B3', 'B4P']).optional()),
  estimatorScope: optionalEmpty(
    z
      .string()
      .max(500)
      .optional()
      .transform((value) => {
        if (!value?.trim()) return undefined;
        const keys = parseScopeElementParam(value);
        return keys.length > 0 ? keys.join(',') : undefined;
      })
  ),
  estimatorRange: optionalEmpty(z.string().max(32).optional()),
}).transform((data) => ({
  ...data,
  pathwayLabel: emptyToUndefined(data.pathwayLabel),
  expectedAccessFrequency: emptyToUndefined(data.expectedAccessFrequency),
  primaryServiceNeeds: emptyToUndefined(data.primaryServiceNeeds),
  estimatorRange: emptyToUndefined(data.estimatorRange),
})) as z.ZodType<ContactSubmission>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const referenceNumber = generateReferenceNumber();

    await Promise.all([
      sendAutoResponseEmail(
        validatedData.email,
        validatedData.fullName,
        referenceNumber,
        validatedData.propertyLocation,
        validatedData.expectedPackage,
        validatedData.preferredContactMethod,
        validatedData.preferredLanguage
      ),
      sendNotificationEmail(referenceNumber, validatedData),
    ]);

    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        message: 'Inquiry submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit inquiry. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}

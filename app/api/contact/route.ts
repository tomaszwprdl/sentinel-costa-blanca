import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { generateReferenceNumber, sendAutoResponseEmail, sendNotificationEmail } from '@/lib/email';

const contactFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  preferredContactMethod: z.enum(['Email', 'WhatsApp', 'Phone']),
  preferredLanguage: z.enum(['English', 'Polish']),
  propertyLocation: z.string().min(3),
  propertyType: z.enum(['Apartment', 'House', 'Villa', 'Other']),
  currentStatus: z.enum(['Empty most of the year', 'Occasional personal use', 'Short-term rental', 'Other']),
  expectedPackage: z.enum(['Basic', 'Extended', 'Full', 'Not sure - need consultation']),
  expectedAccessFrequency: z.string().optional(),
  primaryServiceNeeds: z.string().max(500).optional(),
  acknowledgment: z.boolean().refine((val) => val === true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate data
    const validatedData = contactFormSchema.parse(body);

    // Generate reference number
    const referenceNumber = generateReferenceNumber();

    // Send emails in parallel
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

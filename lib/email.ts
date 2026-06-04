import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
  const guardianEmail = process.env.GUARDIAN_EMAIL || '[EMAIL]';
  const guardianPhone = process.env.GUARDIAN_PHONE || '[PHONE]';

  if (!resend) {
    console.warn('RESEND_API_KEY not configured. Email not sent.');
    return;
  }

  try {
    await resend.emails.send({
      from: 'Sentinel <sentinelcostablanca@gmail.com>',
      to: [to],
      subject: `Sentinel - Inquiry Received [Reference: ${referenceNumber}]`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">Sentinel</h2>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">Thank you for contacting Sentinel.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-left: 4px solid #171717;">
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;"><strong>Your inquiry details:</strong></p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">- Property Location: ${propertyLocation}</p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">- Expected Package: ${expectedPackage}</p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">- Preferred Contact: ${preferredContactMethod} in ${preferredLanguage}</p>
          </div>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">What happens next:</h3>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">
            We will review your inquiry within 24-48 hours and verify that your property is within our service area (Torrevieja + 50-70km radius).
          </p>
          
          <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6;">
            If your property location and service needs align with our operational model, we will contact you via ${preferredContactMethod} to:
          </p>
          
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li>Confirm property location eligibility</li>
            <li>Discuss your specific service requirements</li>
            <li>Recommend the appropriate package</li>
            <li>Outline the onboarding process</li>
          </ul>
          
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
            <li>Email: ${guardianEmail}</li>
            <li>Phone/WhatsApp: ${guardianPhone}</li>
          </ul>
          
          <p style="color: #1a1a1a; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            Please reference your inquiry number: <strong>${referenceNumber}</strong>
          </p>
          
          <p style="color: #737373; font-size: 14px; margin-top: 20px;">
            Sentinel<br />
            ${guardianEmail}<br />
            ${guardianPhone}
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send auto-response email:', error);
    throw error;
  }
}

export async function sendNotificationEmail(
  referenceNumber: string,
  formData: {
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
  }
) {
  const guardianEmail = process.env.GUARDIAN_EMAIL || '[EMAIL]';

  if (!resend) {
    console.warn('RESEND_API_KEY not configured. Email not sent.');
    return;
  }

  try {
    await resend.emails.send({
      from: 'Sentinel Contact Form <sentinelcostablanca@gmail.com>',
      to: [guardianEmail],
      subject: `New Inquiry - ${referenceNumber} - ${formData.propertyLocation}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">New Inquiry Received</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0;">
            <p style="color: #1a1a1a; font-size: 16px; margin: 5px 0;"><strong>Reference Number:</strong> ${referenceNumber}</p>
            <p style="color: #1a1a1a; font-size: 16px; margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Contact Information</h3>
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li><strong>Name:</strong> ${formData.fullName}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Phone:</strong> ${formData.phone}</li>
            <li><strong>Preferred Contact:</strong> ${formData.preferredContactMethod}</li>
            <li><strong>Preferred Language:</strong> ${formData.preferredLanguage}</li>
          </ul>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Property Information</h3>
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li><strong>Location:</strong> ${formData.propertyLocation}</li>
            <li><strong>Type:</strong> ${formData.propertyType}</li>
            <li><strong>Current Status:</strong> ${formData.currentStatus}</li>
          </ul>
          
          <h3 style="color: #1a1a1a; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">Service Requirements</h3>
          <ul style="color: #1a1a1a; font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li><strong>Expected Package:</strong> ${formData.expectedPackage}</li>
            ${formData.expectedAccessFrequency ? `<li><strong>Expected Access Frequency:</strong> ${formData.expectedAccessFrequency}</li>` : ''}
            ${formData.primaryServiceNeeds ? `<li><strong>Primary Service Needs:</strong> ${formData.primaryServiceNeeds}</li>` : ''}
          </ul>
          
          <div style="background-color: #fff3cd; padding: 15px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;"><strong>Action Required:</strong></p>
            <p style="color: #1a1a1a; font-size: 14px; margin: 5px 0;">
              Review inquiry and respond within 24-48 hours. Verify property location is within service area (Torrevieja + 50-70km radius).
            </p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Failed to send notification email:', error);
    throw error;
  }
}

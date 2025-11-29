
// pages/api/contact.js
import sendgrid from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || process.env.TO_EMAIL || 'SuruDigitalCare@gmail.com';
const TO_EMAIL = process.env.TO_EMAIL || 'SuruDigitalCare@gmail.com';

if (SENDGRID_API_KEY) {
  sendgrid.setApiKey(SENDGRID_API_KEY);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, serviceCategory, message, details } = req.body || {};

  // Basic validation
  if (!name || !email || !serviceCategory || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const subject = `[SURU Contact] ${serviceCategory} - ${name}`;
  const textContent = `
  New contact request from SuruDigitalCare website
  Name: ${name}
  Email: ${email}
  Phone: ${phone || ''}
  Service: ${serviceCategory}
  Message: ${message}
  Details: ${details || ''}
  `;

  // If SendGrid key is missing, respond success for demo but don't send email.
  if (!SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured — skipping actual email send (demo mode)');
    return res.status(200).json({ ok: true, demo: true, message: 'No API key configured — demo mode' });
  }

  try {
    await sendgrid.send({
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject,
      text: textContent,
      html: `<pre>${textContent}</pre>`
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SendGrid error:', err);
    const message = err?.response?.body || err.message || 'Send failed';
    return res.status(500).json({ error: 'Failed to send', info: message });
  }
}

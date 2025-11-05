// app/api/contact/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    // validations basiques
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Nom invalide' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ error: 'Message trop court' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;

    if (!to || !from) {
      console.error('Env CONTACT_TO or CONTACT_FROM missing');
      return NextResponse.json({ error: 'Configuration serveur manquante' }, { status: 500 });
    }

    const subject = `Nouveau message de contact de ${name}`;
    const html = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Message :</strong></p>
      <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:6px">${escapeHtml(message)}</div>
    `;

    const msg = {
      to,
      from,
      subject,
      text: `Nouveau message de ${name} (${email}) :\n\n${message}`,
      html,
    };

    await sgMail.send(msg);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('SendGrid error:', err);
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }
}
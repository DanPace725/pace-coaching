import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const defaultFromEmail = 'Friction Point Website <website@frictionpoint.co>';
const defaultContactEmail = 'contact@frictionpoint.co';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let resendClient: Resend | null = null;

type ContactPayload = {
  email?: unknown;
  note?: unknown;
  company?: unknown;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  if (!resendClient) resendClient = new Resend(apiKey);
  return resendClient;
}

function cleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (Number.isFinite(contentLength) && contentLength > 10_000) {
    return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
  }

  const origin = request.headers.get('origin');
  const requestHost = (request.headers.get('x-forwarded-host') || request.headers.get('host'))
    ?.split(',')[0]
    .trim();
  if (origin && requestHost) {
    try {
      if (new URL(origin).host !== requestHost) {
        return NextResponse.json({ error: 'Request origin is not allowed.' }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: 'Request origin is not valid.' }, { status: 403 });
    }
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Request body is not valid.' }, { status: 400 });
  }

  const email = cleanString(payload.email).toLowerCase();
  const note = cleanString(payload.note);
  const company = cleanString(payload.company);

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  if (note.length > 4_000) {
    return NextResponse.json({ error: 'Keep the note under 4,000 characters.' }, { status: 400 });
  }

  const resend = getResendClient();
  if (!resend) {
    return NextResponse.json({ error: 'Contact email is not configured.' }, { status: 503 });
  }

  const from = process.env.RESEND_FROM_EMAIL?.trim() || defaultFromEmail;
  const to = process.env.CONTACT_EMAIL?.trim() || defaultContactEmail;
  const text = [
    'A new inquiry was submitted through frictionpoint.co.',
    '',
    `Reply to: ${email}`,
    '',
    'Message:',
    note || '(No note was provided.)',
  ].join('\n');

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: 'Friction Point website inquiry',
      text,
    });

    if (error) {
      console.error('Resend rejected a contact email.', { name: error.name, message: error.message });
      return NextResponse.json({ error: 'Message delivery failed.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email delivery failed.', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Message delivery failed.' }, { status: 502 });
  }
}

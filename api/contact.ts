export const config = { runtime: 'edge' };

type Inquiry = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

console.log("API KEY:", process.env.RESEND_API_KEY);
console.log("FROM:", process.env.EMAIL_FROM);
console.log("TO:", process.env.EMAIL_TO);

declare const process: {
  env: Record<string, string | undefined>;
};

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async function handler(request: Request) {
  if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);

  let inquiry: Inquiry;
  try {
    inquiry = await request.json() as Inquiry;
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  if (inquiry.website) return json({ ok: true });

  const name = typeof inquiry.name === 'string' ? inquiry.name.trim() : '';
  const email = typeof inquiry.email === 'string' ? inquiry.email.trim() : '';
  const message = typeof inquiry.message === 'string' ? inquiry.message.trim() : '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !message) {
    return json({ error: 'Please provide a name, valid email, and message.' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return json({ error: 'Email service is not configured.' }, 500);
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) return json({ error: 'Email service rejected the message.' }, 502);
  return json({ ok: true });
}
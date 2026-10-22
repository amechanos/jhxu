import { useState } from 'react';
import type { FormEvent } from 'react';
import '../styles/contact.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) throw new Error('The inquiry could not be sent.');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="container contact-section" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <p className="section-kicker">Start a conversation</p>
        <h2 id="contact-heading">Have an idea?</h2>
        <p className="muted">Tell me what you are working on, what you need, or simply where your curiosity is taking you.</p>
        <a className="contact-email" href="mailto:jhxu07@gmail.com">jhxu07@gmail.com</a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={6} required />
        </label>
        <input className="contact-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button className="contact-submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send inquiry'}
        </button>
        <p className={`contact-status contact-status-${status}`} role="status" aria-live="polite">
          {status === 'success' && 'Thanks, your message is on its way.'}
          {status === 'error' && 'Something went wrong. Please email me directly instead.'}
        </p>
      </form>
    </section>
  );
}

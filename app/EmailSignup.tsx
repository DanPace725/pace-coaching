'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const contactEmail = 'contact@frictionpoint.co';

type SubmissionState = 'idle' | 'sending' | 'sent' | 'error';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const isSending = submissionState === 'sending';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          note,
          company: formData.get('company'),
        }),
      });

      if (!response.ok) throw new Error('Message delivery failed.');

      setEmail('');
      setNote('');
      form.reset();
      setSubmissionState('sent');
    } catch {
      setSubmissionState('error');
    }
  }

  function clearFeedback() {
    if (submissionState !== 'idle') setSubmissionState('idle');
  }

  const buttonLabel = isSending
    ? 'Sending...'
    : submissionState === 'sent'
      ? 'Message sent'
      : 'Send message';

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSending}
      className="relative rounded-lg bg-surface border border-linefp p-5 text-ink"
    >
      <label className="block">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slatefp">Email</span>
        <input
          type="email"
          name="email"
          required
          maxLength={254}
          disabled={isSending}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            clearFeedback();
          }}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-lg border border-linefp bg-mist2 text-ink px-3 py-2 text-sm outline-none transition-colors focus:border-steel disabled:opacity-60"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slatefp">Optional note</span>
        <textarea
          name="note"
          value={note}
          maxLength={4_000}
          disabled={isSending}
          onChange={(event) => {
            setNote(event.target.value);
            clearFeedback();
          }}
          rows={4}
          placeholder="A sentence or two about what you are looking for."
          className="mt-2 w-full resize-y rounded-lg border border-linefp bg-mist2 px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-steel disabled:opacity-60"
        />
      </label>

      <label aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        type="submit"
        disabled={isSending}
        className="mt-5 w-full rounded-lg bg-steel px-5 py-3 font-sans text-sm font-medium text-actionink transition-colors hover:bg-steeldeep disabled:cursor-wait disabled:opacity-60"
      >
        {buttonLabel}
      </button>

      {submissionState === 'sent' && (
        <p role="status" className="mt-3 text-center text-sm text-emerald-600 dark:text-emerald-300">
          Thanks. Your message has been sent.
        </p>
      )}
      {submissionState === 'error' && (
        <p role="alert" className="mt-3 text-center text-sm text-rose-600 dark:text-rose-300">
          The message could not be sent. Please try again or use the email link below.
        </p>
      )}

      <a
        href={`mailto:${contactEmail}`}
        className="mt-3 block text-center text-xs text-mutedfp hover:text-navy"
      >
        Or email {contactEmail}
      </a>
    </form>
  );
}

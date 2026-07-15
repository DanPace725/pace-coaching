'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const contactEmail = 'contact@frictionpoint.co';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent('Friction Point inquiry');
    const body = encodeURIComponent(
      [
        `Email: ${email}`,
        '',
        note ? `Note: ${note}` : 'Note:',
      ].join('\n'),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-surface border border-linefp p-5 text-ink">
      <label className="block">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slatefp">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-lg border border-linefp bg-mist2 text-ink px-3 py-2 text-sm outline-none transition-colors focus:border-steel"
        />
      </label>
      <label className="mt-4 block">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slatefp">Optional note</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={4}
          placeholder="A sentence or two about what you are looking for."
          className="mt-2 w-full resize-y rounded-lg border border-linefp px-3 py-2 text-sm outline-none transition-colors focus:border-steel"
        />
      </label>
      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-steel px-5 py-3 font-sans text-sm font-medium text-actionink transition-colors hover:bg-steeldeep"
      >
        Open email draft
      </button>
      <a
        href={`mailto:${contactEmail}`}
        className="mt-3 block text-center text-xs text-mutedfp hover:text-navy"
      >
        Or email {contactEmail}
      </a>
    </form>
  );
}

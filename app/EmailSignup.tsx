'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const contactEmail = 'dpace@campusone80.com';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent('Pace Coaching inquiry');
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
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-5 text-gray-900">
      <label className="block">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition-colors focus:border-gray-400"
        />
      </label>
      <label className="mt-4 block">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">Optional note</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={4}
          placeholder="A sentence or two about what you are looking for."
          className="mt-2 w-full resize-y rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition-colors focus:border-gray-400"
        />
      </label>
      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Share my email
      </button>
      <a
        href={`mailto:${contactEmail}`}
        className="mt-3 block text-center text-xs text-gray-500 hover:text-gray-900"
      >
        Or email {contactEmail}
      </a>
    </form>
  );
}

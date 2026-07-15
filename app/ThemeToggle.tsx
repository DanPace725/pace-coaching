'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const current = document.documentElement.dataset.mode;
    if (current === 'light' || current === 'dark') {
      setMode(current);
    }
  }, []);

  function toggle() {
    const next = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem('fp-mode', next);
    } catch {
      /* private browsing — theme just won't persist */
    }
    setMode(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      className="font-sans text-xs font-medium border border-linefp rounded-full px-3 py-1.5 text-mutedfp hover:text-navy hover:border-slatefp transition-colors"
    >
      {mode === 'dark' ? '☀ Light' : '☾ Dark'}
    </button>
  );
}

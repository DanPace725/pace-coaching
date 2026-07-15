'use client';

import { useSyncExternalStore } from 'react';

type Mode = 'dark' | 'light';

const modeEvent = 'friction-point-mode-change';

function subscribeToMode(callback: () => void) {
  window.addEventListener(modeEvent, callback);
  return () => window.removeEventListener(modeEvent, callback);
}

function getModeSnapshot(): Mode {
  return document.documentElement.dataset.mode === 'light' ? 'light' : 'dark';
}

function getServerModeSnapshot(): Mode {
  return 'dark';
}

export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribeToMode, getModeSnapshot, getServerModeSnapshot);

  function toggle() {
    const next = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem('fp-mode', next);
    } catch {
      // In private browsing, the theme still changes for the current page.
    }
    window.dispatchEvent(new Event(modeEvent));
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

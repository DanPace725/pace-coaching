import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import { FrictionGrid } from './FrictionGrid';

export const metadata: Metadata = {
  title: 'Friction Grid | Friction Point',
  description: 'A free, private-in-your-browser tool for mapping current friction and choosing one small experiment.',
};

const noticingPrompts = [
  'What situations leave you feeling drained?',
  'Where do your senses feel overwhelmed?',
  'Who or what consistently irritates you?',
  'When does your body resist or freeze?',
  'Which interactions cause lingering tension?',
];

export default function GridPage() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <header className="sticky top-0 z-50 border-b border-linefp bg-page/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fp-mark.svg" alt="" aria-hidden="true" className="h-8 w-auto dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fp-mark-dark.svg" alt="" aria-hidden="true" className="hidden h-8 w-auto dark:block" />
            <span className="font-display text-xl font-semibold tracking-tight text-navy">Friction Point</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden font-sans text-sm text-mutedfp transition-colors hover:text-navy sm:block">
              Back to site
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-linefp bg-mist2">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-steel">Free awareness tool</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.08] tracking-tight text-navy sm:text-6xl">
              Make everyday strain visible enough to work with.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mutedfp sm:text-xl">
              Map the friction you notice across five life domains and three possible sources, then choose one pattern
              that deserves closer attention.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-start">
            <div>
              <h2 className="font-display text-3xl font-medium text-navy sm:text-4xl">Before you map</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-mutedfp">
                Use present-tense judgment rather than trying to produce a permanent score. These questions may help
                you notice where friction is showing up.
              </p>
            </div>
            <ol className="space-y-3 font-sans text-sm text-mutedfp">
              {noticingPrompts.map((prompt, index) => (
                <li key={prompt} className="flex gap-3">
                  <span aria-hidden="true" className="text-steel">{String(index + 1).padStart(2, '0')}</span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14">
            <FrictionGrid />
          </div>
        </section>

        <section className="border-y border-linefp bg-mist2">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-medium text-navy sm:text-4xl">Use this as a map, not a verdict.</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-mutedfp">
                A high score is an invitation to investigate. It does not prove a personal, relational, or structural
                cause. Urgent safety, health, legal, or financial needs belong with an appropriately qualified professional.
              </p>
            </div>
            <div className="flex flex-col gap-3 font-sans text-sm sm:flex-row lg:flex-col">
              <a
                href="/downloads/friction-grid.pdf"
                download
                className="rounded-lg border border-linefp px-5 py-3 text-center font-medium text-navy transition-colors hover:border-slatefp"
              >
                Download the PDF
              </a>
              <a
                href="https://calendly.com/frictionpoint"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-steel px-5 py-3 text-center font-medium text-actionink transition-colors hover:bg-steeldeep"
              >
                Schedule a discovery session
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-linefp">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 font-sans text-xs text-slatefp sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Friction Point, a practice of Pace Consulting Services LLC.</p>
          <Link href="/" className="transition-colors hover:text-mutedfp">Return to the main site</Link>
        </div>
      </footer>
    </div>
  );
}

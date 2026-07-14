import Link from 'next/link';
import EmailSignup from './EmailSignup';

const offers = [
  {
    name: 'Friction Grid',
    role: 'Free recognition resource',
    description: 'Map where friction is gathering and choose one area that deserves closer attention.',
    detail: 'Useful on its own. The Grid locates reported friction; it does not determine cause.',
    href: '#resources',
    action: 'Get the free Grid',
  },
  {
    name: 'Friction Snapshot',
    role: 'Paid, bounded diagnostic',
    description: 'Bring one recurring stuck point to a focused 60-minute session and receive a concise written report.',
    detail: 'The report separates what was observed from what appears likely and what remains possible.',
    href: '#contact',
    action: 'Ask about a Snapshot',
  },
  {
    name: 'Friction Fix Sprint',
    role: 'Optional implementation',
    description: 'Build one maintainable support—such as a workflow, checklist, decision rule, tracker, or small automation.',
    detail: 'A Sprint is proposed only when a specific artifact is likely to reduce the identified friction.',
    href: '#contact',
    action: 'Discuss a possible Sprint',
  },
] as const;

const goodFit = [
  'You can feel recurring friction but cannot quite name what sustains it.',
  'You want a bounded investigation rather than a total-life or total-organization assessment.',
  'You are willing to examine one recent example and distinguish evidence from interpretation.',
  'You are open to a small, testable change that fits the life or work you actually have.',
];

const notFit = [
  'You are in acute crisis and need clinical or emergency support.',
  'You need medical, legal, financial, or other licensed professional advice.',
  'You want someone else to take permanent ownership of the problem.',
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-gray-900 tracking-tight">
            Friction Point
          </Link>
          <nav aria-label="Primary navigation" className="hidden sm:flex items-center gap-8 text-sm text-gray-500">
            <a href="#approach" className="hover:text-gray-900 transition-colors">Approach</a>
            <a href="#offers" className="hover:text-gray-900 transition-colors">Ways to work</a>
            <a href="#resources" className="hover:text-gray-900 transition-colors">Free Grid</a>
            <a href="#fit" className="hover:text-gray-900 transition-colors">Fit</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Friction Point</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-tight max-w-3xl">
              Every point of friction is a potential point of failure or freedom.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-3xl leading-relaxed">
              Practical coaching and consulting for people and small teams who want to make one recurring stuck
              pattern legible—and build the smallest useful structure that restores movement.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#offers" className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors text-center">
                Explore ways to work
              </a>
              <a href="#resources" className="px-6 py-3 text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-colors text-center">
                Get the free Friction Grid
              </a>
            </div>
          </div>
        </section>

        <section id="approach" className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">The approach</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-10">
              Map before solving. Work with one recurring stuck point at a time.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                ['Surface', 'Use your language to make the friction and its context visible.'],
                ['Trace', 'Reconstruct one recent episode and identify where movement broke down.'],
                ['Scaffold and test', 'Try the smallest safe support and choose a signal that will show whether it helps.'],
              ].map(([title, description]) => (
                <div key={title}>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offers">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Ways to work</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-4">
              Start with the lightest level of support that can be useful.
            </p>
            <p className="text-gray-500 max-w-2xl leading-relaxed mb-10">
              Each step stands on its own. Using the Grid does not obligate you to book a Snapshot, and a Snapshot
              leads to a Sprint only when a specific support artifact makes sense.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              {offers.map((offer) => (
                <article key={offer.name} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">{offer.role}</p>
                  <h3 className="mt-3 text-xl font-semibold text-gray-900">{offer.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{offer.detail}</p>
                  <a href={offer.href} className="mt-6 text-sm font-medium text-gray-900 hover:text-gray-600">
                    {offer.action} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-center">
              <div>
                <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Free resource</h2>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug">
                  Make everyday strain visible enough to work with.
                </p>
                <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed">
                  The Friction Grid maps current friction across life domains and internal, relational, and structural
                  sources. It is a present-tense awareness tool, not a diagnosis or verdict.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">PDF download</p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">Friction Grid</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  A printable two-page worksheet for mapping friction, noticing patterns, and choosing one small experiment.
                </p>
                <a
                  href="/downloads/friction-grid.pdf"
                  download
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                >
                  Download the PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="fit">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Fit and boundaries</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-10">
              This works best when you want a careful map and a practical next move—not pressure to push through.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <FitList title="Good fit" items={goodFit} tone="good" />
              <FitList title="Not the right fit" items={notFit} tone="muted" />
            </div>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-gray-400">
              Friction Point does not provide therapy, crisis care, diagnosis, medical or veterinary care, legal or
              tax advice, financial planning, licensed engineering, or guaranteed outcomes. When a need falls outside
              the work, we pause, narrow the scope, or refer appropriately.
            </p>
          </div>
        </section>

        <section id="about" className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <div className="max-w-3xl">
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">About</h2>
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-6">
                My name is Daniel. I help people and small teams follow friction to the place where something can actually change.
              </p>
              <p className="text-gray-500 leading-relaxed">
                I am a coach, consultant, and systems thinker. The work is practical and plainspoken: hear what is
                true, trace one recurring pattern, distinguish evidence from interpretation, and build the smallest
                useful support. My perspective also includes focused experience with neurodivergent adults navigating
                life, work, and relationships in systems that were not built for them.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                  Start with a free 30-minute discovery session.
                </h2>
                <p className="text-gray-400 max-w-xl leading-relaxed">
                  Bring one recurring stuck point or a question about the work. We will use the conversation to see
                  whether a Friction Snapshot or another next step seems useful and responsible.
                </p>
                <a
                  href="https://calendly.com/frictionpoint"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
                >
                  Schedule a free 30-minute session
                </a>
                <p className="mt-4 text-sm text-gray-500">Prefer email? Use the form.</p>
              </div>
              <EmailSignup />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Friction Point, a practice of Pace Consulting Services LLC.</p>
          <nav aria-label="Footer navigation" className="flex gap-6">
            <a href="#approach" className="hover:text-gray-600 transition-colors">Approach</a>
            <a href="#offers" className="hover:text-gray-600 transition-colors">Ways to work</a>
            <a href="#resources" className="hover:text-gray-600 transition-colors">Free Grid</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function FitList({ title, items, tone }: { title: string; items: string[]; tone: 'good' | 'muted' }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 text-sm ${tone === 'good' ? 'text-gray-600' : 'text-gray-400'}`}>
            <span aria-hidden="true" className={`mt-0.5 shrink-0 ${tone === 'good' ? 'text-emerald-500' : 'text-gray-300'}`}>
              {tone === 'good' ? '✓' : '–'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

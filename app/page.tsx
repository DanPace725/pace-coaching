import Link from 'next/link';
import EmailSignup from './EmailSignup';

const dimensions = [
  ['Continuity', 'Can you still recognize yourself across the roles you carry?'],
  ['Vitality', 'Is there energy left for your actual life?'],
  ['Contextual Fit', 'Do your roles and environments fit how you actually work?'],
  ['Differentiation', 'Can you tell your real limits from inherited demands?'],
  ['Accountability', 'Can you separate your part from the systems failing around you?'],
  ['Reflexivity', 'Can your self-story update when the evidence changes?'],
];

const goodFit = [
  "You are competent but worn down.",
  "You can feel the friction but cannot quite name the pattern.",
  "You want a real map before making bigger moves.",
  "You are open to small experiments that fit the life you already have.",
];

const notFit = [
  "You are in acute crisis and need clinical care.",
  "You want someone else to make the calls for your life.",
  "You are looking for motivational pressure instead of honest clarity.",
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-gray-900 tracking-tight">
            Pace Coaching
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-gray-500">
            <a href="#approach" className="hover:text-gray-900 transition-colors">Approach</a>
            <a href="#resources" className="hover:text-gray-900 transition-colors">Resources</a>
            <a href="#fit" className="hover:text-gray-900 transition-colors">Fit</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Pace Coaching</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-tight max-w-3xl">
              You're not the only one who hasn't figured it out.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
              For people who hold it together, pay the hidden cost, and still wonder why ordinary life feels harder
              than it should.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors text-center">
                Start a conversation
              </a>
              <a href="#resources" className="px-6 py-3 text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-colors text-center">
                Get the free grid
              </a>
            </div>
          </div>
        </section>

        <section id="approach" className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">The approach</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-10">
              We look for the gap between who you actually are and who your life keeps requiring you to be.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                ['Listen', 'Start with what your life actually feels like, not a checklist.'],
                ['Map', 'Name the roles, demands, workarounds, and stories that keep repeating.'],
                ['Test', 'Design small experiments that reduce load without demanding a total overhaul.'],
              ].map(([title, description]) => (
                <div key={title}>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Where we look</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-10">
              Six places where hidden costs often show up.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dimensions.map(([name, description]) => (
                <div key={name} className="p-5 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-1.5">{name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
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
                  A simple friction grid for naming what daily life has made invisible.
                </p>
                <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed">
                  Use it before coaching, journaling, or a hard conversation. It gives you a first map of where the
                  load is coming from.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">PDF download</p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">Friction Grid</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  A printable worksheet for mapping friction across the six core dimensions.
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
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Fit</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-10">
              This works best when you want honesty about the pattern, not more pressure to push through it.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <FitList title="Good fit" items={goodFit} tone="good" />
              <FitList title="Not the right fit" items={notFit} tone="muted" />
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <div className="max-w-3xl">
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">About</h2>
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-6">
                My name is Daniel. I help people make hidden friction visible.
              </p>
              <p className="text-gray-500 leading-relaxed">
                I am a coach, minister, and systems thinker. The work is practical and plainspoken: see what is really
                happening, name the cost, and test the smallest useful change.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                  Share your email or send a note.
                </h2>
                <p className="text-gray-400 max-w-xl leading-relaxed">
                  No pressure. If this sounds close to what you have been carrying, send a short note and I will reply
                  when I am able.
                </p>
              </div>
              <EmailSignup />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pace Coaching. All rights reserved.</p>
          <nav className="flex gap-6">
            <a href="#approach" className="hover:text-gray-600 transition-colors">Approach</a>
            <a href="#resources" className="hover:text-gray-600 transition-colors">Resources</a>
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
            <span className={`mt-0.5 shrink-0 ${tone === 'good' ? 'text-emerald-500' : 'text-gray-300'}`}>
              {tone === 'good' ? '\u2713' : '-'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

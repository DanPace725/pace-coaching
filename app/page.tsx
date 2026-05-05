import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-gray-900 tracking-tight">
            Pace Coaching
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#resources" className="hover:text-gray-900 transition-colors">Resources</a>
            <a href="#offerings" className="hover:text-gray-900 transition-colors">Offerings</a>
            <a href="#fit" className="hover:text-gray-900 transition-colors">Is This For You</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section className="flex-none">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-tight max-w-3xl">
            You&apos;re not the only one who can&apos;t figure it out.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
            You hold it all together and no one notices. You put out fires, duct-tape solutions, and watch your
            competence become someone else&apos;s reward. Then you go invisible &mdash; even to yourself. There&apos;s a
            million of us. Let&apos;s make the patterns visible.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Start a conversation
            </a>
            <a href="#how-it-works" className="px-6 py-3 text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-colors">
              How it works
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">The problem</h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug">
            You&apos;ve perfected the art of survival, then get crushed by life for the audacity to want to thrive.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Who you actually are</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                How you actually process, the energy you actually have, what you actually need, what you can actually
                carry, and the workarounds you&apos;ve been quietly building for years.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Who your life requires you to be</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                The version of you your roles, relationships, and institutions need to exist so the whole thing keeps
                running. The shape you have to hold so nothing collapses.
              </p>
            </div>
          </div>
          <p className="mt-8 text-gray-500 max-w-2xl leading-relaxed">
            The gap between those two is where the friction lives. You internalize the debt of every system that fails
            you and call it failure and laziness and incompetence. You buy the planners. You go to therapy. You binge
            productivity hacks at midnight. Then you lay back down and wonder why you&apos;re the only one who
            can&apos;t figure it out. You&apos;re not. The friction is real. Most of it is invisible.
          </p>
        </div>
      </section>

      <section id="how-it-works">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">How it works</h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-12">
            Sometimes you need an outside force to see the patterns that are invisible from your perspective.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Listen',
                description:
                  "We start with what your life actually feels like, not a checklist and not a diagnosis. I want to hear where the friction shows up: which roles, which relationships, which hours of the day, which costs no one ever sees.",
              },
              {
                title: 'Map',
                description:
                  "Together we name the invisible costs and friction points that are running you ragged. The patterns in motion. The stories you didn't write but inherited. The places where what you carry doesn't match what you've been given to carry it with.",
              },
              {
                title: 'Test',
                description:
                  "We don't gamble on a life overhaul. We design small, honest, bounded experiments: real, practical solutions that fit your life, not the templated version of your life trying to survive.",
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Where the friction lives</h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-12">
            Six places we look first, because this is usually where the costs hide.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Continuity', description: "Can you still recognize yourself across the different roles you have to play, or do you fracture under pressure and have to put the pieces back together before the scars form?" },
              { name: 'Vitality', description: "Do you have any energy left for your actual life, or is most of it eaten by recovery, workarounds, and just keeping the lights on?" },
              { name: 'Contextual Fit', description: "Do your roles, environments, and relationships fit how you actually work, or are you constantly contorting yourself into structures built for someone else?" },
              { name: 'Differentiation', description: "Can you tell the difference between what you actually want and what's being demanded of you, between your real limits and the ones you've inherited?" },
              { name: 'Accountability', description: "Can you tell the difference between you and the systems failing around you, or have you been quietly absorbing the debt and calling it laziness?" },
              { name: 'Reflexivity', description: "Can you update the story you tell about yourself when the evidence changes, or are you still running explanations from a version of your life you no longer live in?" },
            ].map((dim) => (
              <div key={dim.name} className="p-5 bg-white rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1.5">{dim.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{dim.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-400 max-w-2xl">
            These aren&apos;t personality types or grades. They&apos;re just the places we look together when we&apos;re
            trying to tell the difference between you and the friction you&apos;ve been carrying.
          </p>
        </div>
      </section>

      <section id="resources">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-center">
            <div>
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Free resource</h2>
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug">
                A printable friction grid for naming what your life has been making invisible.
              </p>
              <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed">
                Use it as a quiet first pass before coaching, journaling, or a hard conversation. The grid gives you a
                place to separate what is actually yours from the roles, systems, and expectations that have been
                handing their costs back to you.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">PDF download</p>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">Friction Grid</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                A short, printable worksheet for mapping continuity, vitality, fit, differentiation, accountability,
                and reflexivity.
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

      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">The work</h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-12">
            See you. Name the pain. Sit with it long enough for solutions to become possible.
          </p>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">What I&apos;ll do</h3>
              <ul className="space-y-3">
                {[
                  "Build enough trust that you can stop performing for one hour a week.",
                  "Listen for the patterns underneath your stories, including the contradictions you've been quietly carrying.",
                  "Meet you at your actual baseline, not the one you've been pretending to live at.",
                  "Help you tell the difference between you and the systems that keep failing you.",
                  "Remember what you've told me. Each session builds on the last so the picture gets sharper, not blurrier.",
                  "Help you find the root problem before you spend energy on the wrong fix.",
                  "Put the picture back in plain language you can actually use on a Tuesday morning.",
                  "Design small, bounded experiments. No life overhauls. No pressure for pressure's sake.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="text-gray-300 mt-0.5 shrink-0">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">What I won&apos;t do</h3>
              <ul className="space-y-3">
                {[
                  "Pretend this is therapy or a substitute for mental health care.",
                  "Sell you a transformation through one more mindset shift.",
                  "Hand structural friction back to you as a discipline problem.",
                  "Push you toward productivity-first or neurotypical defaults that were never built for you.",
                  "Pretend I see all of your life from the outside.",
                  "Promise certainty, speed, or some five-step redesign.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400">
                    <span className="mt-0.5 shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">About</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-6">
              Hello <span aria-hidden="true">👋</span>. My name is Daniel.
            </p>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                I&apos;ve lived the invisible life and it wasn&apos;t cutting it. I know what it&apos;s like to fall
                apart every day because the burden of holding it together for everyone else is too much, and no one
                knows how to help, because no one knows what it costs.
              </p>
              <p>
                I&apos;m a coach, a minister, and a systems thinker. After thirteen years in ministry, four
                neurodivergent kids, and a late AuDHD diagnosis that reframed almost everything, I learned the hard way
                that conventional advice tends to break down when your wiring is different and your roles are layered
                and the ground keeps shifting under you.
              </p>
              <p>
                So this isn&apos;t a six-step transformation. It would be an honor to meet you in person. We&apos;ll
                lay it all out on the table, name the invisible costs and friction points that are running you ragged,
                and develop real, practical solutions that fit your life, not the templated version of your life
                trying to survive.
              </p>
              <p>
                I&apos;m not going to guarantee some sort of transformational result. I&apos;m just offering to see
                you, name the pain, and sit with you long enough for solutions to become possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="offerings" className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Offerings</h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-12">
            Structured enough to actually help. Honest enough to fit a real life.
          </p>
          <div className="space-y-8">
            <OfferingCard
              title="Narrative Mapping Process"
              scope="6-10 sessions"
              description="Where most people start. We make the invisible patterns visible, find the root problem underneath the friction, and build a small set of honest, bounded changes you can actually try in the life you already have."
              deliverables={[
                'A map of your life in plain language, not jargon',
                "A picture of where your roles and your real self are pulling against each other",
                "A read on which friction is yours to carry and which belongs to a system you've been quietly absorbing",
                "Two to five small experiments, time-boxed, with what we'd be looking for",
                "An honest account of what we still don't know",
              ]}
            />
            <OfferingCard
              title="Developmental Partnership"
              scope="Ongoing, monthly or as-needed"
              description="For when the initial mapping has done its work and you want a steady outside perspective as life keeps changing. We keep tracking the patterns, adjust as new seasons and roles arrive, and revisit what's actually working."
              deliverables={[
                "A picture of you that updates as you do",
                "Honest review of what's working and what to retire",
                "A thinking partner for new transitions, mapped against patterns we already know",
                "Slowly handing the seeing-yourself work back to you",
              ]}
            />
          </div>
          <p className="mt-8 text-sm text-gray-400 max-w-xl">
            The goal isn&apos;t for you to need a coach forever. It&apos;s for you to see your own patterns clearly
            enough that one day you don&apos;t need me here for them.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">A note on neurodivergence</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-6">
              If the default version of life has never quite fit how you&apos;re actually wired.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              You followed the rules, you did all the things, and yet at the end of the day all you can feel is the
              fractures threatening to dissolve and leave you shattered. A lot of that gets quietly relabeled as
              personal failure. It usually isn&apos;t. The lens here is the same as for anyone else &mdash; but the
              translation gets more explicit when the misfit is chronic, not occasional.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { label: "The workarounds aren't a footnote", description: "The strategies you've quietly built to make daily life possible deserve first-order attention, not an embarrassed sidebar." },
                { label: "Masking costs you something real", description: "Translation and performance burn energy. That energy was supposed to go to your actual life. The cost is real, even when no one sees it." },
                { label: "Fit might not be a you problem", description: "The issue may not be finding the right fit inside existing structures. It may be that most of the available fits were designed for someone else." },
                { label: "Try harder is usually the wrong answer", description: "If effort alone could fix this, you'd have fixed it already, fifteen times. The real question is what your effort has been running against." },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.label}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fit" className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Is this for you?</h2>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 max-w-3xl leading-snug mb-12">
            This works best when you want honesty about the problem, not just more pressure to push through it.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Good fit</h3>
              <ul className="space-y-3">
                {[
                  "You're competent but chronically worn down. Life is harder than it should be, and you can't quite explain why.",
                  "You can describe the friction, but you haven't been able to name the pattern underneath it.",
                  "You're willing to look honestly at both your own story and the context you're living it inside of.",
                  "You want a real map before making any bigger moves.",
                  "You can try small experiments without needing the answer up front.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Not the right fit</h3>
              <ul className="space-y-3">
                {[
                  "You're in acute mental health crisis and need clinical care, not a coach.",
                  "You want someone to make the calls and run your life from the outside.",
                  "You're looking for motivational pressure more than honest clarity.",
                  "You need a promise of total transformation on a specific timeline.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400">
                    <span className="mt-0.5 shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">How I&apos;ll talk to you</h2>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-6">
              Honest doesn&apos;t mean vague.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              The picture I give back to you will be specific. I&apos;ll tell you what you actually said, what I
              noticed as a pattern, what I&apos;m still guessing at, and what we haven&apos;t tested yet. I won&apos;t
              pretend to know more than I do, and I won&apos;t simplify and gloss over things just because they&apos;re
              uncomfortable. Every point of friction is a potential point of failure, and most of the time you&apos;ve
              been labeling yourself as the failure because the actual points of failure stayed invisible. Once we
              make them visible, the possibility of becoming finally emerges.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
            The first step is finding someone who can see you.
          </h2>
          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            No intake form. No pressure. Send me a note and we&apos;ll talk about what your life actually feels like
            right now, and whether this approach makes sense for where you are. If it doesn&apos;t, I&apos;ll say so.
          </p>
          <a
            href="mailto:daniel@pacecoaching.com"
            className="inline-block px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            daniel@pacecoaching.com
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pace Coaching. All rights reserved.</p>
          <nav className="flex gap-6">
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-gray-600 transition-colors">How It Works</a>
            <a href="#resources" className="hover:text-gray-600 transition-colors">Resources</a>
            <a href="#offerings" className="hover:text-gray-600 transition-colors">Offerings</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function OfferingCard({
  title,
  scope,
  description,
  deliverables,
}: {
  title: string;
  scope: string;
  description: string;
  deliverables: string[];
}) {
  return (
    <div className="p-6 sm:p-8 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className="shrink-0 px-3 py-0.5 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">{scope}</span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2">
        {deliverables.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-600">
            <span className="text-gray-300 shrink-0">&bull;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

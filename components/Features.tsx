"use client";

import { Reveal, StaggerGroup, StaggerItem } from "./MotionPrimitives";

const features = [
  {
    icon: "◎",
    title: "Account intelligence",
    body:
      "Continuous research on every account in your ICP, summarized into briefs your reps actually read.",
    tone: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    icon: "✎",
    title: "First-draft writing",
    body:
      "Personalized openers grounded in real signals, ranked by reply probability before they reach a human.",
    tone: "from-accent-pink/30 via-accent-pink/10 to-transparent",
  },
  {
    icon: "◈",
    title: "Signal engine",
    body:
      "New hires, funding, product launches, lookalike movement. The right reason to reach out, the moment it happens.",
    tone: "from-accent-amber/30 via-accent-amber/10 to-transparent",
  },
  {
    icon: "◐",
    title: "Deliverability guardrails",
    body:
      "Inbox warming, bounce defense, and per-domain pacing built in. Your sender reputation stays intact.",
    tone: "from-accent-violet/30 via-accent-violet/10 to-transparent",
  },
  {
    icon: "◇",
    title: "Multi-channel sequences",
    body:
      "Email, LinkedIn, voice, and SMS in one orchestrated cadence with smart fall-through and exit logic.",
    tone: "from-accent/30 via-accent-pink/10 to-transparent",
  },
  {
    icon: "◉",
    title: "Reply-aware routing",
    body:
      "Intent classification routes positive replies to the right rep, surfaces objections, and learns from every outcome.",
    tone: "from-accent-pink/30 via-accent-amber/10 to-transparent",
  },
];

export function Features() {
  return (
    <section id="platform" className="relative py-28 sm:py-36">
      <div className="container-pg">
        <Reveal>
          <span className="eyebrow">The platform</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            One system that handles the work between
            <em className="font-display italic font-normal text-cream/90">
              {" "}
              intent
            </em>{" "}
            and
            <em className="font-display italic font-normal text-cream/90">
              {" "}
              conversation
            </em>
            .
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-cream/65">
            Six surfaces, one model of your buyer. Each one feeds the next,
            so every send is sharper than the last.
          </p>
        </Reveal>

        <StaggerGroup
          gap={0.07}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <FeatureCard {...f} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  tone,
}: {
  icon: string;
  title: string;
  body: string;
  tone: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20">
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-12 -z-10 bg-gradient-to-br ${tone} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-ink/60 text-lg text-cream">
          {icon}
        </span>
        <h3 className="text-lg font-medium tracking-tight text-cream">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-cream/65">{body}</p>
      <div className="mt-6 inline-flex items-center gap-1 text-[13px] text-cream/70 opacity-0 transition group-hover:opacity-100">
        Learn more
        <span aria-hidden>→</span>
      </div>
    </div>
  );
}

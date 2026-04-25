"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    label: "01 · Listen",
    title: "We watch the market for you.",
    body:
      "Pulseflow ingests hiring posts, funding events, leadership moves, product launches, and intent data, then ties every signal back to the accounts that matter to you.",
    accent: "from-accent/40 to-accent-violet/20",
  },
  {
    label: "02 · Research",
    title: "Every account gets a brief.",
    body:
      "Briefs are written, not scraped. Strategy, recent moves, who to talk to, and the angle most likely to land. Refreshed automatically as new signals come in.",
    accent: "from-accent-pink/40 to-accent/20",
  },
  {
    label: "03 · Draft",
    title: "First-touch messages, ready for review.",
    body:
      "Drafts read like a thoughtful rep wrote them. Each one references real context and is scored for relevance before it ever reaches a queue.",
    accent: "from-accent-amber/40 to-accent-pink/20",
  },
  {
    label: "04 · Learn",
    title: "Outcomes feed the next send.",
    body:
      "Replies, meetings, and silent ignores all train the model on your buyer. Performance compounds quietly, week after week.",
    accent: "from-accent-violet/40 to-accent/20",
  },
];

export function StickyStory() {
  return (
    <section
      id="solutions"
      className="relative bg-gradient-to-b from-ink to-ink-soft py-28 sm:py-36"
    >
      <div className="container-pg">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            A loop that gets smarter every week.
          </h2>
          <p className="mt-5 text-pretty text-lg text-cream/65">
            Pulseflow is not a sequencer with AI bolted on. It is a closed
            loop: listen, research, draft, learn, repeat.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="space-y-28">
              {steps.map((s, i) => (
                <Step key={s.label} step={s} index={i} />
              ))}
            </div>
          </div>

          <aside className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28">
              <StickyVisual />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.4], [24, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="relative">
      <div
        aria-hidden
        className={`absolute -left-6 top-2 h-12 w-1 rounded-full bg-gradient-to-b ${step.accent}`}
      />
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/55">
        {step.label}
      </p>
      <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        {step.title}
      </h3>
      <p className="mt-4 max-w-lg text-pretty text-cream/70">{step.body}</p>
      <MobileVisual index={index} />
    </motion.div>
  );
}

function StickyVisual() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
      <div className="absolute inset-0 -z-10 bg-hero-aurora opacity-60" />
      <div className="grid h-full grid-rows-4 gap-4">
        <VisualRow label="Hiring · Acquia" tone="bg-accent/30" pct={72} />
        <VisualRow label="Funding · Lattice" tone="bg-accent-pink/30" pct={88} />
        <VisualRow label="New leader · Ramp" tone="bg-accent-amber/30" pct={54} />
        <VisualRow label="Product · Mosaic" tone="bg-accent-violet/30" pct={66} />
      </div>
    </div>
  );
}

function VisualRow({
  label,
  tone,
  pct,
}: {
  label: string;
  tone: string;
  pct: number;
}) {
  return (
    <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-ink/40 p-4">
      <div className="flex items-center justify-between text-[12px] text-cream/70">
        <span>{label}</span>
        <span>{pct}% relevance</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={`h-full ${tone}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function MobileVisual({ index }: { index: number }) {
  const tones = [
    "bg-accent/25",
    "bg-accent-pink/25",
    "bg-accent-amber/25",
    "bg-accent-violet/25",
  ];
  return (
    <div className="mt-6 grid grid-cols-3 gap-2 lg:hidden">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`h-16 rounded-xl border border-white/10 ${
            i === index % 3 ? tones[index % tones.length] : "bg-white/[0.03]"
          }`}
        />
      ))}
    </div>
  );
}

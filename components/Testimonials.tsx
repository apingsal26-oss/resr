"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./MotionPrimitives";

const quotes = [
  {
    quote:
      "We replaced a stack of four tools with Pulseflow and our reps spend their mornings on conversations instead of research.",
    name: "Priya Shah",
    role: "VP Revenue, Helio",
    initial: "P",
    tone: "from-accent/30 to-accent-violet/20",
  },
  {
    quote:
      "The drafts feel like they came from our best AE. Reply rates roughly doubled in the first quarter and stayed there.",
    name: "Marcus Trent",
    role: "Director of Sales Dev, Quanta",
    initial: "M",
    tone: "from-accent-pink/30 to-accent/20",
  },
  {
    quote:
      "What sold me was deliverability. We went from constant warmup pain to a clean inbox in under a month.",
    name: "Lia Okafor",
    role: "Head of Growth, Brightline",
    initial: "L",
    tone: "from-accent-amber/30 to-accent-pink/20",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % quotes.length), 6500);
    return () => clearInterval(t);
  }, []);
  const q = quotes[i];

  return (
    <section id="customers" className="relative py-28 sm:py-36">
      <div className="container-pg">
        <Reveal>
          <span className="eyebrow">Customers</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Revenue teams ship more pipeline with less noise.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              className={`relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${q.tone} p-10`}
            >
              <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
              <AnimatePresence mode="wait">
                <motion.figure
                  key={q.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col justify-between"
                >
                  <blockquote className="font-display text-2xl leading-snug text-cream sm:text-3xl">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink/60 text-sm font-semibold text-cream">
                      {q.initial}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-cream">
                        {q.name}
                      </p>
                      <p className="text-xs text-cream/60">{q.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className="mt-4 flex gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-10 bg-cream" : "w-4 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-5">
            <SideCard
              kpi="2.1x"
              title="Pipeline per rep"
              subtitle="Helio · 9 months"
            />
            <SideCard
              kpi="-46%"
              title="Time spent on prep"
              subtitle="Quanta · first quarter"
            />
            <SideCard
              kpi="92%"
              title="Inbox placement"
              subtitle="Brightline · 30 day rolling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SideCard({
  kpi,
  title,
  subtitle,
}: {
  kpi: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <div className="font-display text-4xl text-cream">{kpi}</div>
      <p className="mt-3 text-sm font-medium text-cream">{title}</p>
      <p className="text-xs text-cream/55">{subtitle}</p>
    </motion.div>
  );
}

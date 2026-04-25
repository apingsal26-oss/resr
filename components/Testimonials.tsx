"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./MotionPrimitives";

const quotes = [
  {
    quote:
      "We replaced four tools with Pulseflow and our reps spend their mornings on conversations instead of research. It is the cleanest workflow change we have made all year.",
    name: "Priya Shah",
    role: "VP Revenue · Helio",
    initial: "P",
    tone: "bg-sage",
  },
  {
    quote:
      "The drafts feel like they came from our best AE. Reply rates roughly doubled in the first quarter and stayed there once the team got comfortable editing instead of writing.",
    name: "Marcus Trent",
    role: "Director Sales Dev · Quanta",
    initial: "M",
    tone: "bg-blush",
  },
  {
    quote:
      "What sold me was deliverability. We went from constant warmup pain to a clean inbox in under a month, and the per-domain visibility is genuinely useful.",
    name: "Lia Okafor",
    role: "Head of Growth · Brightline",
    initial: "L",
    tone: "bg-mustard",
  },
];

const sideStats = [
  { kpi: "2.1x", title: "Pipeline per rep", subtitle: "Helio · 9 months" },
  {
    kpi: "-46%",
    title: "Time spent on prep",
    subtitle: "Quanta · first quarter",
  },
  {
    kpi: "92%",
    title: "Inbox placement",
    subtitle: "Brightline · 30 day rolling",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % quotes.length), 7000);
    return () => clearInterval(t);
  }, []);
  const q = quotes[i];

  return (
    <section id="customers" className="relative py-28 sm:py-36">
      <div className="container-pg">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="chip">Customers</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-6 max-w-xl text-balance">
                Revenue teams ship more
                <br />
                <em className="font-display italic">pipeline</em> with less
                noise.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-pretty text-[17px] leading-relaxed text-ink/70">
              From founder-led teams of two to global SDR orgs of two hundred,
              Pulseflow scales the work, not the headcount.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div
              className={`relative overflow-hidden rounded-[36px] ${q.tone} p-8 transition-colors duration-700 sm:p-12`}
            >
              <BgPattern />
              <AnimatePresence mode="wait">
                <motion.figure
                  key={q.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full min-h-[320px] flex-col justify-between"
                >
                  <blockquote className="font-display text-[28px] leading-tight text-ink sm:text-[36px]">
                    <span className="text-ink/30">&ldquo;</span>
                    {q.quote}
                    <span className="text-ink/30">&rdquo;</span>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-cream text-sm font-semibold text-ink">
                      {q.initial}
                    </span>
                    <div>
                      <p className="text-[14px] font-medium text-ink">
                        {q.name}
                      </p>
                      <p className="text-[12px] text-ink/60">{q.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className="mt-5 flex gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-12 bg-ink" : "w-4 bg-ink/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-4">
            {sideStats.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="rounded-2xl border border-ink/10 bg-cream-warm p-6"
              >
                <div className="font-display text-[44px] leading-none text-ink">
                  {s.kpi}
                </div>
                <p className="mt-3 text-[14px] font-medium text-ink">
                  {s.title}
                </p>
                <p className="text-[12px] text-ink/55">{s.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BgPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(14,16,20,0.08) 1px, transparent 0)",
        backgroundSize: "16px 16px",
      }}
    />
  );
}

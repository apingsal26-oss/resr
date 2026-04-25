"use client";

import Link from "next/link";
import { Reveal } from "./MotionPrimitives";

export function CTA() {
  return (
    <section id="demo" className="relative px-6 py-28 sm:py-36">
      <div className="container-pg">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-ink-soft to-ink p-10 sm:p-16">
            <div className="absolute inset-0 -z-10 bg-hero-aurora opacity-80" />
            <div
              className="absolute inset-0 -z-10 grid-overlay opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
              aria-hidden
            />
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow">Get started</span>
                <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                  Pipeline that works while your team sleeps.
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-lg text-cream/70">
                  See Pulseflow run on three of your real accounts. Live demo,
                  custom briefs, no credit card.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#book" className="btn-primary">
                    Book a demo
                    <span aria-hidden>→</span>
                  </Link>
                  <Link href="#pricing" className="btn-ghost">
                    See pricing
                  </Link>
                </div>
              </div>
              <Inbox />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Inbox() {
  const rows = [
    {
      name: "Priya Shah",
      preview: "Re: Atlanta DC routing — Tuesday works",
      tag: "Positive reply",
      tone: "bg-accent/25 text-cream",
    },
    {
      name: "Marcus Trent",
      preview: "Forwarded to our RevOps lead",
      tag: "Routed",
      tone: "bg-accent-violet/25 text-cream",
    },
    {
      name: "Lia Okafor",
      preview: "Booked: Thu 10:30 with team",
      tag: "Meeting",
      tone: "bg-accent-pink/25 text-cream",
    },
    {
      name: "Tomas Reyes",
      preview: "Not now, circle back in Q3",
      tag: "Snooze",
      tone: "bg-accent-amber/25 text-cream",
    },
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink/60 p-3 backdrop-blur">
      <div className="border-b border-white/10 px-3 pb-3 text-xs text-cream/60">
        Inbox · today
      </div>
      <ul className="divide-y divide-white/5">
        {rows.map((r) => (
          <li
            key={r.name}
            className="flex items-center justify-between gap-4 px-3 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-xs text-cream">
                {r.name[0]}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm text-cream">{r.name}</p>
                <p className="truncate text-xs text-cream/55">{r.preview}</p>
              </div>
            </div>
            <span
              className={`shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider ${r.tone}`}
            >
              {r.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "./MotionPrimitives";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Aurora background */}
      <motion.div
        style={{ scale }}
        aria-hidden
        className="absolute inset-0 -z-10 bg-hero-aurora"
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <FloatingOrbs />

      <motion.div
        style={{ y, opacity }}
        className="container-pg relative flex flex-col items-center text-center"
      >
        <Reveal delay={0.05}>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-pink shadow-[0_0_12px_2px_rgba(255,107,193,0.7)]" />
            New · Pulseflow Signal Engine 2.0
          </span>
        </Reveal>

        <StaggerGroup gap={0.06} delay={0.1} className="mt-7 max-w-5xl">
          <StaggerItem>
            <h1 className="text-balance text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
              <span className="block">Outbound that</span>
              <span className="block">
                <em className="font-display italic font-normal text-cream/95">
                  thinks
                </em>{" "}
                for itself.
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-cream/70 sm:text-xl">
              Pulseflow researches every account, drafts the first message,
              and sends only what is worth a reply. Your team handles the
              relationships. The platform handles the rest.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="#demo" className="btn-primary">
                Book a demo
                <span aria-hidden>→</span>
              </Link>
              <Link href="#tour" className="btn-ghost">
                <span
                  aria-hidden
                  className="grid h-5 w-5 place-items-center rounded-full bg-white/10"
                >
                  ▶
                </span>
                Watch the tour
              </Link>
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cream/50">
              Trusted by revenue teams at fast-growing companies
            </p>
          </StaggerItem>
        </StaggerGroup>

        <Reveal delay={0.4} className="mt-16 w-full max-w-5xl">
          <ProductPreview />
        </Reveal>
      </motion.div>
    </section>
  );
}

function FloatingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent/30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 22, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[10%] h-80 w-80 rounded-full bg-accent-pink/25 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[60%] h-96 w-96 -translate-x-1/2 rounded-full bg-accent-amber/20 blur-3xl"
      />
    </div>
  );
}

function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/20 to-white/5 opacity-60 blur" />
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-ink/60 px-3 py-1 text-[11px] text-cream/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            app.pulseflow.io / pipeline · live
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
          <PreviewCard
            kind="research"
            title="Account brief"
            subtitle="Northwind Logistics · Series C"
            lines={[
              "Hiring 12 AEs in Q2",
              "Posted RFP for warehousing AI",
              "CFO replied to last touch",
            ]}
            tone="from-accent/20 to-accent-violet/10"
          />
          <PreviewCard
            kind="draft"
            title="First draft"
            subtitle="To: Priya Shah, VP Ops"
            lines={[
              "Saw the Atlanta DC announcement.",
              "We help teams cut routing prep by 38%.",
              "Worth a 12-min look next Tuesday?",
            ]}
            tone="from-accent-pink/25 to-accent/10"
          />
          <PreviewCard
            kind="signal"
            title="Live signals"
            subtitle="Today · 14 new"
            lines={[
              "Acquia → new CRO appointed",
              "Lattice → opening EU hub",
              "Ramp → expanded to procurement",
            ]}
            tone="from-accent-amber/25 to-accent-pink/10"
          />
        </div>
      </div>
    </div>
  );
}

function PreviewCard({
  kind,
  title,
  subtitle,
  lines,
  tone,
}: {
  kind: "research" | "draft" | "signal";
  title: string;
  subtitle: string;
  lines: string[];
  tone: string;
}) {
  const icon =
    kind === "research" ? "◎" : kind === "draft" ? "✎" : "◈";
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${tone} p-5 backdrop-blur`}
    >
      <div className="flex items-center justify-between">
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/15 bg-ink/50 text-[13px] text-cream/80">
          {icon}
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-cream/55">
          {kind}
        </span>
      </div>
      <div className="mt-4 text-left">
        <p className="text-sm font-medium text-cream">{title}</p>
        <p className="mt-0.5 text-xs text-cream/55">{subtitle}</p>
        <ul className="mt-3 space-y-1.5">
          {lines.map((l) => (
            <li
              key={l}
              className="flex items-start gap-2 text-[13px] leading-snug text-cream/80"
            >
              <span className="mt-1 h-1 w-1 flex-none rounded-full bg-cream/40" />
              {l}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

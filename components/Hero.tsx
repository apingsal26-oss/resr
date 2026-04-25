"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { MaskedLine, MaskedLineGroup, Reveal } from "./MotionPrimitives";
import { MockShell, InboxMock } from "./ProductMock";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const mockRotate = useTransform(scrollYProgress, [0, 1], [0, -1.5]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24"
    >
      {/* Soft pastel blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-24 h-[420px] w-[420px] animate-blob-1 rounded-full bg-blush/50 blur-3xl" />
        <div className="absolute right-[-120px] top-10 h-[460px] w-[460px] animate-blob-2 rounded-full bg-sage/55 blur-3xl" />
        <div className="absolute left-1/3 top-72 h-[380px] w-[380px] rounded-full bg-mustard/40 blur-3xl" />
      </div>

      <div className="container-pg relative">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              New · Pulseflow Signal Engine 2.0
            </span>
          </Reveal>

          <MaskedLineGroup className="mt-7" delay={0.1} amount={0.4}>
            <h1 className="display-1 text-balance">
              <MaskedLine>The AI sales</MaskedLine>
              <MaskedLine delay={0.05}>
                platform that
                <em className="font-display italic"> does</em>
              </MaskedLine>
              <MaskedLine delay={0.1}>the work.</MaskedLine>
            </h1>
          </MaskedLineGroup>

          <Reveal delay={0.55}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink/70 sm:text-[19px]">
              Pulseflow researches every account, drafts the first message,
              and books the meetings most likely to close. Your team handles
              the relationships. The platform handles the rest.
            </p>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="#demo" className="btn-pill-arrow">
                Book a demo
                <span aria-hidden className="text-base">→</span>
              </Link>
              <Link
                href="#tour"
                className="inline-flex items-center gap-3 rounded-full border border-ink/15 bg-cream/60 px-5 py-3.5 text-[13px] font-medium text-ink hover:bg-cream-warm"
              >
                <span
                  aria-hidden
                  className="grid h-7 w-7 place-items-center rounded-full bg-ink text-cream"
                >
                  <PlayIcon />
                </span>
                Watch the 90-second tour
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-ink/55">
              No credit card · Live on three of your real accounts
            </p>
          </Reveal>
        </div>

        {/* Hero mockup */}
        <motion.div
          style={{ y: mockY, rotate: mockRotate }}
          className="relative mx-auto mt-20 max-w-[1080px]"
        >
          <Reveal delay={0.4} y={48} amount={0.1}>
            <MockShell toolbar="sage" url="app.pulseflow.io / inbox · live">
              <InboxMock />
            </MockShell>
          </Reveal>
          <FloatingPills />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPills() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-4 top-24 hidden rounded-2xl border border-ink/10 bg-cream px-4 py-3 shadow-soft md:block"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink/55">
          Account brief generated
        </p>
        <p className="mt-1 text-[13px] font-medium text-ink">
          Northwind Logistics · 4 signals · 92 score
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-4 top-44 hidden rounded-2xl border border-ink/10 bg-cream px-4 py-3 shadow-soft md:block"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-leaf" />
          <p className="text-[12px] font-medium text-ink">Meeting booked</p>
        </div>
        <p className="mt-1 text-[11.5px] text-ink/55">
          Priya Shah · Tue 10:30 · Northwind
        </p>
      </motion.div>
    </>
  );
}

function PlayIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
      <path d="M2 1.5v7l6.5-3.5z" />
    </svg>
  );
}

"use client";

import Link from "next/link";
import { Reveal, MaskedLine, MaskedLineGroup } from "./MotionPrimitives";

export function CTA() {
  return (
    <section id="demo" className="relative px-4 py-20 sm:py-28">
      <div className="container-pg">
        <Reveal y={40}>
          <div className="relative overflow-hidden rounded-[44px] bg-leaf px-8 py-16 text-cream sm:px-16 sm:py-24">
            <BgPattern />
            <FloatingShapes />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream/85">
                <span className="h-1.5 w-1.5 rounded-full bg-cream" />
                Get started
              </span>

              <MaskedLineGroup className="mt-7" amount={0.4}>
                <h2 className="font-display text-d2 text-balance text-cream">
                  <MaskedLine>Pipeline that</MaskedLine>
                  <MaskedLine delay={0.05}>
                    works while
                  </MaskedLine>
                  <MaskedLine delay={0.1}>
                    your team{" "}
                    <em className="font-display italic">sleeps</em>.
                  </MaskedLine>
                </h2>
              </MaskedLineGroup>

              <Reveal delay={0.5}>
                <p className="mx-auto mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-cream/75">
                  See Pulseflow run on three of your real accounts. Live demo,
                  custom briefs, no credit card.
                </p>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="#book"
                    className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-ink hover:bg-white"
                  >
                    Book a demo
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="#pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-cream hover:bg-cream/10"
                  >
                    See pricing
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.7}>
                <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-cream/55">
                  SOC 2 Type II · GDPR · DPA available on request
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BgPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(244,239,230,0.18) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    />
  );
}

function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-mustard/30 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-52 w-52 rounded-full bg-blush/30 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-sage/20 blur-3xl" />
    </div>
  );
}

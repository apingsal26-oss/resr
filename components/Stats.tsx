"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./MotionPrimitives";

const stats = [
  { value: 4.2, suffix: "x", label: "More qualified meetings booked per rep" },
  { value: 38, suffix: "%", label: "Less prep time before every account touch" },
  { value: 92, suffix: "%", label: "Inbox placement across warmed domains" },
  { value: 11, suffix: "min", label: "Avg time from signal to first draft" },
];

export function Stats() {
  return (
    <section className="relative bg-leaf py-24 text-cream">
      <div className="container-pg">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/80">
              By the numbers
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-d3 text-balance text-cream">
              Real teams,{" "}
              <em className="font-display italic">measurable</em> impact in
              the first 90 days.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-x-10">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const display =
    Number.isInteger(value) ? Math.round(n).toString() : n.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-display text-[64px] leading-none tracking-tightest sm:text-[80px]">
        {display}
        <span className="text-cream/65">{suffix}</span>
      </div>
      <p className="mt-4 max-w-[18ch] text-[14px] leading-snug text-cream/65">
        {label}
      </p>
    </motion.div>
  );
}

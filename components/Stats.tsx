"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4.2, suffix: "x", label: "More qualified meetings booked per rep" },
  { value: 38, suffix: "%", label: "Less prep time before every account touch" },
  { value: 92, suffix: "%", label: "Inbox placement across warmed domains" },
  { value: 11, suffix: "min", label: "Avg time from signal to first draft" },
];

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-ink-soft py-20">
      <div className="container-pg">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
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
    const dur = 1200;
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-display text-5xl font-normal tracking-tight text-cream sm:text-6xl">
        {display}
        <span className="text-cream/70">{suffix}</span>
      </div>
      <p className="mt-3 max-w-[16ch] text-sm leading-snug text-cream/60">
        {label}
      </p>
    </motion.div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Customers", href: "#customers" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 14]);
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(10,10,15,0)", "rgba(10,10,15,0.72)"]
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
  );
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
        background: bg,
        borderBottom: "1px solid",
        borderBottomColor: border,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-pg flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight text-cream">
            Pulseflow
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm text-cream/80 transition hover:bg-white/5 hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="#login" className="btn-ghost !py-2 !px-4 text-[13px]">
            Log in
          </Link>
          <Link href="#demo" className="btn-primary !py-2 !px-4 text-[13px]">
            Book a demo
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-full border border-white/15 p-2 text-cream"
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6L18 18M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-cream/80 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link href="#login" className="btn-ghost flex-1 justify-center">
                Log in
              </Link>
              <Link href="#demo" className="btn-primary flex-1 justify-center">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}

function LogoMark() {
  return (
    <span className="relative inline-flex h-7 w-7 items-center justify-center">
      <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent via-accent-violet to-accent-pink opacity-90" />
      <span className="absolute inset-[3px] rounded-md bg-ink" />
      <span className="relative h-2 w-2 rounded-full bg-cream shadow-[0_0_18px_4px_rgba(255,107,193,0.5)]" />
    </span>
  );
}

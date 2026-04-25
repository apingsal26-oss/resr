"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Wordmark } from "./Brand";

const navLinks: { label: string; items?: { label: string; desc: string }[] }[] = [
  {
    label: "Platform",
    items: [
      { label: "Account intelligence", desc: "Live briefs on every account" },
      { label: "AI writer", desc: "First drafts grounded in real signals" },
      { label: "Signal engine", desc: "Triggers that convert" },
      { label: "Deliverability", desc: "Inbox warming and pacing" },
      { label: "Sequences", desc: "Email, LinkedIn, voice, SMS" },
      { label: "Reply routing", desc: "Intent classification and handoff" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Sales development", desc: "Book more qualified meetings" },
      { label: "Account executives", desc: "Run accounts like a portfolio" },
      { label: "RevOps", desc: "Clean signals, clean attribution" },
      { label: "Founder-led sales", desc: "Two reps, ten reps of output" },
    ],
  },
  { label: "Customers" },
  { label: "Resources" },
  { label: "Pricing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-pg flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center text-ink">
          <Wordmark />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHoverIdx(null)}
        >
          {navLinks.map((l, i) => (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => setHoverIdx(i)}
            >
              <button className="rounded-full px-3.5 py-2 text-[14px] text-ink/80 transition hover:text-ink">
                {l.label}
                {l.items && (
                  <span className="ml-1 inline-block translate-y-[-1px] text-[10px] text-ink/50">
                    ▾
                  </span>
                )}
              </button>
              {l.items && hoverIdx === i && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 top-full z-40 w-[420px] pt-3"
                >
                  <div className="rounded-2xl border border-ink/10 bg-cream p-3 shadow-lift">
                    <ul className="grid grid-cols-1 gap-1">
                      {l.items.map((it) => (
                        <li key={it.label}>
                          <Link
                            href="#"
                            className="block rounded-xl px-3 py-2.5 transition hover:bg-ink/5"
                          >
                            <p className="text-[13.5px] font-medium text-ink">
                              {it.label}
                            </p>
                            <p className="mt-0.5 text-[12px] text-ink/55">
                              {it.desc}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="#login" className="btn-ghost">
            Log in
          </Link>
          <Link href="#demo" className="btn-primary !py-2.5 !px-5 text-[12px]">
            Book a demo
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden rounded-full border border-ink/15 p-2 text-ink"
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
        <div className="border-t border-ink/10 bg-cream px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href="#"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-[15px] text-ink/85 hover:bg-ink/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link
                href="#login"
                className="btn-light flex-1 justify-center !py-3"
              >
                Log in
              </Link>
              <Link
                href="#demo"
                className="btn-primary flex-1 justify-center !py-3"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

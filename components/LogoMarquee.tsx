"use client";

import { Reveal, StaggerGroup, StaggerItem } from "./MotionPrimitives";

const logos = [
  "Northwind",
  "Acquia",
  "Lattice",
  "Helio",
  "Ramp",
  "Quanta",
  "Mosaic",
  "Foundry",
  "Drift",
  "Brightline",
  "Sequel",
  "Cobalt",
];

export function LogoMarquee() {
  return (
    <section className="relative border-y border-ink/10 bg-cream-warm py-16 sm:py-20">
      <div className="container-pg">
        <Reveal>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-ink/55">
            Trusted by revenue teams at fast-growing companies
          </p>
        </Reveal>

        <StaggerGroup
          gap={0.05}
          delay={0.1}
          className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {logos.map((name, i) => (
            <StaggerItem
              key={name}
              className="flex items-center justify-center"
            >
              <LogoChip name={name} variant={i % 4} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function LogoChip({ name, variant }: { name: string; variant: number }) {
  return (
    <span className="inline-flex items-center gap-2 text-ink/55 transition hover:text-ink">
      <Glyph variant={variant} />
      <span className="text-[16px] font-semibold tracking-tight">{name}</span>
    </span>
  );
}

function Glyph({ variant }: { variant: number }) {
  const variants = [
    <svg key="0" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="11" cy="11" r="3" fill="currentColor" />
    </svg>,
    <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="3"
        y="3"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M7 11h8" stroke="currentColor" strokeWidth="1.6" />
    </svg>,
    <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M3 18L11 4l8 14H3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>,
    <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4 6c4 0 4 10 8 10s4-10 8-10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>,
  ];
  return variants[variant];
}

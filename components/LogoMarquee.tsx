"use client";

const logos = [
  "Northwind",
  "Acquia",
  "Lattice",
  "Helio",
  "Ramp",
  "Vercel-ish",
  "Quanta",
  "Mosaic",
  "Foundry",
  "Drift",
  "Brightline",
  "Sequel",
];

export function LogoMarquee() {
  const list = [...logos, ...logos];
  return (
    <section className="relative border-y border-white/10 bg-ink/60 py-10">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
        aria-hidden
      />
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap px-8">
          {list.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center gap-3 text-cream/60"
            >
              <LogoGlyph seed={i} />
              <span className="text-base font-semibold tracking-tight">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoGlyph({ seed }: { seed: number }) {
  const variants = [
    <svg key="a" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="11" r="3.5" fill="currentColor" />
    </svg>,
    <svg key="b" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="3"
        y="3"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7 11h8" stroke="currentColor" strokeWidth="1.5" />
    </svg>,
    <svg key="c" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M3 18L11 4l8 14H3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>,
    <svg key="d" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4 6c4 0 4 10 8 10s4-10 8-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>,
  ];
  return variants[seed % variants.length];
}

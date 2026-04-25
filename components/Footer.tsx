import Link from "next/link";

const cols = [
  {
    heading: "Platform",
    links: [
      "Account intelligence",
      "First-draft writing",
      "Signal engine",
      "Deliverability",
      "Sequences",
      "Reply routing",
    ],
  },
  {
    heading: "Solutions",
    links: ["Sales development", "Account executives", "RevOps", "Founders"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Customers", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Docs", "Security", "Changelog", "Status"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-16">
      <div className="container-pg">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent via-accent-violet to-accent-pink" />
                <span className="absolute inset-[3px] rounded-md bg-ink" />
                <span className="relative h-2 w-2 rounded-full bg-cream" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                Pulseflow
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              The AI-native revenue platform that researches, writes, and
              learns. Outbound that earns the reply.
            </p>
            <div className="mt-6 flex gap-2">
              <Link href="#demo" className="btn-primary !py-2 !px-4 text-[13px]">
                Book a demo
              </Link>
              <Link
                href="#login"
                className="btn-ghost !py-2 !px-4 text-[13px]"
              >
                Log in
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-4">
            {cols.map((c) => (
              <div key={c.heading}>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/55">
                  {c.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-sm text-cream/75 hover:text-cream"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Pulseflow Labs, Inc. A fictional brand.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="#" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="#" className="hover:text-cream">
              Terms
            </Link>
            <Link href="#" className="hover:text-cream">
              Security
            </Link>
            <Link href="#" className="hover:text-cream">
              DPA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

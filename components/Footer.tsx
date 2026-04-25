import Link from "next/link";
import { Wordmark } from "./Brand";

const cols = [
  {
    heading: "Platform",
    links: [
      "Account intelligence",
      "AI writer",
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
    links: ["Blog", "Docs", "Changelog", "Status", "Security"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-cream-warm pt-20 pb-10">
      <div className="container-pg">
        {/* Big editorial wordmark */}
        <div className="border-b border-ink/10 pb-12">
          <p className="font-display text-[clamp(4rem,16vw,17rem)] leading-[0.85] tracking-tightest text-ink">
            pulseflow
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink/65">
              The AI sales platform that researches, writes, and learns.
              Outbound that earns the reply.
            </p>
            <div className="mt-6 flex gap-2">
              <Link
                href="#demo"
                className="btn-primary !py-2.5 !px-5 text-[12px]"
              >
                Book a demo
              </Link>
              <Link
                href="#login"
                className="btn-light !py-2.5 !px-5 text-[12px]"
              >
                Log in
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["SOC 2", "GDPR", "DPA", "ISO 27001"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-ink/15 px-2.5 py-1 text-[11px] text-ink/65"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-4">
            {cols.map((c) => (
              <div key={c.heading}>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/55">
                  {c.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-[14px] text-ink/75 hover:text-ink"
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 text-[12px] text-ink/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Pulseflow Labs, Inc. A fictional
            brand for design and engineering reference.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="#" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="#" className="hover:text-ink">
              Terms
            </Link>
            <Link href="#" className="hover:text-ink">
              Cookies
            </Link>
            <Link href="#" className="hover:text-ink">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

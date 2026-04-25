"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/**
 * MockShell renders a Mac-style window chrome with a colored toolbar.
 * Used to wrap product screenshots throughout the page.
 */
export function MockShell({
  children,
  toolbar = "default",
  url = "app.pulseflow.io",
  className = "",
}: {
  children: ReactNode;
  toolbar?: "default" | "sage" | "blush" | "mustard" | "lavender" | "sky";
  url?: string;
  className?: string;
}) {
  const toolbarColor = {
    default: "bg-cream-warm",
    sage: "bg-sage",
    blush: "bg-blush",
    mustard: "bg-mustard",
    lavender: "bg-lavender",
    sky: "bg-sky",
  }[toolbar];

  return (
    <div className={`mock-frame ${className}`}>
      <div
        className={`flex items-center gap-2 ${toolbarColor} px-4 py-3 border-b border-ink/10`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <div className="ml-3 flex flex-1 items-center justify-center">
          <span className="rounded-full bg-cream/70 px-3 py-0.5 text-[11px] text-ink/55">
            {url}
          </span>
        </div>
      </div>
      <div className="bg-cream-warm">{children}</div>
    </div>
  );
}

/* ---------------- Inbox / pipeline mock ---------------- */
export function InboxMock() {
  const rows = [
    {
      name: "Priya Shah",
      role: "VP Operations · Helio",
      preview: "Tuesday at 10 works. Send the link?",
      tag: "Positive",
      tone: "bg-sage text-leaf",
      time: "2m",
    },
    {
      name: "Marcus Trent",
      role: "Director SDR · Quanta",
      preview: "Forwarding to our RevOps lead now.",
      tag: "Routed",
      tone: "bg-lavender text-ink",
      time: "12m",
    },
    {
      name: "Lia Okafor",
      role: "Head of Growth · Brightline",
      preview: "Booked: Thu 10:30 with the team.",
      tag: "Meeting",
      tone: "bg-blush text-ink",
      time: "1h",
    },
    {
      name: "Tomas Reyes",
      role: "Founder · Mosaic",
      preview: "Not now — circle back in Q3.",
      tag: "Snoozed",
      tone: "bg-mustard text-ink",
      time: "3h",
    },
    {
      name: "Sana Iqbal",
      role: "VP RevOps · Foundry",
      preview: "Loved the angle on the routing piece.",
      tag: "Positive",
      tone: "bg-sage text-leaf",
      time: "yesterday",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr]">
      <Sidebar />
      <div className="bg-cream">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3 text-[12px] text-ink/60">
          <div className="flex items-center gap-3">
            <span className="font-medium text-ink">Inbox</span>
            <span className="rounded-full bg-ink/5 px-2 py-0.5">Today</span>
          </div>
          <span>14 new replies</span>
        </div>
        <ul className="divide-y divide-ink/5">
          {rows.map((r, i) => (
            <motion.li
              key={r.name}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-cream-warm"
            >
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-cream-deep text-[12px] font-medium text-ink">
                {r.name[0]}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-[13.5px] font-medium text-ink">
                    {r.name}
                  </p>
                  <span className="text-[11px] text-ink/45">{r.time}</span>
                </div>
                <p className="truncate text-[12.5px] text-ink/55">
                  {r.role} · {r.preview}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${r.tone}`}
              >
                {r.tag}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Sidebar() {
  const items = [
    { label: "Inbox", count: 14, active: true },
    { label: "Pipeline", count: 286 },
    { label: "Accounts", count: 1240 },
    { label: "Sequences", count: 8 },
    { label: "Signals", count: 42 },
    { label: "Reports" },
  ];
  return (
    <aside className="hidden flex-col gap-0.5 border-r border-ink/10 bg-cream-warm p-3 lg:flex">
      <div className="mb-3 flex items-center gap-2 px-2">
        <span className="h-6 w-6 rounded-md bg-leaf text-cream">
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full p-1">
            <path
              d="M3 14c0-6 4-10 9-10s9 4 9 10c0 3-2 5-5 5h-3"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="9" cy="19" r="2.5" fill="currentColor" />
          </svg>
        </span>
        <span className="text-[13px] font-medium tracking-tight text-ink">
          pulseflow
        </span>
      </div>
      {items.map((it) => (
        <button
          key={it.label}
          className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[12.5px] ${
            it.active
              ? "bg-cream text-ink"
              : "text-ink/65 hover:bg-cream/60 hover:text-ink"
          }`}
        >
          <span>{it.label}</span>
          {it.count !== undefined && (
            <span
              className={`rounded-full px-1.5 text-[10px] ${
                it.active ? "bg-leaf/10 text-leaf" : "text-ink/40"
              }`}
            >
              {it.count}
            </span>
          )}
        </button>
      ))}
    </aside>
  );
}

/* ---------------- Account brief mock ---------------- */
export function AccountBriefMock() {
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_280px]">
      <div className="bg-cream p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage text-leaf font-semibold">
            N
          </span>
          <div>
            <p className="text-[14px] font-medium text-ink">
              Northwind Logistics
            </p>
            <p className="text-[12px] text-ink/55">Series C · 1,200 employees · Atlanta, GA</p>
          </div>
          <span className="ml-auto rounded-full bg-sage/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-leaf">
            Hot · 92
          </span>
        </div>

        <div className="mt-5 space-y-3">
          <BriefRow
            tag="Hiring"
            line="12 AE roles posted in Atlanta and Dallas this month."
            tone="bg-sage/40"
          />
          <BriefRow
            tag="Funding"
            line="Closed $48M Series C led by Catalyst Ventures."
            tone="bg-mustard/50"
          />
          <BriefRow
            tag="Product"
            line="Launched warehouse routing AI in beta with 14 partners."
            tone="bg-lavender/50"
          />
          <BriefRow
            tag="People"
            line="Priya Shah promoted to VP Operations, owns the routing P&L."
            tone="bg-blush/50"
          />
        </div>

        <div className="mt-6 rounded-xl border border-ink/10 bg-cream-warm p-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink/55">
            Recommended angle
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-ink">
            Lead with the Atlanta DC announcement and the operational pressure
            on routing prep. Reference their RFP for warehousing AI as the bridge.
          </p>
        </div>
      </div>

      <div className="border-l border-ink/10 bg-cream-warm p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/55">
          Key contacts
        </p>
        <ul className="mt-3 space-y-3">
          {[
            { n: "Priya Shah", t: "VP Operations", c: "P", tone: "bg-sage" },
            { n: "Daniel Cho", t: "CFO", c: "D", tone: "bg-blush" },
            { n: "Aasha Reddy", t: "Director RevOps", c: "A", tone: "bg-lavender" },
          ].map((p) => (
            <li key={p.n} className="flex items-center gap-3">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full ${p.tone} text-[12px] font-medium text-ink`}
              >
                {p.c}
              </span>
              <div>
                <p className="text-[13px] font-medium text-ink">{p.n}</p>
                <p className="text-[11px] text-ink/55">{p.t}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-xl border border-ink/10 bg-cream p-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink/55">
            Score
          </p>
          <div className="mt-1.5 flex items-end justify-between">
            <span className="font-display text-3xl text-ink">92</span>
            <span className="text-[11px] text-ink/55">+14 this week</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "92%" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-leaf"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefRow({
  tag,
  line,
  tone,
}: {
  tag: string;
  line: string;
  tone: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink ${tone}`}
      >
        {tag}
      </span>
      <p className="text-[13.5px] leading-relaxed text-ink/80">{line}</p>
    </div>
  );
}

/* ---------------- AI writer mock ---------------- */
export function WriterMock() {
  return (
    <div className="bg-cream p-5">
      <div className="flex items-center justify-between border-b border-ink/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
          <span className="text-[12px] text-ink/65">
            Drafting · Priya Shah · Northwind
          </span>
        </div>
        <span className="rounded-full bg-sage/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-leaf">
          Score 87
        </span>
      </div>

      <div className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-ink/85">
        <p>
          Hi Priya — saw the{" "}
          <Highlight tone="bg-mustard/60">Atlanta DC announcement</Highlight>{" "}
          last week, congrats on the promotion.
        </p>
        <p>
          Teams running RFPs on routing AI usually lose the first month to
          spreadsheet wrangling. We&apos;ve cut that by{" "}
          <Highlight tone="bg-sage/50">38% on average</Highlight> for ops
          leaders coming out of the same playbook you mentioned at LogiTalks.
        </p>
        <p>
          Worth a 12-minute look next Tuesday? Happy to bring two of your peers
          into the room if useful.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <SuggestChip color="bg-sage/40" label="More casual" />
        <SuggestChip color="bg-blush/50" label="Tighter (-2 sentences)" />
        <SuggestChip color="bg-lavender/50" label="Lead with ROI" />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
        <span className="text-[11px] text-ink/55">
          Grounded in 7 sources · last refreshed 2m ago
        </span>
        <div className="flex gap-2">
          <button className="rounded-full border border-ink/15 px-3 py-1.5 text-[12px] text-ink/70 hover:bg-ink/5">
            Regenerate
          </button>
          <button className="rounded-full bg-ink px-3 py-1.5 text-[12px] text-cream hover:bg-ink-soft">
            Send to queue
          </button>
        </div>
      </div>
    </div>
  );
}

function Highlight({
  tone,
  children,
}: {
  tone: string;
  children: ReactNode;
}) {
  return (
    <span className={`rounded-md px-1 py-0.5 ${tone} text-ink`}>{children}</span>
  );
}

function SuggestChip({ color, label }: { color: string; label: string }) {
  return (
    <button
      className={`rounded-xl border border-ink/10 ${color} px-3 py-2 text-left text-[12px] text-ink hover:brightness-105`}
    >
      {label}
    </button>
  );
}

/* ---------------- Signals feed mock ---------------- */
export function SignalsMock() {
  const sigs = [
    {
      tag: "Funding",
      tone: "bg-mustard/70",
      title: "Lattice raised $80M Series F",
      meta: "3 ICP accounts affected · 2h ago",
    },
    {
      tag: "Hiring",
      tone: "bg-sage/70",
      title: "Acquia opening EU growth team",
      meta: "Posting includes 4 AE roles · 5h ago",
    },
    {
      tag: "People",
      tone: "bg-blush/70",
      title: "New CRO at Ramp — Diana Lim",
      meta: "Came from a current customer · 1d",
    },
    {
      tag: "Product",
      tone: "bg-lavender/70",
      title: "Mosaic shipped procurement module",
      meta: "Matches your top playbook · 1d",
    },
    {
      tag: "Lookalike",
      tone: "bg-sky/70",
      title: "Sequel hired 6 from Brightline alumni",
      meta: "12 lookalikes triggered · 2d",
    },
  ];
  return (
    <div className="bg-cream p-5">
      <div className="flex items-center justify-between pb-3">
        <p className="text-[13px] font-medium text-ink">Live signals</p>
        <span className="rounded-full bg-leaf/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-leaf">
          14 today
        </span>
      </div>
      <ul className="space-y-2">
        {sigs.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex items-start gap-3 rounded-xl border border-ink/10 bg-cream-warm p-3"
          >
            <span
              className={`mt-0.5 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink ${s.tone}`}
            >
              {s.tag}
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-ink">{s.title}</p>
              <p className="text-[11.5px] text-ink/55">{s.meta}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Deliverability mock ---------------- */
export function DeliverabilityMock() {
  const domains = [
    { d: "send.pulseflow.io", h: 98, tone: "bg-leaf" },
    { d: "outreach.helio.com", h: 94, tone: "bg-leaf" },
    { d: "go.brightline.co", h: 88, tone: "bg-mustard" },
    { d: "team.quanta.ai", h: 76, tone: "bg-blush" },
  ];
  return (
    <div className="bg-cream p-5">
      <div className="flex items-center justify-between pb-2">
        <p className="text-[13px] font-medium text-ink">Sender reputation</p>
        <span className="text-[11px] text-ink/55">Last 30 days</span>
      </div>
      <ul className="space-y-3">
        {domains.map((d, i) => (
          <li key={d.d}>
            <div className="flex items-center justify-between text-[12px] text-ink/75">
              <span className="font-medium text-ink">{d.d}</span>
              <span>{d.h}/100</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ink/10">
              <motion.div
                className={`h-full ${d.tone}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${d.h}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 1.05,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        {[
          { l: "Inbox placement", v: "92%" },
          { l: "Hard bounces", v: "0.3%" },
          { l: "Warmup days", v: "21" },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-ink/10 bg-cream-warm p-3"
          >
            <p className="font-display text-2xl text-ink">{s.v}</p>
            <p className="mt-1 text-[10.5px] uppercase tracking-wider text-ink/55">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

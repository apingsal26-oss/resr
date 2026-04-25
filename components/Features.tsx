"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./MotionPrimitives";

const categories = [
  {
    name: "Prospecting",
    body: "Find the right people on the right accounts, ranked by likelihood to convert this quarter.",
    tone: "bg-sage",
    icon: <ProspectingIcon />,
    bullets: ["ICP scoring", "Lookalike search", "Buying committee"],
  },
  {
    name: "Outbound",
    body: "Multi-channel sequences with smart fall-through, exit logic, and live deliverability guardrails.",
    tone: "bg-blush",
    icon: <OutboundIcon />,
    bullets: ["Email + LinkedIn", "Voice + SMS", "Inbox warming"],
  },
  {
    name: "AI replies",
    body: "Classify intent, draft the response, and route every reply to the rep best placed to close it.",
    tone: "bg-mustard",
    icon: <RepliesIcon />,
    bullets: ["Intent detection", "Auto-routing", "Calendar handoff"],
  },
  {
    name: "Insights",
    body: "Closed-loop reporting on the messages, signals, and angles actually moving pipeline.",
    tone: "bg-lavender",
    icon: <InsightsIcon />,
    bullets: ["Reply attribution", "Cohort lift", "Playbook ROI"],
  },
];

export function Features() {
  return (
    <section id="platform" className="relative py-28 sm:py-36">
      <div className="container-pg">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="chip">Everything in one place</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-6 max-w-xl text-balance">
                One platform.
                <br />
                <em className="font-display italic">Every</em> stage of
                outbound.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-pretty text-[17px] leading-relaxed text-ink/70">
              Pulseflow replaces the stack of single-purpose tools your team
              cobbles together. One model of your buyer, four surfaces, every
              outcome learning from the last.
            </p>
          </Reveal>
        </div>

        <StaggerGroup
          gap={0.08}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((c) => (
            <StaggerItem key={c.name}>
              <CategoryCard {...c} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CategoryCard({
  name,
  body,
  tone,
  icon,
  bullets,
}: {
  name: string;
  body: string;
  tone: string;
  icon: React.ReactNode;
  bullets: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] ${tone} p-7`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink/8 text-ink">
            {icon}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/55">
            Pulseflow
          </span>
        </div>
        <h3 className="mt-7 font-display text-[28px] leading-tight text-ink">
          {name}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink/75">{body}</p>
      </div>

      <ul className="mt-7 space-y-1.5">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-[12.5px] text-ink/75"
          >
            <span className="h-1 w-1 rounded-full bg-ink/45" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-ink/70">
        Learn more
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </motion.div>
  );
}

/* ---------------- Icons (custom inline SVG) ---------------- */
function ProspectingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle
        cx="11"
        cy="11"
        r="6"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M16 16l4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="11" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}
function OutboundIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l14-7-4 18-4-7-6-4z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function RepliesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h12a3 3 0 013 3v6a3 3 0 01-3 3H9l-4 3V9a3 3 0 011-2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 11h6M8 14h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function InsightsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19V9m6 10V5m6 14v-7m6 7V13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

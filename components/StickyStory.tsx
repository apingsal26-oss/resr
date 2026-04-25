"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Reveal } from "./MotionPrimitives";
import {
  AccountBriefMock,
  DeliverabilityMock,
  MockShell,
  SignalsMock,
  WriterMock,
} from "./ProductMock";

type Block = {
  tag: string;
  title: ReactNode;
  body: string;
  bullets: string[];
  link: string;
  toolbar: "sage" | "blush" | "mustard" | "lavender" | "sky";
  panelTone: string;
  visual: ReactNode;
  flip?: boolean;
};

const blocks: Block[] = [
  {
    tag: "Listen",
    title: (
      <>
        Every account, <em className="font-display italic">always</em> on.
      </>
    ),
    body: "Pulseflow watches hiring, funding, leadership moves, product launches, and intent across your entire ICP. The right reason to reach out, the moment it happens.",
    bullets: [
      "1,800+ data sources, deduplicated and ranked",
      "Account-level relevance scoring tuned to your wins",
      "Triggers fire into sequences automatically",
    ],
    link: "Explore the signal engine",
    toolbar: "mustard",
    panelTone: "bg-mustard/40",
    visual: <SignalsMock />,
  },
  {
    tag: "Research",
    title: (
      <>
        Briefs that read like your <em className="font-display italic">best</em> rep wrote them.
      </>
    ),
    body: "Every account gets a continuously refreshed brief: strategy, recent moves, who matters, and the angle most likely to land. No more pre-call scrambling on LinkedIn.",
    bullets: [
      "Synthesized from 7+ sources per brief",
      "Refreshed when new signals arrive",
      "Linked back to original evidence",
    ],
    link: "See account intelligence",
    toolbar: "sage",
    panelTone: "bg-sage/40",
    visual: <AccountBriefMock />,
    flip: true,
  },
  {
    tag: "Draft",
    title: (
      <>
        First-touch messages, <em className="font-display italic">ready</em> for review.
      </>
    ),
    body: "Drafts grounded in real context, scored for relevance before they reach a human queue. Your reps spend their time editing, not staring at a blank page.",
    bullets: [
      "Tone, length, and angle controls per persona",
      "Per-message reply-likelihood score",
      "Approval workflows for SDR teams",
    ],
    link: "Try the AI writer",
    toolbar: "blush",
    panelTone: "bg-blush/40",
    visual: <WriterMock />,
  },
  {
    tag: "Deliver",
    title: (
      <>
        Inboxes that <em className="font-display italic">actually</em> arrive.
      </>
    ),
    body: "Warmup, bounce defense, and per-domain pacing built in. Your sender reputation stays clean while volume scales, and reps see live deliverability per sequence.",
    bullets: [
      "Automatic inbox warming across domains",
      "Per-domain pacing and quiet hours",
      "Live placement, bounce, and complaint scores",
    ],
    link: "See deliverability guardrails",
    toolbar: "lavender",
    panelTone: "bg-lavender/40",
    visual: <DeliverabilityMock />,
    flip: true,
  },
];

export function StickyStory() {
  return (
    <section
      id="solutions"
      className="relative bg-cream py-24 sm:py-32"
    >
      <div className="container-pg">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="chip">How it works</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-2 mt-6 text-balance">
              A loop that gets <em className="font-display italic">smarter</em> every week.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink/70">
              Pulseflow is a closed loop, not a sequencer with AI bolted on.
              Listen, research, draft, deliver, learn — repeat. Performance
              compounds quietly, week after week.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 space-y-28 sm:space-y-36">
          {blocks.map((b, i) => (
            <FeatureBlock key={b.tag} block={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ block, index }: { block: Block; index: number }) {
  const fromX = block.flip ? 60 : -60;
  return (
    <div
      className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
        block.flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: fromX, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-7"
      >
        <div
          className={`relative overflow-hidden rounded-[36px] ${block.panelTone} p-6 sm:p-10`}
        >
          <BgGrid />
          <MockShell toolbar={block.toolbar} url={`app.pulseflow.io / ${block.tag.toLowerCase()}`}>
            {block.visual}
          </MockShell>
        </div>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.15,
        }}
        className="lg:col-span-5"
      >
        <span className="chip">
          0{index + 1} · {block.tag}
        </span>
        <h3 className="display-3 mt-5 max-w-[14ch] text-balance">
          {block.title}
        </h3>
        <p className="mt-5 max-w-md text-pretty text-[16.5px] leading-relaxed text-ink/70">
          {block.body}
        </p>
        <ul className="mt-6 space-y-2.5">
          {block.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-[14.5px] text-ink/80"
            >
              <CheckIcon />
              {b}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="mt-7 inline-flex items-center gap-1.5 text-[12.5px] font-medium uppercase tracking-[0.2em] text-ink underline-offset-4 hover:underline"
        >
          {block.link}
          <span aria-hidden>→</span>
        </a>
      </motion.div>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-leaf text-cream">
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.5l2 2L8 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function BgGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(14,16,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,16,20,0.06) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    />
  );
}

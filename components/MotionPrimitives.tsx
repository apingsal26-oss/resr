"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

const baseEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: baseEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: baseEase } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  amount = 0.25,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, ease: baseEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  gap?: number;
  delay?: number;
  amount?: number;
};

export function StaggerGroup({
  children,
  gap = 0.1,
  delay = 0,
  amount = 0.2,
  ...rest
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={stagger(gap, delay)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  ...rest
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div variants={fadeUp} {...rest}>
      {children}
    </motion.div>
  );
}

/**
 * MaskedLine: renders a single line of text that slides up from below a clip mask.
 * Used inside a parent with `initial="hidden" whileInView="visible"`.
 */
export function MaskedLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`line-mask ${className}`}>
      <motion.span
        className="block"
        variants={{
          hidden: { y: "110%" },
          visible: {
            y: "0%",
            transition: { duration: 0.95, ease: baseEase, delay },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function MaskedLineGroup({
  children,
  amount = 0.3,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={stagger(0.08, delay)}
    >
      {children}
    </motion.div>
  );
}

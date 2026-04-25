"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

const baseEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: baseEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: baseEase } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
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
  y = 28,
  amount = 0.3,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: baseEase, delay }}
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
  amount = 0.25,
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

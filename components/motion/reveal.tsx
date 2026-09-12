"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { animated, reveal } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  /**
   * Position in the group. Multiplied by the shared stagger delay, so siblings
   * that come into view together still arrive one after another.
   */
  index?: number;
  className?: string;
};

/**
 * Fades its child up into place the first time it is 20% visible.
 *
 * Only `opacity` and `transform` are animated, so the reveal can never shift
 * layout — the element occupies its final box from the first paint.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={reveal}
      {...animated}
    >
      {children}
    </motion.div>
  );
}

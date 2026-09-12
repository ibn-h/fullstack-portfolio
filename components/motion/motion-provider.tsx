"use client";

import type { ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";

/**
 * The single `prefers-reduced-motion` check for the whole app.
 *
 * `reducedMotion="user"` only drops positional keys, so opacity would still
 * fade; `skipAnimations` is what actually snaps every value straight to its
 * final keyframe. Together they stop all animation work for users who asked
 * for less motion.
 *
 * `MotionConfig` renders context only, never DOM, so branching on a hook that
 * reads `null` on the server and a real boolean on the client cannot produce a
 * hydration mismatch. The matching `[data-animated]` rule in `globals.css`
 * covers the frames before this hydrates.
 *
 * `children` stay Server Components — they are passed through as a prop.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion="user"
      skipAnimations={prefersReducedMotion ?? false}
    >
      {children}
    </MotionConfig>
  );
}

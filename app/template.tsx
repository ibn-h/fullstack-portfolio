"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { animated, pageTransition } from "@/lib/animations";

/**
 * Fades each route in as it mounts.
 *
 * Next gives the template a fresh key whenever the first path segment changes,
 * so navigating between `/` and `/projects/[slug]` remounts this and replays
 * the fade. `children` are rendered on the server and passed through as a
 * prop, so marking this file `"use client"` does not pull the pages into the
 * client bundle.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageTransition}
      {...animated}
    >
      {children}
    </motion.div>
  );
}

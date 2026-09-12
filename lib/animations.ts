import type { Variants } from "motion/react";

/**
 * Shared animation tokens. Every animated surface reads its timing from here so
 * the hero, the scroll reveals and the page transitions stay in sync.
 */
export const DURATION = {
  /** Entrance animations: hero stagger, scroll reveals. */
  entrance: 0.4,
  /** Route transitions — kept short so navigation never feels sluggish. */
  transition: 0.25,
} as const;

export const EASE = {
  entrance: "easeOut",
  transition: "easeInOut",
} as const;

/** Delay between siblings in a staggered group. */
export const STAGGER = 0.12;

/** Distance elements travel upward into place, in pixels. */
export const OFFSET = {
  hero: 20,
  card: 24,
  page: 8,
} as const;

/**
 * Spread onto every animated element.
 *
 * Motion only learns the user's `prefers-reduced-motion` setting once it
 * hydrates, so the hidden `initial` state still ships in the server-rendered
 * HTML. The single `[data-animated]` rule in `globals.css` pins these elements
 * to their final state at paint time, which means reduced-motion users never
 * see the animation start — and never see content held at `opacity: 0` waiting
 * for a scroll trigger that may not come.
 *
 * @see MotionProvider, which stops the JS side of the animation for the same users.
 */
export const animated = { "data-animated": "" } as const;

/**
 * Parent of a staggered group. Holds no visual state of its own — it only
 * drives the timing of its children.
 */
export const staggerGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER,
      // No initial delay: the first child starts the moment the group mounts.
      delayChildren: 0,
    },
  },
};

/** Child of a staggered group — fades up into place. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: OFFSET.hero },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.entrance, ease: EASE.entrance },
  },
};

/**
 * Scroll-triggered reveal. Each element watches the viewport independently, so
 * the stagger comes from the `custom` index rather than from a parent.
 */
export const reveal: Variants = {
  hidden: { opacity: 0, y: OFFSET.card },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.entrance,
      ease: EASE.entrance,
      delay: index * STAGGER,
    },
  }),
};

/** Route transition — a faster, shorter version of the entrance. */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: OFFSET.page },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.transition, ease: EASE.transition },
  },
};

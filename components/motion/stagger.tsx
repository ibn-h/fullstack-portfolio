"use client";

import type { ComponentPropsWithoutRef, ElementType } from "react";
import { motion } from "motion/react";

import { animated, staggerGroup, staggerItem } from "@/lib/animations";

/**
 * Tags a `StaggerItem` can render as. Restricted to intrinsic elements so the
 * `as` prop stays serializable across the Server/Client boundary — which is
 * what lets the surrounding section remain a Server Component.
 */
type AnimatedTag = "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "li";

type StaggerProps<T extends AnimatedTag> = { as?: T } & ComponentPropsWithoutRef<T>;

/**
 * Fades its children up into place one after another on mount. The first child
 * starts immediately; each following child is offset by the shared stagger
 * delay.
 */
export function StaggerGroup<T extends AnimatedTag = "div">({
  as,
  ...props
}: StaggerProps<T>) {
  const Component = motion[(as ?? "div") as AnimatedTag] as ElementType;

  return (
    <Component
      initial="hidden"
      animate="visible"
      variants={staggerGroup}
      {...props}
    />
  );
}

/**
 * A single element inside a `StaggerGroup`. Inherits its `hidden`/`visible`
 * state from the group, so it needs no `initial`/`animate` of its own.
 */
export function StaggerItem<T extends AnimatedTag = "div">({
  as,
  ...props
}: StaggerProps<T>) {
  const Component = motion[(as ?? "div") as AnimatedTag] as ElementType;

  return <Component variants={staggerItem} {...animated} {...props} />;
}

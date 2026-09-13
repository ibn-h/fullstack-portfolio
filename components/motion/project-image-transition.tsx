import { ViewTransition, type ReactNode } from "react";

type ProjectImageTransitionProps = {
  slug: string;
  children: ReactNode;
};

/**
 * Morphs a project's screenshot between the card on `/` and the hero on
 * `/projects/[slug]`. Both ends render this component, so the shared `name`
 * can never drift out of sync.
 *
 * `default="none"` stops the image from crossfading on its own during unrelated
 * transitions; the explicit `share` is what keeps the morph working with it.
 */
export function ProjectImageTransition({
  slug,
  children,
}: ProjectImageTransitionProps) {
  return (
    <ViewTransition
      name={`project-image-${slug}`}
      share="morph"
      default="none"
    >
      {children}
    </ViewTransition>
  );
}

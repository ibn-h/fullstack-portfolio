import { ViewTransition, type ReactNode } from "react";

/**
 * Crossfades between routes.
 *
 * Next gives the template a fresh key whenever the first path segment changes,
 * so navigating between `/` and `/projects/[slug]` unmounts the old page and
 * mounts the new one — which is what fires the `exit` and `enter` animations.
 * Route navigations are React transitions, so no extra wiring is needed.
 *
 * The `page-fade` class is styled in `globals.css`. `default="none"` keeps this
 * boundary still during unrelated transitions, so named elements inside it
 * (like the project image morph) animate on their own.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-fade" exit="page-fade" default="none">
      {children}
    </ViewTransition>
  );
}

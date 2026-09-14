import Link from "next/link";

import { ProjectBadge } from "@/components/projects/ProjectBadge";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/i18n/server";

export default async function Hero() {
  const { hero } = await getContent();

  return (
    <section id="hero" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <div className="grid items-center gap-xl lg:grid-cols-[1.1fr_1fr]">
        <div>
          {/* CSS animations, not Motion: they start at first paint instead of
              waiting for hydration, so the h1 (the LCP element) shows early. */}
          <div className="hero-enter">
            <p className="mb-md text-small text-muted">{hero.greeting}</p>
          </div>

          <div className="hero-enter" style={{ animationDelay: "100ms" }}>
            <h1 className="mb-lg max-w-[23ch] text-h1 font-bold text-foreground">
              {hero.tagline}
            </h1>
          </div>

          <div className="hero-enter" style={{ animationDelay: "200ms" }}>
            <p className="mb-lg max-w-[60ch] text-body text-muted">
              {hero.subtitle}
            </p>
          </div>

          <div
            className="hero-enter flex items-center gap-lg"
            style={{ animationDelay: "300ms" }}
          >
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href={hero.cta.primary.href} />}
            >
              {hero.cta.primary.label}
            </Button>
            <Button
              variant="link"
              nativeButton={false}
              render={<Link href={hero.cta.secondary.href} />}
            >
              {hero.cta.secondary.label}
            </Button>
          </div>
        </div>

        <div className="hero-enter" style={{ animationDelay: "400ms" }}>
          <aside
            aria-label={hero.profile.label}
            className="flex flex-col gap-lg rounded-lg border border-border bg-surface p-lg"
          >
            <div className="flex items-center justify-between gap-md">
              <p className="text-small text-muted">{hero.profile.summary}</p>
              <span className="inline-flex items-center gap-sm rounded-full border border-primary/20 bg-primary/10 px-sm py-xs">
                <span
                  className="size-sm shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <small className="text-primary">{hero.badge}</small>
              </span>
            </div>

            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{hero.profile.label}</caption>
              <tbody>
                {hero.profile.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="w-2/5 py-sm pr-md align-baseline text-small font-normal text-muted"
                    >
                      {row.label}
                    </th>
                    <td className="py-sm align-baseline text-body font-medium text-text">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex flex-col gap-sm border-t border-border pt-lg">
              <p className="text-small text-muted">{hero.profile.stackLabel}</p>
              <ul className="flex flex-wrap gap-sm">
                {hero.profile.stack.map((tech) => (
                  <li key={tech}>
                    <ProjectBadge label={tech} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

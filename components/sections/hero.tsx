import Link from "next/link";

import { ProjectBadge } from "@/components/projects/ProjectBadge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { getContent } from "@/lib/i18n/server";

export default async function Hero() {
  const { hero } = await getContent();

  return (
    <section id="hero" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <div className="grid items-center gap-xl lg:grid-cols-[1.1fr_1fr]">
        <div>
          <FadeIn>
            <p className="mb-md text-small text-muted">{hero.greeting}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-lg max-w-[23ch] text-h1 font-bold text-foreground">
              {hero.tagline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-lg max-w-[60ch] text-body text-muted">
              {hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex items-center gap-lg">
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
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <aside
            aria-label={hero.process.label}
            className="flex flex-col gap-lg rounded-lg border border-border bg-surface p-lg"
          >
            <div className="flex items-center justify-between gap-md">
              <p className="text-small text-muted">{hero.process.summary}</p>
              <span className="inline-flex items-center gap-sm rounded-full border border-primary/20 bg-primary/10 px-sm py-xs">
                <span
                  className="size-sm shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <small className="text-primary">{hero.badge}</small>
              </span>
            </div>

            <ol className="flex flex-col">
              {hero.process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-baseline gap-md border-b border-border py-md first:pt-0 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono text-small text-primary tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-xs">
                    <span className="text-body font-medium text-text">
                      {step.title}
                    </span>
                    <span className="text-small text-muted">
                      {step.description}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-sm border-t border-border pt-lg">
              <p className="text-small text-muted">{hero.process.stackLabel}</p>
              <ul className="flex flex-wrap gap-sm">
                {hero.process.stack.map((tech) => (
                  <li key={tech}>
                    <ProjectBadge label={tech} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}

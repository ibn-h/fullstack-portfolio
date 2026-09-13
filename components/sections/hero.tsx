import Link from "next/link";

import { ProjectBadge } from "@/components/projects/ProjectBadge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

type HeroProps = {
  name: string;
};

const steps = [
  {
    title: "Plan",
    description: "A written spec you approve before I write any code.",
  },
  {
    title: "Build",
    description:
      "Working features you can test every week, not a surprise at the end.",
  },
  {
    title: "Launch",
    description: "Live on your domain, with documentation to hand over.",
  },
];

const stack = [
  "Full-stack Next.js",
  "Databases",
  "Authentication",
  "AI integration",
  "Real-time",
];

export default function Hero({ name }: HeroProps) {
  return (
    <section id="hero" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <div className="grid items-center gap-xl lg:grid-cols-[1.1fr_1fr]">
        <div>
          <FadeIn>
            <p className="mb-md text-small text-muted">Hi, I&apos;m {name} —</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-lg max-w-[23ch] text-h1 font-bold text-foreground">
              Your idea, built and live — by one developer who plans before he
              codes.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-lg max-w-[60ch] text-body text-muted">
              I build web apps and SaaS products for startups and small
              businesses. Every project starts with a written spec, so you know
              exactly what you&apos;re getting before I write a line of code.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex items-center gap-lg">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              Let&apos;s talk
            </Button>
            <Button
              variant="link"
              nativeButton={false}
              render={<Link href="#projects" />}
            >
              See my work ↓
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <aside
            aria-label="How I work"
            className="flex flex-col gap-lg rounded-lg border border-border bg-surface p-lg"
          >
            <div className="flex items-center justify-between gap-md">
              <p className="text-small text-muted">
                Three applications shipped
              </p>
              <span className="inline-flex items-center gap-sm rounded-full border border-primary/20 bg-primary/10 px-sm py-xs">
                <span
                  className="size-sm shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <small className="text-primary">Available</small>
              </span>
            </div>

            <ol className="flex flex-col">
              {steps.map((step, index) => (
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
              <p className="text-small text-muted">Stack</p>
              <ul className="flex flex-wrap gap-sm">
                {stack.map((tech) => (
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

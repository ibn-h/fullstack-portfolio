import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeroProps = {
  name: string;
};

export function Hero({ name }: HeroProps) {
  return (
    <section className="rounded-lg border border-border bg-background px-6 py-xl sm:px-xl sm:py-2xl">
      <div className="">
        <p className="mb-md text-small text-muted">Hi, I&apos;m {name} —</p>

        <h1 className="mb-lg text-h1 font-bold text-foreground max-w-[23ch]">
          End-to-end <span className="text-accent">Next.js developer</span> for
          startups and small businesses.
        </h1>

        <p className="mb-lg text-body text-muted max-w-[60ch]">
          I build web applications and SaaS products from idea to production —
          so you only need one developer to make it happen.
        </p>

        <div className="flex items-center gap-lg">
          <Button>
            <Link href="#contact">Let&apos;s talk</Link>
          </Button>
          <Button variant="link">
            <Link href="#projects">See my work ↓</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

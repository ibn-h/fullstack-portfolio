import Link from "next/link";

import { Button } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

type HeroProps = {
  name: string;
};

export default function Hero({ name }: HeroProps) {
  return (
    <section
      id="hero"
      className="rounded-lg border border-border bg-background px-6 py-xl sm:px-xl sm:py-2xl"
    >
      <StaggerGroup>
        <StaggerItem as="p" className="mb-md text-small text-muted">
          Hi, I&apos;m {name} —
        </StaggerItem>

        <StaggerItem
          as="h1"
          className="mb-lg text-h1 font-bold text-foreground max-w-[23ch]"
        >
          End-to-end <span className="text-accent">Next.js developer</span> for
          startups and small businesses.
        </StaggerItem>

        <StaggerItem as="p" className="mb-lg text-body text-muted max-w-[60ch]">
          I build web applications and SaaS products from idea to production —
          so you only need one developer to make it happen.
        </StaggerItem>

        <StaggerItem className="flex items-center gap-lg">
          <Button nativeButton={false} render={<Link href="#contact" />}>
            Let&apos;s talk
          </Button>
          <Button
            variant="link"
            nativeButton={false}
            render={<Link href="#projects" />}
          >
            See my work ↓
          </Button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}

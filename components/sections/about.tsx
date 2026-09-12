import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const stats = [
  { value: "2+", label: "Years coding" },
  { value: "3", label: "Projects shipped" },
  { value: "19", label: "years old" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <Card className="rounded-lg border border-border bg-surface ring-0 [--card-spacing:var(--spacing-lg)]">
        <CardHeader>
          <h2 className="text-small text-muted">About me</h2>
        </CardHeader>

        <CardContent className="flex flex-col gap-lg">
          <p className="text-h4 text-text max-w-[60ch]">
            I&apos;m Badr, a self-taught full-stack developer with two years of
            experience building web applications.
          </p>

          <p className="text-body text-muted max-w-[60ch]">
            One of my recent projects is Y2Notion, a SaaS tool that summarizes
            YouTube videos and saves them directly to Notion. I like to work in
            a structured way — every project starts with documentation, and I
            only write code once I have a clear plan and defined feature specs.
          </p>

          <p className="text-body text-muted max-w-[60ch]">
            Alongside development, I worked at an IT helpdesk, an experience
            that sharpened my problem-solving and communication skills.
          </p>

          <dl className="grid grid-cols-3 gap-md">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-xs rounded-md border border-border bg-bg p-md"
              >
                <dt className="text-small text-muted">{stat.label}</dt>
                <dd className="text-h3 text-primary m-0">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>

        <CardFooter className="border-border bg-transparent">
          <p className="text-body text-muted flex flex-wrap items-center gap-sm">
            <span
              className="size-sm shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>
              Currently available for freelance projects. Have something in
              mind?{" "}
              <Link
                href="#contact"
                className="text-primary underline-offset-4 hover:underline"
              >
                Let&apos;s talk
              </Link>
              .
            </span>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}

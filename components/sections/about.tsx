import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { content } from "@/lib/content";

const { about } = content;
const [lead, ...paragraphs] = about.paragraphs;

export default function About() {
  return (
    <section id="about" className="px-6 py-xl sm:px-xl sm:py-2xl">
      <Card className="rounded-lg border border-border bg-surface ring-0 [--card-spacing:var(--spacing-lg)]">
        <CardHeader>
          <h2 className="text-small text-muted">{about.label}</h2>
        </CardHeader>

        <CardContent className="grid gap-xl lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col gap-lg">
            <p className="text-h4 text-text">{lead}</p>

            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-3 gap-md lg:grid-cols-1">
            {about.stats.map((stat) => (
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
              {about.availability.text}{" "}
              <Link
                href={about.availability.cta.href}
                className="text-primary underline-offset-4 hover:underline"
              >
                {about.availability.cta.label}
              </Link>
              .
            </span>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}

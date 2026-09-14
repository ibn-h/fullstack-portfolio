import Link from "next/link";

import { ProjectBadge } from "@/components/projects/ProjectBadge";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/i18n/server";
import { site } from "@/lib/site";

const promptUser = site.name.toLowerCase();

function Prompt({ host, command }: { host: string; command: string }) {
  return (
    <p>
      <span className="text-primary">
        {promptUser}@{host}
      </span>
      <span className="text-muted">:~$</span>{" "}
      <span className="text-text">{command}</span>
    </p>
  );
}

function Highlighted({ text, highlight }: { text: string; highlight: string }) {
  const start = highlight ? text.indexOf(highlight) : -1;
  if (start === -1) return text;

  return (
    <>
      {text.slice(0, start)}
      <span className="text-primary">{highlight}</span>
      {text.slice(start + highlight.length)}
    </>
  );
}

export default async function Hero() {
  const { hero } = await getContent();
  const { terminal } = hero.profile;

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
              <Highlighted
                text={hero.tagline}
                highlight={hero.taglineHighlight}
              />
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
            className="overflow-hidden rounded-lg border border-border bg-surface font-mono text-small"
          >
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-sm border-b border-border px-md py-sm">
              <span className="flex gap-sm" aria-hidden="true">
                <span className="size-sm rounded-full bg-border" />
                <span className="size-sm rounded-full bg-border" />
                <span className="size-sm rounded-full bg-border" />
              </span>
              <p className="text-muted">{terminal.title}</p>
            </div>

            <div className="flex flex-col gap-md p-lg">
              <div className="flex flex-col gap-sm">
                <Prompt host={terminal.host} command={terminal.profileCommand} />

                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">{hero.profile.label}</caption>
                  <tbody>
                    {hero.profile.rows.map((row) => (
                      <tr key={row.label}>
                        <th
                          scope="row"
                          className="w-2/5 py-xs pr-md align-baseline font-normal text-muted"
                        >
                          {row.label}
                        </th>
                        <td className="py-xs align-baseline text-text">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col gap-sm">
                <Prompt host={terminal.host} command={terminal.stackCommand} />

                <ul className="flex flex-wrap gap-sm">
                  {hero.profile.stack.map((tech) => (
                    <li key={tech}>
                      <ProjectBadge label={tech} />
                    </li>
                  ))}
                </ul>
              </div>

              <p className="flex items-center gap-sm text-primary">
                <span
                  className="size-sm shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {hero.badge}
                <span className="cursor-blink text-text" aria-hidden="true">
                  _
                </span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ProjectImageTransition } from "@/components/motion/project-image-transition";
import { Card, CardContent } from "@/components/ui/card";
import { contentByLocale } from "@/lib/content";
import { localizePath } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";
import { caseStudyExcerpt, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectLinks } from "./ProjectLinks";

interface ProjectRowProps {
  project: Project;
  /** Zero-based position in the list. Odd rows put the image on the right. */
  index: number;
}

export async function ProjectRow({ project, index }: ProjectRowProps) {
  const locale = await getLocale();
  const { caseStudyTitles } = contentByLocale[locale].projectDetail;
  const caseStudyUrl = localizePath(locale, `/projects/${project.slug}`);
  const reversed = index % 2 === 1;

  return (
    <Card className="bg-surface border-border overflow-hidden py-0">
      <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2">
        <ProjectImageTransition slug={project.slug}>
          {/* Duplicates the case study button below, so it stays out of the tab order. */}
          <Link
            href={caseStudyUrl}
            tabIndex={-1}
            aria-hidden="true"
            className={cn(
              "relative block aspect-video md:aspect-auto md:min-h-80",
              reversed && "md:order-last",
            )}
          >
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={index === 0}
              className="object-cover"
            />
          </Link>
        </ProjectImageTransition>

        <div className="p-6 sm:p-8 flex flex-col justify-center gap-4">
          <small className="text-muted tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </small>
          <div className="flex flex-col gap-2">
            <h2 className="text-h3 text-text m-0">{project.title}</h2>
            <p className="text-muted text-sm leading-relaxed m-0">
              {project.tagline}
            </p>
          </div>

          <dl className="border-border flex flex-col gap-3 border-t pt-4">
            {caseStudyExcerpt.map((id) => (
              <div key={id} className="flex flex-col gap-1">
                <dt className="text-muted text-xs uppercase tracking-wider">
                  {caseStudyTitles[id]}
                </dt>
                <dd className="text-text text-sm leading-relaxed line-clamp-3 m-0">
                  {project.caseStudy[id][0]}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <ProjectBadge key={item} label={item} />
            ))}
          </div>
          <ProjectLinks
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            caseStudyUrl={caseStudyUrl}
          />
        </div>
      </CardContent>
    </Card>
  );
}

import type { CSSProperties } from "react";
import { projectsEn } from "./content/projects-en";
import { projectsNl } from "./content/projects-nl";
import type { Locale } from "./i18n/config";

export interface Screenshot {
  src: string;
  alt: string;
  /** Scales the image up from its top edge, e.g. `1.2` for 20% larger. */
  zoom?: number;
}

/** Inline style for a screenshot's `<Image>`. Its wrapper must clip overflow. */
export function screenshotStyle({ zoom }: Screenshot): CSSProperties {
  if (!zoom) return {};
  return {
    objectPosition: "top",
    transform: `scale(${zoom})`,
    transformOrigin: "top",
  };
}

/** Each entry is one paragraph. */
export interface CaseStudy {
  problem: readonly string[];
  approach: readonly string[];
  challenge: readonly string[];
  result: readonly string[];
}

export type CaseStudyId = keyof CaseStudy;

/** Case study sections, in the order they're rendered on the detail page. */
export const caseStudyOrder = [
  "problem",
  "approach",
  "challenge",
  "result",
] as const satisfies readonly CaseStudyId[];

/** Case study sections previewed on each row of the projects page. */
export const caseStudyExcerpt = [
  "problem",
  "result",
] as const satisfies readonly CaseStudyId[];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  stack: readonly string[];
  liveUrl: string;
  githubUrl: string;
  heroImage: Screenshot;
  gallery: readonly Screenshot[];
  featured: boolean;
  caseStudy: CaseStudy;
}

export type ProjectSlug = "y2notion" | "hairsalon-booking" | "warehouse-insights";

/** The translated half of a project. One per locale, in lib/content/projects-*.ts. */
export interface ProjectCopy {
  title: string;
  tagline: string;
  description: string;
  role: string;
  heroImageAlt: string;
  /** Same order as the project's `gallery`. */
  galleryAlts: readonly string[];
  caseStudy: CaseStudy;
}

export type ProjectsCopy = Record<ProjectSlug, ProjectCopy>;

/** The language-independent half of a project. */
interface ProjectData {
  slug: ProjectSlug;
  stack: readonly string[];
  liveUrl: string;
  githubUrl: string;
  heroImage: string;
  gallery: readonly string[];
  /** Applied to the hero image and every gallery image. */
  imageZoom?: number;
  featured: boolean;
}

const projectData: readonly ProjectData[] = [
  {
    slug: "y2notion",
    stack: ["Next.js", "Groq API", "Notion API", "TypeScript", "Supadata"],
    liveUrl: "https://y2notion.com",
    // TODO: replace with the real repository URL.
    githubUrl: "https://github.com/jouwusername/y2notion",
    heroImage: "/screenshots/y2notion-homepage.png",
    gallery: [
      "/screenshots/y2notion-homepage-summary.png",
      "/screenshots/y2notion-summary.png",
    ],
    featured: true,
  },
  {
    slug: "hairsalon-booking",
    stack: ["Next.js", "Supabase", "Resend"],
    liveUrl: "https://theblade.com",
    // TODO: replace with the real repository URL.
    githubUrl: "https://github.com/jouwusername/hairsalon",
    heroImage: "/screenshots/hairsalon-homepage.png",
    gallery: [
      "/screenshots/hairsalon-form.png",
      "/screenshots/hairsalon-dashboard.png",
    ],
    featured: false,
  },
  {
    slug: "warehouse-insights",
    stack: ["Next.js", "Pusher", "Auth.js"],
    liveUrl: "https://warehouse-insights.com",
    // TODO: replace with the real repository URL.
    githubUrl: "https://github.com/jouwusername/warehouse-insights",
    heroImage: "/screenshots/warehouse-insights-dashboard.png",
    // TODO: add the remaining screenshots once they're taken
    gallery: ["/screenshots/warehouse-orders.png"],
    imageZoom: 1.2,
    featured: false,
  },
];

const copyByLocale: Record<Locale, ProjectsCopy> = {
  en: projectsEn,
  nl: projectsNl,
};

export const projectSlugs: readonly ProjectSlug[] = projectData.map(
  ({ slug }) => slug,
);

export function getProjects(locale: Locale): readonly Project[] {
  return projectData.map(({ heroImage, gallery, imageZoom, ...data }) => {
    const { heroImageAlt, galleryAlts, ...copy } =
      copyByLocale[locale][data.slug];

    return {
      ...data,
      ...copy,
      heroImage: { src: heroImage, alt: heroImageAlt, zoom: imageZoom },
      gallery: gallery.map((src, i) => ({
        src,
        alt: galleryAlts[i] ?? "",
        zoom: imageZoom,
      })),
    };
  });
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

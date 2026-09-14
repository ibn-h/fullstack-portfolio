interface CaseStudySectionProps {
  title: string;
  /** One entry per paragraph. */
  content: readonly string[];
}

export function CaseStudySection({ title, content }: CaseStudySectionProps) {
  return (
    <section className="mb-lg">
      <h2 className="text-h3 text-text">{title}</h2>
      <div className="mt-sm flex flex-col gap-sm">
        {content.map((paragraph) => (
          <p key={paragraph} className="text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

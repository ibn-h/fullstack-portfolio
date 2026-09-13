interface CaseStudySectionProps {
  title: string;
  /** One entry per paragraph. */
  content: readonly string[];
}

export function CaseStudySection({ title, content }: CaseStudySectionProps) {
  return (
    <section className="mb-lg">
      <h3 className="text-text">{title}</h3>
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

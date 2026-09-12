interface CaseStudySectionProps {
  title: string;
  content: string;
}

export function CaseStudySection({ title, content }: CaseStudySectionProps) {
  return (
    <section className="mb-lg">
      <h3 className="text-text">{title}</h3>
      <p className="text-muted mt-sm leading-relaxed">{content}</p>
    </section>
  );
}

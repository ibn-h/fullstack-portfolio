import Image from "next/image";

interface ProjectHeaderProps {
  title: string;
  tagline: string;
  heroImage: string;
}

export function ProjectHeader({
  title,
  tagline,
  heroImage,
}: ProjectHeaderProps) {
  return (
    <header className="mb-lg">
      <h1 className="text-text">{title}</h1>
      <p className="text-muted mt-sm">{tagline}</p>
      <div className="relative mt-md aspect-video w-full">
        <Image
          src={heroImage}
          alt={`${title} homepage screenshot`}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </header>
  );
}

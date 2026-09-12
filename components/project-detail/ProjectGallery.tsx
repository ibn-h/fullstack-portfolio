import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

/** Turns "/screenshots/y2notion-save-to-notion.png" into "y2notion save to notion". */
function describe(src: string) {
  return src
    .split("/")
    .pop()!
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ");
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
      {images.map((src) => (
        <div key={src} className="relative aspect-video w-full">
          <Image
            src={src}
            alt={`${describe(src)} screenshot`}
            fill
            sizes="(min-width: 768px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="rounded-md object-cover"
          />
        </div>
      ))}
    </div>
  );
}

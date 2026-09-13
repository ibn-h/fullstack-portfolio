import Image from "next/image";
import type { Screenshot } from "@/lib/projects";

interface ProjectGalleryProps {
  images: readonly Screenshot[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
      {images.map((image) => (
        <div key={image.src} className="relative aspect-video w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="rounded-md object-cover"
          />
        </div>
      ))}
    </div>
  );
}

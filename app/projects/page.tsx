// Projects page

import Link from "next/link";
import { projects } from "@/lib/projects";

function Page() {
  return (
    <div className="flex flex-col gap-3">
      {projects.map(({ slug, title }) => (
        <Link key={slug} href={`/projects/${slug}`}>
          {title}
        </Link>
      ))}
    </div>
  );
}

export default Page;

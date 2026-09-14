import Link from "next/link";
import { lang } from "next/root-params";
import { contentByLocale } from "@/lib/content";
import { defaultLocale, hasLocale, localizePath } from "@/lib/i18n/config";

export default async function NotFound() {
  // Not resolveLocale(): calling notFound() from the 404 page itself would loop.
  const value = await lang();
  const locale = hasLocale(value) ? value : defaultLocale;
  const { notFound } = contentByLocale[locale];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-md px-6 py-2xl text-center sm:px-xl">
      <h1 className="text-h2 text-text">{notFound.heading}</h1>
      <p className="text-body text-muted max-w-[50ch]">{notFound.body}</p>
      <Link
        href={localizePath(locale, "/")}
        className="text-primary underline-offset-4 hover:underline"
      >
        {notFound.cta}
      </Link>
    </main>
  );
}

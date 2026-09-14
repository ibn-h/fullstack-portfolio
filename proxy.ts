import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";

/**
 * Every page lives under `app/[lang]`, but the default locale has no URL prefix:
 * `/projects` is rewritten to `/en/projects`, and `/nl/projects` is served as is.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first = ""] = pathname.split("/");

  // `/en/projects` → `/projects`, so each page has exactly one URL per language.
  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url);
  }

  if (hasLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals, the root icons and anything with a file
  // extension (screenshots, robots.txt, sitemap.xml).
  matcher: ["/((?!api|_next|icon|apple-icon|.*\\..*).*)"],
};

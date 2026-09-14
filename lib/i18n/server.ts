// Reads the locale from the root `[lang]` segment. Server Components only —
// metadata, image routes and route handlers get the locale from `params` or the request.

import { lang } from "next/root-params";
import { contentByLocale } from "@/lib/content";
import { resolveLocale } from "./resolve-locale";

export async function getLocale() {
  return resolveLocale(await lang());
}

export async function getContent() {
  return contentByLocale[await getLocale()];
}

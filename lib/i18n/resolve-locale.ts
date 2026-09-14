import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./config";

/** Narrows a `[lang]` route param to a supported locale, or renders the 404 page. */
export function resolveLocale(value: string): Locale {
  if (!hasLocale(value)) notFound();
  return value;
}

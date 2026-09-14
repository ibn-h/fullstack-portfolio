import type { Locale } from "@/lib/i18n/config";
import { en } from "./en";
import { nl } from "./nl";

/** Turns the literal types of `as const` copy back into `string`, so every locale shares one shape. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Widen<Item>[]
    : { readonly [Key in keyof T]: Widen<T[Key]> };

/** The shape of all visible copy. English is the source; other locales must match it exactly. */
export type Content = Widen<typeof en>;

export const contentByLocale: Record<Locale, Content> = { en, nl };

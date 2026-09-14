import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/motion/motion-provider";
import { contentByLocale } from "@/lib/content";
import { locales } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { getLocale } from "@/lib/i18n/server";
import { baseOpenGraph, defaultTitle, isIndexable } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Only the locales from generateStaticParams exist — anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// No canonical here: it would be inherited by every route. Pages set their own.
export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const locale = resolveLocale((await params).lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle(locale),
      template: `%s — ${site.name}`,
    },
    description: contentByLocale[locale].meta.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: siteUrl }],
    creator: site.name,
    openGraph: baseOpenGraph(locale),
    twitter: { card: "summary_large_image" },
    robots: { index: isIndexable, follow: isIndexable },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const { nav, header } = contentByLocale[locale];

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        <MotionProvider>
          <Header locale={locale} nav={nav} copy={header} />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

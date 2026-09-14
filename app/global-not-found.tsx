import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { contentByLocale } from "@/lib/content";
import { defaultLocale } from "@/lib/i18n/config";
import "./globals.css";

// For URLs that don't match any route. Localized 404s come from app/[lang]/not-found.tsx.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const copy = contentByLocale[defaultLocale].notFound;

export const metadata: Metadata = {
  title: copy.heading,
};

export default function GlobalNotFound() {
  return (
    <html
      lang={defaultLocale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center gap-md px-6 text-center">
        <h1 className="text-h2 text-text">{copy.heading}</h1>
        <p className="text-body text-muted max-w-[50ch]">{copy.body}</p>
        <Link
          href="/"
          className="text-primary underline-offset-4 hover:underline"
        >
          {copy.cta}
        </Link>
      </body>
    </html>
  );
}

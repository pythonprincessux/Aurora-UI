import "./globals.css";
import type { Metadata } from "next";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  title: "Aurora UI — Ember Edition",
  description:
    "Aurora Ember — a glowing, ember-inspired edition of the Aurora UI built with Next.js, Tailwind, and TypeScript. True Shuffle. Pure Flow. Designed by Kiara McRae.",
  keywords: [
    "Aurora UI",
    "Aurora Ember",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Kiara McRae",
    "UI Design",
    "Shuffle Algorithm",
    "Ember Glow",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png" },
      { url: "/ember-favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Aurora Ember Edition",
    description:
      "Experience Aurora Ember — an immersive, ember-toned interface inspired by energy and flow.",
    url: "https://aurora-ui-orcin.vercel.app",
    siteName: "Aurora UI",
    images: [
      {
        url: "https://raw.githubusercontent.com/pythonprincessux/Aurora-UI/main/public/preview-dawn.png",
        width: 1200,
        height: 630,
        alt: "Aurora Ember Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ember-favicon.png" type="image/png" />
        <meta name="theme-color" content="#FF7A00" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-orange-900 text-white overflow-x-hidden transition-all duration-700">
        <PageTransition>
          <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16">
            {children}
          </main>
          <footer className="mt-24 text-center text-sm text-orange-400/80 tracking-wide">
            ✨ Made with 💖, creativity, and ember glow by{" "}
            <strong>Kiara McRae</strong> ✨
            <br />
            <span className="text-xs text-zinc-400/70">
              © 2025 Aurora Ember • All Rights Reserved
            </span>
          </footer>
        </PageTransition>
      </body>
    </html>
  );
}
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

export const metadata = {
  title: "Aurora UI — Ember Edition | Kiara McRae",
  description:
    "Aurora UI by Kiara McRae — where ember meets code. A glowing fusion of UX, front-end engineering, and intelligent automation.",
  keywords: [
    "Kiara McRae",
    "Aurora UI",
    "portfolio",
    "Next.js",
    "TailwindCSS",
    "Docker",
    "UX Design",
    "Front-End Developer",
    "Automation",
    "Email Accessibility",
    "Human Systems Engineering",
  ],
  authors: [{ name: "Kiara McRae", url: "https://aurorakiara.dev" }],
  openGraph: {
    title: "Aurora UI — Designed & Built by Kiara McRae",
    description:
      "Explore Aurora UI — an interactive portfolio showcasing human-centered design, automation, and scalable engineering.",
    url: "https://aurorakiara.dev",
    siteName: "Aurora UI — Ember Edition",
    images: [
      {
        url: "/aurora-preview.png",
        width: 1200,
        height: 630,
        alt: "Aurora UI — Ember Edition by Kiara McRae",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora UI — Ember Edition | Kiara McRae",
    description:
      "Where ember meets code — sleek gradients, motion, and intelligent design by Kiara McRae.",
    images: ["/aurora-preview.png"],
  },
  icons: {
    icon: "/ember-favicon.png",
    shortcut: "/ember-favicon.png",
    apple: "/ember-favicon.png",
  },
  metadataBase: new URL("https://aurorakiara.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-zinc-200 scroll-smooth">
      <body className="min-h-screen antialiased selection:bg-amber-500/30">
        {children}
        {/* Vercel Analytics Integration */}
        <Analytics />
      </body>
    </html>
  );
}
// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aurorakiara.dev"),
  title: "Aurora UI — Ember Edition | Kiara McRae",
  description:
    "Aurora UI by Kiara McRae — where ember meets code. A glowing fusion of UX, front-end engineering, and intelligent automation.",
  keywords: [
    "Kiara McRae",
    "Aurora UI",
    "UX",
    "Front-End Developer",
    "Next.js",
    "TailwindCSS",
    "Docker",
    "Kubernetes",
    "Automation",
    "Email Accessibility",
    "Human Systems Engineering",
  ],
  authors: [{ name: "Kiara McRae", url: "https://aurorakiara.dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://aurorakiara.dev",
    siteName: "Aurora UI — Ember Edition",
    title: "Aurora UI — Designed & Built by Kiara McRae",
    description:
      "Explore Aurora UI — an interactive portfolio showcasing human-centered design, automation, and scalable engineering.",
    images: [
      {
        url: "/aurora-preview.png", // 1200x630 in /public
        width: 1200,
        height: 630,
        alt: "Aurora UI — Ember Edition by Kiara McRae",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora UI — Ember Edition | Kiara McRae",
    description:
      "Where ember meets code — sleek gradients, motion, and intelligent design by Kiara McRae.",
    images: ["/aurora-preview.png"],
    creator: "@", // add if you have a handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // paste tokens once you verify your domain:
    // google: "GOOGLE_SITE_VERIFICATION_TOKEN",
    // bing: "BING_SITE_VERIFICATION_TOKEN",
  },
  icons: {
    icon: "/ember-favicon.png",
    shortcut: "/ember-favicon.png",
    apple: "/ember-favicon.png",
  },
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD (Organization/Person) for richer previews
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kiara McRae",
    url: "https://aurorakiara.dev",
    jobTitle: "UX & Front-End Developer",
    sameAs: [
      "https://www.linkedin.com/in/kiara-mcraetopperformer",
      "https://github.com/pythonprincessux",
    ],
  };

  return (
    <html lang="en" className="bg-black text-zinc-200 scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-amber-500/30">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
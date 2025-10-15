import "./globals.css";

export const metadata = {
  title: "Aurora UI — Ember Edition | Kiara McRae",
  description:
    "Where ember meets code — sleek gradients, motion, and music collide. Crafted by Kiara McRae ✨",
  openGraph: {
    title: "Aurora UI — Ember Edition | Kiara McRae",
    description:
      "Explore Aurora UI — a glowing fusion of design, code, and creativity built with Next.js, Tailwind, and motion.",
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
      "Where ember meets code — sleek gradients, motion, and music collide.",
    images: ["/aurora-preview.png"],
  },
  icons: {
    icon: "/ember-favicon.png",
    shortcut: "/ember-favicon.png",
    apple: "/ember-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-100">
        {children}
      </body>
    </html>
  );
}
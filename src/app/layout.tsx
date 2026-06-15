import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BASE_URL, DOMAIN, COMPANY } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1420",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `Gratis Sociale Spil 18+ | Ingen Rigtige Penge | ${DOMAIN}`,
    template: `%s | ${DOMAIN}`,
  },
  description:
    "Spil gratis sociale spillemaskiner online. Ingen rigtige penge, ingen indskud, ingen udbetalinger. Kun virtuel valuta til underholdning. Kun 18+.",
  keywords: [
    "sociale spil", "gratis spillemaskiner", "social casino", "virtuel valuta",
    "underholdning", "18 plus", "sociale slots", "online spil Danmark",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: BASE_URL,
    siteName: DOMAIN,
    title: `Gratis Sociale Spil 18+ | Ingen Rigtige Penge | ${DOMAIN}`,
    description:
      "Spil gratis sociale spillemaskiner. Ingen rigtige penge. Kun virtuel valuta. 18+.",
    images: [
      {
        url: "/images/landing-hero.webp",
        alt: `Sociale spillemaskiner — ${DOMAIN}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gratis Sociale Spil 18+ | Ingen Rigtige Penge | ${DOMAIN}`,
    description:
      "Spil gratis sociale spillemaskiner. Ingen rigtige penge. Kun virtuel valuta. 18+.",
    images: ["/images/landing-hero.webp"],
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: DOMAIN,
      description:
        "Sociale spillemaskiner til underholdning — ingen rigtige penge, kun virtuel valuta",
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: COMPANY.name,
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.street,
        addressLocality: COMPANY.city,
        addressRegion: COMPANY.district,
        postalCode: COMPANY.postalCode,
        addressCountry: "CZ",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

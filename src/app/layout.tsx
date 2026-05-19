import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gratis Sociale Spil (18+) | Ingen Rigtige Penge",
  description:
    "Sociale spil udelukkende til underholdning. Ingen rigtige penge, ingen indskud og ingen udbetalinger. Kun for brugere på 18+.",
  robots: "index, follow",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}

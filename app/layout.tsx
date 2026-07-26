import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadeepa Dilshan — Software & Mobile Developer",
  description:
    "Portfolio of Sadeepa Dilshan — BHSc Health Information & Communication Technology undergraduate building offline-first mobile apps, full-stack systems, and applied AI features.",
  openGraph: {
    title: "Sadeepa Dilshan — Software & Mobile Developer",
    description:
      "BHSc Health Information & Communication Technology undergraduate building offline-first mobile apps and full-stack systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadeepa Dilshan — Software & Mobile Developer",
    description:
      "BHSc Health Information & Communication Technology undergraduate building offline-first mobile apps and full-stack systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

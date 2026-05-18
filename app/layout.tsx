import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { content } from "@/content";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(content.url),
  title: {
    default: `${content.name} — ${content.role}`,
    template: `%s — ${content.name}`,
  },
  description: content.description,
  keywords: ["Software Engineer", "Portfolio", content.name],
  authors: [{ name: content.name, url: content.url }],
  creator: content.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: content.url,
    title: `${content.name} — ${content.role}`,
    description: content.description,
    siteName: content.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.name} — ${content.role}`,
    description: content.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <body className="relative">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 mask-fade-bottom"
        >
          <div className="absolute inset-x-0 top-0 h-[60vh] bg-radial-fade opacity-70" />
        </div>

        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

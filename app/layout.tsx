import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hopeward",
  description: "Hopeward marketing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* Webflow / Hopeward source stylesheets, served from /public/css.
            Loaded after Tailwind so the original site's design system is
            available verbatim while we port each page over. */}
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/components.css" />
        <link rel="stylesheet" href="/css/evermind-template.css" />
        <link rel="stylesheet" href="/css/hopeward.css" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import MaterialSymbolsLoader from "@/components/atoms/MaterialSymbolsLoader";
import { manrope, inter, spaceGrotesk } from "./fonts";
import "./globals.css";

/* ===== SEO Metadata ===== */
export const metadata: Metadata = {
  title: "Brian Pech | Full-Stack Software Engineer",
  description:
    "Brian Pech — Full-Stack Software Engineer especializado en aplicaciones web escalables y de alto rendimiento. Next.js, React, Supabase, TypeScript. Playa del Carmen, Q. Roo.",
};

/* ===== Root Layout ===== */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        {/* Preconnect for external images only */}
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />

        {/* Fallback for browsers with JS disabled */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          />
        </noscript>
      </head>
      <body className="min-h-screen flex flex-col">
        {children}

        {/* Material Symbols — loaded async after first paint (non-render-blocking) */}
        <MaterialSymbolsLoader />
      </body>
    </html>
  );
}

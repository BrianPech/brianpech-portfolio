import type { Metadata } from "next";
import localFont from "next/font/local";
import MaterialSymbolsLoader from "@/components/atoms/MaterialSymbolsLoader";
import "./globals.css";

/* ===== Local Fonts (self-hosted, zero network dependency) ===== */
const manrope = localFont({
  src: [
    { path: "../../public/fonts/manrope-700.woff2", weight: "700" },
    { path: "../../public/fonts/manrope-800.woff2", weight: "800" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const inter = localFont({
  src: "../../public/fonts/inter-400.woff2",
  weight: "400",
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../../public/fonts/space-grotesk-500.woff2",
  weight: "500",
  variable: "--font-space-grotesk",
  display: "swap",
});

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
        <link
          rel="preconnect"
          href="https://lh3.googleusercontent.com"
        />
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

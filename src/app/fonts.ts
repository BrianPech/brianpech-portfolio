import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    { path: "../../public/fonts/manrope-700.woff2", weight: "700" },
    { path: "../../public/fonts/manrope-800.woff2", weight: "800" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const inter = localFont({
  src: "../../public/fonts/inter-400.woff2",
  weight: "400",
  variable: "--font-inter",
  display: "swap",
});

export const spaceGrotesk = localFont({
  src: "../../public/fonts/space-grotesk-500.woff2",
  weight: "500",
  variable: "--font-space-grotesk",
  display: "swap",
});

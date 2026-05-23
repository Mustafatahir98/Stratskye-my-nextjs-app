import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
// Yahan dhyan dein: brackets { } nahi lagane kyunke humne 'default' export kiya hai
import SmoothScroll from "../components/SmoothScroll";
import SiteHeader from "../components/SiteHeader";
import PageFooter from "../components/PageFooter";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  weight: "variable",
  axes: ["GRAD", "ROND", "opsz", "wdth"],
  variable: "--font-google-sans-flex",
  display: "block",
  fallback: [],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Stratskye",
  description: "Animated Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${googleSansFlex.className} ${googleSansFlex.variable} bg-black text-white antialiased`}
        suppressHydrationWarning
      >
        <SiteHeader />
        <SmoothScroll>
          {children}
          <PageFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
// Yahan dhyan dein: brackets { } nahi lagane kyunke humne 'default' export kiya hai
import SmoothScroll from "../components/SmoothScroll";
import SiteHeader from "../components/SiteHeader";
import PageFooter from "../components/PageFooter";
import RouteLoadRecovery from "../components/RouteLoadRecovery";

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
  metadataBase: new URL("https://stratskye.com"),
  title: "Stratskye",
  description: "Animated Experience",
  alternates: {
    canonical: "/",
  },
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
        <RouteLoadRecovery />
        <SiteHeader />
        <SmoothScroll>
          {children}
          <PageFooter />
        </SmoothScroll>
      </body>
      <GoogleAnalytics gaId="G-1KJFEWE0ZE" />
    </html>
  );
}

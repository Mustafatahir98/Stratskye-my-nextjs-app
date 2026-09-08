import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// Yahan dhyan dein: brackets { } nahi lagane kyunke humne 'default' export kiya hai
import SiteHeader from "../components/SiteHeader";
import PageFooter from "../components/PageFooter";
import RouteLoadRecovery from "../components/RouteLoadRecovery";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "wdth"],
  variable: "--font-google-sans-flex",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
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
        {children}
        <PageFooter />
      </body>
      <Script id="deferred-analytics" strategy="afterInteractive">
        {`
          (() => {
            let loaded = false;
            const loadTracking = () => {
              if (loaded) return;
              loaded = true;
              ['pointerdown', 'keydown', 'touchstart'].forEach((event) =>
                window.removeEventListener(event, loadTracking)
              );

              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){ window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', 'G-1KJFEWE0ZE');
              const ga = document.createElement('script');
              ga.async = true;
              ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-1KJFEWE0ZE';
              document.head.appendChild(ga);

              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, 'clarity', 'script', 'xqci3z1pbc');
            };

            ['pointerdown', 'keydown', 'touchstart'].forEach((event) =>
              window.addEventListener(event, loadTracking, { once: true, passive: true })
            );
            window.setTimeout(loadTracking, 10000);
          })();
        `}
      </Script>
    </html>
  );
}

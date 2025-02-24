import { Roboto_Condensed, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto-condensed",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "9th Avenue | Web Development Studio",
  description:
    "Texas-based web development studio crafting modern digital experiences with a vintage touch",
  keywords: [
    "web development",
    "web design",
    "digital agency",
    "texas web development",
    "modern websites",
    "vintage design",
    "custom web solutions",
  ],
  openGraph: {
    title: "9th Avenue | Web Development Studio",
    description:
      "Texas-based web development studio crafting modern digital experiences with a vintage touch",
    url: "https://9thavenue.dev",
    siteName: "9th Avenue",
    images: [
      {
        url: "https://9thavenue.dev/og.webp",
        width: 1200,
        height: 630,
        alt: "9th Avenue Web Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "9th Avenue | Web Development Studio",
    description:
      "Texas-based web development studio crafting modern digital experiences with a vintage touch",
    images: ["https://9thavenue.dev/og.webp"],
    creator: "@9thavenue",
    site: "@9thavenue",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export const dynamic = "force-dynamic";
export const runtime = "edge";

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XYZ123ABC4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default to denied until consent is given
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            // Initialize GA with consent mode
            gtag('config', 'G-XYZ123ABC4', {
              'anonymize_ip': true
            });
          `}
        </Script>
      </head>
      <body
        className={`${robotoCondensed.variable} ${robotoMono.variable} antialiased bg-neutral-50`}
      >
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
          <ScrollToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}

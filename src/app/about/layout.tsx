import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Design Studio",
  description: "Learn about our creative studio, our values, and our approach to digital design and development.",
  keywords: ["design studio", "creative agency", "digital design", "web development", "about us"],
  openGraph: {
    title: "About Us | Design Studio",
    description: "Learn about our creative studio, our values, and our approach to digital design and development.",
    url: "https://designstudio.com/about",
    siteName: "Design Studio",
    images: [
      {
        url: "/about/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Design Studio About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Design Studio",
    description: "Learn about our creative studio, our values, and our approach to digital design and development.",
    images: ["/about/og-image.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://clinet-1.com'),
  title: {
    template: "%s | Clinet-1 Architecture",
    default: "Clinet-1 | Luxury Modern Architecture",
  },
  description: "Redefining modern luxury architecture through sustainable design and master craftsmanship.",
  keywords: ["Luxury Architecture", "Modern Home Design", "Sustainable Architecture", "Architectural Firm", "Interior Design"],
  authors: [{ name: "Clinet-1 Architects" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clinet-1 | Luxury Modern Architecture",
    description: "Redefining modern luxury architecture through sustainable design and master craftsmanship.",
    url: "https://clinet-1.com",
    siteName: "Clinet-1",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-house.png",
        width: 1200,
        height: 630,
        alt: "Clinet-1 Luxury Modern Architecture",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinet-1 | Luxury Modern Architecture",
    description: "Redefining modern luxury architecture through sustainable design and master craftsmanship.",
    images: ["/images/hero-house.png"],
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
};

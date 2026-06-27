import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";

const OurApproach = dynamic(() => import("@/components/sections/OurApproach").then(mod => mod.OurApproach), { ssr: true });
const FeaturedProject = dynamic(() => import("@/components/sections/FeaturedProject").then(mod => mod.FeaturedProject), { ssr: true });
const Statistics = dynamic(() => import("@/components/sections/Statistics").then(mod => mod.Statistics), { ssr: true });
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline").then(mod => mod.ProcessTimeline), { ssr: true });
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA").then(mod => mod.ContactCTA), { ssr: true });

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Clinet-1 Architecture",
    "image": "https://clinet-1.com/images/hero-house.png",
    "description": "Redefining modern luxury architecture through sustainable design and master craftsmanship.",
    "url": "https://clinet-1.com",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Luxury Ave, Suite 500",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <OurApproach />
      <FeaturedProject />
      <Statistics />
      <ProcessTimeline />
      <ContactCTA />
    </>
  );
}

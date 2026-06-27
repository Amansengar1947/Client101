import { Hero } from "@/components/sections/Hero";
import { OurApproach } from "@/components/sections/OurApproach";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Statistics } from "@/components/sections/Statistics";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";

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

import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { FeatureCard } from "@/components/ui/FeatureCard"
import { PencilRuler, Trees, HardHat, Sparkles } from "lucide-react"

const approachFeatures = [
  {
    icon: PencilRuler,
    title: "Meticulous Planning",
    description: "Every curve and angle is precisely calculated to ensure a harmonious integration of aesthetics and structural integrity."
  },
  {
    icon: Trees,
    title: "Environmental Harmony",
    description: "We design spaces that respect their surroundings, blending indoor living seamlessly with the natural exterior landscape."
  },
  {
    icon: HardHat,
    title: "Master Craftsmanship",
    description: "Collaborating with elite artisans and using premium materials ensures that every finish reflects unparalleled luxury."
  },
  {
    icon: Sparkles,
    title: "Timeless Elegance",
    description: "Our architectural signature relies on minimalist beauty, ensuring your home remains an icon of style for generations."
  }
]

export function OurApproach() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <Container>
        <SectionTitle 
          title="Our Approach" 
          subtitle="Redefining modern luxury through innovative design, sustainable practices, and uncompromising attention to detail."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 md:mt-16">
          {approachFeatures.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

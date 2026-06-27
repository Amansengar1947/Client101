import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard"

export function FeaturedProject() {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <Container>
        <SectionTitle 
          title="Featured Project" 
          subtitle="Explore our hallmark creation that embodies our commitment to luxurious design and architectural excellence."
          align="left"
        />
        
        <div className="mt-12 md:mt-20">
          <FeaturedProjectCard 
            title="The Glass Pavilion"
            description="Set against a breathtaking landscape, this project redefines the boundary between indoors and outdoors. Expansive glass walls and warm timber cladding coalesce to create a sanctuary of modern living."
            imageSrc="/images/featured-project.png"
            imageAlt="The Glass Pavilion Architecture Project"
          />
        </div>
      </Container>
    </section>
  )
}

import { SectionTitle } from "@/components/ui/SectionTitle"
import { Container } from "@/components/layout/Container"
import { Timeline, TimelineItem } from "@/components/ui/Timeline"
import { Compass, PenTool, LayoutTemplate, Construction, Leaf, Home } from "lucide-react"

const processSteps = [
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Discovery",
    description: "Understanding your vision, lifestyle, and site requirements to establish the foundation of the design.",
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Concept",
    description: "Translating ideas into preliminary sketches, massing studies, and defining the architectural language.",
  },
  {
    icon: <LayoutTemplate className="w-5 h-5" />,
    title: "Development",
    description: "Refining the design with precise layouts, material selections, and immersive 3D visualizations.",
  },
  {
    icon: <Construction className="w-5 h-5" />,
    title: "Engineering",
    description: "Collaborating with elite engineers to ensure structural integrity and flawless technical systems.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Sustainability",
    description: "Integrating energy-efficient technologies and sustainable materials into the core of the build.",
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Completion",
    description: "Overseeing final construction details to deliver a masterfully crafted, turnkey luxury residence.",
  },
]

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-secondary/30 relative">
      <Container>
        <SectionTitle 
          title="Our Process" 
          subtitle="A transparent, meticulously curated journey from initial conception to the final unveiling of your dream home."
        />
        
        <div className="mt-16 md:mt-24">
          <Timeline>
            {processSteps.map((step, index) => (
              <TimelineItem 
                key={index}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 0.15}
              />
            ))}
          </Timeline>
        </div>
      </Container>
    </section>
  )
}

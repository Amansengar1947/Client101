import { Container } from "@/components/layout/Container"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Icon } from "@/components/ui/Icon"
import { Briefcase, Building2, Star, Trophy, Globe } from "lucide-react"

const stats = [
  { icon: Briefcase, value: 25, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 450, suffix: "+", label: "Projects Completed" },
  { icon: Star, value: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: Trophy, value: 120, label: "Awards Won" },
  { icon: Globe, value: 15, label: "Countries Served" },
]

export function Statistics() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 lg:gap-4 divide-y min-[425px]:divide-y-0 min-[425px]:divide-x divide-primary-foreground/10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 group transition-transform duration-500 hover:-translate-y-2 cursor-default"
            >
              <div className="mb-6 p-4 rounded-full bg-primary-foreground/5 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110">
                <Icon icon={stat.icon} size={32} strokeWidth={1.5} />
              </div>
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                className="text-4xl lg:text-5xl font-bold tracking-tighter mb-3"
              />
              <p className="text-primary-foreground/60 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

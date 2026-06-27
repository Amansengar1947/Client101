"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { Image } from "@/components/ui/Image"
import { DarkOverlay } from "@/components/ui/DarkOverlay"

export function ContactCTA() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Parallax transform
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section ref={ref} id="contact" className="relative min-h-[600px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-primary">
      
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
        style={{ y }}
      >
        <Image 
          src="/images/cta-bg.png"
          alt="Luxury Architecture Detail"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <DarkOverlay opacity={60} className="bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80" />
      </motion.div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Ready to Build Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Dream Residence?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Schedule a private consultation with our master architects and begin the journey of transforming your vision into an iconic reality.
          </p>

          <div className="pt-8">
            <Button size="lg" className="group bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 rounded-full">
              Get in Touch
              <ArrowRight className="ml-3 size-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

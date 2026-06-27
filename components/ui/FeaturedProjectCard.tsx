"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Image } from "@/components/ui/Image"
import { cn } from "@/lib/utils"

export interface FeaturedProjectCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  link?: string
  reverse?: boolean
  className?: string
}

export function FeaturedProjectCard({
  imageSrc,
  imageAlt,
  title,
  description,
  link = "#",
  reverse = false,
  className,
}: FeaturedProjectCardProps) {
  return (
    <div className={cn("flex flex-col gap-8 lg:gap-16 items-center", reverse ? "lg:flex-row-reverse" : "lg:flex-row", className)}>
      
      {/* Image Container */}
      <motion.div 
        className="w-full lg:w-1/2 overflow-hidden rounded-[2rem] shadow-2xl shadow-black/5 group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          {description}
        </p>
        <div>
          <Button size="lg" className="group mt-4">
            Explore Project
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>

    </div>
  )
}

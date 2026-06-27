"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Timeline({ children, className, ...props }: TimelineProps) {
  return (
    <div 
      className={cn(
        "relative flex flex-col lg:flex-row w-full gap-8 lg:gap-0",
        className
      )} 
      {...props}
    >
      {/* Background Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border lg:left-6 lg:right-6 lg:top-6 lg:bottom-auto lg:w-[calc(100%-3rem)] lg:h-0.5" />
      {children}
    </div>
  )
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  number: number
  title: string
  description: string
  delay?: number
}

export function TimelineItem({ 
  icon, 
  number, 
  title, 
  description, 
  delay = 0,
  className,
  ...props 
}: TimelineItemProps) {
  return (
    <motion.div 
      className={cn("relative flex-1 flex flex-col lg:items-center pl-16 lg:pl-0 lg:pt-16 group", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...props}
    >
      {/* Timeline Node */}
      <div className="absolute left-0 lg:left-1/2 top-0 lg:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-[3px] border-background bg-secondary text-secondary-foreground shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
        {icon ? icon : <span className="font-bold">{number}</span>}
      </div>

      {/* Content */}
      <div className="lg:text-center space-y-2 lg:px-2 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="text-accent font-mono text-xs font-semibold tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
          STEP 0{number}
        </div>
        <h4 className="text-lg lg:text-xl font-bold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed lg:max-w-[200px] lg:mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

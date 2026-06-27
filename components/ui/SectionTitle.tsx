import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12", {
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
    }, className)}>
      <h2 
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        {...props}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { Icon } from "@/components/ui/Icon"
import { Card, CardContent } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card 
      className={cn(
        "group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-card/50 backdrop-blur-sm border-border/50", 
        className
      )}
    >
      <CardContent className="p-6 sm:p-8 flex flex-col items-start gap-5">
        <div className="p-3.5 rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon icon={icon} size={28} strokeWidth={1.5} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

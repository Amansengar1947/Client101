import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon: LucideIcon
  size?: number | string
  className?: string
}

export function Icon({ icon: IconComponent, size = 24, className, ...props }: IconProps) {
  return (
    <IconComponent
      size={size}
      className={cn("text-current transition-colors", className)}
      {...props}
    />
  )
}

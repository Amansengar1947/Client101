import * as React from "react"
import { cn } from "@/lib/utils"

export interface DarkOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  opacity?: number
}

export function DarkOverlay({
  opacity = 50,
  className,
  ...props
}: DarkOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-black transition-opacity duration-300",
        className
      )}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
      {...props}
    />
  )
}

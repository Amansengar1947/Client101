import * as React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { cn } from "@/lib/utils"

export interface ImageProps extends NextImageProps {
  containerClassName?: string
}

export function Image({
  src,
  alt,
  className,
  containerClassName,
  fill,
  ...props
}: ImageProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName, {
      "w-full h-full": fill
    })}>
      <NextImage
        src={src}
        alt={alt || ""}
        fill={fill}
        className={cn(
          "object-cover transition-transform duration-500",
          className
        )}
        {...props}
      />
    </div>
  )
}

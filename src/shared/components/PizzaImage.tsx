import { cn } from "@/shared/lib/utils"
import Image from "next/image"
import React, { FC } from "react"

interface Props {
  className?: string
  src: string
  size: 20 | 30 | 40
}

export const PizzaImage = ({ src, size, className }: Props) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-1 items-center justify-center",
        className,
      )}
    >
      <Image
        src={src}
        alt="Logo"
        width={500}
        height={500}
        className={cn(
          "relative left-2 top-2 z-10 transition-all duration-300",
          size === 20 && "h-[300px] w-[300px]",
          size === 30 && "h-[400px] w-[400px]",
          size === 40 && "h-[500px] w-[500px]",
        )}
      />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[445px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200" />
      <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-200/80" />
    </div>
  )
}

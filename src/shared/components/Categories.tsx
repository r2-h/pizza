import Link from "next/link"
import React, { FC } from "react"
import { cn } from "../lib/utils"
import { categories } from "../constants"

interface Props {
  className?: string
}

const activeIndex = 0

export const Categories: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex gap-1 rounded-2xl bg-gray-50/95 p-1",
        className,
      )}
    >
      {categories.map((name, i) => (
        <Link
          key={name}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeIndex === i &&
              "bg-white text-primary shadow-md shadow-gray-200",
          )}
          href=""
        >
          {name}
        </Link>
      ))}
    </div>
  )
}

"use client"
import Link from "next/link"
import React, { FC } from "react"
import { cn } from "../lib/utils"
import { categories } from "../constants"
import { useCategory } from "@/store/useCategory"

interface Props {
  className?: string
}

export const Categories: FC<Props> = ({ className }) => {
  const activeId = useCategory((state) => state.activeId)

  return (
    <div
      className={cn(
        "inline-flex gap-1 rounded-2xl bg-gray-50/95 p-1",
        className,
      )}
    >
      {categories.map((category) => (
        <Link
          key={category.name}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeId === category.id &&
              "bg-white text-primary shadow-md shadow-gray-200",
          )}
          href={`#${category.name}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}

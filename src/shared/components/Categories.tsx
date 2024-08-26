"use client"
import { useCategory } from "@/store/useCategory"
import Link from "next/link"
import { FC } from "react"

import { cn } from "../lib/utils"
import { Category } from "@prisma/client"

interface Props {
  className?: string
  categories: Category[]
}

export const Categories: FC<Props> = ({ className, categories }) => {
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

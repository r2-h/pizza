import { FC } from "react"
import { Categories } from "./Categories"
import { SortPopup } from "./SortPopup"
import { cn } from "../lib/utils"
import { Container } from "./Container"
import prisma from "../../../prisma/db"
import { Category } from "@prisma/client"

interface Props {
  className?: string
  categories: Category[]
}

export const TopBar: FC<Props> = async ({ className }) => {
  const categories = await prisma.category.findMany({})

  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-white/95 py-5 shadow-lg shadow-black/5",
        className,
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  )
}

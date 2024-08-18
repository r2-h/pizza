"use client"
import { useCategory } from "@/store/useCategory"
import { FC, useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { cn } from "../lib/utils"
import { ProductCard } from "./ProductCard"
import { Title } from "./Title"

interface Props {
  title: string
  items: any[]
  className?: string
  listClassName?: string
  categoryId?: number
}

export const ProductsGroupList: FC<Props> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })
  const setActiveId = useCategory((state) => state.setActiveId)

  useEffect(() => {
    if (intersection?.isIntersecting) {
      if (categoryId) {
        setActiveId(categoryId)
      }
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div
      className={cn("scroll-offset", className)}
      ref={intersectionRef}
      id={title}
    >
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={item}
            name="Маргарита"
            imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
            price={390}
            count={i % 2}
          />
        ))}
      </div>
    </div>
  )
}

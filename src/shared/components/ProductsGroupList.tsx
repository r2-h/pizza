"use client"
import React, { FC, useEffect, useRef } from "react"
import { Title } from "./Title"
import { ProductCard } from "./ProductCard"
import { useIntersection } from "react-use"

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

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} ref={intersectionRef} id={title}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
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

import React, { FC } from "react"
import { cn } from "../lib/utils"
import { Title } from "./Title"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  name: string
  price: number
  count?: number
  imageUrl?: string
  className?: string
  productId?: string
}

export const ProductCard: FC<Props> = ({
  name,
  price,
  count,
  imageUrl,
  className,
  productId,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${productId}`}>
        <div className="flex max-h-[16rem] justify-center rounded-lg bg-secondary p-0 md:p-6">
          <Image
            src={imageUrl || ""}
            alt="Logo"
            width={215}
            height={215}
            className="min-h-[4rem] min-w-[4rem] object-contain"
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[1.25rem]">
            от <b>{price} ₽</b>
          </span>

          {count ? (
            <Button value={count} size="lg" />
          ) : (
            <Button variant="secondary">
              <Plus className="mr-1 h-4 w-4" />
              Добавить
            </Button>
          )}
        </div>
      </Link>
    </div>
  )
}

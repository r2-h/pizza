import { cn } from "@/shared/lib/utils"
import { CountButton } from "./CountButton"
import { FC } from "react"

export interface CartItemProps {
  id: number
  imageUrl: string
  details: string
  name: string
  price: number
  quantity: number
  disabled?: boolean
}

interface CartItemInfoProps {
  name: string
  details: string
  className?: string
}

export const CartItemInfo: FC<CartItemInfoProps> = ({
  name,
  details,
  className,
}) => {
  return (
    <div>
      <div className={cn("flex items-center justify-between", className)}>
        <h2 className="flex-1 text-lg font-bold leading-6">{name}</h2>
      </div>
      {details && <p className="w-[90%] text-xs text-gray-400">{details}</p>}
    </div>
  )
}

interface CartItemDetailsPriceProps {
  value: number
  className?: string
}

export const CartItemDetailsPrice: FC<CartItemDetailsPriceProps> = ({
  value,
  className,
}) => {
  return <h2 className={cn("font-bold", className)}>{value} ₽</h2>
}

interface CartItemDetailsImageProps {
  src: string
  className?: string
}

export const CartItemDetailsImage: FC<CartItemDetailsImageProps> = ({
  src,
  className,
}) => {
  return <img className={cn("h-[60px] w-[60px]", className)} src={src} alt="" />
}

export const CartItemDetailsCountButton = CountButton

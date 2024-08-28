import { CircleCheck } from "lucide-react"
import { cn } from "../lib/utils"
import Image from "next/image"

type Props = {
  imageUrl: string
  name: string
  price: number
  active?: boolean
  onClick?: VoidFunction
  className?: string
}

export const Ingredient = ({
  className,
  imageUrl,
  name,
  price,
  active,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex w-32 cursor-pointer flex-col items-center rounded-md bg-white p-1 text-center shadow-md",
        active && "ring-1 ring-primary",
        className,
      )}
    >
      {active && (
        <CircleCheck className="absolute right-2 top-2 text-primary" />
      )}
      <Image src={imageUrl} alt={name} width={110} height={110} />
      <span className="mb-1 text-xs">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  )
}

import { Trash2Icon } from "lucide-react"
import { FC } from "react"
import { cn } from "../lib/utils"
import {
  CartItemDetailsImage,
  CartItemDetailsPrice,
  CartItemInfo,
  CartItemProps,
} from "./CartItemDetails"
import { CountButton } from "./CountButton"

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void
  onClickRemove?: () => void
  className?: string
}

export const CartDrawerItem: FC<Props> = ({
  imageUrl,
  name,
  details,
  quantity,
  disabled,
  price,
  onClickCountButton,
  onClickRemove,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex gap-6 bg-white p-5",
        {
          "pointer-events-none opacity-50": disabled,
        },
        className,
      )}
    >
      <CartItemDetailsImage src={imageUrl} />
      <div className="flex-1">
        <CartItemInfo details={details} name={name} />
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <CountButton value={quantity} onClick={onClickCountButton} />
          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
            <Trash2Icon
              onClick={() => {}}
              className="cursor-pointer text-gray-400 hover:text-red-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

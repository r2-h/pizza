import Image from "next/image"
import { cn } from "../lib/utils"
import { Button } from "../ui/button"
import { Title } from "./Title"

type Props = {
  imageUrl: string
  name: string
  onClickAdd?: VoidFunction
  className?: string
}

export const ChooseProductForm = ({ className, imageUrl, name }: Props) => {
  const totalPrice = 350

  return (
    <div className={cn("flex flex-1 flex-col md:flex-row", className)}>
      <div className="relative flex flex-1 items-center justify-center">
        <Image
          src={imageUrl}
          alt="product"
          width={350}
          height={350}
          className="h-[350px] min-w-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">30 см, традиционное тесто</p>
        <Button className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base">
          Добавить в корзину за {totalPrice} р.
        </Button>
      </div>
    </div>
  )
}

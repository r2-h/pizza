"use client"
import { Ingredient, ProductItem } from "@prisma/client"
import { useState } from "react"
import { mapPizzaType, pizzaSizes, pizzaTypes } from "../constants/pizza"
import { cn } from "../lib/utils"
import { Button } from "../ui/button"
import { GroupVariants } from "./GroupVariants"
import { PizzaImage } from "./PizzaImage"
import { Title } from "./Title"
import { PizzaSizes } from "../types"
import { Ingredient as IngredientComponent } from "./Ingredient"

type Props = {
  imageUrl: string
  name: string
  ingredients: Ingredient[]
  productItems?: ProductItem[]
  onClickAdd?: VoidFunction
  className?: string
}

export const ChoosePizzaForm = ({
  className,
  imageUrl,
  name,
  productItems,
  ingredients,
}: Props) => {
  const [size, setSize] = useState<PizzaSizes>(30)
  const [pizzaType, setPizzaType] = useState(1)
  const [activeIngredients, setActiveIngredients] = useState<number[]>([])

  const activeIngredientsHandler = (id: number) => {
    setActiveIngredients((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      }
      return [...prev, id]
    })
  }

  const ingredientsSum = ingredients
    .filter((el) => activeIngredients.includes(el.id))
    .reduce((acc, curr) => acc + curr.price, 0)
  const productItem = productItems?.find(
    (item) => item.pizzaType === pizzaType && item.size === size,
  )
  const totalPrice = productItem ? productItem.price + ingredientsSum : 0

  return (
    <div className={cn("flex flex-1 flex-col md:flex-row", className)}>
      <PizzaImage size={size} src={imageUrl} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">
          {size} см, {mapPizzaType[pizzaType as keyof typeof mapPizzaType]}
        </p>
        <div className="mt-5 flex flex-col gap-4">
          <GroupVariants
            items={pizzaSizes}
            onClick={(value) => setSize(value as PizzaSizes)}
            value={size}
          />
          <GroupVariants
            items={pizzaTypes}
            onClick={setPizzaType}
            value={pizzaType}
          />
        </div>
        <div className="scrollbar h-[420px] overflow-auto rounded-md bg-gray-50 p-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientComponent
                key={ingredient.id}
                active={activeIngredients.includes(ingredient.id)}
                onClick={() => activeIngredientsHandler(ingredient.id)}
                {...ingredient}
              />
            ))}
          </div>
        </div>

        <Button
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
          disabled={!totalPrice}
        >
          Добавить в корзину за {totalPrice} р.
        </Button>
      </div>
    </div>
  )
}

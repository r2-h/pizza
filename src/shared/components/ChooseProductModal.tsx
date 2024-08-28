"use client"
import { Ingredient, Product, ProductItem } from "@prisma/client"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog"
import { ChooseProductForm } from "./ChooseProductForm"
import { ChoosePizzaForm } from "./ChoosePizzaForm"

type Props = {
  product: Product & { ingredients: Ingredient[]; productItems: ProductItem[] }
}

export const ChooseProductModal = ({ product }: Props) => {
  const router = useRouter()

  const isPizza = !!product.productItems[0].pizzaType

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent className="min-h-[500px] max-w-[1060px] overflow-hidden bg-white p-0">
        {isPizza ? (
          <ChoosePizzaForm
            name={product.name}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            productItems={product.productItems}
          />
        ) : (
          <ChooseProductForm name={product.name} imageUrl={product.imageUrl} />
        )}
      </DialogContent>
    </Dialog>
  )
}

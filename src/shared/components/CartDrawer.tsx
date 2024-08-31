"use client"
import { FC, PropsWithChildren, useEffect } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { CartDrawerItem } from "./CartDrawerItem"
import { getCartItemDetails } from "../lib/get-cart-items-details"
import { useCart } from "@/store/useCart"
import { PizzaSize, PizzaType } from "../constants/pizza"

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { items, totalAmount, fetchCartItems } = useCart()

  useEffect(() => {
    fetchCartItems()
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[#f4f1ee] pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине <b>{items.length} товара</b>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="scrollbar -mx-6 mt-5 flex-1 overflow-auto">
          <div className="mb-2">
            {items.map((item) => (
              <CartDrawerItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                details={
                  item.pizzaType && item.pizzaSize
                    ? getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize,
                      )
                    : ""
                }
                quantity={item.quantity}
                disabled={item.disabled}
                price={item.price}
                onClickCountButton={(type) => {
                  fetchCartItems()
                }}
                onClickRemove={() => {
                  fetchCartItems()
                }}
                className="mb-2"
              />
            ))}
          </div>
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="mb-4 flex">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
              </span>
              <span className="text-lg font-bold">{totalAmount}</span>
            </div>
            <Link href="">
              <Button className="submit w-full text-base">
                Оформить заказ
                <ArrowRight className="ml-2 w-5" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

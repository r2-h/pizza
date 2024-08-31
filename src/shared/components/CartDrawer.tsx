import { FC, PropsWithChildren } from "react"
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

type Props = {}

export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[#f4f1ee] pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине <b>3 товара</b>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="scrollbar -mx-6 mt-5 flex-1 overflow-auto">
          <CartDrawerItem
            imageUrl={""}
            name={"Sdfsg"}
            details={getCartItemDetails([
              {
                id: 1,
                name: "Колбаса",
                price: 100,
                imageUrl: "image_url",
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ])}
            quantity={1}
            id={0}
            price={493}
          />
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="mb-4 flex">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
              </span>
              <span className="text-lg font-bold">500 ₽</span>
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

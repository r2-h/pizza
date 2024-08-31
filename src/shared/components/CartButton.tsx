import { ArrowRight, ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { CartDrawer } from "./CartDrawer"

export const CartButton = () => {
  return (
    <CartDrawer>
      <Button className="group relative">
        <b>520 ₽</b>
        <span className="mx-3 h-full w-[1px] bg-white/30" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="relative h-4 w-4" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight className="absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </Button>
    </CartDrawer>
  )
}

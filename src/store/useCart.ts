import { create } from "zustand"
import { ApiClient } from "../../services/api-client"
import { getCartDetails } from "@/shared/lib/get-cart-details"

export type CartStateItem = {
  id: number
  quantity: number
  name: string
  imageUrl: string
  price: number
  disabled?: boolean
  pizzaSize?: number | null
  pizzaType?: number | null
  ingredients: Array<{ name: string; price: number }>
}

export interface CartState {
  loading: boolean
  error: boolean
  totalAmount: number
  items: CartStateItem[]
  fetchCartItems: () => Promise<void>
  updateItemQuantity: (id: number, quantity: number) => Promise<void>
  addCartItem: (values: any) => Promise<void>
  removeCartItem: (id: number) => Promise<void>
}

export const useCart = create<CartState>((set, get) => ({
  loading: false,
  error: false,
  totalAmount: 0,
  items: [],
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false })
      const data = await ApiClient.cart.getCart()

      set(getCartDetails(data)) 
    } catch (error) {
      console.error(error)
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
  updateItemQuantity: async (cartId: number, quantity: number) => {
    try {
      set({ loading: true, error: false })
      const data = await ApiClient.cart.updateCartItem(cartId, quantity)
      set(getCartDetails(data))
    } catch (error) {
      console.error(error)
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
  addCartItem: async () => {},
  removeCartItem: async () => {},
}))

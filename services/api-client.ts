import { getCart, updateCartItem } from "./cart"
import { getIngredients, searchProducts } from "./get"

export const ApiClient = {
  products: { searchProducts },
  ingredients: { getIngredients },
  cart: { getCart, updateCartItem },
}

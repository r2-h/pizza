import { getCart } from "./cart"
import { getIngredients, searchProducts } from "./get"

export const ApiClient = {
  products: { searchProducts },
  ingredients: { getIngredients },
  cart: { getCart },
}

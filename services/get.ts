import { Ingredient, Product } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"

export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>(
    ApiRoutes.PRODUCTS_SEARCH,
    {
      params: { query },
    },
  )

  return response.data
}

export const getIngredients = async (): Promise<Ingredient[]> => {
  const response = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)

  return response.data
}

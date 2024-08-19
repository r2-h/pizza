import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"
import { ApiClient } from "../../services/api-client"

export const useFilterIngredients = (initialIngredients: string[]) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loadingIngredients, setLoadingIngredients] = useState(false)
  const [selectedIngredientIds, setSelectedIngredientIds] =
    useState<string[]>(initialIngredients)

  useEffect(() => {
    setLoadingIngredients(true)
    ApiClient.ingredients
      .getIngredients()
      .then((res) => setIngredients(res))
      .catch((e) => console.error(e))
      .finally(() => setLoadingIngredients(false))
  }, [])

  const selectIdHandler = (itemId: string) => {
    setSelectedIngredientIds((prev) =>
      prev.includes(itemId)
        ? selectedIngredientIds.filter((id) => id !== itemId)
        : [...selectedIngredientIds, itemId],
    )
  }

  return {
    ingredients: ingredients.map((ingredient) => ({
      name: ingredient.name,
      id: String(ingredient.id),
    })),
    loadingIngredients,
    selectedIngredientIds,
    selectIdHandler,
  }
}

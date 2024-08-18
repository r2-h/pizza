import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"
import { ApiClient } from "../../services/api-client"

export const useFilterIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loadingIngredients, setLoadingIngredients] = useState(false)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  useEffect(() => {
    setLoadingIngredients(true)
    ApiClient.ingredients
      .getIngredients()
      .then((res) => setIngredients(res))
      .catch((e) => console.error(e))
      .finally(() => setLoadingIngredients(false))
  }, [])

  const selectIdHandler = (itemId: string) => {
    setSelectedIds((prev) =>
      prev.includes(itemId)
        ? selectedIds.filter((id) => id !== itemId)
        : [...selectedIds, itemId],
    )
  }

  return {
    ingredients: ingredients.map((ingredient) => ({
      name: ingredient.name,
      id: String(ingredient.id),
    })),
    loadingIngredients,
    selectedIds,
    selectIdHandler,
  }
}

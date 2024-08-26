import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"
import { ApiClient } from "../../services/api-client"

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loadingIngredients, setLoadingIngredients] = useState(false)

  useEffect(() => {
    setLoadingIngredients(true)
    ApiClient.ingredients
      .getIngredients()
      .then((res) => setIngredients(res))
      .catch((e) => console.error(e))
      .finally(() => setLoadingIngredients(false))
  }, [])

  return {
    ingredients: ingredients.map((ingredient) => ({
      name: ingredient.name,
      id: String(ingredient.id),
    })),
    loadingIngredients,
  }
}

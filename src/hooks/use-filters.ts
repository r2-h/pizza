import { useSearchParams } from "next/navigation"
import { ChangeEvent, useState } from "react"
import { useSet } from "react-use"

export type Price = {
  priceFrom?: number
  priceTo?: number
}

type QueryFilters = {
  dough: string
  ingredients: string
  sizes: string
} & Price

export const useFilters = () => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >
  const initialSizeIds = searchParams.get("sizes")?.split(",") || []
  const initialDoughIds = searchParams.get("dough")?.split(",") || []
  const initialPriceFromId = Number(searchParams.get("priceFrom")) || undefined
  const initialPriceToId = Number(searchParams.get("priceTo")) || undefined
  const initialIngredients = searchParams.get("ingredients")?.split(",") || []

  const [selectedIngredientIds, setSelectedIngredientIds] =
    useState<string[]>(initialIngredients)
  const [selectedSizeIds, { toggle: setSelectedSizeIds }] = useSet(
    new Set<string>(initialSizeIds),
  )
  const [selectedDoughIds, setSelectedDoughIds] =
    useState<string[]>(initialDoughIds)
  const [prices, setPrices] = useState<Price>({
    priceFrom: initialPriceFromId,
    priceTo: initialPriceToId,
  })

  const selectIngredientIdsHandler = (itemId: string) => {
    setSelectedIngredientIds((prev) =>
      prev.includes(itemId)
        ? selectedIngredientIds.filter((id) => id !== itemId)
        : [...selectedIngredientIds, itemId],
    )
  }

  const selectDoughIdsHandler = (itemId: string) => {
    setSelectedDoughIds((prev) =>
      prev.includes(itemId)
        ? selectedDoughIds.filter((id) => id !== itemId)
        : [...selectedDoughIds, itemId],
    )
  }

  const pricesHandler = (
    key: keyof Price,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = Number(e.currentTarget.value)
    setPrices((prev) => ({ ...prev, [key]: value }))
  }

  return {
    selectedIngredientIds,
    selectIngredientIdsHandler,
    selectedSizeIds,
    setSelectedSizeIds,
    selectedDoughIds,
    selectDoughIdsHandler,
    prices,
    setPrices,
    pricesHandler
  }
}

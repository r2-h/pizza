"use client"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import { useSet } from "react-use"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"
import { RangeSlider } from "./RangeSlider"
import { Title } from "./Title"
import qs from "qs"
import { useRouter, useSearchParams } from "next/navigation"

export type Price = {
  priceFrom?: number
  priceTo?: number
}
type QueryFilters = {
  dough: string
  ingredients: string
  sizes: string
} & Price
interface Props {
  className?: string
}

export const Filters: FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >
  const initialDoughIds = searchParams.get("dough")?.split(",") || []
  const initialSizeIds = searchParams.get("sizes")?.split(",") || []
  const initialPriceFromId = Number(searchParams.get("priceFrom")) || undefined
  const initialPriceToId = Number(searchParams.get("priceTo")) || undefined
  const initialIngredients = searchParams.get("ingredients")?.split(",") || []
  const router = useRouter()
  const maxPrice = 1500

  console.log(initialIngredients)

  const {
    ingredients,
    loadingIngredients,
    selectedIngredientIds,
    selectIdHandler,
  } = useFilterIngredients(initialIngredients)

  const [selectedDoughIds, setSelectedDoughIds] =
    useState<string[]>(initialDoughIds)
  const selectDoughHandler = (itemId: string) => {
    setSelectedDoughIds((prev) =>
      prev.includes(itemId)
        ? selectedDoughIds.filter((id) => id !== itemId)
        : [...selectedDoughIds, itemId],
    )
  }

  const [selectedSizeIds, { toggle: toggleSizeIds }] = useSet(
    new Set<string>(initialSizeIds),
  )

  const [prices, setPrices] = useState<Price>({
    priceFrom: initialPriceFromId,
    priceTo: initialPriceToId,
  })

  const priceHandler = (key: keyof Price, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value)
    setPrices((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    const filters = {
      ...prices,
      dough: selectedDoughIds,
      ingredients: selectedIngredientIds,
      sizes: Array.from(selectedSizeIds),
    }
    const queryString = qs.stringify(filters, { arrayFormat: "comma" })
    router.push(`/?${queryString}`, { scroll: false })
  }, [
    prices?.priceFrom,
    prices?.priceTo,
    selectedDoughIds,
    selectedIngredientIds,
    selectedSizeIds,
    router,
  ])

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Тесто"
        items={[
          { name: "тонкое", id: "тонкое" },
          { name: "толстое", id: "толстое" },
        ]}
        selectedIds={selectedDoughIds}
        selectIdHandler={selectDoughHandler}
      />
      <CheckboxFiltersGroup
        className="mt-5"
        title="Размеры"
        items={[
          { name: "20 см", id: "20" },
          { name: "30 см", id: "30" },
          { name: "40 см", id: "40" },
        ]}
        selectedIds={Array.from(selectedSizeIds)}
        selectIdHandler={toggleSizeIds}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={maxPrice}
            value={prices?.priceFrom}
            onChange={(e) => priceHandler("priceFrom", e)}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={maxPrice}
            value={prices?.priceTo}
            onChange={(e) => priceHandler("priceTo", e)}
          />
        </div>
        <RangeSlider
          max={maxPrice}
          min={0}
          step={10}
          value={[prices?.priceFrom || 0, prices?.priceTo || 1000]}
          onValueChange={([min, max]) =>
            setPrices({ priceFrom: min, priceTo: max })
          }
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        items={ingredients}
        defaultItems={ingredients.slice(0, 6)}
        loading={loadingIngredients}
        selectedIds={selectedIngredientIds}
        selectIdHandler={selectIdHandler}
      />
    </div>
  )
}

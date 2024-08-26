"use client"
import { useFilters } from "@/hooks/use-filters"
import { useIngredients } from "@/hooks/use-ingredients"
import { useRouter } from "next/navigation"
import qs from "qs"
import { FC, useEffect } from "react"
import { Input } from "../ui/input"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"
import { RangeSlider } from "./RangeSlider"
import { Title } from "./Title"

interface Props {
  className?: string
}

export const Filters: FC<Props> = ({ className }) => {
  const router = useRouter()
  const maxPrice = 1500
  const { ingredients, loadingIngredients } = useIngredients()
  const filters = useFilters()

  useEffect(() => {
    const queryFilters = {
      ...filters.prices,
      dough: filters.selectedDoughIds,
      ingredients: filters.selectedIngredientIds,
      sizes: Array.from(filters.selectedSizeIds),
    }
    const queryString = qs.stringify(queryFilters, { arrayFormat: "comma" })
    router.push(`/?${queryString}`, { scroll: false })
  }, [
    filters.prices?.priceFrom,
    filters.prices?.priceTo,
    filters.selectedDoughIds,
    filters.selectedIngredientIds,
    filters.selectedSizeIds,
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
        selectedIds={filters.selectedDoughIds}
        selectIdHandler={filters.selectDoughIdsHandler}
      />
      <CheckboxFiltersGroup
        className="mt-5"
        title="Размеры"
        items={[
          { name: "20 см", id: "20" },
          { name: "30 см", id: "30" },
          { name: "40 см", id: "40" },
        ]}
        selectedIds={Array.from(filters.selectedSizeIds)}
        selectIdHandler={filters.setSelectedSizeIds}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={maxPrice}
            value={filters.prices?.priceFrom}
            onChange={(e) => filters.pricesHandler("priceFrom", e)}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={maxPrice}
            value={filters.prices?.priceTo}
            onChange={(e) => filters.pricesHandler("priceTo", e)}
          />
        </div>
        <RangeSlider
          max={maxPrice}
          min={0}
          step={10}
          value={[
            filters.prices?.priceFrom || 0,
            filters.prices?.priceTo || 1000,
          ]}
          onValueChange={([min, max]) =>
            filters.setPrices({ priceFrom: min, priceTo: max })
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
        selectedIds={filters.selectedIngredientIds}
        selectIdHandler={filters.selectIngredientIdsHandler}
      />
    </div>
  )
}

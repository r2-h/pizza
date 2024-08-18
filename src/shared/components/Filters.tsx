"use client"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import { ChangeEvent, FC, useState } from "react"
import { Input } from "../ui/input"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"
import { RangeSlider } from "./RangeSlider"
import { Title } from "./Title"

export type Price = {
  priceFrom: number
  priceTo: number
}
interface Props {
  className?: string
}

export const Filters: FC<Props> = ({ className }) => {
  const maxPrice = 5000
  const { ingredients, loadingIngredients, selectedIds, selectIdHandler } =
    useFilterIngredients()
  const [{ priceFrom, priceTo }, setPrice] = useState<Price>({
    priceFrom: 0,
    priceTo: 4000,
  })

  const priceHandler = (key: keyof Price, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value)
    setPrice((prev) => ({ ...prev, [key]: value }))
  }
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          items={[
            { name: "Можно собирать", id: "111" },
            { name: "Новинки", id: "222" },
          ]}
          title={"CheckboxFiltersGroup"}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={maxPrice}
            value={priceFrom}
            onChange={(e) => priceHandler("priceFrom", e)}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={maxPrice}
            value={priceTo}
            onChange={(e) => priceHandler("priceTo", e)}
          />
        </div>
        <RangeSlider
          max={maxPrice}
          min={0}
          step={1}
          value={[priceFrom, priceTo]}
          onValueChange={setPrice}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        items={ingredients}
        defaultItems={ingredients.slice(0, 6)}
        loading={loadingIngredients}
        selectedIds={selectedIds}
        selectIdHandler={selectIdHandler}
      />
    </div>
  )
}

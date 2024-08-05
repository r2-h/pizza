"use client"
import React, { ChangeEvent, FC, useState } from "react"
import { Input } from "../ui/input"
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox"

type Item = FilterChecboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  searchInputPlaceholder?: string
  className?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
}

export const CheckboxFiltersGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const list = searchValue
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : items

  return (
    <div className={className}>
      <p className="mb-3 font-bold">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {(showAll ? list : defaultItems || list).map((item) => (
          <FilterCheckbox
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-t-neutral-100" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-primary"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  )
}

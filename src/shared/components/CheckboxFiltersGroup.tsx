"use client"
import { ChangeEvent, FC, useState } from "react"
import { Input } from "../ui/input"
import { Skeleton } from "../ui/skeleton"
import { FilterCheckbox, FilterCheckboxProps } from "./FilterCheckbox"

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  searchInputPlaceholder?: string
  className?: string
  loading?: boolean
  selectedIds?: string[]
  selectIdHandler?: (selectedId: string) => void
}

export const CheckboxFiltersGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  loading,
  selectedIds,
  selectIdHandler,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const list = searchValue
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : items

  if (loading) {
    return (
      <div className={className}>
        <p className="mb-3 font-bold">{title}</p>
        {Array(limit)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="mb-5 h-6 rounded-md" />
          ))}
        <Skeleton className="mb-5 h-6 w-28 rounded-md" />
      </div>
    )
  }

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
            key={item.id}
            id={item.id}
            name={item.name}
            endAdornment={item.endAdornment}
            checked={selectedIds?.includes(item.id)}
            onCheckedChange={() => selectIdHandler?.(item.id)}
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

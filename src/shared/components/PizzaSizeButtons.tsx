"use client"
import { cn } from "../lib/utils"

type Variant = {
  name: string
  value: string
  disabled?: boolean
}

type Props = {
  items: readonly Variant[]
  onClick?: (value: string) => void
  selectedValue?: string
  className?: string
}

export const PizzaSizeButtons = ({
  className,
  items,
  onClick,
  selectedValue,
}: Props) => {
  return (
    <div
      className={cn(
        "flex select-none justify-between rounded-3xl bg-[#f3f3f7] p-1",
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "duration-400 flex h-[30px] flex-1 cursor-pointer items-center justify-center rounded-3xl px-5 text-sm transition-all",
            item.value === selectedValue && "bg-white shadow",
            item.disabled && "pointer-events-none text-gray-500 opacity-50",
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

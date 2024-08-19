import React, { FC, ReactNode } from "react"
import { Checkbox } from "../ui/checkbox"

export interface FilterCheckboxProps {
  name: string
  id: string
  endAdornment?: ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  name,
  id,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        className="h-6 w-6 rounded-[8px]"
        id={id}
      />
      <label htmlFor={id} className="flex-1 cursor-pointer leading-none">
        {name}
      </label>
      {endAdornment}
    </div>
  )
}

import React, { FC } from "react"
import { cn } from "../lib/utils"
import { ArrowUpDown } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

interface Props {
  className?: string
}

export const SortPopup: FC<Props> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "inline-flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50/95 px-5",
            className,
          )}
        >
          <ArrowUpDown className="h-4 w-4" />
          <b>Сортировка:</b>

          <b className="text-primary">популярное</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ul>
          <li className="cursor-pointer rounded-md p-2 px-4 hover:bg-secondary hover:text-primary">
            Сначала популярное
          </li>
          <li className="cursor-pointer rounded-md p-2 px-4 hover:bg-secondary hover:text-primary">
            Сначала недорогие
          </li>
          <li className="cursor-pointer rounded-md p-2 px-4 hover:bg-secondary hover:text-primary">
            Сначала дорогие
          </li>
          <li className="cursor-pointer rounded-md p-2 px-4 hover:bg-secondary hover:text-primary">
            С лучшей оценкой
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}

import { FC } from "react"
import { Title } from "./Title"
import { FilterCheckbox } from "./FilterCheckbox"
import { Input } from "../ui/input"
import { RangeSlider } from "./RangeSlider"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"
import { checkboxDefaultItems, checkboxItems } from "../constants"

interface Props {
  className?: string
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          items={[
            { text: "Можно собирать", value: "1" },
            { text: "Новинки", value: "2" },
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
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={0}
          />
        </div>
        <RangeSlider max={5000} min={0} step={1} value={[1000, 4000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        items={checkboxItems}
        defaultItems={checkboxDefaultItems}
      />
    </div>
  )
}

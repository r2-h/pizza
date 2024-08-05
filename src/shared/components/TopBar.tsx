import { FC } from "react"
import { Categories } from "./Categories"
import { SortPopup } from "./SortPopup"
import { cn } from "../lib/utils"
import { Container } from "./Container"

interface Props {
  className?: string
}

export const TopBar: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-white/95 py-5 shadow-lg shadow-black/5",
        className,
      )}
    >
      <Container>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}

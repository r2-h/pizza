import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components"
import { RangeSlider } from "@/shared/components/RangeSlider"

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[1, 2, 3, 4, 5]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Роллы"
                items={[1, 2, 3, 4, 5]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components"

export default async function Home() {
  const response = await fetch(`http://localhost:3000/api/users`)
  const data = await response.json()
  console.log(data)

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
                title="Комбо"
                items={[6, 7, 8, 9, 10]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components"

// async function getData() {
//   const data = await prisma.user.findMany()

//   return data
// }

export default async function Home() {
  // const response = await fetch("/api/users")
  // const user = await response.json()
  // console.log(user)

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

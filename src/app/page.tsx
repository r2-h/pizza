import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components"
import prisma from "../../prisma/db"

export default async function Home() {
  const response = await fetch(`http://localhost:3000/api/users`)
  const data = await response.json()

  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          productItems: true,
          ingredients: true,
        },
      },
    },
  })
  const categoriesWithProducts = categories.filter(
    (category) => category.products.length > 0,
  )

  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categoriesWithProducts} />
      <Container className="pb-14 pt-5">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categoriesWithProducts.map((category) => (
                <ProductsGroupList
                  key={category.id}
                  title={category.name}
                  items={category.products}
                  categoryId={category.id}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

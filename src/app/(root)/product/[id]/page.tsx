import {
  Container,
  PizzaImage,
  PizzaSizeButtons,
  Title,
} from "@/shared/components"
import { notFound } from "next/navigation"
import prisma from "../../../../../prisma/db"

const getProduct = async (id: number) => {
  const data = await prisma.product.findUnique({
    where: { id: Number(id) },
  })
  return data
}

export default async function ProductPage({
  params: { id },
}: {
  params: { id: number }
}) {
  const product = await getProduct(id)
  if (!product) {
    return notFound()
  }

  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <PizzaImage src={product?.imageUrl || ""} size={20} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />
          <p className="text-gray-400">Lorems sdfsdf sfsfs sfsdfsdf sdfsfs</p>
          <PizzaSizeButtons
            selectedValue="1"
            items={[
              { value: "1", name: "Маленькая" },
              { value: "2", name: "Средняя" },
              { value: "3", name: "Большая" },
            ]}
          />
        </div>
      </div>
    </Container>
  )
}

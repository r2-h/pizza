import prisma from "../../../../prisma/db"

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

  return <div>PARRGS {id}</div>
}

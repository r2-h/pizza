import { ChooseProductModal } from "@/shared/components"
import prisma from "../../../../../../prisma/db"
import { notFound } from "next/navigation"

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: { ingredients: true, productItems: true },
  })
  if (!product) {
    return notFound()
  }

  return <ChooseProductModal product={product} />
}

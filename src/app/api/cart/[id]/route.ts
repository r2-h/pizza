import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../../prisma/db"
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount"

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id)
    const data = (await request.json()) as { quantity: number }
    const token = request.cookies.get("cartToken")?.value
    if (!token) return NextResponse.json({ error: "Token not found" })

    const cartItem = await prisma.cartItem.findFirst({
      where: { id },
    })
    if (!cartItem) return NextResponse.json({ error: "Cart item not found" })

    await prisma.cartItem.update({
      where: { id },
      data: {
        quantity: data.quantity,
      },
    })
    const updatedUserCart = await updateCartTotalAmount(token)

    return NextResponse.json(updatedUserCart)
  } catch (error) {
    console.log(error)
  }
}

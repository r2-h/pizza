import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../prisma/db"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("cartToken")?.value
    if (!token) {
      return NextResponse.json({ items: [] })
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        tokenId: token,
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    })
    return NextResponse.json(userCart)
  } catch (error) {
    console.log(error)
  }
}

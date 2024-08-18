import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../../prisma/db"

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || ""

  const data = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 5,
  })
  return NextResponse.json(data)
}

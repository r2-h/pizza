import { NextResponse } from "next/server"
import prisma from "../../../../prisma/db"

export async function GET() {
  const data = await prisma.product.findMany()

  return NextResponse.json(data)
}

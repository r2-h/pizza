import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../prisma/db"

export async function GET() {
  const data = await prisma.user.findMany()

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const user = await prisma.user.create({ data })

  return NextResponse.json(user)
}

import prisma from "./db"
import { hashSync } from "bcrypt"

async function up() {
  await prisma.user.createMany({
    data: [
      {
        email: "USER@test.com",
        password: hashSync("password", 10),
        fullName: "Test User",
        role: "USER",
        verified: new Date(),
      },
      {
        email: "ADMIN@test.com",
        password: hashSync("password", 10),
        fullName: "Test ADMIN",
        role: "ADMIN",
        verified: new Date(),
      },
    ],
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE` // удалить юзеров вместе вместе с id
}

async function main() {
  try {
    await down()
    await up()
  } catch (e) {
    console.error(e)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

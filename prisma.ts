import { PrismaClient } from "@prisma/client";
import { posts } from "./lib/data";

const prisma = new PrismaClient();

async function main() {
  try {
    const user = {
      id: 1,
      name: "arkar",
      email: "a@gmail.com",
    };
    await prisma.workers.create({
      data: user,
    });
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
main();

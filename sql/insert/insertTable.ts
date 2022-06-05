import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


class InsercaoTable {
  // constructor();

  async ins(name: string, email: string) {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
      data: {
        name: name,
        email: email
      }
    })
  }

};

async function ins(name: string, email: string) {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      name: name,
      email: email
    }
  })
}

export default ins;

// export default {ins, InsercaoTable};
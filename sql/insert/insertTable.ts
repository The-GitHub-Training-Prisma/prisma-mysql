import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class InsercaoTable {
  // constructor();

  async ins(name: string, email: string) {
    // ... you will write your Prisma Client queries here
    const res = await prisma.user.create({
      data: {
        name: name,
        email: email
      }
    })
    return res;
  }

};

export default InsercaoTable;
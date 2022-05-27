import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function dell(id: any, name?: string, email?: string) {
  // ... you will write your Prisma Client queries here
    await prisma.user.delete({
      where: {
        id: id
      }
    }
  )
}

async function dellMany(id: any) {
  // ... you will write your Prisma Client queries here
    await prisma.user.deleteMany({
      where: {
        id: id
      }
    }
  )
}

class DeleteUsersTable{
  // constructor()
  async dell(id: any, name?: string, email?: string) {
    // ... you will write your Prisma Client queries here
      await prisma.user.delete({
        where: {
          id: id
        }
      }
    )
  }
  
  async dellMany(id: any) {
    // ... you will write your Prisma Client queries here
      await prisma.user.deleteMany({
        where: {
          id: id
        }
      }
    )
  }
  
}

export default {dell, DeleteUsersTable};
// export default DeleteUsersTable;
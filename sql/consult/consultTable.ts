import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

/*
async function dell(id: any, name?: string, email?: string) {
  // ... you will write your Prisma Client queries here
    await prisma.user.delete({
      where: {
        id: id
      }
    }
  )
}
*/

/*
async function dellMany(id: any) {
  // ... you will write your Prisma Client queries here
    await prisma.user.deleteMany({
      where: {
        id: id
      }
    }
  )
}
*/

class ConsultUsersTable{
  id: number;
  // name?: string;
  // sobrenome?: string;
  // email?: string;
  
  // constructor()
  constructor(id: number){
    this.id = id;
  }

  async consultTodos(){
    await prisma.user.findMany();
  }

  async consultID(){
    await prisma.user.findUnique({
      where: {
        id: this.id
      }
    })
  }

  /*
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
  
  */
}

export default ConsultUsersTable;
// export default DeleteUsersTable;
import { PrismaClient } from '@prisma/client'
import ins from '../sql/insert/insertTable';

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
        
  const inserir = ins("Estevam", "testandouser@hotmail.com");
  inserir;

}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

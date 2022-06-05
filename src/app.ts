import { PrismaClient } from '@prisma/client'
import ins from '../sql/insert/insertTable';
// import ConsultUsersTable from '../sql/consult/consultTable'

// TODO: Export the main function
const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
        
  const inserir = ins("Estevam", "estevam@live.com");
  inserir;

  // const consult = new ConsultUsersTable(2);

  // consult;

}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

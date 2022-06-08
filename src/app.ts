import { PrismaClient } from '@prisma/client'
import InsercaoTable from '../sql/insert/insertTable';
// import ConsultUsersTable from '../sql/consult/consultTable'

// TODO: Export the main function
const prisma = new PrismaClient()

const __insert__ = new InsercaoTable();

// A `main` function so that you can use async/await
async function main() {
        
  const inserir = __insert__.ins("Estevam", "davi@outlook.com");
  inserir;

  // const consult = new ConsultUsersTable(2);

}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

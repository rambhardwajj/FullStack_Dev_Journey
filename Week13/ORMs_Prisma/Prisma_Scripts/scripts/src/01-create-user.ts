import { PrismaClient } from '@prisma/client'

// making an object of PrismaClient provided by prisma when we ran migration command , 
// this object is made in reference to the schema model you provided in prisma/prisma.schema
const prisma = new PrismaClient()

async function main() {
  // because this prisma object is made in reference to the schema model this will automatically have few functions such as user , post etc that are defined in your schema 
  await prisma.user.create({
    data: {
     email: "ram@gmail.com",
     name: "ram"
    }
  })
}

// calling main 
main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
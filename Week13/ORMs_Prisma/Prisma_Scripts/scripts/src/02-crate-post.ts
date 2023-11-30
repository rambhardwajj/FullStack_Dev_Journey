import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//making main function 
async function main() {
  await prisma.post.create({
    data: {
     title: "title of post",
     
     // important 
     author: {
        connect: {
            id: 1
        }
     }
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
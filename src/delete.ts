import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletes = async () => {
//   const singledelete = await prisma.post.delete({
//     where: {
//       id: 1,
//     },
//   });
//   console.log(singledelete);
  const deleteMany = await prisma.post.deleteMany({
    // where: {
    //   title: "Title 4"
    // },
  });
  console.log(deleteMany);
};

deletes();

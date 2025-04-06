import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title1",
  //       content: "this is content1",
  //       authorName: "Faria ahammed rized1",
  //     },
  //   });

  const getAllFromDB = await prisma.post.findMany()

  console.log(getAllFromDB);
};

main();

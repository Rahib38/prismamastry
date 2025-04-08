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

  //   console.log(getAllFromDB);

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 5",
        content: "Content 5",
        authorName: "author5",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "author3",
      },
      {
        title: "Title 4",
        content: "Content 4",
        authorName: "author4",
      },
    ],
  });
  console.log(createMany);
};

main();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 21,
  //     },
  //     data: {
  //       title: "Title 4",
  //       content: "content 4",
  //       authorName: "Author 4",
  //     },
  //   });
  //   console.log(singleUpdate);

  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     title: "Title 4"
  //   },
  //   data: {
  //     published: true,
  //   },
  // });
  // console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "update title",
    },
    create: {
      title: "Title 1",
      content: "Content 1",
      authorName: "Nadimul Rahib",
    },
  });
  console.log(upsertData);
};

updates();

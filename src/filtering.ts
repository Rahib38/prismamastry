import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const filtering = async () => {
  // const andFiltering = await prisma.post.findMany({
  //   where: {
  //     AND: [
  //       {
  //         title: "This is title",
  //         published: true,
  //       },
  //     ],
  //   },
  // });
  // console.log(andFiltering);

  // const orFiltering = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       {
  //         title: {
  //           contains: "This is title",
  //         },
  //       },
  //       {
  //         published: true,
  //       },
  //     ],
  //   },
  // });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "This is title",
          },
        },
      ],
    },
  });

  const startsWith = await prisma.user.findMany({
    where:{
      email:{
        startsWith:"s"
      }
    }
  })
  console.log(startsWith);

  const endsWith = await prisma.user.findMany({
    where:{
      email:{
        endsWith:".com"
      }
    }
  })
  console.log(endsWith);
};
filtering();

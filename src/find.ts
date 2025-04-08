import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirst({
    where: {
      published: true,
    },
  });

  try {
    const findUnique = await prisma.post.findUnique({
      where: {
        id: 24, // উদাহরণ হিসেবে আইডি দিয়ে অনুসন্ধান
      },
      select:{
        title:true,
        content:true,
        authorName:true
      }
    });
    console.log(findUnique);
  } catch (error) {
    console.error("কোনো রেকর্ড পাওয়া যায়নি:", error);
  }
  //   console.log({ findUnique });
};

main();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createMany = await prisma.user.createMany({
  //   data: {
  //     username:"Korim mia",
  //     email:"korimmia5@gmail.com",
  //     role: UserRole.user
  //   },
  // });
  // console.log(createMany);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio:"This is rockStar",
  //     userId:1
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name:"Software Engineer",

  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title",
      content: "This is content of the post.",
      authorId: 1,
      PostCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 3,
          },
          {
            categoryId: 2,
          },
        ],
      },
    },
    include: {
      PostCategory: true,
    },
  });
  console.log(createPost);
};

main();

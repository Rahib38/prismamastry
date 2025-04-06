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
        data:[
            {
                title:"Title 1",
                content:"Content 1",
                authorName:"author1"
            },
            {
                title:"Title 2",
                content:"Content 2",
                authorName:"author2"
            },
            {
                title:"Title 3",
                content:"Content 3",
                authorName:"author3"
            },
        ]
    })
    console.log(createMany)
};

main();

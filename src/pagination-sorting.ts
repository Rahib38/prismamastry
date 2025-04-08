import { PrismaClient } from "@prisma/client";
import { skip } from "node:test";

const prisma = new PrismaClient();

const paginationSorting = async () => {
    // offset pagination
//     const offsetData= await prisma.post.findMany({
//         skip:3,
//         take:1
//     })
  
//   console.log("Offset pagination data:", offsetData);


//     const cursorData= await prisma.post.findMany({
//         skip:3,
//         take:1,
//         cursor:{
//             id:26
//         }
//     })
  
//   console.log("cursor pagination data:", cursorData);


    const sortData= await prisma.post.findMany({
       orderBy:{
        title:'asc'
       }
    })
  
  console.log("cursor pagination data:", sortData);


};

paginationSorting();

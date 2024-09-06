import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { title, description, image, category, price } = query;

  let newProduct;

  try {
    newProduct = await prisma.products.create({
      data: {
        title,
        description,
        image,
        category,
        price: +price,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }

  return newProduct;
});

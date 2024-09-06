import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const productId = getRouterParam(event, 'id');
  const product = await prisma.products.findFirst({
    where: {
      id: +productId,
    },
  });

  return product;
});

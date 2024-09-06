import { PrismaClient } from '@prisma/client';
import { $fetch } from 'ofetch';

const prisma = new PrismaClient();
const productURL = 'https://fakestoreapi.com/products';
const products = await $fetch(productURL);

const seedProducts = async () => {
  try {
    products.forEach(async (product) => {
      await prisma.products.create({
        data: {
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
        },
      });
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

seedProducts();

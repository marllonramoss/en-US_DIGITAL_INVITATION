import { events } from '@digital-invitation/core';
import { PrismaClient } from '@prisma/client';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = events.map(async (e) => {
    await prisma.event.create({
      data: {
        id: e.id,
        alias: e.alias,
        name: e.name,
        password: e.password,
        date: e.date,
        local: e.local,
        description: e.description,
        image: e.image,
        backgroundImage: e.imageBackground,
        quantityEstimated: e.quantityEstimated,
        guests: {
          create: e.Guests.map((g) => ({
            id: g.id,
            name: g.name,
            email: g.email,
            confirmed: g.confirmed,
            haveFriends: g.haveFriends,
            friendsQuantity: g.friendsQuantity,
          })),
        },
      },
    });
  });
  await Promise.all(transactions);
}

seed();

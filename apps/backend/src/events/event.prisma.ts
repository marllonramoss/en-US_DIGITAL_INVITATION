import { Event, Guest } from '@digital-invitation/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { UuidProvider } from './uuid.provider';

@Injectable()
export class EventPrisma {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly uuid: UuidProvider,
  ) {}

  async save(event: Event) {
    return await this.prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        password: event.password,
        name: event.name,
        date: event.date,
        local: event.local,
        description: event.description,
        image: event.image,
        imageBackground: event.imageBackground,
        quantityEstimated: event.quantityEstimated,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            haveFriends: guest.haveFriends,
            friendsQuantity: guest.friendsQuantity,
          })),
        },
      },
    });
  }

  async saveGuest(event: Event, guest: Guest) {
    return await this.prisma.guest.create({
      data: {
        ...guest,
        friendsQuantity: +(guest.friendsQuantity ?? 0),
        event: {
          connect: {
            id: event.id,
          },
        },
      },
    });
  }

  async validadeAlias(alias: string): Promise<{ valid: boolean }> {
    const existingAlias = await this.prisma.event.findUnique({
      where: { alias },
    });

    return { valid: !existingAlias };
  }

  async searchAll(): Promise<Event> {
    return (await this.prisma.event.findMany()) as any;
  }

  async searchById(id: string, full?: boolean): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: { guests: full },
    }) as any;
  }

  async searchByAlias(alias: string, full?: boolean): Promise<Event | null> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        name: true,
        alias: true,
        description: true,
        date: true,
        local: true,
        image: true,
        imageBackground: true,
        password: full,
        quantityEstimated: full,
        guests: full,
      },
      where: { alias },
    }) as any;
  }
}

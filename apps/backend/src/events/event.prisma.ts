import { Event, Guest } from '@digital-invitation/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  save(event: Event) {
    return this.prisma.event.create({
      data: event as any,
    });
  }

  saveGuest(event: Event, guest: Guest) {
    return this.prisma.guest.create({
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

  async searchAll(): Promise<Event> {
    return (await this.prisma.event.findMany()) as any;
  }

  async searchById(id: string, full: boolean): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: { guests: full },
    }) as any;
  }

  async searchByAlias(alias: string, full: boolean): Promise<Event | null> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        local: true,
        image: true,
        backgroundImage: true,
        alias: true,
        password: full,
        quantityEstimated: full,
        guests: full,
      },
      where: {
        alias,
      },
    }) as any;
  }
}

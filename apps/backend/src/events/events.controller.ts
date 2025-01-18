import {
  Event,
  events,
  fillEvent,
  fillGuest,
  Guest,
} from '@digital-invitation/core';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UuidProvider } from './uuid.provider';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {
  constructor(
    private readonly uuid: UuidProvider,
    private readonly prismaRepo: EventPrisma,
  ) {}

  @Post()
  async saveEvent(@Body() event: Event) {
    const existingEvent = events.find((e) => e.alias === event.alias);
    if (existingEvent && existingEvent.id !== event.id) {
      throw new Error('Event already registred');
    }

    const filledEvent = new fillEvent(event, this.uuid);

    events.push(filledEvent.execute());
  }

  @Post(':alias/guest')
  async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
    const event = events.find((e) => e.alias === alias);
    if (!event) {
      throw new Error('Event not founded!');
    }

    const filledGuest = new fillGuest(event, this.uuid);

    event.Guests.push(guest);
    return filledGuest;
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = events.find((e) => e.id === data.id);

    const eventAuth = event.password === data.password;

    if (!event) {
      throw new Error('Incorrect event');
    } else if (event && !eventAuth) {
      throw new Error('Incorrect event password');
    }

    return event;
  }

  @Get()
  async searchEvents() {
    return events;
  }

  @Get(':idOrAlias')
  async searchEvent(@Param('idOrAlias') idOrAlias: string) {
    if (idOrAlias) {
      const response = events.find((e) => e.id === idOrAlias);

      if (response) {
        return response;
      } else {
        return events.find((e) => e.alias === idOrAlias);
      }
    }
  }
}

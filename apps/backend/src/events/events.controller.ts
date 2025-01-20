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
    const existingEventId = await this.prismaRepo.searchByAlias(event.id);

    if (existingEventId) {
      console.log('ID ALREADY EXIST');

      throw new Error('Trying save event ERROR - Event ID already used');
    }

    const existingEventAlias = await this.prismaRepo.searchByAlias(event.alias);

    if (existingEventAlias) {
      console.log('ALIAS ALREADY EXIST');
      throw new Error('Trying save event ERROR - Event ALIAS already used ');
    }

    console.log('EVENT BEFORE FILL EVENT EXECUTION', event);

    const filledEvent = new fillEvent(event, this.uuid).execute();

    console.log('EVENT AFTER FILL EVENT EXECUTION', filledEvent);

    return await this.prismaRepo.save(filledEvent);
  }

  @Post(':alias/guest')
  async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
    const event = await this.prismaRepo.searchByAlias(alias);
    if (!event) {
      throw new Error('Event not founded!');
    }

    const filledGuest = new fillGuest(guest, this.uuid).execute();

    return await this.prismaRepo.saveGuest(event, filledGuest);
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.prismaRepo.searchById(data.id);

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
    return this.prismaRepo.searchAll();
  }

  @Get(':idOrAlias')
  async searchEvent(@Param('idOrAlias') idOrAlias?: string) {
    try {
      const existingId = await this.prismaRepo.searchById(idOrAlias);

      if (existingId) {
        return existingId;
      } else {
        return await this.prismaRepo.searchByAlias(idOrAlias);
      }
    } catch {
      throw new Error('Error on search event controller method');
    }
  }

  @Get('validate/:alias')
  async validadeAlias(@Param('alias') alias: string) {
    try {
      const existingAlias = await this.prismaRepo.searchByAlias(alias);

      if (existingAlias) {
        return { valid: true };
      } else {
        return { valid: false };
      }
    } catch {
      throw new Error('Errpr on validadeAlias controller method');
    }
  }
}

import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { UuidProvider } from './uuid.provider';

@Module({
  controllers: [EventsController],
  providers: [UuidProvider]
})
export class EventsModule {}

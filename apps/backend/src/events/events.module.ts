import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { UuidProvider } from './uuid.provider';
import { DbModule } from 'src/db/db.module';
import { EventPrisma } from './event.prisma';

@Module({
  controllers: [EventsController],
  providers: [UuidProvider, EventPrisma],
  imports: [DbModule],
})
export class EventsModule {}

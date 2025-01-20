import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/ping')
  ping(): string {
    console.log('PING PONG FUNCITON ACTIVED');

    return 'pong';
  }
}

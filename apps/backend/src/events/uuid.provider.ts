import { IdGenerator_port } from '@digital-invitation/core';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class UuidProvider implements IdGenerator_port {
  generate(): string {
    const id = v4();
    return id;
  }
}

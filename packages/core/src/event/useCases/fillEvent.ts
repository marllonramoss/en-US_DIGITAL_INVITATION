import Event from '../model/Event';
import { IdGenerator_port } from '../ports/IdGenerator_port';
import validateEvent from './validateEvent';

export class fillEvent {
    constructor(
        private readonly PartialEvent: Partial<Event>,
        private readonly idGenerator_port: IdGenerator_port,
    ) {}

    execute(): Event {
        console.log('Start execute -------------------------');

        const errors = validateEvent(this.PartialEvent);
        if (errors.length) {
            throw new Error(errors.join('\n'));
        }

        const completedEvent: Event = {
            ...this.PartialEvent,
            id: this.idGenerator_port.generate(),
            password: this.PartialEvent.password,
            quantityEstimated: this.PartialEvent.quantityEstimated ?? 1,
            guests: this.PartialEvent.guests.map((g) => ({
                ...g,
                id: this.idGenerator_port.generate(),
            })),
        } as Event;

        return completedEvent;
    }
}

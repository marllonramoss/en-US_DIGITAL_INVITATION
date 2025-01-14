import Event from '../model/Event';

export default class createEmptyEvent {
    execute(): Partial<Event> {
        return {
            id: '',
            name: '',
            description: '',
            date: new Date(),
            local: '',
            quantityEstimated: 1,
            image: '',
            imageBackground: '',
        };
    }
}

import Guest from '../model/Guest';
import { IdGenerator_port } from '../ports/IdGenerator_port';
import validadeGuest from './validateGuest';

export class fillGuest {
    constructor(
        private readonly partialGuest: Partial<Guest>,
        private readonly idGenerator_port: IdGenerator_port,
    ) {}

    execute(): Guest {
        const erros = validadeGuest(this.partialGuest);

        const completedGuest: Guest = {
            ...this.partialGuest,
            id: this.partialGuest.id ?? this.idGenerator_port.generate(),
            friendsQuantity: !this.partialGuest.haveFriends && 0,
            haveFriends: this.partialGuest.confirmed && true,
        } as Guest;

        return completedGuest;
    }
}

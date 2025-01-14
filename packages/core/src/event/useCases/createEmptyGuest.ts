import Guest from '../model/Guest';

export class createEmptyGuest {
    execute(): Partial<Guest> {
        return {
            id: '',
            name: '',
            email: '',
            confirmed: false,
            haveFriends: false,
            friendsQuantity: 0,
        };
    }
}

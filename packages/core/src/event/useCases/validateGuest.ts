import Guest from '../model/Guest';

export default function validadeGuest(guest: Partial<Guest>): string[] | null {
    const erros: string[] = [];

    if (!guest.id) {
        erros.push('Id is required');
    }
    if (!guest.name) {
        erros.push('Name is required');
    }
    if (!guest.email) {
        erros.push('Email is required');
    }
    if (!guest.haveFriends) {
        erros.push('Have Friends is required');
    }
    if (!guest.friendsQuantity) {
        erros.push('Friends Quantity is required');
    }

    return erros;
}

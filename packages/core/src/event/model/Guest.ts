export default interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    haveFriends: boolean;
    friendsQuantity: number;
}

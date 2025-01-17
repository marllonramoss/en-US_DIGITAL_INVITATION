import Event from '../model/Event';

export default function validateEvent(event: Partial<Event>): string[] | null {
    const erros: string[] = [];

    if (!event.name) {
        erros.push('Name is required!');
    }
    if (!event.description) {
        erros.push('Description is required!');
    }
    if (!event.password) {
        erros.push('Password is required!');
    }
    if (!event.date) {
        erros.push('Date is required!');
    }
    if (!event.local) {
        erros.push('Local is required!');
    }
    if (!event.alias) {
        erros.push('Alias is required!');
    }
    if (!event.quantityEstimated || event.quantityEstimated < 1) {
        erros.push('Quantity of people estimated is required!');
    }
    if (!event.image) {
        erros.push('Image Url is required!');
    }
    if (!event.imageBackground) {
        erros.push('Image Background Url is required!');
    }

    return erros;
}

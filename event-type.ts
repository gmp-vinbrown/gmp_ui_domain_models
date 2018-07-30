import { Event } from './event';

export class EventType {
    eventTypeId: number;
    name: string;
    description: string;

    events: Event[];

    constructor() {
        this.events = [];
    }
}
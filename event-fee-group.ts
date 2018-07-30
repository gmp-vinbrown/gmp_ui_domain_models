import { Event } from './event';

export class EventFeeGroup {
    eventFeeGroupId: number;
    eventId: number;
    fee: number;
    name: string;
    description: string;

    event: Event;
}
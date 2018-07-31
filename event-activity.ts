import { EventActivityType } from './event-activity-type';
import { MemberEventActivity } from './member-event-activity';

export class EventActivity {
    eventActivityId: number;
    eventId: number;
    eventActivityTypeId: number;
    
    event: Event;
    eventActivityType: EventActivityType;
    memberEventActivities: MemberEventActivity[];

    constructor() {
        this.memberEventActivities = [];
    }
}

import { AttendanceEventActivityType } from './attendance-event-activity-type';
import { EventActivity } from './event-activity';

export class EventActivityType {
    eventActivityTypeId: number;
    name: string;
    description?: string;

    attendanceEventActivityTypes: AttendanceEventActivityType[];
    eventActivities: EventActivity[];

    constructor() {
        this.attendanceEventActivityTypes = [];
        this.eventActivities = []
    }
}
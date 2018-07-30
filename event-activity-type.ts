import { AttendanceEventActivityType } from './attendance-event-activity-type';
import { EventActivity } from './event-activity';

export class EventActivityType {
    eventActivityTypeId: number;
    name: string;
    description: string;

    attendanceEventActivityType: AttendanceEventActivityType[];
    eventActivity: EventActivity[];

    constructor() {
        this.attendanceEventActivityType = [];
        this.eventActivity = []
    }
}
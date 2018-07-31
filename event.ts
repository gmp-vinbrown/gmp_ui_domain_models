import { EventType } from './event-type';
import { EventFeeGroup } from './event-fee-group';
import { Attendance } from './attendance';
import { EventActivity } from './event-activity';
import { EventRegistration } from './event-registration';
import { Schedule } from './schedule';
import { AuditableEntity } from './auditable-entity';

export class Event extends AuditableEntity {
    
    eventId: number;
    eventTypeId: number;
    name: string;
    description?: string;
    schoolLocationId: number;
    eventStartDate: Date;
    eventEndDate?: Date;

    eventType: EventType;
    feeGroups: EventFeeGroup[];
    attendance: Attendance[];
    eventActivities: EventActivity[];
    registrations: EventRegistration[];
    schedules: Schedule[];

    constructor() {
        super();
        this.attendance = [];
        this.eventActivities = [];
        this.registrations = [];
        this.schedules = [];
        this.feeGroups = [];
    }
}
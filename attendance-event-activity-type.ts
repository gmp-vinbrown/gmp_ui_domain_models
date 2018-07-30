import { Attendance } from './attendance';
import { EventActivityType } from './event-activity-type';

export class AttendanceEventActivityType {
    attendanceEventActivityTypeId: number;
    attendanceId: number;
    eventActivityTypeId: number;

    attendance: Attendance;
    eventActivityType: EventActivityType
}
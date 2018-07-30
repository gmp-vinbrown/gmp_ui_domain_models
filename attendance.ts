import { Member } from './member';
import { AttendanceEventActivityType } from './attendance-event-activity-type';

export class Attendance {
    public attendanceId: number;
    public memberId: number;
    public eventId: number;
    public eventDate: Date;
    public notes: string;
    
    public event: Event
    public member: Member
    public attendanceEventActivityTypes: AttendanceEventActivityType[];
        
    constructor (){
            this.attendanceEventActivityTypes = [];
        }
    }
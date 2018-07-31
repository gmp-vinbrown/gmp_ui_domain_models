import { MemberEventActivity } from './member-event-activity';
import { ContactInfo } from './contact-info';
import { Program } from './program';
import { FeeSchedule } from './fee-schedule';
import { Level } from './level';
import { Role } from './role';
import { SchoolLocation } from './school-location';
import { Payment } from './payment';
import { Attendance } from './attendance';
import { EventRegistration } from './event-registration';
import { AuditableEntity } from './auditable-entity';

export class Member extends AuditableEntity {

    memberId;
    schoolLocationId;
    contactInfoId?: number;
    roleId: number;
    programId?: number;
    feeScheduleId?: number;
    prefix?: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    suffix?: string;
    gender?: string;
    weight?: number;
    dob?: Date;
    age?: number;
    levelId?: number;
    notes?: string;

    contactInfo: ContactInfo;
    program?: Program;
    feeSchedule?: FeeSchedule;
    level: Level;
    role: Role;
    schoolLocation?: SchoolLocation;
    payments: Payment[];
    attendance: Attendance[];
    memberEventActivities: MemberEventActivity[];
    registrations: EventRegistration[];

    constructor() {
        super();
        this.attendance = [];
        this.memberEventActivities = [];
        this.registrations = [];
        this.payments = [];
    }
}
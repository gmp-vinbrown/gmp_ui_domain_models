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

export class Member {

    memberId;
    schoolLocationId;
    contactInfoId?: number;
    roleId;
    programId?: number;
    feeScheduleId?: number;
    prefix;
    firstName;
    middleName;
    lastName;
    suffix;
    gender;
    weight?: number;
    dob?: Date;
    age?: number;
    levelId?: number;
    notes;

    contactInfo: ContactInfo;
    program: Program;
    feeSchedule: FeeSchedule;
    level: Level;
    role: Role;
    schoolLocation: SchoolLocation;
    payments: Payment[];
    attendance: Attendance[];
    memberEventActivities: MemberEventActivity[];
    registrations: EventRegistration[];

    constructor() {
        this.attendance = [];
        this.memberEventActivities = [];
        this.registrations = [];
        this.payments = [];
    }
}
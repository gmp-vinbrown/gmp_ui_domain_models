import { Member } from './member';

export class FeeSchedule {
    feeScheduleId: number;
    name: string;
    startDate: Date;
    numberOfPayments: number;
    discountAmount?: number;
    discountPercent?: number;
    description: string;
    active: boolean;

    members: Member[];

    constructor() {
        this.members = [];
    }
}
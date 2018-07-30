import { School } from './school';
import { Member } from './member';

export class Program {
    programId: number;
    schoolId: number;
    name: string;
    durationDays: number;
    baseFee: number;
    description: string;

    school: School;
    members: Member[];

    constructor() {
        this.members = [];
    }
}
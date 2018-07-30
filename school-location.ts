import { School } from './school';
import { Member } from './member';

export class SchoolLocation {
    schoolLocationId: number;
    schoolId: number;
    isPrimary: boolean;
    name: string;
    address1: string;
    address2?: string;
    city: string;
    stateCode: string;
    zip: string;

    school: School;
    members: Member[];

    constructor() {
        this.members = [];
    }
}
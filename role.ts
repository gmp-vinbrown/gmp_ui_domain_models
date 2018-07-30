import { School } from './school';
import { Member } from './member';

export class Role {
    constructor() {
        this.members = [];
    }

    roleId: number;
    schoolId: number;
    name: string;
    description: string;

    school: School;
    members: Member[];
}
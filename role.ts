import { School } from './school';
import { Member } from './member';

export class Role {
    
    roleId: number;
    schoolId: number;
    name?: string;
    description?: string;

    school?: School;
    members: Member[];

    constructor() {
        this.members = [];
    }
}
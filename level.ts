import { School } from './school';
import { Member } from './member';

export class Level {

    levelId: number
    schoolId: number;
    name?: string;
    description?: string;
    value?: number;

    school?: School;
    members: Member[];

    constructor() {
        this.members = [];
    }
}
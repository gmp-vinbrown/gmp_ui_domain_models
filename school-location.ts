import { School } from './school';
import { Member } from './member';
import { AuditableEntity } from './auditable-entity';

export class SchoolLocation extends AuditableEntity {
    schoolLocationId: number;
    schoolId: number;
    isPrimary: boolean;
    name?: string;
    address1?: string;
    address2?: string;
    city?: string;
    stateCode?: string;
    zip?: string;

    school: School;
    members: Member[];

    constructor() {
        super();
        this.members = [];
    }
}
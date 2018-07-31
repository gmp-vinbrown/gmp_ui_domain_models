import { Level } from './level';
import { Program } from './program';
import { Role } from './role';
import { SchoolLocation } from './school-location';
import { AuditableEntity } from './auditable-entity';

export class School extends AuditableEntity {
    
    schoolId: number;
    name: string;
    code: string;

    levels: Level[];
    programs: Program[];
    roles: Role[];
    schoolLocations: SchoolLocation[];

    constructor() {
        super();
        this.levels = [];
        this.programs = [];
        this.roles = [];
        this.schoolLocations = [];
    }
}
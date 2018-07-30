import { Level } from './level';
import { Program } from './program';
import { Role } from './role';
import { SchoolLocation } from './school-location';

export class School{
    constructor()
        {
            this.levels = [];
            this.programs = [];
            this.roles = [];
            this.schoolLocations = [];
        }

        schoolId: number;
        name: string;
        code: string;

        levels: Level[];
        programs: Program[];
        roles: Role[];
        schoolLocations: SchoolLocation[];
}
import { EventActivity } from './event-activity';
import { Member } from './member';

export class MemberEventActivity{
    memberEventActivityId: number;
    memberId: number;
    eventActivityId: number;
    result?: string;
    notes?: string;

    eventActivity?: EventActivity ;
    member?: Member ;
}
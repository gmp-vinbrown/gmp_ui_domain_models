import { Member } from './member';
import { Payment } from './payment';
import { EventFeeGroup } from './event-fee-group';
import { AuditableEntity } from './auditable-entity';

export class EventRegistration extends AuditableEntity {
    eventRegistrationId: number;
    eventId: number;
    memberId: number;
    eventFeeGroupId?: number;
    paymentId?: number;

    event?: Event;
    eventFeeGroup?: EventFeeGroup;
    member?: Member;
    payment?: Payment;
}

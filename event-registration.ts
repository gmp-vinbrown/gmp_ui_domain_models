import { Member } from './member';
import { Payment } from './payment';
import { FeeGroup } from './fee-group';

export class EventRegistration {
    eventRegistrationId: number;
    eventId: number;
    memberId: number;
    eventFeeGroupId?: number;
    paymentId?: number;

    event: Event;
    eventFeeGroup: FeeGroup;
    member: Member;
    payment: Payment;
}

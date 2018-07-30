import { TransactionType } from './transaction-type';
import { EventRegistration } from './event-registration';
import { Member } from './member';

export class Payment {

    paymentId: number;
    transactionTypeId: number;
    memberId: number;
    notes: string;
    transactionDate: Date;
    amount: number

    member: Member;
    transactionType: TransactionType;
    registrations: EventRegistration[];

    constructor() {
        this.registrations = [];
    }
}
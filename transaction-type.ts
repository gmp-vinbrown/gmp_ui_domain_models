import { Payment } from './payment';

export class TransactionType {
    
    transactionTypeId: number;
    name: string;
    description?: string;

    payments: Payment[];
    
    constructor() {
        this.payments = [];
    }
}
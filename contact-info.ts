import { AuditableEntity } from './auditable-entity';

export class ContactInfo extends AuditableEntity{
    contactInfoId: number;
    title?: string;
    email?: string;
    phone1?: string;
    phone2?: string;
    fax?: string;
    notes?: string;
}
import { Contact } from './contact.interface';

export interface Student {
  id: string;
  name: string;
  phone: string;
  email: string;
  contacts: Contact[];
  referCode: string;
  referlink: string;
  Refers: string[];
  incentives: string[];
}

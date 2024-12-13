export interface Refer {
  id: string;
  name: string;
  phone: string;
  email: string;
  referCode: string;
  isStudying?: boolean;
  isWorking?: boolean;
  studentId: string;
  gender?: string;
  age?: number;
  registerDate: Date;
}

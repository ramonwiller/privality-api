import { Insurer } from '@prisma/client';
export class InsurerEntity implements Insurer {
  id: number;
  name: string;
  registerNumber: string;
  taxId: string;
  phone: string;
  email: string;
  officerId: number;
  createdAt: Date;
  updatedAt: Date;
}

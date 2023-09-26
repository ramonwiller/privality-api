import { Officer } from '@prisma/client';

export class OfficerEntity implements Officer {
  id: number;
  name: string;
  taxId: string;
  phone: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

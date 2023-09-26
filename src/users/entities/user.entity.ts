import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  taxId: string;
  birtyhday: Date;
  phone: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

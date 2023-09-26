import { Authorization } from '@prisma/client';

export class AuthorizationEntity implements Authorization {
  id: number;
  orderId: number;
  officerId: number;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}

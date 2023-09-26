import { Order } from '@prisma/client';

export class OrderEntity implements Order {
  id: number;
  userId: number;
  insurerId: number;
  createdAt: Date;
  updatedAt: Date;
}

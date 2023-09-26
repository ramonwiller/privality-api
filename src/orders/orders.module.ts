import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderRepository } from './repositories/order.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrderRepository, PrismaService],
})
export class OrdersModule {}

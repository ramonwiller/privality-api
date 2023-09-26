import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderEntity } from '../entities/order.entity';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  async findAll(): Promise<OrderEntity[]> {
    return await this.prisma.order.findMany();
  }

  async findOne(id: number): Promise<OrderEntity> {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderEntity> {
    return this.prisma.order.update({
      where: {
        id,
      },
      data: updateOrderDto,
    });
  }

  async remove(id: number): Promise<OrderEntity> {
    return this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}

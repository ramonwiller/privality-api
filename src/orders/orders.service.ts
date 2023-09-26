import { Injectable } from '@nestjs/common';
import { OrderRepository } from './repositories/order.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly repository: OrderRepository) {}

  create(createOrderDto: CreateOrderDto) {
    return this.repository.create(createOrderDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    return user;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.repository.update(id, updateOrderDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}

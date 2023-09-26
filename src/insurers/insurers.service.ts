import { Injectable } from '@nestjs/common';
import { CreateInsurerDto } from './dto/create-insurer.dto';
import { UpdateInsurerDto } from './dto/update-insurer.dto';
import { InsurerRepository } from './repositories/insurer.repository';

@Injectable()
export class InsurersService {
  constructor(private readonly repository: InsurerRepository) {}

  create(createInsurerDto: CreateInsurerDto) {
    return this.repository.create(createInsurerDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    return user;
  }

  update(id: number, updateInsurerDto: UpdateInsurerDto) {
    return this.repository.update(id, updateInsurerDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}

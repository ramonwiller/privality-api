import { Injectable } from '@nestjs/common';
import { CreateOfficerDto } from './dto/create-officer.dto';
import { UpdateOfficerDto } from './dto/update-officer.dto';
import { OfficerRepository } from './repositories/officer.repository';

@Injectable()
export class OfficersService {
  constructor(private readonly repository: OfficerRepository) {}

  create(createOfficerDto: CreateOfficerDto) {
    return this.repository.create(createOfficerDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  update(id: number, updateOfficerDto: UpdateOfficerDto) {
    return this.repository.update(id, updateOfficerDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}

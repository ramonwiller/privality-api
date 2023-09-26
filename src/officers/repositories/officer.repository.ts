import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOfficerDto } from '../dto/create-officer.dto';
import { OfficerEntity } from '../entities/officer.entity';
import { UpdateOfficerDto } from '../dto/update-officer.dto';

@Injectable()
export class OfficerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOfficerDto: CreateOfficerDto): Promise<OfficerEntity> {
    return this.prisma.officer.create({
      data: createOfficerDto,
    });
  }

  async findAll(): Promise<OfficerEntity[]> {
    return await this.prisma.officer.findMany();
  }

  async findOne(id: number): Promise<OfficerEntity> {
    return this.prisma.officer.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateOfficerDto: UpdateOfficerDto,
  ): Promise<OfficerEntity> {
    return this.prisma.officer.update({
      where: {
        id,
      },
      data: updateOfficerDto,
    });
  }

  async remove(id: number): Promise<OfficerEntity> {
    return this.prisma.officer.delete({
      where: {
        id,
      },
    });
  }
}

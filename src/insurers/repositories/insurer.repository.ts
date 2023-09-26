import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInsurerDto } from '../dto/create-insurer.dto';
import { InsurerEntity } from '../entities/insurer.entity';
import { UpdateInsurerDto } from '../dto/update-insurer.dto';

@Injectable()
export class InsurerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInsurerDto: CreateInsurerDto): Promise<InsurerEntity> {
    return this.prisma.insurer.create({
      data: createInsurerDto,
    });
  }

  async findAll(): Promise<InsurerEntity[]> {
    return await this.prisma.insurer.findMany();
  }

  async findOne(id: number): Promise<InsurerEntity> {
    return this.prisma.insurer.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateInsurerDto: UpdateInsurerDto,
  ): Promise<InsurerEntity> {
    return this.prisma.insurer.update({
      where: {
        id,
      },
      data: updateInsurerDto,
    });
  }

  async remove(id: number): Promise<InsurerEntity> {
    return this.prisma.insurer.delete({
      where: {
        id,
      },
    });
  }
}

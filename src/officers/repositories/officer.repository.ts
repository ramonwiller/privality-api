import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOfficerDto } from '../dto/create-officer.dto';
import { OfficerEntity } from '../entities/officer.entity';
import { UpdateOfficerDto } from '../dto/update-officer.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class OfficerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOfficerDto: CreateOfficerDto): Promise<OfficerEntity> {
    const hashedPassword = await bcrypt.hash(createOfficerDto.password, 10);

    const data: Prisma.OfficerCreateInput = {
      ...createOfficerDto,
      password: hashedPassword,
    };

    const createdOfficer = await this.prisma.officer.create({ data });

    return { ...createdOfficer, password: undefined };
  }

  async findAll(): Promise<OfficerEntity[]> {
    const officers = await this.prisma.officer.findMany();
    const officersWithoutPassword = officers.map((officer) => {
      return { ...officer, password: undefined };
    });
    return officersWithoutPassword;
  }

  async findOne(id: number): Promise<OfficerEntity> {
    const officer = await this.prisma.officer.findUnique({
      where: {
        id,
      },
    });
    return { ...officer, password: undefined };
  }

  async findByEmail(email: string): Promise<OfficerEntity> {
    return this.prisma.officer.findUnique({
      where: {
        email,
      },
    });
  }

  async update(
    id: number,
    updateOfficerDto: UpdateOfficerDto,
  ): Promise<OfficerEntity> {
    const officer = await this.prisma.officer.update({
      where: {
        id,
      },
      data: updateOfficerDto,
    });
    return { ...officer, password: undefined };
  }

  async remove(id: number): Promise<OfficerEntity> {
    return this.prisma.officer.delete({
      where: {
        id,
      },
    });
  }
}

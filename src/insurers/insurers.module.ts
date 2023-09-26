import { Module } from '@nestjs/common';
import { InsurersService } from './insurers.service';
import { InsurersController } from './insurers.controller';
import { InsurerRepository } from './repositories/insurer.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InsurersController],
  providers: [InsurersService, InsurerRepository, PrismaService],
})
export class InsurersModule {}

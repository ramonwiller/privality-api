import { Module } from '@nestjs/common';
import { OfficersService } from './officers.service';
import { OfficersController } from './officers.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { OfficerRepository } from './repositories/officer.repository';

@Module({
  controllers: [OfficersController],
  providers: [OfficersService, PrismaService, OfficerRepository],
})
export class OfficersModule {}

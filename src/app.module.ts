import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OfficersModule } from './officers/officers.module';
import { InsurersModule } from './insurers/insurers.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    OfficersModule,
    InsurersModule,
    UsersModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

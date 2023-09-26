import { Module } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsController } from './authorizations.controller';

@Module({
  controllers: [AuthorizationsController],
  providers: [AuthorizationsService],
})
export class AuthorizationsModule {}

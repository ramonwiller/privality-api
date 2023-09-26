import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';
import { CreateAuthorizationDto } from './dto/create-authorization.dto';
import { UpdateAuthorizationDto } from './dto/update-authorization.dto';

@Controller('authorizations')
export class AuthorizationsController {
  constructor(private readonly authorizationsService: AuthorizationsService) {}

  @Post()
  create(@Body() createAuthorizationDto: CreateAuthorizationDto) {
    return this.authorizationsService.create(createAuthorizationDto);
  }

  @Get()
  findAll() {
    return this.authorizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorizationDto: UpdateAuthorizationDto) {
    return this.authorizationsService.update(+id, updateAuthorizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizationsService.remove(+id);
  }
}

import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsTaxId,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsTaxId('pt-BR')
  taxId: string;

  @IsDateString()
  birtyhday: Date;

  @IsString()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;
}

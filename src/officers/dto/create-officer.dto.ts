import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsTaxId,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateOfficerDto {
  @ApiProperty({
    description: `Nome.`,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: `CPF ou CNPJ`,
  })
  @IsTaxId('pt-BR')
  taxId: string;

  @ApiProperty({
    description: `Telefone.`,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: `E-mail.`,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: `Senha.`,
  })
  @MinLength(8)
  @MaxLength(64)
  @IsString()
  password: string;
}

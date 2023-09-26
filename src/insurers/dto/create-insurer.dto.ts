import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsTaxId,
} from 'class-validator';
export class CreateInsurerDto {
  @ApiProperty({
    description: `Nome da operadora de plano de saúde.`,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: `Número de registro da operadora na ANS.`,
  })
  @IsString()
  @IsNotEmpty()
  registerNumber: string;

  @ApiProperty({
    description: `Número de CNPJ.`,
  })
  @IsTaxId('pt-BR')
  taxId: string;

  @ApiProperty({
    description: `Número de telefone.`,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: `Endereço de e-mail.`,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  officerId: number;
}

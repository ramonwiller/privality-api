import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: `Titular.`,
  })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: `Operadora.`,
  })
  @IsNotEmpty()
  insurerId: number;
}

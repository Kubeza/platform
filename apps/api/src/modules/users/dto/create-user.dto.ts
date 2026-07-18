import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Nageswara Rao',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'nani@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'StrongPassword123',
  })
  @MinLength(8)
  password: string;
}
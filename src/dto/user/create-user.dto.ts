import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Amirul Islam', description: 'The name of the user' })
  @IsNotEmpty({ message: 'The name field is required.' })
  name: string;

  @ApiProperty({
    example: 'amirul@gmail.com',
    description: 'The email of the user',
  })
  @IsNotEmpty({ message: 'The email field is required.' })
  email: string;

  @ApiProperty({
    example: '01746162231',
    description: 'The phone number of the user',
  })
  @IsNotEmpty({ message: 'The phone number field is required.' })
  phone: string;

  @ApiProperty({
    example: 'Software Developer',
    description: 'The occupation of the user',
  })
  @IsNotEmpty({ message: 'The occupation field is required.' })
  occupation: string;

  @ApiProperty({
    example: 'Mirpur 11',
    description: 'The location of the user',
  })
  @IsNotEmpty({ message: 'The user field is required.' })
  location: string;

  @ApiProperty({ example: 'male', description: 'The gender of the user' })
  @IsNotEmpty({ message: 'The gender field is required.' })
  gender: string;

  @ApiProperty({ example: true, description: 'The active of the ask' })
  @IsNotEmpty({ message: 'The text field is required.' })
  isActive: boolean;
}
